export type Post = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

export const POSTS: Post[] = [
  { slug: "how-to-drift-in-fr-legends", tag: "Driving", date: "Aug 8, 2026", title: "How to Drift in FR Legends: A Beginner's Guide", excerpt: "Learn initiation, throttle control, countersteer and weight transfer, then use a short practice routine to build repeatable corner entries.", image: "/assets/images/fr-legends-drift-racing-gameplay.jpg", imageAlt: "FR Legends drift racing gameplay showing a car sliding through a corner" },
  { slug: "fr-legends-best-drift-settings-tuning-guide", tag: "Tuning", date: "Aug 12, 2026", title: "FR Legends Drift Settings and Tuning Explained", excerpt: "Understand the purpose and trade-offs of power, grip, balance and suspension adjustments before changing your setup.", image: "/assets/images/fr-legends-car-tuning-upgrade-screen.jpg", imageAlt: "FR Legends car tuning and upgrade screen" },
  { slug: "how-to-build-the-perfect-drift-car", tag: "Car setup", date: "Aug 5, 2026", title: "How to Build a Balanced Drift Car in FR Legends", excerpt: "A practical way to choose a chassis, prioritize upgrades and adjust handling without relying on a single so-called perfect build.", image: "/assets/images/fr-legends-upgrade-shop-tuning.jpg", imageAlt: "FR Legends upgrade shop and car tuning screen" },
  { slug: "fr-legends-car-tier-list", tag: "Cars", date: "Aug 1, 2026", title: "FR Legends Car Guide and Tier List", excerpt: "Compare the strengths and handling characteristics discussed in the car guide, and choose a vehicle that suits your preferred driving style.", image: "/assets/images/fr-legends-nissan-silvia-s15.jpg", imageAlt: "Nissan Silvia S15 in the FR Legends garage" },
  { slug: "best-beginner-car-in-fr-legends", tag: "Cars", date: "Jul 28, 2026", title: "Choosing a Beginner Car in FR Legends", excerpt: "What to consider when choosing a first car: predictable handling, upgrade costs and how comfortably you can practice basic techniques.", image: "/assets/images/fr-legends-toyota-ae86.jpg", imageAlt: "Toyota AE86 in the FR Legends garage" },
  { slug: "fr-legends-tracks-list", tag: "Tracks", date: "Jul 24, 2026", title: "FR Legends Tracks: A Guide to Learning Each Course", excerpt: "Use track layout, corner shape and visibility to plan a practice route and learn a course one section at a time.", image: "/assets/images/fr-legends-touge-track-drift-gameplay.jpg", imageAlt: "FR Legends touge track gameplay" },
  { slug: "fr-legends-battle-mode-guide", tag: "Game modes", date: "Jul 20, 2026", title: "FR Legends Battle Mode: Lead, Chase and Consistency", excerpt: "A guide to lead and chase roles, clean lines, proximity and the habits that make tandem battles more consistent.", image: "/assets/images/fr-legends-iphone-drift-gameplay.jpg", imageAlt: "FR Legends drift gameplay on a mobile device" },
  { slug: "how-fr-legends-livery-codes-work", tag: "Livery", date: "Jul 4, 2026", title: "How FR Legends Livery Codes Work", excerpt: "Understand what livery codes are used for, how to enter shared designs and how to troubleshoot an import that does not look right.", image: "/assets/images/fr-legends-livery-editor-custom-designs.jpg", imageAlt: "FR Legends livery editor showing a custom vehicle design" },
  { slug: "best-anime-jdm-livery-codes", tag: "Livery", date: "Jun 30, 2026", title: "Anime and JDM-Inspired Livery Ideas for FR Legends", excerpt: "Explore visual themes, color planning and design details that can help you create a coherent custom livery.", image: "/assets/images/fr-legends-mazda-rx7-fd3s.jpg", imageAlt: "Mazda RX-7 FD3S in the FR Legends garage" },
  { slug: "fr-legends-controller-support", tag: "Controls", date: "Jun 26, 2026", title: "FR Legends Controller Setup: A Practical Guide", excerpt: "Understand the controller and emulator settings to check when setting up a gamepad on a compatible device.", image: "/assets/images/fr-legends-pc-emulator-drift-gameplay.jpg", imageAlt: "FR Legends gameplay displayed through a PC emulator" },
];
