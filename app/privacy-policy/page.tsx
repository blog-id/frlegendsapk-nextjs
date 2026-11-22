import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("privacy-policy");
const LEDE = "This policy describes the information that may be processed when you visit this website, use its external links or contact the site operator.";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage slug="privacy-policy" lede={LEDE} metaLine="Last updated: <strong>November 23, 2026</strong>">
      <section className="section"><div className="container"><div className="prose">
        <h2>Information you provide</h2>
        <p>You can read this website without creating an account. We do not provide visitor accounts, public comments or an on-site user profile feature. If you email us, we receive the email address, name if included, and the contents and attachments of your message. We use that information to respond, consider corrections and handle legal or site-related enquiries.</p>
        <h2>Technical logs and hosting</h2>
        <p>The hosting and delivery providers used to operate the website may process technical information such as IP address, browser and device details, requested pages, timestamps and security events. These records may be used for delivery, abuse prevention, troubleshooting and service reliability under the providers' own privacy terms.</p>
        <h2>Google Analytics</h2>
        <p>The website uses Google Analytics 4 to understand aggregate website usage and improve the content and navigation. The measurement ID currently configured in the site is G-6Z9V4BC4PL. Google Analytics may use cookies or similar technologies and process online identifiers, device and usage information. Details are available in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> and <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">Google Analytics data safeguards</a>.</p>
        <h2>Google AdSense and advertising</h2>
        <p>The website includes the Google AdSense publisher script for site review and advertising setup. Whether ads are displayed depends on Google's approval and ad-serving decisions. If ads are served, Google and its advertising partners may use cookies, local storage or similar technologies to deliver, measure and personalize ads, subject to applicable settings, consent requirements and Google's policies. For information about Google's advertising practices and controls, visit <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">How Google uses information from sites or apps that use its services</a> and <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Google My Ad Center</a>.</p>
        <h2>Cookies and choices</h2>
        <p>Cookies and similar technologies may be set by Google Analytics, Google advertising services if active, or essential hosting and security services. You can manage cookies through your browser settings. Blocking some cookies may affect measurement or advertising functionality. Where applicable law requires consent before non-essential storage or advertising technologies are used, the site operator must obtain and respect that consent.</p>
        <h2>External links</h2>
        <p>This site links to third-party services, including Google Play, the Apple App Store, Google services and social networks. When you follow an external link, that provider processes information under its own terms and privacy policy. We do not control those services.</p>
        <h2>Children</h2>
        <p>This site is intended for a general audience interested in a video game and is not designed to knowingly collect personal information from children. Parents or guardians who believe a child has sent personal information to us may contact us to request its deletion where appropriate.</p>
        <h2>Your requests</h2>
        <p>For questions or requests about an email you sent us or this policy, contact <a href="mailto:contact@frlegendmodapk.com">contact@frlegendmodapk.com</a>. We may need to verify a request before acting on it.</p>
        <h2>Changes to this policy</h2>
        <p>We may revise this policy when site features, service providers or legal requirements change. The date at the top indicates the latest revision.</p>
        <p>Related information: <Link href="/terms-conditions/">Terms and Conditions</Link> and <Link href="/disclaimer/">Disclaimer</Link>.</p>
      </div></div></section>
    </LegalPage>
  );
}
