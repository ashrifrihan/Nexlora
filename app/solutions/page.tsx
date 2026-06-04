"use client";

import React, { useState, useMemo } from "react";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { motion, AnimatePresence } from "motion/react";

interface SolutionItem {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  examplesTitle: string;
  examples: string[];
  benefits: string[];
}

const solutionsList: SolutionItem[] = [
  {
    id: 1,
    title: "Custom Software Development",
    shortDesc: "Tailored business applications built around your operations.",
    description: "We build custom business software designed around your operations instead of forcing your business to adapt to generic, off-the-shelf tools.",
    examplesTitle: "Systems We Build",
    examples: [
      "Inventory Systems",
      "Booking Platforms",
      "ERP Systems",
      "School Management Systems",
      "Rice Mill Management Systems",
      "Business Dashboards"
    ],
    benefits: [
      "Reduce manual work",
      "Increase efficiency",
      "Centralize business operations",
      "Improve reporting"
    ]
  },
  {
    id: 2,
    title: "Web Application Development",
    shortDesc: "Modern, secure web applications accessible from any browser.",
    description: "Modern web applications built using industry-standard frameworks, accessible from anywhere with absolute security and zero client installations.",
    examplesTitle: "Applications We Build",
    examples: [
      "Customer Portals",
      "Booking Websites",
      "Admin Panels",
      "E-commerce Platforms",
      "SaaS Applications"
    ],
    benefits: [
      "Accessible anywhere",
      "Secure cloud infrastructure",
      "Easy maintenance",
      "Scalable architecture"
    ]
  },
  {
    id: 3,
    title: "Mobile App Development",
    shortDesc: "Cross-platform applications for Android and iOS devices.",
    description: "Fully responsive cross-platform mobile applications engineered to deliver native performance and responsive user interfaces on all viewport sizes.",
    examplesTitle: "Apps We Build",
    examples: [
      "Delivery Apps",
      "Booking Apps",
      "Customer Loyalty Apps",
      "Workforce Management Apps"
    ],
    benefits: [
      "Better customer engagement",
      "Mobile accessibility",
      "Real-time notifications",
      "Improved convenience"
    ]
  },
  {
    id: 4,
    title: "AI & Automation Systems",
    shortDesc: "Intelligent automation to streamline repetitive operations.",
    description: "Reduce operational overhead and eliminate calculation errors using custom machine learning integrations and workflow automated scripts.",
    examplesTitle: "Automation We Build",
    examples: [
      "AI Chatbots",
      "Smart Recommendations",
      "Document Processing",
      "Data Analysis",
      "Workflow Automation"
    ],
    benefits: [
      "Save time",
      "Reduce operational costs",
      "Improve customer support",
      "Increase productivity"
    ]
  },
  {
    id: 5,
    title: "UI/UX Design",
    shortDesc: "Intuitive, clean interfaces built for user conversion.",
    description: "Designing user-friendly digital experiences that are intuitive, accessible, and designed to minimize cognitive load for non-technical users.",
    examplesTitle: "Design Offerings",
    examples: [
      "Web Design",
      "Mobile App Design",
      "Dashboard Design",
      "Design Systems",
      "Wireframing",
      "Prototyping"
    ],
    benefits: [
      "Better user satisfaction",
      "Improved engagement",
      "Stronger brand perception",
      "Higher conversion rates"
    ]
  },
  {
    id: 6,
    title: "Cloud & Infrastructure",
    shortDesc: "Secure, reliable, and scalable cloud-based systems.",
    description: "Deploying production-ready cloud systems configured with automatic caching, robust database schemas, and CI/CD development pipelines.",
    examplesTitle: "Services We Provide",
    examples: [
      "Vercel Deployment",
      "Server Setup",
      "Database Configuration",
      "CI/CD Pipelines",
      "Performance Optimization"
    ],
    benefits: [
      "High uptime",
      "Faster performance",
      "Scalability",
      "Security"
    ]
  }
];

const industries = [
  { name: "Agriculture", desc: "Digital solutions for farming and rice mill operations." },
  { name: "Hospitality", desc: "Booking, housekeeping, and reservation platforms." },
  { name: "Education", desc: "Learning systems and student progress portals." },
  { name: "Healthcare", desc: "Appointment and patient dashboard management." },
  { name: "Retail", desc: "Inventory, stock POS, and e-commerce platforms." },
  { name: "Logistics", desc: "Fleet booking, delivery, and tracking systems." }
];

const techStack = ["Next.js", "React", "Node.js", "MongoDB", "Supabase", "PostgreSQL", "Python", "OpenAI", "Tailwind CSS", "TypeScript"];

const processSteps = [
  { step: "01", name: "Discover", desc: "Understand business requirements." },
  { step: "02", name: "Plan", desc: "Define strategy and architecture." },
  { step: "03", name: "Design", desc: "Create wireframes and UI/UX." },
  { step: "04", name: "Develop", desc: "Build and test the solution." },
  { step: "05", name: "Launch", desc: "Deploy to production." },
  { step: "06", name: "Support", desc: "Maintain and improve." }
];

const whyChooseUs = [
  { title: "Business-Focused", desc: "We solve operational bottlenecks, not just write lines of code." },
  { title: "Scalable Architecture", desc: "Systems designed to handle growing traffic and database size." },
  { title: "Modern Technologies", desc: "Built using modern frameworks, serverless APIs, and fast cloud servers." },
  { title: "Long-Term Support", desc: "Ongoing maintenance, optimization audits, and feature upgrades." }
];

