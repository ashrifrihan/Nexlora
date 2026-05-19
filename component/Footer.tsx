"use client";

import { motion } from "motion/react";

/* ─── Social Media Icons ─── */
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/[0.04] pt-24 pb-12 overflow-hidden z-10">
      {/* Soft silver glow behind the large typography */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.005] blur-[130px] rounded-full" />

      <div className="relative mx-auto w-full max-w-7xl px-4 z-10">
        
        {/* Giant Resend-Style 3D Metallic/Reflective Outline Branding Typography */}
        <div className="relative w-full overflow-hidden flex justify-center mb-20 select-none border-b border-white/[0.03]">
          <h2 
            className="text-[clamp(64px,17.5vw,230px)] font-black tracking-[-0.05em] leading-none text-center bg-gradient-to-b from-white/[0.1] via-white/[0.02] to-transparent bg-clip-text text-transparent transition-all duration-700"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            nexlora
          </h2>
        </div>

        {/* Links & Info Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Info, Pulse Status Badge, and Social Links */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-1.5 select-none">
              <span className="text-[18px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                nexlora<span className="text-white/40">*</span>
              </span>
            </div>

            {/* Short SEO Optimized Text */}
            <p 
              className="text-[14px] leading-[1.65] text-white/50 max-w-md"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Nexlora builds <span className="text-white/80 font-medium">websites</span>, <span className="text-white/80 font-medium">AI systems</span>, <span className="text-white/80 font-medium">dashboard platforms</span>, <span className="text-white/80 font-medium">mobile apps</span>, and <span className="text-white/80 font-medium">custom software</span> for modern businesses.
            </p>

            {/* Pulsing Systems normal badge */}
            <div className="flex items-center">
              <div 
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 select-none"
                style={{ backdropFilter: "blur(5px)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[12px] font-semibold text-emerald-400" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  All systems operational
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                aria-label="Follow Nexlora on X"
              >
                <XIcon />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                aria-label="Check Nexlora on GitHub"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                aria-label="Connect with Nexlora on LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Right Columns: Structured Navigation */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Solutions (SEO keywords) */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-white/40 tracking-wider uppercase select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Solutions
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#Solutions" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    AI systems
                  </a>
                </li>
                <li>
                  <a href="#Solutions" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Dashboard platforms
                  </a>
                </li>
                <li>
                  <a href="#Solutions" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Mobile apps
                  </a>
                </li>
                <li>
                  <a href="#Solutions" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Custom software
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-white/40 tracking-wider uppercase select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Navigation
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#Work" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#Solutions" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#Products" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#Careers" className="group text-[14px] text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Careers
                    <span className="text-[9px] font-bold tracking-tight text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full select-none scale-90 group-hover:scale-95 transition-transform duration-200">
                      Hiring
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: About & Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-white/40 tracking-wider uppercase select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#About" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#Contact" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-20 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <p className="text-[12px] text-white/30" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            &copy; {new Date().getFullYear()} Nexlora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#Privacy" className="text-[12px] text-white/30 hover:text-white/50 transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Privacy Policy
            </a>
            <a href="#Terms" className="text-[12px] text-white/30 hover:text-white/50 transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
