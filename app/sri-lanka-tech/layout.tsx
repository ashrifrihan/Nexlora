import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, siteUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME} Sri Lanka Tech Hub`,
    default: `Sri Lanka Technology Companies, AI & Startups Directory | ${SITE_NAME}`,
  },
  description:
    "Comprehensive guide and verified directory of software development companies, AI engineering studios, SaaS platforms, and technology startups in Sri Lanka.",
  alternates: {
    canonical: siteUrl("/sri-lanka-tech"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl("/sri-lanka-tech"),
    siteName: SITE_NAME,
    title: "Sri Lanka Tech Ecosystem & Directory | Nexzoa",
    description:
      "Explore verified Sri Lankan technology companies, AI studios, SaaS startups, and software engineering leaders.",
    images: [
      {
        url: siteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Sri Lanka Technology Hub - Nexzoa",
      },
    ],
  },
};

export default function SriLankaTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sri Lanka Technology Hub",
        item: `${SITE_URL}/sri-lanka-tech`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Top Navigation Bar for Tech Hub */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-lg font-black tracking-tight text-white hover:text-white/80 transition-colors"
            >
              nexzoa<span className="text-white/40">*</span>
            </Link>
            <span className="text-white/20">/</span>
            <Link
              href="/sri-lanka-tech"
              className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              Sri Lanka Tech Hub
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex rounded-xl bg-white text-black px-4 py-2 text-xs font-bold hover:bg-white/90 transition-colors"
            >
              Contact Nexzoa
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1">{children}</main>

      {/* Shared Footer for Tech Hub */}
      <footer className="border-t border-white/[0.08] bg-[#07070a] py-12 px-4 mt-20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div>
            <p className="font-semibold text-white/80 mb-1">
              Nexzoa Sri Lanka Technology Hub
            </p>
            <p>
              An independent, editorial directory and analysis of Sri Lanka&apos;s digital product and engineering ecosystem.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Main Site
            </Link>
            <Link href="/sri-lanka-tech/ai-companies" className="hover:text-white transition-colors">
              AI Companies
            </Link>
            <Link href="/sri-lanka-tech/software-companies" className="hover:text-white transition-colors">
              Software Companies
            </Link>
            <Link href="/sri-lanka-tech/saas-companies" className="hover:text-white transition-colors">
              SaaS Companies
            </Link>
            <Link href="/sri-lanka-tech/startups" className="hover:text-white transition-colors">
              Startups
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
