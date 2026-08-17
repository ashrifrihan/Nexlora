import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, siteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `Custom Software Engineering Services | AI, SaaS, Automation | ${SITE_NAME}`,
  description:
    "Explore Nexzoa's engineering capabilities: Custom AI software, multi-tenant SaaS platforms, intelligent workflow automation, and enterprise web architecture. Serving clients in Saudi Arabia, UAE, Qatar, and globally.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `Custom Software Engineering Services | ${SITE_NAME}`,
    description: "End-to-end software engineering, AI systems, and SaaS platforms built for scale.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630, alt: "Nexzoa Services" }],
  },
};

const SERVICES_LIST = [
  {
    id: "ai-engineering",
    title: "AI Software Engineering",
    tagline: "LLM Pipelines, RAG Systems & Autonomous Workflow Agents",
    description:
      "We design and build production-grade AI systems that integrate directly into your operations. From retrieval-augmented generation (RAG) on proprietary documents to multi-agent pipelines and intelligent classification engines.",
    deliverables: [
      "Custom LLM API Integrations (OpenAI, Claude, Llama 3)",
      "Vector Databases & Semantic Search (pgvector, Pinecone)",
      "Autonomous Multi-Agent Task Orchestration",
      "Document Extraction & Data Normalization",
    ],
  },
  {
    id: "saas-development",
    title: "Custom SaaS Platform Engineering",
    tagline: "Multi-Tenant Cloud Architectures from MVP to Scale",
    description:
      "Full-stack SaaS application development engineered for high reliability, rapid user onboarding, and enterprise security. Built with Next.js, TypeScript, PostgreSQL, and scalable authentication.",
    deliverables: [
      "Multi-Tenant Database & Role-Based Access Control (RBAC)",
      "Stripe & Regional Payment Gateway Integrations",
      "Real-Time Telemetry & Event Webhooks",
      "Automated CI/CD & Zero-Downtime Deployments",
    ],
  },
  {
    id: "workflow-automation",
    title: "AI Workflow & Business Automation",
    tagline: "Eliminate Manual Bottlenecks Across CRM & ERP Systems",
    description:
      "Custom automated pipelines that connect your databases, email systems, CRMs, and customer touchpoints. Replace brittle Zapier workflows with high-throughput, code-level orchestration.",
    deliverables: [
      "n8n and Custom Python Automation Pipelines",
      "CRM & ERP Bidirectional Synchronization",
      "Automated WhatsApp & Customer Support Routing",
      "ZATCA E-Invoicing & Financial Event Triggers",
    ],
  },
  {
    id: "web-architecture",
    title: "Full-Stack Web & Dashboard Architecture",
    tagline: "Sub-100ms Performance & Executive Analytics",
    description:
      "High-velocity web applications, enterprise client portals, and real-time operational business intelligence dashboards designed for clarity and speed.",
    deliverables: [
      "Sub-100ms TTFB & 95+ Core Web Vitals",
      "Live Streaming Analytics & KPI Dashboards",
      "Enterprise Grade UI/UX Design Systems",
      "SEO & GEO Structured Data Optimization",
    ],
  },
];

export default function ServicesPage() {
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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent blur-[100px] -z-10" />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80 font-medium">Services</span>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/80 text-xs font-semibold mb-6 font-mono">
            <span>Engineering Capabilities &bull; End-to-End Delivery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Engineering Services Built for Modern Digital Operations
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            We partner with ambitious startups and enterprises across Saudi Arabia, UAE, Qatar, and worldwide to design, build, and deploy mission-critical software systems without agency bloat.
          </p>
        </header>

        {/* Services List */}
        <section className="mb-24 space-y-12">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2 font-mono">
                    Capability 0{index + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {service.title}
                  </h2>
                  <p className="text-sm font-medium text-white/80 mb-4">{service.tagline}</p>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 font-light">{service.description}</p>
                </div>

                <div className="lg:w-80 shrink-0 p-5 rounded-2xl bg-black/60 border border-white/[0.06]">
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3 font-mono">Key Deliverables</h3>
                  <ul className="space-y-2 text-xs text-white/70">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-white/40 font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Regional Hubs & GEO Silos */}
        <section className="mb-24 p-8 sm:p-12 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06]">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Geographic Specialization &amp; Timezone Alignment
            </h2>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              We provide remote-first engineering with dedicated alignment for Gulf Standard Time (GST/AST) and international business hubs. Explore our localized solutions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services/saudi-arabia"
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all group"
            >
              <div className="mb-3">
                <img src="/flags/sa.svg" alt="Saudi Arabia" width={24} height={18} className="w-6 h-4.5 rounded-[2px] object-cover" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Saudi Arabia
              </h3>
              <p className="text-xs text-white/50 mt-1 font-light">Vision 2030, ZATCA e-invoicing &amp; AST timezone</p>
            </Link>

            <Link
              href="/services/dubai"
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all group"
            >
              <div className="mb-3">
                <img src="/flags/ae.svg" alt="United Arab Emirates" width={24} height={18} className="w-6 h-4.5 rounded-[2px] object-cover" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Dubai &amp; UAE
              </h3>
              <p className="text-xs text-white/50 mt-1 font-light">DIFC FinTech, PropTech &amp; fast-track MVP sprints</p>
            </Link>

            <Link
              href="/services/qatar"
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all group"
            >
              <div className="mb-3">
                <img src="/flags/qa.svg" alt="Qatar" width={24} height={18} className="w-6 h-4.5 rounded-[2px] object-cover" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Qatar (Doha)
              </h3>
              <p className="text-xs text-white/50 mt-1 font-light">Qatar Vision 2030, QSTP &amp; enterprise logistics</p>
            </Link>

            <Link
              href="/services/mena"
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all group"
            >
              <div className="mb-3">
                <svg className="w-6 h-4.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                MENA Region Hub
              </h3>
              <p className="text-xs text-white/50 mt-1 font-light">Kuwait, Bahrain, Oman, Jordan &amp; Egypt overview</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 rounded-3xl border border-white/[0.08] bg-[#0a0a0c]/90 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Ready to engineer your platform?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm sm:text-base font-light leading-relaxed">
            Contact our engineering team for an initial architecture review and fixed-scope estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-2xl bg-white text-black px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Request a Technical Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
