import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("privacy-policy");

const LEDE =
  "This policy explains, in plain language, what information frlegendmodapk.com collects, why we collect it, and what choices you have. The short version: we collect very little, and we don't sell anything.";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      slug="privacy-policy"
      lede={LEDE}
      metaLine="Last updated: <strong>August 16, 2026</strong>"
    >
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>Information We Collect</h2>
            <p>
              This is a static website. It has no user accounts, no comment
              system, and no login, so most of the information a "normal"
              website collects simply doesn't exist here. What does get
              collected is:
            </p>
            <ul>
              <li>
                <strong>Standard server logs.</strong> Like virtually every
                website, our hosting provider records basic technical data when
                pages are loaded, your IP address, browser type, pages visited,
                and timestamps. We use this only to keep the site running,
                diagnose problems, and understand broad traffic patterns. We
                don't use it to identify individual visitors.
              </li>
              <li>
                <strong>Email you send us.</strong> If you{" "}
                <Link href="/contact-us/">contact us</Link> by email, we see
                the address you write from and the content of your message. We
                use that only to reply to you, and we don't share it.
              </li>
            </ul>

            <h2>Cookies</h2>
            <p>
              The site itself is static and sets no tracking cookies and no
              advertising cookies. We have no analytics scripts and no ad
              network on this site. The only cookies you might encounter are
              technical ones, for example, if your browser or our hosting
              infrastructure sets session cookies for security or performance
              reasons. Nothing on this site is designed to follow you across
              the web.
            </p>

            <h2>Third-Party Services</h2>
            <p>Two external services touch this site:</p>
            <ul>
              <li>
                <strong>Google Fonts.</strong> We load our fonts from Google's
                servers so pages look consistent everywhere. When your browser
                fetches a font, it connects to Google's servers, which may
                record limited technical data (such as your IP address) under{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google's privacy policy
                </a>
                .
              </li>
              <li>
                <strong>GitHub.</strong> The mod apk itself is distributed from
                a GitHub-hosted release at{" "}
                <a
                  href="https://github.com/frlegendsmodapk/latest-version"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/frlegendsmodapk/latest-version
                </a>
                . When you download it, your interaction with that download is
                governed by{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub's privacy statement
                </a>
                , not by this policy.
              </li>
            </ul>
            <p>
              If we ever add embedded content or new third-party services,
              we'll update this policy to say so.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              This site is not directed at children under 13, and we don't
              knowingly collect personal information from anyone under 13. If
              you believe a child has sent us personal information, contact us
              and we'll delete it.
            </p>

            <h2>Your Rights</h2>
            <p>
              You can ask us questions about this policy at any time, and you
              can request that we remove or correct anything you believe
              belongs to you, for example, if you ever spot your email address
              or content on the site. Contact us at{" "}
              <a href="mailto:contact@frlegendmodapk.com">
                contact@frlegendmodapk.com
              </a>{" "}
              and we'll respond within a reasonable time.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              If this policy changes, we'll update the "Last updated" date at
              the top of this page. Significant changes will be called out
              plainly here so you don't have to guess what changed.
            </p>
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
