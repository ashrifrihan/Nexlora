"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION_LONG,
  BUSINESS_CITY,
  CONTACT_EMAIL,
  SOCIAL_TWITTER,
  SOCIAL_LINKEDIN,
  SOCIAL_GITHUB,
  siteUrl,
} from "@/lib/siteConfig";

function AboutBentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl h-full p-8 sm:p-9 transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-white/[0.14]"
      >
        {/* Glow spotlight overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(450px circle at ${mp.x}px ${mp.y}px, rgba(255, 255, 255, 0.05), transparent 75%)`,
          }}
        />
        {/* Corner flare */}
        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-white/[0.02] to-transparent blur-[35px] pointer-events-none rounded-tr-[28px] z-0" />

        <div className="relative z-10 h-full flex flex-col justify-between gap-6 w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
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
        name: "About Nexzoa",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  const aboutOrgLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `About ${SITE_NAME}`,
    description: SITE_DESCRIPTION_LONG,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: siteUrl("/nexzoa.jpg"),
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS_CITY,
        addressCountry: "LK",
      },
      sameAs: [SOCIAL_TWITTER, SOCIAL_LINKEDIN, SOCIAL_GITHUB],
      knowsAbout: [
        "AI Software Engineering",
        "Custom SaaS Architecture",
        "Autonomous Agent Systems",
        "Next.js and React Ecosystem",
        "Middle East Software Development",
        "Sri Lanka Tech Ecosystem",
      ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutOrgLd) }}
      />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent blur-[100px] -z-10" />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80 font-medium">About Studio</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs font-medium mb-6">
            <div className="w-5 h-5 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <span className="font-mono text-[10.5px] tracking-wider text-white/60 uppercase">Colombo HQ &bull; Global Operations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            We treat software as vital infrastructure for ambitious businesses.
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            Nexzoa is an independent AI-native software engineering studio founded in Colombo, Sri Lanka in 2024. We build custom AI software systems, multi-tenant SaaS platforms, and intelligent automation pipelines for startups, scaleups, and enterprises across Saudi Arabia, UAE, Qatar, US, and worldwide.
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05]">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Founded</span>
              <span className="text-lg font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>2024 &bull; Colombo</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05]">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Architecture</span>
              <span className="text-lg font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Sub-100ms TTFB</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05]">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Model</span>
              <span className="text-lg font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>Direct Engineer</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05]">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Coverage</span>
              <span className="text-lg font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>GCC, US &amp; Global</span>
            </div>
          </div>
        </header>

        {/* 3 Core Pillars Bento Grid */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Our Foundation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Engineered with zero agency fluff.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AboutBentoCard delay={0.05}>
              <div>
                <span className="text-[12px] font-bold text-white/20 select-none block mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  01
                </span>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Direct Engineering
                </h3>
                <p className="text-sm text-white/55 leading-relaxed font-light">
                  Zero account executives, non-technical middlemen, or fragmented communication. You collaborate directly with senior full-stack architects on Slack and Notion with daily async updates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/40 font-mono">
                <span>SLACK / NOTION SYNC</span>
                <span className="text-white/70">100% TECHNICAL</span>
              </div>
            </AboutBentoCard>

            <AboutBentoCard delay={0.1}>
              <div>
                <span className="text-[12px] font-bold text-white/20 select-none block mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  02
                </span>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Sub-100ms Architecture
                </h3>
                <p className="text-sm text-white/55 leading-relaxed font-light">
                  Speed is a non-negotiable feature. We build on edge compute networks, Redis caching layers, optimized PostgreSQL schemas, and Next.js server components to guarantee 95+ Core Web Vitals globally.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/40 font-mono">
                <span>GLOBAL EDGE CDN</span>
                <span className="text-white/70">&lt; 100ms TTFB</span>
              </div>
            </AboutBentoCard>

            <AboutBentoCard delay={0.15}>
              <div>
                <span className="text-[12px] font-bold text-white/20 select-none block mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  03
                </span>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  AI-Native by Default
                </h3>
                <p className="text-sm text-white/55 leading-relaxed font-light">
                  We integrate production-grade LLM workflows, autonomous background agents, pgvector embeddings, and automated operational pipelines directly into your software for measurable ROI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/40 font-mono">
                <span>LLM AGENTS &amp; RAG</span>
                <span className="text-white/70">ENTERPRISE SCALE</span>
              </div>
            </AboutBentoCard>
          </div>
        </section>

        {/* Studio Pedigree & Story */}
        <section className="mb-20">
          <div className="p-8 sm:p-11 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-white/[0.02] to-transparent blur-[50px] pointer-events-none rounded-tr-[28px]" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">Our Pedigree</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Sri Lankan engineering excellence deployed worldwide.
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed text-sm sm:text-base font-light">
                <p>
                  Sri Lanka has long stood as one of South Asia&apos;s highest-caliber engineering ecosystems, powering global technology pioneers such as <strong className="text-white font-medium">WSO2</strong>, <strong className="text-white font-medium">PickMe</strong>, and <strong className="text-white font-medium">Sysco LABS</strong>.
                </p>
                <p>
                  At Nexzoa, we channel that proven engineering discipline into high-velocity modern software delivery. We operate lean, remote-first, and across global timezones, bridging Gulf Standard Time (GST/AST) in Saudi Arabia, UAE, and Qatar, as well as European and North American working hours.
                </p>
                <p>
                  Whether you require an enterprise SaaS multi-tenant platform, an intelligent AI-automated operations engine, or rapid MVP development, we build systems designed to perform from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Production Technology Stack */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Stack Teardown</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Battle-tested production technologies.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-[22px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono block mb-2">Frontend</span>
              <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>Next.js &bull; React &bull; TypeScript</p>
              <p className="text-xs text-white/45 font-light">Tailwind CSS, Framer Motion, Server Components</p>
            </div>
            <div className="p-6 rounded-[22px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono block mb-2">Backend &amp; APIs</span>
              <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>Node.js &bull; Python &bull; FastAPI</p>
              <p className="text-xs text-white/45 font-light">REST, GraphQL, tRPC, WebSockets, gRPC</p>
            </div>
            <div className="p-6 rounded-[22px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono block mb-2">Databases &amp; Cache</span>
              <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>PostgreSQL &bull; Redis &bull; Supabase</p>
              <p className="text-xs text-white/45 font-light">pgvector, Prisma, Drizzle ORM, Upstash Edge</p>
            </div>
            <div className="p-6 rounded-[22px] bg-[#0a0a0c]/90 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono block mb-2">AI &amp; Cloud</span>
              <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>OpenAI &bull; Claude &bull; AWS &bull; Vercel</p>
              <p className="text-xs text-white/45 font-light">LangChain, Docker, Cloudflare Workers, GCP</p>
            </div>
          </div>
        </section>

        {/* Global Operations & Regional Landing Links with flag-icons */}
        <section className="mb-20 p-8 sm:p-10 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] font-bold tracking-wider text-white/40 uppercase">Global &bull; MENA Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Serving Clients in Saudi Arabia, UAE, Qatar &amp; Worldwide
          </h2>
          <p className="text-sm text-white/60 leading-relaxed mb-6 font-light max-w-2xl">
            We are structured remote-first and comfortably operate across Gulf Standard Time (GST/AST) and international business timezones. Discover our regional operations:
          </p>

          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/services/saudi-arabia"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-xs text-white/70 hover:text-white transition-all duration-200 group"
            >
              <img
                src="/flags/sa.svg"
                alt="Saudi Arabia"
                width={16}
                height={12}
                className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
              />
              <span>Saudi Arabia (KSA)</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>

            <Link
              href="/services/dubai"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-xs text-white/70 hover:text-white transition-all duration-200 group"
            >
              <img
                src="/flags/ae.svg"
                alt="United Arab Emirates"
                width={16}
                height={12}
                className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
              />
              <span>Dubai &bull; UAE</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>

            <Link
              href="/services/qatar"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-xs text-white/70 hover:text-white transition-all duration-200 group"
            >
              <img
                src="/flags/qa.svg"
                alt="Qatar"
                width={16}
                height={12}
                className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
              />
              <span>Qatar (Doha)</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>

            <Link
              href="/services/mena"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-xs text-white/70 hover:text-white transition-all duration-200 group"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/60 group-hover:text-white">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span>MENA Region Hub</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>

            <Link
              href="/services/global"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-xs text-white/70 hover:text-white transition-all duration-200 group"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/60 group-hover:text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>Global Markets (US, UK, EU)</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>

            <Link
              href="/sri-lanka-tech"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-xs text-white/70 hover:text-white transition-all duration-200 group"
            >
              <img
                src="/flags/lk.svg"
                alt="Sri Lanka"
                width={16}
                height={12}
                className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
              />
              <span>Sri Lanka Tech Ecosystem</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Have a mission-critical project in mind?
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Discuss your system architecture, MVP sprint, or custom AI roadmap directly with our senior engineers.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="start-project-button inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-[14px] font-semibold tracking-tight text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start a Project
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white text-[14px] font-medium border border-white/[0.08] hover:border-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Email Directly
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
