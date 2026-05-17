import Hero from "@/component/Hero";
import Nav from "@/component/nav";

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <main className="relative bg-black">
        <Hero/>
      </main>
    </div>
  );
}
