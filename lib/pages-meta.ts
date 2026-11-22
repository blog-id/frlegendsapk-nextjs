import type { Metadata } from "next";
import { LOGO, OG_IMAGE, SITE_NAME, SITE_URL, SOCIAL } from "@/lib/site";

export type PageMeta = {
  slug: string;
  title: string;
  description: string;
  jsonLd: Record<string, unknown>[];
};

const descriptions: Record<string, string> = {
  "about-us": "Learn about this independent FR Legends fan-guide website, its purpose and its relationship to the game developer.",
  "contact-us": "Contact the FR Legends Fan Guides site operator about corrections, broken links, editorial questions or rights concerns.",
  "disclaimer": "Important information about independence, trademarks, third-party links and the limits of FR Legends gameplay guides.",
  "dmca": "How to contact this website about copyright, trademark and other intellectual-property concerns.",
  "editorial-policy": "How FR Legends Fan Guides researches, writes, reviews and corrects independent gameplay articles.",
  "privacy-policy": "Read how this website handles technical logs, Google Analytics, advertising technologies, email enquiries and external links.",
  "terms-conditions": "Terms for accessing and using this independent FR Legends fan-guide website.",
};
const titles: Record<string, string> = {
  "about-us": "About Us",
  "contact-us": "Contact Us",
  "disclaimer": "Disclaimer",
  "dmca": "Copyright and DMCA",
  "editorial-policy": "Editorial Policy",
  "privacy-policy": "Privacy Policy",
  "terms-conditions": "Terms and Conditions",
};

export const LEGAL_PAGES: Record<string, PageMeta> = Object.fromEntries(
  Object.entries(descriptions).map(([slug, description]) => {
    const title = titles[slug];
    const url = `${SITE_URL}/${slug}/`;
    return [slug, {
      slug,
      title: `${title} | ${SITE_NAME}`,
      description,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          logo: LOGO,
          sameAs: [SOCIAL.tiktok, SOCIAL.youtube],
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: title, item: url },
          ],
        },
      ],
    }];
  }),
);

export function legalMetadata(slug: string): Metadata {
  const page = LEGAL_PAGES[slug];
  const url = `${SITE_URL}/${slug}/`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [OG_IMAGE],
    },
  };
}
