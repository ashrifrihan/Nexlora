import Nav from "@/component/nav";
import Projects from "@/component/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Software Portfolio | Nexlora Engineering",
  description: "Explore real-world software platforms, factory management dashboards, booking engines, AI assistants, and logistics trackers we have designed and built to scale enterprise operations.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <main className="relative bg-black pt-16 sm:pt-20">
        <Projects />
      </main>
    </div>
  );
}
