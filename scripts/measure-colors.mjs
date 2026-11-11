// Measures how much of each page is neutral, green and accent, to check the
// 60-30-10 colour rule. Needs the site running: node scripts/measure-colors.mjs http://localhost:3000
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const sharp = require("sharp");

const base = process.argv[2] ?? "http://localhost:3000";
const pages = ["/", "/services", "/discovery", "/podiatry", "/arizona/mesa", "/compare", "/faq", "/contact"];
const palette = [
  ["neutral", [244, 248, 241]],
  ["neutral", [255, 255, 255]],
  ["neutral", [211, 227, 216]],
  ["green", [11, 34, 25]],
  ["green", [23, 105, 76]],
  ["green", [219, 243, 228]],
  ["green", [74, 97, 86]],
  ["accent", [205, 245, 106]],
];

const browser = await chromium.launch();
// Reduced motion shows every section fully revealed and every plant grown.
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const page = await context.newPage();
const rows = [];
for (const path of pages) {
  await page.goto(base + path, { waitUntil: "networkidle" });
  const { data } = await sharp(await page.screenshot({ fullPage: true })).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const count = { neutral: 0, green: 0, accent: 0, artwork: 0 };
  for (let i = 0; i < data.length; i += 3 * 7) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // Leaf artwork: saturated yellow-green, which no palette colour is.
    if (g === max && r > b + 18 && max - min > 60 && !(r > 180 && g > 225)) {
      count.artwork++;
      continue;
    }
    let best = "neutral";
    let bestD = Infinity;
    for (const [role, [pr, pg, pb]] of palette) {
      const d = (r - pr) ** 2 + (g - pg) ** 2 + (b - pb) ** 2;
      if (d < bestD) [best, bestD] = [role, d];
    }
    count[best]++;
  }
  const total = count.neutral + count.green + count.accent;
  const pct = (n) => `${Math.round((n / total) * 100)}%`.padStart(4);
  rows.push(`${path.padEnd(16)} neutral ${pct(count.neutral)}   green ${pct(count.green)}   accent ${pct(count.accent)}`);
}
console.log(rows.join("\n"));
await browser.close();
