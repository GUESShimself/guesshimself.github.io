# Frontend CSS/JS Audit

## Scope
- Audited folders: `css/` and `js/`
- Focus: naming consistency, organization, performance, maintainability, and behavior risks
- Snapshot date: 2026-02-24

## What is already strong
- CSS custom properties and design tokens are well established in `css/variables.css`.
- State class naming is mostly consistent (`.is-active`, `.is-hidden`, `.is-dimmed`, `.expanded`).
- Progressive enhancement approach is present across scripts (no-JS fallbacks in place).
- Reduced-motion support is present in CSS and parts of JS.

## Findings

### High

1. **Undefined design token in production selector**
- Reference: `css/components.css:726`
- Issue: `.modulor-toggle` uses `color: var(--color-text-accent);`, but `--color-text-accent` is not defined in the token set.
- Impact: color resolves to invalid/fallback behavior; inconsistent rendering across themes.
- Recommendation: replace with existing token (likely `--color-accent` or `--color-text-tertiary`) or define `--color-text-accent` in `variables.css` and skin overrides.

2. **Filter click handler reads `e.target` instead of the button itself**
- Reference: `js/studio-filters.js:110`
- Issue: handler uses `e.target.getAttribute('data-filter')`.
- Impact: if a nested element is added inside `.filter-btn`, filtering can break (`null` filter type).
- Recommendation: use `e.currentTarget` (or closure over the button) for robust behavior.

### Medium

3. **Cascade layer strategy is inconsistent across page-level CSS**
- References: `css/layers.css:5`, `css/case-study.css:1`, `css/studio.css` (no `@layer`)
- Issue: declared layer order omits `case-study`; `studio.css` is unlayered while most files are layered.
- Impact: overrides become harder to reason about; specificity/order regressions more likely as files grow.
- Recommendation: explicitly declare and include all layers in `layers.css` (e.g., `case-study`, `studio`) and wrap page files in those layers.

4. **Duplicated rules for conceptually identical nav links**
- References: `css/components.css:16-43` and `css/components.css:46-73`
- Issue: `.studio-nav-link` and `.home-nav-link` blocks are near-identical.
- Impact: drift risk, unnecessary maintenance cost.
- Recommendation: extract shared class (e.g., `.top-nav-link`) and keep page-specific class only for deltas.

5. **Cross-file layout ownership overlap (global element selectors)**
- References: `css/layout.css:5,9`, `css/studio.css:1,12`, `css/case-study.css:363,472`
- Issue: `main`, `section`, and `body` are styled in multiple files with page-specific intent.
- Impact: accidental cross-page side effects and brittle ordering dependencies.
- Recommendation: keep global element layout in one layer/file; move page-specific layout to page-scoped classes (`.page-studio`, `.page-case-study`).

6. **Syntax anomaly in case-study stylesheet**
- Reference: `css/case-study.css:229`
- Issue: stray `};` after an `@media` block.
- Impact: parsers recover, but this is error-prone and can hide adjacent issues.
- Recommendation: remove the extra semicolon.

7. **Overlapping smooth-scroll behaviors across scripts**
- References: `js/main.js:8`, `js/section-nav.js:95-106`
- Issue: `main.js` attaches click handlers to all hash links, while `section-nav.js` also handles section-nav links.
- Impact: redundant listeners/work and harder debugging of scroll/history behavior.
- Recommendation: scope `main.js` to non-section-nav links, or centralize scroll handling in one module.

8. **Section-nav position calculations not recomputed on resize/content shifts**
- References: `js/section-nav.js:16-24`, `js/section-nav.js:27-36`
- Issue: `navOriginY` and `stickyOffset` are computed once.
- Impact: nav can become misaligned if viewport/font size/content height changes.
- Recommendation: recalc on `resize` (throttled) and optionally after async content/layout shifts.

9. **Filter domain list hardcoded in JS**
- Reference: `js/studio-filters.js:85`
- Issue: valid filters are duplicated in code (`experiment`, `case-study`, `writing`).
- Impact: drift between markup and script when filters are added/renamed.
- Recommendation: derive valid filters from `.filter-btn[data-filter]` in DOM.

### Low

