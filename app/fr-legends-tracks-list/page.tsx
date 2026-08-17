import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import ProseImage from "@/components/ProseImage";
import { articleMetadata } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-tracks-list");

export default function FrLegendsTracksListPage() {
  return (
    <ArticlePage slug="fr-legends-tracks-list">
      <ProseImage
        src="/assets/images/fr-legends-touge-track-drift-gameplay.jpg"
        alt="FR Legends touge track drift gameplay on a mountain road"
        width={1200}
        height={675}
        priority
      />
      <p className="lede">
        FR Legends ships with ten tracks, and they are not created equal. A few
        venues let you learn clutch kicks in peace, while the mountain passes
        exist to humble you. Knowing what each course asks of your car, and
        which order to tackle them in, is worth more than any engine upgrade.
        This guide breaks down every track in the game, groups them by type,
        ranks them by difficulty, and points you toward the right venue for
        whatever you are practicing, from your first clean lap on Irwindale to
        full commitment on Gunsai. We also cover how unlock requirements work,
        why some courses reward power while others reward patience, and how each
        track should change the way you set up your car. Read the{" "}
        <Link href="/fr-legends-car-tier-list/">car tier list</Link> first if
        you have not chosen a ride yet, then come back here to learn where to
        drive it.
      </p>

      <h2>How track unlocks and scoring work in FR Legends</h2>
      <p>
        In career mode you work through a five star rating system. Finish a
        stage with gold, silver or bronze and you earn stars, with gold giving
        the full five. Collect enough stars and the next track unlocks, along
        with new cars and events. Each venue has its own set of stages, so you
        cannot reach Meihan Kansai without clearing the easier circuits first.
        Battle mode is separate: every track is available from the start, and
        you earn coins for wins and for beating your personal best scores.
      </p>
      <p>
        The mod version removes most of the grind. All ten tracks, every car and
        every event are unlocked from day one, which makes it the fastest way to
        practice tracks you would normally see only late in career mode. Grab
        the mod from the <Link href="/download/">download page</Link>, but even
        in the base game the unlock order is a sensible difficulty curve, so
        follow it anyway. If your install will not run, the{" "}
        <Link href="/fr-legends-mod-apk-old-versions/">older versions page</Link>{" "}
        has builds that work on more devices.
      </p>

      <h2>Every FR Legends track, grouped by type</h2>
      <p>
        The ten tracks fall into three broad families: circuits, touge passes,
        and open practice areas. Knowing which family a course belongs to tells
        you most of what you need about how to drive it.
      </p>
      <h3>Circuit tracks</h3>
      <p>
        Four courses belong here. Irwindale Speedway is a banked oval with an
        infield section, wide, fast and forgiving, the best place to learn
        transitions. Grange Motor Circuit is a flowing track with long sweepers
        and fast changes of direction, great for building confidence at speed.
        USAIR Motorsport is a modern, wide venue with generous run-off and
        smooth lines, an easy track that still teaches you to hit apexes. Meihan
        Kansai is the hardest circuit on the list, a real Japanese circuit with
        tight, rhythm-heavy corners that rewards clean entries and makes tandems
        look effortless.
      </p>
      <h3>Touge tracks</h3>
      <p>
        Gunsai Touge is the signature mountain pass, a narrow ribbon of asphalt
        with blind crests, changing camber and no margin for error. Ebisu Touge,
        the long downhill run, is all about commitment and consistent braking,
        because gravity keeps adding speed. Hiroshima sits between the two
        worlds: a street course with technical sections, variable camber and
        walls that punish a lazy line. These are the tracks that separate
        drifters from everyone else.
      </p>
      <h3>Drift park and school courses</h3>
      <p>
        Drift Park is open, flat ground with simple corners, the community
        practice lot where you can experiment with angle and throttle control
        without consequences. School Course is the opposite: tight corners in
        quick succession that punish lazy entries and reward precision. Ebisu
        Minami is narrow, bumpy and technical, the real world drift mecca
        recreated with all its awkward bumps intact.
      </p>

      <h2>Every track ranked by difficulty</h2>
      <p>
        Difficulty here is not about raw speed, it is about how much room for
        error each venue gives you. A wide oval will forgive a bad line; a touge
        will not.
      </p>
      <div className="table-wrap">
        <table>
          <caption className="visually-hidden">
            FR Legends tracks ranked by difficulty
          </caption>
          <thead>
            <tr>
              <th scope="col">Track</th>
              <th scope="col">Type</th>
              <th scope="col">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Irwindale Speedway</td>
              <td>Circuit</td>
              <td>★ Beginner</td>
            </tr>
            <tr>
              <td>Drift Park</td>
              <td>Drift park</td>
              <td>★ Beginner</td>
            </tr>
            <tr>
              <td>USAIR Motorsport</td>
              <td>Circuit</td>
              <td>★★ Easy</td>
            </tr>
            <tr>
              <td>Grange Motor Circuit</td>
              <td>Circuit</td>
              <td>★★ Easy</td>
            </tr>
            <tr>
              <td>Hiroshima</td>
              <td>Street</td>
              <td>★★★ Medium</td>
            </tr>
            <tr>
              <td>Meihan Kansai</td>
              <td>Circuit</td>
              <td>★★★ Medium</td>
            </tr>
            <tr>
              <td>School Course</td>
              <td>Drift park</td>
              <td>★★★★ Hard</td>
            </tr>
            <tr>
              <td>Ebisu Minami</td>
              <td>Drift park</td>
              <td>★★★★ Hard</td>
            </tr>
            <tr>
              <td>Gunsai Touge</td>
              <td>Touge</td>
              <td>★★★★★ Expert</td>
            </tr>
            <tr>
              <td>Ebisu Touge</td>
              <td>Touge</td>
              <td>★★★★★ Expert</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The best tracks to practice drifting on</h2>
      <p>
        Pick a venue that matches what you are trying to learn, not the one that
        looks coolest.
      </p>
      <ul>
        <li>
          <strong>Drift Park:</strong> clutch kicks, throttle control and
          holding a long angle in safety. The best place for absolute beginners,
          and it pairs well with the{" "}
          <Link href="/best-beginner-car-in-fr-legends/">
            best beginner car guide
          </Link>
          .
        </li>
        <li>
          <strong>Irwindale Speedway:</strong> transitions and entry speed on
          the banked oval, ideal for linking your first corners.
        </li>
        <li>
          <strong>Grange Motor Circuit:</strong> car placement and linking
          corners at speed once you can hold a line.
        </li>
        <li>
          <strong>Meihan Kansai:</strong> rhythm and tandems when you want to
          practice following another car.
        </li>
      </ul>
      <p>
        If you want a structured routine, the{" "}
        <Link href="/how-to-drift-in-fr-legends/">how to drift guide</Link>{" "}
        covers the techniques in order, while the{" "}
        <Link href="/fr-legends-best-drift-settings-tuning-guide/">
          tuning guide
        </Link>{" "}
        explains the suspension and tyre settings each of these venues rewards.
      </p>

      <h2>The best tracks for battle mode</h2>
      <p>
        Battle mode is scored on angle, line and style, so choose a venue that
        shows your car at its best. Meihan Kansai is the community favorite for
        tandems, because the rhythm flows and the scoring rewards a car that
        stays glued to the inside line. Irwindale suits high speed battles,
        where a wide, aggressive line still scores well. For a real test of
        nerve, Gunsai Touge forces you to carry angle through blind crests. The{" "}
        <Link href="/fr-legends-battle-mode-guide/">battle mode guide</Link>{" "}
        breaks down the scoring rules, and the{" "}
        <Link href="/fr-legends-car-tier-list/">car tier list</Link> shows which
        cars hold angle long enough to win on these tracks. Grinding battles on
        USAIR or Drift Park is also the most efficient way to earn coins for
        upgrades.
      </p>

      <ProseImage
        src="/assets/images/fr-legends-drift-racing-gameplay.jpg"
        alt="FR Legends drift racing gameplay on a circuit track"
        width={1200}
        height={675}
      />

      <h2>How the track changes your car setup</h2>
      <p>
        Different venues ask for different setups. On bumpy tracks like Ebisu
        Minami you want a stiff rear and lower ride height, so the car does not
        get unsettled mid corner. On fast, flowing circuits such as Grange and
        USAIR, softer suspension and a touch more rear grip help you carry
        speed. Touge tracks reward predictable cars: stability beats peak angle
        when the barrier is one metre away. Changing track should change your
        setup, not your driving style, and the{" "}
        <Link href="/fr-legends-best-drift-settings-tuning-guide/">
          drift settings and tuning guide
        </Link>{" "}
        walks through spring rates, camber, tyre pressure and gear ratios for
        each track type. If your current car cannot do what the track demands,
        the <Link href="/fr-legends-cars-list/">cars list</Link> has every
        machine, and the{" "}
        <Link href="/fr-legends-car-tier-list/">tier list</Link> shows where
        each one shines.
      </p>

      <h2>Full track reference table</h2>
      <div className="table-wrap">
        <table>
          <caption className="visually-hidden">
            FR Legends tracks with type, difficulty and best use
          </caption>
          <thead>
            <tr>
              <th scope="col">Track</th>
              <th scope="col">Type</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Irwindale Speedway</td>
              <td>Circuit</td>
              <td>Beginner</td>
              <td>Learning transitions</td>
            </tr>
            <tr>
              <td>Drift Park</td>
              <td>Drift park</td>
              <td>Beginner</td>
              <td>Angle practice</td>
            </tr>
            <tr>
              <td>USAIR Motorsport</td>
              <td>Circuit</td>
              <td>Easy</td>
              <td>Coin grinding</td>
            </tr>
            <tr>
              <td>Grange Motor Circuit</td>
              <td>Circuit</td>
              <td>Easy</td>
              <td>Linking corners at speed</td>
            </tr>
            <tr>
              <td>Hiroshima</td>
              <td>Street</td>
              <td>Medium</td>
              <td>Street technique</td>
            </tr>
            <tr>
              <td>Meihan Kansai</td>
              <td>Circuit</td>
              <td>Medium</td>
              <td>Tandems and rhythm</td>
            </tr>
            <tr>
              <td>School Course</td>
              <td>Drift park</td>
              <td>Hard</td>
              <td>Precision entries</td>
            </tr>
            <tr>
              <td>Ebisu Minami</td>
              <td>Drift park</td>
              <td>Hard</td>
              <td>Advanced car control</td>
            </tr>
            <tr>
              <td>Gunsai Touge</td>
              <td>Touge</td>
              <td>Expert</td>
              <td>Showoff runs</td>
            </tr>
            <tr>
              <td>Ebisu Touge</td>
              <td>Touge</td>
              <td>Expert</td>
              <td>Downhill battles</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>FAQ</h2>
      <h3>How many tracks does FR Legends have?</h3>
      <p>
        Ten: Irwindale Speedway, USAIR Motorsport, Grange Motor Circuit, Meihan
        Kansai, Hiroshima, Gunsai Touge, Ebisu Touge, Ebisu Minami, School
        Course and Drift Park.
      </p>
      <h3>What is the easiest track in FR Legends?</h3>
      <p>
        Irwindale Speedway. It is wide, banked and forgiving, the best venue for
        learning transitions and entry speed without crashing.
      </p>
      <h3>What is the hardest track in FR Legends?</h3>
      <p>
        Gunsai Touge and Ebisu Touge are the hardest. Both are narrow mountain
        passes where hesitation costs you the run, and Ebisu Touge only gets
        faster as gravity pulls you downhill.
      </p>
      <h3>How do I unlock all tracks fast?</h3>
      <p>
        Earn gold medals to collect five stars per stage and the tracks unlock
        in order. The <Link href="/download/">mod version</Link> unlocks
        everything from day one if you want to skip the grind.
      </p>
      <h3>Which track is best for tandems?</h3>
      <p>
        Meihan Kansai. Its rhythm and flow make it the community favorite for
        battle mode and tandem battles, so it is the place to practice following
        another car.
      </p>

      <p>
        Take this list with you the next time you open the game. Start on the
        beginner courses, build consistency on the medium ones, and leave the
        touges until your transitions are automatic. For more help, browse the{" "}
        <Link href="/blog/">blog</Link> for guides on{" "}
        <Link href="/fr-legends-battle-mode-guide/">battle mode</Link>,{" "}
        <Link href="/fr-legends-car-tier-list/">car tiers</Link> and{" "}
        <Link href="/best-beginner-car-in-fr-legends/">beginner cars</Link>, or
        read about playing on <Link href="/fr-legends-mod-apk-for-pc/">PC</Link>{" "}
        and <Link href="/fr-legends-mod-apk-ios/">iOS</Link>. Ten venues, one
        goal: keep the angle.
      </p>
    </ArticlePage>
  );
}