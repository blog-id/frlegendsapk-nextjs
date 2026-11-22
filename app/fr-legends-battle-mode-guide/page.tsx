import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import ProseImage from "@/components/ProseImage";
import { articleMetadata } from "@/lib/articles";

export const metadata: Metadata = articleMetadata("fr-legends-battle-mode-guide");

export default function FrLegendsBattleModeGuidePage() {
  return (
    <ArticlePage slug="fr-legends-battle-mode-guide">
      <ProseImage
        src="/assets/images/fr-legends-drift-gameplay-scene.jpg"
        alt="FR Legends drift gameplay scene from a battle mode round"
        width={1200}
        height={675}
        priority
      />
      

      <h2>Rounds and progression</h2>
      <p>
        Rounds work in pairs. The leader sets the benchmark, then the chaser is
        judged on how closely they mirror the run. The two drivers then swap
        roles for the next round. After all rounds, the scores are added up and
        the higher total wins the battle. Win battles to progress through the
        career map and earn coin payouts that grow with every victory. Online
        battles use the same scoring but add a timer and a rank system, so your
        rating moves with each result. Some tracks are tougher than others, so
        check the <Link href="/fr-legends-tracks-list/">full FR Legends track list</Link>{" "}
        and practice the hairpins before you take them online.
      </p>

      <h2>Car setup for battle</h2>
      <p>
        Technique comes first, but setup removes roadblocks. Tweak these
        settings one step at a time.
      </p>
      <h3>Differential and tires</h3>
      <p>
        Start from a setup that lets the rear rotate without making the car
        difficult to catch. Make small differential, tire and alignment
        adjustments one at a time, then compare the same corner again. The
        best balance depends on the car, power level and driving inputs. See the{" "}
        <Link href="/fr-legends-best-drift-settings-tuning-guide/">
          best drift settings and tuning guide
        </Link>
        .
      </p>
      <h3>Suspension and engine</h3>
      <p>
        Softer rear springs and a softer rear stabilizer let the car squat and
        rotate smoothly between transitions, exactly what a battle run demands.
        A mid-range engine tune keeps power predictable on the exit, because a
        spike of torque mid-corner is the fastest way to lose a round. For the
        bigger picture, see{" "}
        <Link href="/how-to-build-the-perfect-drift-car/">
          how to build the perfect drift car
        </Link>
        .
      </p>

      <ProseImage
        src="/assets/images/fr-legends-touge-track-drift-gameplay.jpg"
        alt="Touge track drift in FR Legends where battle rounds happen"
        width={1200}
        height={675}
      />

      <h2>How to win: lead and chase strategy</h2>
      <h3>When to be aggressive</h3>
      <p>
        In the lead car, prioritize a clear and repeatable line. Enter at a
        speed you can manage, initiate before the corner becomes difficult to
        recover from, and keep transitions smooth. A sudden line change or
        inconsistent throttle makes the run harder for both drivers to read.
        Build confidence on tracks you know before trying more aggressive
        entries.
      </p>
      <h3>When to stay clean</h3>
      <p>
        In the chase car, focus first on following the leader's path and
        keeping a controlled, consistent gap. Avoid making a late correction
        that causes contact or takes you away from the line. Smooth throttle
        and steering inputs help you stay close while retaining enough room
        to react when the lead car changes speed or angle.
      </p>

      <h2>FAQ</h2>
      <h3>What is a good score per round?</h3>
      <p>
        There is no single target that applies to every track and game
        version. Compare your run with the in-game score breakdown and look
        for consistency in line, angle and proximity rather than chasing
        one fixed number.
      </p>
      <h3>Do cars need to be upgraded to battle?</h3>
      <p>
        Not to enter, but yes to win. A stock car cannot hold the speed and
        angle that upgraded cars manage, so bring a tuned car to competitive
        battles.
      </p>
      <h3>How long is a battle round?</h3>
      <p>
        Run duration can depend on the selected course and mode. Check the
        timer displayed in the game before each battle.
      </p>

      
    </ArticlePage>
  );
}