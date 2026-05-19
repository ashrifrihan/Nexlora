"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Nav from "@/component/nav";

/* ─── Social Media Icons ─── */
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactPage() {
  // Mouse hover coordinate tracking for radial shine
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [shakeField, setShakeField] = useState<string | null>(null);

  // InView hooks for sequential section fade-in triggers
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const formSecRef = useRef<HTMLDivElement>(null);
  const isFormSecInView = useInView(formSecRef, { once: true, margin: "-100px" });

  const ctaRef = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple robust validation shake effect
    if (!formData.name.trim()) {
      setShakeField("name");
      setTimeout(() => setShakeField(null), 500);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setShakeField("email");
      setTimeout(() => setShakeField(null), 500);
      return;
    }

    setIsSubmitting(true);

    // Simulate premium API pipeline submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form data
    setFormData({
      name: "",
      company: "",
      email: "",
      projectType: "",
      budget: "",
      details: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div ref={containerRef} className="bg-black min-h-screen text-white overflow-hidden selection:bg-white/20 relative">
      <Nav />

      {/* Floating mouse-follow background radial light glow aura */}
      <div 
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full bg-white/[0.012] blur-[140px] z-0 transition-all duration-300"
        style={{
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      />

      {/* Soft floating dynamic back glows */}
      <div className="pointer-events-none absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/[0.005] blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute bottom-[25%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/[0.005] blur-[160px] rounded-full" />

      {/* Animated Subtle Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.4))] opacity-70 z-10" />

      {/* ================================================
          SECTION 01 — HERO SECTION
          ================================================ */}
      <section 
        ref={heroRef}
        className="relative pt-36 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto z-20 flex flex-col items-center text-center"
      >
        {/* Animated grid line design */}
        <div className="absolute inset-x-0 top-0 h-[350px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Small Label Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3.5 py-1.5 bg-[#0d0d0d]/40 backdrop-blur-md"
        >
          <span className="text-[13px] font-semibold tracking-[0.05em] uppercase text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Contact Nexlora
          </span>
        </motion.div>

        {/* Main Heading Stagger Reveal */}
        <motion.h1 
          initial={{ opacity: 0, y: 22 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-[clamp(32px,6vw,64px)] font-black leading-[1.08] tracking-[-0.05em] text-white"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Let’s build something people{" "}
          <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/35 bg-clip-text text-transparent">
            actually want to use.
          </span>
        </motion.h1>

        {/* Description containing natural SEO keywords */}
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-[clamp(15px,2vw,19px)] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Whether you need a <span className="text-white/80 font-semibold">modern website</span>, advanced <span className="text-white/80 font-semibold">AI workflow</span> integration, real-time <span className="text-white/80 font-semibold">dashboard system</span>, or cross-platform <span className="text-white/80 font-semibold">mobile app</span>, Nexlora engineers high-performance, <span className="text-white/80 font-semibold">scalable digital products</span> tailored to scale.
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#intake"
            className="px-8 py-4 rounded-[12px] bg-white text-black font-bold text-[14px] hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 select-none shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Start a Project
          </a>
          <a
            href="https://cal.com/nexlora"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-[12px] bg-white/[0.04] border border-white/[0.08] hover:bg-white/10 hover:border-white/20 text-white font-bold text-[14px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 select-none"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Book a Call
          </a>
        </motion.div>

        {/* Mini Trust Row */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-4xl border-t border-white/[0.05] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center select-none"
        >
          {[
            { word: "Web Platforms", glow: "rgba(245,158,11,0.15)" },
            { word: "AI Systems", glow: "rgba(168,85,247,0.15)" },
            { word: "Mobile Apps", glow: "rgba(59,130,246,0.15)" },
            { word: "Dashboard Software", glow: "rgba(16,185,129,0.15)" }
          ].map((item, idx) => (
            <div key={idx} className="group relative flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/[0.02] transition-colors duration-300">
              <div 
                className="absolute inset-0 rounded-xl blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: item.glow }}
              />
              <span className="relative text-[14px] font-bold text-white/50 group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                {item.word}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================================================
          SECTION 02 — CONTACT FORM SECTION
          ================================================ */}
      <section 
        id="intake"
        ref={formSecRef}
        className="relative py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto z-20 border-t border-white/[0.04]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact info inspired by GridX visual layout */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -12 }}
                animate={isFormSecInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 self-start"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-white/60" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Project Intake
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={isFormSecInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.04em] text-white leading-tight"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Tell us about <br />
                <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/40 bg-clip-text text-transparent">your project.</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 12 }}
                animate={isFormSecInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14.5px] leading-[1.6] text-white/50 max-w-md mt-2"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Share your business goals, workflow problems, or product ideas. We’ll help map the right system for your needs.
              </motion.p>
            </div>

            {/* Glowing Cards GridX Style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isFormSecInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 mt-4"
            >
              {[
                { label: "Email", value: "hello@nexlora.io", href: "mailto:hello@nexlora.io" },
                { label: "Location", value: "Sri Lanka / Remote Worldwide" },
                { label: "Response Time", value: "Usually within 24 hours" }
              ].map((card, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#0b0b0d] p-5 flex items-start justify-between hover:bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300 select-none shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
                  style={{ background: "linear-gradient(135deg, rgba(16,16,20,1) 0%, rgba(8,8,12,1) 100%)" }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-white/30 group-hover:text-white/50 transition-colors duration-300" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {card.label}
                    </span>
                    {card.href ? (
                      <a href={card.href} className="text-[15px] font-semibold text-white/90 group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        {card.value}
                      </a>
                    ) : (
                      <span className="text-[15px] font-semibold text-white/90" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        {card.value}
                      </span>
                    )}
                  </div>
                  
                  {/* Decorative faint glow */}
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 group-hover:text-white/80 group-hover:bg-white/10 transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isFormSecInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 mt-2 select-none"
            >
              <span className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.06em] mr-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>Socials</span>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300">
                <XIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300">
                <LinkedinIcon />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Glassmorphism Intake Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isFormSecInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[24px] border border-white/[0.06] p-6 sm:p-8 lg:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.4)]"
              style={{ 
                background: "linear-gradient(145deg, rgba(20,20,25,0.7) 0%, rgba(10,10,14,0.7) 100%)",
                backdropFilter: "blur(20px)" 
              }}
            >
              {/* Top Accent Light Glow beam line */}
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Row 1: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className={`flex flex-col gap-2 relative ${shakeField === "name" ? "animate-bounce" : ""}`}>
                    <label 
                      className={`text-[11px] font-bold uppercase tracking-[0.06em] transition-colors duration-300 ${
                        focusedField === "name" ? "text-emerald-400" : "text-white/40"
                      }`}
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/20 focus:border-emerald-500/50 rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label 
                      className={`text-[11px] font-bold uppercase tracking-[0.06em] transition-colors duration-300 ${
                        focusedField === "company" ? "text-emerald-400" : "text-white/40"
                      }`}
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      name="company" 
                      placeholder="e.g. Nexlora Inc"
                      value={formData.company}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/20 focus:border-emerald-500/50 rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    />
                  </div>
                </div>

                {/* Row 2: Email Address */}
                <div className={`flex flex-col gap-2 relative ${shakeField === "email" ? "animate-bounce" : ""}`}>
                  <label 
                    className={`text-[11px] font-bold uppercase tracking-[0.06em] transition-colors duration-300 ${
                      focusedField === "email" ? "text-emerald-400" : "text-white/40"
                    }`}
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="e.g. hello@nexlora.io"
                    value={formData.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/20 focus:border-emerald-500/50 rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                {/* Row 3: Project Type Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 relative">
                    <label 
                      className={`text-[11px] font-bold uppercase tracking-[0.06em] transition-colors duration-300 ${
                        focusedField === "projectType" ? "text-emerald-400" : "text-white/40"
                      }`}
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Project Type *
                    </label>
                    <select 
                      name="projectType"
                      required
                      value={formData.projectType}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full bg-[#0c0c0e] border border-white/[0.08] hover:border-white/20 focus:border-emerald-500/50 rounded-[12px] px-4 py-3.5 text-[14px] text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      <option value="">Select an option...</option>
                      <option value="Website Development">Website Development</option>
                      <option value="AI Systems">AI Systems</option>
                      <option value="Dashboard Platform">Dashboard Platform</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Automation System">Automation System</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label 
                      className={`text-[11px] font-bold uppercase tracking-[0.06em] transition-colors duration-300 ${
                        focusedField === "budget" ? "text-emerald-400" : "text-white/40"
                      }`}
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      Budget Range
                    </label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full bg-[#0c0c0e] border border-white/[0.08] hover:border-white/20 focus:border-emerald-500/50 rounded-[12px] px-4 py-3.5 text-[14px] text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      <option value="">Select range...</option>
                      <option value="<$5k">&lt; $5,000</option>
                      <option value="$5k-$15k">$5,000 – $15,000</option>
                      <option value="$15k-$30k">$15,000 – $30,000</option>
                      <option value="$30k+">$30,000+</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Details Textarea */}
                <div className="flex flex-col gap-2 relative">
                  <label 
                    className={`text-[11px] font-bold uppercase tracking-[0.06em] transition-colors duration-300 ${
                      focusedField === "details" ? "text-emerald-400" : "text-white/40"
                    }`}
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    Project Details *
                  </label>
                  <textarea 
                    name="details" 
                    required
                    rows={4}
                    placeholder="Tell us about the systems, workflows, or objectives you want to target..."
                    value={formData.details}
                    onFocus={() => setFocusedField("details")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/20 focus:border-emerald-500/50 rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(16,185,129,0.08)] resize-none"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 rounded-[12px] bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800 text-black font-bold text-[14px] tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.99] select-none hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] cursor-pointer"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    "Send Project Request"
                  )}
                </button>

                {/* Submission Success Alert */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-[12px] bg-emerald-500/10 border border-emerald-500/20 px-4 py-3.5 text-center mt-2 flex items-center justify-center gap-2 select-none"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[13px] font-semibold text-emerald-400" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        Thank you! We have received your project details and will review them shortly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================================================
          SECTION 03 — FINAL CTA / FOOTER SECTION
          ================================================ */}
      <section 
        ref={ctaRef}
        className="relative py-28 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto z-20 border-t border-white/[0.04] overflow-hidden"
      >
        <div className="relative rounded-[24px] border border-white/[0.05] p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Subtle Ambient green-emerald aura glow within the card */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(16,185,129,0.035),transparent_70%)]" />

          {/* Small Label Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5"
          >
            <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-white/50" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Start Your Project
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-[clamp(26px,5vw,46px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Build software that moves <br />
            <span className="bg-gradient-to-r from-white/95 via-white/70 to-white/35 bg-clip-text text-transparent">
              your business forward.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-[clamp(14px,1.8vw,17px)] font-medium leading-[1.5] tracking-[-0.01em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            From <span className="text-white/80">websites and dashboards</span> to <span className="text-white/80">AI-powered business systems</span>, Nexlora creates modern, <span className="text-white/80">scalable platforms</span> and customized <span className="text-white/80">software systems</span> built for growth.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 select-none"
          >
            <a
              href="https://cal.com/nexlora"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-[12px] bg-white text-black font-bold text-[14px] hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Book a Call
            </a>
            <a
              href="mailto:hello@nexlora.io"
              className="w-full sm:w-auto px-8 py-4 rounded-[12px] bg-white/[0.04] border border-white/[0.08] hover:bg-white/10 hover:border-white/20 text-white font-bold text-[14px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              hello@nexlora.io
            </a>
          </motion.div>
        </div>

        {/* Footer Navigation & Legal Links */}
        <div className="mt-20 pt-12 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-6 select-none">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              nexlora<span className="text-white/40 font-bold">*</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {["Work", "Solutions", "Products", "Journal", "Careers", "About", "Contact"].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`} 
                className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-[12px] text-white/30" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            &copy; {new Date().getFullYear()} Nexlora. All rights reserved.
          </p>
        </div>
      </section>

    </div>
  );
}
