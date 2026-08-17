import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { DOWNLOAD_JSON_LD, downloadMetadata } from "@/lib/download";

export const metadata: Metadata = downloadMetadata;

const faqPage = DOWNLOAD_JSON_LD.find((b) => b["@type"] === "FAQPage") as {
  mainEntity: { name: string; acceptedAnswer: { text: string } }[];
} | null;

const faqItems = (faqPage?.mainEntity ?? []).map((q) => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

export default function DownloadPage() {
  return (
    <>
      {DOWNLOAD_JSON_LD.map((block, i) => (
        <JsonLd key={i} data={block} />
      ))}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Download FR Legends Mod Apk" },
        ]}
      />

      {/* ===================== DOWNLOAD CARD ===================== */}
      <section className="section">
        <div className="container">
          <div className="download-card">
            <span className="kicker">Latest release</span>
            <h1>Download FR Legends Mod Apk v0.4.7</h1>
            <p
              className="lede"
              style={{ color: "var(--color-text-muted)", marginBottom: 0 }}
            >
              The complete modded build: unlimited money, all cars and tracks
              unlocked, no ads, and the toggleable mod menu. One click below, no
              surveys, no waiting rooms, no fake mirrors.
            </p>
            <div className="download-meta">
              <div>
                <strong>Version</strong>0.4.7
              </div>
              <div>
                <strong>File size</strong>~147 MB
              </div>
              <div>
                <strong>Last updated</strong>August 16, 2026
              </div>
              <div>
                <strong>Compatibility</strong>Android 4.4+
              </div>
            </div>
            <span className="badge badge-safe" style={{ marginBottom: 22 }}>
              &check; Scanned &amp; verified before release
            </span>

            <DownloadButton />

            <p
              style={{
                fontSize: 14,
                color: "var(--color-text-muted)",
                margin: "22px 0 0",
              }}
            >
              Prefer a different version? Browse the{" "}
              <Link href="/fr-legends-mod-apk-old-versions/">
                Old Versions archive
              </Link>
              . Playing on Windows instead? See the{" "}
              <Link href="/fr-legends-mod-apk-for-pc/">PC setup guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW TO INSTALL ===================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">After the download</span>
            <h2>How to Install FR Legends Mod Apk</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number" aria-hidden="true">
                1
              </div>
              <div className="step-body">
                <h3>Open the downloaded file</h3>
                <p>
                  Tap the apk in your notification shade or Downloads folder. If
                  Android asks, confirm that you trust this file source.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                2
              </div>
              <div className="step-body">
                <h3>Allow unknown sources</h3>
                <p>
                  Your device will ask you to allow installs from this source,
                  the browser or file manager. Accept it. This is required for
                  any app outside the Play Store and is safe to grant for this
                  install.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                3
              </div>
              <div className="step-body">
                <h3>Tap Install</h3>
                <p>
                  The install takes under a minute on modern phones. You can
                  keep the original FR Legends installed, the mod installs
                  alongside it as a separate app.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                4
              </div>
              <div className="step-body">
                <h3>Launch and verify the mod</h3>
                <p>
                  Open the game and check the mod menu button on the main
                  screen. Your coin balance should be effectively unlimited and
                  every car should be available in the garage.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">
                5
              </div>
              <div className="step-body">
                <h3>Tune and drift</h3>
                <p>
                  Pick a car, hit a track, and go sideways. If you hit any error
                  screens, our{" "}
                  <Link href="/fr-legends-mod-apk-not-installing-fix/">
                    install troubleshooting guide
                  </Link>{" "}
                  covers the fixes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Before you click</span>
            <h2>Download FAQ</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}