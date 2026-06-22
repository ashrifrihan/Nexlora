"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useInView } from "motion/react";

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    number: "01",
    title: "Direct Engineering",
    description: "No project managers or account executives. You speak directly with the engineers building your systems."
  },
  {
    number: "02",
    title: "Performance First",
    description: "We optimize every line of code, database query, and assets pack to achieve extreme operational speed."
  },
  {
    number: "03",
    title: "Built to Scale",
    description: "Our architectures utilize fault-tolerant infrastructures that scale seamlessly as your userbase expands."
  }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
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
            Nexzoa is a lean, independent software studio based in Sri Lanka, operating globally. We collaborate directly with founders and operations teams to ship custom databases, CRM connections, internal tooling dashboards, and cloud integrations.
          </motion.p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Studio Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            className="lg:col-span-7 group relative rounded-[28px] border border-white/[0.04] bg-[#0c0c0c]/40 p-8 sm:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_24px_50px_rgba(0,0,0,0.7)]"
          >
            {/* Spotlight overlay */}
            <div
              className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.04), transparent 85%)`,
              }}
            />

            <div>
              <p className="text-white/20 text-[11px] font-semibold uppercase tracking-widest mb-8" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                STUDIO APPROACH
              </p>
              
              <div className="flex items-center gap-5 mb-8">
                {/* Sleek Code Symbol Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/20 flex items-center justify-center shadow-xl shrink-0 select-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-white tracking-[-0.01em]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Nexzoa Engineering
                  </h3>
                  <p className="text-[13px] text-white/50 font-medium">
                    Lean, action-oriented systems
                  </p>
                </div>
              </div>

              <blockquote className="text-[16px] sm:text-[18px] leading-relaxed text-white/80 font-light italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                "We treat software as vital infrastructure. We bypass bloated template builders and excessive management layers. Our focus is entirely on custom, direct development to streamline operations, automate workflows, and build reliable software platforms."
              </blockquote>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.05] flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-semibold text-white/40 tracking-wider uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              <span>UI/UX DESIGN</span>
              <span>•</span>
              <span>SYSTEMS ARCHITECTURE</span>
              <span>•</span>
              <span>FULL-STACK DEVELOPMENT</span>
            </div>
          </motion.div>

          {/* Right Block: Values / Focus Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[24px] border border-white/[0.04] bg-[#0c0c0c]/20 p-6 flex items-start gap-5 hover:border-white/[0.08] transition-colors duration-300"
              >
                <span className="text-[14px] font-bold text-white/25 pt-0.5 select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {v.number}
                </span>
                <div>
                  <h4 className="text-[16px] font-bold text-white mb-1.5 tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {v.title}
                  </h4>
                  <p className="text-[13.5px] leading-relaxed text-white/45 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
