import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/PostCard";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FR Legends Blog, Guides, Tuning, Livery Codes & News",
  description:
    "FR Legends guides and news: how to drift, tuning settings, car tier lists, livery codes, battle mode tips, and mod updates.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    type: "website",
    siteName: "FR Legends Mod Apk",
    title: "FR Legends Blog, Guides, Tuning, Livery Codes & News",
    description:
      "FR Legends guides and news: how to drift, tuning settings, car tier lists, livery codes, battle mode tips, and mod updates.",
    url: `${SITE_URL}/blog/`,
    images: [{ url: `${SITE_URL}/assets/images/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FR Legends Blog, Guides, Tuning, Livery Codes & News",
    description:
      "FR Legends guides and news: how to drift, tuning settings, car tier lists, livery codes, battle mode tips, and mod updates.",
    images: [`${SITE_URL}/assets/images/og-image.jpg`],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "FR Legends Blog",
  url: `${SITE_URL}/blog/`,
  description: "FR Legends guides, tuning advice, livery codes, and mod updates.",
  publisher: { "@type": "Organization", name: "FR Legends Mod Apk" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <section className="page-header">
        <div className="container">
          <h1>FR Legends Blog</h1>
          <p className="lede">
            Everything worth knowing about FR Legends in one place, drift
            technique, tuning setups, car rankings, livery codes, and every
            update we ship. New guides are added regularly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="post-stack">
            {POSTS.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
