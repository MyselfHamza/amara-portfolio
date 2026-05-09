## Pitch Preparation

Generate a realistic, data-backed pitch package for a client. Run this after the prototype is built AND the strategy brief exists.

**CRITICAL RULE: Every single claim must be backed by real data you can find and verify. No made-up numbers. No vague promises. If you can't find the data, say "we'd need to verify this" — never fabricate.**

### Prerequisites
- `clients/{slug}/content/STRATEGY.md` exists (strategy brief done)
- Prototype is built and deployed (or at least screenshottable)
- CLIENT.md is fully populated

---

### Step 1: Market & Business Intelligence (THE HARD DATA)

This is where you do the heavy lifting. Search for REAL information:

**About their business specifically:**
- WebSearch: "{company name}" — find mentions, press, directory listings
- WebSearch: "{company name} {location}" — local presence
- WebSearch: "{company name} reviews" OR "{company name} testimonials"
- WebSearch: "{person name} {company name}" — talks, publications, mentions
- Check Companies House (UK) or equivalent for company filings if relevant
- Look for their projects/case studies mentioned elsewhere (government reports, client websites)

**About their industry economics:**
- What is the average deal size in their industry? (search "{industry} average project value {country}")
- What's the typical client acquisition cost? (search "{industry} client acquisition cost")
- How do clients find providers in this industry? (search "how do {audience} find {service type}")
- What % of their audience starts with Google? (search "{industry} buyer journey research")

**About their local market:**
- WebSearch: "{their service} {their city/region}" — who ranks? Do THEY rank?
- WebSearch: "{competitor name} {their city}" — how visible are competitors?
- Check Google Maps/business listings for them and competitors
- Look for local industry directories, frameworks, approved supplier lists

**About their web presence specifically:**
- WebSearch: "site:theirwebsite.com" — how many pages are indexed?
- Check if they appear in Google for their key services + location
- Look at their social media presence (LinkedIn company page, Twitter, etc.)
- Check Wayback Machine — how long have they had this site? Has it changed?

### Step 2: Realistic Impact Analysis

**DO NOT say "this will make you £X."**
**DO say "here's what the data suggests."**

Frame everything as conservative estimates with clear logic chains:

**Search Visibility Impact:**
- "Currently, searching '{their service} {their location}' shows [competitors X, Y, Z] but not you"
- "These competitors have [blogs/schema/faster sites] — here's what they're doing differently"
- "If you appeared in the top 5 results for just 3 key terms, based on search volume of ~[X] monthly searches in your area, even a [1-2%] click-through rate means [Y] new visitors per month"
- "Your average project is worth approximately £[Z] based on [source]. Even one additional enquiry per quarter that converts would mean £[Z] additional revenue per year"
- **Show the math. Let them do the calculation themselves.**

**Credibility Impact:**
- "We looked at what [specific competitor] shows on their site vs yours: [specific comparison]"
- "A procurement officer evaluating consultancies would see [this] on your site vs [that] on theirs"
- "Your case studies currently say '[actual one-sentence quote from their site]' — [competitor]'s case studies show [what competitor shows]"
- Don't say "you're losing clients" — say "here's what a potential client sees when they compare"

**Chatbot/Engagement Impact:**
- Only pitch this if it genuinely makes sense for their business model
- "Your potential clients visit your site during [business hours? evenings?] — we can check analytics if you share access"
- "A chatbot that can answer questions about [their specific services/frameworks/process] means a potential client gets answers immediately instead of sending an email and waiting"
- Frame it as convenience and professionalism, NOT as a lead generation machine (unless their volume justifies it)
- Be honest: for a small consultancy, a chatbot is a nice-to-have, not a revenue driver. Position it as credibility + convenience.

**What NOT to claim:**
- Don't promise specific revenue numbers ("this will generate £5K/month")
- Don't claim specific ranking positions ("you'll be #1 on Google")
- Don't fabricate conversion rates
- Don't compare to irrelevant benchmarks (a 3-person consultancy isn't an e-commerce site)
- Don't oversell the chatbot to a business that gets 50 website visits a month

### Step 3: Before/After Comparison

Use Chrome browser tools to create real comparisons:

**Their current site:**
- Screenshot their homepage, key service page, case studies page
- Note specific problems visible in the screenshot (generic template, thin content, broken elements)

**Your prototype:**
- Screenshot the same pages from the prototype
- Annotate what's different and why it matters (not "looks better" — "shows credibility because X")

**Competitor comparison:**
- Screenshot 1-2 competitor sites
- Show where the prototype matches or exceeds competitors
- This is powerful: "Here's [competitor]. Here's your current site. Here's what we built."

Save all screenshots to `clients/{slug}/pitch/screenshots/`

### Step 4: Pitch Script

Write a natural conversation script (not a sales deck) that Hamza can actually use.

**Tone:** Casual, peer-to-peer. This is an existing relationship, not a cold pitch.

**Structure:**
1. **Lead-in** (based on existing relationship): natural, not rehearsed
2. **The observation** (position as something you noticed, not something you're selling): "While working on your presentations, we noticed..."
3. **The problem** (use THEIR world, THEIR language): specific to their business
4. **The evidence** (show, don't tell): pull up their site vs competitor vs prototype
5. **The prototype** (surprise, not pitch): "We actually went ahead and built something..."
6. **The value** (realistic, data-backed): the conservative estimates from Step 2
7. **The offer** (not pricing yet): "This is just the design — we could also add [chatbot/SEO/CMS] but let's see what you think of this first"
8. **Let them react** — don't oversell. If the prototype is good, it sells itself.

**Pricing (only if they ask or seem interested):**
- Research what similar services cost in their market (WebSearch: "{service type} website cost UK 2026")
- Price relative to their deal sizes (a £500 website for someone who charges £15K per project is a no-brainer)
- Offer tiers but don't anchor too high — price for the relationship and the referral potential
- Be transparent: "The website itself is [price]. If you want us to add a chatbot that knows your services, that's [price]. SEO optimization and ongoing content is [price/month]."

### Step 5: Assemble Pitch Package

Save to `clients/{slug}/pitch/`:
- `PITCH.md` — the full pitch script
- `ROI-ANALYSIS.md` — all the data, math, and conservative estimates
- `COMPETITOR-COMPARISON.md` — side-by-side analysis
- `screenshots/` — before/after/competitor images
- `PRICING.md` — tiered pricing with rationale

### Integrity Check Before Finalizing

Go through the entire pitch and ask:
- [ ] Is every number sourced or clearly labeled as an estimate?
- [ ] Would this pitch still work if the client fact-checks every claim?
- [ ] Am I being honest about what the chatbot/SEO will realistically do for a business this size?
- [ ] Is the pricing fair for the value delivered AND the client's budget?
- [ ] Does this feel like a helpful recommendation or a hard sell?
- [ ] Would I be comfortable if the client showed this to a friend who's a web developer?

If any answer is no, fix it before presenting.
