"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

function AboutCard({
  index,
  children,
  className = "",
}: {
  index: number;
  children: React.ReactNode;
  className?: string;
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl h-full p-8 sm:p-10 transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[320px]"
      >
        {/* Glow spotlight overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(400px circle at ${mp.x}px ${mp.y}px, rgba(255, 255, 255, 0.04), transparent 75%)`,
          }}
        />
        {/* Luxury corner flare */}
        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-white/[0.015] to-transparent blur-[35px] pointer-events-none rounded-tr-[28px] z-0" />
        
        <div className="relative z-10 h-full flex flex-col justify-between gap-6 w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-black px-4 py-14 sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-12 lg:py-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] blur-[150px] rounded-full z-0" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5"
            style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}
          >
            <span
              className="text-[14px] font-medium tracking-[-0.02em] text-white"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              About The Company
            </span>
          </motion.div>

          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Engineering high-performance software &amp; AI systems{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              built to scale.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Nexzoa is an AI software technology company founded in Sri Lanka in 2024. We build proprietary AI-powered SaaS platforms and engineer high-performance software systems for modern businesses.
          </motion.p>
        </div>

        {/* Studio Engineering Architecture - 3 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Pillar 01: Direct Principal Engineering */}
          <AboutCard index={0}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] font-bold text-white/35 uppercase tracking-widest"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  01 &bull; PARADIGM
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20">
                  <svg className="w-3 h-3 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-mono text-[9px] font-semibold text-emerald-400/90 tracking-wide uppercase">
                    Zero Bloat
                  </span>
                </div>
              </div>
              <h3
                className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Direct Principal Engineering
              </h3>
              <p
                className="text-[13.5px] leading-relaxed text-white/55 font-light"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Zero non-technical account managers or communication silos. You collaborate directly with senior full-stack architects and UI/UX designers who build and own your systems with daily async velocity.
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/40 font-mono">
              <span>SLACK / GITHUB SYNC</span>
              <span className="text-white/70 font-semibold">100% TECHNICAL</span>
            </div>
          </AboutCard>

          {/* Pillar 02: Sub-100ms Edge Performance */}
          <AboutCard index={1}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] font-bold text-white/35 uppercase tracking-widest"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  02 &bull; RUNTIME
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/[0.08] border border-blue-500/20">
                  <svg className="w-3 h-3 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span className="font-mono text-[9px] font-semibold text-blue-400/90 tracking-wide uppercase">
                    Sub-100ms
                  </span>
                </div>
              </div>
              <h3
                className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                High-Velocity Edge Runtime
              </h3>
              <p
                className="text-[13.5px] leading-relaxed text-white/55 font-light"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Speed is a core architectural feature. Built on Next.js server streaming, globally distributed edge CDNs, Redis caches, and optimized PostgreSQL indexes to guarantee 99+ Core Web Vitals worldwide.
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/40 font-mono">
              <span>GLOBAL EDGE CDN</span>
              <span className="text-white/70 font-semibold">&lt; 45ms TTFB</span>
            </div>
          </AboutCard>

          {/* Pillar 03: Production-Grade AI Systems */}
          <AboutCard index={2}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] font-bold text-white/35 uppercase tracking-widest"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  03 &bull; INTELLIGENCE
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/[0.08] border border-purple-500/20">
                  <svg className="w-3 h-3 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  <span className="font-mono text-[9px] font-semibold text-purple-400/90 tracking-wide uppercase">
                    AI-Native
                  </span>
                </div>
              </div>
              <h3
                className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Autonomous AI Systems
              </h3>
              <p
                className="text-[13.5px] leading-relaxed text-white/55 font-light"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                We architect bespoke LLM pipelines utilizing Anthropic Claude and modern frontier models, retrieval-augmented generation (RAG) on proprietary datasets, and deterministic agent orchestration that automate heavy operational workflows with measurable ROI.
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/40 font-mono">
              <span>CLAUDE &bull; LLM AGENTS &bull; RAG</span>
              <span className="text-white/70 font-semibold">ENTERPRISE SCALE</span>
            </div>
          </AboutCard>
        </div>

        {/* Studio Technical Precision Metrics Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05] hover:border-white/[0.12] transition-colors">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Architecture</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Sub-100ms TTFB
            </span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05] hover:border-white/[0.12] transition-colors">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Collaboration</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              100% Principal
            </span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05] hover:border-white/[0.12] transition-colors">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">AI Stack</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Anthropic Claude
            </span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.05] hover:border-white/[0.12] transition-colors">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Founded</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              2024 &bull; Colombo
            </span>
          </div>
        </div>

        {/* Building with Anthropic Claude Showcase Card */}
        <ClaudeShowcaseCard />

        {/* The People Behind Nexzoa Spotlight */}
        <TeamShowcaseCard />

        {/* Global Operations & Profile Showcase with Cursor Spotlight & Glow */}
        <GlobalShowcaseCard />
      </div>
    </section>
  );
}

