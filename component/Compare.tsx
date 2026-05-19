"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── 6 Consolidated Comparison Points ─── */
const nexloraFeatures = [
  "Product-focused development",
  "Direct communication with builders",
  "AI-ready scalable architecture",
  "Modern UI/UX systems & layouts",
  "Fast, agile iteration cycles",
  "SEO-ready structures & workflows",
];

const traditionalCompanies = [
  "Slow delivery pipelines",
  "Multiple communication layers",
  "Hard-to-scale architecture",
  "Outdated interface patterns",
  "Heavy process overhead",
  "Disconnected design & engineering",
];

const freelancers = [
  "Inconsistent quality",
  "Communication delays",
  "Weak scalability planning",
  "Design inconsistency",
  "Unclear project timelines",
  "Limited business understanding",
];

const templateAgencies = [
  "Reused design systems",
  "Generic user experiences",
  "Weak technical depth",
  "Surface-level branding",
  "Cookie-cutter development",
  "Basic SEO implementation",
];

/* ─── Check / Cross icons in White/Silver Design ─── */
function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-white">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-white/[0.02] border border-white/[0.04] flex items-center justify-center shrink-0">
      <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="text-white/25">
        <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Compare() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cardRef = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="compare"
      className="relative w-full bg-black px-4 py-20 sm:py-28 md:py-32 lg:py-36 overflow-hidden"
      aria-labelledby="compare-heading"
    >
      {/* Soft moving ambient backdrop glow centered behind compare section (White/Silver themed) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.015] blur-[160px] rounded-full" />

      {/* Grid lines background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="w-full h-full opacity-35" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />
        {/* Fade grid lines into black edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl z-10">
        {/* Clean, Centered One-Line Spaced Heading */}
        <div className="mb-16 sm:mb-20 text-center">
          <motion.h2
            id="compare-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] sm:text-[40px] md:text-[44px] font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Why choose us?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 text-[14px] sm:text-[16px] text-white/40 font-medium"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Nexlora vs. Traditional Alternatives
          </motion.p>
        </div>

        {/* Desktop Comparison Table (4 Columns aligned perfectly by row heights) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8 items-stretch mt-12">
          
          {/* Column 1: Nexlora (Standalone Highlighted Card - Silver/White themed) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <div
              ref={cardRef}
              onMouseMove={onMove}
              onMouseEnter={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
              className="relative overflow-hidden rounded-[24px] border border-white/[0.08] h-full p-6 xl:p-8 transition-all duration-500 hover:border-white/[0.16] group shadow-[0_0_50px_-15px_rgba(255,255,255,0.015)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.03)] bg-gradient-to-b from-white/[0.03] to-white/[0.005]"
              style={{
                backgroundColor: "rgba(10,10,12,0.95)",
              }}
            >
              {/* Mouse-follow glow (white/silver themed) */}
              <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
                style={{
                  opacity: hov ? 1 : 0,
                  background: `radial-gradient(400px circle at ${mp.x}px ${mp.y}px, rgba(255,255,255,0.04), transparent 60%)`,
                }}
              />

              {/* Glowing vertical gradient light on the left side of the card (white/silver themed) */}
              <div 
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white/30 via-white/10 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-100" 
              />

              {/* Moving light beam */}
              <motion.div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px]"
                style={{ opacity: 0.3 }}
              >
                <motion.div
                  className="absolute w-[150px] h-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent)",
                  }}
                  animate={{ x: ["-150px", "500px"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                />
              </motion.div>

              <div className="relative z-10">
                {/* Title */}
                <h3
                  className="text-[18px] font-bold text-white tracking-tight mb-8"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  nexlora<span className="text-white/40">*</span>
                </h3>

                {/* Features */}
                <div className="flex flex-col gap-0">
                  {nexloraFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                      className="flex items-center gap-3 h-14 border-b border-white/[0.04] last:border-0 hover:translate-x-1 transition-transform duration-200"
                    >
                      <CheckIcon />
                      <span
                        className="text-[13px] xl:text-[14px] font-medium text-white/90"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Traditional Software Companies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[15px] xl:text-[16px] font-bold text-white/70 tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Traditional Software Companies
            </h3>
            <div className="flex flex-col gap-0">
              {traditionalCompanies.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 h-14 border-b border-white/[0.04] last:border-0 hover:translate-x-1 transition-transform duration-200"
                >
                  <CrossIcon />
                  <span
                    className="text-[13px] xl:text-[14px] text-white/35 font-medium"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Freelance Teams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[15px] xl:text-[16px] font-bold text-white/70 tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Freelance Teams
            </h3>
            <div className="flex flex-col gap-0">
              {freelancers.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 h-14 border-b border-white/[0.04] last:border-0 hover:translate-x-1 transition-transform duration-200"
                >
                  <CrossIcon />
                  <span
                    className="text-[13px] xl:text-[14px] text-white/35 font-medium"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Template-Based Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[15px] xl:text-[16px] font-bold text-white/70 tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Template-Based Agencies
            </h3>
            <div className="flex flex-col gap-0">
              {templateAgencies.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 h-14 border-b border-white/[0.04] last:border-0 hover:translate-x-1 transition-transform duration-200"
                >
                  <CrossIcon />
                  <span
                    className="text-[13px] xl:text-[14px] text-white/35 font-medium"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Swipeable / Tabbed View (Clean & Overflow Safe) */}
        <MobileCompareView />
      </div>
    </section>
  );
}

/* ─── Mobile Compare View Component (White/Silver themed) ─── */
function MobileCompareView() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "nexlora", accent: true },
    { title: "Traditional Companies", accent: false },
    { title: "Freelance Teams", accent: false },
    { title: "Template Agencies", accent: false },
  ];

  return (
    <div className="lg:hidden mt-8">
      {/* Sticky Tab Navigator */}
      <div className="sticky top-[72px] z-20 -mx-4 px-4 py-3 bg-black/95 backdrop-blur-md border-b border-white/[0.04] overflow-x-auto scrollbar-none flex gap-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`shrink-0 px-3.5 py-2 rounded-xl text-[12px] font-bold tracking-tight transition-all duration-300 border ${
              activeTab === i
                ? "bg-white/10 border-white/20 text-white"
                : "bg-transparent border-white/[0.04] text-white/40 hover:text-white/60"
            }`}
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="mt-6 min-h-[420px]">
        {activeTab === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-[24px] border border-white/[0.08] p-6 bg-gradient-to-b from-white/[0.03] to-white/[0.005]"
            style={{ backgroundColor: "rgba(10,10,12,0.95)" }}
          >
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-white/30" />
            <h3 className="text-[16px] font-bold text-white tracking-tight mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              nexlora<span className="text-white/40">*</span>
            </h3>
            <div className="flex flex-col gap-0">
              {nexloraFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CheckIcon />
                  <span className="text-[13px] font-medium text-white/90" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <h3 className="text-[15px] font-bold text-white/80 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Traditional Software Companies
            </h3>
            <div className="flex flex-col gap-0">
              {traditionalCompanies.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CrossIcon />
                  <span className="text-[13px] text-white/35 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <h3 className="text-[15px] font-bold text-white/80 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Freelance Teams
            </h3>
            <div className="flex flex-col gap-0">
              {freelancers.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CrossIcon />
                  <span className="text-[13px] text-white/35 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <h3 className="text-[15px] font-bold text-white/80 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Template-Based Agencies
            </h3>
            <div className="flex flex-col gap-0">
              {templateAgencies.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CrossIcon />
                  <span className="text-[13px] text-white/35 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
