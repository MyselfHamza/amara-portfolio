# Skills Registry

> **This file is the single source of truth for all skills available in this project.**
> Claude MUST read this file at the start of every session to know what tools are at its disposal.
> When a phase or task matches a skill's trigger, USE IT - don't reinvent the wheel.

---

## How to Use This Registry

1. **Before starting any phase**, scan the relevant category below
2. **Match the task to a skill** - if a skill exists for what you're doing, invoke it with `/skills:{name}`
3. **Stack skills** - many tasks benefit from combining 2-3 skills (e.g., research + competitor analysis + SEO audit)
4. **MCP servers** provide live data tools - they're always available as tool calls, no slash command needed

---

## PHASE 1: CLIENT RESEARCH

These skills help research the client, their business, industry, and competitive landscape.

| Skill | Command | What It Does | When to Use |
|-------|---------|-------------|-------------|
| **Parallel Web Research** | `/skills:parallel-web` | Multi-source web search with synthesized summaries and citations | Searching for client info, company details, press mentions, industry data |
| **Perplexity Search** | `/skills:perplexity-search` | AI-powered web search via Perplexity models for real-time info | Deep research queries, finding recent data, verifying claims |
| **Research Lookup** | `/skills:research-lookup` | Academic/research paper lookup via Parallel Chat API | Finding industry reports, academic research, market studies |
| **Market Research Reports** | `/skills:market-research-reports` | McKinsey/BCG-style market research reports (50+ pages) | Full market analysis for a client's industry, competitor landscape reports |
| **Competitor Alternatives** | `/skills:competitor-alternatives` | Competitor comparison and alternative pages | Building competitor comparison matrices, vs-pages |
| **Competitor Intel** | `/skills:competitor-intel` | Financial/competitive intelligence from annual reports | Extracting KPIs, financials, ratio analysis from competitor data |
| **Social Media Analyzer** | `/skills:social-media-analyzer` | Social media performance tracking across platforms | Analyzing client's social presence, engagement rates, platform benchmarks |
| **Content Strategy** | `/skills:content-strategy` | Content planning, topic clusters, editorial calendars | Planning what content the client should create, blog strategy |
| **Exploratory Data Analysis** | `/skills:exploratory-data-analysis` | Analyze scientific/structured data files (200+ formats) | When client provides data files, spreadsheets, CSVs to analyze |

### MCP Servers for Research (configure API keys in settings)

| Server | What It Does | API Key Source |
|--------|-------------|---------------|
| **Firecrawl** | Crawl and scrape entire websites, extract structured content | firecrawl.dev (free tier available) |
| **Serper** | Google Search API - rankings, competitor discovery, press | serper.dev (free 2,500 searches) |
| **Perplexity** | AI-synthesized search results for deep research | perplexity.ai |
| **Tavily** | AI-optimized search for business info | tavily.com (free 1,000 searches) |
| **UK Due Diligence** | Companies House, Charity Commission, HMRC VAT, Land Registry | Free (UK Gov APIs) |
| **UK Business Intel** | Company records + Google reviews + DNS/SSL + social profiles | Free (aggregates public APIs) |
| **BizIntel** | Web presence scoring, competitor analysis, review analysis | ezbiz-services (free 10/month) |

---

## PHASE 2: WEBSITE AUDIT

These skills help analyze the client's existing website.

| Skill | Command | What It Does | When to Use |
|-------|---------|-------------|-------------|
| **SEO Audit** | `/skills:seo-audit` | Full technical SEO audit - meta tags, rankings, on-page issues | Auditing client's current site SEO health |
| **Agentic SEO** | `/agentic-seo` | LLM-first SEO audit - schema, Core Web Vitals, E-E-A-T | Deep SEO analysis with AI visibility focus |
| **AI SEO** | `/skills:ai-seo` | Optimize for AI search engines (ChatGPT, Perplexity, Gemini) | Checking if client appears in AI-generated answers |
| **Site Architecture** | `/skills:site-architecture` | URL structure, navigation, internal linking audit | Analyzing how the client's site is structured |
| **Schema Markup** | `/skills:schema-markup` | Structured data audit and implementation | Checking JSON-LD, rich results, schema.org compliance |
| **Social Media Analyzer** | `/skills:social-media-analyzer` | Platform performance benchmarks | Auditing client's social media effectiveness |

