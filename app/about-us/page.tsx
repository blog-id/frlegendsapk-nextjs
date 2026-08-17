import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("about-us");

const LEDE =
  "frlegendmodapk.com is a fan-run resource built by a small team of FR Legends players. Our mission is simple: safe FR Legends Mod Apk downloads, accurate guides, and honest content, nothing more, nothing less.";

export default function AboutUsPage() {
  return (
    <LegalPage
      slug="about-us"
      lede={LEDE}
      metaLine="Last updated: <strong>August 16, 2026</strong>"
    >
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>Who We Are</h2>
            <p>
              We&apos;re a small team of FR Legends players who started this
              site because the mod scene is full of sketchy file-upload mirrors,
              fake download buttons, and outdated builds. We&apos;d seen too
              many people get a broken or worse, a malicious, apk from those
              sites, so we decided to build a single, honest place to get the FR
              Legends Mod Apk.
            </p>
            <p>
              We are not a company and we&apos;re not affiliated with the
              game&apos;s developer. We&apos;re just players who care about this
              game and want the community to have a reliable download source.
            </p>

            <h2>What We Do</h2>
            <p>
              The site publishes three things: the FR Legends Mod Apk itself,
              guides for playing and tuning the game, and livery codes for the
              community&apos;s favorite designs. On the download side, we curate
              and scan every mod apk release, test it on real devices, and only
              then publish it. On the content side, we write guides we&apos;d
              want to read ourselves, drift tutorials, car and track
              breakdowns, install fixes, and we collect livery codes from across
              the community.
            </p>

            <h2>How We Keep Downloads Updated</h2>
            <p>
              Whenever Twin Turbo Tech ships a new version of FR Legends, we
              rebuild the mod from that release, scan the result, test it, and
              publish it here. Each build is checked before it goes live, so
              what you download from us is the same tested file we put on our
              own devices. The update process is manual and deliberate,
              we&apos;d rather be a few days late than publish something
              we haven&apos;t verified.
            </p>

            <h2>Our Safety Commitment</h2>
            <p>
              Every release is scanned before publishing and hosted on a
              controlled distribution channel, a GitHub-hosted release page
              rather than random upload sites. We don&apos;t use ad-heavy
              mirrors, fake download buttons, or &quot;waiting rooms.&quot; If a
              version can&apos;t be verified, it doesn&apos;t get published. For
              a deeper look at what we check and how to verify any apk yourself,
              read our <Link href="/is-fr-legends-mod-apk-safe/">full safety guide</Link>.
            </p>

            <h2>Our Community</h2>
            <p>
              We share news, clips, and build guides on our social channels, and
              it&apos;s the easiest place to keep up with new releases:
            </p>
            <ul>
              <li>
                Follow us on{" "}
                <a
                  href="https://www.tiktok.com/@frlegends467"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                Subscribe to us on{" "}
                <a
                  href="https://www.youtube.com/@frlegends467"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>

            <h2>Get in Touch</h2>
            <p>
              Questions, feedback, or corrections? We read everything we
              receive. The best way to reach us is the{" "}
              <Link href="/contact-us/">contact page</Link>.
            </p>

            <h2>One Honest Note</h2>
            <p>
              FR Legends is developed by Twin Turbo Tech, and all game assets
              belong to their respective owners. This site is an independent fan
              resource, we are not affiliated with, endorsed by, or sponsored by
              the developer, and we don&apos;t claim to be.
            </p>
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
