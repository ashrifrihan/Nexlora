"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── Visual illustrations for each card ─── */

function DiscoveryVisual() {
  return (
    <div className="relative h-48 sm:h-56 w-full flex items-center justify-center overflow-hidden">
      {/* Floating search nodes */}
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Central magnifier */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-blue-400/30 flex items-center justify-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </motion.div>

        {/* Orbiting dots */}
        {[0, 72, 144, 216, 288].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full"
            style={{ backgroundColor: ["#60a5fa", "#818cf8", "#a78bfa", "#34d399", "#fbbf24"][i] }}
            animate={{
              x: [Math.cos((deg * Math.PI) / 180) * 50, Math.cos(((deg + 360) * Math.PI) / 180) * 50],
              y: [Math.sin((deg * Math.PI) / 180) * 50, Math.sin(((deg + 360) * Math.PI) / 180) * 50],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
          />
        ))}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
          <motion.line x1="90" y1="60" x2="150" y2="100" stroke="#3b82f620" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3 }} viewport={{ once: true }} />
          <motion.line x1="210" y1="60" x2="150" y2="100" stroke="#818cf820" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} viewport={{ once: true }} />
          <motion.line x1="90" y1="140" x2="150" y2="100" stroke="#34d39920" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }} viewport={{ once: true }} />
          <motion.line x1="210" y1="140" x2="150" y2="100" stroke="#fbbf2420" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }} viewport={{ once: true }} />
        </svg>

        {/* Floating data cards */}
        <motion.div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] text-white/50 font-mono"
          animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          goals.analyze()
        </motion.div>
        <motion.div className="absolute bottom-6 right-4 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] text-white/50 font-mono"
          animate={{ y: [0, 5, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
          user.research()
        </motion.div>
      </motion.div>
    </div>
  );
}

function PlanningVisual() {
  return (
    <div className="relative h-48 sm:h-56 w-full flex items-center justify-center overflow-hidden">
      {/* Kanban-style board */}
      <div className="flex gap-3 px-4">
        {[
          { label: "Backlog", items: 3, color: "#f59e0b" },
          { label: "In Progress", items: 2, color: "#3b82f6" },
          { label: "Done", items: 2, color: "#10b981" },
        ].map((col, ci) => (
          <motion.div
            key={ci}
            className="w-24 rounded-xl bg-white/[0.03] border border-white/[0.06] p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: col.color }} />
              <span className="text-[10px] font-medium text-white/50">{col.label}</span>
            </div>
            {Array.from({ length: col.items }).map((_, ri) => (
              <motion.div
                key={ri}
                className="mb-1.5 h-5 rounded-md bg-white/[0.04] border border-white/[0.04]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.15 + ri * 0.1 + 0.3, duration: 0.4 }}
                style={{ transformOrigin: "left", width: `${60 + Math.random() * 40}%` }}
              />
            ))}
          </motion.div>
        ))}
      </div>
      {/* Floating tag */}
      <motion.div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-400 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>
        Sprint 1
      </motion.div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="relative h-48 sm:h-56 w-full flex items-center justify-center overflow-hidden px-6">
      {/* UI Components mockup */}
      <motion.div
        className="w-full max-w-[220px] rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 space-y-2.5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header bar */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-pink-500/40 to-purple-500/40" />
          <div className="flex-1 h-2 rounded bg-white/[0.06]" />
          <div className="w-8 h-2 rounded bg-white/[0.04]" />
        </div>
        {/* Color swatches */}
        <div className="flex gap-1.5">
          {["#ec4899", "#a855f7", "#3b82f6", "#10b981", "#f59e0b"].map((c, i) => (
            <motion.div
              key={i}
              className="w-5 h-5 rounded-md"
              style={{ backgroundColor: c, opacity: 0.6 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
        {/* Button mockups */}
        <div className="flex gap-2">
          <div className="h-5 flex-1 rounded-md bg-pink-500/20 border border-pink-500/20" />
          <div className="h-5 flex-1 rounded-md bg-white/[0.04] border border-white/[0.06]" />
        </div>
        {/* Text lines */}
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-white/[0.05]" />
          <div className="h-1.5 w-3/4 rounded bg-white/[0.04]" />
        </div>
      </motion.div>

      {/* Floating cursor */}
      <motion.div
        className="absolute"
        animate={{ x: [80, 100, 90, 80], y: [60, 80, 100, 60] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M1 1l5 16 3-6 6-3L1 1z" fill="#ec4899" fillOpacity="0.8" stroke="#ec4899" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <div className="relative h-48 sm:h-56 w-full overflow-hidden">
      {/* Code editor mockup */}
      <div className="mx-4 mt-4 rounded-xl bg-[#0d0d0d] border border-white/[0.06] overflow-hidden h-full">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
          <span className="ml-2 text-[9px] text-white/25 font-mono">api/routes.ts</span>
        </div>
        {/* Code lines */}
        <div className="p-3 space-y-1.5 font-mono text-[10px]">
          {[
            { indent: 0, parts: [{ t: "export", c: "#c084fc" }, { t: " async ", c: "#93c5fd" }, { t: "function", c: "#c084fc" }, { t: " handler() {", c: "#e5e7eb80" }] },
            { indent: 1, parts: [{ t: "const", c: "#c084fc" }, { t: " data = ", c: "#e5e7eb80" }, { t: "await", c: "#c084fc" }, { t: " fetch(", c: "#e5e7eb80" }, { t: "api", c: "#34d399" }, { t: ")", c: "#e5e7eb80" }] },
            { indent: 1, parts: [{ t: "return", c: "#c084fc" }, { t: " Response.", c: "#93c5fd" }, { t: "json", c: "#fbbf24" }, { t: "(data)", c: "#e5e7eb80" }] },
            { indent: 0, parts: [{ t: "}", c: "#e5e7eb80" }] },
          ].map((line, li) => (
            <motion.div
              key={li}
              className="flex"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + li * 0.12, duration: 0.4 }}
            >
              <span className="w-5 text-white/15 text-right mr-3 select-none">{li + 1}</span>
              <span style={{ paddingLeft: line.indent * 16 }}>
                {line.parts.map((p, pi) => (
                  <span key={pi} style={{ color: p.c }}>{p.t}</span>
                ))}
              </span>
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.div className="ml-8 w-[1px] h-3 bg-purple-400/60" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
        </div>
      </div>
      {/* Terminal badge */}
      <motion.div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-400 font-mono"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }}>
        ✓ compiled
      </motion.div>
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="relative h-48 sm:h-56 w-full flex items-center justify-center overflow-hidden">
      {/* Rocket + deploy animation */}
      <motion.div
        className="relative"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute -inset-8 rounded-full"
          style={{ background: "radial-gradient(circle, #10b98115, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Deploy icon */}
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        </div>
      </motion.div>

      {/* Status badges */}
      <motion.div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/15 text-[10px] text-emerald-400"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
      </motion.div>
      <motion.div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] text-white/40 font-mono"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        99.9% uptime
      </motion.div>
      <motion.div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] text-white/40 font-mono"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }}>
        v1.0 deployed
      </motion.div>
    </div>
  );
}

/* ─── bento card wrapper with hover effects ─── */
function BentoCard({
  children,
  className = "",
  index,
  title,
  description,
  number,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
  title: string;
  description: string;
  number: string;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] transition-all duration-500 hover:border-white/[0.1] cursor-pointer ${className}`}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, ${accent}08, transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          boxShadow: `inset 0 0 0 1px ${accent}20, 0 0 30px -10px ${accent}12`,
        }}
      />
      {/* Visual area */}
      <div className="relative z-10 border-b border-white/[0.04]">{children}</div>
      {/* Text content */}
      <div className="relative z-10 p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[12px] font-bold font-mono tracking-wider" style={{ color: accent, opacity: 0.5 }}>
            {number}
          </span>
          <h3
            className="text-[18px] font-bold tracking-[-0.03em] text-white/95 transition-colors group-hover:text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {title}
          </h3>
        </div>
        <p
          className="text-[14px] leading-[1.6] text-white/40 transition-colors duration-300 group-hover:text-white/55"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── main section ─── */
export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40"
      aria-labelledby="process-heading"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5"
            style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}
          >
            <span className="text-[14px] font-medium tracking-[-0.02em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              How It Works
            </span>
          </motion.div>

          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            A simple process from{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              idea to launch.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/60"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            From discovery to deployment — a structured, transparent software development workflow engineered for speed and reliability.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Discovery - spans 2 cols on large */}
          <BentoCard
            className="sm:col-span-2 lg:col-span-2"
            index={0}
            number="01"
            title="Discovery"
            description="Understanding business goals, operational challenges, and user needs through stakeholder interviews and market research."
            accent="#3b82f6"
          >
            <DiscoveryVisual />
          </BentoCard>

          {/* Planning */}
          <BentoCard
            className="sm:col-span-1"
            index={1}
            number="02"
            title="Planning"
            description="Structuring workflows, systems architecture, and product roadmaps for scalable delivery."
            accent="#f59e0b"
          >
            <PlanningVisual />
          </BentoCard>

          {/* Design */}
          <BentoCard
            className="sm:col-span-1"
            index={2}
            number="03"
            title="Design"
            description="Creating scalable UI/UX systems and interaction patterns — research-driven, conversion-focused."
            accent="#ec4899"
          >
            <DesignVisual />
          </BentoCard>

          {/* Development - spans 2 cols on large */}
          <BentoCard
            className="sm:col-span-2 lg:col-span-2"
            index={3}
            number="04"
            title="Development"
            description="Building frontend, backend, APIs, and integrations with clean code, modern frameworks, shipped iteratively with full transparency."
            accent="#a855f7"
          >
            <DevelopmentVisual />
          </BentoCard>
        </div>

        {/* Launch - full width card */}
        <div className="mt-4 sm:mt-5">
          <BentoCard
            className="w-full"
            index={4}
            number="05"
            title="Launch"
            description="Deployment, performance optimization, monitoring setup, and ongoing improvements — your product, live and scaling with 99.9% uptime."
            accent="#10b981"
          >
            <LaunchVisual />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
