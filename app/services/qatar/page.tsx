import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `Software Development Company Qatar | AI SaaS Engineering | ${SITE_NAME}`,
  description:
    "Nexzoa builds AI-powered software, enterprise SaaS, and automation platforms for businesses in Qatar. Aligned with Qatar National Vision 2030 digital economy goals.",
  keywords: [
    "software development company Qatar",
    "software development Doha",
    "AI software engineering Qatar",
    "SaaS development Qatar",
    "custom software development Doha",
    "QSTP software partner",
    "Qatar Vision 2030 technology",
    "Nexzoa Qatar",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/qatar`,
  },
  openGraph: {
    title: `Software Development Company Qatar | AI & SaaS | ${SITE_NAME}`,
    description:
      "Enterprise digital infrastructure, custom SaaS platforms, and AI automation systems built for Qatari businesses and institutions.",
    url: `${SITE_URL}/services/qatar`,
    type: "website",
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630, alt: "Nexzoa Qatar Software Development" }],
  },
};

const QATAR_FAQS = [
  {
    question: "Does Nexzoa work with businesses and startups in Qatar?",
    answer:
      "Yes. Nexzoa provides direct software engineering for companies, startups, and institutions in Doha, Lusail, and throughout Qatar. We operate remote-first sprints with strong alignment to Qatar Standard Time (AST/UTC+3).",
  },
  {
    question: "How does Nexzoa support Qatar National Vision 2030?",
    answer:
      "Nexzoa engineers high-performance cloud applications, custom AI workflows, and digital knowledge platforms that support Qatar's transition into an advanced, knowledge-based economy with robust data security.",
  },
  {
    question: "Can Nexzoa build bilingual English and Arabic applications for Qatar?",
    answer:
      "Yes. We specialize in building responsive bilingual web applications with full right-to-left (RTL) Arabic support, Qatari Riyal (QAR) payment gateways, and localized content workflows.",
  },
  {
    question: "What industries in Qatar does Nexzoa serve?",
    answer:
      "We build custom systems for Energy & Oilfield logistics, FinTech portals compliant with QCB standards, Smart City interfaces (Lusail), EdTech platforms, and B2B SaaS solutions.",
  },
];

export default function QatarServicePage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/qatar#service`,
    name: "AI & SaaS Software Development for Qatar",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: siteUrl("/nexzoa.jpg"),
    },
    areaServed: [
      { "@type": "City", name: "Doha" },
      { "@type": "City", name: "Lusail" },
      { "@type": "Country", name: "Qatar" },
    ],
    description:
      "Enterprise digital infrastructure, AI automation pipelines, and custom SaaS platforms for Qatari businesses aligned with Qatar National Vision 2030.",
    serviceType: ["AI Software Engineering", "SaaS Development", "Enterprise Software"],
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
        name: "Qatar",
        item: `${SITE_URL}/services/qatar`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QATAR_FAQS.map((faq) => ({
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
          <span className="text-white/80 font-medium">Qatar &bull; Doha</span>
        </nav>

        {/* Arabic Callout */}
        <div className="mb-8 p-5 sm:p-6 rounded-[24px] bg-[#0a0a0c]/90 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-right sm:text-left">
            <p className="text-sm sm:text-base font-bold text-white/90" dir="rtl">
              هندسة برمجيات وحلول رقمية متقدمة لدولة قطر
            </p>
            <p className="text-xs text-white/50 mt-1 font-light" dir="rtl">
              نكسزوا: نبني بنية تحتية رقمية ذكية وأنظمة سحابية تدعم رؤية قطر الوطنية 2030 للتحول الرقمي.
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-white/80 text-[11px] font-medium border border-white/[0.08] self-start sm:self-center">
            <img src="/flags/qa.svg" alt="Qatar" width={16} height={12} className="w-4 h-3 rounded-[2px] object-cover shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Qatar Vision 2030</span>
          </span>
        </div>

        {/* Hero */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-xs font-medium mb-6 font-mono">
            Doha &bull; Lusail &bull; QSTP &bull; Qatar Engineering Partner
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Engineering Digital Systems for Qatar&apos;s Knowledge Economy
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            Qatar&apos;s 2030 vision demands world-class digital infrastructure. Nexzoa delivers it. We build resilient enterprise SaaS platforms, AI automation systems, and high-performance web applications tailored to Qatari commercial requirements.
          </p>
        </header>

        {/* Value Pillars */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Timezone Overlap</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>AST Timezone Synchrony</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Full working day alignment with Doha (UTC+3). Our Colombo engineering team collaborates with your stakeholders in real-time on Slack and Notion.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Security</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>High Security &amp; Data Control</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Architectures compliant with Qatari data localization guidelines, encryption at rest, and role-based access for mission-critical operations.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Efficiency</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Zero Agency Bloat</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Work directly with senior software architects. Swift code delivery, continuous deployment, and transparent sprint reporting with zero middle layers.
            </p>
          </div>
        </section>

        {/* Qatar Industry Focus */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Capabilities built for Qatar&apos;s industry sectors.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Energy &amp; Logistics Telemetry</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Real-time supply chain monitoring, fleet tracking interfaces, and automated workflow triggers for industrial and energy logistics.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>FinTech &amp; QCB Compliance</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Bespoke financial portals, QAR billing engines, automated invoicing, and institutional security for digital transactions.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Smart City &amp; Real Estate Portals</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Tenant management systems, interactive amenity booking, and digital operations for Lusail and Doha property developers.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>AI Workflow &amp; Document Extraction</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Intelligent document parsing for Arabic and English contracts, automated compliance verification, and custom LLM tools.
              </p>
            </div>
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
            {QATAR_FAQS.map((faq, i) => (
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
              href="/services/saudi-arabia"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] text-white/70 hover:text-white transition-all group"
            >
              <img src="/flags/sa.svg" alt="Saudi Arabia" width={16} height={12} className="w-4 h-3 rounded-[2px] object-cover" />
              <span>Saudi Arabia (KSA)</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              href="/services/dubai"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] text-white/70 hover:text-white transition-all group"
            >
              <img src="/flags/ae.svg" alt="UAE" width={16} height={12} className="w-4 h-3 rounded-[2px] object-cover" />
              <span>Dubai &bull; UAE</span>
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
            Start Your Qatar Engineering Project
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Reach out for a confidential technical evaluation of your product architecture.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="start-project-button inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-[14px] font-semibold tracking-tight text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Discuss Your Project
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
