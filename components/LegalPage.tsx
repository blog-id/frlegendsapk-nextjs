import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { LEGAL_PAGES } from "@/lib/pages-meta";

type LegalPageProps = {
  slug: string;
  children: ReactNode;
  lede: string;
  metaLine?: string;
};

/**
 * Shared shell for legal/static pages: breadcrumbs, page header
 * (div variant with lede + meta-line) and preserved JSON-LD.
 */
export default function LegalPage({ slug, children, lede, metaLine }: LegalPageProps) {
  const page = LEGAL_PAGES[slug];
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: page.title.replace(/ - FR Legends Mod Apk$/, "") },
        ]}
      />
      <div className="page-header">
        <div className="container">
          <h1>{page.title.replace(/ - FR Legends Mod Apk$/, "")}</h1>
          <p className="lede">{lede}</p>
          {metaLine ? (
            <p
              className="meta-line"
              dangerouslySetInnerHTML={{ __html: metaLine }}
            />
          ) : null}
        </div>
      </div>
      {children}
      {page.jsonLd.map((block, i) => (
        <JsonLd key={i} data={block} />
      ))}
    </>
  );
}
