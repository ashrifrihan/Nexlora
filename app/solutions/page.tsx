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
  renderVisual: () => React.ReactNode;
}

/* ─── Light-weight, High-performance Interactive SVGs for the Bento Grid ─── */

function CustomSoftwareVisual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      <svg className="w-full max-w-[160px] h-auto" viewBox="0 0 200 140" fill="none">
        {/* Main mainframe database */}
        <rect x="80" y="20" width="40" height="45" rx="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="80" y1="35" x2="120" y2="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="80" y1="50" x2="120" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="100" cy="27" r="2.5" fill="rgba(255,255,255,0.8)" />
        <circle cx="100" cy="42" r="2" fill="rgba(255,255,255,0.4)" />
        <circle cx="100" cy="57" r="2" fill="rgba(255,255,255,0.4)" />

        {/* Client terminal 1 (Desktop) */}
        <rect x="20" y="85" width="45" height="30" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="30" y1="120" x2="55" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="42.5" y1="115" x2="42.5" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Client terminal 2 (Tablet) */}
        <rect x="140" y="85" width="35" height="26" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="157.5" cy="107" r="1.5" fill="rgba(255,255,255,0.4)" />

        {/* Connections */}
        <motion.path
          d="M 42.5 85 L 42.5 50 L 80 50"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 157.5 85 L 157.5 50 L 120 50"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function WebAppVisual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      <svg className="w-full max-w-[160px] h-auto" viewBox="0 0 200 140" fill="none">
        {/* Browser Mockup */}
        <rect x="20" y="20" width="160" height="100" rx="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <rect x="20" y="20" width="160" height="20" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="32" cy="30" r="2.5" fill="rgba(255,255,255,0.4)" />
        <circle cx="42" cy="30" r="2.5" fill="rgba(255,255,255,0.2)" />
        <circle cx="52" cy="30" r="2.5" fill="rgba(255,255,255,0.2)" />

        {/* Dynamic dashboard graphs */}
        <motion.rect
          x="35"
          y="55"
          width="40"
          height="45"
          rx="4"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          whileHover={{ scale: 1.05 }}
        />
        <circle cx="55" cy="78" r="12" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="30 40" />

        {/* Bar charts */}
        <rect x="90" y="55" width="75" height="45" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <motion.rect x="100" y="80" width="8" height="15" rx="1.5" fill="rgba(255,255,255,0.2)" animate={{ scaleY: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "bottom" }} />
        <motion.rect x="112" y="70" width="8" height="25" rx="1.5" fill="rgba(255,255,255,0.4)" animate={{ scaleY: [1, 0.8, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "bottom" }} />
        <motion.rect x="124" y="75" width="8" height="20" rx="1.5" fill="rgba(255,255,255,0.2)" animate={{ scaleY: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "bottom" }} />
        <motion.rect x="136" y="65" width="8" height="30" rx="1.5" fill="rgba(255,255,255,0.3)" animate={{ scaleY: [1, 0.9, 1] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "bottom" }} />
      </svg>
    </div>
  );
}

