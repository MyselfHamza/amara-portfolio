# Amara Portfolio — Brand Spec

## Person
- Name: Amara (alt spelling: Ammara)
- Fiverr username: google_ppt
- Profile URL: https://www.fiverr.com/google_ppt
- Tagline: "Design enthusiast — pitch decks that win rooms"
- Location: Pakistan
- Member since: June 2023
- Languages: English, Urdu, Dutch, French
- Rating: 4.9 from 580 reviews
- Avg response time: 1 hour
- Hourly rate: £15.48/hour
- Headline numbers: 5+ years experience, 500+ projects delivered, 99% satisfaction rate
- Notable clients: Sky, Acer, National Grid
- Studio: Amara Presentation Studio (Freelance, Jan 2023–present)

## Voice
Confident, precise, investor-deck professional. Pitch-deck specialist. Strategic structure + clean modern visual design.

## Services (3 Fiverr gigs + 3 extended services to fill grid)
1. **Business PowerPoint & Pitch Decks** — from £70, 4.9 (296 reviews). Custom branded decks for businesses & startups.
2. **Investor Decks & Google Slides** — from £70, 4.9 (209 reviews). PowerPoint + Google Slides for investor pitches, training, sales.
3. **Pitch Deck Writing & Design** — from £62, 4.8 (74 reviews). Includes content writing + design.
4. **Presentation Redesign** — refresh outdated decks with modern visuals.
5. **Custom Branded Templates** — reusable PPT/Keynote/Slides templates aligned to brand.
6. **Infographics & Data Visualization** — charts, diagrams, visual storytelling.

## Portfolio projects (use as titles — no real images, render gradient covers)
1. Frequency — Investor Pitch Deck (July 2025) — funding scale-up deck, value prop + market + financials
2. CCS Presentation Design — investor deck showcasing innovation & growth
3. Marketing Presentation
4. Uplift Presentation
5. Astella Finance Presentation
6. Gaming Industry Pitch Deck
7. Mobile App Presentation
8. Blend Presentation
9. Sales Enablement Deck
10. Corporate Training Deck

## Real testimonials (verbatim quotes, lightly trimmed)
1. "This was an absolutely wonderful experience and major time saver for me. I feel confident I have a partner in business now." — Tom S., United States (Repeat client)
2. "I had a fantastic experience working with Amara on my deck design. She immediately understood the vision and translated it into something far better than I had imagined. The final product was clean, compelling, and incredibly well-structured." — Jordan M., United States (Repeat client)
3. "Really great work, always works well with our team. Always puts out extremely professional level work for us." — Tim F., United States (Repeat client)
4. "Amara is my new go-to! She quickly understood my vision, asked thoughtful questions, and delivered a presentation that exceeded all expectations." — Cam, United States
5. "Working with Amara was an ABSOLUTE pleasure! Her creativity and professionalism in presentation design truly stood out." — Ride, United States
6. "Just brilliant — understood the brief and delivered a great deck. Will use again for sure." — C., Maldives
7. "Overall great experience working with Amara! Really appreciate the attention to detail and visual appeal." — Uptown Chef, Canada
8. "Amara was easy to work with and created a professional and visually appealing slide deck that aligned with my brand." — Colie B., United States

## NEW color palette (REPLACE Zara's violet/coral/gold)
- `--bg`: `#FAF6EF` (warm cream — replaces white)
- `--ink`: `#0C1A2C` (midnight navy — replaces dark foreground)
- `--ink-muted`: `#5C6B82`
- `--accent`: `#FF7A45` (sunset orange — REPLACES `coral`)
- `--gold`: `#D8A859` (warm champagne gold — REPLACES old gold)
- `--ocean`: `#1E3A5F` (deep ocean blue — REPLACES violet)
- Dark surface: `#0C1A2C`

