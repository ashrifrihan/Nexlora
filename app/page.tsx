import Hero from "@/component/Hero";
import Nav from "@/component/nav";
import Trust from "@/component/Trust";
import Services from "@/component/Services";
import Projects from "@/component/Projects";
import Process from "@/component/Process";
import Testimonials from "@/component/Testimonials";
import FAQ from "@/component/Faq";

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
        <FAQ />
      </main>
    </div>
  );
}
