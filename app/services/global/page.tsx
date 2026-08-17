import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `Global Software Engineering Studio | AI, SaaS & Automation | ${SITE_NAME}`,
  description:
    "Nexzoa is a globally operating AI software studio based in Sri Lanka. We build custom SaaS platforms, AI systems, and automation pipelines for clients in the US, UK, Europe, Australia, MENA, and Southeast Asia.",
  keywords: [
    "global software engineering studio",
    "offshore AI software development",
    "remote software engineering team",
    "custom SaaS developers for startups",
    "AI automation agency worldwide",
    "hire Sri Lankan software engineers",
    "Nexzoa Global",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/global`,
  },
  openGraph: {
    title: `Global Software Engineering Studio | ${SITE_NAME}`,
    description: "Custom software engineering, AI systems, and multi-tenant SaaS platforms built for founders worldwide.",
    url: `${SITE_URL}/services/global`,
    type: "website",
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630, alt: "Nexzoa Global Software Engineering" }],
  },
};

export default function GlobalServicesPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/global#service`,
    name: "Global AI Software Engineering Services",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: siteUrl("/nexzoa.jpg"),
    },
    areaServed: "Worldwide",
    description:
      "Global software development and AI engineering services for startups and scaleups across North America, Europe, Australia, and Asia.",
    serviceType: ["AI Software Engineering", "Custom SaaS", "Cloud Platforms"],
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
        name: "Global",
        item: `${SITE_URL}/services/global`,
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
          <span className="text-white/80 font-medium">Global</span>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-xs font-medium mb-6 font-mono">
            US &bull; UK &bull; Europe &bull; Australia &bull; Singapore
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Your Global Engineering Partner: From Colombo to the World
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            Nexzoa is an independent AI-native software studio based in Sri Lanka. We build custom multi-tenant SaaS platforms, AI automation systems, and high-performance cloud applications for clients in North America, Europe, Australia, the Middle East, and Southeast Asia.
          </p>
        </header>

        {/* Key Markets Grid */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <div className="flex items-center gap-2 mb-3">
              <img src="/flags/us.svg" alt="United States" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
              <img src="/flags/ca.svg" alt="Canada" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>North American Startups (US &amp; Canada)</h2>
            <p className="text-sm text-white/55 leading-relaxed font-light">
              We partner with YC-style founders and technical teams to rapidly validate MVPs, engineer scalable Next.js and PostgreSQL backends, and run overnight development cycles with synchronous morning handoffs.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <div className="flex items-center gap-2 mb-3">
              <img src="/flags/gb.svg" alt="United Kingdom" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
              <img src="/flags/eu.svg" alt="European Union" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>UK &amp; European Scaleups</h2>
            <p className="text-sm text-white/55 leading-relaxed font-light">
              Ideal 4 to 5 hour timezone overlap with London (GMT/BST) and Berlin (CET). Direct engineering access, GDPR-compliant data workflows, and robust TypeScript codebases.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <div className="flex items-center gap-2 mb-3">
              <img src="/flags/au.svg" alt="Australia" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
              <img src="/flags/nz.svg" alt="New Zealand" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Australia &amp; New Zealand</h2>
            <p className="text-sm text-white/55 leading-relaxed font-light">
              High afternoon overlap with Sydney and Melbourne (AEST). Seamless sprint execution, automated CI/CD pipelines, and high-speed cloud deployments.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-all">
            <div className="flex items-center gap-2 mb-3">
              <img src="/flags/sg.svg" alt="Singapore" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
              <img src="/flags/my.svg" alt="Malaysia" width={18} height={13} className="w-4.5 h-3 rounded-[2px] object-cover shadow-sm" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Southeast Asia Hubs</h2>
            <p className="text-sm text-white/55 leading-relaxed font-light">
              Serving fast-growing e-commerce, logistics, and FinTech ventures across Singapore and Malaysia with sub-100ms low-latency edge architectures.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Launch Your Global Product with Nexzoa
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Schedule an introductory technical consultation with our engineering architects.
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
