# guesshimself.work

Personal portfolio site for Eric Guess — design systems and product design professional.

**Live site:** [guesshimself.work](http://guesshimself.work/)

## About

Portfolio featuring selected case studies, design principles, and capabilities. Single-page site with plans to expand into experiments, case studies, and writing.

## Tech Stack

**Zero dependencies.** No package.json, no bundler, no transpiler.

- Vanilla HTML, CSS, JavaScript (ES5-compatible)
- Google Fonts: **Inter** (body, variable 400–600) and **Fraunces** (headings, variable 400–600)
- Mobile-first responsive design (breakpoints: 48rem, 64rem, 80rem)
- Light/dark/system theme toggle with localStorage persistence
- Experimental **Modulor** skin — Le Corbusier-inspired golden ratio proportional system
- GitHub Pages deployment with custom domain

## Structure

```
├── index.html                      # Main portfolio page
├── favicon.svg                     # Adaptive SVG favicon
├── CNAME                           # Custom domain config
├── css/
│   ├── reset.css                   # Modern CSS reset
│   ├── variables.css               # Design tokens (colors, type, spacing)
│   ├── base.css                    # Typography & element defaults
│   ├── layout.css                  # Section containers & spacing
│   ├── components.css              # Component-specific styles
│   ├── responsive.css              # Breakpoint overrides
│   └── skins/
│       └── modulor.css             # Experimental Le Corbusier skin
├── js/
│   ├── theme.js                    # Light/dark/system toggle (in <head>)
│   ├── main.js                     # Smooth scroll enhancements
│   ├── interactions.js             # Accordion cards, scroll-reveal
│   └── modulor-toggle.js           # φ button toggle for Modulor skin
├── experiments/
│   └── genera/                     # Generative typography experiment
└── images/
    ├── cap-ds-diagram.png
    └── guess-contour-illustration.svg
```

## Development

```bash
python3 -m http.server 8000
# or
python3 -m http.server 8080  # if 8000 is in use
```

Navigate to `http://localhost:8000` (or 8080)

## Features

- **Theme System**: Three-state toggle (system → light → dark) with anti-flash pattern
- **Modulor Skin**: Experimental skin with φ-based type scale and Fibonacci spacing
- **Accordion Cards**: Expandable project case studies with URL hash sync
- **Scroll Reveal**: Intersection Observer-based animations (respects `prefers-reduced-motion`)
- **Semantic HTML**: Proper landmarks, ARIA labels, screen-reader support
- **Progressive Enhancement**: Everything works without JavaScript

## Conventions

- **No frameworks, no build tools** — vanilla HTML/CSS/JS
- **IIFE pattern** with `'use strict'` and `var` for all JavaScript
- **Mobile-first CSS** with `min-width` breakpoints
- **Token-first styling** — use custom properties, avoid hardcoded values
- **No console.log** in production code

See [CLAUDE.md](CLAUDE.md) for comprehensive project documentation.