const faqs = [
  { q: "How much does a project cost?", a: "Pricing depends entirely on scope, feature requirements, and technical complexity. We provide a clear breakdown before coding starts." },
  { q: "How long does development take?", a: "Typically between 2 to 16 weeks depending on the system architecture and features required." },
  { q: "Do you provide maintenance?", a: "Yes, we offer ongoing maintenance, speed optimization, security updates, and feature scaling plans." },
  { q: "Can existing systems be upgraded?", a: "Yes, we can modernize legacy applications, integrate modern databases, and link custom AI features to your existing systems." }
];

export default function SolutionsPage() {
  const [activeSolutionId, setActiveSolutionId] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const activeSolution = useMemo(() => {
    return solutionsList.find(s => s.id === activeSolutionId) || solutionsList[0];
  }, [activeSolutionId]);

  return (
    <div className="bg-black min-h-screen text-white select-none">
      <Nav />

      {/* 1. Hero Section */}
      <section className="perf-section relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="perf-glow pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/[0.02] blur-[120px]" />

        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.08] px-3.5 py-1.5 bg-white/[0.02]">
            <span className="text-[12.5px] font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Our Services
            </span>
          </div>

          <h1
            className="text-[clamp(32px,6vw,56px)] font-black tracking-[-0.04em] leading-[1.05]"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Software Solutions Built for Growth
          </h1>

          <p
            className="mt-4 text-[clamp(15px,2vw,19px)] text-white/50 font-medium leading-relaxed"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Nexzoa helps businesses automate operations, improve customer experiences, and scale through custom software, AI systems, and digital platforms.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@nexzoa.com"
              className="inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3.5 text-[14px] font-bold text-black hover:bg-white/90 transition-colors"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start a Project
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-[12px] border border-white/[0.1] bg-white/[0.02] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-white/[0.08] transition-colors"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* 2. Overview Banner */}
      <section className="perf-section py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-[14.5px] text-white/40 leading-relaxed font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          Every business faces different challenges. We design and build custom solutions tailored to your goals, workflows, and industry requirements.
        </p>
      </section>

      {/* 3. Core Solutions Interactive Section */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="mb-10">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Core Solutions
          </h2>
          <p className="text-[13.5px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Select a solution catalog to view detailed parameters, examples, and operational benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Solution List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {solutionsList.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolutionId(sol.id)}
                className={`w-full text-left p-4.5 rounded-xl border transition-all ${
                  activeSolutionId === sol.id
                    ? "bg-white/[0.04] border-white/20"
                    : "bg-[#0b0b0d] border-white/[0.06] hover:bg-white/[0.02]"
                }`}
              >
                <h3 className="text-[15.5px] font-bold text-white mb-1.5 tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {sol.title}
                </h3>
                <p className="text-[12.5px] text-white/40 leading-relaxed font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {sol.shortDesc}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Detailed Card */}
          <div className="lg:col-span-7 bg-[#0b0b0d] border border-white/[0.08] rounded-2xl p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Solution 0{activeSolution.id}
                  </div>
                  <h3 className="text-[22px] font-black tracking-tight text-white mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {activeSolution.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-white/50 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {activeSolution.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
                  {/* Examples */}
                  <div>
                    <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white/60 mb-2.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {activeSolution.examplesTitle}
                    </h4>
                    <ul className="space-y-1.5">
                      {activeSolution.examples.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[12.5px] text-white/40 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                          <span className="w-1 h-1 rounded-full bg-white/30" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white/60 mb-2.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Operational Benefits
                    </h4>
                    <ul className="space-y-2">
                      {activeSolution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12.5px] text-white/50 leading-snug font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5">
                            <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Industries We Serve
          </h2>
          <p className="text-[13.5px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            We adapt our system engineering to match specific industry workflows and rules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl p-5"
            >
              <h3 className="text-[14.5px] font-bold text-white mb-1.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {ind.name}
              </h3>
              <p className="text-[12.5px] text-white/40 leading-relaxed font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Technologies Section */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Technologies We Use
          </h2>
          <p className="text-[13.5px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Stable frameworks and tools selected for reliability, speed, and long-term support.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white/60 hover:text-white hover:border-white/20 transition-all cursor-default"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* 6. How We Work (Process) */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            How We Work
          </h2>
          <p className="text-[13.5px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            A transparent and step-by-step path from first discovery to production release.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {processSteps.map((proc) => (
            <div key={proc.step} className="bg-[#0c0c0e] border border-white/[0.06] rounded-2xl p-4.5 flex flex-col gap-3">
              <span className="text-[18px] font-black text-white/10 font-mono leading-none">{proc.step}</span>
              <div>
                <h4 className="text-[13px] font-bold text-white mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.name}</h4>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Why Nexzoa */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChooseUs.map((w, idx) => (
            <div key={idx} className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl p-5">
              <h3 className="text-[14px] font-bold text-white mb-1.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {w.title}
              </h3>
              <p className="text-[12.5px] text-white/40 leading-relaxed font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-[13.5px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Answers to common questions about our custom software development process.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-[14px]"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  <span className="text-white/80">{faq.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-4 h-4 text-white/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p
                      className="px-5 pb-4.5 pt-0.5 text-[13px] leading-relaxed text-white/40 font-medium border-t border-white/[0.03]"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="perf-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-white/[0.04] relative overflow-hidden">
        <div className="perf-glow pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-white/[0.02] blur-[100px]" />

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-[26px] sm:text-[34px] font-bold tracking-tight mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-[14.5px] text-white/45 mb-7 font-medium leading-relaxed" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Let&apos;s discuss your idea and create a solution tailored to your business.
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
