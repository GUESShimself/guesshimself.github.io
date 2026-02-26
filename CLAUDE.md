# CLAUDE.md — Project Reference

## Project Overview

Personal portfolio site for Eric Guess, a design systems and product design professional. Static HTML site with homepage portfolio and **Studio** area for experiments, case studies, and writing. Deployed to GitHub Pages at **guesshimself.work**.

**Repository:** `GUESShimself/guesshimself.github.io`
**Main branch:** `main` (auto-deploys via GitHub Pages)
**Analytics:** Umami (privacy-focused, loaded via `cloud.umami.is`)

---

## Technology Stack

**Zero dependencies.** No package.json, no bundler, no transpiler.

- Vanilla HTML, CSS, JavaScript (ES5-compatible)
- Google Fonts: **Inter** (body, variable weight 400–600) and **Fraunces** (headings, variable weight 400–600, optical sizing 9–144)
- GitHub Pages for hosting
- CNAME file maps to `guesshimself.work`

---

## File Structure

```
├── index.html                      # Homepage portfolio
├── favicon.svg                     # Adaptive SVG favicon (prefers-color-scheme)
├── CNAME                           # Custom domain config
├── eric-guess-ux-product-design-systems.pdf
├── Eric-Guess-Resume-Design-Systems-Portfolio.pdf
├── frontend-css-js-audit.md        # CSS/JS audit findings
├── css/
│   ├── layers.css                  # @layer cascade order declaration (loaded first)
│   ├── reset.css                   # Modern CSS reset
│   ├── variables.css               # Design tokens (colors, type, spacing)
│   ├── base.css                    # Typography & element defaults
│   ├── layout.css                  # Section containers & spacing
│   ├── components.css              # Component-specific styles (utility bar, theme toggle, etc.)
│   ├── responsive.css              # Breakpoint overrides (mobile-first)
│   ├── studio.css                  # Studio page-specific styles (filters, cards)
│   ├── case-study.css              # Case study page-specific styles
│   └── skins/
│       └── modulor.css             # Experimental Le Corbusier skin (lazy-loaded)
├── js/
│   ├── theme.js                    # Light/dark/system toggle (loaded in <head>)
│   ├── main.js                     # Smooth scroll enhancements
│   ├── interactions.js             # Accordion cards, scroll-reveal, hash routing
│   ├── modulor-toggle.js           # φ button toggle for Modulor skin
│   ├── section-nav.js              # Scroll-spy section navigation (case study pages)
│   └── studio-filters.js           # Studio page filtering (experiments/case studies/writing)
├── studio/
│   ├── index.html                  # Studio landing page with filterable items
│   ├── case-study-template/        # Case study template (copy and customize)
│   ├── cap-ds/                     # CAP Design System case study
│   ├── css-color-playground/       # CSS Color L4/L5 interactive tool (Vite build)
│   ├── breathing-shapes/           # Breathing Shapes generative experiment
│   └── genera/                     # Generative typography experiment
└── images/
    ├── cap-ds-diagram.png
    └── guess-contour-illustration.svg
```

### CSS load order matters

**Core (all pages):** `layers → reset → variables → base → layout → components → responsive`

**Page-specific:** Add `studio.css` on studio pages, `case-study.css` on case study pages

`layers.css` declares `@layer` cascade order upfront. Page-specific files wrap their rules in matching `@layer` blocks (e.g., `@layer case-study { ... }`).

Modulor skin CSS is conditionally loaded at runtime — never included in the default stylesheet chain.

---

## HTML Content Structure

The page follows a narrative arc, each section a semantic `<section>` with `aria-labelledby`:

| # | Section ID      | Purpose                          |
|---|-----------------|----------------------------------|
| 1 | `#hero`         | Name, role, positioning          |
| 2 | `#credibility`  | Quick-hit credentials            |
| 3 | `#capabilities` | What I Do (3-article grid)       |
| 4 | `#principles`   | How I Think (4 design tenets)    |
| 5 | `#work`         | Selected Work (expandable cards) |
| 6 | `#about`        | Personal statement + portrait    |
| 7 | `<footer>`      | Contact links                    |

---

## Studio Page (`/studio/`)

Filterable landing page for experiments, case studies, and writing. Editorial style with minimal chrome.

### Structure
- **Header**: Title ("Studio") + description
- **Filters**: Horizontal text-style buttons with underline active state (All, Experiments, Case Studies, Tools, Writing)
- **Grid**: Responsive card grid (1 col → 2 cols → 3 cols at breakpoints)
- **Footer**: Standard site footer with contact links

