// Renders the mint leaf artwork in public/leaves.
// Each leaf is shaded pixel by pixel from a height map: a network of veins with
// raised cells between them, a fold along the midrib and a curled margin.
// Run with: node scripts/render-leaves.mjs [contact-sheet.png]   (needs Playwright's Chromium)
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const sharp = require("sharp");

const W = 480;
const H = 660;
const BASE_Y = 628;
const TIP_Y = 26;
const LEN = BASE_Y - TIP_Y;

function rng(seed) {
  let s = seed * 2654435761;
  return () => ((s = Math.imul(s ^ (s >>> 15), 2246822519) ^ Math.imul(s ^ (s >>> 13), 3266489917)), ((s >>> 0) % 10000) / 10000);
}

/** Outline, midrib and lateral veins for one leaf, as point lists. */
function geometry({ seed, halfWidth, bend, teeth, lean }) {
  const rand = rng(seed);
  const midX = (t) => W / 2 + bend * Math.sin(Math.PI * t) + bend * 0.4 * t * t;
  const yAt = (t) => BASE_Y - LEN * t;
  const widthAt = (t) => halfWidth * Math.sin(Math.PI * t ** 0.66) ** 0.62;

  const edge = (dir) => {
    const pts = [];
    const depths = Array.from({ length: teeth + 2 }, () => 0.045 + rand() * 0.04);
    const steps = teeth * 16;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const pos = t * teeth;
      const k = pos % 1;
      const fade = Math.min(1, t / 0.16) * Math.min(1, (1 - t) / 0.05);
      const tooth = depths[Math.floor(pos)] * (k < 0.8 ? (k / 0.8) ** 1.2 : Math.cos(((k - 0.8) / 0.2) * Math.PI * 0.5) ** 2) * fade;
      const wobble = 1 + 0.03 * Math.sin(t * 23 + seed + dir);
      pts.push([midX(t) + dir * widthAt(t) * (dir === 1 ? 1 : lean) * wobble * (1 + tooth), yAt(t)]);
    }
    return pts;
  };
  const outline = [...edge(1), ...edge(-1).reverse()];

  const midrib = Array.from({ length: 41 }, (_, i) => [midX(i / 40), yAt(i / 40)]);
  midrib.unshift([midX(0), BASE_Y + 26]);

  const veins = [];
  const n = 8;
  for (let i = 0; i < n; i++) {
    const t0 = 0.06 + (i / n) * 0.8 + (rand() - 0.5) * 0.02;
    for (const dir of [1, -1]) {
      const reach = 0.19 + rand() * 0.04;
      const t1 = Math.min(0.975, t0 + reach);
      const side = dir === 1 ? 1 : lean;
      const p0 = [midX(t0), yAt(t0)];
      const p2 = [midX(t1) + dir * widthAt(t1) * side * 0.97, yAt(t1)];
      const p1 = [p0[0] + dir * widthAt(t0) * side * 0.55, yAt(t0 + reach * 0.22)];
      veins.push(
        Array.from({ length: 19 }, (_, j) => {
          const u = j / 18;
          return [0, 1].map((a) => (1 - u) ** 2 * p0[a] + 2 * (1 - u) * u * p1[a] + u * u * p2[a]);
        }),
      );
    }
  }
  return { outline, midrib, veins };
}

