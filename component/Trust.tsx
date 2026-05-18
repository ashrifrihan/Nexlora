"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Marquee } from "./ui/marquee";
import ShinyText from "./ui/shiny-text";

/* ─── brand logos ─── */
const firstRowLogos = [
  { name: "Apex Systems", svg: (<svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2z" /><path d="M12 6l-6 11h12L12 6z" /></svg>) },
  { name: "Quantum Labs", svg: (<svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>) },
  { name: "Aether Platform", svg: (<svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12h18M18.36 5.64L5.64 18.36M18.36 18.36L5.64 5.64" /></svg>) },
  { name: "Stratos Corp", svg: (<svg className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>) },
];
const secondRowLogos = [
  { name: "Helix AI", svg: (<svg className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2a10 10 0 1 0 10 10" strokeDasharray="3 3" /><path d="M12 6a6 6 0 1 0 6 6" /></svg>) },
  { name: "Vortex Inc", svg: (<svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 2a10 10 0 0 1-10 10" /><path d="M12 22a10 10 0 0 1 10-10" /><path d="M12 22a10 10 0 0 1-10-10" /></svg>) },
  { name: "Synapse Software", svg: (<svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="8" cy="8" r="1.5" fill="currentColor" /><circle cx="16" cy="8" r="1.5" fill="currentColor" /><circle cx="8" cy="16" r="1.5" fill="currentColor" /><circle cx="16" cy="16" r="1.5" fill="currentColor" /><path d="M10 8h4M8 10v4M16 10v4M10 16h4" /></svg>) },
  { name: "Lumina Co", svg: (<svg className="w-5 h-5 text-rose-400 group-hover:text-rose-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>) },
];

/* ─── count-up ─── */
function StatCounter({ value, decimals = 0, duration = 1.6 }: { value: number; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(() => {
    if (isInView) {
      let start: number | null = null;
      const animate = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / (duration * 1000), 1);
        setCount(p * value);
        if (p < 1) requestAnimationFrame(animate); else setCount(value);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

/* ─── bento card wrapper ─── */
function BentoCard({ index, children, className = "" }: { index: number; children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative overflow-hidden rounded-[20px] border border-white/[0.08] h-full group transition-all duration-500"
        style={{ background: "linear-gradient(145deg, rgba(18,18,22,1) 0%, rgba(10,10,14,1) 100%)" }}
      >
        {/* cursor spotlight */}
        <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500" style={{ opacity: hovering ? 1 : 0, background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120,90,255,0.06), transparent 60%)` }} />
        {/* border glow */}
        <div className="pointer-events-none absolute inset-0 z-0 rounded-[20px] transition-opacity duration-500" style={{ opacity: hovering ? 1 : 0, boxShadow: "inset 0 0 0 1px rgba(120,90,255,0.15), 0 0 30px -10px rgba(120,90,255,0.1)" }} />
        {/* top glow line */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </motion.div>
  );
}

/* ─── Projects Card (large left) ─── */
function ProjectsCard() {
  return (
    <BentoCard index={0} className="md:col-span-7 col-span-12">
      <div className="p-7 sm:p-8 flex flex-col h-full min-h-[320px]">
        {/* visual: animated node grid */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="relative">
            <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
              {/* grid lines */}
              {[0,1,2,3,4].map(i => <motion.line key={`h${i}`} x1="0" y1={i*30} x2="200" y2={i*30} stroke="rgba(255,255,255,0.04)" strokeWidth="1" initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1, delay:i*0.1}} />)}
              {[0,1,2,3,4,5,6].map(i => <motion.line key={`v${i}`} x1={i*33.3} y1="0" x2={i*33.3} y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1, delay:i*0.08}} />)}
              {/* connection paths */}
              <motion.path d="M30 90 L70 60 L100 75 L140 30 L170 45" stroke="url(#projGrad)" strokeWidth="2" strokeLinecap="round" fill="none" initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1.5, delay:0.3}} />
              <defs><linearGradient id="projGrad" x1="30" y1="90" x2="170" y2="45"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#a78bfa" /></linearGradient></defs>
            </svg>
            {/* animated nodes */}
            {[{x:30,y:90,d:0},{x:70,y:60,d:0.15},{x:100,y:75,d:0.3},{x:140,y:30,d:0.45},{x:170,y:45,d:0.6}].map((n,i) => (
              <motion.div key={i} className="absolute w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-300/50" style={{left:n.x-6, top:n.y-6}} initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{delay:0.5+n.d, type:"spring"}} >
                <motion.div className="absolute inset-0 rounded-full bg-indigo-400" animate={{scale:[1,2,1],opacity:[0.5,0,0.5]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}} />
              </motion.div>
            ))}
          </div>
        </div>
        {/* stat + text */}
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[clamp(40px,5vw,56px)] font-bold tracking-tight text-white leading-none" style={{fontFamily:'"Satoshi",sans-serif'}}><StatCounter value={25} duration={1.8} /></span>
            <span className="text-[clamp(28px,3vw,36px)] font-bold text-indigo-400">+</span>
          </div>
          <h4 className="text-[15px] font-semibold text-white/90 mb-1" style={{fontFamily:'"Satoshi",sans-serif'}}>Projects Delivered</h4>
          <p className="text-[13px] leading-relaxed text-white/40 max-w-xs" style={{fontFamily:'"Inter",sans-serif'}}>Custom applications, integrations, and operational tools designed for rapid business scale.</p>
        </div>
      </div>
    </BentoCard>
  );
}

/* ─── Satisfaction Card (right top) ─── */
function SatisfactionCard() {
  return (
    <BentoCard index={1} className="md:col-span-5 col-span-12">
      <div className="p-7 sm:p-8 flex flex-col h-full min-h-[320px]">
        {/* visual: circular gauge */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="relative w-[120px] h-[120px]">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              <motion.circle cx="60" cy="60" r="50" fill="none" stroke="url(#satGrad)" strokeWidth="8" strokeLinecap="round" strokeDasharray={314} initial={{strokeDashoffset:314}} whileInView={{strokeDashoffset:314*0.02}} viewport={{once:true}} transition={{duration:2, ease:[0.16,1,0.3,1]}} />
              <defs><linearGradient id="satGrad"><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#fbbf24"/></linearGradient></defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white" style={{fontFamily:'"Satoshi",sans-serif'}}><StatCounter value={98} duration={2} />%</div>
              </div>
            </div>
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl" />
          </div>
        </div>
        <div>
          <h4 className="text-[15px] font-semibold text-white/90 mb-1" style={{fontFamily:'"Satoshi",sans-serif'}}>Client Satisfaction</h4>
          <p className="text-[13px] leading-relaxed text-white/40" style={{fontFamily:'"Inter",sans-serif'}}>Consistently delivering premium digital solutions aligned with core stakeholder strategic goals.</p>
        </div>
      </div>
    </BentoCard>
  );
}

/* ─── Delivery Card (left bottom) ─── */
function DeliveryCard() {
  return (
    <BentoCard index={2} className="md:col-span-5 col-span-12">
      <div className="p-7 sm:p-8 flex flex-col h-full min-h-[320px]">
        {/* visual: timeline */}
        <div className="flex-1 flex items-center mb-6">
          <div className="w-full">
            <div className="flex justify-between text-[10px] text-white/30 font-mono mb-3">
              <span>Week 1</span><span>Week 6</span><span>Week 12</span>
            </div>
            <div className="relative h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div initial={{width:"0%"}} whileInView={{width:"100%"}} viewport={{once:true}} transition={{duration:2, ease:[0.16,1,0.3,1]}} className="h-full rounded-full" style={{background:"linear-gradient(90deg, rgba(59,130,246,0.3), #3b82f6, #818cf8)"}} />
            </div>
            {/* milestone dots */}
            <div className="relative flex justify-between mt-3 px-1">
              {["Discovery","Build","Launch"].map((label,i) => (
                <motion.div key={label} className="flex flex-col items-center gap-1.5" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.5+i*0.2}}>
                  <div className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/30" />
                  <span className="text-[9px] text-white/30 font-mono">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[clamp(40px,5vw,56px)] font-bold tracking-tight text-white leading-none" style={{fontFamily:'"Satoshi",sans-serif'}}><StatCounter value={12} duration={1.5} /></span>
            <span className="text-[clamp(18px,2vw,22px)] font-semibold text-blue-400">Wks</span>
          </div>
          <h4 className="text-[15px] font-semibold text-white/90 mb-1" style={{fontFamily:'"Satoshi",sans-serif'}}>Average Delivery</h4>
          <p className="text-[13px] leading-relaxed text-white/40" style={{fontFamily:'"Inter",sans-serif'}}>Rapid engineering cycle from early proof-of-concept architectures to final launch ready platform.</p>
        </div>
      </div>
    </BentoCard>
  );
}

/* ─── Stability Card (right bottom) ─── */
function StabilityCard() {
  return (
    <BentoCard index={3} className="md:col-span-7 col-span-12">
      <div className="p-7 sm:p-8 flex flex-col h-full min-h-[320px]">
        {/* visual: heartbeat + uptime bar */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="w-full max-w-[280px]">
            <svg className="w-full h-16" viewBox="0 0 280 60" fill="none">
              <motion.path d="M0 30 H80 L90 10 L100 50 L110 30 H140 L150 15 L160 45 L170 30 H200 L210 20 L220 40 L230 30 H280" stroke="url(#stabGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:2, ease:"easeInOut"}} />
              <defs><linearGradient id="stabGrad"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#22d3ee"/></linearGradient></defs>
            </svg>
            {/* uptime bars */}
            <div className="flex gap-[3px] mt-4 items-end justify-center">
              {Array.from({length:24}).map((_,i) => (
                <motion.div key={i} className="w-[8px] rounded-sm" style={{background: i===18 ? "rgba(239,68,68,0.5)" : "rgba(6,182,212,0.4)", height: i===18 ? 8 : 16 + ((i * 7) % 9)}} initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{delay:0.03*i, duration:0.4}} />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[9px] text-white/20 font-mono">
              <span>24h ago</span>
              <span className="text-cyan-400/60">● All systems operational</span>
              <span>Now</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-[clamp(40px,5vw,56px)] font-bold tracking-tight text-white leading-none" style={{fontFamily:'"Satoshi",sans-serif'}}><StatCounter value={99.9} decimals={1} duration={2} /></span>
            <span className="text-[clamp(22px,2.5vw,28px)] font-bold text-cyan-400">%</span>
          </div>
          <h4 className="text-[15px] font-semibold text-white/90 mb-1" style={{fontFamily:'"Satoshi",sans-serif'}}>Platform Stability</h4>
          <p className="text-[13px] leading-relaxed text-white/40 max-w-sm" style={{fontFamily:'"Inter",sans-serif'}}>Engineered with fault-tolerant backend infrastructures maintaining high performance at scale.</p>
        </div>
      </div>
    </BentoCard>
  );
}

/* ─── main section ─── */
export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="trust" className="relative w-full bg-black px-4 py-20 sm:px-6 sm:py-28 md:px-8 lg:px-12 lg:py-32 overflow-hidden" aria-labelledby="trust-heading">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/[0.04] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] bg-purple-600/[0.03] blur-[100px] rounded-full" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div initial={{opacity:0,y:12}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.5,ease:[0.16,1,0.3,1]}} className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5" style={{backdropFilter:"blur(5px)",backgroundColor:"rgba(13,13,13,0.4)"}}>
            <span className="text-[14px] font-medium tracking-[-0.02em] text-white" style={{fontFamily:'"Satoshi",sans-serif'}}>Trusted by Growing Businesses</span>
          </motion.div>

          <motion.h2 id="trust-heading" initial={{opacity:0,y:20}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1,ease:[0.16,1,0.3,1]}} className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white" style={{fontFamily:'"Satoshi",sans-serif'}}>
            Helping teams build faster with{" "}
            <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/45 bg-clip-text text-transparent">better software.</span>
          </motion.h2>

          <motion.p initial={{opacity:0,y:16}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.2,ease:[0.16,1,0.3,1]}} className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,19px)] font-medium leading-[1.45] tracking-[-0.02em] text-white/50" style={{fontFamily:'"Satoshi",sans-serif'}}>
            We engineer high-performance platforms that streamline operations, scale with your user base, and automate complex workflows.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          <ProjectsCard />
          <SatisfactionCard />
          <DeliveryCard />
          <StabilityCard />
        </div>

        {/* ── Marquee ── */}
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.4,ease:[0.16,1,0.3,1]}} className="mt-20 pt-10 relative">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.5,ease:[0.16,1,0.3,1]}} className="text-center mb-8">
            <ShinyText text="Trusted Operations & Integrations" speed={3} color="#555555" shineColor="#ffffff" spread={120} direction="left" className="text-[12px] font-semibold font-mono tracking-[0.18em] uppercase" />
          </motion.div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2">
            <Marquee pauseOnHover className="[--duration:24s] gap-[1.5rem]">
              {firstRowLogos.map((logo) => (
                <div key={logo.name} className="flex items-center gap-3 px-6 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 hover:scale-[1.02] transition-all duration-300 select-none group" style={{fontFamily:'"Satoshi",sans-serif'}}>
                  {logo.svg}
                  <ShinyText text={logo.name} speed={3} color="rgba(255,255,255,0.45)" shineColor="#ffffff" spread={80} direction="left" className="text-[14.5px] font-semibold tracking-tight" />
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:24s] gap-[1.5rem] mt-3">
              {secondRowLogos.map((logo) => (
                <div key={logo.name} className="flex items-center gap-3 px-6 py-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 hover:scale-[1.02] transition-all duration-300 select-none group" style={{fontFamily:'"Satoshi",sans-serif'}}>
                  {logo.svg}
                  <ShinyText text={logo.name} speed={3} color="rgba(255,255,255,0.45)" shineColor="#ffffff" spread={80} direction="left" className="text-[14.5px] font-semibold tracking-tight" />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/40 to-transparent z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
