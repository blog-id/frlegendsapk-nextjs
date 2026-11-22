export const SITE_NAME = "FR Legends Fan Guides";
export const SITE_URL = "https://frlegendmodapk.com";
export const SITE_DESCRIPTION =
  "Independent FR Legends fan guides covering drifting technique, car tuning, cars, tracks, controller setup and livery design. Official game-store links only.";
export const LOGO = `${SITE_URL}/assets/icons/fr-legends-logo.png`;
export const OG_IMAGE = `${SITE_URL}/assets/images/og-image.jpg`;
export const SOCIAL = {
  tiktok: "https://www.tiktok.com/@frlegends467",
  youtube: "https://www.youtube.com/@frlegends467",
};
export const OFFICIAL_ANDROID_URL = "https://play.google.com/store/apps/details?id=com.fengiiley.frlegends";
export const OFFICIAL_IOS_URL = "https://apps.apple.com/pk/app/fr-legends/id1435740083";
export const OFFICIAL_DEVELOPER_URL = "https://twinturbogames.com/";
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-to-drift-in-fr-legends/", label: "Drifting" },
  { href: "/fr-legends-best-drift-settings-tuning-guide/", label: "Tuning" },
  { href: "/fr-legends-cars-list/", label: "Cars" },
  { href: "/fr-legends-livery-codes/", label: "Livery Codes" },
  { href: "/blog/", label: "Guides" },
  { href: "/download/", label: "Get the Game", cta: true },
];
export const OFFICIAL_LINKS = [
  { href: OFFICIAL_ANDROID_URL, label: "Google Play · Android" },
  { href: OFFICIAL_IOS_URL, label: "App Store · iPhone and iPad" },
  { href: OFFICIAL_DEVELOPER_URL, label: "Twin Turbo Games · Developer site" },
];
export const FOOTER_GUIDES = [
  { href: "/how-to-drift-in-fr-legends/", label: "How to Drift" },
  { href: "/fr-legends-best-drift-settings-tuning-guide/", label: "Tuning Guide" },
  { href: "/how-to-build-the-perfect-drift-car/", label: "Build a Drift Car" },
  { href: "/fr-legends-battle-mode-guide/", label: "Battle Mode Guide" },
  { href: "/fr-legends-cars-list/", label: "Cars List" },
  { href: "/fr-legends-tracks-list/", label: "Tracks List" },
];
export const FOOTER_LEGAL = [
  { href: "/about-us/", label: "About This Site" },
  { href: "/editorial-policy/", label: "Editorial Policy" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-conditions/", label: "Terms & Conditions" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/dmca/", label: "Copyright / DMCA" },
  { href: "/contact-us/", label: "Contact" },
];
export const FOOTER_BRAND =
  "Independent fan-made guides for FR Legends. We are not affiliated with the game developer and do not distribute modified game files.";
export const FOOTER_COPYRIGHT =
  "FR Legends is a trademark of its respective owner. This independent fan site is not affiliated with or endorsed by the developer.";
export function cleanUrl(href: string): string {
  const rel = href.replace(/^\.\/|^\.\.\//, "");
  if (rel === "index.html") return "/";
  if (rel === "blog/index.html") return "/blog/";
  if (rel.endsWith(".html")) return `/${rel.replace(/\.html$/, "")}/`;
  return href;
}
export const BLOG_POST_SLUGS = [
  "how-to-drift-in-fr-legends",
  "fr-legends-best-drift-settings-tuning-guide",
  "how-to-build-the-perfect-drift-car",
  "fr-legends-car-tier-list",
  "best-beginner-car-in-fr-legends",
  "fr-legends-tracks-list",
  "fr-legends-battle-mode-guide",
  "how-to-get-free-coins-in-fr-legends",
  "fr-legends-vs-fr-legends-2",
  "how-fr-legends-livery-codes-work",
  "best-anime-jdm-livery-codes",
  "fr-legends-controller-support",
];
