import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PerformanceProvider } from "@/component/PerformanceProvider";
import {
  SITE_URL,
  SITE_ORIGIN,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_SLOGAN,
  SITE_DESCRIPTION_SHORT,
  SITE_DESCRIPTION_LONG,
  BUSINESS_CITY,
  BUSINESS_REGION,
  BUSINESS_COUNTRY,
  BUSINESS_COUNTRY_CODE,
  CONTACT_EMAIL,
  SOCIAL_TWITTER,
  SOCIAL_LINKEDIN,
  SOCIAL_GITHUB,
  SOCIAL_INSTAGRAM,
  CORE_SERVICES,
  siteUrl,
} from "@/lib/siteConfig";
import { MAIN_FAQS } from "@/lib/faqData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - AI-Native Software Engineering, SaaS & Automation`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION_SHORT,
  keywords: [
    // Primary Intent
    "AI software development",
    "AI software engineering",
    "custom software development",
    "AI automation",
    "SaaS development",
    "AI SaaS engineering",
    "business automation",
    "workflow automation",
    "cloud software development",
    "custom web application development",
    "AI integrations",
    "enterprise software studio",
    // Geographic & Sri Lanka tech ecosystem
    "software company Sri Lanka",
    "AI company Sri Lanka",
    "AI development companies in Sri Lanka",
    "software development companies Colombo",
    "SaaS company Sri Lanka",
    "Sri Lankan startups",
    "technology companies in Sri Lanka",
    "custom software Sri Lanka",
    "software startups in Sri Lanka",
    "AI automation companies Sri Lanka",
    // Branded
    "Nexzoa",
    "Nexzoa AI",
    "Nexzoa software",
    "Nexzoa automation",
    "Nexzoa Sri Lanka",
    // Brand disambiguation
    "nexlora",
  ],
  authors: [{ name: "Nexzoa", url: siteUrl("/") }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: SITE_ORIGIN,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - AI-Native Software Engineering, SaaS & Automation`,
    description: SITE_DESCRIPTION_LONG,
    images: [
      {
        url: siteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - AI-Native Software Engineering, SaaS & Automation`,
    description: SITE_DESCRIPTION_SHORT,
    images: [siteUrl("/og-image.png")],
    creator: "@nexzoa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "45f91c4ac1c75df2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Nexlora"],
    url: SITE_URL,
    logo: siteUrl("/nexzoa.jpg"),
    image: siteUrl("/og-image.png"),
    foundingDate: "2024",
    description: SITE_DESCRIPTION_LONG,
    slogan: SITE_SLOGAN,
    serviceType: [...CORE_SERVICES],
    areaServed: [
      { "@type": "Country", name: "Sri Lanka" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "AdministrativeArea", name: "Worldwide" },
    ],
    knowsAbout: [
      "Artificial Intelligence Software",
      "Large Language Models",
      "AI Workflow Automation",
      "Software as a Service (SaaS)",
      "Full-Stack Web Development",
      "Next.js and React Engineering",
      "Cloud Infrastructure Architecture",
      "Sri Lankan Startup Ecosystem",
    ],
    sameAs: [
      SOCIAL_TWITTER,
      SOCIAL_LINKEDIN,
      SOCIAL_GITHUB,
      SOCIAL_INSTAGRAM,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Inquiries",
      email: CONTACT_EMAIL,
      availableLanguage: ["English", "Sinhala", "Tamil"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_CITY,
      addressRegion: BUSINESS_REGION,
      addressCountry: BUSINESS_COUNTRY_CODE,
    },
    priceRange: "$$",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION_SHORT,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/sri-lanka-tech?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-ai`,
        name: "AI Software Engineering",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Custom AI systems, LLM pipelines, autonomous agents, and RAG architectures tailored for business workflows.",
        serviceType: "Artificial Intelligence Development",
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-saas`,
        name: "Custom SaaS Development",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Full-stack multi-tenant SaaS platforms built for scale - from MVP validation to enterprise scale.",
        serviceType: "Software as a Service Development",
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-web`,
        name: "Web Application Engineering",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Modern high-performance web applications built with Next.js, TypeScript, and React for speed, SEO, and conversions.",
        serviceType: "Software Development",
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-automation`,
        name: "AI Workflow Automation",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Intelligent automation systems integrated into internal company operations to eliminate repetitive manual bottlenecks.",
        serviceType: "Workflow Automation",
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-dashboard`,
        name: "Dashboard & Analytics Systems",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Real-time operational business intelligence dashboards and metrics tracking for executive decision-making.",
        serviceType: "Business Intelligence Software",
        areaServed: "Worldwide",
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: MAIN_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <PerformanceProvider />
        {children}
      </body>
    </html>
  );
}
