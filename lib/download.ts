import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL, OFFICIAL_ANDROID_URL, OFFICIAL_IOS_URL } from "@/lib/site";

export const DOWNLOAD_JSON_LD: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Get FR Legends", item: `${SITE_URL}/download/` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Official FR Legends app store listings",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "FR Legends on Google Play", url: OFFICIAL_ANDROID_URL },
      { "@type": "ListItem", position: 2, name: "FR Legends on the Apple App Store", url: OFFICIAL_IOS_URL },
    ],
  },
];

export const downloadMetadata: Metadata = {
  title: "Get FR Legends from the Official App Stores",
  description: "Official Google Play and Apple App Store links for FR Legends. Check publisher, device compatibility and availability on the store listing.",
  alternates: { canonical: `${SITE_URL}/download/` },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Get FR Legends from the Official App Stores",
    description: "Official Google Play and Apple App Store links for FR Legends.",
    url: `${SITE_URL}/download/`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get FR Legends from the Official App Stores",
    description: "Official Google Play and Apple App Store links for FR Legends.",
    images: [OG_IMAGE],
  },
};
