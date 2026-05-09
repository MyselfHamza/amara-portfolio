---
name: ui-ux-pro-max
description: UI/UX design intelligence — 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types across 15 stacks. Use for design system generation, style selection, color palette matching, and typography pairing.
---

# UI UX Pro Max — Design Intelligence

Search the design database using the CLI:

```bash
py .claude/commands/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

**Domains:** `product`, `style`, `typography`, `color`, `landing`, `chart`, `ux`

**Stack search:**
```bash
py .claude/commands/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack <stack>
```
**Stacks:** `html-tailwind`, `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`

**Design System Generator:**
```bash
py .claude/commands/skills/ui-ux-pro-max/scripts/design_system.py "<project description>"
```

Use this to generate tailored design systems for client projects based on their industry, audience, and requirements.
