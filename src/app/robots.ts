import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Retrieve base URL from environment or default to production domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://volunteer-with-diwasi.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
