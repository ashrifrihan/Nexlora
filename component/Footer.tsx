"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import AISummary from "@/component/AISummary";
import {
  SOCIAL_LINKEDIN,
  SOCIAL_GITHUB,
  SOCIAL_TWITTER,
} from "@/lib/siteConfig";

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
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative w-full bg-black border-t border-white/[0.04] pt-12 pb-10 overflow-hidden z-10">
      <div className="relative mx-auto w-full max-w-7xl px-4 z-10">
        
        {/* Links & Info Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Info and Social Links */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-1.5 select-none">
              <span className="text-[18px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                nexzoa<span className="text-white/40 font-bold">*</span>
              </span>
            </div>

            {/* Short SEO Optimized Text */}
            <p 
              className="text-[14px] leading-[1.65] text-white/50 max-w-md"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Nexzoa is an AI-native software engineering company based in Sri Lanka, engineering <span className="text-white/80 font-medium">custom SaaS platforms</span>, <span className="text-white/80 font-medium">AI automation systems</span>, and <span className="text-white/80 font-medium">cloud software</span> for businesses worldwide.
            </p>

            {/* AI Summary - compact inline buttons */}
            <AISummary />

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href={SOCIAL_TWITTER} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                aria-label="Follow Nexzoa on X"
              >
                <XIcon />
              </a>
              <a 
                href={SOCIAL_GITHUB} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                aria-label="Check Nexzoa on GitHub"
              >
                <GithubIcon />
              </a>
              <a 
                href={SOCIAL_LINKEDIN} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                aria-label="Connect with Nexzoa on LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Right Columns: Structured Navigation */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Services */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-white/40 tracking-wider uppercase select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/services" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/saudi-arabia" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Saudi Arabia
                  </Link>
                </li>
                <li>
                  <Link href="/services/dubai" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Dubai, UAE
                  </Link>
                </li>
                <li>
                  <Link href="/services/qatar" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Qatar
                  </Link>
                </li>
                <li>
                  <Link href="/services/mena" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    MENA Region
                  </Link>
                </li>
                <li>
                  <Link href="/services/global" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Global
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Sri Lanka Tech Ecosystem */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-white/40 tracking-wider uppercase select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Ecosystem
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/sri-lanka-tech" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Tech Hub Guide
                  </Link>
                </li>
                <li>
                  <Link href="/sri-lanka-tech/ai-companies" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    AI Companies
                  </Link>
                </li>
                <li>
                  <Link href="/sri-lanka-tech/software-companies" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Software Companies
                  </Link>
                </li>
                <li>
                  <Link href="/sri-lanka-tech/saas-companies" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    SaaS Companies
                  </Link>
                </li>
                <li>
                  <Link href="/sri-lanka-tech/startups" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Startups
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-white/40 tracking-wider uppercase select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/about" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Projects
                  </Link>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-white/40 tracking-wider uppercase select-none" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                Legal
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/privacy" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[14px] text-white/60 hover:text-white transition-colors duration-200" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-20 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <p className="text-[12px] text-white/30" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            &copy; {new Date().getFullYear()} Nexzoa. All rights reserved.
          </p>
          <p className="text-[12px] text-white/20" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Colombo, Sri Lanka
          </p>
        </div>

      </div>
    </footer>
  );
}