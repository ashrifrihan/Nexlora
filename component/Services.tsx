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

/* ─── SVG visuals for each card ─── */
function WebDevVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[220px] h-auto" viewBox="0 0 220 140" fill="none">
        <rect x="10" y="10" width="200" height="120" rx="8" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <rect x="10" y="10" width="200" height="24" rx="8" fill="rgba(59,130,246,0.06)" />
        <circle cx="24" cy="22" r="3" fill="rgba(239,68,68,0.6)" />
        <circle cx="34" cy="22" r="3" fill="rgba(250,204,21,0.6)" />
        <circle cx="44" cy="22" r="3" fill="rgba(34,197,94,0.6)" />
        <motion.rect x="24" y="46" width="80" height="8" rx="2" fill="rgba(59,130,246,0.25)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} style={{ transformOrigin: "left" }} />
        <motion.rect x="24" y="62" width="120" height="6" rx="2" fill="rgba(255,255,255,0.06)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} style={{ transformOrigin: "left" }} />
        <motion.rect x="24" y="76" width="100" height="6" rx="2" fill="rgba(255,255,255,0.04)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} style={{ transformOrigin: "left" }} />
        <motion.rect x="24" y="96" width="60" height="22" rx="6" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} />
        <motion.text x="54" y="111" textAnchor="middle" fill="rgba(59,130,246,0.8)" fontSize="8" fontFamily="monospace" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>Deploy</motion.text>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[220px] h-auto" viewBox="0 0 220 140" fill="none">
        {/* chart bars */}
        {[0,1,2,3,4,5,6].map(i => (
          <motion.rect key={i} x={30 + i * 26} y={110 - (20 + Math.sin(i * 0.8) * 40)} width="16" height={20 + Math.sin(i * 0.8) * 40} rx="3"
            fill={i === 4 ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.15)"}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 * i }} style={{ transformOrigin: "bottom" }} />
        ))}
        {/* axis */}
        <line x1="20" y1="110" x2="210" y2="110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* trend line */}
        <motion.path d="M38 85 L64 70 L90 78 L116 45 L142 55 L168 30 L194 40" stroke="rgba(245,158,11,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }} />
        {/* KPI badges */}
        <motion.rect x="140" y="15" width="70" height="24" rx="6" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 }} />
        <text x="175" y="31" textAnchor="middle" fill="rgba(245,158,11,0.8)" fontSize="9" fontFamily="monospace">+42.5%</text>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function AIVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative w-[160px] h-[160px]">
        {/* Orbital rings */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160" fill="none">
          <motion.circle cx="80" cy="80" r="70" stroke="rgba(168,85,247,0.12)" strokeWidth="1" strokeDasharray="4 6" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
          <motion.circle cx="80" cy="80" r="50" stroke="rgba(168,85,247,0.08)" strokeWidth="1" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
          <motion.circle cx="80" cy="80" r="30" stroke="rgba(168,85,247,0.15)" strokeWidth="1.5" strokeDasharray="8 4" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
        </svg>
        {/* Center brain icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth="1.5" className="w-6 h-6">
              <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
              <circle cx="12" cy="14" r="3" /><path d="M12 17v5" />
            </svg>
          </motion.div>
        </div>
        {/* Floating nodes */}
        {[0, 1, 2, 3].map(i => (
          <motion.div key={i} className="absolute w-2.5 h-2.5 rounded-full bg-purple-400/60" style={{ left: 80 + Math.cos((i * Math.PI) / 2) * 60 - 5, top: 80 + Math.sin((i * Math.PI) / 2) * 60 - 5 }} animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} />
        ))}
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[100px] h-auto" viewBox="0 0 100 160" fill="none">
        <rect x="10" y="5" width="80" height="150" rx="14" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" fill="rgba(16,185,129,0.03)" />
        <rect x="35" y="12" width="30" height="4" rx="2" fill="rgba(16,185,129,0.15)" />
        {/* App rows */}
        {[0,1,2].map(i => (
          <motion.g key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15 }}>
            <rect x="20" y={36 + i * 34} width="60" height="26" rx="6" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.1)" strokeWidth="0.5" />
            <rect x="28" y={42 + i * 34} width={20 + i * 8} height="4" rx="1" fill={`rgba(16,185,129,${0.3 - i * 0.05})`} />
            <rect x="28" y={50 + i * 34} width="36" height="3" rx="1" fill="rgba(255,255,255,0.05)" />
          </motion.g>
        ))}
        {/* Bottom nav */}
        <rect x="10" y="135" width="80" height="20" rx="0" fill="rgba(16,185,129,0.04)" />
        {[0,1,2].map(i => <circle key={i} cx={30 + i * 20} cy="145" r="3" fill="rgba(16,185,129,0.2)" />)}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function UIUXVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[180px] h-auto" viewBox="0 0 180 140" fill="none">
        {/* Design frame */}
        <rect x="20" y="15" width="140" height="110" rx="8" stroke="rgba(236,72,153,0.15)" strokeWidth="1" strokeDasharray="6 4" />
        {/* Layout blocks */}
        <motion.rect x="30" y="25" width="55" height="40" rx="6" fill="rgba(236,72,153,0.08)" stroke="rgba(236,72,153,0.2)" strokeWidth="1" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
        <motion.rect x="95" y="25" width="55" height="18" rx="4" fill="rgba(236,72,153,0.06)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }} style={{ transformOrigin: "left" }} />
        <motion.rect x="95" y="49" width="55" height="16" rx="4" fill="rgba(236,72,153,0.04)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }} style={{ transformOrigin: "left" }} />
        <motion.rect x="30" y="75" width="120" height="14" rx="4" fill="rgba(236,72,153,0.05)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.55 }} style={{ transformOrigin: "left" }} />
        <motion.rect x="30" y="97" width="50" height="18" rx="8" fill="rgba(236,72,153,0.15)" stroke="rgba(236,72,153,0.3)" strokeWidth="1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
        {/* cursor */}
        <motion.g animate={{ x: [0, 30, 15], y: [0, -15, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M120 90 l0 14 l5 -5 l7 0 z" fill="rgba(236,72,153,0.7)" />
        </motion.g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[200px] h-auto" viewBox="0 0 200 140" fill="none">
        {/* Gear */}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 70px" }}>
          <circle cx="100" cy="70" r="25" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" fill="rgba(239,68,68,0.04)" />
          {[0,1,2,3,4,5].map(i => {
            const a = (i * 60 * Math.PI) / 180;
            return <rect key={i} x={100 + Math.cos(a) * 25 - 4} y={70 + Math.sin(a) * 25 - 4} width="8" height="8" rx="2" fill="rgba(239,68,68,0.15)" transform={`rotate(${i * 60}, ${100 + Math.cos(a) * 25}, ${70 + Math.sin(a) * 25})`} />;
          })}
        </motion.g>
        <circle cx="100" cy="70" r="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.25)" strokeWidth="1" />
        {/* Connection lines to nodes */}
        {[{x:35,y:30},{x:165,y:30},{x:35,y:110},{x:165,y:110}].map((n,i) => (
          <g key={i}>
            <motion.line x1="100" y1="70" x2={n.x} y2={n.y} stroke="rgba(239,68,68,0.1)" strokeWidth="1" strokeDasharray="4 3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }} />
            <motion.circle cx={n.x} cy={n.y} r="6" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" strokeWidth="1" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1, type: "spring" }} />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
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