function ClaudeShowcaseCard() {
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-amber-500/15 bg-[#0a0a0c]/90 p-5 sm:p-8 md:p-9 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-500 hover:border-amber-500/30"
      >
        {/* Glow spotlight overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(500px circle at ${mp.x}px ${mp.y}px, rgba(217, 119, 6, 0.08), transparent 75%)`,
          }}
        />

        {/* Corner luxury flare */}
        <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-gradient-to-br from-amber-500/[0.04] to-transparent blur-[50px] rounded-tr-[28px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="font-mono text-[10px] font-bold tracking-widest text-amber-400/90 uppercase"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  AI Infrastructure &bull; Anthropic Ecosystem
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-amber-400/80" />
                <span className="text-[10px] text-white/40 font-mono">FRONTIER INTELLIGENCE</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Building with Anthropic Claude
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/[0.08] border border-amber-500/20 self-start sm:self-auto">
              <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="font-mono text-[10px] font-semibold text-amber-300 uppercase tracking-wide">
                Claude 3.5 Sonnet / 3.7
              </span>
            </div>
          </div>

          <p
            className="text-[13.5px] sm:text-sm text-white/60 leading-relaxed max-w-3xl font-light mb-6"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Nexzoa leverages Anthropic&apos;s state-of-the-art Claude models to power high-reliability workflow automation, complex unstructured data reasoning, and domain-grounded copilot interfaces across our SaaS platforms and enterprise systems.
          </p>

          {/* 3 Use-Case Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/25 hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 text-amber-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Workflow Intelligence
              </h4>
              <p className="text-xs text-white/50 leading-relaxed font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Orchestrating multi-step operational logic with Claude tool calling, guaranteed schema outputs, and deterministic safeguards.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/25 hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 text-amber-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Deep Document Reasoning
              </h4>
              <p className="text-xs text-white/50 leading-relaxed font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Extracting structured data from long-form manifests, contracts, and financial documents with Claude&apos;s 200k+ context window.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/25 hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 text-amber-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Domain-Grounded Copilots
              </h4>
              <p className="text-xs text-white/50 leading-relaxed font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Zero-hallucination customer support and operational assistants powered by hybrid RAG embeddings and Claude semantic routing.
              </p>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="mt-5 pt-4 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs text-white/40 font-mono">
            <span>ANTHROPIC SDK &bull; FUNCTION CALLING &bull; PROMPT CACHING</span>
            <span className="text-amber-400/80 font-semibold">PRODUCTION INTEGRATIONS</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TeamShowcaseCard() {
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 p-5 sm:p-8 md:p-9 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-500 hover:border-white/[0.14]"
      >
        {/* Glow spotlight overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(500px circle at ${mp.x}px ${mp.y}px, rgba(255, 255, 255, 0.04), transparent 75%)`,
          }}
        />

        {/* Corner luxury flare */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-white/[0.015] to-transparent blur-[40px] rounded-tr-[28px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span
                className="font-mono text-[10px] font-bold tracking-widest text-white/40 uppercase block mb-1"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Direct Engineering &bull; Leadership
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                The People Behind Nexzoa
              </h3>
            </div>
            <Link
              href="/team"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto group/all"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              <span>Explore all profiles</span>
              <svg className="w-3.5 h-3.5 text-white/50 group-hover/all:text-white group-hover/all:translate-x-0.5 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ashrif Rihan */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group/card">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <img
                    src="https://github.com/ashrifrihan.png"
                    alt="Ashrif Rihan — Founder & CEO at Nexzoa"
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
                  />
                  <div>
                    <h4
                      className="text-base font-bold text-white tracking-tight"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Ashrif Rihan
                    </h4>
                    <p
                      className="text-xs text-white/60 mt-0.5"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Founder &amp; CEO
                    </p>
                  </div>
                </div>
                <p
                  className="text-xs text-white/50 leading-relaxed font-light mb-3"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Directs company vision, product architecture, Next.js engineering, and UI/UX design systems for Nexzoa&apos;s proprietary SaaS and AI platforms.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs gap-2">
                <Link
                  href="/team/ashrif-rihan"
                  className="text-white hover:text-white/80 font-medium inline-flex items-center gap-1.5 group/link transition-colors whitespace-nowrap shrink-0"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  <span>View Profile<span className="hidden sm:inline"> &amp; Work</span></span>
                  <svg className="w-3.5 h-3.5 text-white/60 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-all duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <div className="flex items-center gap-2 sm:gap-2.5 text-white/40 text-[11px] sm:text-[11.5px] shrink-0">
                  <a
                    href="https://ashrifrihan.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group/ext whitespace-nowrap"
                  >
                    <span>Portfolio</span>
                    <svg className="w-2.5 h-2.5 text-white/40 group-hover/ext:text-white group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                  <span className="text-white/20">&bull;</span>
                  <a
                    href="https://github.com/ashrifrihan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group/ext whitespace-nowrap"
                  >
                    <span>GitHub</span>
                    <svg className="w-2.5 h-2.5 text-white/40 group-hover/ext:text-white group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Izzath Noory */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group/card">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <img
                    src="/nexzoa.jpg"
                    alt="Izzath Noory — Co-Founder & Operations at Nexzoa"
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
                  />
                  <div>
                    <h4
                      className="text-base font-bold text-white tracking-tight"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Izzath Noory
                    </h4>
                    <p
                      className="text-xs text-white/60 mt-0.5"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Co-Founder &amp; Head of Operations
                    </p>
                  </div>
                </div>
                <p
                  className="text-xs text-white/50 leading-relaxed font-light mb-3"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Directs international partnerships, client alignment across Saudi Arabia, UAE, Qatar, and agile delivery operations.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs gap-2">
                <Link
                  href="/team/izzath-noory"
                  className="text-white hover:text-white/80 font-medium inline-flex items-center gap-1.5 group/link transition-colors whitespace-nowrap shrink-0"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  <span>View Profile<span className="hidden sm:inline"> &amp; Initiatives</span></span>
                  <svg className="w-3.5 h-3.5 text-white/60 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-all duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <div className="flex items-center gap-2 text-white/40 text-[11px] sm:text-[11.5px] shrink-0">
                  <a
                    href="https://www.linkedin.com/in/izzath-noory-6150a7287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group/ext whitespace-nowrap"
                  >
                    <span>LinkedIn</span>
                    <svg className="w-2.5 h-2.5 text-white/40 group-hover/ext:text-white group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GlobalShowcaseCard() {
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 p-5 sm:p-8 md:p-9 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-500 hover:border-white/[0.14]"
      >
        {/* Glow spotlight overlay matching AboutCard */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(500px circle at ${mp.x}px ${mp.y}px, rgba(255, 255, 255, 0.05), transparent 75%)`,
          }}
        />

        {/* Corner luxury flare */}
        <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-gradient-to-br from-white/[0.02] to-transparent blur-[40px] rounded-tr-[28px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-3.5 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/60 group-hover:border-white/20 group-hover:text-white transition-colors duration-300">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span className="text-[10.5px] font-bold tracking-widest text-white/35 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Global Operations
              </span>
            </div>

            <h4 className="text-[17px] sm:text-[19px] font-medium text-white/80 tracking-tight leading-snug" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Engineering mission-critical software across <span className="text-white font-semibold">Saudi Arabia</span>, <span className="text-white font-semibold">UAE (Dubai)</span>, <span className="text-white font-semibold">Qatar</span>, <span className="text-white font-semibold">US, Europe &amp; Sri Lanka</span>.
            </h4>

            {/* Regional Quick Links Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <a
                href="/services/saudi-arabia"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-[11.5px] text-white/70 hover:text-white transition-all duration-200 group/pill"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                <img
                  src="/flags/sa.svg"
                  alt="Saudi Arabia"
                  width={16}
                  height={12}
                  className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
                />
                <span>Saudi Arabia</span>
              </a>
              <a
                href="/services/dubai"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-[11.5px] text-white/70 hover:text-white transition-all duration-200 group/pill"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                <img
                  src="/flags/ae.svg"
                  alt="United Arab Emirates"
                  width={16}
                  height={12}
                  className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
                />
                <span>Dubai &bull; UAE</span>
              </a>
              <a
                href="/services/qatar"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-[11.5px] text-white/70 hover:text-white transition-all duration-200 group/pill"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                <img
                  src="/flags/qa.svg"
                  alt="Qatar"
                  width={16}
                  height={12}
                  className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
                />
                <span>Qatar (Doha)</span>
              </a>
              <a
                href="/sri-lanka-tech"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] text-[11.5px] text-white/70 hover:text-white transition-all duration-200 group/pill"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                <img
                  src="/flags/lk.svg"
                  alt="Sri Lanka"
                  width={16}
                  height={12}
                  className="w-4 h-3 rounded-[2px] object-cover shadow-[0_1px_3px_rgba(0,0,0,0.6)] shrink-0"
                />
                <span>Sri Lanka Hub</span>
              </a>
            </div>
          </div>

          {/* Glowing CTA Button */}
          <div className="shrink-0 flex items-center">
            <a
              href="/about"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/40 text-[13px] font-semibold text-white/90 hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.12),inset_0_0_15px_rgba(255,255,255,0.05)] group/btn hover:scale-[1.02] active:scale-[0.98]"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              <span>Studio Profile</span>
              <svg className="w-3.5 h-3.5 text-white/50 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


