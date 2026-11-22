import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("dmca");
const LEDE = "How to contact the site operator about copyright, trademark or other rights concerns involving material published on this website.";

export default function DmcaPage() {
  return (
    <LegalPage slug="dmca" lede={LEDE} metaLine="Last updated: <strong>November 23, 2026</strong>">
      <section className="section"><div className="container"><div className="prose">
        <h2>Our approach to intellectual property</h2>
        <p>This website publishes independent editorial guides about FR Legends. We do not host or distribute game APKs, modified game packages or unofficial copies. Names and marks are used only to identify the game discussed. Third-party trademarks, screenshots and other assets remain the property of their respective owners.</p>
        <h2>How to submit a concern</h2>
        <p>If you believe material on this website infringes a copyright or other right you own or are authorized to represent, email <a href="mailto:contact@frlegendmodapk.com">contact@frlegendmodapk.com</a> with the subject line “Copyright or rights notice”. Include:</p>
        <ul>
          <li>Your name and contact details, and the rights holder you represent if applicable.</li>
          <li>A clear description of the copyrighted work or other right at issue.</li>
          <li>The exact URL on this website where the material appears.</li>
          <li>An explanation of why you believe the use is unauthorized.</li>
          <li>A statement that the information in your notice is accurate and that you are the rights holder or authorized to act for them.</li>
        </ul>
        <p>Please do not send passwords, payment information or unrelated personal documents. We may contact you if we need clarification.</p>
        <h2>Review and response</h2>
        <p>We review rights enquiries and may temporarily restrict access to identified material while a concern is assessed. Where a valid issue is identified, we may remove or revise the material. This page is an informational contact procedure and does not replace any formal notice required by applicable law.</p>
        <h2>Contact</h2>
        <p>General questions and corrections can also be sent through our <Link href="/contact-us/">contact page</Link>.</p>
      </div></div></section>
    </LegalPage>
  );
}
