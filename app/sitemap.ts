import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { LEGAL_PAGES } from "@/lib/pages-meta";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = Object.values(ARTICLES).map((a) => ({
    url: `${SITE_URL}/${a.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: a.dateModified || a.datePublished || undefined,
  }));

  const legalPages: MetadataRoute.Sitemap = Object.keys(LEGAL_PAGES).map((slug) => ({
    url: `${SITE_URL}/${slug}/`,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticPages, ...articlePages, ...legalPages];
}
