import type { NextConfig } from "next";

const redirectsFrom: Record<string, string> = {
  "/index.html": "/",
  "/best-anime-jdm-livery-codes.html": "/best-anime-jdm-livery-codes/",
  "/best-beginner-car-in-fr-legends.html": "/best-beginner-car-in-fr-legends/",
  "/download.html": "/download/",
  "/fr-legends-2-mod-apk.html": "/fr-legends-2-mod-apk/",
  "/fr-legends-battle-mode-guide.html": "/fr-legends-battle-mode-guide/",
  "/fr-legends-best-drift-settings-tuning-guide.html":
    "/fr-legends-best-drift-settings-tuning-guide/",
  "/fr-legends-bmw-drift-mods.html": "/fr-legends-bmw-drift-mods/",
  "/fr-legends-car-tier-list.html": "/fr-legends-car-tier-list/",
  "/fr-legends-cars-list.html": "/fr-legends-cars-list/",
  "/fr-legends-controller-support.html": "/fr-legends-controller-support/",
  "/fr-legends-livery-codes.html": "/fr-legends-livery-codes/",
  "/fr-legends-mod-apk-for-pc.html": "/fr-legends-mod-apk-for-pc/",
  "/fr-legends-mod-apk-ios.html": "/fr-legends-mod-apk-ios/",
  "/fr-legends-mod-apk-not-installing-fix.html":
    "/fr-legends-mod-apk-not-installing-fix/",
  "/fr-legends-mod-apk-old-versions.html": "/fr-legends-mod-apk-old-versions/",
  "/fr-legends-new-cars-update-log.html": "/fr-legends-new-cars-update-log/",
  "/fr-legends-rx7-mod-livery-codes.html": "/fr-legends-rx7-mod-livery-codes/",
  "/fr-legends-supra-mod-apk.html": "/fr-legends-supra-mod-apk/",
  "/fr-legends-tracks-list.html": "/fr-legends-tracks-list/",
  "/fr-legends-vs-fr-legends-2.html": "/fr-legends-vs-fr-legends-2/",
  "/how-fr-legends-livery-codes-work.html": "/how-fr-legends-livery-codes-work/",
  "/how-to-build-the-perfect-drift-car.html": "/how-to-build-the-perfect-drift-car/",
  "/how-to-drift-in-fr-legends.html": "/how-to-drift-in-fr-legends/",
  "/how-to-get-free-coins-in-fr-legends.html": "/how-to-get-free-coins-in-fr-legends/",
  "/is-fr-legends-mod-apk-safe.html": "/is-fr-legends-mod-apk-safe/",
  "/blog/index.html": "/blog/",
  "/about-us/index.html": "/about-us/",
  "/contact-us/index.html": "/contact-us/",
  "/disclaimer/index.html": "/disclaimer/",
  "/dmca/index.html": "/dmca/",
  "/privacy-policy/index.html": "/privacy-policy/",
  "/terms-conditions/index.html": "/terms-conditions/",
};

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return Object.entries(redirectsFrom).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;