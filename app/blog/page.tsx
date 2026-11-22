import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/PostCard";
import { POSTS } from "@/lib/posts";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FR Legends Guides: Drifting, Tuning, Cars, Tracks and Liveries",
  description: "Browse independent FR Legends gameplay guides covering drift technique, car tuning, builds, Battle Mode, tracks, controls and livery design.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: { type: "website", siteName: SITE_NAME, title: "FR Legends Guides and Tutorials", description: SITE_DESCRIPTION, url: `${SITE_URL}/blog/`, images: [{ url: OG_IMAGE, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "FR Legends Guides and Tutorials", description: SITE_DESCRIPTION, images: [OG_IMAGE] },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "FR Legends Fan Guides",
  url: `${SITE_URL}/blog/`,
  description: "Independent guides to FR Legends driving, tuning, cars, tracks and customization.",
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
      <section className="page-header"><div className="container">
        <h1>FR Legends Guides and Tutorials</h1>
        <p className="lede">A topic-organized collection of independent guides for driving, tuning, car setup, tracks, controls and livery design.</p>
      </div></section>
      <section className="section"><div className="container">
        <div className="post-stack">{POSTS.map((post) => <PostCard key={post.slug} post={post} />)}</div>
      </div></section>
    </>
  );
}
