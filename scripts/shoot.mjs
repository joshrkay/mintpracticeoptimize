// Walks a page top to bottom, capturing a frame at every step, and writes a contact
// sheet so each scroll position can be inspected. Reports consecutive frames that
// barely differ (dead scroll).
// Usage: node scripts/shoot.mjs <url> <out-dir> [--width 1440] [--height 900] [--reduced-motion]
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const sharp = require("sharp");

const [url, out, ...flags] = process.argv.slice(2);
const flag = (name, fallback) => (flags.includes(name) ? Number(flags[flags.indexOf(name) + 1]) : fallback);
const width = flag("--width", 1440);
const height = flag("--height", 900);
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await (
  await browser.newContext({
    viewport: { width, height },
    reducedMotion: flags.includes("--reduced-motion") ? "reduce" : "no-preference",
  })
).newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const total = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
const step = Math.round(height * 0.45);
const frames = [];
for (let y = 0; ; y = Math.min(total, y + step)) {
  await page.evaluate((v) => scrollTo(0, v), y);
  await page.waitForTimeout(650);
  frames.push({ y, png: await page.screenshot() });
  if (y >= total) break;
}

// Dead scroll: neighbouring frames that are nearly the same picture.
const small = await Promise.all(frames.map((f) => sharp(f.png).resize(96, 60, { fit: "fill" }).greyscale().raw().toBuffer()));
const dead = [];
for (let i = 1; i < small.length; i++) {
  let diff = 0;
  for (let p = 0; p < small[i].length; p++) diff += Math.abs(small[i][p] - small[i - 1][p]);
  if (diff / small[i].length < 1.2) dead.push(`${frames[i - 1].y} to ${frames[i].y}`);
}

const cols = 6;
const tw = 320;
const th = Math.round((tw * height) / width);
const rows = Math.ceil(frames.length / cols);
const tiles = await Promise.all(frames.map((f) => sharp(f.png).resize(tw, th).png().toBuffer()));
await sharp({ create: { width: cols * tw, height: rows * th, channels: 3, background: "#222" } })
  .composite(tiles.map((input, i) => ({ input, left: (i % cols) * tw, top: Math.floor(i / cols) * th })))
  .png()
  .toFile(`${out}/sheet.png`);

const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
console.log(
  `${out}: ${frames.length} frames over ${Math.round((total + height) / height * 10) / 10} viewports; ` +
    `dead scroll: ${dead.length ? dead.join(", ") : "none"}; sideways overflow: ${overflow}; errors: ${errors.length ? errors.join(" | ") : "none"}`,
);
await browser.close();
