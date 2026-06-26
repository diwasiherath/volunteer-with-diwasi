import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://volunteerworkinsrilanka.com";

  const routes = [
    { path: "/", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/apply", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.6 },
    { path: "/places", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/projects", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/reviews", changeFrequency: "daily" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}