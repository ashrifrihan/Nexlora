"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useInView } from "motion/react";
import { 
  SiStripe, 
  SiHubspot, 
  SiSalesforce, 
  SiSlack, 
  SiDocker, 
  SiGooglecloud, 
  SiVercel 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

/* ─── Premium Card Spotlight Wrapper ─── */
function IntegrationCard({ 
  title, 
  description, 
  illustration, 
  index 
}: { 
  title: string; 
  description: string; 
  illustration: React.ReactNode; 
  index: number;
}) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-[28px] border border-white/[0.04] bg-[#0c0c0c]/40 p-8 md:p-10 hover:bg-[#0c0c0c]/80 hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between overflow-hidden h-full shadow-[0_24px_50px_rgba(0,0,0,0.7)]"
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.06), transparent 85%)`,
        }}
      />

      {/* Top ambient highlight */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* SVG Animation Canvas / Illustration Container */}
      <div className="flex-1 w-full flex items-center justify-center min-h-[220px] mb-8 select-none">
        {illustration}
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h3 
          className="text-[20px] md:text-[22px] font-bold text-white mb-3 tracking-[-0.02em]" 
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          {title}
        </h3>
        <p 
          className="text-[14px] md:text-[15px] leading-relaxed text-white/45 group-hover:text-white/60 transition-colors duration-500 font-light" 
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef} 
      id="trust" 
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden" 
      aria-labelledby="trust-heading"
    >
      {/* ── Background Grid Pattern ── */}
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
        {/* Soft edge fades to blend with pure black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Ambient center glow behind content */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.015] blur-[150px] rounded-full z-0" />

      <div className="mx-auto w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16 sm:mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-md" 
          >
            <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white/60" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              OPERATIONS & ARCHITECTURE
            </span>
          </motion.div>

          <motion.h2 
            id="trust-heading" 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,46px)] font-bold leading-[1.15] tracking-[-0.04em] text-white" 
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Trusted Operations &{" "}
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              Integrations.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
            className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-white/45 font-light" 
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            We connect custom APIs, payment gateways, and databases to build secure, automated pipelines that power your business workflows.
          </motion.p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Custom API & CRM Sync */}
          <IntegrationCard
            title="Custom API & CRM Sync"
            description="Automate lead capture, system events, and payment flows between your database and marketing tools. Custom message routing avoids transactional failures."
            index={0}
            illustration={
              <div className="relative w-[280px] h-[180px] flex items-center justify-center">
                {/* Connecting Lines with SVG Stroke Animations */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 180">
                  <defs>
                    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                    </linearGradient>
                    {/* CSS Flow Animation keyframe in pure SVG style */}
                    <style>
                      {`
                        @keyframes strokeFlow {
                          0% { stroke-dashoffset: 40; }
                          100% { stroke-dashoffset: 0; }
                        }
                        .flow-line {
                          stroke-dasharray: 6, 8;
                          animation: strokeFlow 1.8s linear infinite;
                        }
                      `}
                    </style>
                  </defs>
                  
                  {/* Paths connecting central node to outer nodes */}
                  <line x1="140" y1="90" x2="60" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                  <line x1="140" y1="90" x2="220" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                  <line x1="140" y1="90" x2="60" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                  <line x1="140" y1="90" x2="220" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

                  {/* Animated flow lines */}
                  <line x1="140" y1="90" x2="60" y2="40" stroke="url(#glowGrad)" strokeWidth="1.5" className="flow-line" />
                  <line x1="140" y1="90" x2="220" y2="40" stroke="url(#glowGrad)" strokeWidth="1.5" className="flow-line" />
                  <line x1="140" y1="90" x2="60" y2="140" stroke="url(#glowGrad)" strokeWidth="1.5" className="flow-line" />
                  <line x1="140" y1="90" x2="220" y2="140" stroke="url(#glowGrad)" strokeWidth="1.5" className="flow-line" />
                </svg>

                {/* Central Hub Node */}
                <div className="absolute w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.02)] z-10">
                  <span className="text-[10px] tracking-[-0.04em] text-white/50 font-bold">NEXZOA</span>
                </div>

                {/* Outer Node 1: Stripe */}
                <div className="absolute top-[15px] left-[35px] w-11 h-11 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-indigo-400/40 transition-colors duration-500 shadow-lg">
                  <SiStripe className="w-5 h-5 text-white/50 group-hover:text-[#635bff] transition-colors duration-500" />
                </div>

                {/* Outer Node 2: HubSpot */}
                <div className="absolute top-[15px] right-[35px] w-11 h-11 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-orange-400/40 transition-colors duration-500 shadow-lg">
                  <SiHubspot className="w-5 h-5 text-white/50 group-hover:text-[#ff7a59] transition-colors duration-500" />
                </div>

                {/* Outer Node 3: Salesforce */}
                <div className="absolute bottom-[15px] left-[35px] w-11 h-11 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-sky-400/40 transition-colors duration-500 shadow-lg">
                  <SiSalesforce className="w-5 h-5 text-white/50 group-hover:text-[#00a1e0] transition-colors duration-500" />
                </div>

                {/* Outer Node 4: Slack */}
                <div className="absolute bottom-[15px] right-[35px] w-11 h-11 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-emerald-400/40 transition-colors duration-500 shadow-lg">
                  <SiSlack className="w-5 h-5 text-white/50 group-hover:text-[#4a154b] transition-colors duration-500" />
                </div>
              </div>
            }
          />

          {/* Card 2: ERP & Cloud Systems */}
          <IntegrationCard
            title="ERP & Cloud Systems"
            description="Deploy scalable server logic, secure databases, and custom automation nodes. Integrated monitoring ensures service uptime across staging and production."
            index={1}
            illustration={
              <div className="relative w-[280px] h-[180px] flex items-center justify-center">
                {/* Architecture grid outline background */}
                <div className="absolute inset-x-8 inset-y-4 rounded-xl border border-white/[0.02] bg-white/[0.005] overflow-hidden flex flex-col justify-between p-3 select-none">
                  {/* System Header bar mock */}
                  <div className="flex items-center justify-between border-b border-white/[0.04] pb-2 w-full">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="h-1.5 w-12 bg-white/10 rounded-sm" />
                  </div>
                  
                  {/* System visual nodes */}
                  <div className="flex justify-around items-center w-full flex-1 pt-3">
                    
                    {/* Database Node */}
                    <div className="flex flex-col items-center gap-1 group/node">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-blue-400/40 transition-all duration-500">
                        <FaAws className="w-4.5 h-4.5 text-white/40 group-hover:text-[#ff9900] transition-colors duration-500" />
                      </div>
                      <span className="text-[8px] font-mono text-white/20 group-hover:text-white/40 transition-colors duration-500">AWS</span>
                    </div>

                    {/* Vercel Node */}
                    <div className="flex flex-col items-center gap-1 group/node">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-white/40 transition-all duration-500">
                        <SiVercel className="w-4.5 h-4.5 text-white/40 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <span className="text-[8px] font-mono text-white/20 group-hover:text-white/40 transition-colors duration-500">Vercel</span>
                    </div>

                    {/* GCP Node */}
                    <div className="flex flex-col items-center gap-1 group/node">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-blue-400/40 transition-all duration-500">
                        <SiGooglecloud className="w-4.5 h-4.5 text-white/40 group-hover:text-[#4285f4] transition-colors duration-500" />
                      </div>
                      <span className="text-[8px] font-mono text-white/20 group-hover:text-white/40 transition-colors duration-500">GCP</span>
                    </div>

                    {/* Docker Node */}
                    <div className="flex flex-col items-center gap-1 group/node">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:border-cyan-400/40 transition-all duration-500">
                        <SiDocker className="w-4.5 h-4.5 text-white/40 group-hover:text-[#2496ed] transition-colors duration-500" />
                      </div>
                      <span className="text-[8px] font-mono text-white/20 group-hover:text-white/40 transition-colors duration-500">Docker</span>
                    </div>

                  </div>
                </div>

                {/* Floating animated data packets using pure CSS */}
                <style>
                  {`
                    @keyframes floatNode {
                      0%, 100% { transform: translateY(0px); opacity: 0.3; }
                      50% { transform: translateY(-5px); opacity: 0.8; }
                    }
                    .packet {
                      animation: floatNode 2.5s ease-in-out infinite;
                    }
                  `}
                </style>

                {/* Small indicator light */}
                <div className="absolute top-7 right-10 flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#10b981]/10 border border-[#10b981]/20">
                  <div className="w-1 h-1 rounded-full bg-[#10b981] animate-ping" />
                  <span className="text-[7.5px] font-mono text-[#10b981] font-semibold tracking-wide">SECURE</span>
                </div>
              </div>
            }
          />
          
        </div>
      </div>
    </section>
  );
}
