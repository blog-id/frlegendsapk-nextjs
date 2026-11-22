import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("about-us");
const LEDE = "An independent fan-made website publishing informational guides about the FR Legends mobile drifting game.";

export default function AboutUsPage() {
  return (
    <LegalPage slug="about-us" lede={LEDE} metaLine="Last updated: <strong>November 23, 2026</strong>">
      <section className="section"><div className="container"><div className="prose">
        <h2>What this website is</h2>
        <p>FR Legends Fan Guides is an independent editorial resource for people who play or are interested in FR Legends. The site organizes explanations about drifting technique, vehicle setup, game modes, tracks, controls and livery design so readers can find practical information in one place.</p>
        <p>This is a fan website. It is not the official FR Legends site and it is not owned, operated, sponsored or approved by Twin Turbo Games or the game's developers. The FR Legends name and related game marks belong to their respective owners.</p>
        <h2>What we publish</h2>
        <p>Our articles are written as independent explanations and reference guides. Topics include the basics of initiating and holding a drift, how common tuning adjustments affect handling, how to approach lead and chase roles, and ways to plan a custom livery. We also point readers to the official app-store listings when they want to install the game.</p>
        <h2>Editorial transparency</h2>
        <p>We do not claim to represent the developer, provide official technical support, or have access to non-public game information. We do not describe an article as laboratory-tested or personally tested unless the page clearly explains what was tested and how. Where mechanics or availability can change, readers should check the current in-game information and official store listing.</p>
        <p>This website does not host, create, link to or distribute modified APKs, altered game packages, cheats or unofficial copies of FR Legends.</p>
        <h2>Corrections and contact</h2>
        <p>Accuracy matters. Please tell us when an explanation is unclear, a link is broken or a game update has made a guide outdated. Use the <Link href="/contact-us/">contact page</Link> to send a correction or question. We review submitted feedback and update pages when a correction is warranted.</p>
        <h2>Explore the site</h2>
        <p>Start with the <Link href="/blog/">guide library</Link>, read our <Link href="/editorial-policy/">editorial policy</Link>, or visit the <Link href="/download/">official game links</Link>.</p>
      </div></div></section>
    </LegalPage>
  );
}
