# Shatabdi Samriddhi 2026 – CSR Conclave · IIT (ISM) Dhanbad

> Celebrating a Century of IIT (ISM) Dhanbad by Building Partnerships for Education, Innovation and Societal Impact.
> Friday, 4 December 2026 · Golden Jubilee Hall, IIT (ISM) Dhanbad

React 19 + Vite + Tailwind CSS 3 + TypeScript.

```bash
npm install
npm run dev            # local dev
npm run build          # production build → dist/
npm run build:preview  # single self-contained HTML → dist-preview/index.html
```

## Design system

**Palette** – taken from the institute's "Patent Granted" creative. Yellow/gold is retired; beige/sand takes its place.

| Token | Hex | Use |
|---|---|---|
| `maroon-600` | `#7A172B` | Brand primary — hero, buttons, active states |
| `maroon-700/800` | `#661324` / `#520F1D` | Hover, headings on light |
| `maroon-900/950` | `#3D0B16` / `#26060D` | Centenary timeline band, footer |
| `maroon-50–300` | `#FBF2F4` → `#D9909F` | Chips, tints, soft accents |
| `sand-50` | `#FDFAF5` | Page background |
| `sand-100/200` | `#F8F1E6` / `#F1E5D3` | Alternate section bands, inset panels |
| `sand-300–600` | `#E5D3B8` → `#A6845B` | Borders, accent text on maroon (replaces gold) |
| `ink` | `#2B1A1D` | Body text (warm near-black) |

**Typography** – two families only:
- **Fraunces** (serif, display) — all headings, numerals, the countdown. Italic light weight for emphasis words.
- **Plus Jakarta Sans** (sans) — body, UI, labels, buttons.

**Motifs** – diagonal hatch stripes and concentric arcs from the patent creative; the centenary emblem as the logo lockup.

**Motion** (all disabled under `prefers-reduced-motion`):
- Staggered hero entrance, floating emblem with slow-rotating dashed ring
- Scroll-reveal on every section (`<Reveal>` + IntersectionObserver)
- Count-up stats, ticking countdown digits
- Timeline line that draws itself, auto-scrolling alumni marquee (pauses on hover)
- Accordion agenda/FAQ, card lift + hover accents, animated modals

Shared component classes live in `src/index.css` (`.btn-primary`, `.btn-sand`, `.card`, `.chip`, `.tab`, `.input`, `.eyebrow`…); tokens in `tailwind.config.js`.

## Structure (per PRD v0.3)

Hero (countdown, CTAs, stats) → About + two sessions → Why Attend → Centenary timeline + alumni strip → Agenda (session tabs, accordion, .ics, print-to-PDF) → Speakers (role filter, bio modal) → CSR Project showcase (focus-area filter, express-interest modal) → Sponsorship (tiers, comparison table, enquiry modal) → Partner wall → Venue (map, travel, stay, FAQ, downloads) → Footer CTA.

Registration modal: validation, duplicate-email check, QR pass, Add to calendar, Share.

## Placeholders still to replace

- Speaker photos (monogram avatars render until a `photo` URL is set in `src/data/mockData.ts`)
- Sponsor prices `₹ [TBC]`, partner logos, hotel list, contact email/phone in `EVENT`
- Form submissions are client-side only — wire `RegistrationModal`, `SponsorModal`, `ProjectInterestModal` to the backend/email service
