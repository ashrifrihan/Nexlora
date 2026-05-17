import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import BlurText from './ui/blur-text'
import LogoLoop from './ui/logo-loop'
import ShinyText from './ui/shiny-text'

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
        <div className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-colors duration-300">
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
        </div>

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
                  delay={50}
                  animateBy="words"
                  direction="top"
                  threshold={0.3}
                  stepDuration={0.25}
                  wrap={false}
                  className="whitespace-nowrap text-[clamp(30px,7.2vw,104px)] leading-[0.96] text-white text-center"
                />
              </div>
              <div className="whitespace-nowrap text-[clamp(30px,7.2vw,104px)] leading-[0.96] text-white text-center">
                your success
              </div>
            </div>
          </h1>
        </div>

        {/* Description */}
        <div className="w-full max-w-3xl mb-10 md:mb-12">
          <BlurText
            text="Nexlora builds custom software development solutions, AI automation workflows, and digital platforms for businesses fast, scalable, and built to grow."
            delay={30}
            animateBy="words"
            direction="top"
            threshold={0.3}
            stepDuration={0.25}
            className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed font-light"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-2xl"
            className="text-white dark:text-white px-6 py-3 md:px-10 md:py-4 font-semibold"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Explore Nexlora
          </HoverBorderGradient>
        </div>

        {/* Logos Section */}
        <div className="mt-10 md:mt-16 pt-12 md:pt-16 w-full">
          <p className="text-gray-500 text-xs md:text-sm font-semibold mb-8 uppercase tracking-widest">Trusted by leading companies</p>
          <LogoLoop
            logos={[
              {
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 50'%3E%3Crect fill='%23000' width='160' height='50'/%3E%3Ctext x='80' y='30' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle' font-family='Arial, sans-serif'%3ETECH%3C/text%3E%3C/svg%3E",
                alt: "Tech Corp",
                title: "Tech Corp",
              },
              {
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 50'%3E%3Crect fill='%23000' width='160' height='50'/%3E%3Ccircle cx='35' cy='25' r='12' fill='%23fff'/%3E%3Ctext x='95' y='30' font-size='22' font-weight='bold' fill='%23fff' font-family='Arial, sans-serif'%3ECLOUD%3C/text%3E%3C/svg%3E",
                alt: "Cloud Systems",
                title: "Cloud Systems",
              },
              {
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 50'%3E%3Crect fill='%23000' width='160' height='50'/%3E%3Crect x='20' y='20' width='10' height='10' fill='%23fff'/%3E%3Crect x='35' y='20' width='10' height='10' fill='%23fff'/%3E%3Crect x='50' y='20' width='10' height='10' fill='%23fff'/%3E%3Ctext x='105' y='30' font-size='20' font-weight='bold' fill='%23fff' font-family='Arial, sans-serif'%3EDATA%3C/text%3E%3C/svg%3E",
                alt: "DataFlow",
                title: "DataFlow",
              },
              {
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 50'%3E%3Crect fill='%23000' width='160' height='50'/%3E%3Cpolygon points='30,15 40,35 20,35' fill='%23fff'/%3E%3Ctext x='100' y='30' font-size='20' font-weight='bold' fill='%23fff' font-family='Arial, sans-serif'%3EINNO%3C/text%3E%3C/svg%3E",
                alt: "Innovate",
                title: "Innovate",
              },
              {
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 50'%3E%3Crect fill='%23000' width='160' height='50'/%3E%3Ccircle cx='30' cy='25' r='10' fill='none' stroke='%23fff' stroke-width='2'/%3E%3Cline x1='30' y1='15' x2='30' y2='35' stroke='%23fff' stroke-width='2'/%3E%3Cline x1='20' y1='25' x2='40' y2='25' stroke='%23fff' stroke-width='2'/%3E%3Ctext x='95' y='30' font-size='20' font-weight='bold' fill='%23fff' font-family='Arial, sans-serif'%3ENEXT%3C/text%3E%3C/svg%3E",
                alt: "NextGen",
                title: "NextGen",
              },
            ]}
            speed={80}
            direction="left"
            logoHeight={50}
            gap={80}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
