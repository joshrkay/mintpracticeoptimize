import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { practiceTypes } from "@/lib/practice-types";
import { site } from "@/lib/site";

// Questionnaires are sent by direct link and deliberately left out.
const routes = [
  "",
  "/services",
  "/practice-types",
  ...practiceTypes.map((t) => `/${t.slug}`),
  "/arizona",
  ...cities.map((c) => `/arizona/${c.slug}`),
  "/for-your-team",
  "/discovery",
  "/compare",
  "/faq",
  "/contact",
  "/site-map",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
