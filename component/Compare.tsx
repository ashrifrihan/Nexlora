"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── 7 Exact Comparison Points from Reference Image ─── */
const nexloraFeatures = [
  "Start now!",
  "Flat monthly rate",
  "One synchronized team",
  "Dedicated account manager",
  "Dedicated senior talent",
  "Unlimited design revisions",
  "Flexible contracts",
];

const traditionalCompanies = [
  "Hiring takes 4-8 weeks",
  "Salary + overhead",
  "Hard to scale fast",
  "You manage everything",
  "Costly senior hires",
  "Limited bandwidth",
  "Strict contracts + notice periods",
];

const freelancers = [
  "Days or weeks to begin",
  "Hourly + scope creep",
  "Disconnected contributors",
  "Requires constant follow-up",
  "Inconsistent quality",
  "Extra charges likely",
  "No long-term reliability",
];

const templateAgencies = [
  "Usually 3–10 days to begin",
  "Confusing custom pricing",
  "Multi-team communication gap",
  "Shared or rotating contacts",
  "Juniors often assigned",
  "Limited revision scope",
  "Rigid service terms",
];

/* ─── Check / Cross icons matching Reference Design ─── */
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#ff3120]">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20">
      <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
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
      {/* Soft moving ambient backdrop glow centered behind compare section */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff3120]/[0.01] blur-[160px] rounded-full" />

      {/* Grid lines background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="w-full h-full opacity-20" style={{
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
        {/* Header (Exact User-provided Custom Design) */}
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
              Compare
            </span>
          </motion.div>

          <motion.h2
            id="compare-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Why choose{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">us?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Nexlora vs. Traditional Alternatives
          </motion.p>
        </div>

        {/* Desktop Comparison Table (4 Columns aligned perfectly by row heights) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8 items-stretch mt-12">
          
          {/* Column 1: Nexlora (Standalone Highlighted Card - Orange/Red themed exactly as reference) */}
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
              className="relative overflow-hidden rounded-[24px] border border-[#ff3120]/30 h-full p-6 xl:p-8 transition-all duration-500 hover:border-[#ff3120]/50 group shadow-[0_0_50px_-15px_rgba(255,49,32,0.08)] hover:shadow-[0_0_60px_-10px_rgba(255,49,32,0.15)]"
              style={{
                backgroundColor: "rgba(12,12,14,0.95)",
              }}
            >
              {/* Beautiful red/orange corner ambient glow on the top-right */}
              <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-gradient-to-br from-[#ff3120]/35 to-transparent blur-[45px] pointer-events-none rounded-tr-[24px]" />

              {/* Mouse-follow glow */}
              <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
                style={{
                  opacity: hov ? 1 : 0,
                  background: `radial-gradient(400px circle at ${mp.x}px ${mp.y}px, rgba(255,49,32,0.05), transparent 60%)`,
                }}
              />

              {/* Glowing vertical gradient light on the left side of the card */}
              <div 
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#ff3120]/50 via-[#ff3120]/15 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" 
              />

              {/* Moving light beam */}
              <motion.div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px]"
                style={{ opacity: 0.25 }}
              >
                <motion.div
                  className="absolute w-[150px] h-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,49,32,0.03), transparent)",
                  }}
                  animate={{ x: ["-150px", "500px"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                />
              </motion.div>

              <div className="relative z-10">
                {/* Title */}
                <h3
                  className="text-[20px] font-bold text-white tracking-tight mb-8"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  nexlora<span className="text-[#ff3120]">*</span>
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
                        className="text-[14.5px] font-semibold text-white"
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

          {/* Column 2: In-house Hire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[17px] xl:text-[18px] font-bold text-white tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              In-house Hire
            </h3>
            <div className="flex flex-col gap-0">
              {traditionalCompanies.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 h-14 border-b border-white/[0.04] last:border-0 hover:translate-x-1 transition-transform duration-200"
                >
                  <CrossIcon />
                  <span
                    className="text-[14px] text-white/35 font-medium"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Freelancers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[17px] xl:text-[18px] font-bold text-white tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Freelancers
            </h3>
            <div className="flex flex-col gap-0">
              {freelancers.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 h-14 border-b border-white/[0.04] last:border-0 hover:translate-x-1 transition-transform duration-200"
                >
                  <CrossIcon />
                  <span
                    className="text-[14px] text-white/35 font-medium"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[17px] xl:text-[18px] font-bold text-white tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Agencies
            </h3>
            <div className="flex flex-col gap-0">
              {templateAgencies.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 h-14 border-b border-white/[0.04] last:border-0 hover:translate-x-1 transition-transform duration-200"
                >
                  <CrossIcon />
                  <span
                    className="text-[14px] text-white/35 font-medium"
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

/* ─── Mobile Compare View Component (Orange/Red themed exactly as reference) ─── */
function MobileCompareView() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "nexlora", accent: true },
    { title: "In-house Hire", accent: false },
    { title: "Freelancers", accent: false },
    { title: "Agencies", accent: false },
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
                ? "bg-[#ff3120]/10 border-[#ff3120]/30 text-white"
                : "bg-transparent border-white/[0.04] text-white/40 hover:text-white/60"
            }`}
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="mt-6 min-h-[460px]">
        {activeTab === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-[24px] border border-[#ff3120]/30 p-6"
            style={{ backgroundColor: "rgba(12,12,14,0.95)" }}
          >
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-[#ff3120]/25 to-transparent blur-[35px] pointer-events-none rounded-tr-[24px]" />
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff3120]/60" />
            <h3 className="text-[17px] font-bold text-white tracking-tight mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              nexlora<span className="text-[#ff3120]">*</span>
            </h3>
            <div className="flex flex-col gap-0">
              {nexloraFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CheckIcon />
                  <span className="text-[14px] font-semibold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
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
            <h3 className="text-[16px] font-bold text-white/80 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              In-house Hire
            </h3>
            <div className="flex flex-col gap-0">
              {traditionalCompanies.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CrossIcon />
                  <span className="text-[13.5px] text-white/35 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
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
            <h3 className="text-[16px] font-bold text-white/80 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Freelancers
            </h3>
            <div className="flex flex-col gap-0">
              {freelancers.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CrossIcon />
                  <span className="text-[13.5px] text-white/35 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
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
            <h3 className="text-[16px] font-bold text-white/80 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Agencies
            </h3>
            <div className="flex flex-col gap-0">
              {templateAgencies.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                  <CrossIcon />
                  <span className="text-[13.5px] text-white/35 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
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
