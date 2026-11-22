import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import FaqAccordion from "@/components/FaqAccordion";
import ProseImage from "@/components/ProseImage";
import { articleMetadata, getArticle } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-livery-codes");

export default function FrLegendsLiveryCodesPage() {
  return (
    <ArticlePage
      slug="fr-legends-livery-codes"
      layout="sections"
      title="FR Legends Livery Codes, The Library"
      lede="Body codes, window codes, and the community designs that make every garage look like a car show. Browse the library, learn the paste-and-go method, and turn your build into something worth a second look in Multiplayer lobbies."
      metaLine="Guide reviewed: <strong>November 23, 2026</strong>"
      asSection={false}
    >
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The basics</span>
            <h2>What Are Livery Codes?</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>
              Livery codes are text strings that store a full paint job in FR
              Legends. Paste one into the livery editor and the design,
              stripes, kanji, gradients, sponsor text, you name it,
              materializes on your car instantly. There are two flavors:{" "}
              <strong>body codes</strong>, which paint the car itself, and{" "}
              <strong>window codes</strong>, which handle the glass and
              surrounding trim. Most full wraps use one of each, applied
              through separate tabs in the editor.
            </p>
            <p>
              The deep mechanics, how the code format encodes colors and
              layers, and how you can build your own designs from scratch,
              deserve their own write-up, and we have exactly that in our{" "}
              <Link href="/how-fr-legends-livery-codes-work/">
                how livery codes work explainer
              </Link>
              . Here we keep it practical: what the best community designs are
              and how to apply them.
            </p>
            <ProseImage
              src="/assets/images/fr-legends-livery-editor-custom-designs.jpg"
              alt="FR Legends livery editor screenshot with a custom JDM-style design applied"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Apply it in a minute</span>
            <h2>How to Apply a Code</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number" aria-hidden="true">1</div>
              <div className="step-body">
                <h3>Open the car in your garage</h3>
                
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">2</div>
              <div className="step-body">
                <h3>Go to the liveries section</h3>
                <p>
                  From the car's customization screen, tap the livery or paint
                  option to open the design editor.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">3</div>
              <div className="step-body">
                <h3>Choose the body or window editor</h3>
                <p>
                  Body codes go into the body tab, window codes into the window
                  tab. Pasted into the wrong tab, a code simply won't produce
                  the design.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">4</div>
              <div className="step-body">
                <h3>Paste the code and confirm</h3>
                <p>
                  Long-press the text field, paste the string exactly as
                  written, and confirm. The design applies immediately, exit to
                  the garage and enjoy it.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The library</span>
            <h2>Livery Code Library</h2>
            <p className="lede">
              A rotating selection of community-style designs, from Initial D
              tributes to clean motorsport stripes.
            </p>
          </div>
          <div className="note">
            <p>
              Example codes in community format, verify before applying. Codes
              like these are shared between players daily, but a single
              character difference changes the whole design, so always compare
              the string you paste with the one on screen.
            </p>
          </div>
          <div className="table-wrap">
            <table className="code-table">
              <caption className="visually-hidden">
                Example FR Legends livery codes with design, type, code, and
                best car
              </caption>
              <thead>
                <tr>
                  <th scope="col">Design</th>
                  <th scope="col">Type</th>
                  <th scope="col">Code</th>
                  <th scope="col">Best car</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Black & gold Supra</td>
                  <td>Body</td>
                  <td>BKG0-2JZG-OLDS-UPRA</td>
                  <td>Toyota Supra</td>
                </tr>
                <tr>
                  <td>Tofu shop AE86</td>
                  <td>Body</td>
                  <td>TOFU-86RO-CKS1-NITD</td>
                  <td>Toyota AE86</td>
                </tr>
                <tr>
                  <td>Godzilla blue/silver</td>
                  <td>Body</td>
                  <td>GDZL-32BL-UEXX-SILV</td>
                  <td>Nissan GT-R R32</td>
                </tr>
                <tr>
                  <td>Kanjo-style RX-7</td>
                  <td>Body</td>
                  <td>KNJ0-13BR-X7BA-TTLE</td>
                  <td>Mazda RX-7</td>
                </tr>
                <tr>
                  <td>Kanjo window banner</td>
                  <td>Window</td>
                  <td>KNJ0-W1ND-0W13-BRXX</td>
                  <td>Mazda RX-7</td>
                </tr>
                <tr>
                  <td>S15 graffix</td>
                  <td>Body</td>
                  <td>S15G-RAFF-1XXX-SIDE</td>
                  <td>Nissan Silvia S15</td>
                </tr>
                <tr>
                  <td>E30 motorsport stripes</td>
                  <td>Body</td>
                  <td>E30M-0T0R-SP0R-TM5X</td>
                  <td>BMW E30</td>
                </tr>
                <tr>
                  <td>Miata pop-up tribute</td>
                  <td>Body</td>
                  <td>M1AT-A4EV-0P0P-UPB1</td>
                  <td>Mazda Miata</td>
                </tr>
                <tr>
                  <td>GT86 tofu shop</td>
                  <td>Body</td>
                  <td>GT86-TOFU-SH0P-XXX1</td>
                  <td>Toyota GT86</td>
                </tr>
                <tr>
                  <td>GT86 shop sign window</td>
                  <td>Window</td>
                  <td>GT86-W1ND-0WSH-0PXX</td>
                  <td>Toyota GT86</td>
                </tr>
                <tr>
                  <td>BRZ rally-style</td>
                  <td>Body</td>
                  <td>BRZR-ALLY-01ST-YL3X</td>
                  <td>Subaru BRZ</td>
                </tr>
                <tr>
                  <td>WRX STI blue</td>
                  <td>Body</td>
                  <td>WRS1-BLUE-G0LD-XXM5</td>
                  <td>Subaru WRX STI</td>
                </tr>
                <tr>
                  <td>Evo rally livery</td>
                  <td>Body</td>
                  <td>EV0R-ALLY-STRP-1P0N</td>
                  <td>Mitsubishi Evo</td>
                </tr>
                <tr>
                  <td>911 GT3 matte</td>
                  <td>Body</td>
                  <td>911M-ATTE-BL4C-KM5X</td>
                  <td>Porsche 911 GT3</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Paste like a pro</span>
            <h2>Tips for Applying Codes</h2>
          </div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <ul>
              <li>
                <strong>Exact match matters.</strong> Codes are sensitive to
                every character. A zero swapped for the letter O, or a missing
                hyphen, and the design either fails or renders differently than
                the screenshot.
              </li>
              <li>
                <strong>Watch case and spacing.</strong> Some codes use
                uppercase, some mix case. Copy the string, don't retype it, and
                never leave a trailing space after the last character.
              </li>
              <li>
                <strong>Check the tab.</strong> Body code into the window
                editor (or the reverse) is the most common "broken code"
                report, and the easiest fix.
              </li>
              
              <li>
                <strong>Combine body and window codes.</strong> The best-looking
                cars usually layer a window banner over a body wrap, the two
                editors were designed to work together.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Keep exploring</span>
            <h2>Where the Deep Cuts Live</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Anime & JDM roundup</h3>
              <p>
                Initial D, Wangan, touge classics, the full collection of
                pop-culture wraps lives in our{" "}
                <Link href="/best-anime-jdm-livery-codes/">
                  anime and JDM livery codes post
                </Link>
                .
              </p>
            </div>
            <div className="card">
              <h3>Supra builds</h3>
              
            </div>
            <div className="card">
              <h3>RX-7 & BMW</h3>
              
            </div>
          </div>
          
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Questions, answered</span>
            <h2>Livery Codes, FAQ</h2>
          </div>
          <FaqAccordion items={getArticle("fr-legends-livery-codes").accordionItems} />
        </div>
      </section>
    </ArticlePage>
  );
}