### Filter System (`js/studio-filters.js`)
- IIFE pattern, URL hash support for deep linking
- Shows/hides items based on `data-type` attribute
- Active filter: bold weight + accent underline (no pill background)
- Editorial aesthetic: transparent buttons, tertiary text color, accent hover

### Studio Item Cards (`.studio-item`)
- Type badge + date (uppercase, inline with separator)
- H2 title (Fraunces, 2xl)
- Description (primary color, lg font, relaxed line-height)
- Scope indicators (bullets, xs font, tertiary color)
- Hover: border color change, subtle lift, shadow

### Responsive Behavior
- Mobile: Single column, stacked filters
- Tablet (48rem): 2-column grid
- Desktop (64rem): 3-column grid

---

## Case Study Pages (`/studio/<slug>/`)

Long-form editorial pages with scan-first structure. Template at `/studio/case-study-template/`.

### Page Structure
1. **Header Block**: Title, dek (positioning sentence), metadata grid (Company, Date, Role, Scope, Team, Platform)
2. **TL;DR Box**: 4-6 key outcomes in callout box with accent wash background, left border, arrow bullets
3. **Context & Constraints**: Short paragraphs, optional "Core Constraint" highlight block
4. **Problem**: Bullet list or short paragraphs
5. **Approach**: Subsections (e.g., System Foundations, Adoption & Enablement, Governance)
6. **Solution**: Artifact blocks (image placeholders with captions)
7. **Results**: Bullets + narrative
8. **Reflection**: What I'd refine, What this changed

### Case Study Components (`css/case-study.css`)
- **Metadata grid** (`.case-study-meta`): Responsive grid (2 cols → 3 cols → 6 cols)
- **Dek** (`.dek`): Large subtitle (xl → 2xl at tablet), secondary color, relaxed line-height
- **TL;DR box** (`.tldr-box`): Accent wash background, 3px left border, arrow bullets
- **TL;DR grid** (`.tldr-grid`, `.tldr-col`): Two-column layout inside TL;DR box at 48rem+
- **Constraint highlight** (`.constraint-highlight`): Surface hover background, small uppercase label
- **Artifact** (`.artifact`): Figure block with full-width image; `.artifact-placeholder` for 16:9 ratio placeholders
- **Pull quote** (`.pull-quote`): Fraunces heading font, xl/2xl, 2px accent left border, max-width content
- **Evolution list** (`.evolution-list`): Before/After definition list with `↳` arrow markers
- **Architecture diagram** (`.arch-diagram`, `.arch-layer`, `.arch-callout`, `.arch-arrow`): Layered token/component architecture visualization with emphasis and split variants
- **Section nav** (`.section-nav`): Fixed right-side scroll-spy nav, hidden below 64rem, `position: fixed; top: var(--space-4xl)`
- **Back navigation** (`.back-nav`, `.back-link`): Top and bottom back-to-studio links; `.back-nav.bottom` has top border

### Page Scoping
- `body.page-case-study` class scopes reading typography and layout rules
- At 64rem, `main` gets `padding-right` to make room for the fixed section nav
- Headings get `scroll-margin-top: 7rem` for proper scroll-to positioning

### Typography
- Reading width: max 42rem
- Relaxed line-height (1.75) for body text
- Section h2: 3xl, generous top margin
- Subsection h3: xl, primary font bold

---

## Utility Bar Navigation

Unified horizontal navigation pattern across all pages. Copy/paste markup, structured to become a component/partial later.

### Structure
```html
<nav class="utility-bar" aria-label="Site utility">
  <!-- Optional left slot for breadcrumb/back links -->
  <div class="utility-bar__left">
    <a href="/studio/" class="utility-bar__link">← Studio</a>
  </div>

  <!-- Right slot: page nav + theme toggle -->
  <div class="utility-bar__right">
    <a href="/" class="utility-bar__link home-nav-link">Home</a>
    <div class="theme-control">
      <button id="theme-toggle" class="theme-toggle">Theme: System</button>
    </div>
  </div>
</nav>
```

### Variants
1. **Home page**: Right slot only (Studio link + theme toggle)
2. **Studio index**: Right slot only (Home link + theme toggle)
3. **Studio child pages**: Left slot (← Studio) + Right slot (Home + theme toggle)

