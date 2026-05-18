"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  visual: React.ReactNode;
}

/* ─── Custom Premium SVG Visuals for Each Project ─── */

function RiceOpsVisual() {
  return (
    <div className="relative w-full h-44 sm:h-48 flex items-center justify-center bg-white/[0.01] border-b border-white/[0.06] overflow-hidden group-hover:bg-white/[0.02] transition-colors duration-500">
      <svg width="240" height="120" viewBox="0 0 240 120" fill="none" className="opacity-60 group-hover:opacity-90 transition-opacity duration-500">
        {/* Dashboard Grid Wireframe */}
        <rect x="10" y="10" width="220" height="100" rx="8" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="80" y1="10" x2="80" y2="110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* KPI Cards */}
        <rect x="20" y="20" width="50" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
        <circle cx="32" cy="32" r="3" fill="#10b981" />
        <rect x="39" y="30" width="22" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
        
        <rect x="20" y="50" width="50" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
        <circle cx="32" cy="62" r="3" fill="#3b82f6" />
        <rect x="39" y="60" width="22" height="4" rx="1" fill="rgba(255,255,255,0.2)" />

        <rect x="20" y="80" width="50" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
        <circle cx="32" cy="92" r="3" fill="#f59e0b" />
        <rect x="39" y="90" width="22" height="4" rx="1" fill="rgba(255,255,255,0.2)" />

        {/* Inventory Analytics Bar Chart */}
        <text x="92" y="30" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="sans-serif" fontWeight="semibold">INVENTORY TRACKING</text>
        {[40, 75, 55, 90, 60].map((h, i) => (
          <motion.rect
            key={i}
            x={92 + i * 26}
            y={100 - h * 0.6}
            width="14"
            height={h * 0.6}
            rx="2"
            fill={i === 3 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)"}
            stroke={i === 3 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"}
            strokeWidth="1"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom" }}
          />
        ))}
      </svg>
    </div>
  );
}

function TransitFlowVisual() {
  return (
    <div className="relative w-full h-44 sm:h-48 flex items-center justify-center bg-white/[0.01] border-b border-white/[0.06] overflow-hidden group-hover:bg-white/[0.02] transition-colors duration-500">
      <svg width="240" height="120" viewBox="0 0 240 120" fill="none" className="opacity-60 group-hover:opacity-90 transition-opacity duration-500">
        {/* Transport Grid */}
        <rect x="10" y="10" width="220" height="100" rx="8" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* Realtime Seat System visual */}
        <text x="24" y="30" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="sans-serif" fontWeight="semibold">REALTIME SEATING SYSTEM</text>
        
        {/* Grid of seats */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => {
            const isBooked = (row + col) % 3 === 0;
            const isSelected = row === 1 && col === 3;
            let color = "rgba(255,255,255,0.04)";
            let stroke = "rgba(255,255,255,0.08)";
            if (isBooked) {
              color = "rgba(255,255,255,0.12)";
              stroke = "rgba(255,255,255,0.2)";
            } else if (isSelected) {
              color = "rgba(255,255,255,0.3)";
              stroke = "rgba(255,255,255,0.5)";
            }
            
            return (
              <motion.rect
                key={`${row}-${col}`}
                x={24 + col * 16 + (col > 2 ? 16 : 0)}
                y={46 + row * 14}
                width="10"
                height="9"
                rx="2"
                fill={color}
                stroke={stroke}
                strokeWidth="1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (row + col) * 0.04, ease: [0.16, 1, 0.3, 1] }}
              />
            );
          })
        )}
        {/* Legend */}
        <rect x="160" y="46" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.12)" />
        <text x="172" y="53" fill="rgba(255,255,255,0.3)" fontSize="6">Booked</text>

        <rect x="160" y="62" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.3)" />
        <text x="172" y="69" fill="rgba(255,255,255,0.3)" fontSize="6">Selected</text>

        <rect x="160" y="78" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <text x="172" y="85" fill="rgba(255,255,255,0.3)" fontSize="6">Available</text>
      </svg>
    </div>
  );
}