function MobileAppVisual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      <svg className="w-full max-w-[160px] h-auto" viewBox="0 0 200 140" fill="none">
        {/* Smartphone Shell */}
        <rect x="65" y="10" width="70" height="120" rx="12" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="85" y1="16" x2="115" y2="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="100" cy="120" r="4.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* UI cards inside mobile screen */}
        <motion.rect
          x="73"
          y="28"
          width="54"
          height="22"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          animate={{ y: [28, 32, 28] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="73"
          y="56"
          width="54"
          height="22"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          animate={{ y: [56, 52, 56] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="73"
          y="84"
          width="54"
          height="22"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          animate={{ y: [84, 86, 84] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function AIAutomationVisual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      <svg className="w-full max-w-[160px] h-auto" viewBox="0 0 200 140" fill="none">
        {/* Node Network Map */}
        <line x1="40" y1="70" x2="90" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="40" y1="70" x2="90" y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="90" y1="40" x2="150" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="90" y1="100" x2="150" y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="90" y1="40" x2="150" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="90" y1="100" x2="150" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />

        {/* Input node */}
        <circle cx="40" cy="70" r="7" fill="#000" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <motion.circle cx="40" cy="70" r="3" fill="rgba(255,255,255,0.8)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />

        {/* Middle nodes */}
        <circle cx="90" cy="40" r="6" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        <circle cx="90" cy="100" r="6" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />

        {/* Output nodes */}
        <circle cx="150" cy="40" r="7" fill="#000" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <motion.circle cx="150" cy="40" r="3.5" fill="rgba(255,255,255,0.9)" animate={{ scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2.5, repeat: Infinity }} />

        <circle cx="150" cy="100" r="7" fill="#000" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <motion.circle cx="150" cy="100" r="3.5" fill="rgba(255,255,255,0.9)" animate={{ scale: [1.2, 0.8, 1.2] }} transition={{ duration: 2.5, repeat: Infinity }} />
      </svg>
    </div>
  );
}

function UIUXVisual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      <svg className="w-full max-w-[160px] h-auto" viewBox="0 0 200 140" fill="none">
        {/* Wireframe grids */}
        <rect x="25" y="20" width="150" height="100" rx="2" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="100" y1="20" x2="100" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
        <line x1="25" y1="70" x2="175" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />

        {/* Vector Pen shape creation */}
        <rect x="40" y="35" width="45" height="30" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
        <circle cx="40" cy="35" r="3" fill="rgba(255,255,255,0.9)" />
        <circle cx="85" cy="35" r="3" fill="rgba(255,255,255,0.9)" />
        <circle cx="85" cy="65" r="3" fill="rgba(255,255,255,0.9)" />
        <circle cx="40" cy="65" r="3" fill="rgba(255,255,255,0.9)" />

        {/* Floating cursor selection tool */}
        <motion.path
          d="M 115 80 L 130 90 L 123 93 L 132 103 L 128 106 L 119 96 L 115 101 Z"
          fill="rgba(255,255,255,0.9)"
          stroke="#000"
          strokeWidth="0.8"
          animate={{ x: [0, 15, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function CloudInfraVisual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      <svg className="w-full max-w-[160px] h-auto" viewBox="0 0 200 140" fill="none">
        {/* Storage server racks */}
        <rect x="60" y="25" width="80" height="24" rx="4" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <circle cx="75" cy="37" r="2.5" fill="rgba(255,255,255,0.7)" />
        <line x1="90" y1="37" x2="130" y2="37" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        <rect x="60" y="58" width="80" height="24" rx="4" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <circle cx="75" cy="70" r="2.5" fill="rgba(255,255,255,0.7)" />
        <line x1="90" y1="70" x2="130" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        <rect x="60" y="91" width="80" height="24" rx="4" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <circle cx="75" cy="103" r="2.5" fill="rgba(255,255,255,0.7)" />
        <line x1="90" y1="103" x2="130" y2="103" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Pulsing server status lights */}
        <motion.circle cx="130" cy="37" r="2" fill="#10b981" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="130" cy="70" r="2" fill="#10b981" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
        <motion.circle cx="130" cy="103" r="2" fill="#10b981" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }} />
      </svg>
    </div>
  );
}

/* ─── Vector SVGs for Industries We Serve (Replacing Emojis) ─── */

function AgricultureIcon() {
  return (
    <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M17 5H7M19 9H5M21 13H3M17 17H7M15 21H9" strokeLinecap="round" />
    </svg>
  );
}

function HospitalityIcon() {
  return (
    <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 22V2M21 22V10M12 18h.01M12 14h.01M16 18h.01M16 14h.01M8 18h.01M8 14h.01M12 10h.01M8 10h.01M16 10h.01" strokeLinecap="round" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HealthcareIcon() {
  return (
    <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogisticsIcon() {
  return (
    <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
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
    ],
    renderVisual: () => <CustomSoftwareVisual />
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
    ],
    renderVisual: () => <WebAppVisual />
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
    ],
    renderVisual: () => <MobileAppVisual />
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
    ],
    renderVisual: () => <AIAutomationVisual />
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
    ],
    renderVisual: () => <UIUXVisual />
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
    ],
    renderVisual: () => <CloudInfraVisual />
  }
];

