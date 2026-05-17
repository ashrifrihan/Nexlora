"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "motion/react";

/* ─── service data ─── */
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern responsive websites built for performance, SEO, and conversion — from landing pages to full-stack platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m8 10 3-3 3 3" />
        <path d="M8 14h8" />
      </svg>
    ),
    accent: "#3b82f6",
  },
  {
    id: "dashboard-systems",
    title: "Dashboard Systems",
    description:
      "Realtime operational dashboards for business workflows, analytics, and data-driven decision making.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="3" y="14" width="7" height="4" rx="1" />
        <rect x="14" y="11" width="7" height="7" rx="1" />
        <path d="M14 20h7" />
      </svg>
    ),
    accent: "#f59e0b",
  },
  {
    id: "ai-workflows",
    title: "AI Workflows",
    description:
      "AI-powered automation systems connected to real business operations — smarter pipelines, fewer bottlenecks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <circle cx="12" cy="14" r="3" />
        <path d="M12 17v5" />
        <path d="M6 20h12" />
        <path d="m9 11-3 3" />
        <path d="m15 11 3 3" />
      </svg>
    ),
    accent: "#a855f7",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Fast mobile experiences for customers, teams, and field operations — built cross-platform, shipped fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01" />
        <path d="M9 6h6" />
      </svg>
    ),
    accent: "#10b981",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Clean interfaces designed for usability, clarity, and scale — research-driven design that users love.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17 2h2a2 2 0 0 1 2 2v2" />
        <path d="M2 17v2a2 2 0 0 0 2 2h2" />
        <path d="M7 2H5a2 2 0 0 0-2 2v2" />
        <path d="M22 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 13l3 3 7-7" />
      </svg>
    ),
    accent: "#ec4899",
  },
  {
    id: "automation-systems",
    title: "Automation Systems",
    description:
      "Internal tools and automated workflows for repetitive processes — reduce manual work, scale faster.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 6V2" />
        <path d="m16.24 7.76 2.83-2.83" />
        <path d="M18 12h4" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M12 18v4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="M2 12h4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    accent: "#ef4444",
  },
];

/* ─── bento service card ─── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      // Card tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      setTilt({ rotateX, rotateY });
    },
    []
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
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
        className="service-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-6 sm:p-8 transition-all duration-500 ease-out cursor-pointer h-full"
        style={{
          transform: isHovering
            ? `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.01, 1.01, 1.01)`
            : "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovering
            ? "transform 150ms ease-out"
            : "transform 500ms ease-out",
        }}
      >
        {/* Spotlight gradient that follows cursor */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, ${service.accent}08, transparent 60%)`,
          }}
        />

        {/* Border glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-500"
          style={{
            opacity: isHovering ? 1 : 0,
            boxShadow: `inset 0 0 0 1px ${service.accent}25, 0 0 30px -10px ${service.accent}15`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon container */}
          <motion.div
            className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]"
            style={{ color: service.accent }}
            animate={
              isHovering
                ? { scale: 1.1, rotate: -6, y: -2 }
                : { scale: 1, rotate: 0, y: 0 }
            }
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.icon}
          </motion.div>

          {/* Title */}
          <h3
            className="mb-3 text-[17px] font-semibold tracking-[-0.02em] text-white/95 transition-colors duration-300 group-hover:text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="text-[14px] leading-[1.65] font-normal text-white/40 transition-colors duration-300 group-hover:text-white/55"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {service.description}
          </p>

          {/* Arrow indicator */}
          <div className="mt-5 flex items-center gap-1.5 overflow-hidden">
            <motion.span
              className="text-[13px] font-medium tracking-[-0.01em]"
              style={{ color: service.accent, opacity: 0.7 }}
              animate={isHovering ? { opacity: 1 } : { opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              Learn more
            </motion.span>
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              style={{ color: service.accent }}
              animate={isHovering ? { x: 3, opacity: 1 } : { x: 0, opacity: 0.5 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <path
                d="M6 12l4-4-4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── main section ─── */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40"
      aria-labelledby="services-heading"
    >
      {/* Subtle top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />

      <div className="mx-auto w-full max-w-7xl">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20 text-center">
          {/* Section label */}
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
              What We Build
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto max-w-3xl text-[48px] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Everything needed to run{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              modern digital operations.
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
            className="mx-auto mt-4 max-w-2xl text-[20px] font-medium leading-[1.4] tracking-[-0.02em] text-white/60"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            End-to-end software development, AI automation, and custom digital
            solutions - engineered for scale.
          </motion.p>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
