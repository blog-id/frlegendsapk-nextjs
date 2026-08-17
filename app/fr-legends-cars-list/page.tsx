import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import FaqAccordion from "@/components/FaqAccordion";
import ProseImage from "@/components/ProseImage";
import { articleMetadata, getArticle } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-cars-list");

export default function FrLegendsCarsListPage() {
  return (
    <ArticlePage
      slug="fr-legends-cars-list"
      layout="sections"
      title="FR Legends Cars List, The Full Roster"
      lede="Over 30 cars, from the humble AE86 to the premium 911 GT3. Here is the complete roster, how each car is unlocked in the original game, and what the mod changes about all of it."
      metaLine="Last updated: <strong>August 16, 2026</strong>, Version <strong>0.4.7</strong>"
      asSection={false}
    >
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The garage</span>
            <h2>Every Car in FR Legends</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              FR Legends, the drift game by Twin Turbo Tech, has grown its
              garage from a small starter selection into a roster of more than
              30 cars spanning Japanese tuners, European classics, American
              muscle, and modern drift platforms. The mod version of the game
              unlocks every single one of them instantly, in the original, you
              earn cars through coins, career progress, and occasionally
              real-money purchases.
            </p>
            <ProseImage
              src="/assets/images/fr-legends-nissan-silvia-s15.jpg"
              alt="Nissan Silvia S15 in the FR Legends garage"
              width={800}
              height={800}
            />
          </div>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                The full FR Legends car roster with class, original unlock
                method, and mod status
              </caption>
              <thead>
                <tr>
                  <th scope="col">Car</th>
                  <th scope="col">Class</th>
                  <th scope="col">How to unlock (original)</th>
                  <th scope="col">Mod status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Toyota AE86</td>
                  <td>Compact classic</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Toyota Supra (MK4)</td>
                  <td>Sports icon</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Toyota GT86</td>
                  <td>Modern sports</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Toyota MR2</td>
                  <td>Mid-engine compact</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Nissan Silvia S13</td>
                  <td>Tuner</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Nissan Silvia S14</td>
                  <td>Tuner</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Nissan Silvia S15</td>
                  <td>Tuner flagship</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Nissan 180SX</td>
                  <td>Tuner</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Nissan Skyline GT-R (R32)</td>
                  <td>AWD legend</td>
                  <td>Career progress</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Nissan Fairlady Z</td>
                  <td>Sports</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Mazda RX-7</td>
                  <td>Rotary sports</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Mazda Miata</td>
                  <td>Roadster</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Honda S2000</td>
                  <td>Roadster</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Subaru BRZ</td>
                  <td>Modern sports</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Subaru Impreza WRX STI</td>
                  <td>Rally</td>
                  <td>Career progress</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Mitsubishi Lancer Evolution</td>
                  <td>Rally</td>
                  <td>Career progress</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>BMW E30</td>
                  <td>European classic</td>
                  <td>Coins</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>BMW M3</td>
                  <td>European performance</td>
                  <td>Premium / real money</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Dodge Challenger</td>
                  <td>Muscle</td>
                  <td>Premium / real money</td>
                  <td>Unlocked instantly</td>
                </tr>
                <tr>
                  <td>Porsche 911 GT3</td>
                  <td>Premium supercar</td>
                  <td>Premium / real money</td>
                  <td>Unlocked instantly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The garage also includes a few more models beyond this table, newer
            additions and event cars that rotate in and out, but this is the
            core roster you will spend your time with. The pattern holds for
            all of them: in the original, a grind; in the mod, one tap away.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The grind, explained</span>
            <h2>How Unlocks Work in the Original</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              In the vanilla game, the garage is a progression system in
              disguise. Most cars are bought with <strong>coins</strong>,
              earned from finishing Solo Runs, Championships, and Touge Attack
              stages. Payouts are modest, and prices scale steeply, the Supra,
              RX-7, and S15 cost thousands, so a player on the standard loop
              can expect a long stretch of saving between purchases. That is
              the deliberate pacing of the game: every car is a milestone.
            </p>
            <p>
              Some cars are tied to <strong>career progress</strong> rather
              than price. The Skyline GT-R R32, the WRX STI, and the Lancer
              Evolution unlock as you clear championships and advance through
              the campaign, which means even with enough coins, you cannot buy
              them early. And at the top of the ladder sit the{" "}
              <strong>premium cars</strong>, the BMW M3, Dodge Challenger, and
              Porsche 911 GT3, which in the original are tied to real-money
              purchases or special event rewards.
            </p>
            <p>
              The mod removes the entire ladder. Unlimited money covers the
              coin purchases, all cars are flagged as unlocked from the first
              launch, and the premium tier costs nothing. The result is that
              the roster above is yours in full on day one, the same drift
              physics, the same handling, just without the economy gate. If
              you want the exact differences spelled out, our{" "}
              <Link href="/">main mod page</Link> has the full
              original-vs-mod breakdown, and the current build is always on
              the <Link href="/download/">download page</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Find your ride</span>
            <h2>Which Car Should You Pick?</h2>
            <p className="lede">The mod gives you everything, the question is where to start.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Toyota Supra (MK4)</h3>
              <p>
                The community's most-requested car: 2JZ torque, long slides,
                and a huge livery library.{" "}
                <Link href="/fr-legends-supra-mod-apk/">Supra mod page â†’</Link>
              </p>
            </div>
            <div className="card">
              <h3>Mazda RX-7 (FD)</h3>
              <p>
                Light, revvy, and razor-sharp on technical tracks.{" "}
                <Link href="/fr-legends-rx7-mod-livery-codes/">
                  RX-7 mod page â†’
                </Link>
              </p>
            </div>
            <div className="card">
              <h3>BMW E30 & M3</h3>
              <p>
                The European classics, forgiving to learn, rewarding to
                master.{" "}
                <Link href="/fr-legends-bmw-drift-mods/">
                  BMW mods page â†’
                </Link>
              </p>
            </div>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Still deciding? Our <Link href="/fr-legends-car-tier-list/">car tier list</Link>{" "}
              ranks the whole roster by drift performance, the{" "}
              <Link href="/best-beginner-car-in-fr-legends/">
                best beginner car guide
              </Link>{" "}
              picks the gentlest starters, and the{" "}
              <Link href="/fr-legends-best-drift-settings-tuning-guide/">
                drift settings guide
              </Link>{" "}
              will have you tuning whichever you choose. The honest advice:
              pick the AE86 or Miata first, learn the physics, then spend the
              unlimited money on the icon of your choice.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Questions, answered</span>
            <h2>FR Legends Cars List, FAQ</h2>
          </div>
          <FaqAccordion items={getArticle("fr-legends-cars-list").accordionItems} />
        </div>
      </section>
    </ArticlePage>
  );
}
