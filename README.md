# GeoWorld Hub

Lovable Prompt — GeoWorld Games Website

Build a complete, polished gaming website named GeoWorld.

Core Requirements

Framework: React

Styling: Tailwind CSS

Icons: Lucide Icons only

Font: Nunito ONLY across the entire website. Do not use any other font.

Theme: Dark, modern, gaming-focused

Responsive: Fully responsive on desktop, tablet, and mobile.

The site should feel fast, polished, minimal, and similar to a modern browser-games platform.

Use reusable React components and clean project structure.

Do not use placeholder images when an asset from the provided assets folder is available.

Assets

The project already contains an assets folder with:

android-chrome-192x192.png
android-chrome-512x512.png
apple-touch-icon.png
favicon.ico
favicon-16x16.png
favicon-32x32.png
icon.png
long_logo.png
gameplay.png
footer.png


Use them appropriately:

assets/long_logo.png → navbar logo

assets/icon.png → embed-page bottom bar

assets/gameplay.png → SEO/info section and sharing/social preview background

assets/footer.png → footer visual

The favicon assets → configure the site's favicon/app icons correctly.

Do not replace these assets with generated placeholders.

Visual Design

Create a premium dark gaming aesthetic.

Background

The entire site should have a dark space-like background with many tiny stars.

The stars should:

Be small and subtle.

Move slowly across the screen to create an animated space effect.

Have slight variation in opacity and size.

Never distract from the content.

Continue behind the main content.

Work smoothly on desktop and mobile.

Avoid causing excessive CPU/GPU usage.

Use CSS animations where possible rather than a heavy canvas library.

The main content should sit above the animated star background.

Use dark surfaces/cards with subtle borders, shadows, and blue/purple gaming accents.

Navbar

Create a sticky/top navigation bar.

Left side:

Display assets/long_logo.png.

Right side:

Add a search bar.

Search should allow users to search/filter games by name.

Include a Lucide search icon.

Make the search field fit the dark theme.

On mobile, make the search bar responsive and usable without breaking the navbar.

The navbar should have a subtle translucent/dark background and border.

Homepage

Create the homepage at:

/


The homepage should prominently feature Geometry Dash World as the main playable game.

Featured Game

Use this game:

{
  "name": "Geometry Dash World",
  "thumbnail": "https://geodash.org/images/grid-image/geometry-dash-world.webp",
  "embed_url": "https://lolygames.github.io/gd-world/"
}


The homepage should have a large featured game/player area.

The game should be playable directly on the homepage using an iframe.

Use the provided embed_url as the iframe source for the homepage featured game.

Make the iframe:

Large and responsive.

Properly contained inside a polished game-player card.

Dark themed.

Rounded corners.

Responsive on mobile.

Visually prominent.

Do not make the browser feel like it is simply displaying a raw iframe. Wrap the game in a polished gaming UI.

Games Grid

Below the featured Geometry Dash World player, display the rest of the games from games.json.

Create a reusable GameCard component.

Each card should contain:

Game thumbnail

Game name

Play button

Subtle hover animation

Dark card styling

Rounded corners

Lucide icons where appropriate

The cards should be responsive:

Multiple columns on desktop.

Fewer columns on tablet.

Single-column or compact layout on mobile.

The search bar in the navbar should filter this game grid in real time.

Use the supplied games.json as the source of game data.

The provided games include:

[
  {
    "name": "Geometry Dash Lite",
    "thumbnail": "https://geodash.org/images/grid-image/geometry-dash-lite.webp",
    "embed_url": "https://geodashlite.pages.dev/"
  },
  {
    "name": "Geometry Dash Meltdown",
    "thumbnail": "https://geodash.org/images/grid-image/geometry-dash-meltdown.webp",
    "embed_url": "https://lolygames.github.io/gd-melt/"
  },
  {
    "name": "Geometry Dash World",
    "thumbnail": "https://geodash.org/images/grid-image/geometry-dash-world.webp",
    "embed_url": "https://lolygames.github.io/gd-world/"
  }
]


The actual games.json may contain additional games. Automatically render all games contained in it rather than hardcoding only these three.

Game Pages

Every game must have its own dedicated page.

URL structure:

/game/geometry-dash-world
/game/geometry-dash-lite
/game/geometry-dash-meltdown


Generate the slug automatically from the game name.

Each game page should:

Display the game title.

Display the game's thumbnail.

Have a prominent Play button.

Include game information where appropriate.

Have a polished dark gaming layout.

Be responsive.

Include relevant SEO metadata.

Provide an obvious way to launch the game.

IMPORTANT

Do NOT directly put the game's embed_url inside:

/game/geometry-dash-world


Instead, the Play button should navigate to:

/embed/geometry-dash-world


The same pattern must be used for every game.

For example:

/game/geometry-dash-lite


Play button →

/embed/geometry-dash-lite


Dedicated Embed Pages

Create a dedicated route for every game:

/embed/:gameSlug


Examples:

/embed/geometry-dash-world
/embed/geometry-dash-lite
/embed/geometry-dash-meltdown


The embed page should be extremely simple and focused on gameplay.

Embed layout

At the top/main area:

