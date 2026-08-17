import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/siteConfig";
import { SRI_LANKA_TECH_COMPANIES } from "@/lib/sriLankaTechData";
import { CompanyCard } from "@/component/TechHub/CompanyCard";
import { CategoryNav } from "@/component/TechHub/CategoryNav";
import { DirectAnswerBox } from "@/component/TechHub/DirectAnswerBox";

export const metadata: Metadata = {
  title: "SaaS Companies in Sri Lanka - Cloud Platforms & Multi-Tenant Software",
  description:
    "Explore Software-as-a-Service (SaaS) development companies and cloud platform builders in Sri Lanka. Build scalable multi-tenant SaaS with Sri Lankan engineers.",
  alternates: {
    canonical: siteUrl("/sri-lanka-tech/saas-companies"),
  },
  keywords: [
    "SaaS companies in Sri Lanka",
    "SaaS development Sri Lanka",
    "Sri Lankan SaaS startups",
    "cloud software companies Sri Lanka",
    "custom SaaS development",
    "multi tenant SaaS engineering",
  ],
};

const SAAS_FAQS = [
  {
    question: "Who develops SaaS products in Sri Lanka?",
    answer:
      "Companies developing custom SaaS platforms in Sri Lanka include Nexzoa (full-stack Next.js and AI SaaS platforms), 99x (SaaS product co-creation for Europe), Calcey (Silicon Valley SaaS apps), Rootcode (enterprise SaaS MVPs), and WSO2 (enterprise iPaaS and CIAM).",
  },
  {
    question: "What architecture is best for building a SaaS MVP?",
    answer:
      "Modern SaaS applications thrive on Next.js App Router for high-performance server-rendered frontends, TypeScript for end-to-end type safety, PostgreSQL with row-level security for multi-tenancy, and serverless edge deployments on Vercel or AWS.",
  },
  {
    question: "Can Sri Lankan teams build enterprise-grade multi-tenant systems?",
    answer:
      "Yes. Sri Lankan software engineers have extensive experience designing SOC2-compliant, GDPR-ready, and multi-tenant database partitioned architectures for international startups and mid-market enterprises.",
  },
];

export default function SaaSCompaniesPage() {
  const saasCompanies = SRI_LANKA_TECH_COMPANIES.filter(
    (c) =>
      c.category === "SaaS" ||
      c.specialization.some((s) => s.toLowerCase().includes("saas")) ||
      c.isNexzoa
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SAAS_FAQS.map((faq) => ({
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
        <span className="text-white/80 font-medium">SaaS Companies</span>
      </nav>

      {/* Header */}
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-white/80 mb-6 font-mono">
          <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="text-[11px] uppercase tracking-wider">SaaS &amp; Cloud Platform Engineering</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]" style={{ fontFamily: '"Satoshi", sans-serif' }}>
          SaaS Companies &amp; Cloud Platform Engineering in Sri Lanka
        </h1>
        <p className="text-base sm:text-xl text-white/60 max-w-3xl leading-relaxed font-light">
          A guide to Software-as-a-Service development, multi-tenant cloud platforms, and SaaS builders in Sri Lanka.
        </p>
      </header>

      {/* Navigation */}
      <CategoryNav activeCategory="saas" />

      {/* Direct Answer Box */}
      <DirectAnswerBox
        question="Which companies build and scale SaaS products in Sri Lanka?"
        directAnswer="Sri Lanka's SaaS development ecosystem includes product engineering studios like Nexzoa (specializing in AI-native SaaS and multi-tenant architectures), 99x (co-building European SaaS scaleups), Calcey (building VC-funded US platforms), and WSO2 (providing global integration and identity SaaS)."
        supportingFacts={[
          "Full-stack SaaS architectures using Next.js, TypeScript, PostgreSQL, and AWS/Vercel",
          "Automated billing (Stripe/Paddle), authentication, and role-based permissions",
          "Fast time-to-market: 6 to 12 weeks for production MVP launch",
        ]}
      />

      {/* Pillar Breakdown */}
      <section className="my-10 rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          SaaS Engineering Capabilities in Sri Lanka
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-white/70 font-light">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">Multi-Tenant Architecture</h3>
            <p>Database schema isolation, row-level security (RLS), and custom subdomain routing for B2B SaaS applications.</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">AI-Powered Features</h3>
            <p>Integrating vector databases, semantic search, and LLM generative tools directly into SaaS product workflows.</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-bold text-white mb-1">Billing &amp; Metering</h3>
            <p>Usage-based billing engines, subscription tiers, seat licensing, and invoice management integrations.</p>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="my-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">
            Featured SaaS Companies &amp; Studios
          </h2>
          <p className="text-xs text-white/50">
            {saasCompanies.length} verified SaaS development organizations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {saasCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="my-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Frequently Asked Questions About SaaS in Sri Lanka
        </h2>
        <div className="space-y-4">
          {SAAS_FAQS.map((faq, i) => (
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
          Launch Your SaaS Platform with Nexzoa
        </h2>
        <p className="text-sm text-white/60 max-w-xl mx-auto mb-6 font-light">
          We design, architect, and ship high-converting SaaS MVPs and full-scale web platforms on Next.js and cloud databases.
        </p>
        <Link
          href="/#contact"
          className="inline-flex rounded-2xl bg-white text-black px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          Build a SaaS Product
        </Link>
      </section>
    </div>
  );
}
