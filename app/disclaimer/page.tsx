import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("disclaimer");
const LEDE = "Important information about the independent nature, accuracy and limitations of this fan-made FR Legends guide website.";

export default function DisclaimerPage() {
  return (
    <LegalPage slug="disclaimer" lede={LEDE} metaLine="Last updated: <strong>November 23, 2026</strong>">
      <section className="section"><div className="container"><div className="prose">
        <h2>Independent fan website</h2>
        <p>FR Legends Fan Guides is an independent fan resource. It is not affiliated with, endorsed by, sponsored by or an official representative of Twin Turbo Games or the creators of FR Legends. FR Legends and all related names, logos, characters, artwork and other game assets belong to their respective owners.</p>
        <h2>Informational content</h2>
        <p>Articles are provided for general informational and educational purposes. Game features, balance, menus, controls, compatibility and store availability can change. We aim to explain topics clearly, but we cannot guarantee that every detail will remain current for every device, region or game version. Check the information shown in your own game and in the official store listing before making decisions.</p>
        <h2>No modified game distribution</h2>
        <p>This website does not host, build, link to or distribute modified APKs, altered game packages, cheats, bypasses or unofficial copies. For installation, use the official store links on the <Link href="/download/">Get FR Legends page</Link>.</p>
        <h2>External websites</h2>
        <p>Links to third-party websites are provided for convenience. We do not operate those services and are not responsible for their content, availability, security or privacy practices. Review their terms before using them.</p>
        <h2>Use at your own discretion</h2>
        <p>You are responsible for how you use the information in these guides and for checking whether it is appropriate for your device, account and circumstances. Nothing on this website is professional, legal or technical advice.</p>
        <h2>Contact</h2>
        <p>To report an error or ask a question, visit our <Link href="/contact-us/">contact page</Link>.</p>
      </div></div></section>
    </LegalPage>
  );
}
