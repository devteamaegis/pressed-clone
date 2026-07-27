# Pressed Juicery — static clone

A pixel-audited static clone of **[pressed.com](https://pressed.com)** (Pressed Juicery),
produced with the [Ditto](https://github.com/ion-design/ditto.site) deterministic cloner
and then hand-corrected against the live site.

🔗 **Live demo:** **https://pressed-clone.vercel.app**
· **Source:** https://github.com/devteamaegis/pressed-clone

> **This is a clone built as an engineering exercise** in deterministic site capture, not
> an official Pressed Juicery property and not affiliated with the company. There is no real
> checkout, payment, account, or inventory — the cart is a `localStorage` simulation. All
> product imagery and copy are a snapshot of the public site at capture time.

The live site is a **Nuxt (Vue) SPA**, not Shopify/WordPress. That shapes everything: the
clone captures the post-hydration DOM of each route, and every interaction and animation had
to be rebuilt by hand because none of the Nuxt bundles survive a static export.

## Pages cloned — 17 routes

**7 primary routes** (fully targeted and pixel-audited):

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/shop` | Shop — all 107 products, with working `?filters=` |
| `/our-journey` | Our Journey |
| `/juice-bar-locations` | Juice Bar Locations |
| `/flavor-quiz` | Flavor Quiz |
| `/catering` | Catering |
| `/juice-subscription-membership/signup` | Membership signup |

**10 secondary routes** (captured from the nav and build cleanly): `/faqs`, `/careers`,
`/allergens`, `/acai-bowls`, `/foodservice`, `/cleanse-guide`, `/cold-pressed-juices`,
`/detox-cleanse-gut-health`, `/featured-cleanses-juice-packs`,
`/gut-biome-sulforaphane-benefits`.

## Repository structure

```
pressed-clone/
├── README.md                     ← you are here
├── ARCHITECTURE.md               how it's built + the audit harness, in depth
├── next.config.mjs               Next.js static export (output: "export")
├── package.json                  Next 15 · React 19 · Tailwind v4
├── postcss.config.mjs
├── tsconfig.json
│
├── src/app/                      Next.js App Router
│   ├── layout.tsx                root layout; boots the interaction runtime post-hydration
│   ├── globals.css               reset, design tokens, @font-face (incl. 5 recovered brand faces)
│   ├── ditto.css                 shared route-scoped captured CSS
│   ├── _icons.ts                 icon registry: accessible-label → real inline SVG
│   ├── page.tsx                  homepage (hero <video> lives here)
│   ├── shop/                     shop page — 15 product grids + filter sidebar
│   ├── <route>/                  one directory per cloned route (page.tsx + ditto.css)
│   ├── components/               12 extracted subtrees (cards, tiles, logos, list rows)
│   ├── ditto/                    Ditto runtime helpers (dropdown, motion)
│   ├── robots.ts · sitemap.ts    generated SEO endpoints
│   └── icon.png                  favicon
│
├── public/
│   ├── cloned-interactions.js    hand-written interaction runtime (see ARCHITECTURE.md)
│   ├── cloned-interactions.css   styles for the rebuilt widgets, all `.cloned-*` scoped
│   └── assets/cloned/
│       ├── images/ (466)         content-addressed captured imagery
│       ├── svg/    (35)          captured vector artwork
│       ├── fonts/  (141)         captured webfonts + the 5 recovered Pressed brand faces
│       └── video/  (3)           hero footage recovered from Mux + the careers film
│
├── docs/
│   ├── pressed-clone-audit-BEFORE.pdf   raw Ditto output vs live
│   ├── pressed-clone-audit-AFTER.pdf    after the first fix round
│   ├── pressed-clone-audit-FINAL.pdf    deployed Vercel build vs live
│   └── discrepancies.json               findings from the first parallel visual audit
│
└── audit/                        second, full-site audit (all 17 routes, desktop + mobile)
    ├── findings-confirmed.json   119 findings that survived adversarial verification
    ├── findings-by-page.json     the same set grouped per route
    ├── interaction-audit.json    per-feature live-vs-clone behaviour results
    ├── textdiff-all.json         exact live-vs-clone string mismatches
    └── capture-manifest.json     document heights + heading maps per page/viewport
```

Capture tiles and the composed PDF for the second audit are gitignored (~400 MB);
regenerate them with `pressedFullAudit.mjs` / `pressedComposeAuditPdf.mjs`.

## Run locally

```bash
npm install
rm -rf .next out && npm run build
npx serve out          # or any static file server
```

> **Judge fidelity only from the production build.** `next dev` renders this project
> differently and will mislead you. Always `rm -rf .next out` before rebuilding — Next's
> incremental cache silently serves stale output.

## What was wrong with the raw clone, and what fixed it

Every item was found by pixel-diffing against live and fixed at the root, not per page. Full
before/after evidence is in the PDFs under `docs/`, and the second, full-site audit
data is under `audit/`.

| Defect | Scope | Root cause |
| --- | --- | --- |
| Whole site blank above 1536px | all 7 routes | Ditto's 1536/1920/2560 captures **all came back blank** (21 blank captures). It inferred "hidden at 2xl" and emitted `2xl:hidden` on 3,521 nodes. Live is byte-identical 1280→1920, so the fabricated band was removed. |
| Every semibold/bold string was system sans | 460 references | Markup asks for `regola-neue-semibold`/`-medium`/`-regular`; no `@font-face` declared them. The real faces are now self-hosted under the requested names. |
| 129 logos and icons rendered as blank boxes | site-wide | Live serves them as inline `data:image/svg+xml`; the capture substituted a transparent 1×1 GIF. Recovered into `src/app/_icons.ts`, keyed by accessible label. |
| Class lists silently destroyed | 47 components | A generated `cn()` helper joined class parts with `""` not `" "`, fusing tokens into rules that match nothing. |
| Footer columns wrapped, 90px off | all 17 pages | Grid tracks pinned to pixels captured at 1280; re-expressed as ratios. |
| `/shop` ~1,900px too tall | shop | Product grids used `repeat(auto-fit, …)` so a 1-item category stretched full-width (Gift Cards: **1351px tall vs live's 407px**). Live uses a fixed 6-track grid. |
| Hero was a still image | homepage | Live uses a `<mux-player>` web component. The underlying Mux asset is public, so the real footage was recovered and transcoded to mp4. |

See [ARCHITECTURE.md](ARCHITECTURE.md) for the interaction runtime, the hydration gotcha
(React error #418), and how the audit harness's section anchoring was rewritten for a site
with zero `<section>` elements.

## Known static-clone limitations

- **Navigation is real page loads**, not SPA routing. Uncloned routes (product detail,
  legal, account) intentionally link back to `pressed.com`.
- **`mux-player`** → the hero is a plain `<video>` with the real Mux footage; the adaptive
  player, analytics, and its controls are gone.
- **Flavor quiz** embeds a third-party lightbox form that has no `src` in the capture — not
  reproduced.
- **Store locator map** is a live Google Maps widget — the canvas and its chrome do not
  render.
- **Cart / account** — cart is a `localStorage` simulation with a badge; no checkout, no
  real inventory.
- **`?filters=`** covers the 15 categories present as sections in the capture; an
  unrecognised filter says so on the page rather than silently showing everything.

## Credits

Cloned with [Ditto](https://github.com/ion-design/ditto.site) (ion-design). Original site
and all trademarks © Pressed Juicery.
