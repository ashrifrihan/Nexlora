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
        onCopy={(e: React.ClipboardEvent<HTMLDivElement>) => e.preventDefault()}
        onDragStart={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
        className="service-card relative overflow-hidden rounded-[20px] border border-white/[0.08] h-full group cursor-pointer transition-all duration-500 select-none"
        style={{ background: "linear-gradient(145deg, rgba(18,18,22,1) 0%, rgba(10,10,14,1) 100%)" }}>
        <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500" style={{ opacity: hov ? 1 : 0, background: `radial-gradient(500px circle at ${mp.x}px ${mp.y}px, rgba(120,90,255,0.06), transparent 60%)` }} />
        <div className="pointer-events-none absolute inset-0 z-0 rounded-[20px] transition-opacity duration-500" style={{ opacity: hov ? 1 : 0, boxShadow: "inset 0 0 0 1px rgba(120,90,255,0.15), 0 0 30px -10px rgba(120,90,255,0.1)" }} />
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </motion.div>
  );
}

/* ─── Bold SVG visuals for each card ─── */

function WebDevVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[220px] h-auto" viewBox="0 0 220 140" fill="none">
        <rect x="10" y="10" width="200" height="120" rx="10" stroke="rgba(59,130,246,0.35)" strokeWidth="2" />
        <rect x="10" y="10" width="200" height="28" rx="10" fill="rgba(59,130,246,0.08)" />
        <circle cx="26" cy="24" r="4.5" fill="#ef4444" />
        <circle cx="38" cy="24" r="4.5" fill="#facc15" />
        <circle cx="50" cy="24" r="4.5" fill="#22c55e" />
        <motion.circle cx="190" cy="24" r="4" fill="#10b981" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
        
        {/* Bolder, Thicker lines */}
        <motion.rect x="26" y="52" width="90" height="10" rx="3" fill="rgba(59,130,246,0.3)" animate={{ scaleX: [1, 1.05, 1] }} transition={{ duration: 3.2, repeat: Infinity }} style={{ transformOrigin: "left" }} />
        <motion.rect x="26" y="70" width="140" height="8" rx="3" fill="rgba(255,255,255,0.12)" animate={{ scaleX: [1, 0.96, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 0.4 }} style={{ transformOrigin: "left" }} />
        <motion.rect x="26" y="86" width="110" height="8" rx="3" fill="rgba(255,255,255,0.08)" animate={{ scaleX: [1, 1.02, 1] }} transition={{ duration: 3.6, repeat: Infinity, delay: 0.8 }} style={{ transformOrigin: "left" }} />
        
        {/* Deploy Button */}
        <motion.rect x="26" y="106" width="65" height="18" rx="5" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
        <text x="58" y="118" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Deploy</text>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function DashboardVisual() {
  const heights = [35, 50, 40, 70, 48, 85, 60];
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[220px] h-auto" viewBox="0 0 220 140" fill="none">
        {/* Thicker columns with gradients */}
        {heights.map((h, i) => (
          <motion.rect
            key={i}
            x={28 + i * 26}
            y={110 - h}
            width="18"
            height={h}
            rx="4"
            fill={i === 5 ? "url(#orangeGradActive)" : "url(#orangeGrad)"}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom" }}
          />
        ))}
        <defs>
          <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="orangeGradActive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Axis line */}
        <line x1="15" y1="110" x2="205" y2="110" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        {/* Bold trend line */}
        <motion.path
          d="M37 75 L63 60 L89 70 L115 40 L141 62 L167 25 L193 50"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        {/* KPI Tag */}
        <motion.rect x="15" y="15" width="65" height="22" rx="6" fill="rgba(10,10,14,0.85)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" />
        <text x="47.5" y="29" textAnchor="middle" fill="#f59e0b" fontSize="8.5" fontWeight="bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>+42.5%</text>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function AIVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[220px] h-auto" viewBox="0 0 220 140" fill="none">
        {/* Prompt Input Widget */}
        <rect x="15" y="15" width="190" height="32" rx="8" fill="rgba(168,85,247,0.06)" stroke="rgba(168,85,247,0.25)" strokeWidth="1.5" />
        <circle cx="32" cy="31" r="5" fill="#a855f7" className="animate-pulse" />
        <rect x="46" y="27" width="90" height="8" rx="2.5" fill="rgba(255,255,255,0.2)" />
        <rect x="146" y="25" width="48" height="12" rx="4" fill="rgba(168,85,247,0.2)" />
        
        {/* Direct Connect line */}
        <path d="M110 47 L110 65" stroke="rgba(168,85,247,0.3)" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="110,69 106,63 114,63" fill="rgba(168,85,247,0.4)" />

        {/* Model Accuracy Output Widget */}
        <rect x="15" y="72" width="190" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        <text x="30" y="92" fill="rgba(255,255,255,0.7)" fontSize="8.5" fontWeight="bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Model Accuracy</text>
        <text x="190" y="92" textAnchor="end" fill="#a855f7" fontSize="8.5" fontWeight="bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>99.4%</text>
        
        {/* Bold Accuracy progress bar */}
        <rect x="30" y="99" width="160" height="7" rx="3.5" fill="rgba(255,255,255,0.05)" />
        <motion.rect
          x="30"
          y="99"
          width="150"
          height="7"
          rx="3.5"
          fill="#a855f7"
          initial={{ width: 0 }}
          whileInView={{ width: 150 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[110px] h-auto" viewBox="0 0 100 160" fill="none">
        <rect x="8" y="4" width="84" height="152" rx="16" stroke="rgba(16,185,129,0.35)" strokeWidth="2" fill="rgba(16,185,129,0.04)" />
        <rect x="33" y="12" width="34" height="5" rx="2.5" fill="rgba(16,185,129,0.2)" />
        
        {/* Bolder Mobile Cards */}
        {[0, 1].map(i => (
          <motion.g key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.5 }}>
            <rect x="18" y={32 + i * 44} width="64" height="34" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
            <rect x="26" y={40 + i * 44} width="28" height="5" rx="1.5" fill="rgba(16,185,129,0.4)" />
            <rect x="26" y={50 + i * 44} width="48" height="4" rx="1" fill="rgba(255,255,255,0.08)" />
          </motion.g>
        ))}
        
        <rect x="8" y="132" width="84" height="24" rx="0" fill="rgba(16,185,129,0.06)" />
        {[0, 1, 2].map(i => (
          <circle key={i} cx={28 + i * 22} cy="144" r="3.5" fill="rgba(16,185,129,0.3)" />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function UIUXVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[180px] h-auto" viewBox="0 0 180 140" fill="none">
        <rect x="15" y="10" width="150" height="120" rx="10" stroke="rgba(236,72,153,0.3)" strokeWidth="1.5" strokeDasharray="6 4" />
        
        {/* Layout elements */}
        <motion.rect x="28" y="22" width="60" height="45" rx="8" fill="rgba(236,72,153,0.12)" stroke="rgba(236,72,153,0.35)" strokeWidth="1.5" />
        <motion.rect x="98" y="22" width="54" height="20" rx="5" fill="rgba(236,72,153,0.08)" />
        <motion.rect x="98" y="48" width="54" height="18" rx="5" fill="rgba(236,72,153,0.04)" />
        <motion.rect x="28" y="78" width="124" height="16" rx="5" fill="rgba(236,72,153,0.06)" />
        <motion.rect x="28" y="102" width="55" height="20" rx="10" fill="rgba(236,72,153,0.2)" stroke="rgba(236,72,153,0.4)" strokeWidth="1.5" />
        
        {/* Bold Design cursor */}
        <motion.g animate={{ x: [0, 35, 15], y: [0, -18, 5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M120 90 l0 16 l5 -5 l8 0 z" fill="#ec4899" />
        </motion.g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      <svg className="w-full max-w-[220px] h-auto" viewBox="0 0 220 140" fill="none">
        {/* Left Webhook Trigger Card */}
        <rect x="15" y="45" width="50" height="50" rx="8" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.25)" strokeWidth="1.5" />
        <circle cx="40" cy="65" r="8" fill="rgba(239,68,68,0.2)" />
        <text x="40" y="85" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold" style={{ fontFamily: '"Satoshi", sans-serif' }}>Webhook</text>

        {/* Dynamic connection path */}
        <path d="M65 70 L95 70" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <motion.circle
          cx="65"
          cy="70"
          r="3"
          fill="#ef4444"
          animate={{ cx: [65, 95] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle filtering node card */}
        <rect x="95" y="35" width="50" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        <rect x="105" y="47" width="30" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="105" y="61" width="30" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="105" y="75" width="30" height="6" rx="2" fill="rgba(239,68,68,0.2)" />
        <text x="120" y="95" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" style={{ fontFamily: '"Satoshi", sans-serif' }}>Filter Node</text>

        {/* Dynamic connection path */}
        <path d="M145 70 L175 70" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <motion.circle
          cx="145"
          cy="70"
          r="3"
          fill="#ef4444"
          animate={{ cx: [145, 175] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.55 }}
        />

        {/* Right Database update node card */}
        <rect x="175" y="45" width="30" height="50" rx="8" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.25)" strokeWidth="1.5" />
        <rect x="181" y="57" width="18" height="6" rx="2" fill="#ef4444" />
        <rect x="181" y="67" width="18" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="181" y="77" width="18" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
    </div>
  );
}

/* ─── service data ─── */
const services = [
  { id: "web-development", title: "Web Development", desc: "Modern responsive websites built for performance, SEO, and conversion from landing pages to full-stack platforms.", accent: "#3b82f6", visual: <WebDevVisual />, colSpan: "md:col-span-7 col-span-12" },
  { id: "dashboard-systems", title: "Dashboard Systems", desc: "Realtime operational dashboards for business workflows, analytics, and data-driven decision making.", accent: "#f59e0b", visual: <DashboardVisual />, colSpan: "md:col-span-5 col-span-12" },
  { id: "ai-workflows", title: "AI Workflows", desc: "AI-powered automation systems connected to real business operations smarter pipelines, fewer bottlenecks.", accent: "#a855f7", visual: <AIVisual />, colSpan: "md:col-span-4 col-span-12" },
  { id: "mobile-apps", title: "Mobile Apps", desc: "Fast mobile experiences for customers, teams, and field operations built cross-platform, shipped fast.", accent: "#10b981", visual: <MobileVisual />, colSpan: "md:col-span-4 col-span-12" },
  { id: "ui-ux-design", title: "UI/UX Design", desc: "Clean interfaces designed for usability, clarity, and scale research-driven design that users love.", accent: "#ec4899", visual: <UIUXVisual />, colSpan: "md:col-span-4 col-span-12" },
  { id: "automation-systems", title: "Automation Systems", desc: "Internal tools and automated workflows for repetitive processes reduce manual work, scale faster.", accent: "#ef4444", visual: <AutomationVisual />, colSpan: "md:col-span-12 col-span-12" },
];

/* ─── main section ─── */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="solutions" className="perf-section relative w-full bg-black px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16 md:px-8 md:pt-40 md:pb-20 lg:px-12 lg:pt-48 lg:pb-24 scroll-mt-28 overflow-hidden" aria-labelledby="services-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="perf-glow pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/[0.03] blur-[140px] rounded-full" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}>
            <span className="text-[14px] font-medium tracking-[-0.02em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>What We Build</span>
          </motion.div>

          <motion.h2 id="services-heading" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            <span className="sr-only">Nexzoa Solutions &amp; Custom Software Services: </span>
            Everything needed to run{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">modern digital operations.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            End-to-end software development, AI automation, and custom digital solutions engineered for scale.
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
                  <p className="text-[13px] leading-[1.65] text-white/40 group-hover:text-white/55 transition-colors duration-300" style={{ fontFamily: '"Satoshi", sans-serif' }}>{s.desc}</p>
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