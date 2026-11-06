# Royat Al Najah website

The local Royat Al Najah website lives in `/Users/noufalrizwanm/Documents/ranre`. It uses React 19 and Vite 6, with Tailwind CSS 4 utilities, custom CSS, and shared browser JavaScript.

## Run locally

Use Node.js 20.19 or later.

```sh
cd /Users/noufalrizwanm/Documents/ranre
npm install
npm run dev
```

Open the address printed by Vite, normally `http://127.0.0.1:5173`. If that port is occupied, Vite may choose another port.

```sh
npm run build
npm run preview
```

The build writes static files to `dist/`. Preview serves the production build locally; it does not publish the website.

## Pages

| Page | URL | React component |
| --- | --- | --- |
| Home | `/` | `src/HomePage.jsx` |
| About | `/about/` | `src/AboutPage.jsx` |
| Services | `/services/` | `src/ServicesPage.jsx` |
| Approach | `/approach/` | `src/ApproachPage.jsx` |

`about.html`, `services.html`, and `approach.html` are also configured as build entries for compatibility.

## Active code structure

- `index.html` and the page HTML files load `src/site-entry.jsx`.
- `src/site-entry.jsx` selects the React page using the body's `data-page` attribute. It mounts React, then loads the shared browser scripts in order.
- `src/site-components/` contains navigation, opening sections, service sections, contact, footer, and other page components.
- `src/sections/ApproachProcess.jsx` contains the approach process section.
- `src/approach-tailwind.css` imports Tailwind theme and utilities and defines additional process-section styles.
- `public/full-site.css` and `public/replica.css` supply custom styles loaded by the HTML pages.
- `public/full-site.js` handles shared interactions, including navigation, intro animation, skyline switching, and scroll reveals.
- `public/site-language.js` supplies the shared language layer.
- `public/phone-lib.js` provides phone handling used by the site.
- `public/assets/` contains static assets.
- `vite.config.js` configures React, Tailwind, and the HTML build entries.

## Editing guidance

Edit page composition in the page components and individual sections in `src/site-components/`. Check both the custom stylesheets and Tailwind classes when changing appearance.

This is a mixed implementation: React renders the pages, while separate scripts attach behavior to the rendered DOM. When changing markup, preserve or update the classes, IDs, and attributes used by those scripts and the language layer.

Edit source files rather than generated files in `dist/`.

## Legacy code

Earlier implementation files remain in this project, including `src/main.jsx`, `src/App.jsx`, `src/components/`, immersive/journey files, and `src/approach-entry.jsx`. They are not the entry points used by the current HTML pages. Historical material also remains in `backup/`.

The earlier cleanup of other workspace copies did not clean this active project. Before removing legacy files or dependencies here, trace references from all current entry points, stylesheets, and browser scripts.

## Validation status

A production build of this local project passed on 6 November 2026, with verification output written to a temporary directory. A successful build checks compilation; it does not establish that every browser interaction works correctly.

There is currently no automated test or lint command in `package.json`. After functional changes, build the project and check all four pages, mobile navigation, language switching, skyline controls, and contact interactions in the browser.

## Visual effects and interaction guide

This guide describes the active implementation inspected on 6 November 2026. Values below come from the current source. Some stylesheets contain older rules followed by overrides: check the final applicable rule and selector specificity before editing.

### 1. How the page starts

1. Vite serves the requested HTML page. The HTML links `replica.css`, then `full-site.css`.
2. `src/site-entry.jsx` imports the page components and `approach-tailwind.css`, selects the page, and mounts it synchronously with `flushSync`.
3. Once the markup exists, it loads `/phone-lib.js`, `/site-language.js`, and `/full-site.js` sequentially.
4. The language script translates content and sets up country selection and phone validation. The interaction script then starts the intro, skyline mode, greeting timer, scroll reveals, navigation, and enquiry handling.

The active effects use CSS transitions, browser timers, IntersectionObserver, and the Web Animations API. GSAP and Lenis are installed for older source files; the active `site-entry.jsx` page graph does not use them. There is no active Three.js scene, video skyline, or physics simulation behind the hero.

### 2. Effect-to-file map