### Styling (`.utility-bar` in `components.css`)
- Flexbox with `space-between`, wraps on narrow screens
- Left slot: optional, for back navigation
- Right slot: `margin-left: auto` pushes to right when left slot empty
- Links: tertiary color, accent hover, sm font, subtle padding
- Theme control: inline positioning (not fixed) when inside utility bar

### Theme.js Integration
Selectors updated to prefer `.utility-bar` context with fallback:
```javascript
var control = document.querySelector('.utility-bar .theme-control') ||
              document.querySelector('.theme-control');
```

Maintains scroll dimming behavior (adds `.is-dimmed` at >80px scroll).

---

## Design Token System (`variables.css`)

### Colors
- Light mode defaults in `:root`
- Dark mode manual override: `html[data-theme="dark"]`
- Dark mode system preference: `@media (prefers-color-scheme: dark) { :root:not([data-theme]) }`
- Warm palette — backgrounds are off-white (`#fafaf8`) / warm dark (`#1e1d1a`), not pure white/black

### Typography
- Scale ratio: 1.25 (mobile), 1.333 (desktop, ≥48rem)
- Tokens: `--font-size-sm` through `--font-size-5xl`
- Two stacks: `--font-primary` (Inter), `--font-heading` (Fraunces)

### Spacing
- 8px base unit: `--space-xs` (8px) through `--space-4xl` (128px)
- Section spacing: `--section-spacing` adjusts at desktop breakpoint

### Layout
- `--max-width-content: 42rem` (~672px reading width)
- `--max-width-wide: 64rem` (~1024px for grids)

---

## JavaScript Architecture

### Patterns
- **All files use IIFEs** — no module system, no globals leaked
- **`var` throughout** — ES5 compatibility, no `let`/`const`
- **Strict mode** enabled in every IIFE
- **Constants:** `SCREAMING_SNAKE_CASE` (e.g., `STORAGE_KEY`, `CYCLE_ORDER`)
- **Functions:** `camelCase`
- **No console.log** in production code

### `theme.js` (loaded in `<head>`, runs before paint)
- Reads `localStorage.getItem('theme')` → sets `data-theme` attribute on `<html>`
- Exposes `window.setTheme()` and `window.cycleTheme()`
- Three states: `system` → `light` → `dark` (cycles)
- Auto-dims theme control and adjacent nav links on scroll (>80px threshold)
- Selectors prefer `.utility-bar` context with fallback to direct selectors for backwards compatibility

### `interactions.js` (loaded at end of body)
- **Accordion:** One card expanded at a time, URL hash updated on expand
- **Scroll emphasis:** IntersectionObserver adds `.in-view` class to principles
- **Respects `prefers-reduced-motion`:** skips animations, reveals immediately

### `modulor-toggle.js`
- Toggles `data-skin="modulor"` on `<html>`, persists to `localStorage` key `skin`
- Dynamically creates `<link>` to load `css/skins/modulor.css` on first activation
- Scrolls to top on toggle

### `section-nav.js` (loaded on case study pages)
- Scroll-spy that tracks active section using `getBoundingClientRect()` + 25% viewport threshold
- Position is CSS-only (`position: fixed; top: var(--space-4xl)`) — no JS position toggling
- Smooth scroll on click, respects `prefers-reduced-motion`
- Updates `history.replaceState` with section hash on click
- RAF-throttled scroll listener for active state updates

### `studio-filters.js` (loaded on studio pages)
- **Filtering:** Shows/hides studio items based on `data-type` attribute (experiment, case-study, tool, writing)
- **URL hash support:** Reads and updates `location.hash` for deep linking (e.g., `#case-study`)
- **Button states:** Updates `.is-active` class and manages `aria-pressed` for accessibility
- **IIFE pattern:** Self-contained, no global pollution

### Anti-flash pattern
`theme.js` in `<head>` sets `data-theme` before first paint. An inline `<script>` also checks `localStorage('skin')` and writes the Modulor `<link>` tag + `data-skin` attribute before paint.

---

## CSS Conventions

### Naming
- Kebab-case classes: `.project-card`, `.theme-toggle`, `.credibility-list`
- BEM-style for multi-part components: `.utility-bar__left`, `.utility-bar__link`, `.studio-item-header`
- State classes prefixed: `.is-dimmed`, `.is-interacting`, `.in-view`, `.expanded`, `.is-active`, `.is-hidden`
- Custom properties prefixed by domain: `--color-*`, `--font-*`, `--space-*`

