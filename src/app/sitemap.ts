import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://volunteerworkinsrilanka.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/", "/about", "/apply", "/contact",
    "/gallery", "/places", "/projects", "/reviews"
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-06-26"), // stable date improves crawl trust
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1.0 : 0.7,
  }));
}