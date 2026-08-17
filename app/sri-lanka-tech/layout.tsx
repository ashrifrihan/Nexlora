import React from "react";
import type { Metadata } from "next";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
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
    <div className="bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Main Content Body */}
      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent blur-[100px] -z-10" />
        {children}
      </main>

      <Footer />
    </div>
  );
}
