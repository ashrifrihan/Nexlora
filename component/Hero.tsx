"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import BlurText from './ui/blur-text'
import LogoLoop from './ui/logo-loop'
import ShinyText from './ui/shiny-text'
import { motion } from 'motion/react'

const techStack = [
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-white" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.52L69.142 54H54V126H65.045V69.72L135.253 159.638C140.244 153.254 145.109 146.126 149.508 138.15V157.52Z" fill="url(#nextjs-glow)"/>
          <rect x="115" y="54" width="11" height="72" fill="url(#nextjs-glow)"/>
          <defs>
            <linearGradient id="nextjs-glow" x1="109" y1="54" x2="144.5" y2="142" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <ShinyText
          text="Next.js"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "Next.js"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-cyan-400 animate-[spin_20s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
        <ShinyText
          text="React"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "React"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-[#3178c6]" viewBox="0 0 100 100" fill="currentColor">
          <rect width="100" height="100" fill="#3178c6" rx="15"/>
          <text x="65" y="85" fill="white" fontSize="48" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">TS</text>
        </svg>
        <ShinyText
          text="TypeScript"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "TypeScript"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
        <ShinyText
          text="Tailwind CSS"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "Tailwind CSS"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v12H12L0 0zm0 12h12l12 12H0V12z"/>
        </svg>
        <ShinyText
          text="Framer Motion"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "Framer Motion"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7.7v11.5L12 22l10-5.8V7.7L12 2zm-1 16.5l-6-3.5V9.3l6 3.5v5.7zm1-7.2L6 7.8l6-3.5 6 3.5-6 3.5zm7 5.7l-6 3.5v-5.7l6-3.5v5.7z"/>
        </svg>
        <ShinyText
          text="Node.js"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "Node.js"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-[#3776ab]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-1.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.3-3.2l-1.3 1.3-3-3 1.3-1.3 3 3z"/>
        </svg>
        <ShinyText
          text="Python"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "Python"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
        </svg>
        <ShinyText
          text="PostgreSQL"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "PostgreSQL"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9H8v2h8z"/>
        </svg>
        <ShinyText
          text="Redis"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "Redis"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.98 9.27h-8.4c-.7 0-1.28.58-1.28 1.28v3.4c0 .7.58 1.28 1.28 1.28h8.4c.7 0 1.28-.58 1.28-1.28v-3.4c0-.7-.58-1.28-1.28-1.28zm-9.15-5.1h1.7v1.7h-1.7zm3.4 0h1.7v1.7h-1.7zm3.4 0h1.7v1.7H11.6zm3.4 0h1.7v1.7h-1.7z"/>
        </svg>
        <ShinyText
          text="Docker"
          speed={3}
          color="rgba(255, 255, 255, 0.45)"
          shineColor="#ffffff"
          spread={80}
          direction="left"
          className="text-[13.5px] font-semibold tracking-tight"
        />
      </div>
    ),
    title: "Docker"
  }
];

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Ripple Effect - Desktop only */}
      
      {/* Background Spotlights - Subtle on mobile, full on desktop */}
      <div className="absolute inset-0 w-full">
        <Spotlight className="hidden md:block -top-96 -left-96 h-screen" fill='white' />
        <Spotlight className="hidden md:block -top-96 -right-48 h-screen" fill='white' />
        <Spotlight className="md:opacity-100 opacity-30 top-0 left-1/2 transform -translate-x-1/2 h-screen" fill='white' />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-8 text-center flex flex-col items-center pt-16 sm:pt-24 md:pt-40">
        {/* Badge with Glassy Effect */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-colors duration-300"
        >
          {/* Sparkle Icon with Shiny Effect */}
          <ShinyText
            text="✨"
            speed={3}
            color="#999999"
            shineColor="#ffffff"
            spread={100}
            direction="left"
            className="text-lg md:text-xl"
          />
          {/* Text with Shiny Effect */}
          <ShinyText
            text="Trusted by 50+ innovative companies"
            speed={3}
            color="#999999"
            shineColor="#ffffff"
            spread={100}
            direction="left"
            className="text-xs md:text-sm font-medium"
          />
        </motion.div>

        {/* Main Heading */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10 flex justify-center">
          <h1
            className="max-w-[1180px] px-2 text-center text-white"
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            <div className="flex flex-col items-center gap-0">
              <div className="w-full overflow-visible">
                <BlurText
                  text="Build the system behind"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  threshold={0.1}
                  stepDuration={0.2}
                  wrap={false}
                  className="whitespace-nowrap text-[clamp(30px,7.2vw,104px)] leading-[0.96] text-white text-center"
                />
              </div>
              <div className="w-full overflow-visible">
                <BlurText
                  text="your success"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  threshold={0.1}
                  stepDuration={0.2}
                  wrap={false}
                  className="whitespace-nowrap text-[clamp(30px,7.2vw,104px)] leading-[0.96] text-white text-center mt-1"
                  animationFrom={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
                />
              </div>
            </div>
          </h1>
        </div>

        {/* Description */}
        <div className="w-full max-w-3xl mb-10 md:mb-12">
          <BlurText
            text="Nexlora builds custom software development solutions, AI automation workflows, and digital platforms for businesses fast, scalable, and built to grow."
            delay={20}
            animateBy="words"
            direction="top"
            threshold={0.1}
            stepDuration={0.2}
            className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed font-light"
          />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <HoverBorderGradient
            containerClassName="rounded-2xl"
            className="text-white dark:text-white px-6 py-3 md:px-10 md:py-4 font-semibold"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Explore Nexlora
          </HoverBorderGradient>
        </motion.div>

        {/* Core Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-16 pt-12 md:pt-16 w-full"
        >
          <p className="text-gray-500 text-xs md:text-sm font-semibold mb-8 uppercase tracking-widest" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Technologies powering our custom software & platforms
          </p>
          <LogoLoop
            logos={techStack}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
