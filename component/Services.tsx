"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── bento card shell ─── */
function BentoCard({ index, children, className = "" }: { index: number; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }} className={className}>
      <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        className="service-card relative overflow-hidden rounded-[20px] border border-white/[0.08] h-full group cursor-pointer transition-all duration-500"
        style={{ background: "linear-gradient(145deg, rgba(18,18,22,1) 0%, rgba(10,10,14,1) 100%)" }}>
        <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500" style={{ opacity: hov ? 1 : 0, background: `radial-gradient(500px circle at ${mp.x}px ${mp.y}px, rgba(120,90,255,0.06), transparent 60%)` }} />
        <div className="pointer-events-none absolute inset-0 z-0 rounded-[20px] transition-opacity duration-500" style={{ opacity: hov ? 1 : 0, boxShadow: "inset 0 0 0 1px rgba(120,90,255,0.15), 0 0 30px -10px rgba(120,90,255,0.1)" }} />
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </motion.div>
  );
}

/* ─── SVG visuals for each card (Borderless direct floating SaaS layouts) ─── */
function WebDevVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden">
      {/* Premium back glow */}
      <div className="absolute w-[160px] h-[80px] bg-blue-500/[0.04] blur-[30px] rounded-full pointer-events-none" />
      
      {/* Floating Browser Mockup */}
      <div className="relative w-full max-w-[210px] flex flex-col justify-between z-10">
        {/* Widget Header (Browser bar) */}
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/[0.04]">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[9px] font-mono tracking-wider text-white/30 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>nexlora.dev</span>
          <motion.div className="w-1.5 h-1.5 rounded-full bg-blue-500" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Browser Content */}
        <div className="flex flex-col gap-2">
          <motion.div className="h-2 bg-blue-500/20 rounded-sm" animate={{ scaleX: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "left", width: "50%" }} />
          <motion.div className="h-1.5 bg-white/5 rounded-sm" animate={{ scaleX: [1, 0.96, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} style={{ transformOrigin: "left", width: "80%" }} />
          <motion.div className="h-1.5 bg-white/5 rounded-sm" animate={{ scaleX: [1, 1.02, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} style={{ transformOrigin: "left", width: "70%" }} />
          
          {/* Action Row */}
          <div className="flex justify-between items-center mt-2 pt-1">
            <motion.div 
              className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center cursor-pointer"
              animate={{ backgroundColor: ["rgba(59,130,246,0.1)", "rgba(59,130,246,0.25)", "rgba(59,130,246,0.1)"], borderColor: ["rgba(59,130,246,0.25)", "rgba(59,130,246,0.6)", "rgba(59,130,246,0.25)"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[7.5px] font-mono font-medium text-blue-400 uppercase tracking-wider">DEPLOY</span>
            </motion.div>
            <span className="text-[8px] font-mono text-white/20">v1.0.4</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function DashboardVisual() {
  const heights = [20, 32, 24, 42, 28, 52, 38];
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden">
      {/* Premium back glow */}
      <div className="absolute w-[160px] h-[80px] bg-amber-500/[0.04] blur-[30px] rounded-full pointer-events-none" />

      {/* Widget Header */}
      <div className="flex justify-between items-center relative z-10 w-full max-w-[210px] mx-auto mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[9px] font-mono tracking-wider text-white/30 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>Analytics</span>
        </div>
        <span className="text-[9px] font-mono font-medium text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded-md border border-amber-500/20" style={{ fontFamily: '"Satoshi", sans-serif' }}>+42.5%</span>
      </div>

      {/* Widget Chart Content */}
      <div className="relative flex-1 w-full max-w-[210px] mx-auto h-[65px] flex items-end z-10">
        <svg className="w-full h-full" viewBox="0 0 180 65" fill="none">
          {/* grid lines */}
          <line x1="0" y1="20" x2="180" y2="20" stroke="rgba(255,255,255,0.02)" strokeWidth="0.75" />
          <line x1="0" y1="40" x2="180" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="0.75" />
          <line x1="0" y1="60" x2="180" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          
          {/* chart bars with corrected deterministic heights */}
          {heights.map((h, i) => (
            <motion.rect key={i} x={15 + i * 22} y={60 - h} width="10" height={h} rx="1.5"
              fill={i === 5 ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.15)"}
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }} style={{ transformOrigin: "bottom" }} />
          ))}

          {/* trend line aligned with peak coordinates */}
          <motion.path 
            d="M20 40 L42 28 L64 36 L86 18 L108 32 L130 8 L152 22" 
            stroke="rgba(245,158,11,0.65)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none" 
            initial={{ pathLength: 0 }} 
            whileInView={{ pathLength: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, delay: 0.3 }} 
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function AIVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden">
      {/* Premium back glow */}
      <div className="absolute w-[160px] h-[80px] bg-purple-500/[0.04] blur-[30px] rounded-full pointer-events-none" />

      {/* Widget Header */}
      <div className="flex justify-between items-center relative z-10 w-full max-w-[210px] mx-auto mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-[9px] font-mono tracking-wider text-white/30 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>AI Pipeline</span>
        </div>
        <span className="text-[9px] font-mono font-medium text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded-md border border-purple-500/20" style={{ fontFamily: '"Satoshi", sans-serif' }}>Active</span>
      </div>

      {/* Center orbital content */}
      <div className="relative flex-1 w-full max-w-[210px] mx-auto h-[65px] flex items-center justify-center z-10">
        <div className="relative w-[60px] h-[60px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80" fill="none">
            <motion.circle cx="40" cy="40" r="35" stroke="rgba(168,85,247,0.15)" strokeWidth="0.75" strokeDasharray="3 4" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
            <motion.circle cx="40" cy="40" r="25" stroke="rgba(168,85,247,0.1)" strokeWidth="0.75" animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
                <circle cx="12" cy="14" r="3" /><path d="M12 17v5" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden">
      {/* Premium back glow */}
      <div className="absolute w-[160px] h-[80px] bg-emerald-500/[0.04] blur-[30px] rounded-full pointer-events-none" />

      {/* Floating mobile card */}
      <div className="relative w-[100px] h-[125px] border border-white/[0.08] bg-white/[0.01] rounded-[18px] p-2 flex flex-col justify-between mx-auto z-10">
        {/* Speaker bar */}
        <div className="w-7 h-0.5 bg-white/10 rounded-full mx-auto mb-1.5" />

        {/* Screen Content looping float */}
        <div className="flex-1 flex flex-col gap-1.5 justify-center">
          {[0, 1].map(i => (
            <motion.div 
              key={i} 
              className="bg-white/[0.02] border border-white/[0.04] rounded-md p-1 flex flex-col gap-1"
              animate={{ y: [0, -2, 0] }} 
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              <motion.div className="h-1 bg-emerald-500/20 rounded-full" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }} style={{ width: i === 0 ? "50%" : "65%" }} />
              <div className="h-0.5 bg-white/5 rounded-full w-[80%]" />
            </motion.div>
          ))}
        </div>

        {/* Bottom tab dots */}
        <div className="flex justify-center gap-1 mt-1.5 pb-0.5">
          {[0, 1, 2].map(i => (
            <motion.div 
              key={i} 
              className="w-1 h-1 rounded-full bg-emerald-500/20"
              animate={{ opacity: [0.3, 0.8, 0.3] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }} 
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function UIUXVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden">
      {/* Premium back glow */}
      <div className="absolute w-[160px] h-[80px] bg-pink-500/[0.04] blur-[30px] rounded-full pointer-events-none" />

      {/* Widget Header */}
      <div className="flex justify-between items-center relative z-10 w-full max-w-[210px] mx-auto mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-[9px] font-mono tracking-wider text-white/30 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>Interface</span>
        </div>
        <span className="text-[9px] font-mono font-medium text-pink-400 bg-pink-500/10 px-1.5 py-0.5 rounded-md border border-pink-500/20" style={{ fontFamily: '"Satoshi", sans-serif' }}>Figma</span>
      </div>

      {/* Content */}
      <div className="relative flex-1 w-full max-w-[210px] mx-auto h-[65px] flex items-center justify-center z-10">
        <svg className="w-full h-full max-w-[130px]" viewBox="0 0 130 65" fill="none">
          <rect x="5" y="5" width="120" height="55" rx="4" stroke="rgba(236,72,153,0.15)" strokeWidth="1" strokeDasharray="4 3" />
          <motion.rect x="15" y="15" width="40" height="20" rx="3" fill="rgba(236,72,153,0.08)" stroke="rgba(236,72,153,0.2)" strokeWidth="0.75" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
          <motion.rect x="65" y="15" width="50" height="8" rx="2" fill="rgba(236,72,153,0.06)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ transformOrigin: "left" }} />
          <motion.rect x="65" y="27" width="35" height="8" rx="2" fill="rgba(236,72,153,0.04)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ transformOrigin: "left" }} />
          {/* cursor */}
          <motion.g animate={{ x: [0, 20, 10], y: [0, -10, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <path d="M90 40 l0 10 l4 -4 l5 0 z" fill="rgba(236,72,153,0.7)" />
          </motion.g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden">
      {/* Premium back glow */}
      <div className="absolute w-[220px] h-[100px] bg-red-500/[0.04] blur-[40px] rounded-full pointer-events-none" />

      {/* Widget Header */}
      <div className="flex justify-between items-center relative z-10 w-full max-w-[210px] mx-auto mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] font-mono tracking-wider text-white/30 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>Workflow</span>
        </div>
        <span className="text-[9px] font-mono font-medium text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded-md border border-red-500/20" style={{ fontFamily: '"Satoshi", sans-serif' }}>Cron</span>
      </div>

      {/* Content */}
      <div className="relative flex-1 w-full max-w-[210px] mx-auto h-[65px] flex items-center justify-center z-10">
        <svg className="w-full h-full max-w-[150px]" viewBox="0 0 150 65" fill="none">
          {/* Gear */}
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "75px 32.5px" }}>
            <circle cx="75" cy="32.5" r="14" stroke="rgba(239,68,68,0.2)" strokeWidth="1" fill="rgba(239,68,68,0.04)" />
            {[0,1,2,3,4,5].map(i => {
              const a = (i * 60 * Math.PI) / 180;
              return <rect key={i} x={75 + Math.cos(a) * 14 - 2} y={32.5 + Math.sin(a) * 14 - 2} width="4" height="4" rx="1" fill="rgba(239,68,68,0.2)" transform={`rotate(${i * 60}, ${75 + Math.cos(a) * 14}, ${32.5 + Math.sin(a) * 14})`} />;
            })}
          </motion.g>
          <circle cx="75" cy="32.5" r="6" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.25)" strokeWidth="0.75" />
          {/* Connection lines */}
          {[{x:25,y:15},{x:125,y:15},{x:25,y:50},{x:125,y:50}].map((n,i) => (
            <g key={i}>
              <motion.line x1="75" y1="32.5" x2={n.x} y2={n.y} stroke="rgba(239,68,68,0.1)" strokeWidth="0.75" strokeDasharray="3 2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }} />
              <motion.circle cx={n.x} cy={n.y} r="4" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" strokeWidth="0.75" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.08, type: "spring" }} />
            </g>
          ))}
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ─── service data ─── */
const services = [
  { id: "web-development", title: "Web Development", desc: "Modern responsive websites built for performance, SEO, and conversion — from landing pages to full-stack platforms.", accent: "#3b82f6", visual: <WebDevVisual />, colSpan: "md:col-span-7 col-span-12" },
  { id: "dashboard-systems", title: "Dashboard Systems", desc: "Realtime operational dashboards for business workflows, analytics, and data-driven decision making.", accent: "#f59e0b", visual: <DashboardVisual />, colSpan: "md:col-span-5 col-span-12" },
  { id: "ai-workflows", title: "AI Workflows", desc: "AI-powered automation systems connected to real business operations — smarter pipelines, fewer bottlenecks.", accent: "#a855f7", visual: <AIVisual />, colSpan: "md:col-span-4 col-span-12" },
  { id: "mobile-apps", title: "Mobile Apps", desc: "Fast mobile experiences for customers, teams, and field operations — built cross-platform, shipped fast.", accent: "#10b981", visual: <MobileVisual />, colSpan: "md:col-span-4 col-span-12" },
  { id: "ui-ux-design", title: "UI/UX Design", desc: "Clean interfaces designed for usability, clarity, and scale — research-driven design that users love.", accent: "#ec4899", visual: <UIUXVisual />, colSpan: "md:col-span-4 col-span-12" },
  { id: "automation-systems", title: "Automation Systems", desc: "Internal tools and automated workflows for repetitive processes — reduce manual work, scale faster.", accent: "#ef4444", visual: <AutomationVisual />, colSpan: "md:col-span-12 col-span-12" },
];

/* ─── main section ─── */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="solutions" className="relative w-full bg-black px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16 md:px-8 md:pt-40 md:pb-20 lg:px-12 lg:pt-48 lg:pb-24 scroll-mt-28 overflow-hidden" aria-labelledby="services-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/[0.03] blur-[140px] rounded-full" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}>
            <span className="text-[14px] font-medium tracking-[-0.02em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>What We Build</span>
          </motion.div>

          <motion.h2 id="services-heading" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Everything needed to run{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">modern digital operations.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            End-to-end software development, AI automation, and custom digital solutions — engineered for scale.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <BentoCard key={s.id} index={i} className={s.colSpan}>
              <div className={`flex ${s.id === "automation-systems" ? "flex-col md:flex-row md:items-center" : "flex-col"} h-full`}>
                {/* Visual area */}
                <div className={`${s.id === "automation-systems" ? "w-full md:w-1/2 h-[200px] md:h-[260px]" : "h-[200px] w-full"} flex items-center justify-center`}>
                  {s.visual}
                </div>
                {/* Text */}
                <div className={`p-6 sm:p-7 ${s.id === "automation-systems" ? "w-full md:w-1/2" : ""}`}>
                  {/* Icon dot */}
                  <div className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.accent, boxShadow: `0 0 8px ${s.accent}60` }} />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white/95 mb-2 group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Satoshi", sans-serif' }}>{s.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/40 group-hover:text-white/55 transition-colors duration-300" style={{ fontFamily: '"Inter", sans-serif' }}>{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="text-[12px] font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ color: s.accent }}>Learn more</span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" style={{ color: s.accent }}><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
