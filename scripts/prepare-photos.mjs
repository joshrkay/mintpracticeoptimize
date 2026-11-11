// Turns the photographs in photos-source into the artwork the site uses:
// cut-out sprigs, a single cut-out leaf, and a background image.
// Run with: node scripts/prepare-photos.mjs
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const sharp = createRequire(import.meta.url)("sharp");
const SRC = "photos-source";
mkdirSync("public/photos", { recursive: true });
mkdirSync("public/leaves", { recursive: true });

const smooth = (a, b, v) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/**
 * Cuts a green subject out of a white studio background. The backdrop and its
 * soft shadows have almost no colour; the plant does. Returns an RGBA image.
 */
async function cutOut(file) {
  const { data, info } = await sharp(`${SRC}/${file}`).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  let alpha = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) {
    const [r, g, b] = [data[i * 3], data[i * 3 + 1], data[i * 3 + 2]];
    const min = Math.min(r, g, b);
    const chroma = Math.max(r, g, b) - min;
    // Shadows pick up a green cast from the leaves; they are pale, so ask more of pale pixels.
    const need = min > 150 ? 46 + (min - 150) * 0.5 : 16;
    alpha[i] = 255 * smooth(need, need + 28, chroma);
  }
  // Bright highlights on a glossy leaf look like backdrop. Anything transparent
  // that the outside cannot reach is a hole in the plant, so fill it.
  const outside = new Uint8Array(alpha.length);
  const queue = [];
  for (let x = 0; x < width; x++) queue.push(x, (height - 1) * width + x);
  for (let y = 0; y < height; y++) queue.push(y * width, y * width + width - 1);
  while (queue.length) {
    const p = queue.pop();
    if (outside[p] || alpha[p] >= 128) continue;
    outside[p] = 1;
    const x = p % width;
    if (x > 0) queue.push(p - 1);
    if (x < width - 1) queue.push(p + 1);
    if (p >= width) queue.push(p - width);
    if (p < alpha.length - width) queue.push(p + width);
  }
  for (let i = 0; i < alpha.length; i++) if (!outside[i]) alpha[i] = 255;
  // Erode by a pixel to drop the white fringe.
  const eroded = new Uint8Array(alpha.length);
  for (let y = 1; y < height - 1; y++)
    for (let x = 1; x < width - 1; x++) {
      let m = 255;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) m = Math.min(m, alpha[(y + dy) * width + x + dx]);
      eroded[y * width + x] = m;
    }
  alpha = eroded;
  // Drop stray flecks: keep only regions of a meaningful size.
  const label = new Int32Array(alpha.length);
  const sizes = [0];
  for (let start = 0; start < alpha.length; start++) {
    if (alpha[start] < 128 || label[start]) continue;
    const id = sizes.length;
    let size = 0;
    const stack = [start];
    label[start] = id;
    while (stack.length) {
      const p = stack.pop();
      size++;
      for (const q of [p - 1, p + 1, p - width, p + width]) {
        if (q >= 0 && q < alpha.length && alpha[q] >= 128 && !label[q]) {
          label[q] = id;
          stack.push(q);
        }
      }
    }
    sizes.push(size);
  }
  const keep = Math.max(...sizes) * 0.02;
  for (let i = 0; i < alpha.length; i++) if (!label[i] || sizes[label[i]] < keep) alpha[i] = Math.min(alpha[i], label[i] ? 0 : alpha[i] < 128 ? 0 : alpha[i]);
  // Close pinholes and take the white fringe off the edge.
  const mask = await sharp(Buffer.from(alpha), { raw: { width, height, channels: 1 } })
    .blur(0.8)
    .linear(1.6, -60)
    .extractChannel(0)
    .raw()
    .toBuffer({ resolveWithObject: true });
  if (mask.info.channels !== 1) throw new Error("mask must be single channel");
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    // Anything left of the backdrop must be fully clear, or it shows as a haze.
    rgba[i * 4 + 3] = mask.data[i] < 40 ? 0 : mask.data[i];
  }
  return sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

// 1. The full sprig seen from above.
const crown = await cutOut("istockphoto-1131562141-612x612.jpg");
await sharp(crown).trim().webp({ quality: 88, alphaQuality: 95 }).toFile("public/photos/mint-crown.webp");

// 2. The sprig on its stem, stood upright so it can grow from the base.
const sprig = await cutOut("istockphoto-183754081-612x612.jpg");
await sharp(sprig)
  .rotate(52, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .trim()
  .webp({ quality: 88, alphaQuality: 95 })
  .toFile("public/photos/mint-sprig.webp");

// 3. One leaf, lifted from the base of that sprig, tip up, in the frame the
//    leaf components expect: 480 x 660 proportions, base at the bottom centre.
const leaf = await sharp(
  await sharp(sprig).extract({ left: 356, top: 228, width: 152, height: 122 }).png().toBuffer(),
)
  .rotate(-97, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .trim()
  .resize({ height: 301, width: 232, fit: "inside" })
  .png()
  .toBuffer();
const meta = await sharp(leaf).metadata();
const framed = await sharp({ create: { width: 240, height: 330, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: leaf, left: Math.round((240 - meta.width) / 2), top: 314 - meta.height }])
  .png()
  .toBuffer();
await sharp(framed).webp({ quality: 90, alphaQuality: 95 }).toFile("public/leaves/leaf-1.webp");
await sharp(framed).flop().webp({ quality: 90, alphaQuality: 95 }).toFile("public/leaves/leaf-2.webp");
await sharp(framed).modulate({ brightness: 0.94, hue: 8 }).webp({ quality: 90, alphaQuality: 95 }).toFile("public/leaves/leaf-3.webp");

// 4. The dark close-up, for behind forest bands.
await sharp(`${SRC}/mint-good-GettyImages-2216675819-Header-1024x575.avif`)
  .webp({ quality: 80 })
  .toFile("public/photos/mint-dark.webp");

console.log("done");
