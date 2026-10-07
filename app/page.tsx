import type { Metadata, Viewport } from "next";
import Hero from "@/component/Hero";
import Nav from "@/component/nav";
import Trust from "@/component/Trust";
import Products from "@/component/Products";
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
  title: "Nexzoa | AI Software Technology & SaaS Products",
  description:
    "Nexzoa is an AI software technology company based in Colombo, Sri Lanka, building proprietary SaaS products and intelligent software systems for modern businesses.",
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
        <Products />
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

