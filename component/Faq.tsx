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
      className="relative"
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

import { MAIN_FAQS, FAQItem } from "@/lib/faqData";

const faqData: FAQItem[] = MAIN_FAQS;

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
          {/* Left Column - sticky stack on mobile */}
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
          {/* Right Column - sticky stack on mobile */}
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
