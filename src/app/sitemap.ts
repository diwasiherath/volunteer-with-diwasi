import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

export const dynamic = "force-static";

const baseUrl = "https://volunteerworkinsrilanka.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/", "/about", "/apply", "/contact",
    "/gallery", "/places", "/projects", "/reviews", "/blog"
  ];

  const blogRoutes = BLOG_POSTS.map((post) => `/blog/${post.slug}`);
  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-06-26"), // stable date improves crawl trust
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1.0 : path.startsWith("/blog/") ? 0.6 : 0.7,
  }));
}