import Hero from "@/component/Hero";
import Nav from "@/component/nav";
import Trust from "@/component/Trust";
import Services from "@/component/Services";
import Process from "@/component/Process";

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <main className="relative bg-black">
        <Hero/>
        <Trust />
        <Services />
        <Process />
      </main>
    </div>
  );
}