| Visible effect | Markup or asset | Behavior and styling |
| --- | --- | --- |
| Logo flying into navigation | `src/site-components/RanIntro.jsx`, `RanNav.jsx`, `public/assets/royat-logo.png` | `public/full-site.js`, `.ran-intro*` in `public/replica.css` |
| Full-screen skyline | `src/site-components/Opening.jsx` | `.skyline-*` in both public stylesheets |
| Day/night crossfade | `skyline-day.jpg`, `skyline-night.jpg` | `setSkyline`, `syncSkyline`, `.is-night` |
| Greeting behind the tower | `Opening.jsx`, `tower-mask.svg` | `.skyline-greeting`, `.skyline-tower` |
| Dark shading below skyline | `.skyline-scene::after` | `public/full-site.css` |
| Textured dark section | `black-silk.png`, `.silk` | `public/full-site.css` |
| Gold light and dust | `gold-dust-reference.png`, `.sparkles` | Radial gradients and pseudo-elements in `full-site.css` |
| Content appearing on scroll | Headings, paragraphs, cards, form | IntersectionObserver in `full-site.js`; `.reveal-on-scroll` CSS |
| Service image zoom | `Services.jsx` cards | `.service-grid article:hover img` |
| Glass navigation | `RanNav.jsx` | `.ran-nav` in `replica.css`; menu handler in `full-site.js` |
| Arabic/English switch | `.language-toggle` | `public/site-language.js`, RTL styles in `full-site.css` |
| Searchable calling-code picker | `Contact.jsx` | `site-language.js`, `phone-lib.js`, `full-site.css` |

Asset names in this table are inside `public/assets/` unless otherwise specified.

### 3. Black shading in the supplied screenshot

The screenshot shows the skyline darkening toward its lower edge, followed by the textured black section. The code creates this with separate layers:

- The city photograph is the background of `.skyline-day` or `.skyline-night`.
- Each image has an additional left-to-right tint: `linear-gradient(90deg, rgba(12,29,41,.45), transparent 70%)`.
- `.skyline-scene::after` covers the bottom 27% of the hero with a vertical near-black gradient.
- The surrounding `.opening.silk` area uses the static `black-silk.png` image on a dark base. Low-opacity gold radial gradients give it warmth.

The main bottom shading rule is:

```css
.skyline-scene::after {
  content: '';
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  height: 27%;
  background: linear-gradient(to top, #090909, rgba(9, 9, 9, 0));
  pointer-events: none;
}
```

At the bottom, the overlay is opaque `#090909`; it becomes transparent toward the top of that 27% strip. The photograph remains underneath. `pointer-events: none` allows clicks to pass through the decorative layer.

This shading itself is static. Scrolling moves the viewport past it, which can make the transition feel animated. The silk folds are part of a PNG texture, not animated fabric.

To adjust the effect:

| Desired change | Setting |
| --- | --- |
| Make the fade extend farther up the city | Increase `height: 27%` |
| Keep more of the city visible | Reduce the height or reduce the dark endpoint's opacity |
| Change the final dark color | Change `#090909` and coordinate adjacent section backgrounds |
| Change the fabric pattern | Replace `public/assets/black-silk.png` |
| Move the texture crop | Adjust `.silk` background position |
| Change the warmth | Adjust the gold radial-gradient colors and alpha values |

There are related blends elsewhere: `.opening::before` adds a fade near the bottom of the whole opening block; `.feature-banner::after` blends both ends of the courtyard image into black; `.services::before` and `.contact::before` blend section edges; `.approach` uses a black/brown/black gradient. These are different selectors, so changing the hero fade alone does not change every section.

### 4. Full-screen hero and image layering

`Opening.jsx` renders the layers in this order:

```text
skyline-scene
  skyline-day                  base city image
  skyline-night                fades over the day image
  skyline-greeting             HALA / WELCOME, z-index 1
  skyline-tower                masked city foreground, z-index 2
    skyline-day
    skyline-night
  skyline-caption              z-index 3
  skyline-toggle               z-index 4
  ::after                      bottom dark gradient, z-index 2
```

The foreground tower repeats the same day/night images but clips them with `tower-mask.svg`. Only the tower-shaped area remains visible above the greeting. This produces the impression that the lettering sits behind the building without using a 3D model.

