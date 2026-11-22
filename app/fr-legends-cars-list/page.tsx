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
      metaLine="Last updated: <strong>September 10, 2026</strong>, Version <strong>0.4.8</strong>"
      asSection={false}
    >
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The garage</span>
            <h2>Every Car in FR Legends</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            
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
              Some cars are tied to <strong>career progress</strong> rather
              than price. The Skyline GT-R R32, the WRX STI, and the Lancer
              Evolution unlock as you clear championships and advance through
              the campaign, which means even with enough coins, you cannot buy
              them early. And at the top of the ladder sit the{" "}
              <strong>premium cars</strong>, the BMW M3, Dodge Challenger, and
              Porsche 911 GT3, which in the original are tied to real-money
              purchases or special event rewards.
            </p>
            
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Find your ride</span>
            <h2>Which Car Should You Pick?</h2>
            
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Toyota Supra (MK4)</h3>
              
            </div>
            <div className="card">
              <h3>Mazda RX-7 (FD)</h3>
              
            </div>
            <div className="card">
              <h3>BMW E30 & M3</h3>
              
            </div>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            
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