### Specificity
- Minimal — single class selectors preferred
- No `!important` except in reduced-motion overrides
- Modulor skin scopes everything under `html[data-skin="modulor"]`
- `@layer` cascade layers declared in `layers.css`; page-specific files use matching `@layer` blocks
- Container queries (`container-type: inline-size`) used on `.work-grid` and `.project-card`

### Responsive
- Mobile-first: base styles are mobile, `@media (min-width)` adds complexity
- Two breakpoints: `48rem` (768px), `64rem` (1024px)

---

## Accessibility Baseline

- Semantic landmarks: `<main>`, `<nav>`, `<footer>`, `<section>` with `aria-labelledby`
- Heading hierarchy: no skipped levels
- `.visually-hidden` class for screen-reader-only content
- `aria-expanded` on accordion toggles
- `aria-pressed` on skin toggle
- `:focus-visible` rings (2px solid, offset) on all interactive elements
- `prefers-reduced-motion` disables transitions and animations
- All link/button text is accessible (or has `aria-label`)

---

## Modulor Skin System

Experimental Le Corbusier-inspired skin, activated by `data-skin="modulor"` on `<html>`.

### Activation hook
- **Attribute:** `data-skin="modulor"`
- **localStorage key:** `skin` (value: `"modulor"`)
- **Toggle:** φ button, fixed bottom-right corner

### Proportional system
- **Single source of truth:** `--phi: 1.618` — all other constants derived via `calc()`
- **Type scale:** powers of φ, anchored at `--type-sm: 1rem` (body text at φ^1 ≈ 26px)
- **Spacing:** Fibonacci recurrence anchored at `--space-1: 0.25rem`
- **Layout:** golden-section datums, φ-ratio grid columns
- **Line height:** `var(--phi)`

### Z-index strategy (Modulor only)
```
0    Minor grid
1    Major grid overlay
2    Vertical spine
4    Horizontal datum
5    Default content
10   Collision elements
100  Theme controls
```

### Case study & studio enhancements (Modulor)
- **Vellum backdrop:** Translucent `::before` overlay (`background: var(--color-bg); opacity: 0.67`) on case study sections to mute the construction grid behind reading content
- **Translucent nav panel:** Section nav uses `::before` pseudo-element backdrop instead of solid background
- **Translucent studio cards:** `color-mix(in srgb, var(--color-bg) 67%, transparent)` background on `.studio-item`
- **Arch diagram datum staggering:** Red/blue `::before`/`::after` bars weave through `.arch-layer` items at staggered z-indexes

### Homepage enhancements (Modulor)
- **Two-column hero grid:** φ-ratio `grid-template-columns: 1fr 1fr` at 48rem breakpoint, positioning `.positioning` text in the right column
- **Diminishing arcs:** SVG-based `background-image` arcs on `main` pseudo-elements, billowing right from the vertical spine

### Additional tokens (Modulor)
- **`--font-mono`:** `ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace` — used for labels, annotations, nav text, metadata throughout the skin

### Dark mode in Modulor
Uses `data-theme` selectors (same as base site):
- `html[data-skin="modulor"][data-theme="dark"]`
- `html[data-skin="modulor"]:not([data-theme])` inside `@media (prefers-color-scheme: dark)`

---

## Component Inventory

### Navigation & Controls
| Component | Class | Behavior |
|-----------|-------|----------|
| Utility bar | `.utility-bar` | Horizontal nav with optional left/right slots, flexbox layout, wraps on mobile |
| Utility bar link | `.utility-bar__link` | Tertiary color, accent hover, sm font, maintains `.studio-nav-link` or `.home-nav-link` for JS |
| Theme toggle | `.theme-control` / `.theme-toggle` | Inside utility bar (or standalone), auto-dims on scroll, cycles system/light/dark |
| Modulor toggle | `.modulor-toggle` | Fixed bottom-right φ symbol, very low opacity, toggles skin |

### Homepage Components
| Component | Class | Behavior |
|-----------|-------|----------|
| Project cards | `.project-card` | Accordion expand/collapse, one at a time, URL hash sync. Uses `container-type: inline-size` |
| Expanded footer | `.expanded-footer` | Flex row inside project card: case study link left, collapse toggle right |
| Case study link | `.case-study-link` | Accent-colored link to full studio case study page |
| Collapse toggle | `.collapse-toggle` | Button to collapse expanded project card, `margin-left: auto` |
| Work grid | `.work-grid` | Container query parent (`container-type: inline-size`) for project cards |
| Principles | `.principles-list` | Scroll-reveal animation, anchor links on hover |
| Credibility strip | `.credibility-list` | Simple grid, responsive 1→2 columns |
| Portrait | `.about-portrait` | Inline SVG, CSS-controlled stroke/opacity |

