import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("dmca");

const LEDE =
  "How to ask us to remove copyrighted material from frlegendmodapk.com. We take takedown requests seriously and respond to valid notices promptly.";

export default function DmcaPage() {
  return (
    <LegalPage
      slug="dmca"
      lede={LEDE}
      metaLine="Last updated: <strong>August 16, 2026</strong>"
    >
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>What We Host</h2>
            <p>
              frlegendmodapk.com hosts fan-written text (guides, descriptions,
              and tutorials), placeholder graphics, and links. The site itself
              does not host the mod apk file: the mod apk is distributed from a
              GitHub-hosted release at{" "}
              <a
                href="https://github.com/frlegendsmodapk/latest-version"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/frlegendsmodapk/latest-version
              </a>
              . What we publish on this domain is original writing about the
              game and the mod, and we reference game names and trademarks only
              to identify what we're writing about.
            </p>

            <h2>Submitting a Takedown Notice</h2>
            <p>
              If you are a rights holder and believe that content on this site
              infringes your copyright, send a notice to{" "}
              <a href="mailto:contact@frlegendmodapk.com">
                contact@frlegendmodapk.com
              </a>{" "}
              with the following information:
            </p>
            <ul>
              <li>
                <strong>Identification of the copyrighted work</strong> you
                claim has been infringed.
              </li>
              <li>
                <strong>The exact URL(s)</strong> on frlegendmodapk.com where
                the material appears. Multiple URLs are fine, list them all.
              </li>
              <li>
                <strong>Your contact details</strong>, name, email address,
                and, if you're acting for someone, whom you represent.
              </li>
              <li>
                <strong>A statement of good-faith belief</strong> that the use
                is not authorized by the copyright owner, its agent, or the
                law.
              </li>
              <li>
                <strong>A statement of accuracy</strong>, made under penalty of
                perjury, that the information in your notice is accurate and
                that you are the rights holder or authorized to act on their
                behalf.
              </li>
              <li>Your physical or electronic signature.</li>
            </ul>
            <p>
              Please be specific. Notices that don't identify the exact
              material and URL can't be acted on and will be returned to you
              for more detail.
            </p>

            <h2>What Happens Next</h2>
            <p>
              We review each notice in good faith. If it's valid, we remove or
              modify the identified content within a reasonable time and
              confirm the action to you by email. We keep records of takedown
              requests as required by law. Note that filing a knowingly false
              notice can expose you to liability, please only file when you
              genuinely believe infringement exists.
            </p>

            <h2>Counter-Notice</h2>
            <p>
              If you believe content was removed by mistake or
              misidentification, you may send a counter-notice to the same
              address. It should include your contact details, identification
              of the removed material and where it appeared, a statement under
              penalty of perjury that you have a good-faith belief the material
              was removed by mistake or misidentification, and consent to
              jurisdiction, along with your signature. We'll forward your
              counter-notice to the original complainant and restore the
              content if no legal action follows within the required period.
            </p>

            <h2>Repeat Infringers</h2>
            <p>
              We don't run user-uploaded content, so repeat infringers aren't
              really a category this site can have. That said, we will
              terminate or block repeated bad-faith filers, people who abuse
              the takedown process, to protect the site and its readers.
            </p>

            <h2>GitHub and the Mod Apk</h2>
            <p>
              The mod apk file itself is hosted by GitHub, not by us. GitHub
              has its own{" "}
              <a
                href="https://docs.github.com/en/site-policy/copyright-and-related-rights-policies/dmca-takedown-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                DMCA process
              </a>
              , and we cooperate fully with it, if GitHub removes a release, we
              remove the corresponding download link from this site. For
              notices aimed at the apk file itself, you may want to file
              directly with GitHub; for notices aimed at text or pages on this
              domain, file with us at{" "}
              <a href="mailto:contact@frlegendmodapk.com">
                contact@frlegendmodapk.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
