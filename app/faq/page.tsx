import Nav from "@/component/nav";
import FAQ from "@/component/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Nexlora Custom Software Agency",
  description: "Everything you want to know about our custom software development process, enterprise applications, cross-platform mobile apps, website redesigns, and AI automation integrations.",
};

export default function FAQPage() {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <main className="relative bg-black pt-16 sm:pt-20">
        <FAQ />
      </main>
    </div>
  );
}
