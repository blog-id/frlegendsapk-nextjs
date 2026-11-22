import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import DownloadButton from "@/components/DownloadButton";
import { FAQPAGE_JSON_LD, HOME_FAQ_ITEMS, homeMetadata } from "@/lib/homepage";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = homeMetadata;

const guideLinks = [
  { href: "/how-to-drift-in-fr-legends/", title: "Learn the fundamentals of drifting", description: "Work through initiation, throttle control, countersteer, weight transfer and a repeatable practice routine.", tag: "Driving basics" },
  { href: "/fr-legends-best-drift-settings-tuning-guide/", title: "Understand drift tuning", description: "Learn what power, grip, balance and suspension changes do, then adjust one setting at a time.", tag: "Tuning" },
  { href: "/how-to-build-the-perfect-drift-car/", title: "Plan a balanced drift build", description: "Choose a chassis, set a sensible upgrade order and build around predictable handling rather than power alone.", tag: "Car setup" },
  { href: "/fr-legends-battle-mode-guide/", title: "Improve in Battle Mode", description: "Understand lead and chase responsibilities, consistency, proximity and clean lines.", tag: "Game mode" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={FAQPAGE_JSON_LD} />
      <section className="hero" id="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <span className="kicker">Independent FR Legends fan resource</span>
            <h1>Get better at drifting in FR Legends</h1>
            <p className="lede">Practical, easy-to-follow guides for learning drift technique, understanding car setup, exploring the tracks and creating your own livery designs.</p>
            <p>FR Legends is a mobile drifting game built around front-engine, rear-wheel-drive cars, vehicle customization and tandem battles. This site is an independent guide project for players who want clearer explanations of its driving and customization systems.</p>
            <div className="hero-actions">
              <Link href="/how-to-drift-in-fr-legends/" className="btn btn-primary btn-lg">Start with drifting</Link>
              <Link href="/blog/" className="btn btn-outline btn-lg">Browse all guides</Link>
            </div>
            <p className="hero-note">Looking for the game itself? Use the official <Link href="/download/">Google Play or App Store links</Link>.</p>
          </div>
          <div className="hero-media">
            <div className="card">
              <span className="kicker">What you will find here</span>
              <h2>Guides, not modified downloads</h2>
              <p>We publish gameplay explanations and fan-made learning resources. We do not host, create, or distribute modified APKs, game packages, cheats, or unofficial copies.</p>
              <ul><li>Drift technique and practice drills</li><li>Car tuning and build principles</li><li>Track, car and game-mode guides</li><li>Livery design and community creativity</li></ul>
              <p><strong>Independent fan site:</strong> not affiliated with or endorsed by Twin Turbo Games.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="start-here">
        <div className="container">
          <div className="section-head"><span className="kicker">Start here</span><h2>Choose what you want to improve</h2><p className="lede">Pick a topic and go directly to a focused guide.</p></div>
          <div className="grid grid-2">
            {guideLinks.map((guide) => <article className="card" key={guide.href}><span className="tag">{guide.tag}</span><h3><Link href={guide.href}>{guide.title}</Link></h3><p>{guide.description}</p><Link href={guide.href}>Read the guide →</Link></article>)}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="drift-basics">
        <div className="container">
          <div className="section-head"><span className="kicker">A useful starting point</span><h2>Four fundamentals behind a controlled drift</h2></div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <div className="grid grid-2">
              <article className="card"><h3>1. Initiation</h3><p>Initiation is how you begin the slide. Learn one entry method at a time, use a familiar corner and focus on making the car rotate without losing too much speed.</p></article>
              <article className="card"><h3>2. Throttle control</h3><p>Treat the accelerator as a control, not an on/off switch. Make small adjustments and notice how they affect wheelspin, speed and the car's angle.</p></article>
              <article className="card"><h3>3. Countersteer</h3><p>Steering against the direction of the slide helps manage rotation. Smooth corrections are easier to repeat than sudden, large steering inputs.</p></article>
              <article className="card"><h3>4. Weight transfer</h3><p>Braking, lifting and accelerating change how the car loads and rotates. Make one input change at a time so you can identify what improved the run.</p></article>
            </div>
            <p>Start with the complete <Link href="/how-to-drift-in-fr-legends/">FR Legends drifting guide</Link>, then use the <Link href="/fr-legends-best-drift-settings-tuning-guide/">tuning guide</Link> to understand how setup affects the way a car responds.</p>
          </div>
        </div>
      </section>

      <section className="section" id="recent-guides">
        <div className="container">
          <div className="section-head"><span className="kicker">Explore the library</span><h2>FR Legends guides and explainers</h2><p className="lede">Browse the topics covered by the site's editorial guide library.</p></div>
          <div className="post-stack">
            {POSTS.slice(0, 6).map((post) => <article className="card" key={post.slug}><span className="tag">{post.tag}</span><h3><Link href={`/${post.slug}/`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/${post.slug}/`}>Read guide →</Link></article>)}
          </div>
          <div className="hero-actions"><Link href="/blog/" className="btn btn-outline">View all guides</Link><Link href="/fr-legends-cars-list/" className="btn btn-outline">Explore the car list</Link><Link href="/fr-legends-tracks-list/" className="btn btn-outline">Explore the tracks</Link></div>
        </div>
      </section>

      <section className="section section-alt" id="official-game">
        <div className="container">
          <div className="section-head"><span className="kicker">Get the game</span><h2>Find FR Legends through official stores</h2></div>
          <div className="prose" style={{ maxWidth: "100%" }}>
            <p>For the authentic game and its updates, use the official store listing for your device. Store pages display the publisher, compatibility information, current release details and regional availability. This fan site does not provide modified copies or third-party APK downloads.</p>
            <DownloadButton />
          </div>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="container"><div className="section-head"><span className="kicker">Common questions</span><h2>About this site and the game</h2></div><FaqAccordion items={HOME_FAQ_ITEMS} /></div>
      </section>
    </>
  );
}
