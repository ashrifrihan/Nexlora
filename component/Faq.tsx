"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
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
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, isLast ? 1 : 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, isLast ? 1 : 0.75]);
  return (
    <div
      ref={ref}
      style={isMobile ? { position: "sticky", top: 80 + index * 5, zIndex: index + 1, willChange: "transform" } : undefined}
    >
      <motion.div style={isMobile ? { scale, opacity, transformOrigin: "top center", willChange: "transform" } : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

const StickyShellDynamic = dynamic(() => Promise.resolve(StickyShellClient), { ssr: false });

function StickyShell({ index, total, children }: { index: number; total: number; children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <StickyShellDynamic index={index} total={total} isMobile={isMobile}>
      {children}
    </StickyShellDynamic>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you build custom software systems?",
    answer: "Yes, as a specialized custom software development agency, we architect and engineer bespoke, secure, and highly scalable enterprise software systems tailored to your unique business workflows. Whether you need a performant SaaS web application, complex backend APIs, or scalable cloud infrastructure, we build it to support your long-term growth.",
  },
  {
    question: "Can you develop mobile apps?",
    answer: "Absolutely. Our cross-platform app developers build high-performance mobile applications for both iOS and Android systems using React Native and Flutter. We prioritize fluid micro-animations, offline-first architectures, native performance, and seamless device integrations from early concept to final App Store and Google Play launch.",
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes, we offer professional website redesign services aimed at modern UI/UX overhauls, conversion rate optimization (CRO), and blazing-fast loading speeds. We completely reconstruct your outdated frontends into modern, highly interactive, and SEO-optimized web experiences designed to engage visitors and capture leads.",
  },
  {
    question: "Can AI automation be integrated?",
    answer: "AI automation integration is one of our primary core disciplines. We build custom artificial intelligence layers, including Large Language Model (LLM) integrations like OpenAI GPT, automated business workflows, conversational user interfaces, and smart database search agents to automate repetitive operations and skyrocket productivity.",
  },
  {
    question: "Do you provide dashboard development?",
    answer: "Yes, we specialize in custom administrative dashboard development and real-time business intelligence (BI) systems. We build beautiful analytics portals featuring secure multi-tenant role management, live visual charts and graphs, and optimized query performance to let you track metrics at a glance.",
  },
  {
    question: "How long does a project take?",
    answer: "A typical software project takes between 4 to 12 weeks depending on scope and feature complexity. We follow an agile sprint-based delivery model, providing you with interactive, functional prototypes every 2 weeks so you can test, review, and refine progress in real-time leading up to the final launch.",
  },
  {
    question: "What modern tech stack do you specialize in?",
    answer: "We develop our products using premium, modern tech stacks centered around Next.js, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, and serverless AWS/Vercel cloud environments. This ensures extreme reliability, top-tier SEO rendering, and a highly maintainable codebase.",
  },
  {
    question: "How do you handle client communication and collaboration?",
    answer: "We support a transparent, close client collaboration process. You will have a dedicated Slack workspace for daily syncs, a shared Notion hub to track progress in real-time, and live bi-weekly video sprint reviews where we demonstrate functional updates and plan the next phase.",
  },
  {
    question: "Is Nexzoa related to Nexon or Tata Nexon?",
    answer: "No. Nexzoa is an independent, premium custom software engineering and AI automation solutions firm. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Nexon Co., Ltd. (the video game developer and publisher) or Tata Motors (the manufacturer of Tata Nexon cars). We design and build bespoke SaaS platforms, custom CRM systems, and AI workflows for modern business operations.",
  },
];

function AccordionItem({ item, isOpen, onClick, index }: { item: FAQItem; isOpen: boolean; onClick: () => void; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div 
        onClick={onClick}
        className={`w-full text-left p-5 sm:p-6 rounded-[20px] border transition-all duration-300 cursor-pointer select-none flex items-start gap-4 ${
          isOpen 
            ? "bg-white/[0.035] border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.015)]" 
            : "bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.12]"
        }`}
      >
        <div className="flex-1 min-w-0">
          <h3 
            className={`text-[15px] sm:text-[17px] font-semibold tracking-[-0.02em] transition-colors duration-300 ${
              isOpen ? "text-white" : "text-white/80 group-hover:text-white"
            }`}
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {item.question}
          </h3>
          
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p 
                  className="text-[13px] sm:text-[14px] leading-[1.6] text-white/50"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div 
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center bg-white/[0.02] shrink-0 transition-all duration-300 ${
            isOpen 
              ? "border-white/25 text-white rotate-180 bg-white/5" 
              : "border-white/[0.08] text-white/40 group-hover:text-white/70 group-hover:border-white/[0.16]"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for premium visual greeting

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="perf-section relative w-full bg-black px-4 py-14 sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-12 lg:py-24 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Subtle brand ambient glow */}
      <div className="perf-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.01] blur-[150px]" />

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
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2 
            id="faq-heading" 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white" 
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Everything you may want to{" "}
            <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/40 bg-clip-text text-transparent">
              know before starting.
            </span>
          </motion.h2>
        </div>

        {/* ── Accordion Lists (2 Columns on Desktop) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Left Column — sticky stack on mobile */}
          <div className="space-y-3 sm:space-y-4 relative">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
              <StickyShell key={index} index={index} total={Math.ceil(faqData.length / 2)}>
                <AccordionItem
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => toggleIndex(index)}
                  index={index}
                />
              </StickyShell>
            ))}
          </div>
          {/* Right Column — sticky stack on mobile */}
          <div className="space-y-3 sm:space-y-4 relative">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => {
              const actualIndex = index + Math.ceil(faqData.length / 2);
              return (
                <StickyShell key={actualIndex} index={index} total={faqData.length - Math.ceil(faqData.length / 2)}>
                  <AccordionItem
                    item={item}
                    isOpen={openIndex === actualIndex}
                    onClick={() => toggleIndex(actualIndex)}
                    index={actualIndex}
                  />
                </StickyShell>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