---

## PHASE 3: STRATEGY BRIEF

These skills help connect research to actionable strategy.

| Skill | Command | What It Does | When to Use |
|-------|---------|-------------|-------------|
| **Content Strategy** | `/skills:content-strategy` | Topic clusters, content gaps, editorial planning | Planning the content approach for the new site |
| **Pricing Strategy** | `/skills:pricing-strategy` | SaaS/service pricing tier design and optimization | Helping client think about pricing page strategy |
| **Marketing Demand** | `/skills:marketing-demand-acquisition` | Demand gen, paid ads, SEO strategy, partnerships | Full marketing strategy for client growth |
| **Market Research Reports** | `/skills:market-research-reports` | Professional market analysis documents | Creating market analysis to support strategy decisions |

---

## PHASE 4: DESIGN & BUILD

These skills help design and build the prototype website.

| Skill | Command | What It Does | When to Use |
|-------|---------|-------------|-------------|
| **UI/UX Pro Max** | `/skills:ui-ux-pro-max` | 67 styles, 161 palettes, 57 font pairings, 99 UX guidelines | Generating client-specific design systems |
| **Frontend Design** | `/skills:frontend-design` | Production-grade UI that avoids generic AI aesthetics | Building any web component or page |
| **Modern Web Design** | `/skills:modern-web-design` | 2024-2025 design trends, performance-first patterns | Ensuring design is current and competitive |
| **UI Design Methodology** | `/skills:ui-design-methodology` | Visual hierarchy, accessibility, design systems | Design system decisions, accessibility compliance |
| **Mobile Design** | `/skills:mobile-design` | Mobile-first responsive design philosophy | Ensuring mobile experience is premium |
| **Animation Patterns** | `/skills:animation-patterns` | Animation choreography and sequencing patterns | Planning animation strategy for the site |
| **GSAP ScrollTrigger** | `/skills:gsap-scrolltrigger` | GSAP scroll-driven animations, pinning, parallax | Building scroll-based animation sequences |
| **Framer Motion** | `/skills:motion-framer` | React animation - variants, gestures, layout animations | Component-level animations in React |
| **Micro Interactions** | `/skills:micro-interactions` | Hover effects, loading states, transition animations | Adding polish to buttons, cards, navigation |
| **Scroll Reveal** | `/skills:scroll-reveal-libraries` | AOS-based scroll-triggered fade/slide effects | Simple section reveal animations |
| **Lightweight 3D** | `/skills:lightweight-3d-effects` | CSS/WebGL 3D effects without heavy libraries | Decorative 3D elements, tilt effects, animated backgrounds |
| **Schema Markup** | `/skills:schema-markup` | JSON-LD structured data implementation | Adding Organization, LocalBusiness, Service schemas |

---

## PHASE 4.5: WALKTHROUGH RECORDING

Record professional walkthrough videos of built prototype sites.

| Skill | Command | What It Does | When to Use |
|-------|---------|-------------|-------------|
| **Record Walkthrough** | `/record-walkthrough` | Smooth 1920x1080 video of all pages + chatbot demo | After Phase 4 build is complete, before pitch delivery |

---

## PHASE 5: PITCH & OUTREACH

These skills help craft the pitch and outreach.

| Skill | Command | What It Does | When to Use |
|-------|---------|-------------|-------------|
| **Cold Email** | `/skills:cold-email` | B2B cold outreach sequences, deliverability, follow-ups | Writing the pitch email to the client |
| **Pricing Strategy** | `/skills:pricing-strategy` | Pricing page design, tier structure, price presentation | Designing pricing tiers for the proposal |
| **Competitor Alternatives** | `/skills:competitor-alternatives` | Before/after competitor comparison pages | Creating comparison visuals for the pitch |
| **Marketing Demand** | `/skills:marketing-demand-acquisition` | Growth strategy, campaign planning | Showing client what marketing roadmap looks like |

---

