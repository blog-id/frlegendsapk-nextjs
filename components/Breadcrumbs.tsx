import Link from "next/link";

export type Crumb = { label: string; href?: string };

function decodeEntities(label: string): string {
  return label
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol>
          {items.map((item, i) => {
            const isCurrent = i === items.length - 1;
            const label = decodeEntities(item.label);
            if (item.href && !isCurrent) {
              return (
                <li key={i}>
                  <Link href={item.href}>{label}</Link>
                </li>
              );
            }
            return (
              <li key={i} aria-current="page">
                {label}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}