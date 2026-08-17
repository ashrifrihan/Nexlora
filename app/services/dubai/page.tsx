import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `Software Development Agency Dubai | AI & SaaS Engineering | ${SITE_NAME}`,
  description:
    "Nexzoa partners with Dubai startups, DIFC FinTechs, and UAE enterprises to build custom AI software, SaaS platforms, and automation systems. Fast delivery, transparent pricing, direct engineering.",
  keywords: [
    "software development agency Dubai",
    "software development company UAE",
    "AI software engineering Dubai",
    "SaaS development Dubai",
    "custom software development UAE",
    "DIFC FinTech software development",
    "PropTech developers Dubai",
    "Nexzoa Dubai",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/dubai`,
  },
  openGraph: {
    title: `Software Development Agency Dubai | AI & SaaS | ${SITE_NAME}`,
    description:
      "High-velocity software engineering, AI workflow automation, and custom SaaS platforms for Dubai startups and UAE enterprises.",
    url: `${SITE_URL}/services/dubai`,
    type: "website",
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630, alt: "Nexzoa Dubai Software Development" }],
  },
};

const DUBAI_FAQS = [
  {
    question: "How do Dubai startups and businesses work with Nexzoa?",
    answer:
      "Nexzoa operates a transparent remote-first engineering model. Dubai founders and product leads work directly with our lead software engineers via dedicated Slack channels, live Loom updates, and weekly sprint demos aligned to Gulf Standard Time (GST/UTC+4).",
  },
  {
    question: "Does Nexzoa have a physical office in Dubai?",
    answer:
      "Nexzoa is headquartered in Colombo, Sri Lanka and operates as a direct remote engineering studio. This allows us to offer world-class engineering quality and rapid turnaround without passing inflated Dubai office overhead onto our clients.",
  },
  {
    question: "How fast can Nexzoa build and launch an MVP in Dubai?",
    answer:
      "A typical production-ready MVP takes between 4 to 8 weeks. We utilize battle-tested Next.js, TypeScript, and cloud-native building blocks to ensure your platform is scalable from the day of initial beta launch.",
  },
  {
    question: "What UAE industries does Nexzoa specialize in?",
    answer:
      "We have deep engineering expertise across DIFC FinTech platforms, real estate PropTech management systems, luxury e-commerce engines, logistics tracking dashboards, and AI customer automation workflows.",
  },
];

export default function DubaiServicePage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/dubai#service`,
    name: "AI & SaaS Software Engineering for Dubai",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: siteUrl("/nexzoa.jpg"),
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    description:
      "Custom AI software development, high-velocity SaaS engineering, and business automation workflows for Dubai startups and UAE enterprises.",
    serviceType: ["AI Software Engineering", "SaaS Development", "FinTech Software"],
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
        name: "Dubai & UAE",
        item: `${SITE_URL}/services/dubai`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DUBAI_FAQS.map((faq) => ({
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
          <span className="text-white/80 font-medium">Dubai &bull; UAE</span>
        </nav>

        {/* Arabic Callout */}
        <div className="mb-8 p-5 sm:p-6 rounded-[24px] bg-[#0a0a0c]/90 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-right sm:text-left">
            <p className="text-sm sm:text-base font-bold text-white/90" dir="rtl">
              هندسة برمجيات ذكية وسريعة للشركات الناشئة في دبي والإمارات
            </p>
            <p className="text-xs text-white/50 mt-1 font-light" dir="rtl">
              نكسزوا: نقدم حلول برمجية مخصصة وأنظمة SaaS متطورة تدعم نمو الأعمال في سوق دبي فائق السرعة.
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-white/80 text-[11px] font-medium border border-white/[0.08] self-start sm:self-center">
            <img src="/flags/ae.svg" alt="UAE" width={16} height={12} className="w-4 h-3 rounded-[2px] object-cover shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Dubai Fast-Track</span>
          </span>
        </div>

        {/* Hero */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-xs font-medium mb-6 font-mono">
            Dubai &bull; Abu Dhabi &bull; DIFC &bull; UAE Remote Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            AI-Native Software Engineering for Dubai Startups &amp; Enterprises
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            Dubai moves fast. Nexzoa engineers software that moves faster. We partner with founders and technical leaders across the UAE to build scalable SaaS products, AI automation pipelines, and enterprise cloud applications without agency overhead.
          </p>
        </header>

        {/* Why Dubai Startups Choose Nexzoa */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Timezone Synergy</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>GST Timezone Synergy</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              With just 1.5 hours difference between Colombo (UTC+5:30) and Dubai (UTC+4), we provide full-day synchronous collaboration on Slack, Figma, and GitHub.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Velocity</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>High-Velocity MVP Sprints</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Launch in weeks, not quarters. We turn complex product blueprints into testable, market-ready web platforms with extreme engineering speed.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Direct Access</span>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Direct Technical Access</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              No account managers or junior buffers. You talk directly with senior full-stack architects who write and review every line of production code.
            </p>
          </div>
        </section>

        {/* Dubai Sectors */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Ecosystem Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Systems built for Dubai&apos;s digital economy.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>DIFC FinTech &amp; Payment Platforms</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Real-time transaction infrastructure, wallet integrations, AML/KYC workflows, and automated reporting dashboards for UAE financial services.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Dubai PropTech &amp; Real Estate Solutions</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Interactive listing engines, 3D floor plan viewers, automated broker lead distribution, and digital contract signing pipelines for real estate developers.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>AI Workflow &amp; Customer Automation</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Intelligent WhatsApp bots, AI dispatch routing, multi-language conversational support, and automated CRM updates tailored for GCC consumer habits.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Enterprise Multi-Tenant SaaS</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Cloud architectures with multi-currency (AED, SAR, USD) billing, role-based security permissions, and sub-100ms response times globally.
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
            {DUBAI_FAQS.map((faq, i) => (
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
            Talk to a Nexzoa Engineer About Your Dubai Project
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Fast response, transparent estimates, and direct architecture discussion.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="start-project-button inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-[14px] font-semibold tracking-tight text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start Your Dubai Project
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
