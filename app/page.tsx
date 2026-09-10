import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProseImage from "@/components/ProseImage";
import {
  FAQPAGE_JSON_LD,
  HOME_FAQ_ITEMS,
  SOFTWARE_JSON_LD,
  homeMetadata,
} from "@/lib/homepage";

export const metadata: Metadata = homeMetadata;

const TOC_ITEMS = [
  { id: "download-info", label: "Version Information" },
  { id: "why-players-look", label: "Why Players Look for Modified Versions" },
  { id: "features-overview", label: "Features Overview" },
  { id: "latest-version", label: "Current Version" },
  { id: "quick-questions", label: "Quick Questions" },
  { id: "download-table", label: "Download Information" },
  { id: "how-to-install", label: "Installation Requirements" },
  { id: "controller-support", label: "Controller Support" },
  { id: "save-data", label: "Save Data & Updating" },
  { id: "car-roster", label: "Car Roster" },
  { id: "track-roster", label: "Track Roster" },
  { id: "game-modes", label: "Game Modes" },
  { id: "customization-liveries", label: "Customization & Liveries" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "performance-safety", label: "Performance & Safety" },
  { id: "scoring-system", label: "Scoring System" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={SOFTWARE_JSON_LD} />
      <JsonLd data={FAQPAGE_JSON_LD} />

      {/* ===================== HERO SECTION ===================== */}
      <section className="hero" id="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <span className="kicker">FR Legends Mod APK &middot; Latest Download</span>
            <h1>FR Legends Mod APK Download (Unlimited Money, All Cars Unlocked)</h1>

            {/* Bylines & Metadata Verification */}
            <div className="meta-line">
              <span>
                By <strong>Rizky Pratama</strong>
              </span>
              <span className="meta-sep">&bull;</span>
              <span>Last Verified: <strong>September 7, 2026</strong></span>
              <span className="meta-sep">&bull;</span>
              <span>Current build <strong>v0.4.8</strong></span>
              <span className="meta-sep">|</span>
              <span>Android &middot; iOS &middot; PC</span>
            </div>

            <p className="lede">
              FR Legends Mod APK is a modified version of the popular drift
              racing game that gives players access to expanded progression
              features, unlocked content, and additional customization options
              depending on the build. Players downloading FR Legends Mod APK
              often want to know what features it includes, which devices it
              supports, and what issues they may encounter before installing it.
            </p>

            <p>
              This page covers version information, installation requirements,
              compatibility, troubleshooting, and the gameplay features that
              have helped FR Legends — developed by Feng and iiley at Twin Turbo
              Tech — build a loyal drifting community.
            </p>

            <div className="hero-actions">
              <Link href="/download/" className="btn btn-primary btn-lg">
                Download Mod APK &rarr;
              </Link>
              <a href="#how-to-install" className="btn btn-outline btn-lg">
                Installation Steps
              </a>
            </div>

            <p className="hero-note">
              Also check:{" "}
              <Link href="/fr-legends-mod-apk-ios/">FR Legends on iOS</Link>{" "}
              and <Link href="/fr-legends-mod-apk-old-versions/">older versions archive</Link>.
            </p>

            <div
              className="stat-badges"
              role="list"
              aria-label="Download quick summary"
            >
              <span className="stat-badge" role="listitem">
                Version <strong>0.4.8</strong>
              </span>
              <span className="stat-badge" role="listitem">
                Size <strong>140 MB</strong>
              </span>
              <span className="stat-badge" role="listitem">
                OS <strong>Android 5.1+</strong>
              </span>
              <span className="stat-badge" role="listitem">
                Status <strong>Verified</strong>
              </span>
            </div>
          </div>

          <div className="hero-media">
            <ProseImage
              src="/assets/images/fr-legends-drift-racing-gameplay.jpg"
              alt="FR Legends title screen screenshot showing a drift car on track"
              caption="FR Legends title screen and in-game drift gameplay."
              width={1200}
              height={675}
              figureStyle={{ margin: 0 }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ===================== TABLE OF CONTENTS & QUICK ANSWER ===================== */}
      <section className="section" style={{ paddingTop: "1rem", paddingBottom: "1.5rem" }}>
        <div className="container">
          <div className="toc-box">
            <div className="toc-title">On This Page</div>
            <ul className="toc-list">
              {TOC_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="callout"
            style={{ marginTop: "1.75rem", borderLeftColor: "var(--color-primary)" }}
          >
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.65 }}>
              <strong>Quick Answer:</strong> FR Legends is currently available in{" "}
              <strong>version 0.4.8</strong>, while the modded APK provides
              additional unlocked features for Android players. Features can
              include access to the full car roster, available tracks, and
              extra in-game resources without the usual money grind. The mod is
              intended for players looking for a more open gameplay experience
              with additional features available from the start.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== DOWNLOAD INFORMATION ===================== */}
      <section className="section" id="download-info">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Build Specifications</span>
            <h2>FR Legends Mod APK Download Information</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <div className="table-responsive">
              <table className="meta-table">
                <thead>
                  <tr>
                    <th style={{ width: "32%" }}>Item</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Current Version</strong></td>
                    <td>0.4.8</td>
                  </tr>
                  <tr>
                    <td><strong>Developer</strong></td>
                    <td>Twin Turbo Tech (Feng and iiley)</td>
                  </tr>
                  <tr>
                    <td><strong>Build Type</strong></td>
                    <td>Third-Party Modified Build</td>
                  </tr>
                  <tr>
                    <td><strong>Category</strong></td>
                    <td>Racing / Drift Simulator</td>
                  </tr>
                  <tr>
                    <td><strong>Platform</strong></td>
                    <td>
                      Android, iOS (official release), Windows via Google Play on PC or Android emulators
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Primary Features</strong></td>
                    <td>
                      Expanded progression options, car access, tracks, and customization features depending on build
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Approximate Size</strong></td>
                    <td>140 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY PLAYERS LOOK FOR MODIFIED VERSIONS ===================== */}
      <section className="section" id="why-players-look">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Player Motivations</span>
            <h2>Why Players Look for Modified Versions</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Many players simply want to experiment with different cars and
              tracks without spending hours grinding in-game currency first.
              Others enjoy testing custom builds, trying new liveries, or
              exploring features that would otherwise take a long time to
              unlock.
            </p>
            <p>
              Even with expanded progression options, the game&apos;s drifting
              mechanics remain the same. Learning proper angle control, throttle
              balance, and line selection still takes practice regardless of
              which version is installed, which is one of the reasons FR
              Legends has built a strong community in Indonesia and across the
              world. Players looking to improve their skills further can explore
              the <Link href="/blog/">FR Legends blog</Link>, where we regularly
              publish guides, car breakdowns, tuning tips, and other gameplay
              resources. That combination of accessible progression and
              unchanged physics is what makes FR Legends Mod APK a consistent
              choice for players who want to skip the grind without changing how
              the game actually feels.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES OVERVIEW ===================== */}
      <section className="section" id="features-overview">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Complete Feature Breakdown</span>
            <h2>FR Legends Mod APK Features Overview</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <div className="grid grid-2" style={{ marginBottom: "2rem" }}>
              <div className="card">
                <h3>Unlimited Money Features</h3>
                <p>
                  Many modified builds provide a large amount of in-game money,
                  allowing players to experiment with cars and upgrades without
                  spending hours grinding through races.
                </p>
              </div>

              <div className="card">
                <h3>Free Purchase Features</h3>
                <p>
                  Some community builds remove progression restrictions and make
                  certain items available earlier than they are in the standard
                  version.
                </p>
              </div>

              <div className="card">
                <h3>New Cars and Garage Features</h3>
                <p>
                  Updated builds sometimes include access to a wider garage and
                  additional customization options, although feature availability
                  varies by version.
                </p>
              </div>

              <div className="card">
                <h3>Customization and Liveries</h3>
                <p>
                  One of the biggest attractions of FR Legends is the ability to
                  create detailed liveries and personalize nearly every vehicle
                  in the garage.
                </p>
              </div>

              <div className="card" style={{ gridColumn: "1 / -1" }}>
                <h3>Drift Physics and Progression</h3>
                <p>
                  The core physics remain unchanged, meaning players still need
                  to master throttle control, line selection, and tandem
                  drifting techniques.
                </p>
              </div>
            </div>

            <ProseImage
              src="/assets/images/fr-legends-car-tuning-upgrade-screen.jpg"
              alt="FR Legends Crazy Customization screen showing car interior controls"
              caption="FR Legends Crazy Customization screen with customizable interior controls."
              width={1200}
              height={675}
            />

            <p>
              The base game asks you to earn money through Solo Runs and Battles
              before you can afford better cars, tracks, or upgrades. That&apos;s
              by design — it&apos;s how a free-to-play drift sim paces itself.
              The modded version generally strips that pacing out.
            </p>
            <p>
              Here is what FR Legends Mod APK changes compared to the base
              game. Most builds circulating right now unlock the existing car
              roster from the start, open up the tracks that are normally gated
              behind progression, and hand you a large starting balance of the
              in-game currency instead of making you earn it lap by lap. Some
              builds also touch the secondary premium currency — gold — which
              the base game otherwise reserves for a handful of special-edition
              cars.
            </p>
            <p>
              What generally doesn&apos;t change: the physics, the scoring
              system, and the actual skill ceiling. A bigger garage doesn&apos;t
              make anyone better at holding an angle through a technical
              section — it just removes the wait before you get to practice.
            </p>

            <div className="table-responsive">
              <table className="meta-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Base Game</th>
                    <th>Modded Version</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Car roster</strong></td>
                    <td>Unlocks through progression</td>
                    <td>Typically available from the start</td>
                  </tr>
                  <tr>
                    <td><strong>Track access</strong></td>
                    <td>Some tracks gated behind money/progress</td>
                    <td>Generally opened early</td>
                  </tr>
                  <tr>
                    <td><strong>In-game money</strong></td>
                    <td>Earned through Solo Runs and Battles</td>
                    <td>Large starting balance in most builds</td>
                  </tr>
                  <tr>
                    <td><strong>Gold (premium currency)</strong></td>
                    <td>Tied to specific special-edition cars</td>
                    <td>Varies by build — not guaranteed unlimited</td>
                  </tr>
                  <tr>
                    <td><strong>Ads</strong></td>
                    <td>Present in the official release</td>
                    <td>Often reduced or removed, depending on the build</td>
                  </tr>
                  <tr>
                    <td><strong>Core physics and scoring</strong></td>
                    <td>Standard</td>
                    <td>Unchanged</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Modified APKs typically violate the developer&apos;s terms of
              service, since altering game files isn&apos;t something Twin Turbo
              Tech has endorsed. That&apos;s worth knowing going in rather than
              finding out later. Unlike games with paid DLC, FR Legends keeps its
              core downloadable content — tracks, cars, and livery options —
              tied to in-game progression. The modded version typically makes
              that content accessible from the start.
            </p>
            <p>
              A separate source of confusion is the frequent appearance of
              &ldquo;FR Legends 2&rdquo; across search results and download
              pages. Despite the name showing up online, there is currently no
              officially announced sequel. If you&apos;re wondering where the
              rumors came from or whether an FR Legends 2 release actually
              exists, see our{" "}
              <Link href="/fr-legends-2-mod-apk/">
                FR Legends 2 clarification guide
              </Link>{" "}
              (and{" "}
              <Link href="/fr-legends-vs-fr-legends-2/">
                FR Legends vs FR Legends 2 breakdown
              </Link>
              ) for a full analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== LATEST VERSION & UPDATE HISTORY ===================== */}
      <section className="section" id="latest-version">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Release Timeline</span>
            <h2>FR Legends Latest Version and Update History (2026)</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The latest version of FR Legends is <strong>v0.4.8</strong>, a
              maintenance update following v0.4.7. Reported fixes include a
              login issue affecting some Xiaomi devices and an occasional freeze
              when entering a custom online map. Like recent updates before it,
              this build focuses on stability rather than new cars or tracks —
              treat any page claiming otherwise as outdated. For the full
              build-by-build history, the{" "}
              <Link href="/fr-legends-mod-apk-old-versions/">
                version history page
              </Link>{" "}
              tracks changes as they land rather than relying on any single
              article staying current.
            </p>
            <p>
              The FR Legends 2026 update cycle has leaned toward maintenance
              patches rather than major content additions. If you&apos;re
              looking for a specific version like 0.4.2 or an older build, our{" "}
              <Link href="/fr-legends-mod-apk-old-versions/">
                version history archive
              </Link>{" "}
              tracks what changed between releases — that&apos;s a better
              reference than hoping any single article stays current.
            </p>

            <ProseImage
              src="/assets/images/fr-legends-drift-gameplay-scene.jpg"
              alt="FR Legends gameplay preview showing dynamic tandem drift angle"
              caption="FR Legends gameplay preview"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </section>

      {/* ===================== QUICK QUESTIONS PLAYERS USUALLY ASK ===================== */}
      <section className="section" id="quick-questions">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Common Inquiries</span>
            <h2>Quick Questions Players Usually Ask</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              These are the questions players ask most often before installing
              FR Legends Mod APK.
            </p>

            <div className="grid grid-2" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
              <div className="card">
                <h3>Is FR Legends Mod APK playable offline?</h3>
                <p>
                  Most gameplay modes can be played without an internet
                  connection, although certain features and updates may require
                  connectivity depending on the version being used.
                </p>
              </div>

              <div className="card">
                <h3>Does the game work on Android 15?</h3>
                <p>
                  Most recent versions generally work on Android 15, although
                  compatibility can vary depending on device manufacturer
                  restrictions and software customizations.
                </p>
              </div>

              <div className="card">
                <h3>Are all cars available immediately?</h3>
                <p>
                  Feature availability varies depending on the specific build and
                  version being used.
                </p>
              </div>

              <div className="card">
                <h3>Does FR Legends Mod APK include new tracks?</h3>
                <p>
                  Some builds may include access to tracks that are normally
                  progression-based, although track availability can vary
                  depending on the specific version being used.
                </p>
              </div>
            </div>

            <div id="download-table" style={{ paddingTop: "1rem" }}>
              <h3>Download Information Table</h3>
              <div className="table-responsive">
                <table className="meta-table">
                  <thead>
                    <tr>
                      <th style={{ width: "32%" }}>Detail</th>
                      <th>Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Current version</strong></td>
                      <td>0.4.8</td>
                    </tr>
                    <tr>
                      <td><strong>Approximate file size</strong></td>
                      <td>140 MB</td>
                    </tr>
                    <tr>
                      <td><strong>Format</strong></td>
                      <td>APK / XAPK (Android)</td>
                    </tr>
                    <tr>
                      <td><strong>Original developer</strong></td>
                      <td>Twin Turbo Tech (Feng and iiley)</td>
                    </tr>
                    <tr>
                      <td><strong>Official platforms</strong></td>
                      <td>Android, iOS, and Windows (via Google Play on PC)</td>
                    </tr>
                    <tr>
                      <td><strong>Source verification</strong></td>
                      <td>
                        Scan any APK with an antivirus tool before installing, regardless of where it&apos;s from
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Modified APKs carry the same general security and terms-of-service
              risk as any third-party install — review the source before
              downloading, and don&apos;t assume a file is safe just because a
              page says so.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW TO DOWNLOAD AND INSTALL ===================== */}
      <section className="section" id="how-to-install">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Step-By-Step Setup</span>
            <h2>How to Download and Install FR Legends Mod APK</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Before installing anything outside the Play Store or App Store,
              Android needs permission to install from unknown sources. That
              setting lives in different places depending on the device, usually
              under <em>Settings &rarr; Security</em> or <em>Apps &rarr; Special App Access</em>.
            </p>
            <p>
              The same APK works across regions — players in South Africa,
              Indonesia, and other markets outside the Play Store&apos;s
              primary distribution zones commonly install via the APK method
              below.
            </p>

            <ol className="step-list" style={{ paddingLeft: "1.25rem", margin: "1.5rem 0" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Enable installs from unknown sources</strong> for your
                browser or file manager.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Download the APK file</strong> from a source you&apos;ve
                reviewed (<Link href="/download/">official download page</Link>).
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Scan the file</strong> with an antivirus app before
                opening it.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Open the file</strong> and follow the on-screen install
                prompts.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Launch the app</strong> once installation finishes and
                verify your garage.
              </li>
            </ol>

            <p>
              If you&apos;re upgrading from an older modded build, installing over
              the existing app (rather than uninstalling first) is generally
              what preserves local progress. Uninstalling first will usually
              wipe anything that wasn&apos;t tied to a linked cloud account.
            </p>

            <h3>Compatibility Table</h3>
            <div className="table-responsive">
              <table className="meta-table">
                <thead>
                  <tr>
                    <th>Requirement</th>
                    <th>Minimum</th>
                    <th>Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Android version</strong></td>
                    <td>Android 5.1 or higher</td>
                    <td>Android 9.0+</td>
                  </tr>
                  <tr>
                    <td><strong>RAM</strong></td>
                    <td>1 GB</td>
                    <td>2 GB or more</td>
                  </tr>
                  <tr>
                    <td><strong>Free storage</strong></td>
                    <td>~300 MB</td>
                    <td>500 MB+ for smoother updates</td>
                  </tr>
                  <tr>
                    <td><strong>iOS</strong></td>
                    <td>Available on official App Store release</td>
                    <td>Recent iOS versions for best stability</td>
                  </tr>
                  <tr>
                    <td><strong>PC</strong></td>
                    <td>Via Android emulator or Google Play on Windows</td>
                    <td>
                      See our{" "}
                      <Link href="/fr-legends-mod-apk-for-pc/">
                        FR Legends PC setup guide
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Performance can vary depending on device manufacturer, RAM, and
              background apps running on the system. A device that technically
              meets the minimum spec can still feel choppy if half a dozen other
              apps are running in the background during a race.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTROLLER SUPPORT ===================== */}
      <section className="section" id="controller-support">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Input Methods</span>
            <h2>Controller Support and Input Options</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              FR Legends is designed primarily for touch controls, including
              Tilt, Slider, and Button steering modes. Some players also use
              controllers through Android emulators or device-level controller
              mapping applications.
            </p>
            <p>
              Controller support can vary depending on the device, emulator,
              and Android version being used.
            </p>
            <p>
              For emulator mapping, controller setup, and input
              recommendations, see our dedicated{" "}
              <Link href="/fr-legends-controller-support/">
                controller support guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SAVE DATA AND UPDATING ===================== */}
      <section className="section" id="save-data">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Data Protection</span>
            <h2>Save Data and Updating Between Versions</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Players often worry about losing progress when updating. Installing
              a newer version over an existing installation generally preserves
              local save data, while uninstalling the app first may remove
              locally stored progress.
            </p>
            <p>
              Before updating, backing up save files is always a safer approach,
              especially when moving between significantly different game
              versions.
            </p>
            <p>
              If you&apos;re updating from an older build, our{" "}
              <Link href="/fr-legends-mod-apk-not-installing-fix/">
                Android compatibility and install troubleshooting guide
              </Link>{" "}
              covers common update issues and version-specific problems.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CAR ROSTER AND NEW ADDITIONS ===================== */}
      <section className="section" id="car-roster">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The Vehicles</span>
            <h2>Car Roster and New Additions</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The roster is built entirely around front-engine, rear-wheel-drive
              cars — that&apos;s what the &ldquo;FR&rdquo; in the name refers to,
              and it&apos;s the reason nothing all-wheel-drive shows up in the
              garage. The confirmed lineup spans Japanese and European platforms
              that actually get used in real drift competition: the Toyota
              AE86, a GT86/BRZ-platform car, Nissan Silvia variants (S13 through
              S15), the Mazda RX-7 in both FC3S and FD3S form, the Nissan
              Skyline GT-R across its R32–R34 generations, the Toyota Chaser
              JZX100, and BMW&apos;s E30 and E36.
            </p>
            <p>
              New cars do get added periodically, but not every version bump
              includes one — several recent updates were stability-focused
              rather than content-focused. Pages claiming an exact car count
              without a clear source are usually copying an older list rather
              than checking the live game.
            </p>
            <p>
              For players comparing performance and looking for the{" "}
              <Link href="/fr-legends-car-tier-list/">
                fastest car in FR Legends
              </Link>
              , the <Link href="/fr-legends-cars-list/">full car roster</Link>{" "}
              and individual setups matter more than a simple car-count claim.
            </p>

            <ProseImage
              src="/assets/images/fr-legends-car-selection-menu.jpg"
              alt="FR Legends Mod APK garage showing customized drift car and full car roster"
              caption="FR Legends garage and car roster screenshot."
              width={1200}
              height={675}
            />

            <p>
              A lot of players assume a car is &ldquo;bad&rdquo; the first time
              they drive it, when the real issue is usually a suspension setup
              that doesn&apos;t match how they like to initiate a drift.
              Switching cars fixes less than switching tuning approach does.
              For a breakdown of how each car actually handles and where it
              fits, our{" "}
              <Link href="/fr-legends-tracks-list/">All Tracks Guide</Link> goes
              deeper than a roster list can here.
            </p>

            <h3>Why Cars Feel Different From Each Other</h3>
            <p>
              Weight distribution and engine placement do most of the work here.
              A lighter chassis like the AE86 tends to snap into a drift quicker
              but can feel twitchy on faster sections, while something heavier
              like the JZX100 carries momentum through a slide in a way that
              rewards patience over quick corrections. Neither is objectively
              better — it comes down to which one matches how a given player
              likes to initiate and hold an angle.
            </p>
            <p>
              Engine swaps add another layer. Popular swap options in the
              community conversation include the 2JZ, RB26, SR20, and CA18DET —
              real JDM engines that carry over their general character into the
              game, even though exact output numbers aren&apos;t something
              worth treating as fixed benchmarks.
            </p>
            <p>
              Suspension tuning, differential settings, and steering angle
              adjustments also play a major role in how a car behaves during
              tandem drifting. Check our{" "}
              <Link href="/best-beginner-car-in-fr-legends/">
                best beginner car guide
              </Link>{" "}
              and{" "}
              <Link href="/fr-legends-best-drift-settings-tuning-guide/">
                drift settings tuning walkthrough
              </Link>{" "}
              for recommended setups.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== TRACK ROSTER OVERVIEW ===================== */}
      <section className="section" id="track-roster">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Drift Circuits</span>
            <h2>Track Roster Overview</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Tracks in FR Legends lean heavily on real-world drift culture
              rather than generic racing circuits. The confirmed lineup includes
              Ebisu Minami, the Ebisu Touge and School courses, Irwindale
              Speedway, the multi-layout Drift Park, Meihan Sportsland, a
              Hiroshima-inspired course, Gunsai Touge, Grange Motor Circuit, and
              USAIR. Some competitor sites list additional named tracks that
              don&apos;t currently check out against the live game, so it&apos;s
              worth being skeptical of anything not on this list until it&apos;s
              confirmed.
            </p>

            <ProseImage
              src="/assets/images/fr-legends-touge-track-drift-gameplay.jpg"
              alt="In-game screenshot of a drift car driving on a track in FR Legends"
              caption="In-game screenshot from FR Legends"
              width={1200}
              height={675}
            />

            <p>
              New players often start on the simpler Drift Park layouts before
              moving to technical courses like Gunsai or Ebisu, since those
              early tracks are more forgiving for getting a feel for initiation
              timing. A dedicated breakdown of each track&apos;s layout and
              clipping zones is available in our{" "}
              <Link href="/fr-legends-tracks-list/">
                FR Legends Tracks List &amp; Circuit Guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===================== GAME MODES AT A GLANCE ===================== */}
      <section className="section" id="game-modes">
        <div className="container">
          <div className="section-head">
            <span className="kicker">How to Play</span>
            <h2>Game Modes at a Glance</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The mode list covers more than straight racing. <strong>Practice</strong>{" "}
              lets you run a track with up to four AI cars and no scoring
              pressure, which is the better place to learn a new car&apos;s
              handling before it matters. <strong>Solo Run</strong> scores you
              drifting alone against the clock and track layout, while{" "}
              <strong>Battle</strong> pits you against an AI opponent in a
              tandem-style run where following line and proximity affect your
              score, not just your own execution.
            </p>
            <p>
              <strong>Touge Attack</strong> shifts the format toward grip-based
              mountain-road driving rather than pure drift scoring, and{" "}
              <strong>Championship mode</strong> structures runs into a more
              formal competitive ladder. <strong>Multiplayer</strong> opens the
              same battle format up to real opponents instead of AI, with a
              hard cap on room size that keeps matches from turning into a crowd.
            </p>
            <p>
              Tandem battles are one of the biggest reasons the game has remained
              popular, as they closely resemble real-world competitive drifting
              events.
            </p>
            <p>
              It&apos;s common for newer players to jump straight into
              Multiplayer and get discouraged by the skill gap. Spending time in
              Practice and Solo Run first tends to build the angle and throttle
              control that Battle and Championship modes actually reward.
            </p>
            <p>
              Players struggling with car control should also read our{" "}
              <Link href="/fr-legends-best-drift-settings-tuning-guide/">
                best drift settings guide
              </Link>{" "}
              for beginner-friendly setups, and our{" "}
              <Link href="/fr-legends-battle-mode-guide/">
                Battle Mode tandem guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CUSTOMIZATION AND LIVERIES ===================== */}
      <section className="section" id="customization-liveries">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Visual Tuning</span>
            <h2>Customization and Liveries</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Beyond raw performance tuning, the FR Legends livery editor lets
              you go deep on visual customization — body kits, wheels, ride
              height, roll cages, and full livery painting. Community-shared
              livery codes and even searches for things like the{" "}
              <Link href="/fr-legends-supra-mod-apk/">
                FR Legends Supra Mod
              </Link>{" "}
              show how much players enjoy recreating iconic drift builds without
              designing everything from scratch.
            </p>

            <ProseImage
              src="/assets/images/fr-legends-livery-editor-custom-designs.jpg"
              alt="FR Legends livery editor showing custom paint and body kit options"
              caption="In-game screenshot of the livery editor in FR Legends."
              width={1200}
              height={675}
            />

            <p>
              None of this affects scoring directly, but it&apos;s a meaningful
              part of why the game has held a loyal following well past its
              initial release — the identity of a build matters to a lot of
              players as much as how it drives.
            </p>
            <p>
              Players looking for community designs and imports can also check
              our curated{" "}
              <Link href="/fr-legends-livery-codes/">
                FR Legends livery codes guide
              </Link>{" "}
              and{" "}
              <Link href="/best-anime-jdm-livery-codes/">
                anime &amp; JDM livery codes gallery
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===================== TROUBLESHOOTING COMMON ISSUES ===================== */}
      <section className="section" id="troubleshooting">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Problem Solving</span>
            <h2>Troubleshooting Common Issues</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Most FR Legends Mod APK install and performance errors fall into a
              small number of categories, and most have a straightforward fix.
            </p>

            <div className="grid grid-2" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
              <div className="card">
                <h3>App Won&apos;t Install</h3>
                <p>
                  This is almost always a blocked-source setting rather than a
                  broken file. Double-check that unknown sources are enabled for
                  the specific app you used to open the file — Android treats
                  this permission per-app, not system-wide, on newer versions.
                </p>
              </div>

              <div className="card">
                <h3>Game Crashes on Launch</h3>
                <p>
                  Usually points to insufficient RAM headroom or a corrupted
                  download. Closing background apps before launching helps on
                  lower-end devices, and re-downloading the file rules out a
                  partial or interrupted install.
                </p>
              </div>

              <div className="card">
                <h3>Progress Not Saving</h3>
                <p>
                  Local-only saves aren&apos;t tied to an account, so
                  uninstalling or clearing app data will erase them. If the base
                  game&apos;s cloud save feature is available in the build
                  you&apos;re using, linking an account before making major
                  progress is the safer habit.
                </p>
              </div>

              <div className="card">
                <h3>Controller Not Detected</h3>
                <p>
                  FR Legends is built primarily around touch controls — tilt,
                  slider, or on-screen buttons — and controller support
                  isn&apos;t consistent across every device and build. Some
                  players get partial functionality through emulator-level
                  controller mapping rather than native in-game support, so
                  results vary.
                </p>
              </div>

              <div className="card" style={{ gridColumn: "1 / -1" }}>
                <h3>Game Feels Laggy or Choppy</h3>
                <p>
                  This is usually a device headroom issue rather than something
                  wrong with the install itself. Lower-end devices running near
                  the minimum RAM spec can struggle once a few other apps are
                  sitting in the background, and older Android builds sometimes
                  handle the game&apos;s lighting effects less smoothly than more
                  recent versions.
                </p>
              </div>
            </div>

            <p>
              A lot of players blame the controller or the touch controls when
              the real issue is steering sensitivity — grip-oriented drifting
              generally needs Tilt or Slider steering rather than the button-based
              scheme, since buttons make fine steering input harder to hold
              consistently.
            </p>
            <p>
              It&apos;s common to blame the mod itself when the actual cause is
              a storage or thermal issue — a device running low on free space or
              overheating during a long session can cause the same stutter that
              people initially chalk up to the APK.
            </p>
            <p>
              For a wider error-by-error breakdown, our{" "}
              <Link href="/fr-legends-mod-apk-not-installing-fix/">
                full troubleshooting walkthrough
              </Link>{" "}
              covers device-specific cases this section doesn&apos;t have room
              for.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== PERFORMANCE AND SAFETY NOTES ===================== */}
      <section className="section" id="performance-safety">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Transparency</span>
            <h2>Performance and Safety Notes</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              FR Legends Mod APK, like any modified APK, typically violates the
              developer&apos;s terms of service and can carry security risk —
              the same as any file installed outside an official app store.
              That&apos;s not unique to this game; it&apos;s the trade-off of
              installing anything outside Google Play or the App Store. Being
              upfront about that trade-off is more useful than pretending it
              doesn&apos;t exist.
            </p>
            <p>
              Nothing here is guaranteed &ldquo;100% safe.&rdquo; What actually
              reduces risk is reviewing where a file comes from, scanning it
              before installing, and keeping a backup of anything you&apos;d be
              upset to lose. Twin Turbo Tech hasn&apos;t issued public statements
              specifically addressing modded builds, so any claim that a
              particular mod is &ldquo;developer-approved&rdquo; should be
              treated skeptically. See our{" "}
              <Link href="/disclaimer/">Disclaimer</Link> and{" "}
              <Link href="/editorial-policy/">Editorial Policy</Link> for our full
              transparency guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SCORING SYSTEM, BRIEFLY ===================== */}
      <section className="section" id="scoring-system">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Drift Judging</span>
            <h2>Scoring System, Briefly</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              FR Legends scores runs the way real drift competitions do — angle,
              line, speed, and proximity when you&apos;re trailing another car,
              plus bonus zones for clipping close to marked points and transition
              scoring between corners. Deductions apply for straightening out
              mid-drift, drifting the wrong direction, or clipping a wall too
              hard.
            </p>
            <p>
              New players often chase raw speed through a section when angle and
              line consistency actually score higher — going in fast and
              sliding wide loses more points than a slower, controlled line
              that holds its angle through the exit. For a full breakdown of how
              each scoring component works, our guide on{" "}
              <Link href="/fr-legends-battle-mode-guide/">
                how the scoring system actually works
              </Link>{" "}
              covers it in more depth than a summary can.
            </p>
            <p>
              The scoring system takes inspiration from real-world competitions
              such as Formula Drift and D1 Grand Prix, where angle, line,
              speed, and proximity all influence the final score.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FREQUENTLY ASKED QUESTIONS ===================== */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Answers</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%", marginBottom: "2rem" }}>
            <FaqAccordion items={HOME_FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ===================== FINAL THOUGHTS ===================== */}
      <section className="section" id="final-thoughts">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Summary</span>
            <h2>Final Thoughts on FR Legends Mod APK</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              This page covers the broad strokes of FR Legends Mod APK — version,
              features, install steps, and compatibility. Car-by-car handling
              notes, track layouts, tuning starting points, and PC/emulator setup
              are deep enough topics that they get their own dedicated coverage
              rather than being squeezed in here. For players who just want to
              get FR Legends Mod APK running without reading everything, the{" "}
              <Link href="/download/">download section</Link> and{" "}
              <a href="#how-to-install">compatibility table</a> are the fastest
              path. Individual topics such as tuning, controller setup, track
              guides, and car-specific recommendations deserve deeper
              explanations, and those guides are linked throughout the site so
              players can continue exploring the areas that matter most to
              them.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== WHY TRUST FR LEGENDS ZONE? ===================== */}
      <section className="section" id="why-trust" style={{ background: "var(--color-surface, #f9fafb)", borderTop: "1px solid var(--color-border, #e5e7eb)" }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">Our Commitment</span>
            <h2>Why Trust FR Legends Zone?</h2>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              FR Legends Zone is an independent fan resource and is not
              affiliated with Twin Turbo Tech. We review official game updates
              and regularly update our guides when new cars, tracks, features, or
              version changes are released.
            </p>

            {/* Author Box */}
            <div
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                marginTop: "1.5rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "var(--color-primary, #e11d48)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                RP
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted, #64748b)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Written &amp; maintained by
                </div>
                <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>
                  Rizky Pratama
                </div>
                <div style={{ marginTop: "0.25rem", display: "flex", gap: "1rem", fontSize: "0.9rem" }}>
                  <Link href="/editorial-policy/" style={{ textDecoration: "underline" }}>
                    Editorial Policy
                  </Link>
                  <Link href="/contact-us/" style={{ textDecoration: "underline" }}>
                    Report Outdated Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
