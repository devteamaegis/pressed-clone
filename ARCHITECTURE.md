# Architecture

How this clone is put together, and why the non-obvious parts are the way they are.

## Pipeline

```
pressed.com ──► Ditto capture ──► generated Next app ──► hand fixes ──► static export
                (9 viewports)      (Tailwind classes)     (this repo)     (out/)
```

Ditto captured each page, normalised the rendered DOM into an IR, inferred
assets/tokens/components, and emitted a static Next.js App Router project (80 extracted
components across 7 captured routes, Tailwind for anything expressible as a stable utility,
route-scoped `ditto.css` for the rest). `data-ditto-id` attributes are stable DOM anchors
for that generated CSS — do not reintroduce validation-only capture ids.

The clone was produced with:

```bash
DITTO_ROUTES="/,/shop,/our-journey,/juice-bar-locations,/flavor-quiz,/catering,/juice-subscription-membership/signup" \
  tsx src/cli.ts https://pressed.com/ --mode=multi --styling=tailwind --out --max-routes=14 --depth=1
```

`DITTO_ROUTES` is a small addition to the compiler (`src/site/cloneSite.ts`). pressed.com's
sitemap surfaces 278 paths, most of them blog posts, and Ditto's template induction spent
the route budget on `/allergens`, `/careers` and `/acai-bowls` instead of the pages that
matter. The env var pins the reproduced route set; without it the crawl picks for you.

## File tree

```
src/app/
  layout.tsx              root layout; loads the interaction runtime (see "Hydration" below)
  globals.css             reset, tokens, @font-face — incl. the 5 recovered brand faces
  _icons.ts               icon registry: label -> real inline SVG recovered from live
  _styles.ts              per-instance style objects the generated components consume
  page.tsx                homepage (hero <video> lives here)
  shop/page.tsx           shop; 15 product grids + the filter sidebar
  <route>/page.tsx        one directory per cloned route
  <route>/ditto.css       route-scoped captured CSS
  components/             extracted repeated subtrees (cards, tiles, logos, list rows)
public/
  cloned-interactions.js  hand-written interaction runtime
  cloned-interactions.css styles for the rebuilt widgets, all `.cloned-*` scoped
  assets/cloned/
    images/  svg/  fonts/ content-addressed captured assets
    video/hero-wicked-wonderland.mp4   hero footage recovered from Mux
```

## The interaction runtime

`public/cloned-interactions.js` is plain dependency-free JavaScript. It exists because
**nothing** behavioural survives the clone: pressed.com's interactions live in build-hashed
Nuxt bundles, and Ditto's motion capture for this site came back completely empty
(`cssAnimated: 0`, `waapi: []`, `reveals: []`) because all of its motion is JS-driven,
which the capture cannot see.

It rebuilds: the promo bar (rotation + prev/next/pause), the header mega-menu, the mobile
drawer with collapsible submenus, shop filtering, a `localStorage` cart with a badge,
product-card image hover-swap, carousel arrows for overflowing tracks, and the hero video's
pause control. Each widget is invoked inside its own `try`/`catch` so one failure cannot
take down the rest; set `window.__CLONED_DEBUG = 1` to surface those errors.

Two things are deliberately **not** implemented, because measurement showed live does not
do them:

- **Scroll-reveal / entrance animations.** Of 121 below-the-fold elements sampled on live,
  **zero** were parked at `opacity < 0.9` or transformed. The site just renders its content.
  Adding reveals would have been a fabrication.
- **Hide-on-scroll header.** Live's header is `position: sticky; top: 0` and its computed
  box is identical at scrollY 0, 1400, and scrolled back up.

The mega-menu and mobile drawer are *rebuilt from data*, not recovered: live keeps both nav
sets permanently in the DOM positioned off-canvas (x = −260 and −272), and the capture
dropped them — the clone's header has 7 links where live's has 21.

### Hydration: why the runtime is bootstrapped the way it is

