"use client";

import React, { useState, useMemo, useRef } from "react";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "motion/react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  techStack: string[];
  image: string;
  screenshots: string[];
  accent: string;
  github?: string;
}

interface GalleryProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  accent: string;
  github?: string;
}

// 4 detailed featured case studies
const featuredCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Smart Rice Mill Management System",
    category: "Enterprise Systems",
    industry: "Agriculture / Operations",
    challenge: "Rice mill owners struggled with slow manual audits, error-prone spreadsheets, and a complete lack of real-time inventory visibility, resulting in operational delays.",
    solution: "We designed and engineered a custom enterprise management system with dynamic stock tracking, automatic billing, and built-in scikit-learn predictive analytics for yield forecasts.",
    outcome: "Reduced manual data reconciliation times by 65% and gave management immediate, single-click insight into mill stocks.",
    techStack: ["React", "FastAPI", "Python", "Firebase", "scikit-learn", "Tailwind CSS"],
    image: "/projects/rice-mill/rice-mill.jpg",
    screenshots: [
      "/projects/rice-mill/rice-mill.jpg",
    ],
    accent: "#f59e0b",
  },
  {
    id: 2,
    title: "QuickStay Booking & Management Platform",
    category: "Web Apps",
    industry: "Hospitality / SaaS",
    challenge: "Traditional booking portals charges high fees and lack integrated front-desk operations, room service tracking, and staff management.",
    solution: "Built a custom responsive booking portal with multi-role dashboards enabling online booking management, live housekeeping statuses, dynamic invoicing, and secure Stripe checkouts.",
    outcome: "Boosted direct direct reservations by 42% and minimized manual check-in errors.",
    techStack: ["PHP", "MySQL", "JavaScript", "Stripe API", "CSS"],
    image: "/projects/quickstay/QuickStay.jpg",
    screenshots: [
      "/projects/quickstay/QuickStay.jpg",
      "/projects/quickstay/quickstay_1.jpg",
      "/projects/quickstay/quickstay_2.jpg",
      "/projects/quickstay/quickstay_3.jpg",
    ],
    accent: "#3b82f6",
    github: "https://github.com/ashrifrihan",
  },
  {
    id: 3,
    title: "QuickSticker – AI-Powered Sticker Studio",
    category: "AI Solutions",
    industry: "Entertainment / AI SaaS",
    challenge: "Creating stickers for messaging apps required graphic design knowledge and complex manual background removal processes.",
    solution: "Developed a web application integrating Pollinations AI image generation and local rembg background removal to turn text or images into instant transparent stickers.",
    outcome: "Delivered rapid image processing under 3 seconds and enabled immediate single-tap exports.",
    techStack: ["Python", "Flask", "Pollinations AI", "rembg", "Canvas API"],
    image: "/projects/quickSticker/QuickSticker.jpg",
    screenshots: [
      "/projects/quickSticker/QuickSticker.jpg",
      "/projects/quickSticker/quicksticker1.jpg",
      "/projects/quickSticker/quicksticker2 .jpg",
      "/projects/quickSticker/quicksticker3.jpg",
    ],
    accent: "#ec4899",
    github: "https://github.com/ashrifrihan/QuickSticker",
  },
  {
    id: 4,
    title: "CaféSpot Coffee Ordering Experience",
    category: "Mobile Apps",
    industry: "Food & Beverage / UX",
    challenge: "commuters faced long queue delays at coffee counters during rush hours, leading to cart dropouts and lost vendor sales.",
    solution: "Designed a mobile-first online ordering interface prioritizing quick order menus, customizable drink builders, and direct mobile checkout flows.",
    outcome: "Reduced order queues and minimized customer pick-up delays down to 1 minute.",
    techStack: ["Figma", "User Experience Research", "Wireframing", "Interaction Design"],
    image: "/projects/cafe-spot/cafe-spot.jpg",
    screenshots: [
      "/projects/cafe-spot/cafe-spot.jpg",
      "/projects/cafe-spot/screen1.jpg",
      "/projects/cafe-spot/screen2.jpg",
    ],
    accent: "#d97706",
  }
];

