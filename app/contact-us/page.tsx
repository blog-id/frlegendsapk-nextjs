import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/pages-meta";

export const metadata: Metadata = legalMetadata("contact-us");

const LEDE =
  "Questions about a download, a broken install, a livery code, or something legal? We're a small team and we read every message, here's the best way to reach us.";

export default function ContactUsPage() {
  return (
    <LegalPage
      slug="contact-us"
      lede={LEDE}
      metaLine="Last updated: <strong>August 16, 2026</strong>"
    >
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>General Inquiries and Support</h2>
            <p>
              For anything related to the site, download issues, technical
              problems, livery code questions, corrections to our guides, or
              partnership ideas, email us at{" "}
              <a href="mailto:contact@frlegendmodapk.com">
                contact@frlegendmodapk.com
              </a>
              .
            </p>
            <p>
              We aim to reply within <strong>2 - 3 business days</strong>.
              Messages are usually answered in the order they arrive, so if
              you're waiting on a reply, check your spam folder before sending
              a follow-up.
            </p>

            <h2>What to Include in Your Message</h2>
            <p>To help us help you faster, please include:</p>
            <ul>
              <li>
                <strong>Device model</strong>, for example, Samsung Galaxy A54
                or Pixel 7a.
              </li>
              <li>
                <strong>Android version</strong>, for example, Android 13.
              </li>
              <li>
                <strong>The exact error message</strong> you see, or a
                description of what happens (screen stays black, "app not
                installed," download never finishes, and so on).
              </li>
              <li>
                Which version of the mod apk you downloaded and where you
                installed it from.
              </li>
            </ul>
            <p>
              If you're stuck on an install error, check our{" "}
              <Link href="/fr-legends-mod-apk-not-installing-fix/">
                install troubleshooting guide
              </Link>{" "}
              first, it covers the seven most common problems and often saves
              you a wait for a reply.
            </p>

            <h2>What We Can't Do</h2>
            <p>
              To be upfront about our limits: we cannot email apk files to you.
              The download is only available from our{" "}
              <Link href="/download/">download page</Link>, which links to our
              GitHub-hosted release. We also can't provide step-by-step
              personal tech support beyond what's already published in our
              guides, we're a small team, and every hour spent on one-off
              device debugging is an hour we can't spend updating the mod. If
              you have a problem our guides don't cover, tell us anyway: we use
              reports like yours to decide what to write next.
            </p>

            <h2>DMCA and Copyright Matters</h2>
            <p>
              If you're a rights holder and believe something on the site
              infringes your copyright, don't use the general support address
              for legal back-and-forth, read our{" "}
              <Link href="/dmca/">DMCA page</Link> first, which explains
              exactly what to include in a takedown notice.
            </p>

            <h2>Social Media</h2>
            <p>
              For the fastest updates, news, and clips, follow us here:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.tiktok.com/@frlegends467"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@frlegends467"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
            <p>
              Direct messages on social media are usually answered too, but for
              anything technical or detailed, email is the reliable channel.
            </p>

            <h2>Before You Write</h2>
            <p>
              Please check the <Link href="/download/">download page</Link> and
              the <Link href="/blog/">blog</Link> before contacting us, many
              common questions (latest version, how to update, whether the mod
              is safe) are already answered there. And if you're emailing about
              a takedown, please use the DMCA procedure so we can handle it
              properly.
            </p>
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
