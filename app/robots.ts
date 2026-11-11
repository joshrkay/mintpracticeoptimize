import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Open to search engines and AI crawlers alike; being quoted by assistants is a goal.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
