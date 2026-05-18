import Nav from "@/component/nav";
import Testimonials from "@/component/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Nexlora Software Engineering Agency",
  description: "Read real client reviews and feedback from startups and growing companies who scaled their products, websites, and cloud platforms with our custom enterprise software development.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <main className="relative bg-black pt-16 sm:pt-20">
        <Testimonials />
      </main>
    </div>
  );
}
