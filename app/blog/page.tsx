import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `Blog & Technical Insights | AI Software, SaaS & Cloud Architecture | ${SITE_NAME}`,
  description:
    "Deep-dive technical guides, architecture teardowns, and engineering insights on building multi-tenant SaaS platforms, custom AI automation workflows, and scaling digital systems for MENA and global markets.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Blog & Engineering Insights | ${SITE_NAME}`,
    description: "Technical articles, architecture teardowns, and software engineering playbooks.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630, alt: "Nexzoa Blog" }],
  },
};

const ARTICLES = [
  {
    id: "saas-architecture-nextjs-postgres",
    title: "How to Build a Multi-Tenant SaaS Platform with Next.js and PostgreSQL",
    category: "Architecture",
    readTime: "8 min read",
    date: "August 2026",
    summary:
      "A complete technical blueprint for implementing row-level security (RLS), custom domain routing, role-based access control (RBAC), and serverless connection pooling for production SaaS platforms.",
    tag: "Technical Guide",
  },
  {
    id: "ai-automation-middle-east-2026",
    title: "AI Workflow Automation for Middle Eastern Businesses: Real Use Cases in 2026",
    category: "AI & Automation",
    readTime: "6 min read",
    date: "August 2026",
    summary:
      "How forward-thinking companies in Saudi Arabia and Dubai are eliminating manual data entry by orchestrating custom LLM pipelines, Arabic document extraction, and WhatsApp automated dispatch.",
    tag: "Regional Case Study",
  },
  {
    id: "sri-lanka-software-companies-guide",
    title: "Top Software Development Companies in Sri Lanka: Ecosystem & Engineering Guide",
    category: "Ecosystem",
    readTime: "10 min read",
    date: "August 2026",
    summary:
      "An in-depth analysis of Colombo's premier software engineering studios, tech stacks, and why global founders are partnering with Sri Lankan software talent over traditional agencies.",
    tag: "Ecosystem Teardown",
  },
  {
    id: "saas-development-cost-breakdown",
    title: "How Much Does Custom SaaS Development Cost in 2026? Transparent Breakdown",
    category: "Strategy",
    readTime: "7 min read",
    date: "August 2026",
    summary:
      "A realistic, line-by-line cost guide for scoping discovery sprints, MVP validation, cloud infrastructure (AWS/Vercel), database hosting, and post-launch maintenance for early-stage founders.",
    tag: "Cost & Scoping",
  },
  {
    id: "n8n-vs-custom-python-pipelines",
    title: "n8n vs Custom Python AI Pipelines: Which Automation Approach is Right for You?",
    category: "AI & Automation",
    readTime: "5 min read",
    date: "August 2026",
    summary:
      "Comparing low-code automation (n8n, Zapier) against custom Python/FastAPI microservices in terms of latency, rate limits, enterprise security, and long-term operating costs.",
    tag: "Engineering Comparison",
  },
  {
    id: "saudi-vision-2030-software-opportunities",
    title: "Vision 2030 Digital Transformation: Software Opportunities for Saudi Tech Ventures",
    category: "Middle East Tech",
    readTime: "8 min read",
    date: "August 2026",
    summary:
      "Analyzing the surge in Saudi FinTech, PropTech, and logistics software demand, and how startups are leveraging cloud-native architectures to meet Monsha'at and ZATCA compliance.",
    tag: "Regional Insight",
  },
  {
    id: "pickme-tech-stack-analysis",
    title: "Deconstructing High-Concurrency Architecture: Tech Stack Lessons from PickMe Sri Lanka",
    category: "Architecture",
    readTime: "9 min read",
    date: "August 2026",
    summary:
      "Examining real-time geolocation matching, event streaming backends, microservices routing, and how modern startups can engineer similar high-load consumer applications.",
    tag: "System Design",
  },
  {
    id: "generative-engine-optimization-guide",
    title: "What is Generative Engine Optimization (GEO) and Why It Dictates Future Search",
    category: "GEO & AI Search",
    readTime: "6 min read",
    date: "August 2026",
    summary:
      "How Perplexity, ChatGPT Search, and Google AI Overviews discover and cite software companies, and how engineering teams should structure llms.txt and entity schema.",
    tag: "GEO Playbook",
  },
];

export default function BlogIndexPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog & Insights",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Nexzoa Technical Blog & Insights",
    url: `${SITE_URL}/blog`,
    description: "Technical articles on SaaS architecture, AI automation, and system engineering.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent blur-[100px] -z-10" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80 font-medium">Blog &amp; Insights</span>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/80 text-xs font-semibold mb-6 font-mono">
            <span>Engineering Playbooks &bull; Architecture &bull; Ecosystem</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Technical Insights &amp; Software Architecture
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            Practical engineering playbooks, system design breakdowns, and actionable guides on building multi-tenant SaaS, intelligent AI automation, and cloud platforms.
          </p>
        </header>

        {/* Articles Grid */}
        <section className="mb-24 space-y-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="p-6 sm:p-8 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/50 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/80 font-semibold font-mono text-[11px]">
                  {article.category}
                </span>
                <span>&bull;</span>
                <span>{article.readTime}</span>
                <span>&bull;</span>
                <span>{article.date}</span>
                <span className="ml-auto text-[11px] font-medium text-white/40 font-mono">{article.tag}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white/90 transition-colors mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {article.title}
              </h2>

              <p className="text-sm text-white/60 leading-relaxed mb-4 font-light">
                {article.summary}
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-white/50 font-mono">
                <span>Article summary &bull; Engineering whitepaper in production</span>
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="my-16 rounded-3xl border border-white/[0.08] bg-[#0a0a0c]/90 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Need technical advice for your next project?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm sm:text-base font-light leading-relaxed">
            Talk directly with our lead software architects.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-2xl bg-white text-black px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Start a Project
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] text-white px-8 py-4 text-sm font-semibold hover:bg-white/10 transition-all"
            >
              Email hello@nexzoa.dev
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
