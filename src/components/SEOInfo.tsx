import gameplay from "@/assets/gameplay.png";
import { FAQAccordion, type FaqItem } from "./FAQAccordion";
import GDText from "./GDText";

const faqs: FaqItem[] = [
  {
    q: "Can I Play Geometry Dash Online For Free?",
    a: "Yes. You can play Geometry Dash online through Geo World without downloading or installing anything. Simply visit GeoDash.org, click Play, and jump straight into the game.",
  },
  {
    q: "What Are The Different Difficulty Levels In Geometry Dash?",
    a: "The game features several difficulty levels, including Auto, Easy, Normal, Hard, Harder, Insane, and Demon. As the difficulty increases, levels require better timing, faster reactions, and greater control to complete.",
  },
  {
    q: "What Are Secret Coins In Geometry Dash?",
    a: "Secret Coins are collectible items hidden throughout Geometry Dash official levels. Players earn rewards by finding and collecting all secret coins in a level. Secret Coins unlock achievements, icons, colors, and other customization options. The main game contains 149 secret coins across official levels, map packs, gauntlets, and other game content.",
  },
];

const P = "mt-3 text-sm leading-relaxed text-muted-foreground";
const UL = "mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground";

export function SEOInfo() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="rounded-3xl border border-border/70 bg-card/60 p-6 backdrop-blur sm:p-9">
        <div className="grid items-start gap-6 md:grid-cols-2">
          <div>
            <GDText
              text="What Is Geometry Dash?"
              size={128}
              className="h-6"
            />

            <p className={P}>
              Geometry Dash is a popular rhythm-based platform game created by RobTop Games and
              developed by Robert Topala. Players control a cube and guide it through
              obstacle-filled levels that move in sync with the music.
            </p>
            <p className={P}>
              At Geo World, you can play Geometry Dash online directly in your browser without
              downloading anything. The game is known for its simple controls, fast-paced gameplay,
              and thousands of community-created levels. Whether you're a beginner or an
              experienced player, GD offers a fun challenge that tests your timing, reflexes, and
              focus.
            </p>
          </div>

          <img
            src={gameplay}
            alt="Geometry Dash gameplay showing a cube jumping over spikes on a neon level"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full rounded-2xl border border-border/70 shadow-glow-sm"
          />
        </div>

        <GDText
          text="How To Play Geometry Dash?"
          size={128}
          className="mt-10 h-6"
        />

        <p className={P}>
          Easy to learn, but hard to master. Follow the beat, time your jumps, and avoid obstacles
          to reach the finish line.
        </p>

        <GDText
          text="Controls:"
          size={128}
          className="mt-6 h-6"
        />

        <ul className={UL}>
          <li>Click the mouse, tap the screen, or press the spacebar to jump.</li>
          <li>Hold the button in certain modes to fly or move upward.</li>
          <li>Release to descend or return to normal movement.</li>
        </ul>

        <GDText
          text="Tips for Beginners:"
          size={128}
          className="mt-6 h-6"
        />

        <ul className={UL}>
          <li>Start with easy levels like Stereo Madness.</li>
          <li>Use Practice Mode to learn difficult sections.</li>
          <li>Watch for jump pads, rings, and gravity portals.</li>
          <li>Follow the rhythm of the music for better timing.</li>
        </ul>

        <p className={P}>
          The more you play, the better your timing, focus, and reaction speed will become.
        </p>

        <GDText
          text="Main Features of Geometry Dash"
          size={128}
          className="mt-10 h-6"
        />

        <p className={P}>
          Geometry Dash offers a mix of rhythm-based gameplay, challenging levels, and player
          creativity. The game includes dozens of official levels with different themes, obstacles,
          and difficulty settings. As you progress, you'll unlock new icons, colors, and rewards by
          completing levels and collecting secret coins.
        </p>

        <GDText
          text="Key Features:"
          size={128}
          className="mt-6 h-6"
        />

        <ul className={UL}>
          <li>22 Official levels ranging from Easy to Demon difficulty.</li>
          <li>Simple one-touch controls with multiple game modes.</li>
          <li>Hidden coins, achievements, and unlockable rewards.</li>
          <li>Character customization with different icons and colors.</li>
        </ul>

        <p className={P}>
          At Geo World, you can enjoy the core gameplay experience directly in your browser. The
          level editor and online level sharing are only available in the full version. However,
          the browser version still lets you enjoy the game's exciting levels, music, and
          challenges.
        </p>

        <GDText
          text="Tips and Strategies To Improve Gameplay"
          size={128}
          className="mt-10 h-6"
        />

        <p className={P}>
          Improving in Geometry Dash takes patience and practice. Even top players fail hundreds of
          times while learning difficult levels. Focus on building consistency instead of rushing
          through stages.
        </p>

        <GDText
          text="Tips from Experienced Players:"
          size={128}
          className="mt-6 h-6"
        />

        <ul className={UL}>
          <li>Learn the level layout before collecting secret coins.</li>
          <li>Use Practice Mode to memorize difficult sections.</li>
          <li>Follow the music rhythm to improve jump timing.</li>
          <li>Replay easier levels to build muscle memory and control.</li>
          <li>Take short breaks when frustration starts affecting your performance.</li>
        </ul>

        <p className={P}>
          The best players don't rely on luck. They learn obstacle patterns, improve their timing,
          and stay consistent with practice.
        </p>

        <GDText
          text="Geometry Dash Spins-off"
          size={128}
          className="mt-10 h-6"
        />

        <p className={P}>
          Yes, Geometry Dash has several official versions. Each one offers unique content while
          keeping the same core gameplay of jumping, flying, and avoiding obstacles in sync with
          music.
        </p>

        <GDText
          text="Geometry Dash Full Version"
          size={128}
          className="mt-6 h-6"
        />

        <p className={P}>
          Geometry Dash (Full Version) is the complete game. It includes more than 22 official
          levels, online level sharing, and a powerful level editor. Players can earn daily
          rewards, unlock achievements, collect secret coins, and customize their icons. The game
          also features Gauntlets, Map Packs, and millions of community-made levels.
        </p>

        <GDText
          text="Geometry Dash Lite"
          size={128}
          className="mt-6 h-6"
        />

        <p className={P}>
          Geometry Dash Lite is the free version of the game. It contains a limited selection of
          official levels and introduces new players to the game's mechanics. Online features,
          level creation tools, and customization options are more limited than in the full
          version.
        </p>

        <GDText
          text="Geometry Dash Meltdown"
          size={128}
          className="mt-6 h-6"
        />

        <p className={P}>
          Known for its fiery theme, this spin-off includes three exclusive levels: The Seven Seas,
          Viking Arena, and Airborne Robots. Music by F-777 plays a major role in the experience,
          helping set the pace for each level. It also introduces new obstacles and gameplay
          mechanics that are not found in earlier versions.
        </p>

        <GDText
          text="Geometry Dash World"
          size={128}
          className="mt-6 h-6"
        />

        <p className={P}>
          Players can explore two worlds filled with short levels and quick challenges. Daily
          quests, rewards, and treasure chests give extra reasons to keep playing. Selected online
          content is also available. Several features introduced here later became part of major
          Geometry Dash updates.
        </p>

        <GDText
          text="Geometry Dash SubZero"
          size={128}
          className="mt-6 h-6"
        />

        <p className={P}>
          This standalone version includes three challenging levels: Press Start, Nock Em, and
          Power Trip. It features advanced visual effects, modern gameplay mechanics, and music
          from popular electronic artists, making it one of the most visually impressive GD
          spin-offs.
        </p>

        <p className={P}>
          Each version offers different levels, music, and challenges. However, they all share the
          fast-paced rhythm-based gameplay, precise timing, and skill-focused mechanics that made
          GD a global success.
        </p>

        <GDText
          text="FAQs"
          size={128}
          className="mt-10 h-6"
        />

        <div className="mt-4">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

export default SEOInfo;