Both the image and mask use centered `cover` sizing. If you replace the skyline with a different composition, update the mask and verify alignment on desktop and mobile. Changing only the photo may put the foreground cutout over the wrong building.

`full-site.css` overrides the earlier aspect-ratio layout with `height: 100svh`, full width, and no rounded corners. Desktop minimum height is 600px; at widths up to 760px it is 500px. `cover` fills the area by cropping the image, so the visible city changes with the viewport's aspect ratio.

### 5. Day and night, from start to finish

The two supplied skyline photographs create the effect. The day layer stays underneath; the night layer starts at opacity 0. Applying `.is-night` to `.skyline-scene` sets the night layer to opacity 1 with a 0.5-second ease transition. Both the background and masked tower copies switch together.

On startup:

1. Read `sessionStorage['ranre-skyline-mode']` if storage is available.
2. If the value is `day` or `night`, use it as the manual override.
3. Otherwise read `new Date().getHours()`.
4. Use day from 06:00 inclusive until 18:00 exclusive; use night outside that range.
5. Check the time every 60 seconds and when the document becomes visible again.

The hour comes from the visitor's device timezone. It is not explicitly Dubai time, and it does not calculate sunrise, sunset, weather, or the user's location.

Clicking the sun/moon switch toggles the current mode, stores the selection in sessionStorage, and stops automatic changes while that manual override is active. The saved mode survives reloads in that browsing session. There is no visible “return to automatic” control currently; removing the `ranre-skyline-mode` storage entry and reloading restores automatic selection.

The switch uses `role="switch"` and the label “Daylight mode”; `aria-checked="true"` means day and `false` means night. CSS highlights the sun in day mode and the moon in night mode. The button's glass appearance comes from a translucent background, border, and `backdrop-filter: blur(15px)`.

To change the schedule, edit `hour >= 6 && hour < 18` in `syncSkyline`. To change crossfade speed, edit `.skyline-night` in `replica.css`. To replace imagery, update both skyline assets while preserving matching dimensions and composition.

### 6. Welcome logo animation

The home page includes `RanIntro`. The initial logo is centered near 45% of the viewport height with the “15+ YEARS AND COUNTING” caption. The navigation's actual logo is temporarily hidden.

After 1,500ms, the script measures the intro logo and navigation logo with `getBoundingClientRect()`. It animates the intro logo's `left`, `top`, `width`, and `height` between those measured rectangles using `element.animate()`:

- Flight duration: 1,100ms.
- Easing: `cubic-bezier(.65,0,.2,1)`.
- Fill mode: `forwards`.
- Backdrop fade: 1.1 seconds via the intro's `::before` pseudo-element.
- Caption fade: 0.5 seconds.

The backdrop is a separate pseudo-element so its opacity can drop while the flying logo remains opaque. When the animation finishes, the script reveals the real navigation logo and removes the intro overlay. A fallback timer runs 1,250ms after flight starts, so normal cleanup occurs after roughly 2.6 seconds, with a fallback around 2.75 seconds. Pressing Escape skips the intro and restores the navigation logo immediately.

This is based on DOM measurements, not a fixed travel distance. If the navigation logo size or position changes, the next intro run measures the new target. There is no “shown once” storage flag; it runs whenever the home page mounts, unless reduced motion is enabled.

### 7. HALA / WELCOME greeting

`full-site.js` starts a 3,800ms interval. Each cycle adds `.is-changing`, which fades the greeting out and moves it down 8px over 0.42 seconds. After 420ms the script swaps the text and removes the class, allowing it to return to full opacity and its original position.

English alternates between `HALA` and `WELCOME`; Arabic alternates between `هلا` and `مرحباً`. The active language is read from `window.siteLanguage`. The gold lettering is made with a vertical color gradient clipped to the text, plus a dark text shadow.

The greeting has `aria-live="off"` to avoid repeatedly announcing the decorative text changes. With reduced motion enabled, the rotating greeting timer is not started.

### 8. Scroll-reveal animation

The script selects specific text blocks, service cards, approach cards, process rows, About content, contact details, and the enquiry form. It adds `.reveal-on-scroll` and registers an IntersectionObserver.

