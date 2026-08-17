import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("disclaimer");

const LEDE =
  "The short version: this is an independent fan resource. We're not the game's developer, we don't pretend to be, and anything you install from this site is your responsibility.";

export default function DisclaimerPage() {
  return (
    <LegalPage
      slug="disclaimer"
      lede={LEDE}
      metaLine="Last updated: <strong>August 16, 2026</strong>"
    >
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>No Affiliation</h2>
            <p>
              frlegendmodapk.com is an independent fan resource. It is not
              affiliated with, endorsed by, or sponsored by Twin Turbo Tech or
              any other party involved in the development or distribution of FR
              Legends. We are not a company and we have no commercial
              relationship with the developer. Any impression of affiliation is
              unintentional.
            </p>

            <h2>Trademarks and Game Assets</h2>
            <p>
              FR Legends is a trademark of Twin Turbo Tech. All game assets,
              names, logos, car models, tracks, and artwork, belong to their
              respective owners and are referenced here only to identify the
              game we write about. This site and the mod apk it links to are
              not official products, and nothing on this site is made or
              authorized by the developer.
            </p>

            <h2>The Mod Apk, Use at Your Own Risk</h2>
            <p>
              The FR Legends Mod Apk is a modified copy of the official app. We
              provide it "as is," without any warranty of any kind, express or
              implied. Installing and using it carries risks we can't remove on
              your behalf:
            </p>
            <ul>
              <li>
                <strong>Device risks.</strong> Modified apps can, in rare
                cases, cause stability problems, and they don't receive updates
                through official channels. We scan every release before
                publishing, but no scan is a guarantee.
              </li>
              <li>
                <strong>Account risks.</strong> Using a modded game online can
                lead to account action. Ban risk for single-player features is
                low, but it is not zero, and it's higher in online modes. Play
                aware, or play offline.
              </li>
            </ul>
            <p>
              We strongly recommend reading our{" "}
              <Link href="/is-fr-legends-mod-apk-safe/">
                FR Legends Mod Apk safety guide
              </Link>{" "}
              before installing, and making your own decision based on your
              device, your account, and your comfort level. By downloading and
              installing the mod, you accept these risks yourself.
            </p>

            <h2>Accuracy of Information</h2>
            <p>
              We aim for accuracy, versions, system requirements, car lists,
              and codes are checked when published. But games change: features
              get updated, prices change, and third-party information can go
              stale. Information on this site is provided in good faith and
              without warranty. If you spot something out of date, tell us via
              the <Link href="/contact-us/">contact page</Link> and
              we&apos;ll fix it.
            </p>

            <h2>External Links</h2>
            <p>
              This site links to third-party websites, including the
              GitHub-hosted release that distributes the mod apk and our social
              media profiles. We don't control those sites and are not
              responsible for their content, their practices, or anything that
              happens on them. When you leave frlegendmodapk.com, their terms
              and privacy policies apply.
            </p>

            <h2>Mod Policy</h2>
            <p>
              Mods exist in a legal gray area that varies by country and by the
              game's terms of service. You are responsible for checking your
              local laws and the game's terms before using the mod. Where the
              terms of service prohibit modification, using the mod may violate
              those terms, that's a decision for you to make, not for us.
            </p>
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