const industries = [
  { name: "Agriculture", desc: "Digital solutions for farming and rice mill operations.", renderIcon: () => <AgricultureIcon /> },
  { name: "Hospitality", desc: "Booking, housekeeping, and reservation platforms.", renderIcon: () => <HospitalityIcon /> },
  { name: "Education", desc: "Learning systems and student progress portals.", renderIcon: () => <EducationIcon /> },
  { name: "Healthcare", desc: "Appointment and patient dashboard management.", renderIcon: () => <HealthcareIcon /> },
  { name: "Retail", desc: "Inventory, stock POS, and e-commerce platforms.", renderIcon: () => <RetailIcon /> },
  { name: "Logistics", desc: "Fleet booking, delivery, and tracking systems.", renderIcon: () => <LogisticsIcon /> }
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
  const [selectedSolutionId, setSelectedSolutionId] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const activeSolution = useMemo(() => {
    return solutionsList.find(s => s.id === selectedSolutionId) || null;
  }, [selectedSolutionId]);

  return (
    <div className="bg-black min-h-screen text-white select-none">
      <Nav />

      {/* 1. Hero Section */}
      <section className="perf-section relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="perf-glow pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/[0.02] blur-[120px]" />

        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.08] px-3.5 py-1.5 bg-white/[0.02]">
            <span className="text-[12.5px] font-semibold uppercase tracking-wider text-white/60 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Our Services
            </span>
          </div>

          <h1
            className="text-[clamp(32px,6vw,56px)] font-black tracking-[-0.04em] leading-[1.05] not-italic"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Software Solutions Built for Growth
          </h1>

          <p
            className="mt-4 text-[clamp(15px,2vw,19px)] text-white/50 font-medium leading-relaxed not-italic"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Nexzoa helps businesses automate operations, improve customer experiences, and scale through custom software, AI systems, and digital platforms.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@nexzoa.com"
              className="inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3.5 text-[14px] font-bold text-black hover:bg-white/90 transition-colors not-italic"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start a Project
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-[12px] border border-white/[0.1] bg-white/[0.02] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-white/[0.08] transition-colors not-italic"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* 2. Overview Banner */}
      <section className="perf-section py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-[14.5px] text-white/40 leading-relaxed font-medium not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          Every business faces different challenges. We design and build custom solutions tailored to your goals, workflows, and industry requirements.
        </p>
      </section>

      {/* 3. Core Solutions Bento Grid */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Core Solutions
          </h2>
          <p className="text-[13.5px] text-white/40 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Explore our service catalog. Click any solution to review examples and operational benefits in a focused preview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsList.map((sol) => (
            <div
              key={sol.id}
              onClick={() => setSelectedSolutionId(sol.id)}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0b0b0d] p-5 cursor-pointer transition-all duration-300 hover:border-white/20 flex flex-col justify-between overflow-hidden"
              style={{ background: "linear-gradient(145deg, rgba(14,14,16,1) 0%, rgba(8,8,10,1) 100%)" }}
            >
              {/* Highlight spotlight */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* SVG Visual */}
                <div className="mb-2">
                  {sol.renderVisual()}
                </div>

                <div className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-1 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Solution 0{sol.id}
                </div>

                <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight not-italic group-hover:text-white transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {sol.title}
                </h3>

                <p className="text-[12.5px] text-white/40 leading-relaxed font-medium not-italic mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {sol.shortDesc}
                </p>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[12px] font-bold text-white/50 group-hover:text-white transition-colors not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  View Details
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-white/40 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Centered Modal Lightbox Overlay */}
      <AnimatePresence>
        {selectedSolutionId !== null && activeSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolutionId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-[#0d0d0f] border border-white/[0.08] rounded-2xl p-6 sm:p-8 overflow-hidden z-10 shadow-2xl flex flex-col gap-5"
              style={{ background: "linear-gradient(145deg, rgba(14,14,16,1) 0%, rgba(8,8,10,1) 100%)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolutionId(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white/60">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* SVG Visual Header */}
              <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl py-2 flex items-center justify-center">
                {activeSolution.renderVisual()}
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-1 block not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Solution 0{activeSolution.id}
                </span>
                <h3 className="text-[20px] sm:text-[22px] font-black tracking-tight text-white mb-2.5 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {activeSolution.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/50 not-italic font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {activeSolution.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4.5 border-t border-white/[0.06] mb-2">
                {/* Examples */}
                <div>
                  <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-white/60 not-italic mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {activeSolution.examplesTitle}
                  </h4>
                  <ul className="space-y-1.5">
                    {activeSolution.examples.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[12px] text-white/40 not-italic font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-white/60 not-italic mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Operational Benefits
                  </h4>
                  <ul className="space-y-1.5">
                    {activeSolution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[12px] text-white/50 not-italic leading-snug font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-white/85 shrink-0 mt-0.5">
                          <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a
                  href="mailto:hello@nexzoa.com"
                  className="flex-1 inline-flex items-center justify-center rounded-[12px] bg-white py-3 text-[13px] font-bold text-black hover:bg-white/90 transition-colors not-italic"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Start Project Intake
                </a>
                <button
                  onClick={() => setSelectedSolutionId(null)}
                  className="flex-1 inline-flex items-center justify-center rounded-[12px] border border-white/[0.1] bg-white/[0.02] py-3 text-[13px] font-bold text-white hover:bg-white/[0.08] transition-colors not-italic"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Industries We Serve */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Industries We Serve
          </h2>
          <p className="text-[13.5px] text-white/40 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            We adapt our system engineering to match specific industry workflows and rules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl p-5 flex items-start gap-4"
              style={{ background: "linear-gradient(145deg, rgba(14,14,16,1) 0%, rgba(8,8,10,1) 100%)" }}
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                {ind.renderIcon()}
              </div>
              <div>
                <h3 className="text-[14.5px] font-bold text-white mb-1 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {ind.name}
                </h3>
                <p className="text-[12.5px] text-white/40 leading-relaxed font-medium not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Technologies Section */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Technologies We Use
          </h2>
          <p className="text-[13.5px] text-white/40 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Stable frameworks and tools selected for reliability, speed, and long-term support.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white/60 hover:text-white hover:border-white/20 transition-all cursor-default not-italic"
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
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            How We Work
          </h2>
          <p className="text-[13.5px] text-white/40 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            A transparent and step-by-step path from first discovery to production release.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {processSteps.map((proc) => (
            <div key={proc.step} className="bg-[#0c0c0e] border border-white/[0.06] rounded-2xl p-4.5 flex flex-col gap-3">
              <span className="text-[18px] font-black text-white/10 font-mono leading-none">{proc.step}</span>
              <div>
                <h4 className="text-[13px] font-bold text-white mb-1 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.name}</h4>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.desc}</p>
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
              <h3 className="text-[14px] font-bold text-white mb-1.5 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {w.title}
              </h3>
              <p className="text-[12.5px] text-white/40 leading-relaxed font-medium not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-[13.5px] text-white/40 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
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
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-[14px] not-italic"
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
                      className="px-5 pb-4.5 pt-0.5 text-[13px] leading-relaxed text-white/40 font-medium border-t border-white/[0.03] not-italic"
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
          <h2 className="text-[26px] sm:text-[34px] font-bold tracking-tight mb-4 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-[14.5px] text-white/45 mb-7 font-medium leading-relaxed not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Let&apos;s discuss your idea and create a solution tailored to your business.
          </p>
          <a
            href="mailto:hello@nexzoa.com"
            className="inline-flex items-center justify-center rounded-[12px] bg-white px-7 py-3.5 text-[14px] font-bold text-black hover:bg-white/90 transition-colors not-italic"
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
