import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import FaqAccordion from "@/components/FaqAccordion";
import { articleMetadata, getArticle } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-mod-apk-old-versions");

export default function FrLegendsModApkOldVersionsPage() {
  return (
    <ArticlePage
      slug="fr-legends-mod-apk-old-versions"
      layout="sections"
      title="FR Legends Mod Apk, Old Versions Archive"
      lede="Every build we've ever published, kept online permanently. Prefer how 0.4.6 handled transitions? Want the exact version you grew up with? It's here, scroll, pick, install."
      metaLine="Archive updated: <strong>August 16, 2026</strong>"
      crumbs={[{ label: "Home", href: "/" }, { label: "Old Versions" }]}
    >
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The archive</span>
            <h2>Every Version, In Order</h2>
            <p className="lede">
              Current version first, then history. All builds include the full
              mod menu: unlimited money, all cars unlocked, no ads.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                FR Legends Mod Apk version archive
              </caption>
              <thead>
                <tr>
                  <th scope="col">Version</th>
                  <th scope="col">Released</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>0.4.7</strong>{" "}
                    <span className="badge badge-safe">Current</span>
                  </td>
                  <td>Aug 2026</td>
                  <td>
                    Latest balance changes, Battle Mode fixes, low-end
                    performance improvements
                  </td>
                  <td>
                    <Link href="/download/">Latest build â†’</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>0.4.6</strong>
                  </td>
                  <td>Jul 2026</td>
                  <td>Livery editor fixes, improved controller mapping</td>
                  <td>
                    <a
                      href="https://github.com/frlegendsmodapk/latest-version/releases/download/download/fr-legends-mod-0.4.6.apk"
                      rel="noopener"
                      download
                    >
                      fr-legends-mod-0.4.6.apk
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>0.4.5</strong>
                  </td>
                  <td>May 2026</td>
                  <td>
                    New cars, multiplayer lobby improvements, crash fixes on old
                    Android
                  </td>
                  <td>
                    <a
                      href="https://github.com/frlegendsmodapk/latest-version/releases/download/download/fr-legends-mod-0.4.5.apk"
                      rel="noopener"
                      download
                    >
                      fr-legends-mod-0.4.5.apk
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>0.4.4</strong>
                  </td>
                  <td>Mar 2026</td>
                  <td>Championship rewards rebalance, Gymkhana scoring fixes</td>
                  <td>
                    <a
                      href="https://github.com/frlegendsmodapk/latest-version/releases/download/download/fr-legends-mod-0.4.4.apk"
                      rel="noopener"
                      download
                    >
                      fr-legends-mod-0.4.4.apk
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>0.3.9</strong>
                  </td>
                  <td>Dec 2025</td>
                  <td>
                    The classic build many players still run, pre-balance-pass
                    physics
                  </td>
                  <td>
                    <a
                      href="https://github.com/frlegendsmodapk/latest-version/releases/download/download/fr-legends-mod-0.3.9.apk"
                      rel="noopener"
                      download
                    >
                      fr-legends-mod-0.3.9.apk
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>0.3.8</strong>
                  </td>
                  <td>Sep 2025</td>
                  <td>
                    Older official base, kept for players on very old Android
                    versions
                  </td>
                  <td>
                    <a
                      href="https://github.com/frlegendsmodapk/latest-version/releases/download/download/fr-legends-mod-0.3.8.apk"
                      rel="noopener"
                      download
                    >
                      fr-legends-mod-0.3.8.apk
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Full release notes for recent versions live in our{" "}
            <Link href="/fr-legends-new-cars-update-log/">Update Log</Link>.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Rolling back</span>
            <h2>How to Downgrade Safely</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number" aria-hidden="true">
                1
              </div>
              <div className="step-body">
                <h3>Back up your save</h3>
                <p>
                  Copy your save folder (typically under{" "}
                  <code>Android/data/com.fengiiley.frlegends/files</code>) to a
                  safe location. Downgrades normally keep your progress, but a
                  backup costs nothing.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                2
              </div>
              <div className="step-body">
                <h3>Uninstall the current build</h3>
                <p>
                  Version downgrades with the same signature can conflict, so
                  remove the installed app first. Your save folder may be
                  removed too, that's what step one was for.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                3
              </div>
              <div className="step-body">
                <h3>Install the old apk</h3>
                <p>
                  Tap the downloaded file, allow installs from unknown sources
                  if prompted, and let it finish. If Play Protect warns, choose
                  "Install anyway", the build is scanned.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                4
              </div>
              <div className="step-body">
                <h3>Restore your save and drift</h3>
                <p>
                  Copy your backed-up save back if needed, launch the game, and
                  confirm the mod menu is active. You're on your chosen version
                  now.
                </p>
              </div>
            </div>
          </div>
          <p>
            Install problems? Our{" "}
            <Link href="/fr-legends-mod-apk-not-installing-fix/">
              troubleshooting guide
            </Link>{" "}
            covers the seven most common errors, and every build above is
            scanned before release, the same release process we use for the{" "}
            <Link href="/download/">current version</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Questions, answered</span>
            <h2>Old Versions, FAQ</h2>
          </div>
          <FaqAccordion items={getArticle("fr-legends-mod-apk-old-versions").accordionItems} />
        </div>
      </section>
    </ArticlePage>
  );
}