import Hero from "@/component/Hero";
import Nav from "@/component/nav";
import Services from "@/component/Services";

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <main className="relative bg-black">
        <Hero/>
        <Services />
      </main>
    </div>
  );
}
