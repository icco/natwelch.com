import type { MetadataRoute } from "next"

import { allPages } from "contentlayer/generated"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://natwelch.com"

  // Static routes
  const staticRoutes = ["", "/feed.rss", "/wiki"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Dynamic wiki routes
  const wikiRoutes = allPages.map((page) => ({
    url: `${baseUrl}/wiki/${page._raw.flattenedPath}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...wikiRoutes]
}
