import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/siteConfig";
import { SRI_LANKA_TECH_COMPANIES } from "@/lib/sriLankaTechData";
import { CompanyCard } from "@/component/TechHub/CompanyCard";
import { CategoryNav } from "@/component/TechHub/CategoryNav";
import { DirectAnswerBox } from "@/component/TechHub/DirectAnswerBox";
import { EcosystemStats } from "@/component/TechHub/EcosystemStats";

export const metadata: Metadata = {
  title: "Sri Lankan Startups & Technology Innovation Ecosystem - 2025 Guide",
  description:
    "Explore the Sri Lankan startup ecosystem, emerging technology ventures, startup incubators (ICTA Spiralation, Hatch, LAN), and high-growth digital companies.",
  alternates: {
    canonical: siteUrl("/sri-lanka-tech/startups"),
  },
  keywords: [
    "Sri Lankan startups",
    "technology startups in Sri Lanka",
    "startups in Colombo",
    "emerging startups in Sri Lanka",
    "Sri Lanka startup ecosystem",
    "Sri Lankan SaaS startups",
    "AI startups Sri Lanka",
  ],
};

const STARTUP_FAQS = [
  {
    question: "What is the Sri Lankan startup ecosystem?",
    answer:
      "The Sri Lankan startup ecosystem is a growing technology community of over 600 digital ventures supported by national initiatives (ICTA Spiralation, StartupSL), angel networks (Lankan Angel Network), and innovation hubs (Hatch, TRACE Expert City). Key focus verticals include FinTech, AI, Logistics, HealthTech, and AgriTech.",
  },
  {
    question: "What are some of Sri Lanka's most notable tech startup success stories?",
    answer:
      "Notable Sri Lankan tech success stories include PickMe (digital mobility and logistics listed on CSE), Roar Global (regional digital media tech network), WSO2 (global enterprise software powerhouse), and emerging AI studios like Nexzoa and Veracity AI.",
  },
  {
    question: "How can early-stage startups get technical development support?",
    answer:
      "Early-stage startups partner with specialized studios like Nexzoa for rapid MVP development, architectural advisory, and AI automation to validate product-market fit quickly without hiring bloated in-house teams prematurely.",
  },
];

export default function StartupsPage() {
  const startupCompanies = SRI_LANKA_TECH_COMPANIES.filter(
    (c) =>
      c.category === "Startup" ||
      c.category === "AI" ||
      c.isNexzoa
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: STARTUP_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/sri-lanka-tech" className="hover:text-white transition-colors">Sri Lanka Tech</Link>
        <span>/</span>
        <span className="text-white/80 font-medium">Startups</span>
      </nav>

      {/* Header */}
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-white/80 mb-6 font-mono">
          <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <span className="text-[11px] uppercase tracking-wider">Startup Ecosystem &amp; Emerging Ventures</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          Sri Lankan Startups &amp; Technology Innovation Ecosystem
        </h1>
        <p className="text-base sm:text-xl text-white/60 max-w-3xl leading-relaxed font-light">
          An overview of Sri Lanka&apos;s fast-growing startup community, accelerator programs, angel investor networks, and emerging tech founders.
        </p>
      </header>

      {/* Navigation */}
      <CategoryNav activeCategory="startups" />

      {/* Direct Answer Box */}
      <DirectAnswerBox
        question="How active is the technology startup ecosystem in Sri Lanka?"
        directAnswer="Sri Lanka's startup ecosystem hosts over 600 active technology ventures across FinTech, AI, Logistics, and SaaS. Supported by ICTA's Spiralation program, the Lankan Angel Network (LAN), Hatch, and TRACE Expert City, the ecosystem has experienced a 40% year-on-year increase in venture funding."
        supportingFacts={[
          "Ecosystem Value: Over $800M+ generated across digital initiatives",
          "Accelerators & Incubators: ICTA Spiralation, Hatch, Lankan Angel Network, TRACE",
          "Core sectors: FinTech, Artificial Intelligence, SaaS, AgriTech, and Digital Logistics",
        ]}
      />

      {/* Ecosystem Stats */}
      <EcosystemStats />

      {/* Startup Support Network Section */}
      <section className="my-10 rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Key Pillars Supporting Sri Lankan Tech Startups
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-white/70 font-light">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">ICTA &amp; StartupSL</h3>
            <p>Government initiatives providing seed funding grants (Spiralation), national startup registries, and policy frameworks for digital commerce.</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">Lankan Angel Network (LAN)</h3>
            <p>Sri Lanka&apos;s primary angel investment network providing pre-seed and seed stage capital, mentorship, and international market access.</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">Hatch &amp; TRACE Expert City</h3>
            <p>Innovation hubs fostering tech incubation, co-working, and R&amp;D partnerships between universities, founders, and global tech leaders.</p>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="my-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">
            Featured Startups &amp; Emerging Tech Companies
          </h2>
          <p className="text-xs text-white/50">
            {startupCompanies.length} verified startups &amp; product studios
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {startupCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="my-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Frequently Asked Questions About Sri Lankan Startups
        </h2>
        <div className="space-y-4">
          {STARTUP_FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-[20px] border border-white/[0.06] bg-[#0a0a0c]/90 p-6"
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
      <section className="my-16 rounded-3xl border border-white/[0.08] bg-[#0a0a0c]/90 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Are You a Startup Founder Building the Next Big Thing?
        </h2>
        <p className="text-sm text-white/60 max-w-xl mx-auto mb-6 font-light">
          Nexzoa works directly with early-stage and growth-stage startup founders to architect, design, and ship production software fast.
        </p>
        <Link
          href="/#contact"
          className="inline-flex rounded-2xl bg-white text-black px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          Partner with Nexzoa
        </Link>
      </section>
    </div>
  );
}