- Trigger threshold: `0.08` (8% intersection).
- Bottom root margin: `-30px`.
- Initial appearance: opacity 0 and a 24px downward offset.
- End appearance: opacity 1 and no offset.
- Duration: 0.85 seconds.
- Movement easing: `cubic-bezier(.22,1,.36,1)`.
- Service and approach cards stagger by 110ms multiplied by sibling index.

When a target enters the observation area, it receives `.is-revealed` and is unobserved. Each target reveals once per page load; scrolling backward does not hide it again. This is a visibility-triggered transition, not an animation continuously controlled by scroll position.

The root receives `.motion-ready` only when the reveal system is set up. Without IntersectionObserver, or with reduced motion enabled, the script does not activate this hiding/reveal system.

### 9. Gold dust and older sparkle rules

The current dust effect uses two decorative pseudo-elements on `.sparkles`. They display `gold-dust-reference.png`, use `mix-blend-mode: screen`, and sit partly outside the section edges. Their opacity is low, approximately 0.12–0.25 depending on placement and viewport. Rotation and off-edge positioning make the repeated image look different on each side.

This dust is static. Older `.sparkles i` styles define a 4.4-second `twinkle` animation, but the later rule `.sparkles i { display: none !important; }` hides those elements. The existing `twinkle` keyframes therefore do not produce visible moving particles in the current page.

The opening dust starts below the hero using `top: 100svh`. Mobile rules enlarge the dust images to 100vw and push them farther outside the left and right edges. The About page's opening hides its sparkles entirely.

### 10. Hover, navigation, and anchor behavior

On the home page, service-card images scale to `1.04` on hover over 0.8 seconds. `overflow: hidden` on the card clips the enlarged image. A separate gradient over the card improves text contrast. The dedicated Services page overrides the image transition and hover transform, so its alternating image/text rows do not zoom.

Buttons and links change color or background on hover. Those color changes do not all have explicit transition durations. Keyboard focus uses visible outlines.

Navigation stays fixed near the top of the viewport. Its glass effect uses a dark background with 0.34 alpha, a translucent border, a shadow, and 18px backdrop blur. At widths up to 760px, a menu button toggles `.open` on the navigation links and updates its icon and ARIA state. This menu opens by changing display; it has no slide-in animation in the active code.

Anchor links use CSS smooth scrolling under normal motion preferences. Sections with an ID have `scroll-margin-top: 105px` to allow space for the fixed navigation. The HTML also sets manual scroll restoration and, on reload, clears an existing hash and returns to the top.

### 11. Other image overlays and page layouts

- **Feature banner:** `dubai-courtyard.png` with top and bottom black gradients; text sits above the overlay. The image uses lazy loading.
- **About opening:** `about-architecture.png` with a dark vertical gradient. Its final selector overrides an earlier skyline background.
- **About story:** image/text columns; the image has top and bottom shading. The layout stacks on mobile.
- **Services opening:** a full-width image with a strong dark gradient behind the text and a bottom black fade. The horizontal gradient reverses for RTL text.
- **Approach opening:** `burj-al-arab-window.png`, horizontal text-contrast shading, and a bottom fade. Mobile changes the crop to `65% center`.
- **Approach process and closing note:** black silk backgrounds with dark overlays. Older light process-section colors are overridden later in the stylesheet.

These are still images with CSS overlays. The active code does not animate their background positions for parallax.

### 12. Language switching

`site-language.js` stores the preference in `localStorage['ranre-language']`, so it can persist across browser sessions. It sets the document's `lang` and `dir` attributes and replaces matching DOM content using its translation table. It also updates the page title, labels, form choices, image alternative text, country list, and greeting.

RTL styling changes fonts, spacing, borders, and some overlay directions. Arabic primarily uses Tahoma/Arial; English uses locally loaded Montserrat for body text and Optima for display headings.

This translation system is not React state or a React internationalization library. Many selectors depend on element order, including `nth-child` and `nth-of-type`. When changing component markup or inserting siblings, check the translation mapping as well.

### 13. Country picker, validation, and enquiry action

The phone country defaults to AE. The phone library supplies country codes and calling codes; `Intl.DisplayNames` supplies localized country names when available. The script sorts the names, builds a searchable menu, and updates the displayed dialing code.

