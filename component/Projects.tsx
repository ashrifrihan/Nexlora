"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  accent: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "riceops",
    number: "01",
    title: "RiceOps",
    tag: "Factory management dashboard",
    description: "A secure factory management dashboard built for real-time operations, providing custom inventory tracking pipelines, operational reporting, and core database metrics for industrial production scales.",
    accent: "#f59e0b", // Amber
  },
  {
    id: "transitflow",
    number: "02",
    title: "TransitFlow",
    tag: "Transport management platform",
    description: "An automated transport management platform designed for regional operators, featuring a high-performance booking system, vehicle tracking, and real-time seat configuration grids.",
    accent: "#3b82f6", // Blue
  },
  {
    id: "learnmate",
    number: "03",
    title: "LearnMate AI",
    tag: "AI assistant platform",
    description: "A conversational educational AI assistant platform integrating Large Language Models (LLM) to deliver automated student support workflows, custom course recommendations, and real-time support tickets.",
    accent: "#a855f7", // Purple
  },
  {
    id: "deliveryos",
    number: "04",
    title: "DeliveryOS",
    tag: "Logistics dashboard",
    description: "A fast delivery and logistics dashboard featuring custom GPS dispatch routes, real-time driver tracking, automated dispatch APIs, and unified product inventory management integrations.",
    accent: "#10b981", // Emerald
  },
];

function ProjectCard({ item, index }: { item: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] h-full flex flex-col cursor-pointer transition-all duration-500 bg-[#0c0c0e]"
        style={{ background: "linear-gradient(145deg, rgba(18,18,22,1) 0%, rgba(10,10,14,1) 100%)" }}
      >
        {/* Cursor Radial Spotlight Glow */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500" 
          style={{ 
            opacity: hov ? 1 : 0, 
            background: `radial-gradient(600px circle at ${mp.x}px ${mp.y}px, rgba(120,90,255,0.06), transparent 60%)` 
          }} 
        />
        
        {/* Spotlight Border Glow */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 rounded-[24px] transition-opacity duration-500" 
          style={{ 
            opacity: hov ? 1 : 0, 
            boxShadow: "inset 0 0 0 1px rgba(120,90,255,0.15), 0 0 40px -10px rgba(120,90,255,0.1)" 
          }} 
        />

        {/* Soft Ambient color-themed back glow behind mockup */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] blur-[40px] rounded-full pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-60"
          style={{ backgroundColor: `${item.accent}15` }}
        />

        {/* Top Edge glowing thin line on hover */}
        <div 
          className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
        />

        {/* Premium Browser Frame Visual */}
        <div className="relative w-full overflow-hidden bg-white/[0.01] border-b border-white/[0.06] z-10">
          {/* Browser Top Bar */}
          <div className="h-8 bg-[#0a0a0c] px-4 flex items-center gap-1.5 border-b border-white/[0.04] select-none">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
            </div>
            <div className="mx-auto bg-white/[0.03] text-[9px] text-white/30 rounded px-6 py-0.5 max-w-[130px] text-center truncate font-mono tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              {item.id}.nexlora.com
            </div>
            <div className="w-2" /> {/* spacer to balance browser dots */}
          </div>
          
          {/* Mockup Image with Smooth Parallax Zoom */}
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src={`/projects/${item.id}.png`}
              alt={`${item.title} Operations Platform Mockup`}
              className="w-full h-full object-cover object-top filter saturate-[0.8] brightness-[0.75] group-hover:saturate-100 group-hover:brightness-95 group-hover:scale-[1.03] transition-all duration-700 ease-[0.16, 1, 0.3, 1]"
            />
            {/* Subtle bottom edge shadow to fade into the card body */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Premium Information Body */}
        <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10">
          <div>
            {/* Card Category Header */}
            <div className="flex justify-between items-center mb-3">
              <span 
                className="text-[10px] font-semibold tracking-[0.08em] uppercase text-white/40 group-hover:text-white/60 transition-colors duration-300"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {item.tag}
              </span>
              <span className="text-[12px] font-bold text-white/20 select-none font-mono">
                {item.number}
              </span>
            </div>

            {/* Title */}
            <h3 
              className="text-[20px] sm:text-[22px] font-bold text-white tracking-[-0.03em] mb-2.5 group-hover:text-white transition-colors duration-300" 
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p 
              className="text-[13px] leading-[1.6] text-white/40 group-hover:text-white/60 transition-colors duration-300 mb-6" 
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {item.description}
            </p>
          </div>

          {/* Action Link */}
          <div 
            className="flex items-center gap-1.5 text-[12px] font-semibold transition-colors duration-300 select-none border-t border-white/[0.04] pt-4"
            style={{ 
              fontFamily: '"Satoshi", sans-serif', 
              color: item.accent,
            }}
          >
            <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">Explore Platform</span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 16 16" 
              fill="none" 
              className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
            >
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Soft central ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.01] blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
            className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5" 
            style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}
          >
            <span className="text-[14px] font-medium tracking-[-0.02em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              What We Build
            </span>
          </motion.div>

          <motion.h2 
            id="projects-heading" 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white" 
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Everything needed to run{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              modern digital operations.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50" 
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            End-to-end software development, AI automation, and custom digital solutions engineered for scale.
          </motion.p>
        </div>

        {/* Asymmetric & Responsive Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projectsData.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
