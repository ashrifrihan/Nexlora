"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";

function useIsMobile() {
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMob(mq.matches);
    const h = (e: MediaQueryListEvent) => setMob(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return mob;
}

function StickyShellClient({ index, total, isMobile, children }: {
  index: number; total: number; isMobile: boolean; children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, isLast ? 1 : 0.94]);
  return (
    <div ref={ref} className="relative h-full" style={isMobile ? { position: "sticky", top: 80 + index * 6, zIndex: index + 1, willChange: "transform" } : undefined}>
      <motion.div className="h-full bg-[#0c0c0c] rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.9)]" style={isMobile ? { scale, transformOrigin: "top center", willChange: "transform" } : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

const StickyShellDynamic = dynamic(
  () => Promise.resolve(StickyShellClient),
  { ssr: false }
);

function StickyShell({ index, total, children }: { index: number; total: number; children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <StickyShellDynamic index={index} total={total} isMobile={isMobile}>
      {children}
    </StickyShellDynamic>
  );
}

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  badgeBg: string; // CSS background value (gradient or solid)
}

const testimonialsData: TestimonialItem[] = [
  {
    name: "Liam Carter",
    role: "Founder & CEO",
    company: "Vortex SaaS",
    content: "Partnering with their software engineering team was a game-changer for our SaaS startup. They built our custom cloud platform weeks ahead of schedule with top-tier performance.",
    rating: 5,
    initials: "LC",
    badgeBg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", // Blue
  },
  {
    name: "Sophia Chen",
    role: "Head of Product",
    company: "Aether Labs",
    content: "They delivered a highly interactive, custom admin dashboard that dramatically optimized our business workflows. A world-class software development agency partnership.",
    rating: 5,
    initials: "SC",
    badgeBg: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)", // Cyan
  },
  {
    name: "Marcus Vance",
    role: "CTO",
    company: "Horizon Finance",
    content: "We needed a secure custom enterprise software system to scale our platforms. Their engineering standards are exceptionally high, and the security is flawless.",
    rating: 5,
    initials: "MV",
    badgeBg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", // Amber
  },
  {
    name: "Elena Rostova",
    role: "Product Director",
    company: "Novo App",
    content: "Our new cross-platform mobile application has amazing native speed and clean transitions. The launch on both App Store and Google Play was perfectly seamless.",
    rating: 5,
    initials: "ER",
    badgeBg: "linear-gradient(135deg, #10b981 0%, #047857 100%)", // Emerald
  },
  {
    name: "David Kovic",
    role: "Founder",
    company: "Pulse Analytics",
    content: "Integrating custom AI automation workflows into our software system has cut operational costs by 40%. Their technical expertise is truly unmatched.",
    rating: 5,
    initials: "DK",
    badgeBg: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)", // Indigo
  },
  {
    name: "Aria Bennett",
    role: "VP of Engineering",
    company: "Zenith Systems",
    content: "They redesigned our legacy platform into a modern, SEO-optimized web application. Our website loading speed improved by 300% and conversions increased instantly.",
    rating: 5,
    initials: "AB",
    badgeBg: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)", // Pink
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialCard({ item, index }: { item: TestimonialItem; index: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const avatarY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-[28px] border border-white/[0.04] bg-[#0c0c0c] p-8 hover:bg-[#0f0f0f] hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between h-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
    >
      {/* Interactive mouse spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.06), transparent 85%)`,
        }}
      />

      {/* Decorative quote mark */}
      <div className="absolute top-6 right-8 text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none">
        <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2 0C4.8 0 0 4.8 0 11.2C0 12.8 0.8 14.4 1.6 15.2C0 17.6 0 20.8 0 24C0 24.8 0.8 24.8 1.6 24.8C2.4 24.8 3.2 24 3.2 23.2C4.8 19.2 7.2 16 11.2 16C12 16 12.8 15.2 12.8 14.4V8C12.8 3.2 8.8 0 4 0H11.2ZM32 0C25.6 0 20.8 4.8 20.8 11.2C20.8 12.8 21.6 14.4 22.4 15.2C20.8 17.6 20.8 20.8 20.8 24C20.8 24.8 21.6 24.8 22.4 24.8C23.2 24.8 24 24 24 23.2C25.6 19.2 28 16 32 16C32.8 16 33.6 15.2 33.6 14.4V8C33.6 3.2 29.6 0 24.8 0H32Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(item.rating)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-amber-400" />
          ))}
        </div>

        {/* Feedback Text */}
        <p className="text-[14.5px] sm:text-[15.5px] leading-[1.75] text-white/55 group-hover:text-white/80 transition-colors duration-500 mb-8 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          "{item.content}"
        </p>
      </div>

      {/* Author Profile */}
      <div className="relative z-10 flex items-center gap-4 border-t border-white/[0.05] pt-6 mt-auto">
        <motion.div
          className="w-11 h-11 rounded-full flex items-center justify-center border border-white/[0.08] text-[13.5px] font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] shrink-0 select-none"
          style={{ background: item.badgeBg, y: isMobile ? avatarY : 0, willChange: "transform" }}
        >
          {item.initials}
        </motion.div>
        <div className="min-w-0">
          <h4 className="text-[14.5px] font-bold text-white tracking-[-0.01em]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {item.name}
          </h4>
          <p className="text-[12px] text-white/40 font-medium">
            {item.role} <span className="text-white/20">•</span> <span className="text-white/70">{item.company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-black px-4 py-14 sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-12 lg:py-24 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Brand ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.01] blur-[160px]" />

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
            <span
              className="text-[14px] font-medium tracking-[-0.02em] text-white"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Client Feedback
            </span>
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Trusted by startups &amp;{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              growing companies.
            </span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch relative">
          {testimonialsData.map((item, index) => (
            <StickyShell key={index} index={index} total={testimonialsData.length}>
              <TestimonialCard item={item} index={index} />
            </StickyShell>
          ))}
        </div>

        {/* Confidentiality Disclaimer */}
        <div className="mt-12 text-center select-none opacity-40 hover:opacity-100 transition-opacity duration-300">
          <p className="text-[10px] sm:text-[11px] text-white/30 uppercase tracking-widest" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            * Names and corporate entities modified for client confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
