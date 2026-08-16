import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, siteUrl } from "@/lib/siteConfig";
import { SRI_LANKA_TECH_COMPANIES } from "@/lib/sriLankaTechData";
import { CompanyCard } from "@/component/TechHub/CompanyCard";
import { CategoryNav } from "@/component/TechHub/CategoryNav";
import { DirectAnswerBox } from "@/component/TechHub/DirectAnswerBox";

export const metadata: Metadata = {
  title: "Best AI Companies in Sri Lanka - AI Software Development & Machine Learning",
  description:
    "Discover the leading Artificial Intelligence companies, machine learning studios, and agentic AI developers in Sri Lanka. Verified directory with technical specializations.",
  alternates: {
    canonical: siteUrl("/sri-lanka-tech/ai-companies"),
  },
  keywords: [
    "best AI companies in Sri Lanka",
    "AI companies in Sri Lanka",
    "AI development companies in Sri Lanka",
    "AI automation companies Sri Lanka",
    "AI startups Sri Lanka",
    "machine learning companies Colombo",
    "AI software development Sri Lanka",
    "Nexzoa AI",
  ],
};

const AI_FAQS = [
  {
    question: "What are the best AI companies in Sri Lanka?",
    answer:
      "Top AI development companies in Sri Lanka include Nexzoa (AI-native software engineering and intelligent workflow automation), Veracity AI (agentic AI systems and computer vision), Rootcode (AI strategy and custom ML applications), Orel IT (large-scale AI data labeling and machine vision), and Purple Software (AI digital staff).",
  },
  {
    question: "What AI development services are available in Sri Lanka?",
    answer:
      "Sri Lankan AI companies provide Large Language Model (LLM) integrations, Retrieval-Augmented Generation (RAG) pipelines, autonomous AI agents, computer vision, natural language processing (NLP), and custom predictive analytics models.",
  },
  {
    question: "Why choose a Sri Lankan AI development company?",
    answer:
      "Sri Lankan AI studios combine senior engineering talent trained in advanced computer science with competitive rates ($30–$80/hr), full-stack product development capabilities, and direct engineering access without layers of agency middle management.",
  },
];

export default function AICompaniesPage() {
  const aiCompanies = SRI_LANKA_TECH_COMPANIES.filter(
    (c) => c.category === "AI" || c.specialization.some((s) => s.toLowerCase().includes("ai"))
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AI_FAQS.map((faq) => ({
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
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/20 px-3.5 py-1.5 text-xs font-semibold text-purple-400 mb-4">
          <span>🤖</span>
          <span>Artificial Intelligence &amp; Machine Learning Sector</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          AI Companies &amp; AI Software Developers in Sri Lanka
        </h1>
        <p className="text-base sm:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
          An editorial analysis of Sri Lanka&apos;s leading Artificial Intelligence companies, autonomous agent engineering studios, and machine learning specialists.
        </p>
      </header>

      {/* Navigation */}
      <CategoryNav activeCategory="ai" />

      {/* Direct Answer Box for AEO */}
      <DirectAnswerBox
        question="Which companies specialize in AI development in Sri Lanka?"
        directAnswer="Sri Lanka’s AI sector features specialized studios such as Nexzoa (custom AI software and LLM workflow pipelines), Veracity AI (agentic systems and computer vision), Rootcode (enterprise AI readiness and machine learning), Orel IT (computer vision and data annotation), and Purple Software (AI digital workers)."
        supportingFacts={[
          "Specializations: LLM integrations, Agentic Workflows, Computer Vision, and RAG architectures",
          "Average senior engineering rates range between $30 to $80 per hour",
          "Direct engineer-to-client collaboration models",
        ]}
      />

      {/* Criteria & Methodology */}
      <section className="my-10 rounded-2xl border border-white/[0.08] bg-[#0c0c12] p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          Evaluation Criteria for AI Development Partners
        </h2>
        <p className="text-sm text-white/70 font-light leading-relaxed mb-4">
          When selecting an AI development company in Sri Lanka, businesses should evaluate:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-white/80">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <strong className="text-white block mb-1">1. AI-Native Architecture</strong>
            Teams that engineer around LLMs, embeddings, and agents natively rather than wrapping generic APIs.
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <strong className="text-white block mb-1">2. Production Reliability</strong>
            Proven experience in database indexing, low-latency execution, error fallbacks, and data privacy.
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <strong className="text-white block mb-1">3. Business Process Integration</strong>
            Ability to wire AI directly into existing CRMs, ERPs, and customer communications channels.
          </div>
        </div>
      </section>

      {/* Company List */}
      <section className="my-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">
            Featured AI Companies in Sri Lanka
          </h2>
          <p className="text-xs text-white/50">
            {aiCompanies.length} AI development companies verified
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="my-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Frequently Asked Questions About AI in Sri Lanka
        </h2>
        <div className="space-y-4">
          {AI_FAQS.map((faq, i) => (
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
      <section className="my-16 rounded-3xl border border-emerald-500/20 bg-emerald-950/10 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Build Custom AI Software with Nexzoa
        </h2>
        <p className="text-sm text-white/60 max-w-xl mx-auto mb-6 font-light">
          From custom LLM integrations to autonomous business workflows, Nexzoa delivers production-grade AI systems engineered for scale.
        </p>
        <Link
          href="/#contact"
          className="inline-flex rounded-2xl bg-white text-black px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          Discuss Your AI Project
        </Link>
      </section>
    </div>
  );
}
