import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import ProseImage from "@/components/ProseImage";
import { articleMetadata } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-new-cars-update-log");

export default function FrLegendsNewCarsUpdateLogPage() {
  return (
    <ArticlePage slug="fr-legends-new-cars-update-log">
      <ProseImage
        src="/assets/images/fr-legends-car-shop-dealership.jpg"
        alt="FR Legends car shop dealership where new cars are added in updates"
        width={1200}
        height={675}
        priority
      />
      <p>
        Every FR Legends update reshuffles the game: a new car drops into the
        dealership, physics get a quiet pass, and the garage screens change
        overnight. This page tracks the new cars added in recent FR Legends
        updates: the Nissan Silvia S15, Mazda RX-7, BMW E30, Toyota AE86, Mazda
        Miata and Nissan Skyline R32, plus the full update log for recent
        versions. We also explain the difference between official game updates
        and mod apk updates, how the mod build unlocks every new car instantly,
        and where to grab the latest download. If you only want the short
        version: the current update adds six headline cars, rebalances top-tier
        drifters, and the mod apk unlocks everything on install. Keep reading
        for the details.
      </p>

      <h2>How FR Legends Updates Work: Official Game Updates vs Mod Apk Updates</h2>
      <p>
        Official FR Legends updates come from the developer and arrive in two
        flavors. Feature drops add cars, tracks and game modes, while smaller
        patches fix bugs and rebalance the roster. Each one ships through the
        app stores and raises the version number on the loading screen. When an
        official update goes live, we build the mod apk on top of the same
        version, so the mod build always matches the latest official release.
      </p>
      <p>
        The mod keeps everything the official version has, then adds unlimited
        money, all cars unlocked, all tracks unlocked, no ads and a mod menu.
        Official builds gate progress behind coins and grinding; the mod removes
        the grind completely. Both versions live on the{" "}
        <Link href="/download/">download page</Link>, and every previous build
        stays in the{" "}
        <Link href="/fr-legends-mod-apk-old-versions/">old versions archive</Link>{" "}
        if you prefer an earlier physics model or a smaller install size.
      </p>

      <h2>The Latest New Cars Added to FR Legends</h2>
      <p>
        The most recent update cycle added six cars to the dealership, and each
        one brings a different driving character. Here is a quick tour of what
        joined the garage.
      </p>
      <h3>Nissan Silvia S15</h3>
      <p>
        The S15 is the newest drift weapon in the roster. Light, powerful and
        eager to hang the tail out from the first corner, it finds a strong
        balance between angle and control and has quickly become a favourite
        for Battle Mode. On the{" "}
        <Link href="/fr-legends-car-tier-list/">FR Legends tier list</Link> it
        ranks among the strongest drifters in its class.
      </p>
      <h3>Mazda RX-7</h3>
      <p>
        The Mazda RX-7 joins the line-up with rotary spirit: high revs, sharp
        steering and a body that begs for custom paint. It is a popular choice
        for livery work, and the{" "}
        <Link href="/fr-legends-rx7-mod-livery-codes/">
          RX-7 mod and livery codes page
        </Link>{" "}
        collects decal codes made for this chassis.
      </p>
      <h3>BMW E30</h3>
      <p>
        Boxy, modest in power but beautifully balanced, the E30 is the pick when
        you are learning to drift without correction assists. Its long wheelbase
        makes transitions predictable, and it is a staple of grassroots drift
        events. Dedicated builds for it live on the{" "}
        <Link href="/fr-legends-bmw-drift-mods/">BMW drift mods page</Link>.
      </p>
      <h3>Toyota AE86</h3>
      <p>
        The legendary AE86 needs no introduction. Its light chassis, pop-up
        headlights and low power figure reward smooth, momentum-based driving
        rather than brute force, and it remains one of the most rewarding cars
        in the game to master.
      </p>
      <h3>Mazda MX-5 Miata</h3>
      <p>
        Small, cheap and playful, the Miata proves you do not need big power to
        have fun. It excels in Gymkhana mode, where its short wheelbase helps
        with tight transitions.
      </p>
      <h3>Nissan Skyline R32</h3>
      <p>
        The R32 is the flagship of the new drop. It has all-wheel drive
        heritage, but the FR Legends version is tuned for rear-wheel drive drift
        with stable, controllable slides. The latest patch added minor stability
        improvements that make it easier to hold long angles. For the complete
        roster with stats, check the full{" "}
        <Link href="/fr-legends-cars-list/">FR Legends cars list</Link>.
      </p>

      <h2>FR Legends Update Log History</h2>
      <ProseImage
        src="/assets/images/fr-legends-car-selection-menu.jpg"
        alt="FR Legends garage selection menu after an update"
        width={1200}
        height={675}
      />
      <p>
        Here is the update log for recent versions of the game, covering what
        changed and when each build shipped.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Version</th>
              <th scope="col">Released</th>
              <th scope="col">What Changed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.4.7</td>
              <td>August 2026</td>
              <td>
                Six new cars: S15, RX-7, E30, AE86, Miata and R32. Balance pass
                on S-tier cars, Battle Mode scoring fixes, performance
                improvements on low-end devices.
              </td>
            </tr>
            <tr>
              <td>0.4.6</td>
              <td>July 2026</td>
              <td>
                Livery editor quality-of-life fixes, improved controller mapping
                on Android, faster matchmaking in multiplayer lobbies.
              </td>
            </tr>
            <tr>
              <td>0.4.5</td>
              <td>May 2026</td>
              <td>
                New cars and visual upgrades for existing chassis, lobby
                connection handling improvements, stability fixes for older
                Android builds.
              </td>
            </tr>
            <tr>
              <td>0.4.4</td>
              <td>March 2026</td>
              <td>
                Championship mode reward rebalance with higher payouts for clean
                runs, Gymkhana mode scoring fixes, new graphics options for
                mid-range devices.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How to Get the New Cars in the Mod Version</h2>
      <p>
        In the mod apk you never have to grind for a new chassis. The moment an
        update ships, the mod build includes every car, track and upgrade. To
        get the new cars on your device:
      </p>
      <ul>
        <li>
          Download the latest mod apk from the{" "}
          <Link href="/download/">FR Legends mod download page</Link>.
        </li>
        <li>Allow unknown sources in your phone settings before installing.</li>
        <li>
          Install over your existing FR Legends install so your save carries
          over.
        </li>
        <li>
          Open the game, visit the dealership and pick any of the six new cars.
        </li>
        <li>Set up the S15 or R32 and start drifting immediately.</li>
      </ul>
      <h2>Mod Apk Features Compared to the Official Game</h2>
      <p>
        If you play outside Android, the same updates are covered in our{" "}
        <Link href="/fr-legends-mod-apk-for-pc/">
          FR Legends mod apk for PC guide
        </Link>{" "}
        and our{" "}
        <Link href="/fr-legends-mod-apk-ios/">
          FR Legends mod apk for iOS guide
        </Link>
        . The mod features compared with the official game:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Official Game</th>
              <th scope="col">Mod Apk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New cars</td>
              <td>Buy with earned coins</td>
              <td>Unlocked from the start</td>
            </tr>
            <tr>
              <td>Money</td>
              <td>Grind or pay</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Ads</td>
              <td>Present</td>
              <td>Removed</td>
            </tr>
            <tr>
              <td>Tracks and modes</td>
              <td>Unlock by level</td>
              <td>All unlocked</td>
            </tr>
            <tr>
              <td>Save compatibility</td>
              <td>Standard save</td>
              <td>Carries over between versions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Car Mods Fit In</h2>
      <p>
        Beyond base game updates, there are car-specific mods that change how a
        chassis looks and behaves. The{" "}
        <Link href="/fr-legends-supra-mod-apk/">Supra mod apk page</Link> covers
        the MK4 Supra with body kits, engine swaps and drift tuning. The{" "}
        <Link href="/fr-legends-rx7-mod-livery-codes/">RX-7 mod</Link> pairs the
        new rotary with livery codes, and the{" "}
        <Link href="/fr-legends-bmw-drift-mods/">BMW drift mods page</Link> hosts
        E30 and E36 builds for sideways fun. These mods are built to work on top
        of the current update, so if a new version changes physics, the car mods
        follow the update log before you install them.
      </p>

      <h2>What to Expect Next</h2>
      <p>
        Based on the pace of the last year, the next FR Legends update should
        bring a new touge track and at least one more car to the dealership. The
        developer has teased longer drift courses and more livery editor
        improvements in recent patch notes. On our side, each official release
        gets a matching mod build within days, with notes posted on the{" "}
        <Link href="/blog/">FR Legends blog</Link>. The separate{" "}
        <Link href="/fr-legends-2-mod-apk/">FR Legends 2 mod apk</Link>{" "}
        continues development in parallel, with its own car list and track set.
        What we expect:
      </p>
      <ul>
        <li>A new touge track, likely before the end of 2026.</li>
        <li>Livery editor improvements, including more decal layers.</li>
        <li>Continued multiplayer lobby and matchmaking fixes.</li>
        <li>A mod build for every official version, published same-week.</li>
      </ul>

      <h2>FAQ</h2>
      <h3>Do the new cars carry over if I update the mod apk?</h3>
      <p>
        Yes. Install the new build over the old one and your garage, saves and
        liveries stay intact, including the six new cars.
      </p>
      <h3>Are the new cars free in the mod version?</h3>
      <p>
        Yes. The mod apk unlocks the S15, RX-7, E30, AE86, Miata and R32 without
        spending coins, along with every other car in the game.
      </p>
      <h3>When was the R32 added to FR Legends?</h3>
      <p>
        The Nissan Skyline R32 joined the roster in the August 2026 update,
        version 0.4.7, alongside the other five new cars.
      </p>
      <h3>Will my save work if I switch from the mod back to the official game?</h3>
      <p>
        Saves from the mod build open in the official version, but coins and
        unlocked cars revert to what you earned legitimately.
      </p>
      <h3>Where can I see the full list of FR Legends cars?</h3>
      <p>
        The complete roster with stats and driving notes is on the{" "}
        <Link href="/fr-legends-cars-list/">FR Legends cars list</Link> page,
        and the rankings are on the{" "}
        <Link href="/fr-legends-car-tier-list/">tier list</Link>.
      </p>

      <p>
        That covers everything that changed in the recent FR Legends updates.
        Bookmark this page, because we refresh it every time a new version
        ships, and follow the <Link href="/blog/">blog</Link> for guides, livery
        codes and tier rankings between releases. If you want to try the new S15
        or R32 right now, grab the latest mod apk from the{" "}
        <Link href="/download/">download page</Link>, or start from the{" "}
        <Link href="/">homepage</Link> to browse all FR Legends content.
      </p>
    </ArticlePage>
  );
}