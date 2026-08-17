import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NotFound() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Page not found" }]} />
      <section className="page-header">
        <div className="container">
          <h1>Page Not Found</h1>
          <p className="lede">
            The page you are looking for does not exist or has moved to a new
            address.
          </p>
          <div className="hero-actions">
            <Link href="/" className="btn btn-primary btn-lg">
              Go to the Homepage
            </Link>
            <Link href="/blog/" className="btn btn-outline btn-lg">
              Browse the Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
