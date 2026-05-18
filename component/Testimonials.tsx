"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  badgeColor: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    name: "Liam Carter",
    role: "Founder & CEO",
    company: "Vortex SaaS",
    content: "Partnering with their software engineering team was a game-changer for our SaaS startup. They built our custom cloud platform weeks ahead of schedule with top-tier performance.",
    rating: 5,
    initials: "LC",
    badgeColor: "rgba(59,130,246,0.1)", // blue
  },
  {
    name: "Sophia Chen",
    role: "Head of Product",
    company: "Aether Labs",
    content: "They delivered a highly interactive, custom admin dashboard that dramatically optimized our business workflows. A world-class software development agency partnership.",
    rating: 5,
    initials: "SC",
    badgeColor: "rgba(16,182,212,0.1)", // cyan
  },
  {
    name: "Marcus Vance",
    role: "CTO",
    company: "Horizon Finance",
    content: "We needed a secure custom enterprise software system to scale our platforms. Their engineering standards are exceptionally high, and the security is flawless.",
    rating: 5,
    initials: "MV",
    badgeColor: "rgba(245,158,11,0.1)", // amber
  },
  {
    name: "Elena Rostova",
    role: "Product Director",
    company: "Novo App",
    content: "Our new cross-platform mobile application has amazing native speed and clean transitions. The launch on both App Store and Google Play was perfectly seamless.",
    rating: 5,
    initials: "ER",
    badgeColor: "rgba(16,185,129,0.1)", // emerald
  },
  {
    name: "David Kovic",
    role: "Founder",
    company: "Pulse Analytics",
    content: "Integrating custom AI automation workflows into our software system has cut operational costs by 40%. Their technical expertise is truly unmatched.",
    rating: 5,
    initials: "DK",
    badgeColor: "rgba(99,102,241,0.1)", // indigo
  },
  {
    name: "Aria Bennett",
    role: "VP of Engineering",
    company: "Zenith Systems",
    content: "They redesigned our legacy platform into a modern, SEO-optimized web application. Our website loading speed improved by 300% and conversions increased instantly.",
    rating: 5,
    initials: "AB",
    badgeColor: "rgba(236,72,153,0.1)", // pink
  },
];

function TestimonialCard({ item, index }: { item: TestimonialItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[24px] border border-white/[0.06] bg-white/[0.015] p-6 hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(item.rating)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Content */}
        <p className="text-[14px] sm:text-[15px] leading-[1.6] text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          "{item.content}"
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center gap-3.5">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/[0.08] text-[13px] font-semibold text-white/80 shrink-0"
          style={{ backgroundColor: item.badgeColor }}
        >
          {item.initials}
        </div>
        <div className="min-w-0">
          <h4 className="text-[14px] font-bold text-white tracking-[-0.01em]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {item.name}
          </h4>
          <p className="text-[12px] text-white/40 truncate">
            {item.role} <span className="text-white/20">•</span> {item.company}
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
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle brand ambient glow */}
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
            Trusted by startups and{" "}
            <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/40 bg-clip-text text-transparent">
              growing companies.
            </span>
          </motion.h2>
        </div>

        {/* ── Testimonials Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {testimonialsData.map((item, index) => (
            <TestimonialCard
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
