import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("terms-conditions");
const LEDE = "The terms for accessing and using this independent FR Legends fan-guide website.";

export default function TermsConditionsPage() {
  return (
    <LegalPage slug="terms-conditions" lede={LEDE} metaLine="Last updated: <strong>November 23, 2026</strong>">
      <section className="section"><div className="container"><div className="prose">
        <h2>About this website</h2>
        <p>This website provides independent informational content and guides about FR Legends. It is not affiliated with or endorsed by the game's developer. The game, its trademarks and its assets belong to their respective owners.</p>
        <h2>Acceptable use</h2>
        <p>You may browse the website for personal, lawful purposes. You agree not to interfere with the site's operation, attempt unauthorized access, introduce malicious code, or use the site in a way that infringes another person's rights or violates applicable law.</p>
        <h2>Content and intellectual property</h2>
        <p>Unless otherwise noted, the editorial text and site design are published by this website operator. Third-party names, marks and game assets remain the property of their owners. You may not reproduce substantial portions of our original text for commercial use without permission.</p>
        <h2>No game files or modified copies</h2>
        <p>This website does not host or distribute modified APKs, altered game files, cheats or unofficial copies. Links on the <Link href="/download/">Get FR Legends page</Link> point to official app-store listings. Third-party services are governed by their own terms.</p>
        <h2>Informational content and availability</h2>
        <p>Guides are provided for general information and may become outdated as the game changes. We do not guarantee that every page is free from error or that the website will be available without interruption. Check current information in the game and official store listings.</p>
        <h2>Third-party services</h2>
        <p>External links are provided for convenience. We do not control third-party websites and are not responsible for their content, security, availability or privacy practices.</p>
        <h2>Changes and contact</h2>
        <p>We may update these terms as the website changes. Continued use after an updated version is published indicates acceptance of the revised terms to the extent permitted by law. Questions can be sent using the <Link href="/contact-us/">contact page</Link>.</p>
      </div></div></section>
    </LegalPage>
  );
}