function LearnMateAIVisual() {
  return (
    <div className="relative w-full h-44 sm:h-48 flex items-center justify-center bg-white/[0.01] border-b border-white/[0.06] overflow-hidden group-hover:bg-white/[0.02] transition-colors duration-500">
      <svg width="240" height="120" viewBox="0 0 240 120" fill="none" className="opacity-60 group-hover:opacity-90 transition-opacity duration-500">
        {/* Chat Platform UI */}
        <rect x="10" y="10" width="220" height="100" rx="8" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="24" y="30" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="sans-serif" fontWeight="semibold">AUTOMATED AI ASSISTANT</text>
        
        {/* Chat Bubble 1 (Student) */}
        <rect x="24" y="44" width="100" height="16" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="32" y="50" width="60" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
        <circle cx="132" cy="52" r="6" fill="rgba(255,255,255,0.1)" />

        {/* Chat Bubble 2 (AI Response) */}
        <rect x="106" y="68" width="110" height="22" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
        <motion.rect 
          x="114" y="74" width="94" height="4" rx="1" fill="rgba(255,255,255,0.4)"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.rect 
          x="114" y="82" width="70" height="4" rx="1" fill="rgba(255,255,255,0.4)"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
        <circle cx="96" cy="79" r="6" fill="rgba(255,255,255,0.2)" />
      </svg>
    </div>
  );
}

function DeliveryOSVisual() {
  return (
    <div className="relative w-full h-44 sm:h-48 flex items-center justify-center bg-white/[0.01] border-b border-white/[0.06] overflow-hidden group-hover:bg-white/[0.02] transition-colors duration-500">
      <svg width="240" height="120" viewBox="0 0 240 120" fill="none" className="opacity-60 group-hover:opacity-90 transition-opacity duration-500">
        {/* Logistics Route Map */}
        <rect x="10" y="10" width="220" height="100" rx="8" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="24" y="30" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="sans-serif" fontWeight="semibold">REALTIME FLEET DISPATCH</text>
        
        {/* Map Grid Gridlines */}
        <path d="M 40,10 L 40,110 M 80,10 L 80,110 M 120,10 L 120,110 M 160,10 L 160,110 M 200,10 L 200,110" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        <path d="M 10,40 L 230,40 M 10,80 L 230,80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

        {/* Dispatch Track Route */}
        <motion.path 
          d="M 30,90 Q 90,40 130,80 T 210,40" 
          stroke="rgba(255,255,255,0.12)" 
          strokeWidth="2" 
          strokeDasharray="4 4"
        />
        <motion.path 
          d="M 30,90 Q 90,40 130,80 T 210,40" 
          stroke="rgba(255,255,255,0.4)" 
          strokeWidth="2" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Map Nodes */}
        <circle cx="30" cy="90" r="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" />
        <circle cx="130" cy="80" r="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
        
        {/* Pulse driver node */}
        <motion.circle 
          cx="145" cy="72" r="5" fill="rgba(255,255,255,0.5)"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <circle cx="210" cy="40" r="5" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" />
      </svg>
    </div>
  );
}

const projectsData: ProjectItem[] = [
  {
    id: "riceops",
    number: "01",
    title: "RiceOps",
    tag: "Factory management dashboard",
    description: "A secure factory management dashboard built for real-time operations, providing custom inventory tracking pipelines, operational reporting, and core database metrics for industrial production scales.",
    visual: <RiceOpsVisual />,
  },
  {
    id: "transitflow",
    number: "02",
    title: "TransitFlow",
    tag: "Transport management platform",
    description: "An automated transport management platform designed for regional operators, featuring a high-performance booking system, vehicle tracking, and real-time seat configuration grids.",
    visual: <TransitFlowVisual />,
  },
  {
    id: "learnmate",
    number: "03",
    title: "LearnMate AI",
    tag: "AI assistant platform",
    description: "A conversational educational AI assistant platform integrating Large Language Models (LLM) to deliver automated student support workflows, custom course recommendations, and real-time support tickets.",
    visual: <LearnMateAIVisual />,
  },
  {
    id: "deliveryos",
    number: "04",
    title: "DeliveryOS",
    tag: "Logistics dashboard",
    description: "A fast delivery and logistics dashboard featuring custom GPS dispatch routes, real-time driver tracking, automated dispatch APIs, and unified product inventory management integrations.",
    visual: <DeliveryOSVisual />,
  },
];

function ProjectCard({ item, index }: { item: ProjectItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[24px] border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Visual illustration top */}
      {item.visual}

      {/* Info panel bottom */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Card header */}
          <div className="flex justify-between items-start gap-4 mb-3">
            <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-white/40 group-hover:text-white/60 transition-colors duration-300">
              {item.tag}
            </span>
            <span className="text-[14px] font-bold text-white/20 select-none">
              {item.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-[-0.03em] mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[13px] sm:text-[14px] leading-[1.6] text-white/50 group-hover:text-white/70 transition-colors duration-300 mb-6">
            {item.description}
          </p>
        </div>

        {/* Explore CTA */}
        <div className="flex items-center gap-1.5 text-[12px] font-bold text-white/60 group-hover:text-white transition-all duration-300">
          <span>Explore Platform</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
            <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      {/* Subtle neutral glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.01] blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20 text-center">
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

        {/* ── Grid of Projects ── */}
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
