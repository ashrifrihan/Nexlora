"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── comparison data ─── */
const nexloraFeatures = [
  "Product-focused development",
  "Direct communication with builders",
  "Fast iteration cycles",
  "Modern UI/UX systems",
  "AI-ready architecture",
  "Scalable frontend & backend",
  "Business workflow understanding",
  "Long-term optimization support",
  "Clean responsive interfaces",
  "SEO-ready product structure",
];

interface CompetitorColumn {
  title: string;
  items: string[];
}

const competitors: CompetitorColumn[] = [
  {
    title: "Traditional Software Companies",
    items: [
      "Slow delivery pipelines",
      "Multiple communication layers",
      "Outdated interface patterns",
      "Generic website structures",
      "Hard-to-scale architecture",
      "Weak product thinking",
      "Expensive long-term changes",
      "Limited flexibility",
      "Heavy process overhead",
      "Disconnected design and engineering",
    ],
  },
  {
    title: "Freelance Teams",
    items: [
      "Inconsistent quality",
      "Unclear project timelines",
      "Communication delays",
      "No structured workflow",
      "Weak scalability planning",
      "Limited support after launch",
      "Design inconsistency",
      "Difficult long-term maintenance",
      "Missing backend architecture planning",
      "Limited business understanding",
    ],
  },
  {
    title: "Template-Based Agencies",
    items: [
      "Reused design systems",
      "Generic user experiences",
      "Limited customization",
      "Weak technical depth",
      "Poor performance optimization",
      "Minimal product strategy",
      "Low flexibility for scaling",
      "Basic SEO implementation",
      "Surface-level branding",
      "Cookie-cutter development process",
    ],
  },
];

/* ─── Check / Cross icons ─── */
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="#10b981" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Nexlora highlighted card with mouse-follow glow ─── */
function NexloraCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[24px] border border-white/[0.12] h-full p-6 sm:p-7 transition-all duration-500 hover:border-white/[0.2] group"
        style={{
          background: "linear-gradient(145deg, rgba(18,18,24,1) 0%, rgba(12,12,16,1) 100%)",
        }}
      >
        {/* Mouse-follow radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(500px circle at ${mp.x}px ${mp.y}px, rgba(16,185,129,0.07), transparent 60%)`,
          }}
        />

        {/* Border glow overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[24px] transition-opacity duration-500"
          style={{
            opacity: hov ? 1 : 0,
            boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.2), 0 0 40px -10px rgba(16,185,129,0.12)",
          }}
        />

        {/* Soft ambient gradient glow behind card */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[180px] bg-emerald-500/[0.04] blur-[60px] rounded-full pointer-events-none" />

        {/* Moving light beam animation */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px]"
          style={{ opacity: 0.4 }}
        >
          <motion.div
            className="absolute w-[200px] h-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.04), transparent)",
            }}
            animate={{ x: ["-200px", "600px"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />
        </motion.div>

        {/* Top edge glow */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
          {/* Card Header */}
          <div className="mb-7 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3
              className="text-[18px] sm:text-[20px] font-bold text-white tracking-[-0.03em]"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Nexlora
            </h3>
          </div>

          {/* Feature rows */}
          <div className="flex flex-col gap-0">
            {nexloraFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 py-3 border-b border-white/[0.04] last:border-0 group/row hover:translate-x-1 transition-transform duration-200"
              >
                <CheckIcon />
                <span
                  className="text-[13px] sm:text-[14px] text-white/75 group-hover/row:text-white/95 transition-colors duration-200"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Competitor card ─── */
function CompetitorCard({ data, index }: { data: CompetitorColumn; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-full"
    >
      <div
        className="relative overflow-hidden rounded-[24px] border border-white/[0.06] h-full p-6 sm:p-7 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.01]"
        style={{
          background: "linear-gradient(145deg, rgba(14,14,17,1) 0%, rgba(9,9,12,1) 100%)",
        }}
      >
        <div className="relative z-10">
          {/* Card Header */}
          <div className="mb-7">
            <h3
              className="text-[15px] sm:text-[16px] font-semibold text-white/60 tracking-[-0.02em]"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {data.title}
            </h3>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-0">
            {data.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 py-3 border-b border-white/[0.03] last:border-0 group/row hover:translate-x-1 transition-transform duration-200"
              >
                <CrossIcon />
                <span
                  className="text-[13px] text-white/35 group-hover/row:text-white/50 transition-colors duration-200"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mobile swipeable card view ─── */
function MobileCompareCards() {
  const [activeTab, setActiveTab] = useState(0);
  const allColumns = [
    { title: "Nexlora", isNexlora: true },
    ...competitors.map((c) => ({ title: c.title, isNexlora: false })),
  ];

  return (
    <div className="lg:hidden">
      {/* Sticky tab navigation */}
      <div className="sticky top-[72px] z-20 -mx-4 px-4 py-3 bg-black/90 backdrop-blur-md border-b border-white/[0.04]">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {allColumns.map((col, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-300 border ${
                activeTab === i
                  ? col.isNexlora
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-white/[0.06] border-white/[0.15] text-white/80"
                  : "bg-transparent border-white/[0.06] text-white/40 hover:text-white/60"
              }`}
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {col.title}
            </button>
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-6">
        {activeTab === 0 ? (
          <NexloraCard />
        ) : (
          <CompetitorCard data={competitors[activeTab - 1]} index={activeTab - 1} />
        )}
      </div>
    </div>
  );
}

/* ─── Main Compare Section ─── */
export default function Compare() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="compare"
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden"
      aria-labelledby="compare-heading"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-600/[0.015] blur-[140px] rounded-full" />

      {/* Thin background grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }} />
        {/* Fade out edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl z-10">
        {/* ── Section Header ── */}
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
              Comparison
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
            Why teams choose{" "}
            <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/40 bg-clip-text text-transparent">
              Nexlora
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(14px,2vw,18px)] font-medium leading-[1.5] tracking-[-0.01em] text-white/45"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Built for businesses that need fast execution, scalable systems, and modern product experiences.
          </motion.p>
        </div>

        {/* ── Desktop: 4-Column Grid ── */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 items-stretch">
          <NexloraCard />
          {competitors.map((comp, i) => (
            <CompetitorCard key={comp.title} data={comp} index={i} />
          ))}
        </div>

        {/* ── Mobile: Swipeable Cards ── */}
        <MobileCompareCards />
      </div>
    </section>
  );
}
