"use client";

import { useRef, useState, useEffect, MouseEvent, FormEvent } from "react";
import { motion, useInView } from "motion/react";
import { FaLinkedin, FaGithub, FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specs: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync state with local storage scope updates from Estimator
  useEffect(() => {
    const handleSpecUpdate = () => {
      const savedSpec = localStorage.getItem("nexzoa_project_spec");
      if (savedSpec) {
        setFormData(prev => ({ ...prev, specs: savedSpec }));
      }
    };
    window.addEventListener("nexzoa_spec_update", handleSpecUpdate);
    handleSpecUpdate(); // check immediately
    return () => {
      window.removeEventListener("nexzoa_spec_update", handleSpecUpdate);
    };
  }, []);

  // Spotlight coordinates for card
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    // Clear storage and state on success
    localStorage.removeItem("nexzoa_project_spec");
    setFormData({ name: "", email: "", specs: "", message: "" });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Ambient Backdrop Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.015] blur-[150px] rounded-full z-0" />

      <div className="mx-auto w-full max-w-7xl relative z-10">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
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
                  Get In Touch
                </span>
              </motion.div>

              <motion.h2
                id="contact-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Let's build something{" "}
                <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
                  amazing.
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Have a project or partnership in mind? Send us a message and our team will get back to you within 24 hours.
              </motion.p>
            </div>

            {/* Direct Channels */}
            <div className="pt-6 space-y-6 border-t border-white/[0.05]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white/40 shrink-0">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Direct Email
                  </p>
                  <a
                    href="mailto:hello@nexzoa.com"
                    className="text-[17px] font-bold text-white hover:text-white/70 transition-colors"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    hello@nexzoa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white/40 shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Location
                  </p>
                  <p className="text-[16px] font-semibold text-white/85" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Colombo, Sri Lanka
                  </p>
                  <p className="text-[12px] text-white/40 mt-0.5 font-light">
                    Serving partners globally
                  </p>
                </div>
              </div>
            </div>

            {/* Social Handles */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/company/nexzoa"
                target="_blank"
                rel="noreferrer"
                aria-label="Nexzoa LinkedIn"
                className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/nexzoa"
                target="_blank"
                rel="noreferrer"
                aria-label="Nexzoa GitHub"
                className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Simple Contact Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full group relative rounded-[28px] border border-white/[0.08] p-8 sm:p-12 transition-all duration-500 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
              style={{
                backgroundColor: "rgba(10, 10, 12, 0.94)",
                backdropFilter: "blur(20px)"
              }}
            >
              {/* Spotlight overlay */}
              <div
                className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.035), transparent 70%)`,
                }}
              />

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 flex flex-col items-center justify-center relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-6 shadow-lg relative">
                    <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-25" />
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-white">
                      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Message Received
                  </h3>
                  <p className="text-[14.5px] text-white/50 max-w-xs leading-relaxed font-light">
                    Thank you! Your message has been received. We will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-3 rounded-xl border border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20 transition-all text-[13px] font-semibold"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    Send another message
                </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[13px] font-semibold text-white/60 tracking-wide uppercase block" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/[0.01] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-[15px] placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all font-light"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[13px] font-semibold text-white/60 tracking-wide uppercase block" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white/[0.01] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-[15px] placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all font-light"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[13px] font-semibold text-white/60 tracking-wide uppercase block" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements or questions..."
                      className="w-full bg-white/[0.01] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-[15px] placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.03] transition-all resize-none font-light"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[54px] bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/90 active:scale-[0.99] transition-all disabled:opacity-50 text-[14.5px] shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >