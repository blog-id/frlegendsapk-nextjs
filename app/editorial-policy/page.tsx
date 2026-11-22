import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("editorial-policy");
const LEDE = "The standards used to plan, write, review and correct the site's independent FR Legends guides.";

export default function EditorialPolicyPage() {
  return (
    <LegalPage slug="editorial-policy" lede={LEDE} metaLine="Last updated: <strong>November 23, 2026</strong>">
      <section className="section"><div className="container"><div className="prose">
        <h2>Editorial purpose</h2>
        <p>The purpose of this site is to help readers understand FR Legends gameplay and customization through clear, practical explanations. We aim to answer a specific question on each page rather than repeat promotional claims or publish pages solely to target search phrases.</p>
        <h2>Sources and research</h2>
        <p>When a page describes official availability, publisher information or platform support, we prioritize the game's official developer website and official app-store listings. Gameplay guides may also explain general driving and vehicle setup concepts in the context of the game. We distinguish published information from general advice and do not present guesses as confirmed game facts.</p>
        <p>We do not claim that every guide has been independently tested on every device, car, track or game version. Where a first-hand test is relevant, the page should state what was tested and the conditions. Otherwise, readers should treat setup ideas as starting points and verify the result in their own game.</p>
        <h2>Accuracy and updates</h2>
        <p>Game updates can change controls, balance, menus and availability. We review feedback and revise a page when a meaningful correction is warranted. A page's publication or update date should reflect a substantive editorial change, not a cosmetic edit.</p>
        <h2>Corrections</h2>
        <p>Readers can report unclear instructions, broken links or inaccurate details via the <Link href="/contact-us/">contact page</Link>. Please include the page URL, the relevant passage and a source or explanation that helps us verify the correction.</p>
        <h2>Independence and monetization</h2>
        <p>This is an independent fan website, not an official developer publication. If advertising is enabled, advertising does not determine editorial conclusions. We do not sell game accounts, modified files or paid access to the guides.</p>
        <h2>Content we do not publish</h2>
        <p>We do not host, build, link to or distribute modified APKs, altered game packages, cheats, bypasses or unofficial copies. We also avoid unsupported claims that a file is safe, verified, virus-free or endorsed by the game's creators.</p>
        <p>Learn more about the site in <Link href="/about-us/">About Us</Link> or contact us with a correction.</p>
      </div></div></section>
    </LegalPage>
  );
}
