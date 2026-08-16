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
  title: "Nexzoa - AI-Native Software Engineering, SaaS & Automation",
  description:
    "Nexzoa delivers AI-native software, full-stack SaaS platforms, automation workflows, and scalable digital solutions for ambitious businesses.",
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
