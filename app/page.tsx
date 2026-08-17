import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={SOFTWARE_JSON_LD} />
      <JsonLd data={FAQPAGE_JSON_LD} />

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <span className="kicker">Latest version &middot; v0.4.7</span>
            <h1>FR Legends Mod APK V0.4.7 Download (Unlimited Money &amp; New Cars)</h1>
            <p className="lede">
              If you&apos;ve searched for FR Legends Mod APK, you are probably
              looking for a way to enjoy the game without spending hours
              unlocking cars, tracks, upgrades, and customization options. The
              mod delivers unlimited money, unlocked cars and tracks, ad-free
              gameplay, and the FR Legends Mod Menu. Grab the latest build below
              or read the guide for installation, system requirements, and
              drifting tips.
            </p>
            <div className="hero-actions">
              <Link href="/download/" className="btn btn-primary btn-lg">
                Download FR Legends Mod APK Now &rarr;
              </Link>
              <Link href="/fr-legends-mod-apk-for-pc/" className="btn btn-outline btn-lg">
                Play on PC
              </Link>
            </div>
            <p className="hero-note">
              Also available:{" "}
              <Link href="/fr-legends-mod-apk-ios/">FR Legends Mod APK for iOS</Link>{" "}
              and <Link href="/fr-legends-mod-apk-old-versions/">older versions</Link>.
            </p>
            <div className="stat-badges" role="list" aria-label="Download information">
              <span className="stat-badge" role="listitem">
                Version <strong>0.4.7</strong>
              </span>
              <span className="stat-badge" role="listitem">
                Size <strong>~147 MB</strong>
              </span>
              <span className="stat-badge" role="listitem">
                Price <strong>Free</strong>
              </span>
              <span className="stat-badge" role="listitem">
                Android <strong>6.0+</strong>
              </span>
            </div>
          </div>
          <div className="hero-media">
            <ProseImage
              src="/assets/images/fr-legends-drift-racing-gameplay.jpg"
              alt="FR Legends Mod APK gameplay showing a drift car sliding through a corner"
              width={1200}
              height={675}
              priority
            />
          </div>
        </div>
      </section>

      {/* ===================== WHAT IS FR LEGENDS MOD APK ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Overview</span>
            <h2>What Is FR Legends Mod APK?</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              <strong>FR Legends Mod APK</strong> is a modified build of FR
              Legends, the mobile drift-racing game developed by Twin Turbo
              Tech. A modified version can provide access to features that
              normally require progression through the standard game.
            </p>
            <p>
              Depending on the particular build, common modifications include
              unlimited in-game money, unlocked cars, unlocked tracks, removed
              advertisements, and additional customization or feature options.
            </p>
            <p>
              People searching for <strong>mod FR Legends</strong>,{" "}
              <strong>FR Legends mod</strong>, or <strong>APK mod FR Legends</strong>{" "}
              are generally looking for a modified version that provides faster
              access to the game&apos;s content.
            </p>
            <p>The main features commonly associated with the mod include:</p>
            <ol>
              <li>
                <strong>Unlimited money</strong> so cars, upgrades, and
                customization can be accessed without the normal currency
                grind.
              </li>
              <li>
                <strong>Unlocked cars</strong> so players can experiment with
                different vehicles immediately.
              </li>
              <li>
                <strong>Unlocked tracks</strong> so more locations can be
                accessed without completing the standard progression.
              </li>
              <li>
                <strong>Ad-free gameplay</strong> on builds that include
                advertising removal.
              </li>
              <li>
                <strong>Mod menu options</strong> on builds that provide
                additional controls over certain features.
              </li>
            </ol>
            <p>
              The core appeal of FR Legends remains its drifting system. A mod
              does not automatically make someone a better driver. Players still
              need to learn throttle control, steering, braking, weight
              transfer, angle management, and racing lines.
            </p>
            <p>
              That distinction matters. Unlocking content removes a progression
              barrier, but it does not remove the skill required to control a
              car effectively.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MOD MENU AND KEY FEATURES ===================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">What you get</span>
            <h2>FR Legends Mod Menu and Key Features</h2>
            <p className="lede">
              The FR Legends Mod Menu is one of the features some players
              specifically look for when downloading a modified version of the
              game. Depending on the build, a mod menu can provide controls for
              features such as money, car unlocks, track unlocks, and other
              available options.
            </p>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Not every modified APK contains exactly the same menu or features,
              so the available controls can vary between versions. Always check
              the version information on the download page before installing.
            </p>
          </div>
          <div className="grid-2" style={{ marginTop: 28 }}>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M15 9.5c-.6-.9-1.7-1.5-3-1.5-1.9 0-3.5 1.1-3.5 2.5s1.6 2.5 3.5 2.5 3.5 1.1 3.5 2.5-1.6 2.5-3.5 2.5c-1.3 0-2.4-.6-3-1.5" />
                  <path d="M12 6v12" />
                </svg>
              </span>
              <h3>Unlimited Money Mod</h3>
              <p>
                One of the most common reasons people search for FR Legends Mod
                APK unlimited money, mod money FR Legends, or FR Legends mod
                unlimited money is to avoid the currency grind in the standard
                version. With an unlimited-money build, players can generally
                access vehicle purchases, engine upgrades, suspension upgrades,
                wheels and rims, body kits, cosmetic customization, and other
                currency-based features.
              </p>
              <p style={{ marginTop: 12 }}>
                Instead of repeatedly completing races simply to earn enough
                currency for another upgrade, players can experiment with
                different setups from the beginning. This is particularly useful
                for players who enjoy the tuning side of FR Legends, because
                different cars respond differently to changes in suspension,
                tires, power, and gearing.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 17l1.5-5.5L11 7h6l2 4 1 6" />
                  <path d="M5 17h14" />
                  <circle cx="8.5" cy="14.5" r="1.5" />
                  <circle cx="15.5" cy="14.5" r="1.5" />
                </svg>
              </span>
              <h3>All Cars Unlocked, Including New Cars</h3>
              <p>
                FR Legends Mod APK new cars searches are often connected to
                players wanting access to the game&apos;s expanding vehicle
                selection. An unlocked build can allow players to test different
                cars without first completing the normal progression
                requirements.
              </p>
              <p style={{ marginTop: 12 }}>
                Popular FR Legends cars include the Toyota AE86, Toyota Supra,
                Nissan Silvia S13, S14 and S15, Nissan Skyline R32, Mazda RX-7,
                BMW E30, BMW M3, Toyota GT86, Subaru BRZ, Subaru WRX STI, and
                Porsche 911 GT3. The exact vehicle selection can depend on the
                game and mod version installed. For a detailed vehicle
                breakdown, visit the{" "}
                <Link href="/fr-legends-cars-list/">FR Legends Cars List</Link>.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 3L3 9v6l6 6h6l6-6V9l-6-6H9z" />
                  <path d="M9 9l6 6" />
                  <path d="M15 9l-6 6" />
                </svg>
              </span>
              <h3>Unlocked Tracks</h3>
              <p>
                Tracks are another important part of the FR Legends experience.
                An unlocked build can provide access to multiple tracks
                immediately instead of requiring the player to progress through
                the game first.
              </p>
              <p style={{ marginTop: 12 }}>
                This is useful for players who want to practice different
                driving styles. A tight technical course requires different
                inputs from a faster open layout, while mountain tracks can
                place more emphasis on maintaining control through elevation
                changes and consecutive corners.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M5.6 5.6l12.8 12.8" />
                </svg>
              </span>
              <h3>Ad-Free Gameplay</h3>
              <p>
                Some FR Legends mod builds remove advertisements. For players
                who dislike interruptions between races or while navigating
                menus, an ad-free build can provide a more continuous
                experience.
              </p>
              <p style={{ marginTop: 12 }}>
                The exact advertising behavior depends on the particular version
                installed, so players should check the version information
                before downloading.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="18" height="10" rx="5" />
                  <circle cx="8.5" cy="12" r="1.8" />
                  <path d="M13 9.5h5" />
                  <path d="M13 14.5h5" />
                </svg>
              </span>
              <h3>Mod Menu and Feature Toggles</h3>
              <p>
                Some builds provide additional controls through a FR Legends Mod
                Menu. Depending on the build, these controls can include money
                options, car unlock options, track unlock options, other
                modified features, and enable or disable controls for supported
                features.
              </p>
              <p style={{ marginTop: 12 }}>
                A mod menu can be useful for players who want more control over
                which modified features are active rather than using a build
                where every feature is automatically enabled. The exact menu can
                vary by version, so do not assume that every FR Legends Mod APK
                has identical controls.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
              </span>
              <h3>Customization &amp; Livery Support</h3>
              <p>
                Beyond unlocks, the mod keeps the game&apos;s customization
                features fully usable, including the livery editor and community
                livery codes. Players can continue applying designs, painting
                cars, and sharing codes exactly as they would in the original
                game.
              </p>
              <p style={{ marginTop: 12 }}>
                Explore the complete{" "}
                <Link href="/fr-legends-livery-codes/">FR Legends Livery Codes</Link>{" "}
                collection for designs, or read our{" "}
                <Link href="/how-fr-legends-livery-codes-work/">
                  guide to how livery codes work
                </Link>
                .
              </p>
            </div>
          </div>
          <ProseImage
            src="/assets/images/fr-legends-mod-apk-infographic.svg"
            alt="Infographic: FR Legends Mod APK at a glance - unlimited money, all cars and tracks unlocked, ad-free gameplay, mod menu, and free download"
            width={1140}
            height={620}
            className="prose-img-feature"
            style={{ marginTop: 36 }}
          />
        </div>
      </section>

      {/* ===================== CAR MODS & COMMUNITY CAR PACKS ===================== */}
      <section className="section" id="car-mods">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Community content</span>
            <h2>FR Legends Car Mods &amp; Community Car Packs</h2>
            <p className="lede">
              Beyond the standard unlocked game, the FR Legends community also
              creates fan-made car modifications and custom vehicle packs.
            </p>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              These are different from simply unlocking cars already included in
              the official game. Community car packs can add different models,
              visual designs, liveries, body kits, or other modifications
              depending on the package.
            </p>
            <p>
              If you searched for <strong>FR Legends car mods</strong>,{" "}
              <strong>FR Legends mod car</strong>,{" "}
              <strong>FR Legends car mod pack</strong>, or{" "}
              <strong>download mod car FR Legends</strong>, this section
              provides an overview.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                Most-searched FR Legends car mod packs
              </caption>
              <thead>
                <tr>
                  <th scope="col">Car / Pack</th>
                  <th scope="col">What it adds</th>
                  <th scope="col">Common search terms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Toyota Supra Mod</strong>
                  </td>
                  <td>Custom Supra builds, body styles, and livery options</td>
                  <td>FR Legend mod Supra, FR Legends Toyota Supra mod</td>
                </tr>
                <tr>
                  <td>
                    <strong>Silvia S15 Mod</strong>
                  </td>
                  <td>Custom S15 body kits and tuning configurations</td>
                  <td>FR Legends mod S15, mod FR Legends S15</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mitsubishi L300 Mod</strong>
                  </td>
                  <td>
                    A fan-made L300 build for players looking for a different
                    vehicle style
                  </td>
                  <td>FR Legends mod L300, mod FR Legend L300</td>
                </tr>
                <tr>
                  <td>
                    <strong>Honda Jazz Mod</strong>
                  </td>
                  <td>Honda Jazz/Fit inspired custom vehicle builds</td>
                  <td>FR Legends mod car Honda Jazz</td>
                </tr>
                <tr>
                  <td>
                    <strong>Porsche Mod</strong>
                  </td>
                  <td>Porsche-inspired custom builds and visual modifications</td>
                  <td>FR Legends mod Porsche</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The Supra topic has enough interest to warrant dedicated coverage.
              See the{" "}
              <Link href="/fr-legends-supra-mod-apk/">
                FR Legends Supra Mod APK: Livery Codes &amp; Customization
              </Link>{" "}
              page for more information.
            </p>
            <p>
              Other car modifications can also be explored through the
              site&apos;s customization and livery resources.
            </p>
            <h3>How Car Mod Packs Are Installed</h3>
            <p>
              Car packs can use different installation methods depending on how
              they were created. Before installing any community modification:
            </p>
            <ul>
              <li>Back up important game data when possible.</li>
              <li>
                Check that the car pack is compatible with your installed game
                version.
              </li>
              <li>Use files from sources you trust.</li>
              <li>Avoid files that request unnecessary permissions.</li>
              <li>
                If a modification causes crashes, remove it and restore a clean
                installation.
              </li>
            </ul>
            <p>
              Car modifications are separate from the main unlocked APK, so
              installing one should not be treated as the same process as
              installing the base game.
            </p>
            <h3>Why L300 and Honda Jazz Builds Became Popular</h3>
            <p>
              The Mitsubishi L300 and Honda Jazz are examples of vehicles that
              gained attention within community-created FR Legends
              modifications. Instead of focusing only on traditional JDM drift
              cars, community modifications allow players to experiment with
              vehicles that are more unusual for a drift game. That variety is
              one of the reasons car modifications remain an interesting part of
              the FR Legends community.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SYSTEM REQUIREMENTS ===================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Compatibility</span>
            <h2>System Requirements</h2>
            <p className="lede">
              Before downloading FR Legends Mod APK, check that your device can
              handle the game.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                FR Legends Mod APK system requirements
              </caption>
              <thead>
                <tr>
                  <th scope="col">Requirement</th>
                  <th scope="col">Minimum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operating System</td>
                  <td>Android 6.0 or higher</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>4 GB or more</td>
                </tr>
                <tr>
                  <td>Processor</td>
                  <td>Quad-core 1.8 GHz or better</td>
                </tr>
                <tr>
                  <td>Graphics GPU</td>
                  <td>Adreno 530-class or better</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>At least 1 GB free space</td>
                </tr>
                <tr>
                  <td>Internet</td>
                  <td>Recommended for online features</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Actual performance can vary depending on the device, Android
            version, background applications, graphics settings, and the
            particular game build. Devices close to the minimum requirements may
            experience longer loading times or reduced performance compared with
            newer phones.
          </p>
        </div>
      </section>

      {/* ===================== HOW TO DOWNLOAD ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Getting started</span>
            <h2>How to Download FR Legends Mod APK</h2>
            <p className="lede">
              The basic process for downloading an APK outside the official app
              store is straightforward, but users should always verify the file
              before installing it.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number" aria-hidden="true">
                1
              </div>
              <div className="step-body">
                <h3>Open the download page</h3>
                <p>
                  Visit the site&apos;s dedicated{" "}
                  <Link href="/download/">FR Legends Mod APK download page</Link>.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                2
              </div>
              <div className="step-body">
                <h3>Download the APK file</h3>
                <p>
                  Check the listed version and file information before starting
                  the download.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                3
              </div>
              <div className="step-body">
                <h3>Review Android installation permissions</h3>
                <p>
                  Android may require permission for installing applications
                  from a source outside the Play Store.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                4
              </div>
              <div className="step-body">
                <h3>Install the APK</h3>
                <p>
                  Open the downloaded file and follow the Android installation
                  prompts.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                5
              </div>
              <div className="step-body">
                <h3>Launch the game</h3>
                <p>
                  After installation is complete, open FR Legends and check that
                  the expected features are available.
                </p>
              </div>
            </div>
          </div>
          <p>
            Android versions can display slightly different wording for
            installation permissions. If an installation fails, first check the
            Android version, available storage, APK compatibility, and whether
            another version of FR Legends is already installed.
          </p>
          <p>
            For additional troubleshooting, see{" "}
            <Link href="/fr-legends-mod-apk-not-installing-fix/">
              FR Legends Mod APK Not Installing: Common Fixes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ===================== VERSION HISTORY ===================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Releases</span>
            <h2>FR Legends Mod APK Version History</h2>
            <p className="lede">
              Searches for specific builds such as FR Legends Mod APK 0.2.7, FR
              Legends Mod APK 0.3.1, and FR Legends Mod APK latest version show
              that some players want either the newest release or an older
              version for compatibility.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                FR Legends Mod APK version history
              </caption>
              <thead>
                <tr>
                  <th scope="col">Version</th>
                  <th scope="col">Status</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>0.4.7</strong>
                  </td>
                  <td>
                    <strong>Current / Latest</strong>
                  </td>
                  <td>Current version used by this homepage</td>
                </tr>
                <tr>
                  <td>
                    <strong>0.3.1</strong>
                  </td>
                  <td>Previous</td>
                  <td>Older build</td>
                </tr>
                <tr>
                  <td>
                    <strong>0.2.7</strong>
                  </td>
                  <td>Legacy</td>
                  <td>Older version</td>
                </tr>
                <tr>
                  <td>
                    <strong>0.1.9</strong>
                  </td>
                  <td>Legacy</td>
                  <td>Early build</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The current homepage title uses <strong>V0.4.7</strong> as the
            target version and identifies it as the latest version for this
            site.
          </p>
          <p>
            For players who specifically need an older build, see the{" "}
            <Link href="/fr-legends-mod-apk-old-versions/">
              FR Legends Mod APK Old Versions
            </Link>{" "}
            page. For changes between releases, use the{" "}
            <Link href="/fr-legends-new-cars-update-log/">
              FR Legends New Cars and Update Log
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ===================== PLATFORM AVAILABILITY ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Where to play</span>
            <h2>Platform Availability</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Android</h3>
              <p>
                Android is the primary platform for APK-based installation. The
                main features discussed on this page are intended for Android
                users.
              </p>
            </div>
            <div className="card">
              <h3>PC</h3>
              <p>
                FR Legends can also be played on a Windows computer through a
                compatible Android emulator. Playing on a larger display can
                make it easier to see the racing line, while a keyboard or
                controller can provide an alternative control method. Follow the
                dedicated{" "}
                <Link href="/fr-legends-mod-apk-for-pc/">
                  FR Legends Mod APK for PC
                </Link>{" "}
                guide.
              </p>
            </div>
            <div className="card">
              <h3>iOS</h3>
              <p>
                The APK format is designed for Android and cannot simply be
                installed on an iPhone or iPad in the same way. For information
                specifically related to iOS, see the{" "}
                <Link href="/fr-legends-mod-apk-ios/">
                  FR Legends Mod APK for iOS
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CARS, TRACKS & GAME MODES ===================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The content</span>
            <h2>Cars, Tracks &amp; Game Modes</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <ProseImage
              src="/assets/images/fr-legends-touge-track-drift-gameplay.jpg"
              alt="FR Legends Mod APK drift gameplay on a touge track"
              width={1200}
              height={675}
              className="prose-img-feature"
            />
            <h3>Featured Cars</h3>
            <p>
              The unlocked version provides access to the game&apos;s available
              vehicle selection. Some popular cars include:
            </p>
            <ul>
              <li>Toyota AE86</li>
              <li>Toyota Supra MK4</li>
              <li>Toyota Supra MK5</li>
              <li>Nissan Silvia S13</li>
              <li>Nissan Silvia S14</li>
              <li>Nissan Silvia S15</li>
              <li>Nissan Skyline R32</li>
              <li>Nissan Skyline GT-R</li>
              <li>Mazda RX-7</li>
              <li>BMW E30</li>
              <li>BMW M3</li>
              <li>Mazda Miata</li>
              <li>Toyota GT86</li>
              <li>Subaru BRZ</li>
              <li>Subaru WRX STI</li>
              <li>Porsche 911 GT3</li>
            </ul>
            <p>
              This is a selection rather than a complete roster. For the full
              breakdown, visit the{" "}
              <Link href="/fr-legends-cars-list/">FR Legends Cars List</Link>.
              Players interested in performance rankings can also see the{" "}
              <Link href="/fr-legends-car-tier-list/">FR Legends Car Tier List</Link>.
            </p>
            <p>
              Which car works best depends heavily on playstyle. Lighter cars
              can reward precise inputs, while heavier and more powerful cars
              can carry more momentum through a drift. With more cars unlocked,
              players can experiment with several chassis before deciding which
              one suits their driving style.
            </p>
            <h3>Tracks</h3>
            <p>
              FR Legends includes a range of tracks designed around different
              types of drifting. Examples include:
            </p>
            <ul>
              <li>Irwindale Speedway</li>
              <li>School Course</li>
              <li>Drift Park</li>
              <li>Ebisu Minami</li>
              <li>Grange Motor Circuit</li>
              <li>Gunsai Touge</li>
              <li>Meihan Kansai</li>
              <li>Hiroshima</li>
              <li>USAIR Motorsport</li>
              <li>Ebisu Touge</li>
            </ul>
            <p>
              Each track requires a slightly different approach. Tighter courses
              reward accurate steering and throttle control, while faster
              layouts require players to manage speed and angle without losing
              their racing line. See the complete{" "}
              <Link href="/fr-legends-tracks-list/">FR Legends Tracks List</Link>{" "}
              for more information.
            </p>
            <h3>Game Modes</h3>
            <div className="table-wrap">
              <table>
                <caption className="visually-hidden">FR Legends game modes</caption>
                <thead>
                  <tr>
                    <th scope="col">Mode</th>
                    <th scope="col">What it is for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tutorial</td>
                    <td>Learn the basic controls</td>
                  </tr>
                  <tr>
                    <td>Practice</td>
                    <td>Experiment without scoring pressure</td>
                  </tr>
                  <tr>
                    <td>Solo Run</td>
                    <td>Drive tracks and test cars alone</td>
                  </tr>
                  <tr>
                    <td>Multiplayer</td>
                    <td>Compete with other players</td>
                  </tr>
                  <tr>
                    <td>Touge Attack</td>
                    <td>Mountain-pass driving challenges</td>
                  </tr>
                  <tr>
                    <td>Gymkhana</td>
                    <td>Precision driving challenges</td>
                  </tr>
                  <tr>
                    <td>Championship</td>
                    <td>Tournament-style progression</td>
                  </tr>
                  <tr>
                    <td>Battle Mode</td>
                    <td>Competitive drift battles</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              New players can start with the{" "}
              <Link href="/how-to-drift-in-fr-legends/">
                How to Drift in FR Legends
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== LIVERY CODES & CUSTOMIZATION ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Make it yours</span>
            <h2>Livery Codes &amp; Customization</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              One of the most recognizable customization features in FR Legends
              is its livery system. Players can use community-created livery
              codes to change the appearance of their vehicles.
            </p>
            <ProseImage
              src="/assets/images/fr-legends-livery-editor-custom-designs.jpg"
              alt="FR Legends livery editor showing custom car designs"
              width={1200}
              height={675}
              className="prose-img-feature"
            />
            <p>Popular livery themes include:</p>
            <ul>
              <li>JDM designs</li>
              <li>Racing liveries</li>
              <li>Manufacturer-inspired designs</li>
              <li>Anime-inspired graphics</li>
              <li>Custom logos</li>
              <li>Street-style builds</li>
            </ul>
            <p>
              The mod does not need to replace the basic livery system. Players
              can continue using the game&apos;s customization features where
              supported.
            </p>
            <p>
              Explore the complete{" "}
              <Link href="/fr-legends-livery-codes/">
                FR Legends Livery Codes
              </Link>{" "}
              collection for more designs.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== ORIGINAL VS MOD ===================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The comparison</span>
            <h2>Original vs Mod Version</h2>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                Comparison between the original FR Legends and the Mod APK
              </caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Original FR Legends</th>
                  <th scope="col">FR Legends Mod APK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cash</td>
                  <td>Limited and earned through gameplay</td>
                  <td>Unlimited on supported builds</td>
                </tr>
                <tr>
                  <td>Cars</td>
                  <td>Progression required</td>
                  <td>Unlocked on supported builds</td>
                </tr>
                <tr>
                  <td>Tracks</td>
                  <td>Progression required</td>
                  <td>Unlocked on supported builds</td>
                </tr>
                <tr>
                  <td>Customization</td>
                  <td>Available</td>
                  <td>Available with expanded access</td>
                </tr>
                <tr>
                  <td>Ads</td>
                  <td>May appear</td>
                  <td>Removed on supported builds</td>
                </tr>
                <tr>
                  <td>Mod Menu</td>
                  <td>Not included</td>
                  <td>Available on supported builds</td>
                </tr>
                <tr>
                  <td>Multiplayer</td>
                  <td>Available</td>
                  <td>Compatibility can vary</td>
                </tr>
                <tr>
                  <td>Core physics</td>
                  <td>Standard</td>
                  <td>Generally intended to remain unchanged</td>
                </tr>
                <tr>
                  <td>Updates</td>
                  <td>Official app-store updates</td>
                  <td>Manual updates may be required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The main difference is progression. The original version provides
              the standard progression system, while a modified build can
              provide faster access to content.
            </p>
            <p>
              Players who care about official updates and online compatibility
              may prefer the original version. Players who primarily want to
              experiment with cars, tracks, and customization may prefer an
              unlocked build.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== IS IT SAFE ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Trust</span>
            <h2>Is FR Legends Mod APK Safe?</h2>
          </div>
          <div className="note">
            <h3>The honest answer</h3>
            <p>
              Modified APK files require more caution than applications
              installed directly from an official app store. The main issue is
              not necessarily the game itself. The risk comes from downloading
              modified files from unknown or unreliable sources.
            </p>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>Before installing any APK:</p>
            <ul>
              <li>Download from a source you trust.</li>
              <li>Check the file and version information.</li>
              <li>
                Scan the file with a reputable security tool when possible.
              </li>
              <li>Review the permissions requested by the application.</li>
              <li>
                Avoid APKs that request unrelated access to contacts, messages,
                call logs, or other private information.
              </li>
              <li>
                Keep Android and your device security features updated.
              </li>
              <li>
                Avoid using important personal accounts inside modified
                applications.
              </li>
            </ul>
            <p>
              Online play is another consideration. Using a modified game in
              online environments can create compatibility issues or potentially
              violate the game&apos;s rules. Players who want the lowest risk
              should use the official version for online gameplay.
            </p>
            <p>
              For a more detailed discussion, see{" "}
              <Link href="/is-fr-legends-mod-apk-safe/">
                Is FR Legends Mod APK Safe? Risks, Bans &amp; Protection
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===================== TIPS FOR NEW PLAYERS ===================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Start strong</span>
            <h2>Tips for New Players</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Start With a Forgiving Car</h3>
              <p>
                The AE86 and Miata can be useful starting points because they
                allow players to learn weight transfer and basic drifting
                without immediately dealing with extreme power. See{" "}
                <Link href="/best-beginner-car-in-fr-legends/">
                  Best Beginner Car in FR Legends
                </Link>{" "}
                for a more detailed breakdown.
              </p>
            </div>
            <div className="card">
              <h3>Learn Handbrake Timing</h3>
              <p>
                The handbrake can help initiate a drift, but holding it for too
                long can remove too much speed. Practice short, controlled
                inputs before trying to use the handbrake aggressively.
              </p>
            </div>
            <div className="card">
              <h3>Practice Before Competitive Modes</h3>
              <p>
                Practice Mode provides a useful environment for learning the
                controls and understanding how a car reacts to throttle and
                steering changes. Once the controls feel natural, move into more
                competitive modes.
              </p>
            </div>
            <div className="card">
              <h3>Tune Before Adding More Power</h3>
              <p>
                More horsepower does not automatically make a car easier to
                drive. Suspension settings, tire behavior, gearing, steering
                response, and weight balance can have a major effect on how a
                vehicle feels. See the{" "}
                <Link href="/fr-legends-best-drift-settings-tuning-guide/">
                  FR Legends Best Drift Settings and Tuning Guide
                </Link>
                .
              </p>
            </div>
            <div className="card">
              <h3>Stick With One Car While Learning</h3>
              <p>
                Constantly switching between cars can make learning more
                difficult because different chassis have different handling
                characteristics. Choose one car and spend enough time with it to
                understand how it reacts.
              </p>
            </div>
            <div className="card">
              <h3>Focus on Your Racing Line</h3>
              <p>
                New players often focus only on creating a large drift angle. A
                controlled drift that stays close to the intended line can be
                more effective than a dramatic slide that sends the car too
                wide.
              </p>
            </div>
            <div className="card">
              <h3>Experiment With Different Tracks</h3>
              <p>
                Once you are comfortable with one course, try a different track.
                Technical courses, mountain roads, and faster layouts can help
                develop different aspects of car control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROS AND CONS ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The honest breakdown</span>
            <h2>Pros and Cons</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Pros</h3>
              <ul
                style={{
                  paddingLeft: "1.2em",
                  color: "var(--color-text-muted)",
                  margin: 0,
                }}
              >
                <li>Cars can be unlocked immediately on supported builds</li>
                <li>Unlimited money can reduce the normal progression grind</li>
                <li>More customization options can be accessed sooner</li>
                <li>Some builds remove advertisements</li>
                <li>Different cars can be tested immediately</li>
                <li>Multiple tracks can be available from the beginning</li>
                <li>
                  Community-created car modifications provide additional variety
                </li>
                <li>
                  Livery customization remains an important part of the
                  experience
                </li>
                <li>Offline play can be useful for practice</li>
              </ul>
            </div>
            <div className="card">
              <h3>Cons</h3>
              <ul
                style={{
                  paddingLeft: "1.2em",
                  color: "var(--color-text-muted)",
                  margin: 0,
                }}
              >
                <li>Modified APKs are not official app-store releases</li>
                <li>Manual updates may be required</li>
                <li>Compatibility can vary between versions</li>
                <li>
                  Modified online gameplay can create account or compatibility
                  risks
                </li>
                <li>Community car packs can vary in quality</li>
                <li>Unknown APK sources may present security risks</li>
                <li>Official support may not cover modified versions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONCLUSION ===================== */}
      <section className="section section-alt-2">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Final word</span>
            <h2>Conclusion</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              <strong>FR Legends Mod APK</strong> is primarily aimed at players
              who want to spend less time grinding for currency and unlocks and
              more time experimenting with cars, tracks, tuning, and drifting.
            </p>
            <p>
              With supported builds, features such as unlimited money, unlocked
              cars, unlocked tracks, ad-free gameplay, and additional mod
              options can make it possible to access more of the game from the
              beginning.
            </p>
            <p>
              The <strong>FR Legends Mod Menu</strong> can provide additional
              controls on supported builds, allowing players to manage features
              such as money, car unlocks, and track unlocks. The exact options
              depend on the version, so check the available build information
              before installing.
            </p>
            <p>
              The appeal of FR Legends is still its drifting system. Unlocking
              content does not replace the need to learn throttle control,
              steering, braking, weight transfer, racing lines, and car setup.
            </p>
            <p>
              Whether you are looking for{" "}
              <strong>FR Legends Mod APK unlimited money</strong>, the{" "}
              <strong>FR Legends Mod Menu</strong>, the latest version, an older
              build, specific car modifications, livery codes, or information
              about PC and iOS availability, the related pages on this site
              provide more focused information.
            </p>
            <p style={{ marginTop: 24 }}>
              <Link href="/download/" className="btn btn-primary btn-lg">
                Download FR Legends Mod APK &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Questions, answered</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={HOME_FAQ_ITEMS} />
        </div>
      </section>
    </>
  );
}