// All 16 projects in the gallery
const galleryProjects: GalleryProject[] = [
  {
    id: 1,
    title: "Smart Rice Mill System",
    category: "Enterprise Systems",
    description: "Business platform digitizing mill operations, inventory, and sales.",
    image: "/projects/rice-mill/rice-mill.jpg",
    accent: "#f59e0b",
  },
  {
    id: 2,
    title: "QuickStay Booking Engine",
    category: "Web Apps",
    description: "Unified booking system and front-desk dashboard for hospitality.",
    image: "/projects/quickstay/QuickStay.jpg",
    accent: "#3b82f6",
  },
  {
    id: 3,
    title: "Photography CMS & Portal",
    category: "Web Apps",
    description: "CMS-driven portfolio and client scheduling portal.",
    image: "/projects/MalcolmLismore/Malcolm.jpg",
    accent: "#a855f7",
  },
  {
    id: 4,
    title: "QuickSticker AI Studio",
    category: "AI Solutions",
    description: "AI generator converting images and prompts into messenger stickers.",
    image: "/projects/quickSticker/QuickSticker.jpg",
    accent: "#ec4899",
    github: "https://github.com/ashrifrihan/QuickSticker",
  },
  {
    id: 5,
    title: "QuickCompress Optimizer",
    category: "Web Apps",
    description: "In-memory batch image resizing and optimization tool.",
    image: "/projects/QuickCompress/quick.jpg",
    accent: "#06b6d4",
    github: "https://github.com/ashrifrihan/QuickCompress",
  },
  {
    id: 6,
    title: "Wander Sphere Travel",
    category: "UI/UX Design",
    description: "Interactive prototype for responsive multi-city tour itineraries.",
    image: "/projects/Wander-Spheres/Wander-Spheres.jpg",
    accent: "#10b981",
  },
  {
    id: 7,
    title: "Quick Eats Ordering App",
    category: "UI/UX Design",
    description: "UX design for mobile food delivery with dynamic real-time tracking.",
    image: "/projects/QucikEats/QucikEats.jpg",
    accent: "#ef4444",
  },
  {
    id: 8,
    title: "CaféSpot Coffee App",
    category: "Mobile Apps",
    description: "Mobile ordering concept tailored for rapid pick-ups.",
    image: "/projects/cafe-spot/cafe-spot.jpg",
    accent: "#d97706",
  },
  {
    id: 9,
    title: "StarEvent Management",
    category: "Enterprise Systems",
    description: "Event scheduler and booking system built with ASP.NET MVC.",
    image: "/projects/starevent/starevent.jpg",
    accent: "#6366f1",
    github: "https://github.com/ashrifrihan/StarEvent",
  },
  {
    id: 10,
    title: "Aura Enterprise ERP",
    category: "Enterprise Systems",
    description: "Supply chain and accounting portal for industrial scaling.",
    image: "/projects/rice-mill/rice-mill.jpg",
    accent: "#e11d48",
  },
  {
    id: 11,
    title: "FitFlow Fitness App",
    category: "Mobile Apps",
    description: "Offline-first training planner and health tracker.",
    image: "/projects/QucikEats/QucikEats.jpg",
    accent: "#059669",
  },
  {
    id: 12,
    title: "NeuroWrite AI Writer",
    category: "AI Solutions",
    description: "SaaS generator utilizing OpenAI for marketing copywriting.",
    image: "/projects/quickSticker/QuickSticker.jpg",
    accent: "#8b5cf6",
  },
  {
    id: 13,
    title: "EcoSphere Solar Grid",
    category: "Web Apps",
    description: "Dashboard tracking local solar panels and grid usage.",
    image: "/projects/QuickCompress/quick.jpg",
    accent: "#10b981",
  },
  {
    id: 14,
    title: "Apex Trading Terminal",
    category: "Enterprise Systems",
    description: "Crypto analytics console with live updates and charting.",
    image: "/projects/quickstay/QuickStay.jpg",
    accent: "#0ea5e9",
  },
  {
    id: 15,
    title: "HoloMed AR Concept",
    category: "UI/UX Design",
    description: "Augmented reality interface overlays for medical tracking.",
    image: "/projects/Wander-Spheres/Wander-Spheres.jpg",
    accent: "#d946ef",
  },
  {
    id: 16,
    title: "Nova Analytics Suite",
    category: "Web Apps",
    description: "Lightweight traffic analytics tracking user actions.",
    image: "/projects/cafe-spot/cafe-spot.jpg",
    accent: "#f43f5e",
  }
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeScreenshot, setActiveScreenshot] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return galleryProjects;
    return galleryProjects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const filters = ["All", "Web Apps", "Mobile Apps", "AI Solutions", "UI/UX Design", "Enterprise Systems"];

  return (
    <div className="bg-black min-h-screen text-white select-none">
      <Nav />
      
      {/* 1. Hero Section */}
      <section className="perf-section relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="perf-glow pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-purple-500/5 blur-[120px]" />
        
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.08] px-3.5 py-1.5 bg-white/[0.02]"
          >
            <span className="text-[12.5px] font-semibold uppercase tracking-wider text-purple-400" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              OUR PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(32px,6vw,56px)] font-black tracking-[-0.04em] leading-[1.05]"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Our Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-[clamp(16px,2vw,21px)] text-white/50 font-medium"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Real software, real products, real results.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { value: "25+", label: "Projects Completed" },
            { value: "8+", label: "Industries Served" },
            { value: "5+", label: "Core Technologies" },
            { value: "100%", label: "Custom Built" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-2xl p-6 text-center"
            >
              <div className="text-[32px] sm:text-[36px] font-black text-white leading-none tracking-tight font-mono">{stat.value}</div>
              <div className="text-[12px] text-white/40 mt-1.5 font-semibold uppercase tracking-wider" style={{ fontFamily: '"Satoshi", sans-serif' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Detailed Case Studies */}
      <section className="perf-section py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="mb-16">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Featured Case Studies
          </h2>
          <p className="text-[14px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            In-depth breakdowns of some of our proudest product developments.
          </p>
        </div>

        <div className="flex flex-col gap-28">
          {featuredCaseStudies.map((study, idx) => (
            <div 
              key={study.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start`}
            >
              {/* Info Column */}
              <div className={`lg:col-span-6 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-white/40 mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span>{study.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span>{study.industry}</span>
                </div>
                
                <h3 className="text-[26px] sm:text-[32px] font-black tracking-tight mb-6 leading-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {study.title}
                </h3>

                <div className="flex flex-col gap-6 text-[14.5px] leading-relaxed text-white/50" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-white mb-1">Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-white mb-1">Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-white mb-1">Outcome</h4>
                    <p className="text-white/80 font-medium">{study.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/40 mb-2.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map(tech => (
                      <span key={tech} className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/60 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {study.github && (
                  <div className="mt-6">
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      View GitHub Repository ↗
                    </a>
                  </div>
                )}
              </div>

              {/* Showcase Column */}
              <div className={`lg:col-span-6 flex flex-col gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div 
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0b0b0d]"
                >
                  <Image 
                    src={study.screenshots[activeScreenshot[study.id] || 0]}
                    alt={`${study.title} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-all duration-500 filter saturate-[0.9] brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Gallery Thumbnail Toggles */}
                {study.screenshots.length > 1 && (
                  <div className="flex gap-2">
                    {study.screenshots.map((screen, idxScreen) => (
                      <button
                        key={idxScreen}
                        onClick={() => setActiveScreenshot(prev => ({ ...prev, [study.id]: idxScreen }))}
                        className={`relative w-20 aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                          (activeScreenshot[study.id] || 0) === idxScreen
                            ? "border-purple-500"
                            : "border-white/[0.08] opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image 
                          src={screen} 
                          alt="Thumbnail toggle" 
                          fill 
                          sizes="80px"
                          className="object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Project Gallery Section */}
      <section className="perf-section py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]" id="gallery">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[24px] sm:text-[30px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Project Gallery
            </h2>
            <p className="text-[14px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Full catalog of our projects, design layouts, and technical releases.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1.5 max-w-full overflow-x-auto py-1">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[12.5px] px-3.5 py-1.5 rounded-lg border font-semibold transition-all shrink-0 ${
                  activeFilter === filter
                    ? "bg-white text-black border-white"
                    : "bg-[#0b0b0d] border-white/[0.06] text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] flex flex-col h-full cursor-pointer hover:border-white/[0.15] transition-all"
              >
                {/* Thumb */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.01] border-b border-white/[0.05]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top filter saturate-[0.8] brightness-[0.75] group-hover:saturate-100 group-hover:brightness-90 group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-white/40 uppercase mb-1.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {project.category}
                    </div>
                    <h3 className="text-[17px] font-bold text-white mb-1.5 tracking-tight group-hover:text-white transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-white/40 leading-relaxed font-medium line-clamp-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-white/[0.04]">
                    <span className="text-[11.5px] font-bold" style={{ fontFamily: '"Satoshi", sans-serif', color: project.accent }}>
                      View Project Details
                    </span>
                    {project.github && (
                      <span className="text-[11px] text-white/20 hover:text-white/50 transition-colors font-medium">
                        GitHub ↗
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Technology Showcase Section */}
      <section className="perf-section py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Technology Showcase
          </h2>
          <p className="text-[14px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            We select the best and most reliable modern frameworks to design custom business infrastructures.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
          {["React", "Next.js", "Node.js", "MongoDB", "Supabase", "Python", "OpenAI API", "Tailwind CSS", "PHP", "ASP.NET MVC", "MySQL", "C#", "Firebase"].map((tech) => (
            <div
              key={tech}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl px-5 py-3 text-[14px] font-semibold text-white/80 hover:text-white hover:border-white/20 transition-all cursor-default"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Client Results Section */}
      <section className="perf-section py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { metric: "40% Faster", subtitle: "Operational turnarounds", desc: "Automating inventory audits and tracking logic reduces manual logging errors." },
            { metric: "300% Boost", subtitle: "Load times optimized", desc: "Using local caching, WebP assets, and Server-Side compilation for all projects." },
            { metric: "50% Less", subtitle: "Manual workload costs", desc: "Direct integrations with payment APIs, scheduling automation, and custom alerts." }
          ].map((result, idx) => (
            <div key={idx} className="bg-[#0b0b0d] border border-white/[0.06] rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="text-[36px] font-black text-white leading-none tracking-tight font-mono mb-1">{result.metric}</div>
                <div className="text-[13px] font-bold uppercase tracking-wider text-purple-400 mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>{result.subtitle}</div>
                <p className="text-[13.5px] leading-relaxed text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>{result.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Development Process Section */}
      <section className="perf-section py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[30px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Development Process
          </h2>
          <p className="text-[14px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            A transparent and highly iterative path from abstract business idea to enterprise release.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { step: "01", name: "Discovery", desc: "Detailed workshops defining scope." },
            { step: "02", name: "Strategy", desc: "Data modeling and technology picks." },
            { step: "03", name: "Design", desc: "Interactive wireframes and layouts." },
            { step: "04", name: "Development", desc: "Clean build execution." },
            { step: "05", name: "Launch", desc: "Rigorous staging audits and setup." },
            { step: "06", name: "Support", desc: "Continuous uptime checks and updates." }
          ].map((proc, idx) => (
            <div key={idx} className="bg-[#0c0c0e] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-4">
              <span className="text-[22px] font-black text-white/10 font-mono leading-none">{proc.step}</span>
              <div>
                <h4 className="text-[14px] font-bold text-white mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.name}</h4>
                <p className="text-[11.5px] text-white/45 leading-relaxed font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="perf-section py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-white/[0.04] relative overflow-hidden">
        <div className="perf-glow pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-purple-500/5 blur-[100px]" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-[28px] sm:text-[38px] font-bold tracking-tight mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Have a project in mind?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-white/50 mb-8 font-medium leading-relaxed" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Let&apos;s build something exceptional. Tell us about your idea and get a fully customized engineering plan.
          </p>
          <a
            href="mailto:hello@nexzoa.com"
            className="inline-flex items-center justify-center rounded-[12px] bg-white px-7 py-3.5 text-[14px] font-bold text-black hover:bg-white/90 transition-colors"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
