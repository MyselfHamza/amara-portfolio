## Website Audit Skill

Comprehensive audit of a client's current website. Use Chrome browser tools to visit every page and document everything.

### Input
Client's website URL (from CLIENT.md)

### Step 1: Crawl All Pages
Visit every page on the site using Chrome browser tools. For each page document:
- **URL and page title**
- **Content** — headings, body text, CTAs, forms
- **Images** — what imagery they use, quality, relevance
- **Layout** — how content is structured, number of sections
- **Navigation** — how you get to this page, where it links to

Save all scraped text content to `clients/{slug}/content/pages/` (one file per page).

### Step 2: Design Audit
Score each area 1-5 and explain why:

| Area | What To Check |
|------|--------------|
| **First Impression** | Does it look professional? Modern? Trustworthy? What's the gut reaction in 3 seconds? |
| **Visual Identity** | Is there a consistent brand? Colors, fonts, imagery style? Or generic template? |
| **Typography** | Font choices, readability, hierarchy, size contrast between headings and body |
| **Color Scheme** | Intentional palette or default template colors? Contrast, accessibility |
| **Imagery** | Stock photos, custom, illustrations? Quality? Relevant to business? |
| **Whitespace** | Cramped or breathable? Does content feel organized? |
| **Mobile** | Does it work on mobile? Responsive? Touch targets? |
| **Consistency** | Do all pages feel like the same site? |

### Step 3: Content Audit
For each page:
- **Quality** — is the copy compelling or generic/thin?
- **Completeness** — are services explained properly? Do case studies have depth?
- **SEO basics** — does each page have a unique title, meta description, H1?
- **Trust signals** — testimonials, certifications, client logos, case study data?
- **CTAs** — is there a clear next step on every page? Contact form? Phone number?
- **Blog/content** — is there a blog? How often updated? Topics?
- **Lead capture** — newsletter signup? Downloadable resources? Chatbot?

### Step 4: Technical Quick Check
Using Chrome browser tools (console, network tab) or WebFetch:
- **Platform** — what's it built on? (view source, check for Wix/WordPress/Squarespace signatures)
- **Load speed** — does it feel slow? Large images? Heavy scripts?
- **Broken links** — any 404s or dead links?
- **SSL** — is it HTTPS?
- **Sitemap** — does /sitemap.xml exist?
- **Schema markup** — any structured data? (check view source)

### Step 5: Gap Analysis
List everything the site is MISSING that it should have:
- Missing pages (blog, detailed case studies, team page, FAQ)
- Missing features (chatbot, lead capture, newsletter, search)
- Missing content (thin descriptions, no data/metrics in case studies)
- Missing trust signals (no logos, hidden testimonials, no social proof)
- Missing SEO (no blog, no schema, no internal linking)

### Step 6: Asset Capture (MANDATORY — do not skip)

This step runs BEFORE the build phase. Every asset listed here must be physically downloaded and saved. If an asset cannot be found, note it explicitly so it can be sourced manually.

Create `clients/{slug}/content/assets/` and download the following:

#### Logo & Brand
- [ ] **Primary logo** — scrape from their site (check `<img>` tags in header, look for SVG or PNG). Save as `logo.svg` or `logo.png`
- [ ] **Logo variants** — dark background version, white version, favicon version if different
- [ ] **Favicon** — download from `/favicon.ico` or `<link rel="icon">` in `<head>`. Save as `favicon.ico` / `favicon.png`

Use Playwright to navigate to their site and run in console:
```js
// Find logo
document.querySelector('header img, .logo img, nav img')?.src
// Find favicon
document.querySelector('link[rel*="icon"]')?.href
```
Then download each URL with curl/fetch and save to assets/.

#### People & Team
- [ ] **Founder/owner photo** — check About page, Team page, homepage hero. Download and save as `founder.jpg`
- [ ] **Team member photos** — download each one, save as `team-{name}.jpg`
- [ ] **Any staff or advisor headshots** used on the site
- [ ] If no photos on site — check their LinkedIn profile photo using Playwright and note the URL in `assets/ASSETS.md` for manual download

#### Photography & Imagery
- [ ] **Hero image(s)** — the main background/hero photo on each page. Save as `hero-home.jpg`, `hero-about.jpg` etc.
- [ ] **Any real project photos / case study images** — save with descriptive names
- [ ] **Office/location photos** if present
- [ ] **Any charts, graphs, or data visuals** they already use

#### Brand Colors & Fonts (extract, don't download)
Run in browser console and save output to `assets/brand.md`:
```js
// Primary colors
getComputedStyle(document.querySelector('header') || document.body).backgroundColor
getComputedStyle(document.querySelector('h1') || document.body).color
// Fonts
getComputedStyle(document.body).fontFamily
getComputedStyle(document.querySelector('h1'))?.fontFamily
```
Also check `<link>` tags for Google Fonts imports and note the exact font names.

#### Save an Asset Manifest
After downloading, create `clients/{slug}/content/assets/ASSETS.md` listing:
- Every file downloaded and what it is
- Any assets NOT found and where to source them (e.g. "founder photo not on site — check LinkedIn: [URL]")
- Exact brand colors (hex) and font names extracted

**Rule: if an asset is not in `assets/` before building starts, the build will use a placeholder — and placeholders must be listed in ASSETS.md so nothing is forgotten.**

### Output
Update `clients/{slug}/CLIENT.md`:
- Problems Identified table (with specifics, not vague complaints)
- Scraped Content section (summary of what content exists)
- Assets section: list every asset captured and any gaps

Save detailed audit to `clients/{slug}/content/website-audit.md`
