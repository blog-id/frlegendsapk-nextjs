import type { Metadata } from "next";

export type PageMeta = {
  slug: string;
  title: string;
  description: string;
  jsonLd: Record<string, unknown>[];
};

export const LEGAL_PAGES: Record<string, PageMeta> = {
  "about-us": {
    slug: "about-us",
    title: "About Us - FR Legends Mod Apk",
    description: "Who runs frlegendmodapk.com and why. Our mission: safe FR Legends Mod Apk downloads, accurate guides, and honest content.",
    jsonLd: [{"@context":"https://schema.org","@type":"Organization","name":"FR Legends Mod Apk","url":"https://frlegendmodapk.com/","logo":"https://frlegendmodapk.com/assets/icons/fr-legends-logo.png","sameAs":["https://www.tiktok.com/@frlegends467","https://www.youtube.com/@frlegends467"]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://frlegendmodapk.com/"},{"@type":"ListItem","position":2,"name":"About Us","item":"https://frlegendmodapk.com/about-us/"}]}],
  },
  "contact-us": {
    slug: "contact-us",
    title: "Contact Us - FR Legends Mod Apk",
    description: "Get in touch with the FR Legends Mod Apk team, downloads, technical issues, livery codes, or legal matters.",
    jsonLd: [{"@context":"https://schema.org","@type":"Organization","name":"FR Legends Mod Apk","url":"https://frlegendmodapk.com/","logo":"https://frlegendmodapk.com/assets/icons/fr-legends-logo.png","sameAs":["https://www.tiktok.com/@frlegends467","https://www.youtube.com/@frlegends467"]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://frlegendmodapk.com/"},{"@type":"ListItem","position":2,"name":"Contact Us","item":"https://frlegendmodapk.com/contact-us/"}]}],
  },
  "disclaimer": {
    slug: "disclaimer",
    title: "Disclaimer - FR Legends Mod Apk",
    description: "Legal disclaimer for frlegendmodapk.com: trademarks, mod use at your own risk, and content accuracy.",
    jsonLd: [{"@context":"https://schema.org","@type":"Organization","name":"FR Legends Mod Apk","url":"https://frlegendmodapk.com/","logo":"https://frlegendmodapk.com/assets/icons/fr-legends-logo.png","sameAs":["https://www.tiktok.com/@frlegends467","https://www.youtube.com/@frlegends467"]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://frlegendmodapk.com/"},{"@type":"ListItem","position":2,"name":"Disclaimer","item":"https://frlegendmodapk.com/disclaimer/"}]}],
  },
  "dmca": {
    slug: "dmca",
    title: "DMCA - FR Legends Mod Apk",
    description: "DMCA notice and takedown procedure for content hosted on frlegendmodapk.com.",
    jsonLd: [{"@context":"https://schema.org","@type":"Organization","name":"FR Legends Mod Apk","url":"https://frlegendmodapk.com/","logo":"https://frlegendmodapk.com/assets/icons/fr-legends-logo.png","sameAs":["https://www.tiktok.com/@frlegends467","https://www.youtube.com/@frlegends467"]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://frlegendmodapk.com/"},{"@type":"ListItem","position":2,"name":"DMCA","item":"https://frlegendmodapk.com/dmca/"}]}],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy - FR Legends Mod Apk",
    description: "How frlegendmodapk.com handles data: what we collect, why, and your choices.",
    jsonLd: [{"@context":"https://schema.org","@type":"Organization","name":"FR Legends Mod Apk","url":"https://frlegendmodapk.com/","logo":"https://frlegendmodapk.com/assets/icons/fr-legends-logo.png","sameAs":["https://www.tiktok.com/@frlegends467","https://www.youtube.com/@frlegends467"]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://frlegendmodapk.com/"},{"@type":"ListItem","position":2,"name":"Privacy Policy","item":"https://frlegendmodapk.com/privacy-policy/"}]}],
  },
  "terms-conditions": {
    slug: "terms-conditions",
    title: "Terms & Conditions - FR Legends Mod Apk",
    description: "Terms and conditions for using frlegendmodapk.com: site usage rules, mod apk downloads, intellectual property, and limitation of liability.",
    jsonLd: [{"@context":"https://schema.org","@type":"Organization","name":"FR Legends Mod Apk","url":"https://frlegendmodapk.com/","logo":"https://frlegendmodapk.com/assets/icons/fr-legends-logo.png","sameAs":["https://www.tiktok.com/@frlegends467","https://www.youtube.com/@frlegends467"]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://frlegendmodapk.com/"},{"@type":"ListItem","position":2,"name":"Terms & Conditions","item":"https://frlegendmodapk.com/terms-conditions/"}]}],
  },
};

export function legalMetadata(slug: string): Metadata {
  const p = LEGAL_PAGES[slug];
  const url = `https://frlegendmodapk.com/${slug}/`;
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "FR Legends Mod Apk",
      title: p.title,
      description: p.description,
      url,
      images: [{ url: `https://frlegendmodapk.com/assets/images/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
      images: [`https://frlegendmodapk.com/assets/images/og-image.jpg`],
    },
  };
}
