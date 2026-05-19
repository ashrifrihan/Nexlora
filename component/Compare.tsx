"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── 7 Exact Comparison Points Provided by the User ─── */
const nexloraFeatures = [
  "Fast product delivery",
  "Modern scalable systems",
  "Direct builder communication",
  "Premium UI/UX quality",
  "SEO-ready development",
  "AI-powered workflows",
  "Long-term technical support",
];

const traditionalAgenciesFeatures = [
  "Slow project execution",
  "Generic design systems",
  "Multiple communication layers",
  "Weak scalability planning",
  "Poor SEO structure",
  "Outdated workflows",
  "Expensive long-term changes",
];

const freelancersFeatures = [
  "Inconsistent delivery quality",
  "Unclear timelines",
  "Limited technical depth",
  "Weak support after launch",
  "Hard to scale projects",
  "Communication delays",
  "No structured workflow",
];

const inhouseTeamsFeatures = [
  "Expensive hiring process",
  "High operational costs",
  "Long onboarding time",
  "Slower execution cycles",
  "Resource limitations",
  "Difficult scaling",
  "Heavy management overhead",
];

/* ─── Check / Cross icons in a highly styled Silver/White Glassmorphic Design ─── */
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
      {/* Premium ambient backdrop glow (White/Silver themed) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.015] blur-[160px] rounded-full" />

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
        {/* Header (Exact User-provided Custom Design with customized text labels) */}
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
          
          {/* Column 1: Nexlora (Standalone Highlighted Card with WOW border & sweeping glare animations) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            {/* Parent Wrapper enabling the 1px Sweeping Border light trail */}
            <div className="relative p-[1.5px] rounded-[24px] overflow-hidden h-full">
              {/* Sweeping Liquid Silver border trail */}
              <motion.div
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_35%,rgba(255,255,255,0.35)_50%,transparent_65%)] pointer-events-none z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Card Content Mask */}
              <div
                ref={cardRef}
                onMouseMove={onMove}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                className="relative rounded-[23px] h-full p-6 xl:p-8 z-10 overflow-hidden transition-all duration-500 shadow-[0_0_50px_-15px_rgba(255,255,255,0.015)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.035)]"
                style={{
                  backgroundColor: "rgba(10,10,12,0.96)",
                }}
              >
                {/* Beautiful luxury corner ambient glow on the top-right */}
                <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-gradient-to-br from-white/[0.04] to-transparent blur-[45px] pointer-events-none rounded-tr-[23px]" />

                {/* Mouse-follow spotlight glow */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
                  style={{
                    opacity: hov ? 1 : 0,
                    background: `radial-gradient(400px circle at ${mp.x}px ${mp.y}px, rgba(255,255,255,0.035), transparent 60%)`,
                  }}
                />

                {/* Sweeping Glare light beam that triggers across the face of the card on hover */}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[23px]"
                  style={{ opacity: hov ? 0.35 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="absolute w-[200px] h-full top-0"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                      transform: "skewX(-20deg)",
                    }}
                    animate={hov ? { x: ["-250px", "600px"] } : { x: "-250px" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Subtle infinite moving light beam */}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[23px]"
                  style={{ opacity: 0.15 }}
                >
                  <motion.div
                    className="absolute w-[150px] h-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent)",
                    }}
                    animate={{ x: ["-150px", "500px"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  />
                </motion.div>

                <div className="relative z-10">
                  {/* Title */}
                  <h3
                    className="text-[20px] font-bold text-white tracking-tight mb-8"
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
                          className="text-[14.5px] font-semibold text-white/90"
                          style={{ fontFamily: '"Satoshi", sans-serif' }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[17px] xl:text-[18px] font-bold text-white/70 tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Traditional Agencies
            </h3>
            <div className="flex flex-col gap-0">
              {traditionalAgenciesFeatures.map((feature, i) => (
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
              className="text-[17px] xl:text-[18px] font-bold text-white/70 tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Freelancers
            </h3>
            <div className="flex flex-col gap-0">
              {freelancersFeatures.map((feature, i) => (
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

          {/* Column 4: In-house Teams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 xl:p-8 flex flex-col h-full bg-transparent"
          >
            <h3
              className="text-[17px] xl:text-[18px] font-bold text-white/70 tracking-tight mb-8"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              In-house Teams
            </h3>
            <div className="flex flex-col gap-0">
              {inhouseTeamsFeatures.map((feature, i) => (
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

/* ─── Mobile Compare View Component ─── */
function MobileCompareView() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "nexlora", accent: true },
    { title: "Traditional Agencies", accent: false },
    { title: "Freelancers", accent: false },
    { title: "In-house Teams", accent: false },
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
      <div className="mt-6 min-h-[460px]">
        {activeTab === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative p-[1.5px] rounded-[24px] overflow-hidden"
          >
            {/* Sweeping Liquid Silver border trail for active mobile tab */}
            <motion.div
              className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] pointer-events-none z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div
              className="relative rounded-[23px] p-6 z-10 bg-gradient-to-b from-white/[0.015] to-white/[0.003]"
              style={{ backgroundColor: "rgba(10,10,12,0.95)" }}
            >
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-white/[0.03] to-transparent blur-[35px] pointer-events-none rounded-tr-[23px]" />
              <h3 className="text-[17px] font-bold text-white tracking-tight mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                nexlora<span className="text-white/40">*</span>
              </h3>
              <div className="flex flex-col gap-0">
                {nexloraFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0">
                    <CheckIcon />
                    <span className="text-[14px] font-semibold text-white/90" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
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
              Traditional Agencies
            </h3>
            <div className="flex flex-col gap-0">
              {traditionalAgenciesFeatures.map((feature, i) => (
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
              {freelancersFeatures.map((feature, i) => (
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
              In-house Teams
            </h3>
            <div className="flex flex-col gap-0">
              {inhouseTeamsFeatures.map((feature, i) => (
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
