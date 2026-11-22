import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("contact-us");
const LEDE = "Contact the site operator about corrections, broken links, editorial questions or intellectual-property concerns.";

export default function ContactUsPage() {
  return (
    <LegalPage slug="contact-us" lede={LEDE} metaLine="Last updated: <strong>November 23, 2026</strong>">
      <section className="section"><div className="container"><div className="prose">
        <h2>Email</h2>
        <p>For general enquiries, corrections and feedback, email <a href="mailto:contact@frlegendmodapk.com">contact@frlegendmodapk.com</a>.</p>
        <h2>Reporting a correction</h2>
        <p>Include the page address, the passage that needs attention and the reason you believe it is inaccurate. A link to an official announcement or other reliable source is helpful. We review submissions and update content when appropriate.</p>
        <h2>Copyright and rights enquiries</h2>
        <p>Rights holders can review our <Link href="/dmca/">copyright and DMCA page</Link> for the information to include with a notice.</p>
        <h2>What this site can help with</h2>
        <p>This is an independent fan-guide website. We can consider editorial corrections and website issues, but we are not the game's developer and cannot access player accounts, recover saves, change in-game purchases or provide official technical support.</p>
        <h2>Official game support</h2>
        <p>For account, purchase or game-specific support, use the support contact information shown on the official <a href="https://play.google.com/store/apps/details?id=com.fengiiley.frlegends" target="_blank" rel="noopener noreferrer">Google Play listing</a> or <a href="https://apps.apple.com/pk/app/fr-legends/id1435740083" target="_blank" rel="noopener noreferrer">Apple App Store listing</a>.</p>
      </div></div></section>
    </LegalPage>
  );
}
