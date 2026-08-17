export const SITE_NAME = "FR Legends Mod Apk";
export const SITE_URL = "https://frlegendmodapk.com";
export const SITE_DESCRIPTION =
  "Download FR Legends Mod APK V0.4.7 free with unlimited money, unlocked cars and tracks, ad-free gameplay and mod menu options. Latest 2026 version.";
export const OG_IMAGE = `${SITE_URL}/assets/images/og-image.jpg`;
export const LOGO = `${SITE_URL}/assets/icons/fr-legends-logo.png`;
export const SOCIAL = {
  tiktok: "https://www.tiktok.com/@frlegends467",
  youtube: "https://www.youtube.com/@frlegends467",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/download/", label: "Download", cta: true },
  { href: "/fr-legends-mod-apk-for-pc/", label: "For PC" },
  { href: "/fr-legends-mod-apk-ios/", label: "For iOS" },
  { href: "/fr-legends-livery-codes/", label: "Livery Codes" },
  { href: "/fr-legends-cars-list/", label: "Cars List" },
  { href: "/blog/", label: "Blog" },
  { href: "/fr-legends-2-mod-apk/", label: "FR Legends 2" },
];

export const FOOTER_DOWNLOADS = [
  { href: "/fr-legends-mod-apk-old-versions/", label: "Old Versions" },
  { href: "/fr-legends-supra-mod-apk/", label: "Supra Mod" },
  { href: "/fr-legends-rx7-mod-livery-codes/", label: "RX-7 Mod" },
  { href: "/fr-legends-bmw-drift-mods/", label: "BMW Drift Mods" },
];

export const FOOTER_GUIDES = [
  { href: "/how-to-drift-in-fr-legends/", label: "How to Drift" },
  { href: "/fr-legends-best-drift-settings-tuning-guide/", label: "Tuning Guide" },
  { href: "/fr-legends-livery-codes/", label: "Livery Codes" },
  { href: "/fr-legends-car-tier-list/", label: "Car Tier List" },
  { href: "/best-beginner-car-in-fr-legends/", label: "Best Beginner Car" },
];

export const FOOTER_LEGAL = [
  { href: "/dmca/", label: "DMCA" },
  { href: "/about-us/", label: "About Us" },
  { href: "/terms-conditions/", label: "Terms & Conditions" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/contact-us/", label: "Contact Us" },
];

export const FOOTER_BRAND =
  "Free FR Legends Mod Apk downloads, livery codes, tuning guides and news - updated regularly.";

export const FOOTER_COPYRIGHT =
  "frlegendmodapk.com \u00b7 All rights reserved. FR Legends is a trademark of Twin Turbo Tech. This site is not affiliated with or endorsed by the game's developers.";

export const APK_DOWNLOAD_URL =
  "https://github.com/frlegendsmodapk/latest-version/releases/download/download/fr-legends-mod-0.4.7.apk";

/** Map a legacy relative .html href to its clean Next.js URL. */
export function cleanUrl(href: string): string {
  const rel = href.replace(/^\.\/|^\.\.\//, "");
  if (rel === "index.html") return "/";
  if (rel === "blog/index.html") return "/blog/";
  if (rel.endsWith(".html")) return `/${rel.replace(/\.html$/, "")}/`;
  return href;
}

/** Blog post slugs: article pages under the root that belong to the blog section. */
export const BLOG_POST_SLUGS = [
  "best-anime-jdm-livery-codes",
  "best-beginner-car-in-fr-legends",
  "fr-legends-battle-mode-guide",
  "fr-legends-best-drift-settings-tuning-guide",
  "fr-legends-car-tier-list",
  "fr-legends-controller-support",
  "fr-legends-mod-apk-not-installing-fix",
  "fr-legends-new-cars-update-log",
  "fr-legends-tracks-list",
  "fr-legends-vs-fr-legends-2",
  "how-fr-legends-livery-codes-work",
  "how-to-build-the-perfect-drift-car",
  "how-to-drift-in-fr-legends",
  "how-to-get-free-coins-in-fr-legends",
  "is-fr-legends-mod-apk-safe",
];