"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";

function useIsMobile() {
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMob(mq.matches);
    const h = (e: MediaQueryListEvent) => setMob(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return mob;
}

function StickyShellClient({ index, total, isMobile, children }: {
  index: number; total: number; isMobile: boolean; children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, isLast ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, isLast ? 1 : 0.72]);
  return (
    <div
      ref={ref}
      style={isMobile ? { position: "sticky", top: 80 + index * 6, zIndex: index + 1, willChange: "transform" } : undefined}
    >
      <motion.div style={isMobile ? { scale, opacity, transformOrigin: "top center", willChange: "transform" } : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

const StickyShellDynamic = dynamic(() => Promise.resolve(StickyShellClient), { ssr: false });

function StickyShell({ index, total, children }: { index: number; total: number; children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <StickyShellDynamic index={index} total={total} isMobile={isMobile}>
      {children}
    </StickyShellDynamic>
  );
}

/* ─── Comparison Data ─── */
const alternatives = [
  {
    id: "agencies",
    label: "Traditional Agencies",
    shortLabel: "Agencies",
    points: [
      "Slow project execution and bloated development cycles",
      "Template-based, generic design systems without originality",
      "Multiple communication layers (PMs, account executives)",
      "Weak long-term scalability planning and architecture",
      "Poor default SEO, indexing, and page load speed structures",
      "Expensive hourly rates and retainers for post-launch updates"
    ]
  },
  {
    id: "freelancers",
    label: "Freelancers",
    shortLabel: "Freelancers",
    points: [
      "Inconsistent quality and delivery schedules",
      "Vague timelines and unpredictable day-to-day availability",
      "Limited overall software engineering and database depth",
      "Lack of post-launch support and project handoff systems",
      "Hard to scale or maintain codebases built without standards",
      "Frequent communication delays, drop-offs, and silos"
    ]
  },
  {
    id: "inhouse",
    label: "In-house Teams",
    shortLabel: "In-House",
    points: [
      "Expensive recruitment, onboarding, and training processes",
      "High ongoing overhead, benefits, and tooling expenses",
      "Long setup time to establish project workflows",
      "Slower execution cycles due to excessive meeting bloat",
      "Skill gaps and limited external industry exposure",
      "Difficult organizational scaling and flexibility to pivot"
    ]
  }
];

const nexzoaFeatures = [
  "Fast product delivery driven by automated workflows",
  "Custom scalable systems built from the ground up",
  "Direct communication with the engineer building your system",
  "Premium UI/UX layout and blazing fast page speed",
  "SEO-ready configuration and semantic architecture",
  "Dedicated ongoing systems support and maintenance"
];

/* ─── Consistent Sized Icons ─── */
function WarningIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-[3px] shadow-sm">
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-red-400">
        <path d="M8 4v5M8 11.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SuccessCheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-[3px] shadow-sm">
      <svg width="9" height="9" viewBox="0 0 16 16" fill="none" className="text-emerald-400">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Compare() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [activeTab, setActiveTab] = useState("agencies");

  // Spotlight effect for the highlighted Nexzoa card
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const activeAlternative = alternatives.find((alt) => alt.id === activeTab) || alternatives[0];

  return (
    <section
      ref={sectionRef}
      id="compare"
      className="relative w-full bg-black px-4 py-14 sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-12 lg:py-24 overflow-hidden"
      aria-labelledby="compare-heading"
    >
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-[0.12]"
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

      {/* Ambient backdrop glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.012] blur-[150px] rounded-full z-0" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        
        {/* Header Section */}
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
              Why Choose Us
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
            Built for{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              execution.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            See how Nexzoa replaces conventional development overhead with direct, high-speed engineering.
          </motion.p>
        </div>

        {/* 12-Column Responsive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
          
          {/* Left Column (5 cols): Alternatives with Custom Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                The Alternatives
              </h3>
              <p className="text-[14px] text-white/40 leading-relaxed font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Select an option to see the common pain points clients face when outsourcing development.
              </p>
            </div>

            {/* Custom Sliding Tab Selector - Responsive & Overflow Safe */}
            <div className="p-1 rounded-xl bg-white/[0.02] border border-white/[0.06] flex gap-1 overflow-x-auto scrollbar-none">
              {alternatives.map((alt) => (
                <button
                  key={alt.id}
                  onClick={() => setActiveTab(alt.id)}
                  className="relative flex-1 py-2.5 px-3 rounded-lg text-[12px] sm:text-[13px] font-semibold tracking-tight transition-all duration-300 z-10 whitespace-nowrap"
                  style={{
                    fontFamily: '"Satoshi", sans-serif',
                    color: activeTab === alt.id ? "#ffffff" : "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  {activeTab === alt.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {alt.shortLabel}
                </button>
              ))}
            </div>

            {/* Render Tab Points */}
            <div className="flex-1 bg-white/[0.01] border border-white/[0.04] rounded-2xl p-5 sm:p-8 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <p className="text-[11px] font-bold tracking-wider text-white/30 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Typical {activeAlternative.label} issues
                  </p>
                  <ul className="space-y-4">
                    {activeAlternative.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-[14px] text-white/50 leading-relaxed font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        <WarningIcon />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column (7 cols): The Innovation (Nexzoa Card with animated direct engineering route) */}
          <div className="lg:col-span-7 flex">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full rounded-[28px] border border-white/[0.08] p-5 sm:p-12 transition-all duration-500 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] flex flex-col justify-between gap-8"
              style={{
                backgroundColor: "rgba(10, 10, 12, 0.94)",
                backdropFilter: "blur(20px)"
              }}
            >
              {/* Spotlight Glow Overlay */}
              <div
                className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.035), transparent 70%)`,
                }}
              />

              {/* Luxury Corner Light Flare */}
              <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-gradient-to-br from-white/[0.03] to-transparent blur-[45px] pointer-events-none rounded-tr-[28px]" />

              <div className="relative z-10 space-y-8 flex-1 flex flex-col justify-between">
                
                {/* Header inside Nexzoa Card */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Partnering with Nexzoa
                  </h3>
                  <p className="text-[13.5px] text-white/50 mt-1.5 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Engineered to eliminate project management layers and accelerate delivery.
                  </p>
                </div>

                {/* ─── Simple Direct Collaboration Cards ─── */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 relative">
                  {/* Client Card - sticky stack on mobile */}
                  <StickyShell index={0} total={2}>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-bold text-white/40 tracking-wider uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>01 / YOU</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[16px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>Client</h4>
                      <p className="text-[11px] sm:text-[12px] text-white/50 font-light mt-0.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>Direct Vision</p>
                    </div>
                  </div>
                  </StickyShell>

                  {/* Lead Engineer Card - sticky stack on mobile */}
                  <StickyShell index={1} total={2}>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex flex-col justify-between space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        nexzoa<span className="text-white/40 font-bold">*</span>
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[16px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>Lead Engineer</h4>
                      <p className="text-[11px] sm:text-[12px] text-emerald-400 font-medium mt-0.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>Direct Delivery</p>
                    </div>
                  </div>
                  </StickyShell>
                </div>

                {/* Features List - sticky stack on mobile */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 pt-2 relative">
                  {nexzoaFeatures.map((feature, idx) => (
                    <StickyShell key={idx} index={idx} total={nexzoaFeatures.length}>
                    <li className="flex items-start gap-3.5 text-[14px] text-white/80 leading-relaxed font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      <SuccessCheckIcon />
                      <span>{feature}</span>
                    </li>
                    </StickyShell>
                  ))}
                </ul>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