/** Runs in the browser: shades one leaf and returns it as a PNG data URL. */
function shade({ W, H, seed, hue, outline, midrib, veins }) {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Coverage mask, antialiased by the canvas.
  ctx.beginPath();
  outline.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();
  const mask = ctx.getImageData(0, 0, W, H).data;
  const alpha = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) alpha[i] = mask[i * 4 + 3] / 255;

  let s = seed * 9301 + 49297;
  const rand = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff), s / 0x7fffffff);

  // Distance from the margin, by repeated box blur of the mask.
  const inner = Float32Array.from(alpha);
  const tmp = new Float32Array(W * H);
  const blur = (src, dst, r, horizontal) => {
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++) {
        let sum = 0;
        for (let k = -r; k <= r; k++) {
          const xx = horizontal ? Math.min(W - 1, Math.max(0, x + k)) : x;
          const yy = horizontal ? y : Math.min(H - 1, Math.max(0, y + k));
          sum += src[yy * W + xx];
        }
        dst[y * W + x] = sum / (2 * r + 1);
      }
  };
  for (let pass = 0; pass < 2; pass++) {
    blur(inner, tmp, 9, true);
    blur(tmp, inner, 9, false);
  }

  // Cell seeds on a jittered grid: the areas between the fine veins.
  const CELL = 19;
  const cols = Math.ceil(W / CELL) + 2;
  const rows = Math.ceil(H / CELL) + 2;
  const seeds = new Float32Array(cols * rows * 2);
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      seeds[(j * cols + i) * 2] = (i - 1 + 0.02 + rand() * 0.96) * CELL;
      seeds[(j * cols + i) * 2 + 1] = (j - 1 + 0.02 + rand() * 0.96) * CELL;
    }

  const segments = [];
  for (const vein of veins) for (let i = 1; i < vein.length; i++) segments.push([...vein[i - 1], ...vein[i], i / vein.length]);
  const midSegs = [];
  for (let i = 1; i < midrib.length; i++) midSegs.push([...midrib[i - 1], ...midrib[i]]);
  const distTo = (x, y, x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy || 1)));
    return Math.hypot(x - x1 - t * dx, y - y1 - t * dy);
  };
  const smooth = (a, b, v) => {
    const t = Math.max(0, Math.min(1, (v - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  // Smooth value noise for colour drift across the leaf.
  const lattice = new Float32Array(64 * 64).map(() => rand());
  const noise = (x, y) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const fx = smooth(0, 1, x - xi);
    const fy = smooth(0, 1, y - yi);
    const g = (a, b) => lattice[((b & 63) << 6) | (a & 63)];
    return (g(xi, yi) * (1 - fx) + g(xi + 1, yi) * fx) * (1 - fy) + (g(xi, yi + 1) * (1 - fx) + g(xi + 1, yi + 1) * fx) * fy;
  };

  const height = new Float32Array(W * H);
  const net = new Float32Array(W * H); // fine vein network, 1 on a vein
  const major = new Float32Array(W * H); // lateral veins
  const rib = new Float32Array(W * H); // midrib
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const p = y * W + x;
      if (inner[p] < 0.02) continue;
      // Nearest and second-nearest cell seed.
      const ci = Math.floor(x / CELL) + 1;
      const cj = Math.floor(y / CELL) + 1;
      let f1 = 1e9;
      let f2 = 1e9;
      for (let j = cj - 2; j <= cj + 2; j++)
        for (let i = ci - 2; i <= ci + 2; i++) {
          if (i < 0 || j < 0 || i >= cols || j >= rows) continue;
          const d = Math.hypot(x - seeds[(j * cols + i) * 2], y - seeds[(j * cols + i) * 2 + 1]);
          if (d < f1) [f1, f2] = [d, f1];
          else if (d < f2) f2 = d;
        }
      const e = f2 - f1;
      let dv = 1e9;
      let along = 0;
      for (const sg of segments) {
        const d = distTo(x, y, sg[0], sg[1], sg[2], sg[3]);
        if (d < dv) [dv, along] = [d, sg[4]];
      }
      let dm = 1e9;
      let mx = W / 2;
      for (const sg of midSegs) {
        const d = distTo(x, y, sg[0], sg[1], sg[2], sg[3]);
        if (d < dm) [dm, mx] = [d, sg[0]];
      }
      const veinHalf = 3.4 * (1 - along * 0.7);
      net[p] = 1 - smooth(0.3, 2.1, e);
      major[p] = 1 - smooth(veinHalf * 0.5, veinHalf + 1.5, dv);
      rib[p] = 1 - smooth(2, 6.5, dm);
      height[p] =
        2.3 * smooth(0, 12, e) + // each cell bulges
        9 * smooth(0, 26, dv) + // the blade puckers up between lateral veins
        10 * smooth(0, 24, dm) + // midrib is the deepest groove
        0.05 * Math.abs(x - mx) + // the two halves tilt up from the midrib
        26 * smooth(0.05, 0.85, inner[p]) + // the margin curls down
        3 * noise(x / 34, y / 34);
    }
  }

  // Soften the height map so the relief reads as leaf, not as tiles.
  blur(height, tmp, 2, true);
  blur(tmp, height, 2, false);

  const out = ctx.createImageData(W, H);
  const L = [-0.48, -0.56, 0.68];
  const Lm = Math.hypot(...L);
  const Hv = [L[0] / Lm, L[1] / Lm, L[2] / Lm + 1];
  const Hm = Math.hypot(...Hv);
  const hsl = (h, sat, l) => {
    const a = sat * Math.min(l, 1 - l);
    const f = (n) => {
      const k = (n + h / 30) % 12;
      return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    };
    return [f(0), f(8), f(4)];
  };
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const p = y * W + x;
      if (alpha[p] === 0) continue;
      const nx = (height[p - 1] - height[p + 1]) * 0.5;
      const ny = (height[p - W] - height[p + W]) * 0.5;
      const nm = Math.hypot(nx, ny, 1);
      const diffuse = Math.max(0, (nx * L[0] + ny * L[1] + L[2]) / (nm * Lm));
      const spec = Math.max(0, (nx * Hv[0] + ny * Hv[1] + Hv[2]) / (nm * Hm)) ** 22;
      const drift = noise(x / 90 + 7, y / 90 + 3);
      const light = 0.17 + 0.3 * diffuse + 0.05 * drift;
      let [r, g, b] = hsl(hue - 12 * drift, 0.6, light);
      // Veins are paler and yellower than the blade.
      const v = Math.max(net[p] * 0.42, major[p] * 0.7, rib[p] * 0.85);
      const [vr, vg, vb] = hsl(hue - 30, 0.52, 0.5 + 0.16 * diffuse);
      r += (vr - r) * v;
      g += (vg - g) * v;
      b += (vb - b) * v;
      // Thin margins let light through; the very edge is in shade.
      const rim = 1 - smooth(0.1, 0.55, inner[p]);
      const k = 1 - 0.3 * rim;
      const gloss = spec * 0.22 * (1 - v);
      out.data[p * 4] = 255 * Math.min(1, r * k + gloss);
      out.data[p * 4 + 1] = 255 * Math.min(1, g * k + gloss);
      out.data[p * 4 + 2] = 255 * Math.min(1, b * k + gloss * 0.85);
      out.data[p * 4 + 3] = 255 * alpha[p];
    }
  }
  ctx.clearRect(0, 0, W, H);
  ctx.putImageData(out, 0, 0);
  // Petiole.
  ctx.globalCompositeOperation = "destination-over";
  ctx.strokeStyle = `hsl(${hue - 22} 45% 42%)`;
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(midrib[0][0], midrib[0][1]);
  ctx.lineTo(midrib[2][0], midrib[2][1]);
  ctx.stroke();
  return canvas.toDataURL("image/png");
}

const variants = [
  { seed: 3, halfWidth: 162, bend: 12, teeth: 15, hue: 104, lean: 0.92 },
  { seed: 11, halfWidth: 150, bend: -16, teeth: 14, hue: 99, lean: 1.06 },
  { seed: 29, halfWidth: 170, bend: 7, teeth: 16, hue: 108, lean: 0.88 },
];

mkdirSync("public/leaves", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
const sheet = [];
for (const [i, v] of variants.entries()) {
  const url = await page.evaluate(shade, { W, H, seed: v.seed, hue: v.hue, ...geometry(v) });
  const png = Buffer.from(url.split(",")[1], "base64");
  await sharp(png).webp({ quality: 86, alphaQuality: 92 }).toFile(`public/leaves/leaf-${i + 1}.webp`);
  sheet.push(url);
}
if (process.argv[2]) {
  await page.setViewportSize({ width: W * 3, height: H });
  await page.setContent(`<body style="margin:0;background:#fff;display:flex">${sheet.map((u) => `<img src="${u}">`).join("")}`);
  await page.screenshot({ path: process.argv[2] });
}
await browser.close();