The picker supports clicking, searching, Escape to close, arrow keys through options, and clicking outside to dismiss. Opening and closing uses the `hidden` property, not a fade animation.

Phone validation parses the number, checks the library's validity result, and checks that the calling code matches the selected country's calling code. Native required fields and email validation also apply. Name and requirements fields have length limits and additional checks for very short trimmed text.

Submitting a valid enquiry builds an encoded `mailto:` URL addressed to `Dhastagirahamed@ranre.ae`. It asks the visitor's email application to prepare the enquiry. The website does not send the message itself or provide a lead-storage backend. The visitor reviews and sends it in their email app.

### 14. Reduced motion and responsive behavior

When `prefers-reduced-motion: reduce` is active at load:

- The intro is removed/skipped.
- The greeting rotation interval is not started.
- Scroll-reveal setup is skipped.
- The night-image crossfade transition is disabled.
- Smooth anchor scrolling is disabled.
- Service-image transitions are disabled; the hover scale rule itself is not removed, so it can change immediately.

The JavaScript reads the motion preference once at startup. CSS media queries respond to preference changes, but the script does not listen for changes to cancel or restart existing timers. Reload after changing the preference to test the full behavior.

Responsive rules are spread across the stylesheets, primarily at 900px, 899px, and 760px. They change hero sizing, navigation, greeting size, section padding, grid columns, form layout, country-menu size, and image cropping. Test both sides of these breakpoints when adjusting shared styles.

### 15. Quick adjustment reference

| What to change | Search for |
| --- | --- |
| Bottom hero darkness | `.skyline-scene:after` in `full-site.css` |
| Silk texture | `.silk` and `black-silk.png` references |
| Photo tint | `.skyline-day`, `.skyline-night` in `replica.css` |
| Day/night automatic hours | `syncSkyline` in `full-site.js` |
| Day/night speed | `transition:opacity .5s ease` in `replica.css` |
| Welcome wait and flight | `1500`, `duration:1100`, `finishTimer` in `full-site.js` |
| Greeting speed | `3800`, `420`, and `.skyline-greeting` transitions |
| Reveal distance and duration | `.motion-ready .reveal-on-scroll` |
| Reveal trigger and stagger | `threshold`, `rootMargin`, `--reveal-delay` |
| Tower cutout shape | `public/assets/tower-mask.svg` |
| Navigation glass strength | Final `.ran-nav` background and backdrop-filter rules |
| Dust strength and position | `.sparkles:before`, `.sparkles:after` and page/mobile overrides |
| Translation strings | `translations` in `public/site-language.js` |
| Enquiry destination | Submit handler in `full-site.js` and contact link in `Contact.jsx` |

### 16. Maintenance notes and verification checklist

The public stylesheets contain layers of historical overrides. A selector appearing near the top may not describe the final appearance. Use browser computed styles to confirm the winning declaration before removing or rewriting rules. In particular, `replica.css` still supplies active hero and navigation styles despite its historical name.

Shared scripts assume certain elements exist, such as the skyline, navigation, and enquiry form. Some dedicated pages keep shared sections mounted but hide them with CSS. Removing those sections requires adding appropriate null checks or separating page-specific initialization.

The current React pages are largely static markup. Direct DOM translation and interaction changes could conflict with future React rerenders if those components become stateful. A future refactor should move related state and cleanup into React effects and handlers together.

After changing visual behavior, verify:

1. Home, About, Services, and Approach load without console errors or missing assets.
2. The home intro lands on the navigation logo; Escape skips it.
3. Both skyline images and the masked tower stay aligned at desktop and mobile sizes.
4. Day/night works in both directions, persists after reload, and returns to automatic mode after clearing its session storage entry.
5. The black fade blends into the next section at multiple viewport heights.
6. Scroll reveals complete, and previously revealed content stays visible.
7. Arabic/English switching preserves navigation, headings, form controls, and layout.
8. The country picker works with mouse and keyboard; invalid phone input is rejected.
9. The enquiry action prepares a correct email draft; testing does not require sending it.
10. Reduced motion is checked after reload, and the production build still succeeds.

The source inspection and successful build do not constitute a completed browser check of every item above. This documentation update changes no website behavior.