Display the game's embed_url in an iframe.

Make the iframe effectively fullscreen, filling the available viewport.

Remove unnecessary page UI around the game.

The iframe should have no visible margins.

Use a black/dark background.

The embed URL must come from the corresponding game object in games.json.

For example:

/embed/geometry-dash-world


loads:

https://lolygames.github.io/gd-world/


inside the iframe.

Bottom Bar

Under/over the game, create a compact dark bottom bar.

Left:

assets/icon.png

Middle:

A button labeled exactly:

Hide this bar


Clicking it should hide/collapse the bottom bar so the user gets maximum gameplay space.

When hidden, provide a sensible way to restore it.

Right:

A fullscreen button using a Lucide fullscreen icon.

Clicking it should make the game iframe/container fullscreen using the browser Fullscreen API where supported.

The bottom bar should be polished, subtle, and not interfere with gameplay.

SEO / Information Section

Below the games grid on the homepage, create an information section.

Its primary purpose is SEO and helping the website appear in Google search results.

IMPORTANT: The following content must be inserted AS IS, with NO CHANGES whatsoever.

Do not:

Rewrite it.

Correct grammar.

Change "Geo Dash" to "GeoWorld".

Change headings.

Change wording.

Change punctuation.

Change links.

Remove anything.

Add wording inside the provided content.

Render the Markdown content as properly styled HTML.

Use assets/gameplay.png on the right side of the "What Is Geometry Dash?" section.

On mobile, stack the image below/above the text appropriately.

Use proper semantic HTML headings (h2, h3) corresponding to the Markdown structure.

The exact content is:

What Is Geometry Dash?

Geometry Dash is a popular rhythm-based platform game created by RobTop Games and developed by Robert Topala. Players control a cube and guide it through obstacle-filled levels that move in sync with the music.

At Geo World, you can play Geometry Dash online directly in your browser without downloading anything. The game is known for its simple controls, fast-paced gameplay, and thousands of community-created levels. Whether you're a beginner or an experienced player, GD offers a fun challenge that tests your timing, reflexes, and focus. (add the gameplay.png on the right here)

How To Play Geometry Dash?

Easy to learn, but hard to master. Follow the beat, time your jumps, and avoid obstacles to reach the finish line.

Controls:

Click the mouse, tap the screen, or press the spacebar to jump.

Hold the button in certain modes to fly or move upward.

Release to descend or return to normal movement.

Tips for Beginners:

Start with easy levels like Stereo Madness.

Use Practice Mode to learn difficult sections.

Watch for jump pads, rings, and gravity portals.

Follow the rhythm of the music for better timing.

The more you play, the better your timing, focus, and reaction speed will become.

Main Features of Geometry Dash

Geometry Dash offers a mix of rhythm-based gameplay, challenging levels, and player creativity. The game includes dozens of official levels with different themes, obstacles, and difficulty settings. As you progress, you'll unlock new icons, colors, and rewards by completing levels and collecting secret coins.

Key Features:

22 Official levels ranging from Easy to Demon difficulty.

Simple one-touch controls with multiple game modes.

Hidden coins, achievements, and unlockable rewards.

Character customization with different icons and colors.

At Geo World, you can enjoy the core gameplay experience directly in your browser. The level editor and online level sharing are only available in the full version. However, the browser version still lets you enjoy the game's exciting levels, music, and challenges.

Tips and Strategies To Improve Gameplay

Improving in Geometry Dash takes patience and practice. Even top players fail hundreds of times while learning difficult levels. Focus on building consistency instead of rushing through stages.

Tips from Experienced Players:

Learn the level layout before collecting secret coins.

Use Practice Mode to memorize difficult sections.

Follow the music rhythm to improve jump timing.

Replay easier levels to build muscle memory and control.

Take short breaks when frustration starts affecting your performance.

The best players don't rely on luck. They learn obstacle patterns, improve their timing, and stay consistent with practice.

Geometry Dash Spins-off

Yes, Geometry Dash has several official versions. Each one offers unique content while keeping the same core gameplay of jumping, flying, and avoiding obstacles in sync with music.

Geometry Dash Full Version

Geometry Dash (Full Version) is the complete game. It includes more than 22 official levels, online level sharing, and a powerful level editor. Players can earn daily rewards, unlock achievements, collect secret coins, and customize their icons. The game also features Gauntlets, Map Packs, and millions of community-made levels.

Geometry Dash Lite

Geometry Dash Lite is the free version of the game. It contains a limited selection of official levels and introduces new players to the game's mechanics. Online features, level creation tools, and customization options are more limited than in the full version.

Geometry Dash Meltdown

Known for its fiery theme, this spin-off includes three exclusive levels: The Seven Seas, Viking Arena, and Airborne Robots. Music by F-777 plays a major role in the experience, helping set the pace for each level. It also introduces new obstacles and gameplay mechanics that are not found in earlier versions.

Geometry Dash World

Players can explore two worlds filled with short levels and quick challenges. Daily quests, rewards, and treasure chests give extra reasons to keep playing. Selected online content is also available. Several features introduced here later became part of major Geometry Dash updates.

Geometry Dash SubZero

