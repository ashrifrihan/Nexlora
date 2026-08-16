import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/siteConfig";
import { SRI_LANKA_TECH_COMPANIES } from "@/lib/sriLankaTechData";
import { CompanyCard } from "@/component/TechHub/CompanyCard";
import { CategoryNav } from "@/component/TechHub/CategoryNav";
import { DirectAnswerBox } from "@/component/TechHub/DirectAnswerBox";

export const metadata: Metadata = {
  title: "Software Development Companies in Sri Lanka - Guide & Directory",
  description:
    "Explore top software development companies in Sri Lanka. From enterprise digital transformation to agile SaaS studios in Colombo.",
  alternates: {
    canonical: siteUrl("/sri-lanka-tech/software-companies"),
  },
  keywords: [
    "software companies in Sri Lanka",
    "software development companies Colombo",
    "custom software development Sri Lanka",
    "best software company in Sri Lanka",
    "software engineering Sri Lanka",
    "software startups in Sri Lanka",
    "web development companies Colombo",
  ],
};

const SOFTWARE_FAQS = [
  {
    question: "What are the top software companies in Sri Lanka?",
    answer:
      "Leading software companies in Sri Lanka include WSO2, Virtusa, 99x, Calcey Technologies, Rootcode, Sysco LABS, Fcode Labs, and Nexzoa. They specialize in custom software development, cloud systems, and SaaS platforms.",
  },
  {
    question: "How much does custom software development cost in Sri Lanka?",
    answer:
      "Software development costs in Sri Lanka typically range from $25 to $70 per hour for senior full-stack developers. Fixed-price MVP sprints usually range from $5,000 to $25,000 depending on platform scope and integrations.",
  },
  {
    question: "Why do global companies outsource software development to Sri Lanka?",
    answer:
      "Sri Lanka offers high English proficiency (top tier in South Asia), strong intellectual property protection, overlap with European and Asian time zones, and deep expertise in modern tech stacks like Next.js, React, Node.js, and Python.",
  },
];

export default function SoftwareCompaniesPage() {
  const softwareCompanies = SRI_LANKA_TECH_COMPANIES.filter(
    (c) =>
      c.category === "Software" ||
      c.category === "Enterprise" ||
      c.specialization.some((s) => s.toLowerCase().includes("software"))
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SOFTWARE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/20 px-3.5 py-1.5 text-xs font-semibold text-blue-400 mb-4">
          <span>💻</span>
          <span>Software Engineering &amp; Custom Development</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Software Development Companies in Sri Lanka
        </h1>
        <p className="text-base sm:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
          An overview of Sri Lanka&apos;s software development industry, top engineering consultancies, and custom software studios.
        </p>
      </header>

      {/* Navigation */}
      <CategoryNav activeCategory="software" />

      {/* Direct Answer Box */}
      <DirectAnswerBox
        question="Who are the leading software development companies in Colombo, Sri Lanka?"
        directAnswer="Sri Lanka’s software development sector includes enterprise solution providers like WSO2, Virtusa, and Sysco LABS; agile product studios such as 99x, Calcey, Rootcode, and Fcode Labs; and specialized custom software engineers like Nexzoa."
        supportingFacts={[
          "Over 100,000 active IT professionals supported by SLASSCOM standards",
          "Specializations in Next.js, React, Node.js, Python, PostgreSQL, and AWS",
          "Competitive rates: $25 to $70/hr for senior engineering talent",
        ]}
      />

      {/* Guide Section */}
      <section className="my-10 rounded-2xl border border-white/[0.08] bg-[#0c0c12] p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          How to Choose a Software Development Partner in Sri Lanka
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/70 font-light mt-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">1. Direct Engineering Access</h3>
            <p>Ensure you speak directly with lead architects rather than account executives to avoid miscommunication and scope bloat.</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">2. Agile 2-Week Sprints</h3>
            <p>Look for teams that ship testable, deployable software every 14 days rather than long waterfall delivery cycles.</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">3. Modern Codebases</h3>
            <p>Verify modern stack expertise (Next.js, TypeScript, Docker, Serverless) to ensure long-term maintainability.</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">4. Proven Production Security</h3>
            <p>Insist on robust authentication, role permissions, encryption, and automated CI/CD deployment pipelines.</p>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="my-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">
            Featured Software Companies
          </h2>
          <p className="text-xs text-white/50">
            {softwareCompanies.length} software engineering firms verified
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="my-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Frequently Asked Questions About Software Development in Sri Lanka
        </h2>
        <div className="space-y-4">
          {SOFTWARE_FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.08] bg-[#0d0d12] p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-white/60 font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="my-16 rounded-3xl border border-blue-500/20 bg-blue-950/10 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Need Custom Software Built Fast &amp; Clean?
        </h2>
        <p className="text-sm text-white/60 max-w-xl mx-auto mb-6 font-light">
          Nexzoa develops custom web apps, administrative portals, and backend APIs engineered for high reliability.
        </p>
        <Link
          href="/#contact"
          className="inline-flex rounded-2xl bg-white text-black px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          Start a Software Project
        </Link>
      </section>
    </div>
  );
}
