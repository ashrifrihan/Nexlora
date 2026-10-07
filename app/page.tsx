import type { Metadata, Viewport } from "next";
import Hero from "@/component/Hero";
import Nav from "@/component/nav";
import Trust from "@/component/Trust";
import Services from "@/component/Services";
import Projects from "@/component/Projects";
import Process from "@/component/Process";
import Testimonials from "@/component/Testimonials";
import FAQ from "@/component/Faq";
import Compare from "@/component/Compare";
import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import { SITE_URL } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Nexzoa | AI Software Development & SaaS Engineering",
  description:
    "Nexzoa is a software engineering studio in Sri Lanka specializing in custom software development, AI automation, SaaS platforms and scalable web applications.",
  keywords: [
    "Nexzoa",
    "Nexzoa dev",
    "Nexzoa Sri Lanka",
    "Nexzoa software development",
    "Nexzoa AI",
    "Nexzoa SaaS",
    "Nexzoa Colombo",
    "Nexzoa software company",
    "Nexzoa technologies",
    "Custom Software Development Company in Sri Lanka",
    "AI Software Development Company in Sri Lanka",
    "SaaS Development Company in Sri Lanka",
    "Web development company Sri Lanka",
    "Software engineering company Colombo",
    "Custom AI software development",
    "Business automation solutions",
    "AI workflow automation",
    "Enterprise software development",
    "Full-stack web development",
    "Startup MVP development",
    "Ashrif Rihan Nexzoa",
    "Izzath Noory Nexzoa",
  ],
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <main className="relative bg-black">
        <Hero/>
        <Trust />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Compare />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

