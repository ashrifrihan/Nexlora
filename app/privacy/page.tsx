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
  title: "Privacy Policy - Nexzoa",
  description:
    "Nexzoa privacy policy. Learn how we handle client data, technical inquiries, and website privacy.",
  alternates: {
    canonical: siteUrl("/privacy"),
  },
};

export default function PrivacyPolicyPage() {
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
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-white/40">
            Last Updated: August 2025 · Effective Date: August 2024
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-white/70 font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              Nexzoa (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is an AI-native software engineering company headquartered in {BUSINESS_CITY}, {BUSINESS_COUNTRY}. We respect your privacy and are committed to protecting the information you share with us through our website ({SITE_URL}) and our client communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>We only collect information directly provided by you, including:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/80">
              <li>Contact details (name, email address, company name) submitted via our inquiry form.</li>
              <li>Project scope, technical specifications, and requirement notes sent during consultations.</li>
              <li>Technical website analytics (anonymized IP address, browser type, and page access timestamps) used strictly for performance optimization.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>We use collected data solely to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/80">
              <li>Respond to software development proposals and consultation requests.</li>
              <li>Deliver engineering services, execute master services agreements (MSAs), and provide ongoing support.</li>
              <li>Maintain website security, verify system uptime, and prevent abusive bot traffic.</li>
            </ul>
            <p>We never sell, rent, or trade client data to third-party advertisers or data brokers.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Data Security &amp; Retention</h2>
            <p>
              All data transmitted to Nexzoa is encrypted in transit using industry-standard TLS 1.3 encryption. We retain client consultation information only for the duration necessary to deliver services and fulfill contractual obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Third-Party Services</h2>
            <p>
              Our website is hosted on secure Vercel infrastructure. We do not load intrusive third-party tracking scripts, malware, or unverified ad networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data deletion, contact our engineering office at:
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs sm:text-sm text-white/90">
              <p className="font-semibold text-white">Nexzoa Engineering</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-400 hover:underline">{CONTACT_EMAIL}</a></p>
              <p>Location: {BUSINESS_CITY}, {BUSINESS_COUNTRY}</p>
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
