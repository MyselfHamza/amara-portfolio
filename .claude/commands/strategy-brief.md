## Strategy Brief Skill

Run this AFTER research-client and audit-website are done. This is the brain — it reads all research and connects the dots into a single strategic document that drives every decision afterwards.

### Input
- `clients/{slug}/CLIENT.md` — must have client profile, business info, problems filled in
- `clients/{slug}/content/research-notes.md` — raw research
- `clients/{slug}/content/website-audit.md` — site audit

### What This Produces
A strategy brief at `clients/{slug}/content/STRATEGY.md` that answers the chain:

**WHO → WHAT → WHY → HOW → PITCH**

---

### Section 1: The Person (WHO)
Write a 2-3 paragraph profile as if briefing a salesperson before a meeting:
- Who is this person? Not just title — their personality, how they communicate, what they care about
- Are they technical or non-technical?
- Are they the decision-maker or do they need to convince someone else?
- What's their ego like? Do they see themselves as premium/innovative/traditional?
- How price-sensitive are they? (small business vs funded startup vs corporate)
- What's their relationship with us? (cold lead vs warm vs existing client)

### Section 2: The Business (WHAT)
Connect the person to their business context:
- What does the business actually do, in one sentence a child could understand?
- How does the business make money? (project fees, retainers, contracts, products)
- Who pays them? (individuals, companies, government, investors)
- How do those paying clients FIND them? (Google, referrals, tenders, word of mouth, LinkedIn)
- What's the typical deal size? (helps frame our pricing relative to their revenue)
- What's their competitive landscape? Who are they losing deals to?

### Section 3: Why They Need This (WHY)
This is the critical connection. Link their specific business situation to website problems.

**Use the competitor evidence to make them feel behind:**

The research phase produced `competitor-analysis.md` and `search-visibility.md`. Use these to build a clear picture:

1. **The Search Test** — "We searched for [exact terms their clients would use]. Here's what came up: [Competitor A], [Competitor B], [Competitor C]. You weren't there. These are the clients who are actively looking for what you do — and they're finding your competitors instead."

2. **The Comparison** — "Here's [Competitor X]'s website. They have detailed case studies with outcome data, a blog with 40+ articles, client logos, testimonials front and centre, and they rank on page 1 for [term]. Here's yours. One-sentence case studies, no blog, testimonials hidden in a carousel. If you were a [their client type] comparing the two, who would you trust more?"

3. **The Revenue Logic Chain** — for each problem, trace the path to money:
   - [Problem found in audit] → [who is affected by this] → [what they do instead] → [what that costs the client]
   - Be specific: use real competitor names, real search terms, real project values from Companies House or tender databases
   - Don't estimate what you can't prove. Say "based on [source], projects in your space are typically worth £X-Y" not "you're losing £50K"

4. **The "Do Nothing" Cost** — What happens if they keep the current site for another year?
   - Competitors are actively investing in their web presence (show evidence)
   - Their industry is moving towards digital-first procurement (show evidence if true)
   - Every month their site stays as-is, that's another month of invisible-to-search-traffic

**IMPORTANT: This is not about scaring them. It's about showing them reality with evidence. The evidence does the convincing — you just present it clearly.**

### Section 4: What To Build (HOW)
Based on WHO + WHAT + WHY, define:

**The Website's Job** — in one sentence, what must this website DO?
(e.g., "Convince a council procurement officer that Thrive Economics is the most credible, capable consultancy for their project")

**Priority Features** — ranked by impact on the website's job:
1. [Most impactful thing] — because [why, linked to business]
2. [Second most impactful] — because [why]
3. etc.

**Design Personality** — what should the site FEEL like?
- Not just "professional" — that's generic
- More like: "The calm confidence of a senior partner who doesn't need to shout — clean, authoritative, data-backed, with subtle sophistication that says 'we've been doing this for 15 years'"
- Link this to WHO the person is and WHO their audience is

**What NOT to do** — based on the client and audience:
- Don't do X because Y
- Don't do Z because their audience would see it as W

### Section 5: The Pitch (PITCH)
Write the actual pitch narrative — not a template, a REAL conversation plan:

**Opening** — how to bring it up (based on existing relationship):
- e.g., "We've been working on your presentations and noticed your website doesn't match the quality of your actual work..."

**The Hook** — the one thing that will make them lean in:
- What's their biggest pain point? Lead with that.
- Use THEIR language (from LinkedIn posts, website copy, industry jargon)

**The Demo** — what to show and in what order:
- Lead with the most impressive page
- Show something their competitor has that they don't
- Show the chatbot in action (even if it's a mockup)

**The ROI Argument** — must be realistic and verifiable:
- Search for their actual industry deal sizes (Companies House, industry reports, job listings, tender values)
- Search for their actual search visibility (do they rank for anything? do competitors?)
- Frame as conservative estimates, not promises: "If this brings even 1 extra enquiry per quarter..."
- Show the math transparently — let THEM do the multiplication
- Never fabricate numbers. If you can't find data, say "we'd need to research this together"
- A £1,500 website for someone who charges £15K per project = obvious ROI without needing to oversell

**Objection Handling** — predict what they'll say:
- "It's too expensive" → [response based on their revenue/deal size]
- "My current site is fine" → [response based on audit findings]
- "I don't have time for this" → [response: we handle everything, CMS means you never touch code]
- "I need to think about it" → [response: here's what you're losing while you think]

**Pricing Presentation** — three tiers, anchored:
- Tier 1 (anchor high): Full package — site + chatbot + SEO + CMS + ongoing
- Tier 2 (target): Site + chatbot + CMS (this is what you want them to pick)
- Tier 3 (foot in door): Site redesign only

**The Close** — how to end the conversation:
- Leave the prototype with them (deployed on Vercel, shareable URL)
- "This is already built — we just need to connect your CMS and go live"
- Create urgency without being pushy

---

### How To Write This Brief

1. Read ALL research and audit materials first
2. Think like a strategist, not a developer — every recommendation must trace back to business impact
3. Use the client's own words where possible (from their LinkedIn, their website, their industry)
4. Be specific — "councils" not "clients", "£15K Green Book appraisal" not "projects", "ESPO Framework" not "procurement"
5. The pitch section should feel like something Hamza can actually say out loud, not a corporate document

### After Writing
- Update CLIENT.md with the key decisions from the brief
- This document becomes the reference for design-direction and build phases
- Every design choice must trace back to something in this brief
