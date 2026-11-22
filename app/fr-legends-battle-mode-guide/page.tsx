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
        Set the rear differential loose enough that the inside rear wheel spins
        up early, which makes angle easy to reach and hold. Stiff rear tires
        give the grip you need to break free at speed, while soft front tires
        keep turn-in sharp. Exact values are in the{" "}
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
        Aggression wins in the lead car. If you can hold more angle than the
        chaser can copy, you win every corner. Push the entry, clip the apex at
        speed, and use the fast sections to build a gap the chaser cannot close
        without risking their own run. Be aggressive on tracks you know; the
        Touge hairpins reward a driver who attacks the entry.
      </p>
      <h3>When to stay clean</h3>
      <p>
        In the chase car, polish beats flash. A slightly shallower angle that
        keeps you in the leader&apos;s mirrors scores better than a huge angle
        ten metres back. Match the leader&apos;s line and save your heroics
        for corners where the leader visibly struggles. If you are ahead after
        the first round, a clean second run protects your lead; only chase
        maximum points when you are behind.
      </p>

      <h2>FAQ</h2>
      <h3>What is a good score per round?</h3>
      <p>
        It depends on the track, but as a rule of thumb, over 8,000 on a
        standard circuit is a strong round and 10,000-plus is tournament level.
      </p>
      <h3>Do cars need to be upgraded to battle?</h3>
      <p>
        Not to enter, but yes to win. A stock car cannot hold the speed and
        angle that upgraded cars manage, so bring a tuned car to competitive
        battles.
      </p>
      <h3>How long is a battle round?</h3>
      <p>
        Each run lasts around a minute on most tracks. An entire battle rarely
        takes more than five minutes.
      </p>

      
    </ArticlePage>
  );
}