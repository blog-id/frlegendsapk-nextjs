import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import ProseImage from "@/components/ProseImage";
import { articleMetadata } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("how-fr-legends-livery-codes-work");

export default function HowFrLegendsLiveryCodesWorkPage() {
  return (
    <ArticlePage slug="how-fr-legends-livery-codes-work">
      <ProseImage
        src="/assets/images/fr-legends-livery-editor-custom-designs.jpg"
        alt="FR Legends livery editor with custom car designs"
        width={1200}
        height={675}
        priority
      />
      <p>
        Livery codes are the currency of the FR Legends customization scene.
        Paste one into the livery editor and a complete paint job appears: base
        color, stripes, gradients, logos, and window graphics, all at once. They
        look like random strings of letters and numbers, but a code is really a
        compact text description of a full design. Once you understand what it
        stores, you can apply designs from anywhere, edit them to make them your
        own, and share your creations. This guide covers what a code contains,
        how to copy, paste, import, export, and share codes, where they come
        from, and how to avoid broken codes. We also cover mobile and PC
        emulator differences, with example codes and a FAQ at the end.
      </p>

      <h2>What a livery code actually contains</h2>
      <p>
        FR Legends saves every design as text. A full livery comes in two parts:
        a body code and a window code. The body code describes the paint: base
        color, the order of decal layers, where stripes and logos sit on the
        body panels, and how gradients fade. The window code does the same job
        for the glass, covering tint level and any window graphics.
      </p>
      <h3>Body codes</h3>
      <p>
        The body code is the one people share most. Every decal is stored as a
        layer with a position, a size, a rotation, and a color. The code keeps
        those layers in order, so the same string on the same car always
        produces the same design. Change one number and a stripe moves or a logo
        changes size.
      </p>
      <h3>Window codes</h3>
      <p>
        The window code follows the same logic for the glass: tint color,
        stickers, and edge designs are all stored as text. Some shared liveries
        include both codes. If a design looks incomplete after importing, a
        missing window code is usually the reason.
      </p>

      <h2>How to copy and paste a code</h2>
      <p>
        This is the part people want first, and it takes about thirty seconds.
        Follow these steps:
      </p>
      <ol>
        <li>Open FR Legends and go to the garage.</li>
        <li>
          Select the car you want to paint and open the livery editor from the
          garage menu.
        </li>
        <li>
          Copy the code from the source, using a long press on mobile or Ctrl +
          C on PC.
        </li>
        <li>
          Tap the code field in the editor, paste the code, and confirm.
        </li>
        <li>
          Save the design to a livery slot so it survives updates and later
          edits.
        </li>
      </ol>
      <p>
        Paste into the right field: body codes into the body field, window codes
        into the window field. Mixing them up is the most common mistake. More
        guides live on <Link href="/blog/">our blog</Link>, covering livery
        tricks, drift builds, and game updates.
      </p>

      <h2>How to import a livery</h2>
      <p>
        Importing is the same as pasting, with a few extra checks that save you
        from wasted effort:
      </p>
      <ol>
        <li>
          Check the car first. Every code is built for a specific body, so a
          design shared for the Silvia will not sit correctly on the RX-7.
        </li>
        <li>
          Copy the code completely. Codes often wrap across two lines on sharing
          sites, so select the whole string.
        </li>
        <li>
          Paste it exactly as shared. Do not add spaces or line breaks, and do
          not retype characters by hand.
        </li>
        <li>
          Confirm and preview. If the design looks wrong, undo and check the
          field and the car.
        </li>
      </ol>
      <p>
        We organize thousands of designs in our{" "}
        <Link href="/fr-legends-livery-codes/">livery hub</Link>, and the{" "}
        <Link href="/best-anime-jdm-livery-codes/">
          curated anime and JDM collection
        </Link>{" "}
        gathers the community favorites ready to paste.
      </p>

      <h2>How to export and share your own livery</h2>
      <p>
        Sharing your own design is just as easy. Open the livery in the editor
        and copy the body and window codes from the code field. Paste them into
        a message or social post, label them with the car they were made for,
        and add a screenshot so people know what they are getting.
      </p>
      <p>
        A code without a car name is a guessing game, so always include the car,
        and share both codes: a full livery is body plus windows. If you build
        something you are proud of, grab the latest game version from our{" "}
        <Link href="/download/">download page</Link> and share your code with
        the community.
      </p>

      <h2>Where livery codes come from</h2>
      <ul>
        <li>Community forums and Discord servers.</li>
        <li>Video descriptions and tutorials from creators.</li>
        <li>
          Social media posts, usually paired with a screenshot of the finished
          car.
        </li>
        <li>Curated collections like ours.</li>
      </ul>
      <p>
        Popular cars get the most codes. The <Link href="/fr-legends-supra-mod-apk/">Supra</Link>,
        the <Link href="/fr-legends-rx7-mod-livery-codes/">RX-7</Link>, and the{" "}
        <Link href="/fr-legends-bmw-drift-mods/">drift BMWs</Link> all have deep
        libraries of shared designs, and our{" "}
        <Link href="/fr-legends-cars-list/">full car list</Link> shows which
        cars are worth collecting codes for.
      </p>

      <h2>How to avoid broken codes</h2>
      <p>
        Most broken codes are not broken at all. They are usually the result of
        one of three problems: format issues, the wrong car, or a game version
        change.
      </p>
      <h3>Format problems</h3>
      <p>
        The code field is strict about format. Extra spaces, a missing
        character, or a line break in the middle of the string will stop the
        design from applying. Copy the code as one continuous string and paste
        it without reformatting.
      </p>
      <h3>Pasting onto the wrong car</h3>
      <p>
        The second most common cause is pasting a code onto the wrong car. A
        design made for the Silvia body will paste onto the RX-7, but every
        decal sits at the wrong height and the result looks scrambled. Check the
        car name in the source before you paste.
      </p>
      <h3>Game version changes</h3>
      <p>
        FR Legends updates can change how codes are stored, and codes from old
        versions sometimes fail on new builds. If a code worked before an
        update, look for a newer version in the source. Our{" "}
        <Link href="/fr-legends-mod-apk-old-versions/">old versions page</Link>{" "}
        lists earlier releases if you prefer a build you know.
      </p>

      <h2>Codes on mobile and PC emulators</h2>
      <p>
        FR Legends runs on Android phones and tablets, and many players run it
        on PC through an emulator. Codes work the same way on both, but the
        mechanics of copying them differ.
      </p>
      <h3>On mobile</h3>
      <p>
        On a phone, long press to select the code, drag the handles to cover the
        whole string, and copy. Paste by long pressing the code field. Watch
        out for autocorrect, which can quietly change characters.
      </p>
      <h3>On a PC emulator</h3>
      <p>
        On an emulator, use Ctrl + C and Ctrl + V, and keep codes in a text file
        next to the game for fast testing. Our{" "}
        <Link href="/fr-legends-mod-apk-for-pc/">PC emulator guide</Link> covers
        setup, and Apple users can check the{" "}
        <Link href="/fr-legends-mod-apk-ios/">iOS guide</Link> for options
        there.
      </p>

      <ProseImage
        src="/assets/images/fr-legends-car-selection-menu.jpg"
        alt="FR Legends car selection menu showing cars with custom liveries"
        width={1200}
        height={675}
      />

      <h2>Livery code example table</h2>
      <p>
        The codes below show the shape a real code takes, tied to a specific car
        and field just like the ones you will find in the wild.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Car</th>
              <th scope="col">Style</th>
              <th scope="col">Field</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ML4T-7D2Q-9X1B</td>
              <td>Silvia S15</td>
              <td>Drift stripes</td>
              <td>Body</td>
            </tr>
            <tr>
              <td>K2N9-WP3R-5CV6</td>
              <td>RX-7 FD</td>
              <td>Two-tone gradient</td>
              <td>Body</td>
            </tr>
            <tr>
              <td>Z8F1-QT4M-6H3D</td>
              <td>Supra MK4</td>
              <td>Retro livery</td>
              <td>Body</td>
            </tr>
            <tr>
              <td>B7X2-LP9G-4N5A</td>
              <td>BMW E36</td>
              <td>Tinted glass</td>
              <td>Window</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        If one of these does not apply, it usually means the code was cut off
        during copying. Grab the full string from the source and try again. The{" "}
        <Link href="/fr-legends-rx7-mod-livery-codes/">
          RX-7 livery codes page
        </Link>{" "}
        and the <Link href="/fr-legends-supra-mod-apk/">Supra mod page</Link>{" "}
        both have ready-to-paste designs.
      </p>

      <h2>Common livery code problems</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Problem</th>
              <th scope="col">Likely cause</th>
              <th scope="col">Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The design does not apply</td>
              <td>Spaces or line breaks in the code</td>
              <td>Paste as one continuous string</td>
            </tr>
            <tr>
              <td>Decals sit in the wrong place</td>
              <td>Code pasted onto the wrong car</td>
              <td>Check the car name in the source</td>
            </tr>
            <tr>
              <td>The code applies but looks different</td>
              <td>Game version mismatch</td>
              <td>Find a newer version of the code</td>
            </tr>
            <tr>
              <td>Only half the livery appears</td>
              <td>Window code pasted into the body field</td>
              <td>Move the code to the correct field</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>FAQ</h2>
      <h3>Are FR Legends livery codes safe to use?</h3>
      <p>
        Yes. A livery code is plain text and cannot harm your game or save data.
        Use common sense about where you get codes, but the codes themselves are
        harmless.
      </p>
      <h3>Can I use a livery code on any car?</h3>
      <p>
        No. Codes are built for a specific car body. Pasting onto a different
        car works, but decals and stripes will not line up correctly.
      </p>
      <h3>Why does my code not apply?</h3>
      <p>
        Spaces or line breaks in the string, the wrong field, or the wrong car.
        Check those three before anything else.
      </p>
      <h3>Do livery codes work on the PC version?</h3>
      <p>
        Yes. Codes are stored the same way on Android and PC emulators. Only the
        copy and paste shortcuts differ.
      </p>
      <h3>Will my livery be lost in an update?</h3>
      <p>
        Saved liveries normally survive updates. If a code stops applying after
        an update, it is usually the shared code that changed, not your saved
        design.
      </p>

      <p>
        That is the full livery code system: text that describes a design,
        pasted into the right field on the right car. Start with a code you
        like, test it, edit it, and before long you will be sharing designs of
        your own. For more to read, browse the{" "}
        <Link href="/fr-legends-livery-codes/">livery hub</Link>, grab ideas
        from the{" "}
        <Link href="/best-anime-jdm-livery-codes/">
          anime and JDM collection
        </Link>
        , or check the <Link href="/fr-legends-bmw-drift-mods/">BMW drift mods</Link>{" "}
        for new cars to paint. New here? Head back to our{" "}
        <Link href="/">home page</Link> for a full tour of the site.
      </p>
    </ArticlePage>
  );
}