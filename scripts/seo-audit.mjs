// Audits every page in the sitemap for the basics search engines and AI assistants read.
// Usage: node scripts/seo-audit.mjs http://localhost:3000
import { createRequire } from "node:module";

const { chromium } = createRequire(import.meta.url)("playwright");
const base = process.argv[2] ?? "http://localhost:3000";
const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...xml.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map((m) => m[1] || "/");

const browser = await chromium.launch();
// JavaScript off: this is what a crawler that does not run scripts receives.
const page = await (await browser.newContext({ javaScriptEnabled: false })).newPage();
const titles = new Map();
const descs = new Map();
const links = new Set();
let problems = 0;
for (const path of paths) {
  const res = await page.goto(base + path);
  const d = await page.evaluate(() => {
    const meta = (sel) => document.querySelector(sel)?.getAttribute("content") ?? "";
    const heads = [...document.querySelectorAll("h1,h2,h3,h4")].map((h) => Number(h.tagName[1]));
    let skip = false;
    for (let i = 1; i < heads.length; i++) if (heads[i] - heads[i - 1] > 1) skip = true;
    return {
      title: document.title,
      desc: meta('meta[name="description"]'),
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? "",
      robots: meta('meta[name="robots"]'),
      ogTitle: meta('meta[property="og:title"]'),
      ogDesc: meta('meta[property="og:description"]'),
      ogImage: meta('meta[property="og:image"]'),
      h1: [...document.querySelectorAll("h1")].map((h) => h.textContent.trim()),
      skip,
      words: document.querySelector("main").innerText.split(/\s+/).length,
      ld: [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) => {
        const j = JSON.parse(s.textContent);
        return j["@graph"] ? j["@graph"].map((g) => g["@type"]) : [j["@type"]];
      }),
      imgNoAlt: [...document.querySelectorAll("img:not([alt])")].length,
      links: [...document.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href").split("#")[0]),
      lang: document.documentElement.lang,
    };
  });
  d.links.forEach((l) => links.add(l));
  const issues = [];
  if (res.status() !== 200) issues.push(`status ${res.status()}`);
  if (d.title.length > 60) issues.push(`title ${d.title.length} chars`);
  if (d.desc.length < 70 || d.desc.length > 160) issues.push(`description ${d.desc.length} chars`);
  if (!d.canonical.endsWith(path === "/" ? "www.practiceoptimize.com/" : path)) issues.push(`canonical ${d.canonical}`);
  if (d.h1.length !== 1) issues.push(`${d.h1.length} h1`);
  if (d.skip) issues.push("heading level skipped");
  if (!d.ogTitle || !d.ogDesc || !d.ogImage) issues.push("open graph incomplete");
  if (d.imgNoAlt) issues.push(`${d.imgNoAlt} img without alt`);
  if (d.robots.includes("noindex")) issues.push("noindex but in sitemap");
  if (titles.has(d.title)) issues.push(`title duplicates ${titles.get(d.title)}`);
  if (descs.has(d.desc)) issues.push(`description duplicates ${descs.get(d.desc)}`);
  titles.set(d.title, path);
  descs.set(d.desc, path);
  problems += issues.length;
  console.log(`${path.padEnd(22)} ${String(d.words).padStart(4)}w  ld:${d.ld.join(",")}\n   ${issues.length ? issues.join("; ") : "ok"}`);
}
const broken = [];
for (const l of links) {
  const r = await fetch(base + l, { redirect: "manual" });
  if (r.status !== 200) broken.push(`${l} ${r.status}`);
}
const orphans = paths.filter((p) => p !== "/" && !links.has(p));
console.log(`\ninternal links: ${links.size}, broken: ${broken.join(", ") || "none"}; in sitemap but not linked: ${orphans.join(", ") || "none"}`);
console.log(`issues: ${problems}`);
await browser.close();
