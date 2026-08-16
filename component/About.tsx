"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

function AboutCard({
  index,
  children,
  className = "",
}: {
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl h-full p-8 sm:p-10 transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[320px]"
      >
        {/* Glow spotlight overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(400px circle at ${mp.x}px ${mp.y}px, rgba(255, 255, 255, 0.04), transparent 75%)`,
          }}
        />
        {/* Luxury corner flare */}
        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-white/[0.015] to-transparent blur-[35px] pointer-events-none rounded-tr-[28px] z-0" />
        
        <div className="relative z-10 h-full flex flex-col justify-between gap-6 w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function DirectEngineeringVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden flex items-center justify-center bg-white/[0.01] border border-white/[0.04] rounded-2xl p-4 mt-auto">
      <div className="flex items-center justify-between w-full max-w-[220px] relative">
        {/* Client node */}
        <div className="flex flex-col items-center gap-1 z-10 shrink-0">
          <div className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 text-[9px] font-bold select-none">
            YOU
          </div>
          <span className="text-[8px] text-white/45 font-medium tracking-wide">Client</span>
        </div>

        {/* Pulse Line */}
        <div className="flex-1 relative h-[1.5px] mx-3 bg-white/[0.08] overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Lead Engineer node */}
        <div className="flex flex-col items-center gap-1 z-10 shrink-0">
          <div className="w-9 h-9 rounded-full bg-white border border-white/10 flex items-center justify-center text-black text-[9px] font-black select-none shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            NZ
          </div>
          <span className="text-[8px] text-white/90 font-bold tracking-wide">Lead Engineer</span>
        </div>
      </div>
    </div>
  );
}

function PerformanceVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden flex items-center justify-center bg-white/[0.01] border border-white/[0.04] rounded-2xl p-4 mt-auto">
      <div className="flex items-center gap-5">
        {/* Animated Gauge */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-white/[0.05]"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="text-white/80"
              strokeWidth="2.5"
              strokeDasharray="99, 100"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              initial={{ strokeDasharray: "0, 100" }}
              whileInView={{ strokeDasharray: "99, 100" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-[15px] font-black text-white leading-none">99</span>
            <span className="text-[6px] text-white/40 font-bold uppercase tracking-wider mt-0.5">MS</span>
          </div>
        </div>

        {/* Spec list */}
        <div className="flex flex-col gap-1 justify-center font-sans">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[9.5px] font-semibold text-white/80">Lighthouse Performance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="text-[9.5px] font-medium text-white/50">Core Web Vitals Optimized</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="text-[9.5px] font-medium text-white/50">&lt; 100ms TTFB globally</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden flex items-center justify-center bg-white/[0.01] border border-white/[0.04] rounded-2xl p-4 mt-auto">
      <svg className="w-full max-w-[240px] h-full" viewBox="0 0 240 80">
        {/* Connecting lines */}
        <line x1="25" y1="40" x2="70" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        <line x1="25" y1="40" x2="70" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        <line x1="70" y1="20" x2="140" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        <line x1="70" y1="60" x2="140" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        <line x1="140" y1="20" x2="195" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        <line x1="140" y1="60" x2="195" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        <line x1="70" y1="20" x2="70" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        <line x1="140" y1="20" x2="140" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        <line x1="70" y1="20" x2="140" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

        {/* Nodes */}
        <circle cx="25" cy="40" r="3" fill="#ffffff" />
        <circle cx="70" cy="20" r="4" fill="#ffffff" />
        <circle cx="70" cy="60" r="4" fill="#ffffff" />
        <circle cx="140" cy="20" r="4" fill="#ffffff" />
        <circle cx="140" cy="60" r="4" fill="#ffffff" />
        <circle cx="195" cy="40" r="3" fill="#ffffff" />

        {/* Pulsating animation overlay on nodes */}
        <motion.circle
          cx="70"
          cy="20"
          r="7"
          stroke="#ffffff"
          strokeWidth="1"
          fill="none"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="140"
          cy="60"
          r="7"
          stroke="#ffffff"
          strokeWidth="1"
          fill="none"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />

        {/* Label overlays */}
        <text x="25" y="30" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontWeight="bold">Ingress</text>
        <text x="105" y="14" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6" fontWeight="bold">Distributed Nodes</text>
        <text x="195" y="30" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontWeight="bold">Egress</text>
      </svg>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-black px-4 py-14 sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-12 lg:py-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-[0.15]"
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

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] blur-[150px] rounded-full z-0" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* Header */}
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
              About The Studio
            </span>
          </motion.div>

          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Engineering high-performance software &amp; AI systems{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              built to scale.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Nexzoa is an AI-native software engineering company based in Sri Lanka, operating globally. We collaborate directly with founders and product teams to engineer custom AI software, enterprise SaaS applications, automated business pipelines, and scalable cloud platforms.
          </motion.p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Row 1: Studio Philosophy Card (8 cols) & Direct Engineering Card (4 cols) */}
          <AboutCard index={0} className="lg:col-span-8">
            <div className="flex flex-col gap-6">
              <p className="text-white/20 text-[11px] font-semibold uppercase tracking-widest" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                STUDIO APPROACH
              </p>
              
              <div className="flex items-center gap-5">
                {/* Sleek Code Symbol Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/25 flex items-center justify-center shadow-xl shrink-0 select-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/85">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[19px] font-bold text-white tracking-[-0.01em]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Nexzoa Engineering
                  </h3>
                  <p className="text-[12.5px] text-white/50 font-medium">
                    Lean, action-oriented systems
                  </p>
                </div>
              </div>

              <blockquote className="text-[15.5px] sm:text-[17px] leading-relaxed text-white/80 font-light italic mt-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                "We treat software as vital infrastructure. We bypass bloated template builders and excessive management layers. Our focus is entirely on custom, direct development to streamline operations, automate workflows, and build reliable software platforms."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/[0.05] flex flex-wrap gap-x-5 gap-y-2 text-[10.5px] font-bold text-white/35 tracking-widest uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              <span>UI/UX DESIGN</span>
              <span>•</span>
              <span>SYSTEMS ARCHITECTURE</span>
              <span>•</span>
              <span>FULL-STACK DEVELOPMENT</span>
            </div>
          </AboutCard>

          <AboutCard index={1} className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-bold text-white/20 select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                01
              </span>
              <h4 className="text-[16px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Direct Engineering
              </h4>
              <p className="text-[13px] leading-relaxed text-white/45 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                No project managers or account executives. You speak directly with the engineers building your systems.
              </p>
            </div>
            <DirectEngineeringVisual />
          </AboutCard>

          {/* Row 2: Performance First Card (6 cols) & Built to Scale Card (6 cols) */}
          <AboutCard index={2} className="lg:col-span-6">
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-bold text-white/20 select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                02
              </span>
              <h4 className="text-[16px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Performance First
              </h4>
              <p className="text-[13px] leading-relaxed text-white/45 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                We optimize every line of code, database query, and assets pack to achieve extreme operational speed.
              </p>
            </div>
            <PerformanceVisual />
          </AboutCard>

          <AboutCard index={3} className="lg:col-span-6">
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-bold text-white/20 select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                03
              </span>
              <h4 className="text-[16px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Built to Scale
              </h4>
              <p className="text-[13px] leading-relaxed text-white/45 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Our architectures utilize fault-tolerant infrastructures that scale seamlessly as your userbase expands.
              </p>
            </div>
            <ScaleVisual />
          </AboutCard>

        </div>
      </div>
    </section>
  );
}
