import type { NextConfig } from "next";

const redirectsFrom: Record<string, string> = {
  "/index.html": "/",
  "/best-anime-jdm-livery-codes.html": "/best-anime-jdm-livery-codes/",
  "/best-beginner-car-in-fr-legends.html": "/best-beginner-car-in-fr-legends/",
  "/download.html": "/download/",
  "/fr-legends-2-mod-apk.html": "/fr-legends-vs-fr-legends-2/",
  "/fr-legends-battle-mode-guide.html": "/fr-legends-battle-mode-guide/",
  "/fr-legends-best-drift-settings-tuning-guide.html": "/fr-legends-best-drift-settings-tuning-guide/",
  "/fr-legends-bmw-drift-mods.html": "/fr-legends-cars-list/",
  "/fr-legends-car-tier-list.html": "/fr-legends-car-tier-list/",
  "/fr-legends-cars-list.html": "/fr-legends-cars-list/",
  "/fr-legends-controller-support.html": "/fr-legends-controller-support/",
  "/fr-legends-livery-codes.html": "/fr-legends-livery-codes/",
  "/fr-legends-mod-apk-for-pc.html": "/fr-legends-controller-support/",
  "/fr-legends-mod-apk-ios.html": "/download/",
  "/fr-legends-mod-apk-not-installing-fix.html": "/download/",
  "/fr-legends-mod-apk-old-versions.html": "/download/",
  "/fr-legends-new-cars-update-log.html": "/blog/",
  "/fr-legends-rx7-mod-livery-codes.html": "/fr-legends-livery-codes/",
  "/fr-legends-supra-mod-apk.html": "/fr-legends-cars-list/",
  "/fr-legends-tracks-list.html": "/fr-legends-tracks-list/",
  "/fr-legends-vs-fr-legends-2.html": "/fr-legends-vs-fr-legends-2/",
  "/how-fr-legends-livery-codes-work.html": "/how-fr-legends-livery-codes-work/",
  "/how-to-build-the-perfect-drift-car.html": "/how-to-build-the-perfect-drift-car/",
  "/how-to-drift-in-fr-legends.html": "/how-to-drift-in-fr-legends/",
  "/how-to-get-free-coins-in-fr-legends.html": "/how-to-get-free-coins-in-fr-legends/",
  "/is-fr-legends-mod-apk-safe.html": "/disclaimer/",
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
    const legacyRoutes: Record<string, string> = {
      "/fr-legends-2-mod-apk/": "/fr-legends-vs-fr-legends-2/",
      "/fr-legends-bmw-drift-mods/": "/fr-legends-cars-list/",
      "/fr-legends-mod-apk-for-pc/": "/fr-legends-controller-support/",
      "/fr-legends-mod-apk-ios/": "/download/",
      "/fr-legends-mod-apk-not-installing-fix/": "/download/",
      "/fr-legends-mod-apk-old-versions/": "/download/",
      "/fr-legends-new-cars-update-log/": "/blog/",
      "/fr-legends-rx7-mod-livery-codes/": "/fr-legends-livery-codes/",
      "/fr-legends-supra-mod-apk/": "/fr-legends-cars-list/",
      "/is-fr-legends-mod-apk-safe/": "/disclaimer/",
      "/how-to-get-free-coins-in-fr-legends/": "/blog/",
      "/fr-legends-vs-fr-legends-2/": "/blog/",
    };
    return [...Object.entries(redirectsFrom), ...Object.entries(legacyRoutes)].map(
      ([source, destination]) => ({ source, destination, permanent: true }),
    );
  },
};

export default nextConfig;