## GLOBAL SEO SKILLS (always available)

Located at `~/.claude/skills/`:

| Skill | What It Does |
|-------|-------------|
| `agentic-seo` | Full LLM-first SEO audits |
| `claude-seo` | Claude-optimized SEO workflows |
| `claude-seo-assistant` | SEO assistant with recommendations |
| `seo-geo-consultant` | Local/geo SEO consulting |
| `seo-geo-skills` | Geographic SEO implementation |
| `ccforseo` | Claude Code for SEO toolkit |

---

## GLOBAL MARKETING SKILLS (always available)

Located at `~/.claude/skills/marketing-skills/`:
CRO, copywriting, cold email, pricing strategy, lead magnets, and more.

---

## PIPELINE WORKFLOW COMMANDS

These are the main pipeline commands (not skills, but custom commands):

| Command | Phase | What It Does |
|---------|-------|-------------|
| `/new-client` | Setup | Create folders, register client, set as active |
| `/research-client` | 1 | LinkedIn deep dive, business model, competitors, audience |
| `/audit-website` | 2 | Crawl every page, design/content/technical audit |
| `/strategy-brief` | 3 | Connect WHO/WHAT/WHY/HOW/PITCH into strategy |
| `/design-direction` | 4 | Pick style, colors, fonts using strategy brief |
| `/pitch-client` | 5 | Before/after, ROI, pricing tiers, demo, pitch script |

---

## SKILL STACKING RECIPES

Common combinations for maximum effectiveness:

### Full Client Research Stack
```
/skills:parallel-web        -> Find client info across the web
/skills:perplexity-search   -> Deep dive on specific questions
/skills:competitor-alternatives -> Map competitor landscape
/skills:social-media-analyzer -> Audit social presence
/skills:market-research-reports -> Generate industry report
```

### Full Website Audit Stack
```
/skills:seo-audit           -> Technical SEO health
/agentic-seo                -> AI-first SEO analysis
/skills:site-architecture   -> URL and navigation audit
/skills:schema-markup       -> Structured data audit
/skills:ai-seo              -> AI search visibility check
```

### Full Build Stack
```
/skills:ui-ux-pro-max       -> Generate design system
/skills:frontend-design     -> Build components with polish
/skills:gsap-scrolltrigger  -> Scroll animations
/skills:motion-framer       -> Component animations
/skills:micro-interactions  -> Hover/click polish
/skills:schema-markup       -> Add structured data
```

### Full Pitch Stack
```
/skills:cold-email          -> Write outreach email
/skills:pricing-strategy    -> Design pricing tiers
/skills:competitor-alternatives -> Before/after comparisons
/skills:marketing-demand-acquisition -> Growth roadmap
```

---

## Code Review Graph (MCP)

Installed via `pip install code-review-graph`. MCP server configured in `.mcp.json`. Builds a structural knowledge graph of the codebase with Tree-sitter — tracks functions, classes, imports, call edges, and test coverage. Updates incrementally on every file save or git commit.

| Skill | Command | What It Does |
|-------|---------|-------------|
| **Review Changes** | `/review-changes` | Risk-scored review — detect_changes + blast radius + test gap analysis |
| **Explore Codebase** | `/explore-codebase` | Navigate codebase structure via graph instead of reading every file |
| **Debug Issue** | `/debug-issue` | Trace execution paths to root-cause bugs using get_affected_flows |
| **Refactor Safely** | `/refactor-safely` | Find all callers/dependents before changing anything |

**MCP tools available:** `detect_changes`, `get_impact_radius`, `query_graph`, `get_affected_flows`, `build_graph`, `graph_status`

**Usage:** Run `python -m code_review_graph build` in any project root to index it. Graph updates automatically after that.

---

## Adding New Skills

When installing a new skill:
1. Add the skill files to `.claude/commands/skills/{name}/`
2. Update this registry with the skill's details
3. Place it in the correct phase category
4. Add it to relevant skill stacking recipes if applicable

## MCP Server Setup

MCP servers need API keys configured in `.claude/settings.local.json` under `mcpServers`.
See `MCP-SERVERS.md` for full configuration instructions and API key setup guides.
