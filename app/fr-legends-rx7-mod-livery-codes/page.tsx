import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import FaqAccordion from "@/components/FaqAccordion";
import ProseImage from "@/components/ProseImage";
import { articleMetadata, getArticle } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-rx7-mod-livery-codes");

export default function FrLegendsRx7ModLiveryCodesPage() {
  return (
    <ArticlePage
      slug="fr-legends-rx7-mod-livery-codes"
      layout="sections"
      title="FR Legends RX-7, Mod, Livery Codes & Drift Setup"
      lede="The FD3S RX-7 is the technical-track specialist of the FR Legends garage, light, revvy, and endlessly satisfying when you learn to keep the rotary singing."
      metaLine="Last updated: <strong>August 16, 2026</strong>, Version <strong>0.4.7</strong>"
      asSection={false}
    >
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The rotary</span>
            <h2>The RX-7 in FR Legends</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              FR Legends models the FD3S generation of the Mazda RX-7, and it
              captures the real car's character beautifully: a rotary engine
              that spins freely to high revs, a chassis that weighs almost
              nothing, and responses that feel almost telepathic compared to
              the heavier cars in the garage. The FD rewards drivers who keep
              the engine on the boil, drop the revs and the slide collapses;
              hold them and the car goes wherever you point it.
            </p>
            <p>
              That responsiveness makes it the favorite for technical circuits.
              On Ebisu Minami's narrow, bumpy sections and the tight
              transitions of School Course, the RX-7's quick reactions save you
              from corrections that heavier cars simply can't make. In
              Multiplayer and Battle Mode tandems it is a common sight, usually
              wearing something loud.
            </p>
            <p>
              Unlock-wise, the original game puts the RX-7 behind a mid-tier
              coin price, reachable after a decent campaign run, but still a
              chunk of grinding. The <Link href="/">FR Legends Mod Apk</Link>{" "}
              skips all of it: grab the build from our{" "}
              <Link href="/download/">download page</Link> and the FD is in
              your garage before you finish the Tutorial.
            </p>
            <ProseImage
              src="/assets/images/fr-legends-mazda-rx7-fd3s.jpg"
              alt="Mazda RX-7 FD3S in the FR Legends garage"
              width={800}
              height={800}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Under the hood</span>
            <h2>RX-7 Specs at a Glance</h2>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                Approximate in-game specifications for the Mazda RX-7 in FR
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
                  <td>Approx. 280 hp stock, 400+ hp fully upgraded</td>
                </tr>
                <tr>
                  <td>Torque</td>
                  <td>Approx. 235 lb-ft stock (rotary, high-rev character)</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>Approx. 2,800 lb (one of the lightest in class)</td>
                </tr>
                <tr>
                  <td>Drive</td>
                  <td>Rear-wheel drive</td>
                </tr>
                <tr>
                  <td>Top speed</td>
                  <td>Approx. 160 mph fully upgraded</td>
                </tr>
                <tr>
                  <td>In-game price</td>
                  <td>Mid-tier coin price in the original</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Approximate values again, rounded from gameplay rather than
            official numbers, and they shift between updates. The takeaway is
            the character: light, high-revving, and quick to change direction.
            The RX-7 trades the Supra's lazy torque for agility, and on a tight
            track that trade pays off.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Rotary style</span>
            <h2>RX-7 Livery Codes</h2>
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
                Example livery codes for the Mazda RX-7
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
                  <td>Veilside-style wide body look</td>
                  <td>Body</td>
                  <td>V5L5-1D3W-IDEB-0DY1</td>
                </tr>
                <tr>
                  <td>Kanjo-style</td>
                  <td>Body</td>
                  <td>KNJ0-13BR-X7BA-TTLE</td>
                </tr>
                <tr>
                  <td>13B rotary tribute</td>
                  <td>Body</td>
                  <td>13B0-R0TA-RYFD-3S5X</td>
                </tr>
                <tr>
                  <td>Matte black</td>
                  <td>Body</td>
                  <td>M4TT-3BL4-CKFD-3S0X</td>
                </tr>
                <tr>
                  <td>Spirit R homage</td>
                  <td>Body</td>
                  <td>SPRT-RF00-MH0M-AGE1</td>
                </tr>
                <tr>
                  <td>Kanjo window banner</td>
                  <td>Window</td>
                  <td>KNJ0-W1ND-0W13-BRXX</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            More designs across the whole garage live in the{" "}
            <Link href="/fr-legends-livery-codes/">
              main livery code library
            </Link>
            . The mod makes code-hunting easy: with every car unlocked, you can
            preview a Kanjo wrap on the RX-7, the GT86, and the Silvia S15 back
            to back without spending a coin.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Make it sing</span>
            <h2>Best Drift Setup for the RX-7</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The RX-7 has a simple personality: it likes to be soft and it
              likes to be loud. Start with the suspension on the softer side,
              the FD communicates through body roll, and a stiff setup deadens
              the signals it uses to warn you about mid-corner grip loss. Keep
              the dampers progressive rather than harsh and let the rear squat
              into its power band.
            </p>
            <p>
              Steering sensitivity should sit lower than you'd expect; the car
              is so quick that high sensitivity produces twitchy,
              over-corrected lines. The golden rule is keeping the rotary in
              its power band, hold a gear longer than feels natural, and let
              the engine's high-rev response pull you through transitions on
              Ebisu Minami and Gunsal Touge. Our{" "}
              <Link href="/fr-legends-best-drift-settings-tuning-guide/">
                tuning guide
              </Link>{" "}
              covers every slider in detail, and the{" "}
              <Link href="/how-to-build-the-perfect-drift-car/">
                perfect drift car guide
              </Link>{" "}
              explains how weight and power interact when you are choosing
              upgrades.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Why the mod wins here</span>
            <h2>How the Mod Changes the RX-7 Experience</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              The RX-7's coin price in the original is the first barrier, and
              upgrades are the second, a fully tuned FD costs a fortune in
              parts. The mod removes both with unlimited money and all cars
              unlocked. That matters more for the RX-7 than for most cars,
              because the FD is heavily upgrade-sensitive: a stock RX-7 feels
              anaemic, while a maxed one is one of the fastest transition cars
              in the game. You can feel that curve yourself, in a single
              evening, instead of over weeks of grinding.
            </p>
            <p>
              It also lets you experiment with the livery editor without
              commitment, apply a wrap, drift a lap, change it. And when you
              are ready to compare rivals, the{" "}
              <Link href="/fr-legends-supra-mod-apk/">Supra page</Link>, the{" "}
              <Link href="/fr-legends-bmw-drift-mods/">BMW page</Link>, and
              the <Link href="/fr-legends-cars-list/">full cars list</Link>{" "}
              are all one tap away.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Questions, answered</span>
            <h2>FR Legends RX-7, FAQ</h2>
          </div>
          <FaqAccordion items={getArticle("fr-legends-rx7-mod-livery-codes").accordionItems} />
        </div>
      </section>
    </ArticlePage>
  );
}
