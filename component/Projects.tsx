"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "riceops",
    number: "01",
    title: "RiceOps",
    tag: "Factory management dashboard",
    description: "A secure factory management dashboard built for real-time operations, providing custom inventory tracking pipelines, operational reporting, and core database metrics for industrial production scales.",
  },
  {
    id: "transitflow",
    number: "02",
    title: "TransitFlow",
    tag: "Transport management platform",
    description: "An automated transport management platform designed for regional operators, featuring a high-performance booking system, vehicle tracking, and real-time seat configuration grids.",
  },
  {
    id: "learnmate",
    number: "03",
    title: "LearnMate AI",
    tag: "AI assistant platform",
    description: "A conversational educational AI assistant platform integrating Large Language Models (LLM) to deliver automated student support workflows, custom course recommendations, and real-time support tickets.",
  },
  {
    id: "deliveryos",
    number: "04",
    title: "DeliveryOS",
    tag: "Logistics dashboard",
    description: "A fast delivery and logistics dashboard featuring custom GPS dispatch routes, real-time driver tracking, automated dispatch APIs, and unified product inventory management integrations.",
  },
];

function ProjectCard({ item, index }: { item: ProjectItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[28px] border border-white/[0.06] bg-[#0c0c0c]/80 hover:bg-[#121212]/50 hover:border-white/[0.12] transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer shadow-[0_0_50px_rgba(255,255,255,0.005)] hover:shadow-[0_0_50px_rgba(255,255,255,0.02)]"
    >
      {/* Premium Safari Browser Frame Visual */}
      <div className="relative w-full overflow-hidden bg-white/[0.01] border-b border-white/[0.06]">
        {/* Browser Top Bar */}
        <div className="h-8 bg-[#0a0a0a] px-4 flex items-center gap-1.5 border-b border-white/[0.04] select-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50" />
          <div className="mx-auto bg-white/[0.03] text-[9px] text-white/35 rounded px-8 py-0.5 max-w-[130px] text-center truncate font-mono tracking-tight">
            {item.id}.nexlora.io
          </div>
        </div>
        {/* Real Generated Mockup Image with Smooth Parallax Zoom */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={`/projects/${item.id}.png`}
            alt={`${item.title} Operations Platform Mockup`}
            className="w-full h-full object-cover object-top filter saturate-[0.8] brightness-[0.75] group-hover:saturate-100 group-hover:brightness-95 group-hover:scale-[1.04] transition-all duration-700 ease-[0.16, 1, 0.3, 1]"
          />
          {/* Subtle bottom edge shadow to fade into the card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/85 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Premium Information Body */}
      <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Card Category Header */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-[11px] font-extrabold tracking-[0.06em] uppercase text-white/40 group-hover:text-white/60 transition-colors duration-300">
              {item.tag}
            </span>
            <span className="text-[13px] font-bold text-white/20 select-none font-mono">
              {item.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-[-0.03em] mb-3.5 group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-white/50 group-hover:text-white/70 transition-colors duration-300 mb-8" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {item.description}
          </p>
        </div>

        {/* Premium Action CTA */}
        <div className="flex items-center gap-2 text-[12px] font-bold text-white/65 group-hover:text-white transition-all duration-300 select-none border-t border-white/[0.04] pt-5">
          <span>Explore Platform</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
            <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
            className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5" 
            style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}
          >
            <span className="text-[14px] font-medium tracking-[-0.02em] text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Portfolio
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
            Real software built for{" "}
            <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/40 bg-clip-text text-transparent">
              real operations.
            </span>
          </motion.h2>
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