The runtime is **not** a `<script>` element in the React tree. A `<script>` as a JSX child
of `<body>` is itself a hydration mismatch under React 19 static export (error #418), and
on mismatch React re-renders the whole tree — silently discarding every DOM mutation the
runtime had made. The symptom was a runtime that provably ran yet had no effect.

Instead an opaque inline bootstrap in `<head>` (the same `dangerouslySetInnerHTML` pattern
the generated JSON-LD already uses) appends the external script after `window.load` plus a
`requestAnimationFrame`, i.e. strictly after hydration. Anything that mutates captured DOM
must run at that point or later.

### Shop filtering

Sections are anchored by taking, for each category heading, the **highest ancestor that
still contains exactly one category heading**. The obvious approach — walking up to "an
ancestor containing ≥2 product links" — lands every heading on the same outer container and
collapses all 15 categories into one.

Filtered-out sections get `.cloned-hidden { display: none !important }` rather than the
`hidden` attribute: Tailwind's display utilities are author styles and beat the user-agent
`[hidden]` rule, so setting `hidden` has no visual effect here.

## The audit harness

`compiler/scripts/pressedAuditPdf.mjs` + `pressedComposePdf.mjs` load each page on live and
on the clone, kill consent/chat overlays, scroll to wake lazy images, freeze video, then
take a full-page screenshot of both and run an anchored per-section `pixelmatch` diff.
`pressedComposePdf.mjs` renders the manifest into the PDF.

Two things had to be rewritten for this site:

**Section anchoring.** pressed.com has **zero** `<section>` elements and a single wrapper
`<div>` under `<main>`, so the stock shopify-section / document-order fallback collapsed
each page to ~4 sections — one of them a 6,033px slab. The harness now auto-descends through
pass-through wrappers and splits any block taller than 900px, unwrapping single-child
wrappers without spending depth budget. The homepage went from 4 sections (median 1,024px)
to 20 (median 466px), all pairing at similarity 1.0.

**Section matching.** Index pairing silently misaligns everything below an inserted or
removed section — `/our-journey` presented 3 live sections against 11 in the clone, and
`/shop` has 97 against 104. Matching is now an order-preserving LCS over label similarity,
with unmatched sections reported explicitly as `MISSING_IN_CLONE` / `EXTRA_IN_CLONE` rather
than being folded into a misleading diff percentage.

The harness also keeps `liveOk` / `cloneOk` real-content flags so a blank capture is
**flagged** rather than reported as a 100% difference — which matters here, because live
pressed.com intermittently serves a blank page under rapid headless loads. That same
flakiness is what produced the 21 blank wide-viewport captures that broke the original
clone.

One harness bug worth recording: the first pass hid anything matching `[class*="digioh"]`
as a marketing overlay, but `/flavor-quiz` wraps its real page content in
`digioh_universal_smart_tag` — so the harness blanked the page and scored it 100%. The
selector is now narrowed to floating overlays only.

### Reading the numbers

Diff percentages are a triage signal, not a verdict. Photographic sections over-report
badly from antialiasing alone. The written discrepancy list and the live|clone|diff crop
triptychs are the actionable part; the per-section table exists to point at *which*
component to look at.

## Tradeoffs

The clone prioritises deterministic static fidelity, accessible markup, local asset
materialisation and source-metadata preservation. It keeps measured CSS where inferred
layout intent is uncertain. External services — live personalisation, analytics, payments,
auth, and complex client app state — are not reconstructed. See the limitations section of
`README.md` for the specific third-party widgets this affects.

## Deploy notes

The build is a plain static export (`output: "export"`), so any static host works:

```bash
rm -rf .next out && npm run build   # -> out/
```

After deploying, **curl every route and confirm 200**. A partial or cached build will
happily serve `/` while every sub-page 404s, and the failure is invisible from the
homepage. Redeploy until all 17 return 200.