### Studio Page Components
| Component | Class | Behavior |
|-----------|-------|----------|
| Studio filters | `.filter-btn` | Text-style buttons with underline active state, filtering by data-type |
| Studio items | `.studio-item` | Card with type/date, title, description, scope indicators |
| Studio grid | `.studio-grid` | Responsive grid (1→2→3 cols) |

### Case Study Components
| Component | Class | Behavior |
|-----------|-------|----------|
| Metadata grid | `.case-study-meta` | Definition list grid (2→3→6 cols), uppercase labels |
| TL;DR box | `.tldr-box` | Accent wash background, left border, arrow bullets |
| TL;DR grid | `.tldr-grid`, `.tldr-col` | Two-column layout inside TL;DR box at 48rem+ |
| Constraint highlight | `.constraint-highlight` | Surface hover background, uppercase label |
| Artifact | `.artifact` | Figure block with full-width image and caption |
| Pull quote | `.pull-quote` | Fraunces heading font, xl/2xl, accent left border |
| Evolution list | `.evolution-list` | Before/After definition list with `↳` arrow markers |
| Arch diagram | `.arch-diagram`, `.arch-layer` | Layered architecture visualization with emphasis/split variants |
| Section nav | `.section-nav` | Fixed right-side scroll-spy nav (desktop only, 64rem+) |
| Back navigation | `.back-nav`, `.back-link` | Top/bottom back-to-studio links |

---

## Development Workflow

1. Edit files directly (no build step)
2. Test locally: `python3 -m http.server 8000`
3. Commit and push to `main` — GitHub Pages deploys automatically
4. Custom domain via CNAME → `guesshimself.work`

---

## Planned Evolution

### Studio Content Expansion
- **✓ Studio landing page** — Implemented with filtering system
- **✓ Case study template** — Editorial long-form template ready for content
- **✓ CAP Design System case study** — Full case study live at `/studio/cap-ds/`
- **✓ Breathing Shapes experiment** — Generative experiment live at `/studio/breathing-shapes/`
- **✓ Genera experiment** — Generative typography experiment at `/studio/genera/`
- **✓ CSS Color Playground** — Interactive CSS Color L4/L5 tool at `/studio/css-color-playground/`
- **In Progress: Writing pages** — Template for article/blog post format

### Content Migration
- Expand project cards from homepage `#work` section into full case study pages using the template
- Migrate condensed case studies to `/studio/<slug>/` format
- Maintain homepage cards as entry points, link to full studio pages

### Navigation Enhancements
- **✓ Utility bar** — Implemented across all pages with left/right slot pattern
- **✓ Section navigation** — Fixed right-side scroll-spy for case study pages (`section-nav.js`)
  - Uses `getBoundingClientRect()` + 25% viewport threshold (not IntersectionObserver)
  - Desktop only (hidden below 64rem), `position: fixed; top: var(--space-4xl)`
  - Future consideration: collapsed/drawer on mobile

### Component System Evolution
- Current approach: copy/paste HTML with shared CSS
- **Future consideration:** Static site generator (e.g., 11ty, Static by DevDojo) when duplication becomes unwieldy
- Would enable reusable utility bar, header, footer as partials/components
- For now, copy/paste is acceptable with 3-4 pages

### Architectural Notes
- CSS architecture scales well: shared core (reset/variables/base/layout/components/responsive) + page-specific files
- `theme.js` and anti-flash pattern work independently of page content
- Modulor skin may need per-page adjustments as new page types are added
- Zero-dependency philosophy maintained

---

## Conventions to Maintain

1. **No frameworks, no build tools** — vanilla HTML/CSS/JS
2. **Progressive enhancement** — everything works without JS
3. **IIFE pattern** with `'use strict'` and `var` for all JavaScript
4. **Mobile-first CSS** with `min-width` breakpoints
5. **Token-first styling** — use custom properties, don't hardcode values
6. **Accessibility is non-negotiable** — semantic HTML, ARIA, focus management, motion respect
7. **Warm color palette** — no pure black/white backgrounds
8. **Restrained interaction design** — subtle transitions, no gratuitous animation
9. **Conditional loading** — skins and optional features lazy-loaded
10. **No console.log** in production
