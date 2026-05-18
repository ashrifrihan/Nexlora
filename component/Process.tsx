"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── Visual illustrations for each card ─── */

const planningCardWidths = [
  ["78%", "66%", "88%"],
  ["94%", "72%"],
  ["86%", "64%"],
];

function DiscoveryVisual() {
  return (
    <div className="relative h-52 sm:h-64 w-full overflow-hidden">
      {/* Dotted grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 260" fill="none">
        <motion.path d="M200 50 C220 50, 240 80, 300 80" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.25"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }} />
        <motion.path d="M300 80 C360 80, 370 130, 400 130" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.25"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6 }} />
        <motion.path d="M300 80 C310 110, 280 160, 220 180" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.25"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.9 }} />
      </svg>

      {/* Client card - top left */}
      <motion.div className="absolute top-5 left-5 sm:left-8 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-white/80">Client: Nexlora</div>
          <div className="text-[9px] text-white/30">Onboarded: May 2026</div>
        </div>
        <motion.div className="w-1.5 h-1.5 rounded-full bg-blue-400" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>

      {/* Central strategy card */}
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 rounded-xl bg-[#0d0d0d] border border-white/[0.08] p-3.5 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] font-semibold text-white/80">Business Goals</div>
          <div className="px-1.5 py-0.5 rounded bg-blue-500/15 text-[8px] font-medium text-blue-400">Active</div>
        </div>
        <div className="space-y-2">
          {["Revenue Growth", "User Retention", "Ops Efficiency"].map((g, i) => (
            <motion.div key={i} className="flex items-center gap-2"
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }}>
              <div className="w-3.5 h-3.5 rounded border border-blue-400/30 flex items-center justify-center">
                <motion.svg className="w-2 h-2 text-blue-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.15 }}>
                  <motion.path d="M2 6l3 3 5-5" />
                </motion.svg>
              </div>
              <span className="text-[10px] text-white/50">{g}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stakeholder card - right */}
      <motion.div className="absolute top-8 right-4 sm:right-8 rounded-xl bg-white/[0.03] border border-white/[0.06] p-2.5"
        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}>
        <div className="text-[9px] text-white/30 mb-1.5">Stakeholders</div>
        <div className="flex -space-x-2">
          {["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"].map((c, i) => (
            <motion.div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[8px] font-bold text-white/70"
              style={{ backgroundColor: c + "30" }}
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.08, type: "spring" }}>
              {["PM", "CTO", "UX", "BD"][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Research notes - bottom */}
      <motion.div className="absolute bottom-4 left-6 sm:left-12 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
        animate={{ y: [0, -3, 0] }} /*transition loop handled by animate*/>
        <svg className="w-3.5 h-3.5 text-indigo-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
        <span className="text-[10px] text-white/40">research_notes.md</span>
      </motion.div>

      {/* Tool icons - bottom right */}
      <motion.div className="absolute bottom-5 right-5 sm:right-10 flex gap-2"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
        {["#3b82f6", "#10b981", "#f59e0b"].map((c, i) => (
          <motion.div key={i} className="w-7 h-7 rounded-lg border border-white/[0.06] flex items-center justify-center"
            style={{ backgroundColor: c + "10" }}
            animate={{ y: [0, -3, 0] }} transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}>
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c, opacity: 0.5 }} />
          </motion.div>
        ))}
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
                style={{ transformOrigin: "left", width: planningCardWidths[ci][ri] }}
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

function TestingVisual() {
  return (
    <div className="relative h-48 sm:h-56 w-full overflow-hidden flex items-center justify-center px-4">
      {/* Test results panel */}
      <motion.div className="w-full max-w-[240px] rounded-xl bg-[#0d0d0d] border border-white/[0.06] overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.04]">
          <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path d="m9 15 2 2 4-4" /></svg>
          <span className="text-[10px] font-semibold text-white/60">Test Suite</span>
          <div className="ml-auto px-1.5 py-0.5 rounded bg-emerald-500/15 text-[8px] font-bold text-emerald-400">PASS</div>
        </div>
        <div className="p-3 space-y-2">
          {[
            { name: "Unit Tests", count: "48/48", pass: true },
            { name: "Integration", count: "12/12", pass: true },
            { name: "E2E", count: "8/8", pass: true },
            { name: "Performance", count: "< 200ms", pass: true },
          ].map((t, i) => (
            <motion.div key={i} className="flex items-center gap-2"
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
              <motion.div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: "#10b98120" }}
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.12, type: "spring" }}>
                <svg className="w-2 h-2 text-emerald-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 6l3 3 5-5" /></svg>
              </motion.div>
              <span className="text-[10px] text-white/45 flex-1">{t.name}</span>
              <span className="text-[9px] font-mono text-emerald-400/60">{t.count}</span>
            </motion.div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="mx-3 mb-3 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-500/60 to-emerald-400/40"
            initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }} />
        </div>
      </motion.div>
      {/* Coverage badge */}
      <motion.div className="absolute top-3 right-4 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-400 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>Coverage 97%</motion.div>
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="relative h-52 sm:h-64 w-full overflow-hidden">
      {/* Dotted grid bg */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      {/* Deployment pipeline - horizontal flow */}
      <div className="absolute left-6 sm:left-10 top-6 flex items-center gap-1.5">
        {["Build", "Test", "Stage", "Prod"].map((s, i) => (
          <motion.div key={i} className="flex items-center gap-1.5"
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15 }}>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border" style={{ borderColor: i < 4 ? "#10b98125" : "#ffffff08", backgroundColor: i < 4 ? "#10b98108" : "#ffffff03" }}>
              <motion.div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10b981" }}
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.2, type: "spring" }} />
              <span className="text-[9px] font-medium" style={{ color: "#10b981", opacity: 0.7 }}>{s}</span>
            </div>
            {i < 3 && (
              <motion.svg width="14" height="8" viewBox="0 0 14 8" className="text-emerald-500/20"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.15 }}>
                <path d="M0 4h10M8 1l3 3-3 3" stroke="currentColor" strokeWidth="1" fill="none" />
              </motion.svg>
            )}
          </motion.div>
        ))}
      </div>

      {/* Central metrics dashboard */}
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] w-64 sm:w-72 rounded-xl bg-[#0d0d0d] border border-white/[0.08] p-4"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-white/70">Production</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400/50">v1.0.0</span>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1.5 h-12 mb-3">
          {[40, 65, 45, 80, 55, 90, 70, 95, 75, 85].map((h, i) => (
            <motion.div key={i} className="flex-1 rounded-sm" style={{ backgroundColor: i >= 8 ? "#10b98140" : "#10b98120" }}
              initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }} />
          ))}
        </div>
        <div className="flex justify-between">
          {[{ l: "Uptime", v: "99.9%" }, { l: "Latency", v: "42ms" }, { l: "Users", v: "1.2k" }].map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-[10px] font-bold text-white/60">{m.v}</div>
              <div className="text-[8px] text-white/25">{m.l}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Status badge bottom left */}
      <motion.div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/8 border border-emerald-500/15"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
        <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
        <span className="text-[10px] text-emerald-400/70 font-medium">All systems operational</span>
      </motion.div>

      {/* Activity indicator - bottom right */}
      <motion.div className="absolute bottom-4 right-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }}>
        <span className="text-[10px] text-white/40">Last deploy:</span>
        <span className="text-[10px] text-white/60 font-mono">2 min ago</span>
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
      className={`bento-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] transition-all duration-500 hover:border-white/[0.1] cursor-pointer ${className}`}
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
          >
            {title}
          </h3>
        </div>
        <p
          className="text-[14px] leading-[1.6] text-white/40 transition-colors duration-300 group-hover:text-white/55"
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
          <motion.div initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}>
            <span className="text-[14px] font-medium tracking-[-0.02em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>How It Works</span>
          </motion.div>

          <motion.h2 id="process-heading" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            A simple process from{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">idea to launch.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            From discovery to deployment — a structured, transparent software development workflow engineered for speed and reliability.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Row 1: Discovery (2-col) + Planning (1-col) */}
          <BentoCard
            className="sm:col-span-2 lg:col-span-2"
            index={0}
            number="01"
            title="Discovery"
            description="Understanding business goals and operational problems through stakeholder alignment, user research, and competitive analysis."
            accent="#3b82f6"
          >
            <DiscoveryVisual />
          </BentoCard>

          <BentoCard
            className="sm:col-span-1"
            index={1}
            number="02"
            title="Planning"
            description="Structuring workflows, systems, and product architecture for scalable, milestone-driven delivery."
            accent="#f59e0b"
          >
            <PlanningVisual />
          </BentoCard>

          {/* Row 2: Design (1-col) + Development (2-col) */}
          <BentoCard
            className="sm:col-span-1"
            index={2}
            number="03"
            title="Design"
            description="Creating scalable UI/UX systems and interactions — research-driven, conversion-focused."
            accent="#ec4899"
          >
            <DesignVisual />
          </BentoCard>

          <BentoCard
            className="sm:col-span-2 lg:col-span-2"
            index={3}
            number="04"
            title="Development"
            description="Building frontend, backend, APIs, and integrations with clean code, modern frameworks, shipped iteratively."
            accent="#a855f7"
          >
            <DevelopmentVisual />
          </BentoCard>

          {/* Row 3: Testing (1-col) + Launch (2-col) */}
          <BentoCard
            className="sm:col-span-1"
            index={4}
            number="05"
            title="Testing"
            description="Quality assurance, performance checks, and system validation — ensuring reliability before every release."
            accent="#f97316"
          >
            <TestingVisual />
          </BentoCard>

          <BentoCard
            className="sm:col-span-2 lg:col-span-2"
            index={5}
            number="06"
            title="Launch"
            description="Deployment, optimization, and ongoing improvements — your product, live and scaling with 99.9% uptime."
            accent="#10b981"
          >
            <LaunchVisual />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