Tailwind name mapping (KEEP class names so we don't have to rewrite components):
- `coral` → now means `#FF7A45`
- `gold` → now means `#D8A859`
- `violet` → now means `#1E3A5F` (rename allowed if class is rare; otherwise remap)
- `foreground` → `#0C1A2C`
- `background` → `#FAF6EF`

## Brand assets
- Logo letter: capital **A** (instead of Zara's Z)
- Favicon: A monogram in `#FF7A45` on `#0C1A2C`

## CTA strategy
All "hire me" actions go to https://www.fiverr.com/google_ppt — no contact form. Same pattern as Zara site.

---

## Current palette tokens (from existing `app/globals.css` — these are what build agents will swap)

The destination project uses Tailwind v4's `@theme inline` block in `app/globals.css`. There is **no** `tailwind.config.*` file — all design tokens live in `app/globals.css` as CSS custom properties exposed to Tailwind via `@theme inline`.

### CSS custom properties on `:root`
| Variable | Current value | Maps to (new palette) |
|---|---|---|
| `--violet` | `#4A1D8E` | `#1E3A5F` (ocean) |
| `--violet-light` | `#6B3FA0` | lighter ocean tint, e.g. `#2C4F7C` |
| `--violet-dark` | `#351466` | darker ocean, e.g. `#142A47` |
| `--coral` | `#FF6B6B` | `#FF7A45` (accent / sunset orange) |
| `--coral-light` | `#FF8A8A` | `#FF9A6E` |
| `--coral-dark` | `#E05555` | `#E8632F` |
| `--gold` | `#F5B731` | `#D8A859` |
| `--gold-light` | `#F7CA5A` | `#E6BE7A` |
| `--background` | `#FFFFFF` | `#FAF6EF` (warm cream) |
| `--foreground` | `#1A1A2E` | `#0C1A2C` (midnight navy) |
| `--surface` | `#F8F7FC` | warm cream tint, e.g. `#F2EDE3` |
| `--surface-alt` | `#EDECF5` | e.g. `#E8E1D2` |
| `--muted` | `#6C6B7B` | `#5C6B82` (ink-muted) |
| `--border` | `#E2E0EF` | e.g. `#D9D2C2` |

### Tailwind class name mapping (via `@theme inline`)
These class names already exist in components — KEEP them, just remap colors:
- `bg-background` / `text-background` → `--background`
- `bg-foreground` / `text-foreground` → `--foreground`
- `bg-violet` / `text-violet` (and `-light`/`-dark`) → `--violet`*
- `bg-coral` / `text-coral` (and `-light`/`-dark`) → `--coral`*
- `bg-gold` / `text-gold` (and `-light`) → `--gold`*
- `bg-surface` / `bg-surface-alt`
- `text-muted`
- `border-border`

### Other tokens to update
- `::selection` uses `rgba(255, 107, 107, 0.2)` and `var(--violet)` — update to new accent rgba `rgba(255, 122, 69, 0.2)` and ocean.
- `:focus-visible` outline uses `var(--coral)` — auto-updates via variable swap.
- `--card-shadow` and `--card-shadow-hover` use `rgba(74, 29, 142, ...)` (violet-tinted) — swap to ocean rgba `rgba(30, 58, 95, ...)`.
- `.text-gradient` uses `linear-gradient(135deg, var(--violet) 0%, var(--coral) 100%)` — auto-updates via variable swap.
- `.section-badge` background `rgba(255, 107, 107, 0.08)` and border `rgba(255, 107, 107, 0.15)` — swap to accent rgba.
- `.stat-value` text-shadow uses gold rgba `rgba(245, 183, 49, ...)` — swap to new gold rgba `rgba(216, 168, 89, ...)`.
- `.icon-box` gradient uses violet + coral rgba — swap to ocean + accent rgba.
- `.section-dark` background uses `var(--violet)` — auto-updates.
- `.glass` and `.grid-bg` use white-on-dark rgba — keep as is.

### Fonts (KEEP unchanged unless instructed)
- `--font-jakarta`: "Plus Jakarta Sans" (sans / display)
- `--font-instrument`: "Instrument Serif" (serif, used for `.stat-value` italics and `--font-serif`)
