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
    // Middle East & GCC Target Markets
    "software development company Saudi Arabia",
    "software development Dubai",
    "software development Qatar",
    "AI software engineering MENA",
    "SaaS development Saudi Arabia",
    "custom software Saudi Arabia",
    "software startup Dubai",
    "best software company UAE",
    "AI automation Saudi Arabia",
    "tech company Dubai",
    "software development company for startups",
    "AI development agency MENA",
    "SaaS platform development Dubai",
    "business automation software Riyadh",
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
    languages: {
      "en": SITE_URL,
      "en-SA": `${SITE_URL}/services/saudi-arabia`,
      "en-AE": `${SITE_URL}/services/dubai`,
      "en-QA": `${SITE_URL}/services/qatar`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_SA", "ar_SA", "ar_AE", "ar_QA"],
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
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Sri Lanka" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Germany" },
      { "@type": "AdministrativeArea", name: "MENA" },
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
      "Vision 2030 Digital Systems",
      "ZATCA E-Invoicing Integration",
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
      availableLanguage: ["English", "Arabic", "Sinhala", "Tamil"],
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
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/sri-lanka-tech?q={search_term_string}`,
      },
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

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/#process`,
    name: "How Nexzoa Builds Your Custom Software System",
    description: "Nexzoa's structured software development lifecycle from initial architectural discovery to global production launch.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Discovery & Technical Blueprint",
        text: "We define core user flows, specify API contracts, model PostgreSQL database schemas, and establish system architecture.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Design & Prototyping",
        text: "We create interactive Figma prototypes, component design systems, and responsive layouts tailored for high conversion.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Engineering & Development Sprints",
        text: "Full-stack development across frontend, backend, AI models, and databases in bi-weekly agile iterations.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Testing, QA & Performance Optimization",
        text: "Rigorous automated testing, security reviews, sub-100ms TTFB tuning, and cross-browser quality assurance.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Production Launch & Continuous CI/CD",
        text: "Deployment to global edge networks with automated monitoring, uptime alerts, and zero-downtime releases.",
      },
    ],
  };

  const speakableLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Nexzoa - AI-Native Software Engineering Studio",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#about", ".hero-title", ".hero-description", "#faq"],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <PerformanceProvider />
        {children}
      </body>
    </html>
  );
}

