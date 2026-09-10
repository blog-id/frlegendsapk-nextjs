import type { Metadata } from "next";

export const SOFTWARE_JSON_LD: object = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FR Legends Mod APK v0.4.8 (Unlimited Money, All Cars)",
  "url": "https://frlegendmodapk.com/",
  "description":
    "Get FR Legends Mod APK v0.4.8 for Android — unlimited money, all cars unlocked, free purchases, custom liveries, and full installation guide.",
  "operatingSystem": "Android 5.1 or higher",
  "applicationCategory": "GameApplication",
  "applicationSubCategory": "Racing Game",
  "softwareVersion": "0.4.8",
  "fileSize": "140MB",
  "downloadUrl": "https://frlegendmodapk.com/download/",
  "featureList":
    "Unlimited money, all cars unlocked, free purchases, custom liveries, unchanged drift physics, track unlocks",
  "publisher": { "@id": "https://frlegendmodapk.com/#organization" },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
  },
};

export const FAQPAGE_JSON_LD: object = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the mod version the same game as the official release?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Mechanically yes — FR Legends Mod APK uses the same physics and scoring as the official release. What changes is progression: cars, tracks, and currency are generally available earlier than the base game intends.",
      },
    },
    {
      "@type": "Question",
      "name": "What in-game currency does FR Legends actually use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The primary currency is money (also shown as cash, earned through Solo Runs and Battles). A secondary currency, gold, exists for a small number of special-edition cars — it isn't the main way most content is purchased.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there an FR Legends 2 or FR Legends 3?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Neither exists as an official release. Twin Turbo Tech hasn't announced a sequel under either name. What circulates as 'FR Legends 3 download' or 'FR Legends 2 APK' is typically a mislabeled community build of the original game, a fan-made project, or confusion with an unrelated title.",
      },
    },
    {
      "@type": "Question",
      "name": "Will installing a modded APK get my account banned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Using modified files goes against the game's terms of service, and online features tied to an official account carry some risk as a result. Offline solo play tends to be lower-risk than joining ranked online modes with a modded build.",
      },
    },
    {
      "@type": "Question",
      "name": "Does this work on iPhone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "APK installation is an Android-specific process — iOS doesn't support sideloading APKs the same way, so modded Android builds don't transfer directly to iPhone.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I play FR Legends on PC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. On supported Windows and Chromebook devices, FR Legends runs through Google Play without needing an APK at all. Android emulators like BlueStacks or Nox are the other route for PC play, though those require a download and setup step.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need to unlock cars again after updating the app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Generally no, as long as you install the new version over the existing app rather than uninstalling first. Save data tied to a specific major update can occasionally behave differently.",
      },
    },
    {
      "@type": "Question",
      "name": "Why does the game say App Not Installed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "This usually happens because of permission restrictions, conflicting installations from differing signatures, or an incomplete file download.",
      },
    },
    {
      "@type": "Question",
      "name": "Can old save files be used after updating?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases yes, although major updates can occasionally create compatibility issues with older saves.",
      },
    },
  ],
};

export const HOME_FAQ_ITEMS: { question: string; answerHtml: string }[] = [
  {
    question: "Is the mod version the same game as the official release?",
    answerHtml:
      "<p>Mechanically yes — FR Legends Mod APK uses the same physics and scoring as the official release. What changes is progression: cars, tracks, and currency are generally available earlier than the base game intends.</p>",
  },
  {
    question: "What in-game currency does FR Legends actually use?",
    answerHtml:
      "<p>The primary currency is money (also shown as cash, earned through Solo Runs and Battles). A secondary currency, gold, exists for a small number of special-edition cars — it isn't the main way most content is purchased.</p>",
  },
  {
    question: "Is there an FR Legends 2 or FR Legends 3?",
    answerHtml:
      "<p>Neither exists as an official release. Twin Turbo Tech hasn't announced a sequel under either name. What circulates as &ldquo;FR Legends 3 download&rdquo; or &ldquo;FR Legends 2 APK&rdquo; is typically a mislabeled community build of the original game (sometimes named after a version like 0.3.x, which people read as &ldquo;3&rdquo;), a fan-made project, or confusion with an unrelated title. If you found a download page for FR Legends 3, check the actual APK filename — it's almost certainly a repackaged version of the standard game.</p>",
  },
  {
    question: "Will installing a modded APK get my account banned?",
    answerHtml:
      "<p>Using modified files goes against the game's terms of service, and online features tied to an official account carry some risk as a result. Offline solo play tends to be lower-risk than joining ranked online modes with a modded build.</p>",
  },
  {
    question: "Does this work on iPhone?",
    answerHtml:
      "<p>APK installation is an Android-specific process — iOS doesn't support sideloading APKs the same way, so modded Android builds don't transfer directly to iPhone. Official releases remain accessible through the Apple App Store.</p>",
  },
  {
    question: "Can I play FR Legends on PC?",
    answerHtml:
      "<p>Yes. On supported Windows and Chromebook devices, FR Legends runs through Google Play without needing an APK at all — this is also the closest thing to a browser-accessible version for players on networks that block app installs. Android emulators like BlueStacks or Nox are the other route for PC play, though those require a download and setup step.</p>",
  },
  {
    question: "Do I need to unlock cars again after updating the app?",
    answerHtml:
      "<p>Generally no, as long as you install the new version over the existing app rather than uninstalling first. Save data tied to a specific major update can occasionally behave differently — that's covered in more depth on our version history and installation guides.</p>",
  },
  {
    question: "Why does the game say App Not Installed?",
    answerHtml:
      "<p>This usually happens because of permission restrictions, conflicting installations with differing cryptographic signatures, or an incomplete file download. Ensure &ldquo;Unknown sources&rdquo; is enabled for your file manager.</p>",
  },
  {
    question: "Can old save files be used after updating?",
    answerHtml:
      "<p>In many cases yes, although major updates can occasionally create compatibility issues with older saves. Backing up your save files before updating is recommended.</p>",
  },
];

export const homeMetadata: Metadata = {
  title: "Download FR Legends Mod APK v0.4.8 (Unlimited Money, All Cars)",
  description:
    "Get FR Legends Mod APK v0.4.8 for Android — unlimited money, all cars unlocked, free purchases, custom liveries, and full installation guide.",
  alternates: { canonical: `https://frlegendmodapk.com/` },
  openGraph: {
    type: "website",
    siteName: "FR Legends Mod Apk",
    title: "Download FR Legends Mod APK v0.4.8 (Unlimited Money, All Cars)",
    description:
      "Get FR Legends Mod APK v0.4.8 for Android — unlimited money, all cars unlocked, free purchases, custom liveries, and full installation guide.",
    url: `https://frlegendmodapk.com/`,
    images: [
      {
        url: `https://frlegendmodapk.com/assets/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download FR Legends Mod APK v0.4.8 (Unlimited Money, All Cars)",
    description:
      "Get FR Legends Mod APK v0.4.8 for Android — unlimited money, all cars unlocked, free purchases, custom liveries, and full installation guide.",
    images: [`https://frlegendmodapk.com/assets/images/og-image.jpg`],
  },
};
