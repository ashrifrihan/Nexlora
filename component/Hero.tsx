"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import BlurText from './ui/blur-text'
import LogoLoop from './ui/logo-loop'
import ShinyText from './ui/shiny-text'
import { motion } from 'motion/react'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiRedis,
  SiDocker
} from 'react-icons/si'

const techStack = [
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiNextdotjs className="w-5 h-5 text-white" />
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
    title: "Next.js",
    href: "https://nextjs.org"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiReact className="w-5 h-5 text-cyan-400 animate-[spin_20s_linear_infinite]" />
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
    title: "React",
    href: "https://react.dev"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiTypescript className="w-5 h-5 text-[#3178c6]" />
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
    title: "TypeScript",
    href: "https://www.typescriptlang.org"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiTailwindcss className="w-5 h-5 text-sky-400" />
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
    title: "Tailwind CSS",
    href: "https://tailwindcss.com"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiFramer className="w-5 h-5 text-pink-400" />
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
    title: "Framer Motion",
    href: "https://www.framer.com/motion/"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiNodedotjs className="w-5 h-5 text-green-500" />
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
    title: "Node.js",
    href: "https://nodejs.org"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiPython className="w-5 h-5 text-[#3776ab]" />
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
    title: "Python",
    href: "https://www.python.org"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiPostgresql className="w-5 h-5 text-indigo-400" />
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
    title: "PostgreSQL",
    href: "https://www.postgresql.org"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiRedis className="w-5 h-5 text-red-500" />
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
    title: "Redis",
    href: "https://redis.io"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 select-none group" style={{ fontFamily: '"Satoshi", sans-serif' }}>
        <SiDocker className="w-5 h-5 text-blue-400" />
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
    title: "Docker",
    href: "https://www.docker.com"
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
