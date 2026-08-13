"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'
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

/* ─── Sleek, minimal grayscale icons for the scroll strip ─── */
const techStack = [
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiNextdotjs className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "Next.js",
    href: "https://nextjs.org"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiReact className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "React",
    href: "https://react.dev"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiTypescript className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiTailwindcss className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiFramer className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "Framer Motion",
    href: "https://www.framer.com/motion/"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiNodedotjs className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "Node.js",
    href: "https://nodejs.org"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiPython className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "Python",
    href: "https://www.python.org"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiPostgresql className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "PostgreSQL",
    href: "https://www.postgresql.org"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiRedis className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "Redis",
    href: "https://redis.io"
  },
  {
    node: (
      <div className="flex items-center justify-center px-4 opacity-40 hover:opacity-90 transition-opacity duration-300 select-none">
        <SiDocker className="w-6.5 h-6.5 text-white" />
      </div>
    ),
    title: "Docker",
    href: "https://www.docker.com"
  }
];

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Spotlights */}
      <div className="absolute inset-0 w-full">
        <Spotlight className="hidden md:block -top-96 -left-96 h-screen" fill='white' />
        <Spotlight className="hidden md:block -top-96 -right-48 h-screen" fill='white' />
        <Spotlight className="md:opacity-100 opacity-30 top-0 left-1/2 transform -translate-x-1/2 h-screen" fill='white' />
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="w-full h-full opacity-[0.18]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-8 text-center flex flex-col items-center pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-14">
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
            text="Independent Software Studio based in Sri Lanka"
            speed={3}
            color="#999999"
            shineColor="#ffffff"
            spread={100}
            direction="left"
            className="text-xs md:text-sm font-medium"
          />
        </motion.div>
 
        <div className="w-full mb-6 sm:mb-8 md:mb-10 flex justify-center">
          <h1
            className="max-w-[1180px] px-2 text-center text-white"
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            <span className="sr-only">
              Nexzoa — Independent Software Engineering Studio building modern web, AI, and business systems. Based in Sri Lanka.
            </span>
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
            text="Nexzoa builds custom software development solutions, AI automation workflows, and digital platforms for businesses fast, scalable, and built to grow."
            delay={20}
            animateBy="words"
            direction="top"
            threshold={0.1}
            stepDuration={0.2}
            className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed font-light"
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto select-none"
        >
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="start-project-button flex items-center justify-center rounded-2xl px-8 py-4 text-[15px] md:text-[16px] font-semibold w-full sm:w-auto"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Start Your Project
          </a>
          <a
            href="#solutions"
            onClick={(e) => handleScroll(e, "solutions")}
            className="flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/10 hover:border-white/20 px-8 py-4 text-[15px] md:text-[16px] font-semibold text-white transition-colors duration-300 w-full sm:w-auto"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Core Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 md:mt-14 pt-4 w-full max-w-2xl"
        >
          <p className="text-white/20 text-[11px] md:text-xs font-semibold mb-6 uppercase tracking-[0.2em]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Technologies powering our custom software & platforms
          </p>
          <LogoLoop
            logos={techStack}
            speed={60}
            direction="left"
            logoHeight={36}
            gap={24}
            hoverSpeed={0}
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
