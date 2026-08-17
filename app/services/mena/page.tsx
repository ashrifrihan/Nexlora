import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `Software Development MENA Region | AI Engineering Studio | ${SITE_NAME}`,
  description:
    "Nexzoa delivers AI software engineering and SaaS development across the MENA region: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Jordan, Egypt. Fast, scalable, and Vision-aligned.",
  keywords: [
    "software development MENA",
    "software development Middle East",
    "AI software engineering GCC",
    "SaaS development Middle East",
    "custom software Saudi Arabia UAE Qatar",
    "nearshore software development GCC",
    "Nexzoa MENA",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/mena`,
  },
  openGraph: {
    title: `Software Development MENA Region | AI Engineering Studio | ${SITE_NAME}`,
    description: "Custom software engineering, AI automation, and SaaS platforms across the Middle East.",
    url: `${SITE_URL}/services/mena`,
    type: "website",
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630, alt: "Nexzoa MENA Software Engineering" }],
  },
};

export default function MenaHubPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/mena#service`,
    name: "AI Software Engineering & SaaS Development for MENA",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: siteUrl("/nexzoa.jpg"),
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Bahrain" },
      { "@type": "Country", name: "Oman" },
      { "@type": "Country", name: "Jordan" },
      { "@type": "Country", name: "Egypt" },
    ],
    description:
      "Full-stack software engineering, AI agent workflows, and SaaS product engineering for startups and enterprises across the Middle East and North Africa.",
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
        name: "MENA Region",
        item: `${SITE_URL}/services/mena`,
      },
    ],
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

      <main className="relative pt-32 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Background ambient light */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/[0.02] via-white/[0.01] to-transparent blur-[120px] -z-10" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/80 font-medium">MENA Region</span>
        </nav>

        {/* Arabic Welcome Callout */}
        <div className="mb-8 p-5 sm:p-6 rounded-[24px] bg-[#0a0a0c]/90 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-right sm:text-left">
            <p className="text-sm sm:text-base font-bold text-white/90" dir="rtl">
              هندسة برمجيات متقدمة وحلول سحابية ذكية لمنطقة الشرق الأوسط وشمال أفريقيا
            </p>
            <p className="text-xs text-white/50 mt-1 font-light" dir="rtl">
              نكسزوا: نبني حلولاً برمجية ذكية وأنظمة سحابية متقدمة تواكب التطور الرقمي في الخليج والعالم العربي.
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-white/80 text-[11px] font-medium border border-white/[0.08] self-start sm:self-center">
            <span className="font-mono uppercase tracking-wider text-[10px]">MENA Digital Hub</span>
          </span>
        </div>

        {/* Hero */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-xs font-medium mb-6 font-mono">
            GCC &bull; Levant &bull; North Africa &bull; Direct Remote Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            AI-Native Software Engineering Across the MENA Region
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            From Riyadh and Dubai to Doha and Kuwait City, the Middle East is experiencing the world&apos;s fastest digital acceleration. Nexzoa partners directly with founders and technical leaders across MENA to engineer scalable SaaS products, AI workflows, and cloud platforms.
          </p>
        </header>

        {/* Primary GCC Country Links */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Regional Hubs</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Primary GCC Engineering Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/saudi-arabia"
              className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.18] transition-all group"
            >
              <div className="mb-4">
                <img src="/flags/sa.svg" alt="Saudi Arabia" width={24} height={16} className="w-6 h-4 rounded-[2px] object-cover shadow-sm" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Saudi Arabia (KSA)
              </h3>
              <p className="text-xs text-white/50 leading-relaxed mb-4 font-light">
                Vision 2030 digital alignment, Monsha&apos;at SME modernization, ZATCA e-invoicing compliance, and AST timezone synchronization.
              </p>
              <span className="text-xs text-white/70 group-hover:text-white font-medium inline-flex items-center gap-1.5">
                <span>Explore Saudi Solutions</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <Link
              href="/services/dubai"
              className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.18] transition-all group"
            >
              <div className="mb-4">
                <img src="/flags/ae.svg" alt="UAE" width={24} height={16} className="w-6 h-4 rounded-[2px] object-cover shadow-sm" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Dubai &bull; UAE
              </h3>
              <p className="text-xs text-white/50 leading-relaxed mb-4 font-light">
                DIFC FinTech engineering, real estate PropTech systems, fast-track MVP launches, and GST timezone alignment.
              </p>
              <span className="text-xs text-white/70 group-hover:text-white font-medium inline-flex items-center gap-1.5">
                <span>Explore Dubai Solutions</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <Link
              href="/services/qatar"
              className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.18] transition-all group"
            >
              <div className="mb-4">
                <img src="/flags/qa.svg" alt="Qatar" width={24} height={16} className="w-6 h-4 rounded-[2px] object-cover shadow-sm" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Qatar (Doha)
              </h3>
              <p className="text-xs text-white/50 leading-relaxed mb-4 font-light">
                Qatar National Vision 2030, energy logistics platforms, QSTP research integrations, and enterprise cloud applications.
              </p>
              <span className="text-xs text-white/70 group-hover:text-white font-medium inline-flex items-center gap-1.5">
                <span>Explore Qatar Solutions</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </div>
        </section>

        {/* Wider MENA Coverage */}
        <section className="mb-20 p-8 sm:p-10 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06]">
          <div className="mb-6">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Coverage</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Coverage Across Wider MENA Countries
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-white/70">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-1.5">
                <img src="/flags/kw.svg" alt="Kuwait" width={16} height={11} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                <h3 className="font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Kuwait</h3>
              </div>
              <p className="text-xs text-white/50 font-light">FinTech platforms, retail e-commerce systems, and logistics automation pipelines.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-1.5">
                <img src="/flags/bh.svg" alt="Bahrain" width={16} height={11} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                <h3 className="font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Bahrain</h3>
              </div>
              <p className="text-xs text-white/50 font-light">Bahrain FinTech Bay integrations, open banking workflows, and cloud databases.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-1.5">
                <img src="/flags/om.svg" alt="Oman" width={16} height={11} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                <h3 className="font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Oman</h3>
              </div>
              <p className="text-xs text-white/50 font-light">Oman Vision 2040 digital solutions, logistics telemetry, and government portals.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-1.5">
                <img src="/flags/jo.svg" alt="Jordan" width={16} height={11} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                <h3 className="font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Jordan</h3>
              </div>
              <p className="text-xs text-white/50 font-light">HealthTech SaaS platforms, educational portals, and startup MVP development.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-1.5">
                <img src="/flags/eg.svg" alt="Egypt" width={16} height={11} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                <h3 className="font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Egypt</h3>
              </div>
              <p className="text-xs text-white/50 font-light">High-concurrency e-commerce backends, microservices, and AI workflow systems.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-1.5">
                <img src="/flags/lk.svg" alt="Sri Lanka" width={16} height={11} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                <h3 className="font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Sri Lanka HQ</h3>
              </div>
              <p className="text-xs text-white/50 font-light">Engineering operations center delivering high-tier software talent for the region.</p>
            </div>
          </div>
        </section>

        {/* Why Sri Lankan Engineers for MENA */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Advantages</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Why MENA companies choose Sri Lankan software engineers.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Ideal Timezone Alignment</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Colombo (UTC+5:30) is only 1.5 to 2.5 hours ahead of the Gulf, enabling real-time communications, rapid bug triage, and daily synchronous sprint standups.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Tier-1 Architecture Pedigree</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Sri Lanka boasts a world-renowned software engineering culture that has produced global enterprise middleware (WSO2), telecom infrastructure, and high-load consumer apps.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>High Cost-to-Quality Efficiency</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Compared to traditional London, Silicon Valley, or local agency billing rates, Nexzoa offers elite direct engineering with 3x to 5x better capital efficiency.
              </p>
            </div>

            <div className="p-7 rounded-[26px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Fluent English &amp; Cultural Synergy</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Professional English-first communication, clear architectural documentation, and full appreciation of Middle Eastern commercial etiquette and business pace.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Partner with Nexzoa Across the MENA Region
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Let&apos;s build the next generation of digital infrastructure together.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="start-project-button inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-[14px] font-semibold tracking-tight text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start Your Project
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
