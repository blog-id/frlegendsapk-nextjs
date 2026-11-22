import type { Metadata } from "next";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const HOME_FAQ_ITEMS = [
  { question: "Is this the official FR Legends website?", answerHtml: "<p>No. This is an independent fan-made guide website. It is not affiliated with, sponsored by, or endorsed by Twin Turbo Games or the people who develop FR Legends.</p>" },
  { question: "Where can I get the official FR Legends game?", answerHtml: "<p>Use the official Google Play listing for Android or the Apple App Store listing for iPhone and iPad. Store pages show the publisher, device compatibility, regional availability and current release information.</p>" },
  { question: "Does this site provide modified APK files?", answerHtml: "<p>No. This website does not host, create, link to, or distribute modified game packages, unofficial APKs, cheats or altered copies. The download page links to official app stores only.</p>" },
  { question: "Are the tuning suggestions guaranteed to work for every player?", answerHtml: "<p>No single setup is ideal for every car, track or driving preference. Treat general setup suggestions as starting points, change one setting at a time and compare the result in your own game version.</p>" },
];

export const FAQPAGE_JSON_LD: object = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answerHtml.replace(/<[^>]*>/g, "") },
  })),
};

export const homeMetadata: Metadata = {
  title: "FR Legends Fan Guides: Drifting, Tuning, Cars and Tracks",
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "FR Legends Fan Guides: Drifting, Tuning, Cars and Tracks",
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FR Legends Fan Guides: Drifting, Tuning, Cars and Tracks",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};
