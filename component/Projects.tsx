"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  role: string;
  technologies: string[];
  accent: string;
  github?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Smart Rice Mill Management System",
    description:
      "A multi-role business management system designed to digitize rice mill operations, combining web dashboards, real-time data management, and AI-driven insights.",
    category: ["Development", "System Design"],
    image: "/projects/rice-mill/rice-mill.jpg",
    role: "Full Stack Developer & UI/UX Designer",
    technologies: ["React", "Vite", "Python", "FastAPI", "Firebase", "scikit-learn", "Tailwind CSS"],
    accent: "#f59e0b",
  },
  {
    id: 2,
    title: "QuickStay – Hotel Booking & Management",
    description:
      "A multi-role hotel booking and management system enabling online reservations, front-desk operations, billing, and role-based workflows within a unified platform.",
    category: ["Development", "System Design"],
    image: "/projects/quickstay/QuickStay.jpg",
    role: "Full Stack Developer & System Designer",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Stripe API"],
    accent: "#3b82f6",
  },
  {
    id: 3,
    title: "Photography CMS & Booking Platform",
    description:
      "A full-stack, CMS-driven photography website with dynamic galleries, booking management, and a secure admin panel for complete business control.",
    category: ["Development", "UI/UX"],
    image: "/projects/MalcolmLismore/Malcolm.jpg",
    role: "Full Stack Developer",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "CSS"],
    accent: "#a855f7",
  },
  {
    id: 4,
    title: "QuickSticker – AI-Powered Sticker Studio",
    description:
      "A full-stack AI-powered sticker creation platform that turns any image or text prompt into WhatsApp-ready stickers in seconds using intelligent background removal.",
    category: ["Development", "AI/ML"],
    image: "/projects/rice-mill/rice-mill.jpg",
    role: "Full Stack Developer & AI Engineer",
    technologies: ["Python", "Flask", "Pollinations AI", "rembg", "Canvas API", "Web Share API"],
    accent: "#ec4899",
    github: "https://github.com/ashrifrihan/QuickSticker",
  },
  {
    id: 5,
    title: "QuickCompress – Batch Image Compression",
    description:
      "A full-stack batch image compression web application enabling users to compress up to 20 images simultaneously with customizable quality and format conversion.",
    category: ["Development", "Web App"],
    image: "/projects/rice-mill/rice-mill.jpg",
    role: "Full Stack Developer",
    technologies: ["Python", "Flask", "Pillow", "Tailwind CSS", "REST API", "Gunicorn"],
    accent: "#06b6d4",
    github: "https://github.com/ashrifrihan/QuickCompress",
  },
  {
    id: 6,
    title: "Wander Sphere Travel UX Platform",
    description:
      "A modern travel planning UI/UX concept focused on seamless destination discovery, intuitive booking flows, and immersive visual storytelling.",
    category: ["UI/UX", "Product Design"],
    image: "/projects/Wander-Spheres/Wander-Spheres.jpg",
    role: "UI/UX Designer",
    technologies: ["Figma", "UI Design Systems", "Prototyping", "User Flow Mapping"],
    accent: "#10b981",
  },
  {
    id: 7,
    title: "Quick Eats Food Delivery UX",
    description:
      "A mobile-first food delivery UI/UX design focused on fast decision-making, simplified ordering flows, and real-time delivery interaction.",
    category: ["UI/UX", "Product Design"],
    image: "/projects/QucikEats/QucikEats.jpg",
    role: "UI/UX Designer",
    technologies: ["Figma", "Adobe Photoshop", "Wireframing", "Prototyping"],
    accent: "#ef4444",
  },
  {
    id: 8,
    title: "CaféSpot Coffee Ordering App",
    description:
      "A mobile-first coffee ordering experience designed for Sri Lanka's growing café culture, enabling users to quickly browse, customize, and order from nearby coffee shops.",
    category: ["UI/UX", "Product Design"],
    image: "/projects/cafe-spot/cafe-spot.jpg",
    role: "UI/UX Designer",
    technologies: ["Figma", "User Research", "Wireframing", "Design Systems"],
    accent: "#d97706",
  },
  {
    id: 9,
    title: "StarEvent – ASP.NET Event Management",
    description:
      "A comprehensive web-based event management system built with ASP.NET MVC (C#), enabling users to create, manage, explore, and organize events with responsive UI.",
    category: ["Development", "System Design"],
    image: "/projects/starevent/starevent.jpg",
    role: "Full Stack Developer & System Architect",
    technologies: ["C#", "ASP.NET MVC", "Razor Views", "SQL Server", "Bootstrap", "jQuery"],
    accent: "#6366f1",
    github: "https://github.com/ashrifrihan/StarEvent",
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

  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
            background: `radial-gradient(600px circle at ${mp.x}px ${mp.y}px, rgba(120,90,255,0.06), transparent 60%)`,
          }}
        />

        {/* Spotlight Border Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[24px] transition-opacity duration-500"
          style={{
            opacity: hov ? 1 : 0,
            boxShadow: "inset 0 0 0 1px rgba(120,90,255,0.15), 0 0 40px -10px rgba(120,90,255,0.1)",
          }}
        />

        {/* Soft Ambient color-themed back glow */}
        <div
          className="perf-glow absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] blur-[40px] rounded-full pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-60"
          style={{ backgroundColor: `${item.accent}15` }}
        />

        {/* Top Edge glowing thin line on hover */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Project Thumbnail Image */}
        <div className="relative w-full overflow-hidden bg-white/[0.01] border-b border-white/[0.06] z-10">
          {/* Browser Top Bar */}
          <div className="h-8 bg-[#0a0a0c] px-4 flex items-center gap-1.5 border-b border-white/[0.04] select-none">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
            </div>
            <div
              className="mx-auto bg-white/[0.03] text-[9px] text-white/30 rounded px-6 py-0.5 max-w-[160px] text-center truncate font-mono tracking-tight"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              nexzoa.in/project/{number}
            </div>
            <div className="w-2" />
          </div>

          {/* Thumbnail with Smooth Parallax Zoom */}
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src={item.image}
              alt={`${item.title} — Project by Nexzoa`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top filter saturate-[0.8] brightness-[0.75] group-hover:saturate-100 group-hover:brightness-95 group-hover:scale-[1.03] transition-all duration-700 ease-[0.16,1,0.3,1]"
            />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10">
          <div>
            {/* Category & Number */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                {item.category.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] font-semibold tracking-[0.06em] uppercase text-white/40 group-hover:text-white/60 transition-colors duration-300"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <span className="text-[12px] font-bold text-white/20 select-none font-mono">
                {number}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-[18px] sm:text-[20px] font-bold text-white tracking-[-0.03em] mb-2 group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="text-[13px] leading-[1.6] text-white/40 group-hover:text-white/60 transition-colors duration-300 mb-4 font-medium line-clamp-3"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {item.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40 font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  {tech}
                </span>
              ))}
              {item.technologies.length > 5 && (
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.02] text-white/25 font-medium"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  +{item.technologies.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
            <div
              className="flex items-center gap-1.5 text-[12px] font-semibold transition-colors duration-300 select-none"
              style={{ fontFamily: '"Satoshi", sans-serif', color: item.accent }}
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                View Project
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              >
                <path
                  d="M6 12l4-4-4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-white/25 hover:text-white/60 transition-colors duration-300 font-medium"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub ↗
              </a>
            )}
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
      className="perf-section relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Soft central ambient background glow */}
      <div className="perf-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.01] blur-[150px]" />

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
              Featured Projects
            </span>
          </motion.div>

          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            <span className="sr-only">Nexzoa Case Studies &amp; Projects: </span>
            Software systems built for{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              real business operations.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-3xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Full-stack platforms, AI workflows, dashboards, and design systems built to solve real business problems.
          </motion.p>
        </div>

        {/* Project Grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {projectsData.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
