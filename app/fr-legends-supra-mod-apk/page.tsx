import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import FaqAccordion from "@/components/FaqAccordion";
import ProseImage from "@/components/ProseImage";
import { articleMetadata, getArticle } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-supra-mod-apk");

export default function FrLegendsSupraModApkPage() {
  return (
    <ArticlePage
      slug="fr-legends-supra-mod-apk"
      layout="sections"
      title="FR Legends Supra Mod, Codes, Tuning & Specs"
      lede="The MK4 Supra is the most requested car in the FR Legends community. Here is how the mod puts it in your garage from day one, plus the codes and tuning that make it drift like the icon it is."
      metaLine="Last updated: <strong>August 16, 2026</strong>, Version <strong>0.4.7</strong>"
      asSection={false}
    >
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The icon</span>
            <h2>The Supra in FR Legends</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              FR Legends, the drift sim from Twin Turbo Tech, gives players the
              MK4 Supra, the JZA80 with the legendary 2JZ inline-six under the
              hood. In the game it behaves the way the community expects: big
              torque low in the rev range, a long wheelbase that holds angle
              comfortably, and a body that looks spectacular mid-slide. It is
              not the lightest car in the garage and it is not the twitchiest,
              that is exactly why so many players love it.
            </p>
            <p>
              It is also, in the original game, one of the most expensive cars
              to reach. The Supra sits behind a large coin price, so new
              players spend hours grinding Solo Runs and Championships before
              they can afford it. The <Link href="/">FR Legends Mod Apk</Link>{" "}
              removes that wall entirely: install the latest build from our{" "}
              <Link href="/download/">download page</Link> and the Supra is
              sitting in your garage at the first launch, already unlocked, no
              coins spent.
            </p>
            <ProseImage
              src="/assets/images/fr-legends-car-tuning-upgrade-screen.jpg"
              alt="FR Legends car tuning and upgrade screen"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Under the hood</span>
            <h2>Supra Specs at a Glance</h2>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                Approximate in-game specifications for the Toyota Supra in FR
                Legends
              </caption>
              <thead>
                <tr>
                  <th scope="col">Spec</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Power</td>
                  <td>Approx. 330 hp stock, 500+ hp fully upgraded</td>
                </tr>
                <tr>
                  <td>Torque</td>
                  <td>Approx. 315 lb-ft stock, notably higher tuned</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>Approx. 3,400 lb (heavy for its class)</td>
                </tr>
                <tr>
                  <td>Drive</td>
                  <td>Rear-wheel drive</td>
                </tr>
                <tr>
                  <td>Top speed</td>
                  <td>Approx. 170 mph fully upgraded</td>
                </tr>
                <tr>
                  <td>In-game price</td>
                  <td>One of the highest coin prices in the original</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            These values are approximate, based on how the car drives in the
            current version, exact numbers shift between updates and are
            rounded from gameplay observation. What matters is the character:
            the Supra is a momentum car. It would rather hold a long, smooth
            slide at Irwindale Speedway or Grange Motor Circuit than dance
            through the tight hairpins of Ebisu Minami.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Wraps for the icon</span>
            <h2>Supra Livery Codes</h2>
          </div>
          <div className="note">
            <p>
              Example codes in community format, verify before applying. These
              are placeholder examples, not verified working builds.
            </p>
          </div>
          <div className="table-wrap">
            <table className="code-table">
              <caption className="visually-hidden">
                Example livery codes for the Toyota Supra
              </caption>
              <thead>
                <tr>
                  <th scope="col">Design</th>
                  <th scope="col">Type</th>
                  <th scope="col">Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Black & gold classic</td>
                  <td>Body</td>
                  <td>BKG0-2JZG-OLDS-UPRA</td>
                </tr>
                <tr>
                  <td>2JZ engine tribute</td>
                  <td>Body</td>
                  <td>2JZ0-ENGN-TRIB-UTE1</td>
                </tr>
                <tr>
                  <td>Black widow</td>
                  <td>Body</td>
                  <td>BLKW-1D0W-SUPR-A001</td>
                </tr>
                <tr>
                  <td>White with red accents</td>
                  <td>Body</td>
                  <td>WHTR-3DAC-CENT-SUPR</td>
                </tr>
                <tr>
                  <td>Gold wheels tribute</td>
                  <td>Body</td>
                  <td>G0LD-4WHL-SUPR-AJZR</td>
                </tr>
                <tr>
                  <td>Kanji side art</td>
                  <td>Window</td>
                  <td>KNJ1-4SDE-SUPR-2JZ2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For a wider selection of designs across every car, including the
            anime and JDM deep cuts, browse the{" "}
            <Link href="/fr-legends-livery-codes/">
              full livery code library
            </Link>
            . Because the mod unlocks all cars, you can preview each wrap on
            the Supra and the RX-7 side by side before choosing where it lives.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Make it slide</span>
            <h2>Drift Tuning Tips for the Supra</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The Supra's weight is both its strength and its weakness. Used
              well, that mass carries through long corners; used badly, it
              fights you on initiation. A few starting points:
            </p>
            <ul>
              <li>
                <strong>Camber:</strong> a mild negative camber on the front
                (around -3 degrees) sharpens turn-in without making the car
                darty on straights.
              </li>
              <li>
                <strong>Suspension stiffness:</strong> keep it medium-soft. Too
                stiff and the Supra snaps out of angle; too soft and the nose
                dives mid-transition.
              </li>
              <li>
                <strong>Steering sensitivity:</strong> the 2JZ responds well to
                gentle counter-steer, so lower sensitivity stops you
                over-correcting.
              </li>
              <li>
                <strong>Tire choice:</strong> stock tires give the Supra
                controllable slip; softer compound builds speed but needs more
                throttle discipline.
              </li>
            </ul>
            <p>
              These are starting points, not gospel, every driving style
              changes what works. Our{" "}
              <Link href="/fr-legends-best-drift-settings-tuning-guide/">
                drift settings and tuning guide
              </Link>{" "}
              walks through each slider and how it interacts, and the{" "}
              <Link href="/fr-legends-car-tier-list/">car tier list</Link>{" "}
              explains where the Supra sits against the rest of the roster.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Why the mod wins here</span>
            <h2>How the Mod Helps Supra Owners</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Owning a Supra in the original game is a project: weeks of coin
              grinding, then more grinding for engine and transmission
              upgrades. The mod collapses all of that into minutes. Unlimited
              money means you buy the Supra instantly, max the drivetrain, and
              test builds freely, swap suspension setups, try different tires,
              and throw it at every track to find the combination that clicks.
            </p>
            <p>
              Because upgrades are reversible at no cost when money is
              unlimited, you can A/B test a stiff setup against a soft one on
              the same corner. That is the fastest way to learn both the car
              and the game's physics. When the physics of the original get
              updated, the mod repacks to match, so your Supra never drives a
              different game from the one Twin Turbo Tech ships.
            </p>
            <p>
              The Supra is one of several flagship builds we cover, compare it
              with the rotary <Link href="/fr-legends-rx7-mod-livery-codes/">RX-7</Link>,
              the European{" "}
              <Link href="/fr-legends-bmw-drift-mods/">BMW E30 and M3</Link>,
              or scan the <Link href="/fr-legends-cars-list/">full cars list</Link>{" "}
              before you commit your garage space.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Questions, answered</span>
            <h2>FR Legends Supra, FAQ</h2>
          </div>
          <FaqAccordion items={getArticle("fr-legends-supra-mod-apk").accordionItems} />
        </div>
      </section>
    </ArticlePage>
  );
}
