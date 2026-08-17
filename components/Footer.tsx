import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_BRAND,
  FOOTER_COPYRIGHT,
  FOOTER_DOWNLOADS,
  FOOTER_GUIDES,
  FOOTER_LEGAL,
  SOCIAL,
} from "@/lib/site";

function TikTokIcon() {
  return (
    <svg
      className="icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      className="icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="FR Legends Mod Apk, Home">
              <Image
                className="logo-mark"
                src="/assets/icons/fr-legends-logo.png"
                alt=""
                width={40}
                height={40}
              />
              <span className="logo-text">
                FR Legends <em>Mod Apk</em>
              </span>
            </Link>
            <p>{FOOTER_BRAND}</p>
            <div className="social-links">
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow FR Legends Mod Apk on TikTok"
              >
                <TikTokIcon />
                <span className="visually-hidden">TikTok</span>
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to FR Legends Mod Apk on YouTube"
              >
                <YouTubeIcon />
                <span className="visually-hidden">YouTube</span>
              </a>
            </div>
          </div>
          <nav className="footer-col" aria-label="Downloads">
            <h3>Downloads</h3>
            <ul>
              {FOOTER_DOWNLOADS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="footer-col" aria-label="Guides">
            <h3>Guides</h3>
            <ul>
              {FOOTER_GUIDES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="footer-col" aria-label="Legal">
            <h3>Legal</h3>
            <ul>
              {FOOTER_LEGAL.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {year} {FOOTER_COPYRIGHT}
          </p>
        </div>
      </div>
    </footer>
  );
}