import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `Software Development Company for Saudi Arabia | AI & SaaS | ${SITE_NAME}`,
  description:
    "Nexzoa is a trusted AI software engineering studio partnering with Saudi Arabian businesses. Custom SaaS, AI automation, and full-stack development aligned with Vision 2030 digital transformation goals.",
  keywords: [
    "software development company Saudi Arabia",
    "software development Riyadh",
    "AI automation Saudi Arabia",
    "SaaS development Saudi Arabia",
    "custom software development KSA",
    "ZATCA compliance software",
    "Vision 2030 software partner",
    "hire software developers Saudi Arabia",
    "Nexzoa Saudi Arabia",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/saudi-arabia`,
  },
  openGraph: {
    title: `Software Development Company for Saudi Arabia | ${SITE_NAME}`,
    description:
      "Custom AI software engineering, enterprise SaaS platforms, and intelligent automation built for Saudi Arabian startups and enterprises.",
    url: `${SITE_URL}/services/saudi-arabia`,
    type: "website",
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630, alt: "Nexzoa Saudi Arabia Software Development" }],
  },
};

const SAUDI_FAQS = [
  {
    question: "Does Nexzoa work directly with Saudi Arabian companies?",
    answer:
      "Yes. Nexzoa actively partners with startups, scaleups, and enterprises in Riyadh, Jeddah, Dammam, and across Saudi Arabia. We operate on direct engineering sprints aligned to Arabian Standard Time (AST/UTC+3) with seamless remote collaboration on Slack and Notion.",
  },
  {
    question: "Can Nexzoa build bilingual Arabic and English platforms?",
    answer:
      "Yes. We engineer fully localized bilingual web and mobile applications with right-to-left (RTL) Arabic typography, dynamic language switching, and culturally tailored user interfaces for Saudi users.",
  },
  {
    question: "How does Nexzoa support Saudi Vision 2030 digital goals?",
    answer:
      "Nexzoa engineers cloud-native systems that support Vision 2030 pillars: rapid AI adoption, automation of manual business processes, SME digitalization under Monsha'at guidelines, and integration with national standards including ZATCA Phase 2 e-invoicing.",
  },
  {
    question: "What industries in Saudi Arabia does Nexzoa build software for?",
    answer:
      "We specialize in FinTech, PropTech (Real Estate), HealthTech, Logistics & Supply Chain, E-Commerce, and B2B SaaS platforms designed specifically for the Saudi commercial landscape.",
  },
  {
    question: "What is the typical engagement and payment structure for Saudi clients?",
    answer:
      "We offer milestone-based and two-week sprint billing with formal non-disclosure agreements (NDAs) signed prior to discovery. Invoices can be settled via international corporate bank transfer in USD or SAR.",
  },
];

export default function SaudiArabiaServicePage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/saudi-arabia#service`,
    name: "AI Software Development for Saudi Arabia",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: siteUrl("/nexzoa.jpg"),
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Dammam" },
    ],
    description:
      "Custom AI software engineering, multi-tenant SaaS development, and business workflow automation for Saudi Arabian enterprises and startups aligned with Vision 2030.",
    serviceType: ["AI Software Engineering", "SaaS Development", "Business Automation"],
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: "Saudi Arabia",
        item: `${SITE_URL}/services/saudi-arabia`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SAUDI_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Background ambient light */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/[0.02] via-white/[0.01] to-transparent blur-[120px] -z-10" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/80 font-medium">Saudi Arabia</span>
        </nav>

        {/* Arabic Cultural Badge & Callout */}
        <div className="mb-8 p-5 sm:p-6 rounded-[24px] bg-[#0a0a0c]/90 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-right sm:text-left">
            <p className="text-sm sm:text-base font-bold text-white/90" dir="rtl">
              شريكك الموثوق في هندسة البرمجيات وأنظمة الذكاء الاصطناعي
            </p>
            <p className="text-xs text-white/50 mt-1 font-light" dir="rtl">
              نكسزوا: استوديو متخصص في بناء منصات SaaS وأنظمة الأتمتة الذكية للشركات السعودية المتوافقة مع رؤية 2030.
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-white/80 text-[11px] font-medium border border-white/[0.08] self-start sm:self-center">
            <img src="/flags/sa.svg" alt="Saudi Arabia" width={16} height={12} className="w-4 h-3 rounded-[2px] object-cover shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Vision 2030 Aligned</span>
          </span>
        </div>

        {/* Hero */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-xs font-medium mb-6 font-mono">
            Riyadh &bull; Jeddah &bull; Dammam &bull; Direct Remote Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            AI Software Engineering Partner for Saudi Arabia&apos;s Digital Vision
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            Nexzoa builds the digital infrastructure Saudi Arabian businesses need to lead Vision 2030&apos;s tech ambitions. From enterprise SaaS platforms and intelligent LLM workflows to high-speed web systems, we deliver engineering precision with zero agency layers.
          </p>
        </header>

        {/* Why Saudi Businesses Choose Nexzoa */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Timezone Sync</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>AST Timezone Overlap</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Based in Colombo (UTC+5:30), our working hours overlap seamlessly with Riyadh (UTC+3). Your team gets real-time synchronous collaboration throughout the business day on Slack and Notion.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Regulatory</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>ZATCA &amp; Compliance Ready</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              We architect databases and API endpoints to comply with Saudi financial regulations, Phase 2 e-invoicing standards, and regional data governance requirements.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Direct Model</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Direct Senior Engineers</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Saudi founders and CTOs work directly with lead architects. Fast turnaround, transparent sprint roadmaps, and zero inflated agency management overheads.
            </p>
          </div>
        </section>

        {/* Services Built for the Saudi Market */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Software capabilities for the Saudi commercial ecosystem.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Custom SaaS &amp; Multi-Tenant Platforms</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Scalable web platforms with role-based access, multi-currency billing (SAR/USD), and automated onboarding for Saudi B2B and consumer markets.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>AI Workflow &amp; Process Automation</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Automate manual operations with custom LLM pipelines, intelligent document extraction, and seamless CRM/ERP integrations that save hundreds of operational hours.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>PropTech &amp; Real Estate Systems</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                High-speed property portals, automated lease workflows, and tenant management portals tailored for the booming Saudi real estate sector.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>FinTech &amp; Payment Gateway Integrations</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Secure integration with regional payment providers (Mada, Moyasar, HyperPay, STC Pay) alongside bulletproof transaction tracking and ledger syncing.
              </p>
            </div>
          </div>
        </section>

        {/* Alignment with Vision 2030 */}
        <section className="mb-20 p-8 sm:p-10 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Vision 2030</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Supporting Saudi Vision 2030 Digital Goals
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-4 font-light">
              Under Vision 2030 and programs led by the Ministry of Communications and Information Technology (MCIT) and Monsha&apos;at, Saudi Arabia is rapidly establishing itself as the premier digital hub of the Middle East.
            </p>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              Nexzoa assists local enterprises and emerging startups in accelerating this transition by engineering scalable, cloud-first systems that minimize infrastructure costs and maximize operational throughput.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Q&amp;A</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {SAUDI_FAQS.map((faq, i) => (
              <div key={i} className="p-6 rounded-[22px] bg-[#0a0a0c]/90 border border-white/[0.06]">
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>{faq.question}</h3>
                <p className="text-sm text-white/55 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross GCC Navigation */}
        <section className="mb-16 p-6 sm:p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Exploring other GCC markets?</h4>
            <p className="text-xs text-white/45 font-light">View our dedicated regional engineering hubs:</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link
              href="/services/dubai"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] text-white/70 hover:text-white transition-all group"
            >
              <img src="/flags/ae.svg" alt="UAE" width={16} height={12} className="w-4 h-3 rounded-[2px] object-cover" />
              <span>Dubai &bull; UAE</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              href="/services/qatar"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] text-white/70 hover:text-white transition-all group"
            >
              <img src="/flags/qa.svg" alt="Qatar" width={16} height={12} className="w-4 h-3 rounded-[2px] object-cover" />
              <span>Qatar (Doha)</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              href="/services/mena"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] text-white/70 hover:text-white transition-all group"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/60 group-hover:text-white">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span>MENA Hub</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Start Your Saudi Arabia Project with Nexzoa
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Contact us for a confidential, NDA-backed technical assessment of your software architecture.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="start-project-button inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-[14px] font-semibold tracking-tight text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Discuss Your Saudi Project
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white text-[14px] font-medium border border-white/[0.08] hover:border-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
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
