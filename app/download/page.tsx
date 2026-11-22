import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DownloadButton from "@/components/DownloadButton";
import JsonLd from "@/components/JsonLd";
import { DOWNLOAD_JSON_LD, downloadMetadata } from "@/lib/download";

export const metadata: Metadata = downloadMetadata;

export default function DownloadPage() {
  return (
    <>
      {DOWNLOAD_JSON_LD.map((block, i) => <JsonLd key={i} data={block} />)}
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Get FR Legends" }]} />
      <section className="section">
        <div className="container">
          <div className="download-card">
            <span className="kicker">Official store links</span>
            <h1>Get FR Legends from an official app store</h1>
            <p className="lede" style={{ color: "var(--color-text-muted)", marginBottom: 0 }}>Find the original FR Legends game through the Google Play Store or Apple App Store. Use the store listing for the latest availability, device requirements, publisher details and updates.</p>
            <div style={{ margin: "2rem 0" }}><DownloadButton /></div>
            <p>This independent fan site does not host or distribute modified APKs, altered game files, unofficial copies or third-party download mirrors.</p>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="section-head"><span className="kicker">Before installing</span><h2>Check the official listing for your device</h2></div>
          <div className="prose">
            <ol><li>Open the Google Play or Apple App Store link above.</li><li>Confirm the app title and publisher shown in the store.</li><li>Review device compatibility and regional availability on the listing.</li><li>Install and update through the store to receive the official release.</li></ol>
            <p>Avoid websites that ask you to install an unrelated app, disable device protections, complete surveys, or provide account credentials to obtain a game file.</p>
            <h2>Need help with gameplay?</h2>
            <p>Our guides cover <Link href="/how-to-drift-in-fr-legends/">drifting fundamentals</Link>, <Link href="/fr-legends-best-drift-settings-tuning-guide/">tuning</Link>, <Link href="/fr-legends-cars-list/">cars</Link> and <Link href="/fr-legends-tracks-list/">tracks</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
