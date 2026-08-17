"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, BLOG_POST_SLUGS } from "@/lib/site";

function isCurrentPath(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/blog/") {
    const p = pathname.replace(/\/+$/, "");
    if (p === "/blog") return true;
    const slug = p.replace(/^\//, "");
    return BLOG_POST_SLUGS.includes(slug);
  }
  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeNav = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeNav]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="FR Legends Mod Apk, Home">
          <Image
            className="logo-mark"
            src="/assets/icons/fr-legends-logo.png"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span className="logo-text">
            FR Legends <em>Mod Apk</em>
          </span>
        </Link>
        <nav
          className={open ? "site-nav open" : "site-nav"}
          id="site-nav"
          aria-label="Primary navigation"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={link.cta ? "nav-cta" : undefined}
                  aria-current={
                    isCurrentPath(link.href, pathname) ? "page" : undefined
                  }
                  onClick={closeNav}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}