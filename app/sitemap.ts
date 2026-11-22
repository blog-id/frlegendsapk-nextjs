import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { LEGAL_PAGES } from "@/lib/pages-meta";
import { BLOG_POST_SLUGS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/download/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/fr-legends-cars-list/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/fr-legends-livery-codes/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
  const articlePages: MetadataRoute.Sitemap = BLOG_POST_SLUGS
    .filter((slug) => Boolean(ARTICLES[slug]))
    .map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      changeFrequency: "monthly",
      priority: 0.75,
      lastModified: ARTICLES[slug].dateModified || ARTICLES[slug].datePublished || undefined,
    }));
  const legalPages: MetadataRoute.Sitemap = Object.keys(LEGAL_PAGES).map((slug) => ({
    url: `${SITE_URL}/${slug}/`,
    changeFrequency: "yearly",
    priority: 0.25,
  }));
  return [...staticPages, ...articlePages, ...legalPages];
}
