"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Marquee } from "./ui/marquee";
import ShinyText from "./ui/shiny-text";

/* ─── brand logos ─── */
const firstRowLogos = [
  {
    name: "Apex Systems",
    svg: (
      <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 6l-6 11h12L12 6z" />
      </svg>
    ),
  },
  {
    name: "Quantum Labs",
    svg: (
      <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    name: "Aether Platform",
    svg: (
      <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M3 12h18M18.36 5.64L5.64 18.36M18.36 18.36L5.64 5.64" />
      </svg>
    ),
  },
  {
    name: "Stratos Corp",
    svg: (
      <svg className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const secondRowLogos = [
  {
    name: "Helix AI",
    svg: (
      <svg className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a10 10 0 1 0 10 10" strokeDasharray="3 3" />
        <path d="M12 6a6 6 0 1 0 6 6" />
      </svg>
    ),
  },
  {
    name: "Vortex Inc",
    svg: (
      <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2a10 10 0 0 1-10 10" />
        <path d="M12 22a10 10 0 0 1 10-10" />
        <path d="M12 22a10 10 0 0 1-10-10" />
      </svg>
    ),
  },
  {
    name: "Synapse Software",
    svg: (
      <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        <circle cx="16" cy="8" r="1.5" fill="currentColor" />
        <circle cx="8" cy="16" r="1.5" fill="currentColor" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        <path d="M10 8h4M8 10v4M16 10v4M10 16h4" />
      </svg>
    ),
  },
  {
    name: "Lumina Co",
    svg: (
      <svg className="w-5 h-5 text-rose-400 group-hover:text-rose-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

/* ─── custom count up stat component ─── */
function StatCounter({
  value,
  decimals = 0,
  duration = 1.6,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const current = progress * value;
        setCount(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

/* ─── interactive visual illustrations for stat cards ─── */

function ProjectsVisual() {
  return (
    <div className="relative h-20 w-full overflow-hidden flex items-center justify-center bg-white/[0.01] border-b border-white/[0.04]">
      {/* 5 columns of small micro dots acting as delivered systems */}
      <div className="flex gap-4">
        {[0, 1, 2, 3, 4].map((col) => (
          <div key={col} className="flex flex-col gap-1.5">
            {[0, 1, 2].map((row) => (
              <motion.div
                key={row}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: [0.3, 0.9, 0.3] }}
                viewport={{ once: true }}
                transition={{
                  scale: { delay: col * 0.12 + row * 0.08, type: "spring", stiffness: 200 },
                  opacity: { duration: 3, repeat: Infinity, delay: (col + row) * 0.3, ease: "easeInOut" }
                }}
                className="w-2.5 h-2.5 rounded-full bg-emerald-500"
              />
            ))}
          </div>
        ))}
      </div>
      {/* Connection grid lines */}
      <div className="absolute inset-0 border border-white/[0.01] pointer-events-none" />
    </div>
  );
}

function SatisfactionVisual() {
  return (
    <div className="relative h-20 w-full overflow-hidden flex items-center justify-center bg-white/[0.01] border-b border-white/[0.04]">
      {/* 5 star rating layout */}
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.svg
            key={i}
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15 + i * 0.1,
              type: "spring",
              stiffness: 150,
            }}
            className="w-5 h-5 text-amber-400 fill-amber-400/20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="relative h-20 w-full overflow-hidden flex flex-col justify-center px-6 bg-white/[0.01] border-b border-white/[0.04]">
      {/* Linear progress bar detailing weeks */}
      <div className="flex justify-between text-[8px] text-white/30 font-mono mb-2">
        <span>Week 1</span>
        <span>Week 6</span>
        <span>Week 12</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/[0.04] overflow-hidden relative">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500/50 to-indigo-500"
        />
        {/* Pulsing indicator node */}
        <motion.div
          initial={{ left: "0%" }}
          whileInView={{ left: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border border-indigo-400 shadow-md shadow-indigo-500/50"
        />
      </div>
    </div>
  );
}

function StabilityVisual() {
  return (
    <div className="relative h-20 w-full overflow-hidden flex items-center justify-center bg-white/[0.01] border-b border-white/[0.04]">
      {/* Dynamic Uptime Heartbeat Pulse Line */}
      <svg className="w-40 h-10 text-cyan-400" viewBox="0 0 160 40" fill="none">
        <motion.path
          d="M0 20 H50 L55 10 L60 30 L65 20 H75 L80 5 L85 35 L90 20 H100 L105 15 L110 25 L115 20 H160"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </svg>
      {/* Pulse Dot */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute top-4 right-12 w-2 h-2 rounded-full bg-cyan-400 shadow-md shadow-cyan-500/50"
      />
    </div>
  );
}

/* ─── bento-style stat card ─── */
function StatCard({
  index,
  title,
  subtitle,
  statValue,
  statDecimals = 0,
  statSuffix = "",
  accentColor,
  children,
}: {
  index: number;
  title: string;
  subtitle: string;
  statValue: number;
  statDecimals?: number;
  statSuffix?: string;
  accentColor: string;
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Premium subtle card tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070707] transition-all duration-500 cursor-pointer h-full group"
        style={{
          transform: isHovering
            ? `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.01, 1.01, 1.01)`
            : "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovering
            ? "transform 150ms ease-out"
            : "transform 500ms ease-out",
        }}
      >
        {/* Spotlight cursor effect */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColor}06, transparent 65%)`,
          }}
        />

        {/* Glow border outline */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-500"
          style={{
            opacity: isHovering ? 1 : 0,
            boxShadow: `inset 0 0 0 1px ${accentColor}18, 0 0 25px -10px ${accentColor}10`,
          }}
        />

        {/* Top visual graphic */}
        <div className="relative z-10">{children}</div>

        {/* Stat details */}
        <div className="relative z-10 p-5 sm:p-6 text-left flex flex-col justify-between">
          <div>
            <div className="text-[clamp(32px,4vw,44px)] font-bold tracking-tight text-white leading-none mb-1.5 flex items-baseline">
              <StatCounter
                value={statValue}
                decimals={statDecimals}
                duration={1.8}
              />
              <span className="text-white/80" style={{ color: accentColor }}>{statSuffix}</span>
            </div>
            <h4
              className="text-sm font-semibold tracking-[-0.01em] text-white/90 group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {title}
            </h4>
            <p
              className="text-[12.5px] leading-[1.5] text-white/40 group-hover:text-white/50 transition-colors duration-300 mt-1"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── main section component ─── */
export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="relative w-full bg-black px-4 py-20 sm:px-6 sm:py-28 md:px-8 lg:px-12 lg:py-32 overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Background radial soft light gradient */}
      <div className="pointer-events-none absolute -top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20 text-center">
          {/* Badge with Glassy Effect */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5"
            style={{
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(13, 13, 13, 0.4)",
            }}
          >
            <span
              className="text-[14px] font-medium tracking-[-0.02em] text-white"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Trusted by Growing Businesses
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="trust-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Helping teams build faster with{" "}
            <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/45 bg-clip-text text-transparent">
              better software.
            </span>
          </motion.h2>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,19px)] font-medium leading-[1.45] tracking-[-0.02em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            We engineer high-performance platforms that streamline operations, scale with your user base, and automate complex workflows.
          </motion.p>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 sm:gap-6">
          <StatCard
            index={0}
            title="Projects Delivered"
            subtitle="Custom applications, integrations, and operational tools designed for rapid business scale."
            statValue={25}
            statSuffix="+"
            accentColor="#10b981"
          >
            <ProjectsVisual />
          </StatCard>

          <StatCard
            index={1}
            title="Client Satisfaction"
            subtitle="Consistently delivering premium digital solutions aligned with core stakeholder strategic goals."
            statValue={98}
            statSuffix="%"
            accentColor="#f59e0b"
          >
            <SatisfactionVisual />
          </StatCard>

          <StatCard
            index={2}
            title="Average Delivery"
            subtitle="Rapid engineering cycle from early proof-of-concept architectures to final launch ready platform."
            statValue={12}
            statSuffix=" Wks"
            accentColor="#3b82f6"
          >
            <DeliveryVisual />
          </StatCard>

          <StatCard
            index={3}
            title="Platform Stability"
            subtitle="Engineered with fault-tolerant backend infrastructures maintaining high performance at scale."
            statValue={99.9}
            statDecimals={1}
            statSuffix="%"
            accentColor="#06b6d4"
          >
            <StabilityVisual />
          </StatCard>
        </div>

        {/* ── Infinite Scrolling Marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-10 relative"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8"
          >
            <ShinyText
              text="Trusted Operations & Integrations"
              speed={3}
              color="#555555"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              className="text-[12px] font-semibold font-mono tracking-[0.18em] uppercase"
            />
          </motion.div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2">
            {/* Row 1 - Scrolling Normal */}
            <Marquee pauseOnHover className="[--duration:24s] gap-[1.5rem]">
              {firstRowLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center gap-3 px-6 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 hover:scale-[1.02] transition-all duration-300 select-none group"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  {logo.svg}
                  <ShinyText
                    text={logo.name}
                    speed={3}
                    color="rgba(255, 255, 255, 0.45)"
                    shineColor="#ffffff"
                    spread={80}
                    direction="left"
                    className="text-[14.5px] font-semibold tracking-tight"
                  />
                </div>
              ))}
            </Marquee>

            {/* Row 2 - Scrolling Reverse */}
            <Marquee reverse pauseOnHover className="[--duration:24s] gap-[1.5rem] mt-3">
              {secondRowLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center gap-3 px-6 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 hover:scale-[1.02] transition-all duration-300 select-none group"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  {logo.svg}
                  <ShinyText
                    text={logo.name}
                    speed={3}
                    color="rgba(255, 255, 255, 0.45)"
                    shineColor="#ffffff"
                    spread={80}
                    direction="left"
                    className="text-[14.5px] font-semibold tracking-tight"
                  />
                </div>
              ))}
            </Marquee>

            {/* Premium glass fade masks on edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/40 to-transparent z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
