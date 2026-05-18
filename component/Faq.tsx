"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

/* ─── FAQ dataset with detailed high-performance answers ─── */
const faqs = [
  {
    question: "Do you build custom software systems?",
    answer: "Yes, absolutely. We design, architect, and engineer high-performance custom software systems tailored specifically to your company's workflows. From enterprise-grade ERPs and proprietary database integrations to full-scale SaaS platforms, we build scalable, future-proof systems using modern, robust technology stacks designed to support massive growth.",
    category: "Development"
  },
  {
    question: "Can you develop mobile apps?",
    answer: "Yes, we build premium iOS and Android mobile applications. By leveraging native platform languages and advanced cross-platform frameworks like React Native or Flutter, we deliver highly responsive, pixel-perfect mobile experiences complete with offline capabilities, background synchronization, and secure biometric authentication.",
    category: "Mobile"
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Definitely. We transform outdated platforms into modern, high-converting digital experiences. Our redesign process involves deep UX research, responsive layout optimization, speed and performance enhancements, and full SEO migration support, ensuring your brand projects a premium, cutting-edge image.",
    category: "Redesign"
  },
  {
    question: "Can AI automation be integrated?",
    answer: "Yes, AI integration is one of our core specialties. We seamlessly embed advanced large language models, predictive analysis engines, intelligent document processing systems, and autonomous AI agents directly into your software infrastructure to optimize workflows, save time, and reduce operational overhead.",
    category: "AI & Automation"
  },
  {
    question: "Do you provide dashboard development?",
    answer: "Yes, we design and build bespoke business intelligence dashboards. We integrate directly with your internal APIs, databases, or third-party services to aggregate complex data streams into clean, real-time data visualizations featuring interactive filtering, custom alerts, and flexible export capabilities.",
    category: "Analytics"
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines typically range from 4 to 12 weeks depending on the overall complexity, feature set, and integrations required. We follow an agile, 6-stage operational delivery framework with weekly sprints, ensuring you receive transparent updates, prototype reviews, and rapid, high-quality deployments.",
    category: "Process"
  }
];

/* ─── Premium Accordion Item Component ─── */
function AccordionItem({
  question,
  answer,
  category,
  isOpen,
  onClick,
  index
}: {
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="mb-4"
    >
      <div
        onClick={onClick}
        className={`w-full text-left rounded-2xl border transition-all duration-300 cursor-pointer p-5 sm:p-6 group relative overflow-hidden backdrop-blur-md ${
          isOpen
            ? "bg-white/[0.04] border-white/[0.12] shadow-[0_0_30px_rgba(255,255,255,0.02)]"
            : "bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.02] hover:border-white/[0.09]"
        }`}
      >
        {/* Hover Border Accent */}
        <div
          className={`absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />

        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-wider text-blue-400/60 font-semibold font-mono">
              {category}
            </span>
            <h3
              className={`text-[15px] sm:text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                isOpen ? "text-white" : "text-white/80 group-hover:text-white"
              }`}
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {question}
            </h3>
          </div>

          {/* Smooth Toggle Icon */}
          <div
            className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
              isOpen
                ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                : "border-white/10 text-white/40 group-hover:text-white/60 group-hover:border-white/20"
            }`}
          >
            <motion.svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              animate={{ rotate: isOpen ? 135 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <line x1="5" y1="1" x2="5" y2="9" />
              <line x1="1" y1="5" x2="9" y2="5" />
            </motion.svg>
          </div>
        </div>

        {/* Accordion Expansion */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/[0.04] mt-4">
                <p
                  className="text-[13px] sm:text-[14px] leading-[1.65] text-white/50"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ─── Main FAQ Component ─── */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* Structured SEO Data (JSON-LD FAQPage Schema) */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="relative py-20 sm:py-28 overflow-hidden bg-black border-t border-white/[0.02]"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Dynamic SEO JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ─── FAQ Section Header ─── */}
        <div className="mb-16 sm:mb-24 text-center">
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
              07 — FAQ
            </span>
          </motion.div>

          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,46px)] font-bold leading-[1.15] tracking-[-0.04em] text-white mb-4"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Everything you may want to know before starting.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-xl text-[14px] sm:text-[15px] text-white/50"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Frequently Asked Questions
          </motion.p>
        </div>

        {/* ─── Two-Column Bento Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Glowing Support Widget */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[24px] border border-white/[0.08] p-6 sm:p-8 group"
              style={{ background: "linear-gradient(145deg, rgba(16,16,20,0.8) 0%, rgba(8,8,12,0.8) 100%)" }}
            >
              {/* Dynamic Spotlight Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(400px_circle_at_50%_120px,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

              {/* Status Header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400/80 font-bold uppercase tracking-wider">
                  Support Hub Online
                </span>
              </div>

              <h3
                className="text-[20px] font-bold text-white tracking-[-0.02em] mb-3"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Still have unanswered questions?
              </h3>
              
              <p
                className="text-[13px] leading-[1.6] text-white/45 mb-6"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                We're always here to clarify details about our processes, visual systems, integrations, or custom development.
              </p>

              {/* Metrics Display */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-6 mb-6">
                <div>
                  <div className="text-[18px] font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    &lt; 15 mins
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">
                    Response Speed
                  </div>
                </div>
                <div>
                  <div className="text-[18px] font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    100%
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">
                    Delivery Rate
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-[13px] font-semibold text-white transition-all duration-300 group/btn"
              >
                <span>Get in touch</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white/60 group-hover/btn:translate-x-0.5 transition-transform duration-300"
                >
                  <path
                    d="M6 12l4-4-4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Expandable Accordion Grid */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                category={faq.category}
                isOpen={openIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
