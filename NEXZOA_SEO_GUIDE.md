# Nexzoa — International SEO Master Guide
## Why Google shows "nexon" instead of you, and how to fix everything

---

## 🔴 The Root Problem

Google has never heard of "nexzoa." When it sees an unknown word, it guesses the closest
known brand — in this case "nexon" (a massive gaming company). Your job is to make Google
*associate the word "nexzoa" exclusively with your brand*.

This takes 3 pillars:
1. **Technical SEO** — Your site must be crawlable, fast, and properly structured
2. **Brand Mentions** — Google must see "nexzoa" cited across the internet
3. **Content** — You need pages that use your brand name naturally

---

## ✅ PILLAR 1 — Technical SEO (Do This Week)

### Step 1: Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → `https://nexzoa.in`
3. Verify using the HTML meta tag method (paste it into your layout.tsx `<head>`)
4. Submit your sitemap: `https://nexzoa.in/sitemap.xml`
5. Request indexing of your homepage manually (URL Inspection → Request Indexing)

### Step 2: Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site (Bing powers DuckDuckGo too — don't skip this)
3. Import your sitemap

### Step 3: Google Business Profile
1. Go to https://business.google.com
2. Create a profile for "Nexzoa"
3. This creates a Knowledge Panel — when people search "nexzoa," YOUR info box
   appears on the right side of Google. This is the #1 fastest win.

### Step 4: Core Web Vitals (Performance)
Run https://pagespeed.web.dev/ on your homepage and fix:
- LCP (Largest Contentful Paint) < 2.5s
- CLS (Cumulative Layout Shift) < 0.1
- FID / INP < 200ms

Next.js tips:
```tsx
// Use next/image for ALL images — auto-optimizes them
import Image from "next/image";

// Use next/font — eliminates font layout shift
import { Inter } from "next/font/google";

// Add this to next.config.js for compression
const nextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
```

---

## ✅ PILLAR 2 — On-Page SEO (Every Page Needs This)

### Page-level metadata template
Each page should have its own metadata object. Example for your homepage:

```tsx
// app/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexzoa — Engineering Intelligent Systems | AI SaaS & Automation",
  description:
    "Nexzoa delivers AI-native software, full-stack SaaS platforms, automation workflows and scalable digital solutions for ambitious businesses.",
  openGraph: {
    title: "Nexzoa — Engineering Intelligent Systems",
    description: "...",
    url: "https://nexzoa.in",
  },
};
```

### H1 Tag Rules
- Every page must have EXACTLY ONE `<h1>`
- The h1 on your homepage must contain the word "Nexzoa"
- Example: `<h1>Welcome to Nexzoa — Custom Software & AI Systems</h1>`

### URL Structure
Good:  `nexzoa.in`
Bad:   `nexzoa.in/page?id=3`

### Image ALT Text
Every image needs descriptive alt text:
```tsx
<Image src="/team.jpg" alt="Nexzoa team working on a client project" />
```

---

## ✅ PILLAR 3 — Brand Authority (The "nexzoa" keyword fix)

This is why Google doesn't know your brand name yet. You need external mentions.

### Immediate actions (this week):

| Platform | Action | Why |
|---|---|---|
| **Instagram** | Post consistently at @nexzoa.io — link to nexzoa.in in bio | Social signals |
| **Google Business** | Create a verified listing for "Nexzoa" | Knowledge Panel |
| **LinkedIn** | Create a Company Page for Nexzoa | High-authority backlink |
| **Facebook** | Create a Page for "Nexzoa" | Brand mention |
| **Twitter/X** | Create @nexzoa account | Brand mention |
| **YouTube** | Create a Nexzoa channel | Google owns YouTube |
| **GitHub** | Create org github.com/nexzoa | Developer credibility |
| **Crunchbase** | Add Nexzoa as a company | Business directory |
| **IndiaMART / Justdial** | List your business | India-specific authority |

### Medium-term (next 2 months):
- Get 1-2 articles or mentions in Indian tech/business blogs that spell out "Nexzoa"
- Submit to directories: Clutch.co, GoodFirms.co, Sortlist
- Ask clients to leave a Google Business review mentioning "Nexzoa"
- Create a Wikipedia "Nexzoa" article once you have enough external references

---

## ✅ PILLAR 4 — Keyword Strategy

### Tier 1 — Brand Keywords (you MUST own these)
```
nexzoa
nexzoa.in
nexzoa review
nexzoa services
```
These should all return YOUR site as the #1 result within 3-4 months.

### Tier 2 — Service Keywords (what you actually do)
```
custom software company
AI workflow automation
operational software platform
digital platform development
SaaS development company
```

### Tier 3 — Long-tail (easy wins, less competition)
```
custom AI-powered business software in India
scalable Next.js software development agency
operational software for growing companies
```

---

## ✅ PILLAR 5 — Content Strategy

Google rewards websites that publish useful content.

### 1. A Blog Section (Future Expansion)
URL: `nexzoa.in/blog/`

### 2. Case Studies
URL: `nexzoa.in/#projects` (Linked to Projects on homepage)

### 3. FAQ Section
URL: `nexzoa.in/#faq` (Available on homepage)
Answers "What is Nexzoa?" and "What does Nexzoa do?" explicitly.

---

## ✅ PILLAR 6 — Schema / Structured Data

Already included in your project `layout.tsx` — connects your brand name to your domain.

---

## 📅 30-Day SEO Action Plan

### Week 1 — Technical Foundation
- [ ] Set up Google Search Console → verify → submit sitemap → request index
- [ ] Set up Bing Webmaster Tools
- [ ] Create Google Business Profile for "Nexzoa"
- [ ] Run PageSpeed Insights → fix critical issues

### Week 2 — Brand Presence
- [ ] Create LinkedIn Company Page (nexzoa)
- [ ] Create Twitter/X account (@nexzoa)
- [ ] Create YouTube channel (Nexzoa)
- [ ] Create Facebook Business Page (Nexzoa)
- [ ] Update Instagram bio link to https://nexzoa.in

### Week 3 — Content Creation
- [ ] Compile case studies under #projects
- [ ] Ensure FAQ has clear brand mentions of "Nexzoa"

### Week 4 — Directory Listings
- [ ] Submit to Clutch.co
- [ ] Submit to GoodFirms.co
- [ ] Submit to Crunchbase
- [ ] Submit to IndiaMART / Justdial

---

*Generated for nexzoa.in | Instagram: @nexzoa.io*
