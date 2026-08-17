import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";

type ArticlePageProps = {
  slug: string;
  children: ReactNode;
  title?: string;
  lede?: string;
  metaLine?: string;
  asSection?: boolean;
  crumbs?: { label: string; href?: string }[];
  actions?: ReactNode;
  headerImage?: { src: string; alt: string; width?: number; height?: number };
  /**
   * "prose" (default) wraps the body in a centered container with
   * responsive padding and a readable line length. "sections" passes
   * the body through as-is for pages that build their own sections.
   */
  layout?: "prose" | "sections";
};

/**
 * Shared shell for article pages: breadcrumbs, page header, prose body
 * and the JSON-LD blocks preserved from the original static site.
 */
export default function ArticlePage({
  slug,
  children,
  title,
  lede,
  metaLine,
  asSection = true,
  crumbs: crumbsOverride,
  actions,
  headerImage,
  layout = "prose",
}: ArticlePageProps) {
  const article = getArticle(slug);
  const rawCrumbs = article.breadcrumbJsonLd?.itemListElement as
    | { name: string; item: string }[]
    | undefined;
  const crumbs =
    crumbsOverride ??
    (rawCrumbs?.map((item, i) => ({
      label: item.name,
      href: i < rawCrumbs.length - 1 ? item.item : undefined,
    })) ??
      ([{ label: "Home", href: "/" }, { label: article.title }] as {
        label: string;
        href?: string;
      }[]));

  const Tag = asSection ? "section" : "div";

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <Tag className="page-header">
        <div className="container">
          <h1>{title ?? article.title}</h1>
          {lede ? <p className="lede">{lede}</p> : null}
          {metaLine ? (
            <p
              className="meta-line"
              dangerouslySetInnerHTML={{ __html: metaLine }}
            />
          ) : null}
          {article.metaHtml ? (
            <div
              className="article-meta"
              dangerouslySetInnerHTML={{ __html: article.metaHtml }}
            />
          ) : null}
          {actions ? <div className="hero-actions">{actions}</div> : null}
          {headerImage ? (
            <img
              src={headerImage.src}
              alt={headerImage.alt}
              width={headerImage.width ?? 1200}
              height={headerImage.height ?? 630}
              fetchPriority="high"
            />
          ) : null}
        </div>
      </Tag>
      {layout === "prose" ? (
        <section className="section">
          <div className="container">
            <div className="prose">{children}</div>
          </div>
        </section>
      ) : (
        children
      )}
      {article.articleJsonLd ? <JsonLd data={article.articleJsonLd} /> : null}
      {article.breadcrumbJsonLd ? <JsonLd data={article.breadcrumbJsonLd} /> : null}
      {article.faqJsonLd ? <JsonLd data={article.faqJsonLd} /> : null}
      {article.softwareJsonLd ? <JsonLd data={article.softwareJsonLd} /> : null}
      {article.howToJsonLd ? <JsonLd data={article.howToJsonLd} /> : null}
    </>
  );
}
