## Design Direction Skill

After researching the client and auditing their site, decide the visual direction for the prototype. This is the creative brief that guides everything built afterwards.

### Input
- `clients/{slug}/content/STRATEGY.md` — must exist (strategy brief drives all design decisions)
- `clients/{slug}/CLIENT.md` — fully populated with research and audit findings
- `clients/{slug}/content/competitor-analysis.md` — competitor websites visited and scored
- `clients/{slug}/content/website-audit.md` — current site audit completed

### Step 1: Industry Design Patterns
Use the `ui-ux-pro-max` skill to search for:
```bash
py .claude/commands/skills/ui-ux-pro-max/scripts/search.py "{client's industry}" --domain product
py .claude/commands/skills/ui-ux-pro-max/scripts/search.py "{appropriate style}" --domain style
py .claude/commands/skills/ui-ux-pro-max/scripts/search.py "{industry}" --domain color
py .claude/commands/skills/ui-ux-pro-max/scripts/search.py "{tone}" --domain typography
```

### Step 2: Design System Decision
Based on research + UI UX Pro Max results, decide:

**Style Direction** (pick one and commit):
- Corporate/Professional — clean lines, structured, trustworthy (law firms, consultancies, finance)
- Bold/Modern — strong typography, striking colors, animated (agencies, tech, startups)
- Warm/Approachable — soft colors, rounded shapes, friendly (healthcare, education, nonprofits)
- Premium/Luxury — dark backgrounds, gold accents, elegant type (high-end services, architecture)
- Data-Driven/Technical — charts, metrics, clean data presentation (analytics, engineering, research)
- Editorial/Content — magazine-style, content-first, beautiful type (media, publishers, thought leaders)

**Color Palette** — extract from their existing brand if possible (logo, current site), then refine:
- Primary color (brand color)
- Secondary color (accent)
- Neutral palette (backgrounds, text)
- Semantic colors (success, warning, error)

**Typography**:
- Display/heading font (distinctive, memorable)
- Body font (readable, clean)
- Size scale and weight contrast

**Animation Level**:
- Subtle — fade-ins, gentle scroll reveals (conservative industries)
- Moderate — staggered animations, hover effects, scroll-triggered (professional services)
- Bold — GSAP ScrollTrigger, parallax, 3D effects, page transitions (creative industries)

**Layout Approach**:
- Traditional sections (hero, services, testimonials, CTA) — safe, proven
- Bento grid — modern, visual
- Scrollytelling — narrative, immersive
- Asymmetric/editorial — distinctive, magazine-feel

### Step 3: Component Mapping
Map which designmonks-reference components to use and how to adapt them:

| Section | Reference Component | Adaptation Needed |
|---------|-------------------|-------------------|
| Navigation | Navbar.tsx | Change links, branding |
| Hero | Hero.tsx | New headline, imagery, CTA |
| etc. | etc. | etc. |

### Step 4: Document the Direction
Update `clients/{slug}/CLIENT.md` → Design Decisions section with ALL choices made.
This becomes the source of truth — every build decision references this.

### Anti-Patterns to Avoid
- Don't make a consultancy look like a startup
- Don't make a government-facing business look trendy
- Don't use dark mode for industries where trust = clean/light
- Don't over-animate for conservative audiences
- Don't copy their competitors — be better, not the same
- Don't ignore their existing brand — evolve it, don't replace it