This standalone version includes three challenging levels: Press Start, Nock Em, and Power Trip. It features advanced visual effects, modern gameplay mechanics, and music from popular electronic artists, making it one of the most visually impressive GD spin-offs.

Each version offers different levels, music, and challenges. However, they all share the fast-paced rhythm-based gameplay, precise timing, and skill-focused mechanics that made GD a global success.

FAQs (openable and closable dropdown sections)

Can I Play Geometry Dash Online For Free?

Yes. You can play Geometry Dash online through Geo World without downloading or installing anything. Simply visit GeoDash.org, click Play, and jump straight into the game.

What Are The Different Difficulty Levels In Geometry Dash?

The game features several difficulty levels, including Auto, Easy, Normal, Hard, Harder, Insane, and Demon. As the difficulty increases, levels require better timing, faster reactions, and greater control to complete.

What Are Secret Coins In Geometry Dash?

Secret Coins are collectible items hidden throughout Geometry Dash official levels. Players earn rewards by finding and collecting all secret coins in a level. Secret Coins unlock achievements, icons, colors, and other customization options. The main game contains 149 secret coins across official levels, map packs, gauntlets, and other game content.

FAQ Accordion

The FAQ questions above must be implemented as openable and closable dropdown/accordion sections.

Requirements:

Closed by default.

Clicking a question expands the answer.

Clicking again collapses it.

Use Lucide ChevronDown / ChevronUp icons.

Smooth height/opacity transition.

Only the FAQ UI behavior should be interactive; do not alter the supplied wording.

Footer

Create a polished footer at the bottom of the site.

Use:

assets/footer.png


as part of the footer design.

The footer should include:

assets/footer.png

Small GeoWorld description.

Navigation/page links.

Links to the main games/pages.

Homepage link.

A games link/section.

Any other sensible basic navigation links.

Keep the footer relatively compact and visually consistent with the dark space theme.

Use Lucide icons where appropriate.

Sharing / Social Metadata

Configure the website's social sharing metadata.

Use:

assets/gameplay.png


as the social/share preview image where appropriate.

Configure:

Page title

Meta description

Open Graph title

Open Graph description

Open Graph image

Twitter/X card metadata

Favicon metadata

Use appropriate SEO metadata for the homepage and dynamically generated metadata for individual game pages.

Routing

Implement clean client-side routing.

Required routes:

/
/game/:gameSlug
/embed/:gameSlug


Examples:

/
/game/geometry-dash-world
/game/geometry-dash-lite
/game/geometry-dash-meltdown
/embed/geometry-dash-world
/embed/geometry-dash-lite
/embed/geometry-dash-meltdown


Do not create separate hardcoded components for every game.

Instead:

Load game data from games.json.

Generate the slug from the game name.

Find the matching game based on the URL slug.

Dynamically render the correct game page.

Dynamically render the correct embed page.

If an invalid game slug is visited, show a polished 404/not-found state with a button back to the homepage.

Components

Organize the application into reusable components such as:

Navbar
AnimatedStars
GameCard
GameGrid
FeaturedGame
GamePage
EmbedPage
EmbedBar
SEOInfo
FAQAccordion
Footer
SearchBar


Keep the components clean and reusable.

UX Details

Add subtle animations throughout the site:

Game card hover effects.

Button hover effects.

Navbar transitions.

Accordion transitions.

Star background movement.

Page/content entrance animations where appropriate.

Do not over-animate the site.

Prioritize:

Fast loading

Accessibility

Mobile responsiveness

Clear navigation

Easy gameplay access

Strong visual hierarchy

Buttons should have clear hover/focus states.

Images should use sensible loading behavior and alt text.

Accessibility

Use semantic HTML.

Ensure:

Buttons are actual <button> elements.

Navigation links are actual links.

Form/search input has an accessible label or appropriate aria-label.

Images have useful alt text.

Accordion controls have appropriate accessibility attributes.

Keyboard navigation works.

Focus states are visible.

Fullscreen controls have an accessible label.

Important Implementation Rules

Use React.

Use Tailwind CSS.

Use Nunito ONLY.

Use Lucide Icons ONLY for interface icons.

Do not introduce another icon library.

Use the provided assets.

Use the animated star-space background globally.

Use games.json as the source of truth for games.

Do not hardcode individual game pages.

Every game must have /game/:slug and /embed/:slug.

Game pages must link to their corresponding embed pages rather than directly embedding embed_url.

Embed pages must use the game's embed_url inside an iframe.

The Geometry Dash World featured player must be present directly on the homepage.

The provided SEO text must remain AS IS with absolutely no wording changes.

Use gameplay.png in the SEO section on the right side of the "What Is Geometry Dash?" section.

Use footer.png in the footer.

Use icon.png in the embed bottom bar.

Use long_logo.png in the navbar.

Use the favicon assets correctly.

Make the site production-quality rather than a basic prototype.

The final result should look like a professional dark browser-games website called GeoWorld, with Geometry Dash World immediately playable on the homepage and all other games easily discoverable and playable through their dedicated game and embed routes.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f22fb20f-22a3-4c7b-b5d1-148e4f34436b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
