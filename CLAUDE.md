# CLAUDE.md — Project Reference

## Project Overview

Personal portfolio site for Eric Guess, a design systems and product design professional. Single-page static site deployed to GitHub Pages at **guesshimself.work**.

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
├── index.html                      # Single-page portfolio (all content)
├── favicon.svg                     # Adaptive SVG favicon (prefers-color-scheme)
├── CNAME                           # Custom domain config
├── eric-guess-ux-product-design-systems.pdf
├── css/
│   ├── reset.css                   # Modern CSS reset
│   ├── variables.css               # Design tokens (colors, type, spacing)
│   ├── base.css                    # Typography & element defaults
│   ├── layout.css                  # Section containers & spacing
│   ├── components.css              # Component-specific styles
│   ├── responsive.css              # Breakpoint overrides (mobile-first)
│   └── skins/
│       └── modulor.css             # Experimental Le Corbusier skin (lazy-loaded)
├── js/
│   ├── theme.js                    # Light/dark/system toggle (loaded in <head>)
│   ├── main.js                     # Smooth scroll enhancements
│   ├── interactions.js             # Accordion cards, scroll-reveal, hash routing
│   └── modulor-toggle.js           # φ button toggle for Modulor skin
└── images/
    ├── cap-ds-diagram.png
    └── guess-contour-illustration.svg
```

### CSS load order matters

`reset → variables → base → layout → components → responsive`

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
- Auto-dims theme control div on scroll (>80px threshold)

### `interactions.js` (loaded at end of body)
- **Accordion:** One card expanded at a time, URL hash updated on expand
- **Scroll emphasis:** IntersectionObserver adds `.in-view` class to principles
- **Respects `prefers-reduced-motion`:** skips animations, reveals immediately

### `modulor-toggle.js`
- Toggles `data-skin="modulor"` on `<html>`, persists to `localStorage` key `skin`
- Dynamically creates `<link>` to load `css/skins/modulor.css` on first activation
- Scrolls to top on toggle

### Anti-flash pattern
`theme.js` in `<head>` sets `data-theme` before first paint. An inline `<script>` also checks `localStorage('skin')` and writes the Modulor `<link>` tag + `data-skin` attribute before paint.

---

## CSS Conventions

### Naming
- Kebab-case classes: `.project-card`, `.theme-toggle`, `.credibility-list`
- State classes prefixed: `.is-dimmed`, `.is-interacting`, `.in-view`, `.expanded`
- Custom properties prefixed by domain: `--color-*`, `--font-*`, `--space-*`

### Specificity
- Minimal — single class selectors preferred
- No `!important` except in reduced-motion overrides
- Modulor skin scopes everything under `html[data-skin="modulor"]`

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
3    Horizontal datum
5    Default content
10   Collision elements
100  Theme controls
```

### Dark mode in Modulor
Uses `data-theme` selectors (same as base site):
- `html[data-skin="modulor"][data-theme="dark"]`
- `html[data-skin="modulor"]:not([data-theme])` inside `@media (prefers-color-scheme: dark)`

---

## Component Inventory

| Component | Class | Behavior |
|-----------|-------|----------|
| Theme toggle | `.theme-control` / `.theme-toggle` | Fixed top-right, auto-dims on scroll, cycles system/light/dark |
| Modulor toggle | `.modulor-toggle` | Fixed bottom-right φ symbol, very low opacity, toggles skin |
| Project cards | `.project-card` | Accordion expand/collapse, one at a time, URL hash sync |
| Principles | `.principles-list` | Scroll-reveal animation, anchor links on hover |
| Credibility strip | `.credibility-list` | Simple grid, responsive 1→2 columns |
| Portrait | `.about-portrait` | Inline SVG, CSS-controlled stroke/opacity |

---

## Development Workflow

1. Edit files directly (no build step)
2. Test locally: `python3 -m http.server 8000`
3. Commit and push to `main` — GitHub Pages deploys automatically
4. Custom domain via CNAME → `guesshimself.work`

---

## Planned Evolution

### Blog / Article Publishing
- Add a content publishing capability for articles and writing
- Should follow the same design language and token system
- Consider how the single-page architecture might expand to multi-page
- Maintain the zero-dependency philosophy where possible

### Dedicated Case Study Pages
- Current project cards in `#work` contain condensed case studies
- Plan to expand each into a full, dedicated page with richer content
- Should reuse existing CSS architecture (variables, base, layout, components)
- URL structure and navigation patterns TBD

### Fixed Sidebar Navigation
- Section-jumping sidebar navigation pattern
- Applicable to both the homepage and future case study pages
- Should indicate current section (scroll-spy behavior)
- Consider responsive behavior: sidebar on desktop, collapsed/drawer on mobile
- The existing `interactions.js` IntersectionObserver pattern is a foundation for scroll-spy

### Architectural Considerations
- The current CSS is split by concern (reset/variables/base/layout/components/responsive) — this scales well to multi-page
- Shared CSS can remain as-is; page-specific styles could go in new per-page files
- `theme.js` and the anti-flash pattern work independently of page content
- The Modulor skin would need per-page selectors if new pages have unique sections

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
