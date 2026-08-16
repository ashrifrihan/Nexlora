import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
  siteUrl,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service - Nexzoa",
  description:
    "Nexzoa terms of service governing software development services, website usage, and intellectual property.",
  alternates: {
    canonical: siteUrl("/terms"),
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-black tracking-tight text-white hover:text-white/80 transition-colors"
          >
            nexzoa<span className="text-white/40">*</span>
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Legal &amp; Agreements
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
            Terms of Service
          </h1>
          <p className="text-xs text-white/40">
            Last Updated: August 2025 · Effective Date: August 2024
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-white/70 font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing our website ({SITE_URL}) or contracting Nexzoa for software engineering, AI development, or digital consulting services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Scope of Services</h2>
            <p>
              Nexzoa provides bespoke software engineering, AI automation pipelines, SaaS application architecture, and related technical consulting. Detailed project deliverables, sprint schedules, milestones, and payment terms are specified in individual Statements of Work (SOW) executed between Nexzoa and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              Upon full settlement of project invoices, all custom software code, designs, and deliverables created specifically for the client transfer entirely to the client, unless otherwise agreed in writing. Nexzoa retains rights to pre-existing libraries, general architectural patterns, and studio boilerplate frameworks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Confidentiality &amp; Non-Disclosure</h2>
            <p>
              We maintain strict non-disclosure of all proprietary client business logic, trade secrets, data sets, and customer information received during the course of any engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
            <p>
              Nexzoa delivers software in accordance with professional engineering standards. In no event shall Nexzoa be liable for indirect, incidental, or consequential damages arising from the use of custom software beyond the total fees paid under the applicable Statement of Work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Inquiries &amp; Governance</h2>
            <p>
              These terms are governed by commercial law. For contractual inquiries, contact:
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs sm:text-sm text-white/90">
              <p className="font-semibold text-white">Nexzoa Engineering</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-400 hover:underline">{CONTACT_EMAIL}</a></p>
              <p>Headquarters: {BUSINESS_CITY}, {BUSINESS_COUNTRY}</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/[0.08] bg-[#07070a] py-8 px-4 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Nexzoa. All rights reserved.
      </footer>
    </div>
  );
}
