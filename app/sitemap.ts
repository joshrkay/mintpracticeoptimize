import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Questionnaires are sent by direct link and deliberately left out.
const routes = ["", "/services", "/podiatry", "/for-your-team", "/discovery", "/compare", "/faq", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
