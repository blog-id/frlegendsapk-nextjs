import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("terms-conditions");

const LEDE =
  "The short version: this is an independent fan resource for the FR Legends mod apk. By using this site you agree to the terms below, and you use everything you download from it at your own risk.";

export default function TermsConditionsPage() {
  return (
    <LegalPage
      slug="terms-conditions"
      lede={LEDE}
      metaLine="Last updated: <strong>August 16, 2026</strong>"
    >
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>Acceptance of These Terms</h2>
            <p>
              By accessing or using frlegendmodapk.com, you agree to be bound
              by these Terms &amp; Conditions and by our{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link>. If you do
              not agree with any part of these terms, please stop using the
              site. We may update these terms at any time; the version
              published on this page is the one that applies.
            </p>

            <h2>About This Site</h2>
            <p>
              frlegendmodapk.com is an independent fan resource. It is not
              affiliated with, endorsed by, or sponsored by Twin Turbo Tech,
              the developer of FR Legends. The site provides download links,
              guides, car lists, livery codes, and other information about the
              FR Legends Mod Apk. Content is provided for personal,
              non-commercial use and information only.
            </p>

            <h2>The Mod Apk Downloads</h2>
            <p>
              The FR Legends Mod Apk is a modified version of the official app.
              It is provided "as is," without warranty of any kind, express or
              implied. We scan releases before publishing them, but we cannot
              guarantee that any file is free from defects, and we accept no
              liability for anything that happens as a result of downloading or
              installing the mod. You download and install it entirely at your
              own risk. Where the game's terms of service prohibit
              modification, using the mod may breach those terms; that decision
              is yours to make.
            </p>

            <h2>Acceptable Use</h2>
            <p>When using this site you agree not to:</p>
            <ul>
              <li>
                Copy, republish, or redistribute our content without credit, or
                use it commercially without permission.
              </li>
              <li>
                Attempt to access, scrape, or interfere with the site's
                operation, hosting, or infrastructure.
              </li>
              <li>
                Use the site or its downloads for any unlawful purpose, or in
                any way that violates the rights of others.
              </li>
              <li>
                Re-upload or re-host the mod apk files elsewhere and present
                them as your own.
              </li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              FR Legends is a trademark of Twin Turbo Tech, and all game
              assets, names, car models, tracks, and artwork belong to their
              respective owners. They are referenced here only to identify the
              game we write about. The text, layout, and design of this site
              are our own work and are protected by copyright. Nothing on this
              site grants you any rights in either the game's assets or our
              content beyond personal use.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              This site links to third-party websites, including the
              GitHub-hosted release that distributes the mod apk and our social
              media profiles. We do not control those sites and are not
              responsible for their content or practices. When you leave
              frlegendmodapk.com, the third party's own terms and privacy
              policies apply.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, frlegendmodapk.com and
              its operators shall not be liable for any direct, indirect,
              incidental, or consequential damages arising from your use of
              this site, including any damage to your device, data loss, or
              account action taken against you for using the mod. The
              information on this site is provided in good faith, but it may
              contain errors or become outdated as the game changes.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may revise these Terms &amp; Conditions at any time by
              updating this page. Continued use of the site after changes are
              published means you accept the revised terms. Where possible we
              will note significant changes on this page.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about these Terms &amp; Conditions, contact
              us through the <Link href="/contact-us/">contact page</Link> and
              we will respond as soon as we can.
            </p>
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