10. **Use of `transition: all` where targeted transitions are preferable**
- References: `css/studio.css:112`, `css/components.css:277`
- Issue: broad transition scope can trigger costly or unintended animations.
- Impact: avoidable paint/layout work; harder motion predictability.
- Recommendation: transition only specific properties (`color`, `opacity`, `transform`, `border-color`, etc.).

11. **Multiple `DOMContentLoaded` listeners in a single module**
- Reference: `js/interactions.js:14`, `js/interactions.js:79`, `js/interactions.js:108`
- Issue: one file registers three separate DOM-ready blocks.
- Impact: organization/readability hit; harder testability.
- Recommendation: consolidate into one `init()` orchestration function with smaller helpers.

12. **`document.write` used for conditional skin CSS injection**
- References: `index.html:34`, `studio/index.html:35`, `studio/cap-ds/index.html:38`, `studio/case-study-template/index.html:35`
- Issue: legacy injection method.
- Impact: parser-blocking behavior, CSP/maintainability concerns.
- Recommendation: switch to `<link rel="preload" as="style">` + DOM append/link enablement, or early static `<link>` with media toggling.

## Naming Consistency Summary
- Good: kebab-case class names, consistent state prefix `is-`, descriptive component naming.
- Mixed: BEM is used only in parts (`utility-bar__*`), while most classes are semantic flat names.
- Recommendation: choose one naming strategy for new code (either BEM-like components or semantic + strict prefixes) and document it in a short style guide.

## Organization Summary
- Current structure is close to scalable, but page-specific concerns should be isolated more consistently:
  - Keep base/layout/component/responsive global.
  - Move page-specific element-level overrides behind page root classes and explicit layers.

## Priority Fix Order
1. Fix undefined CSS token and studio filter click target bug.
2. Normalize cascade layers and remove cross-file global element collisions.
3. Remove duplicate nav-link CSS and overlapping scroll handlers.
4. Clean lower-risk quality issues (`transition: all`, `DOMContentLoaded` consolidation, `document.write` replacement).

## Implementation Update (2026-02-24)
- Branch: `frontend-css-js-audit-fixes`

### Completed
1. Undefined token fixed
- `--color-text-accent` usage removed in `css/components.css`; replaced with `--color-text-tertiary` for `.modulor-toggle`.

2. Studio filter click target bug fixed
- `e.target` changed to `e.currentTarget` in `js/studio-filters.js`.

3. Cascade layers normalized
- Added page layers in `css/layers.css`: `case-study`, `studio`.
- Wrapped `css/studio.css` in `@layer studio`.

4. Cross-file global element collisions reduced
- Added body scoping classes:
  - `page-studio` in `studio/index.html`
  - `page-case-study` in `studio/cap-ds/index.html` and `studio/case-study-template/index.html`
- Scoped page-specific selectors in `css/studio.css` and `css/case-study.css` to page roots.

5. Duplicate nav-link CSS removed
- Consolidated duplicated `.studio-nav-link` / `.home-nav-link` rules in `css/components.css`.
- Introduced shared `.top-nav-link` usage in `index.html`, `studio/index.html`, `studio/cap-ds/index.html`, `studio/case-study-template/index.html`.
- Updated dimming logic in `js/theme.js` to target `.top-nav-link`.

6. Overlapping smooth-scroll behavior reduced
- `js/main.js` now ignores links inside `.section-nav`, allowing `js/section-nav.js` to own those links.

7. Lower-risk quality fixes completed
- Replaced `transition: all` with targeted transitions in `css/studio.css` and `css/components.css`.
- Consolidated `js/interactions.js` to a single DOM-ready init flow.
- Replaced `document.write` skin CSS injection with dynamic `<link>` append in:
  - `index.html`
  - `studio/index.html`
  - `studio/cap-ds/index.html`
  - `studio/case-study-template/index.html`
- Updated `js/modulor-toggle.js` to reuse a tagged skin stylesheet link and avoid duplicate injection.

8. Syntax anomaly fixed
- Removed stray `};` in `css/case-study.css`.

### Still Open (from original findings)
1. `js/section-nav.js` does not recompute sticky/nav origin metrics on resize/layout shifts.
2. `js/studio-filters.js` still uses a hardcoded valid-filter list instead of deriving from DOM.
