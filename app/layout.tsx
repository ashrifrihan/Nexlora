import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PerformanceProvider } from "@/component/PerformanceProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexzoa - Build the System Behind Your Business",
    template: "%s | Nexzoa",
  },
  description:
    "Nexzoa builds custom software development solutions, AI automation workflows, and digital platforms for businesses — fast, scalable, and built to grow.",
  keywords: [
    // Easy / broad terms
    "software company",
    "web development",
    "app development",
    "digital agency",
    "software development",
    "custom software",
    "AI automation",
    "digital transformation",
    "business software",
    "software solutions",
    // Medium terms
    "custom software development company",
    "AI workflow automation",
    "operational software platform",
    "digital platform development",
    "enterprise software solutions",
    "scalable web applications",
    "software agency for startups",
    "business automation tools",
    "SaaS development company",
    "MVP development agency",
    // Hard / specific terms
    "custom AI-powered business software",
    "end-to-end digital platform development",
    "operational software for growing companies",
    "AI automation for enterprise workflows",
    "nexzoa software agency",
    "nexzoa.io",
    "build system behind your business",
    // Brand (Nexzoa) & Misspellings
    "nexzoa",
    "nexzoa solutions",
    "nexzoa labs",
    "nexzoa technologies",
    "nexzoa ltd",
    "nexzoa.io",
    "nexzoa.in",
    "nexzoasolutions.com",
    "nexzoalabs.com",
    "nexzoatech.com",
    "nexzoa software engineering",
    "nexzoa crm",
    "oneflow crm",
    "fixly app nexzoa",
    "unsaid app nexzoa",
    "crypto church nexzoa",
    "power bi dashboards nexzoa",
    "nexzoa ai solutions",
    "nexzoa digital product agency",
    "nexzoa smart web",
    "nexzoa team",
    "nexzoa founders",
    "nexzoa portfolio",
    "nexzoa reviews",
    "nexzoa pricing",
    "nexzoa official",
    "nexzoa login",
    "nexzoa vs nexlora",
    "nexzo",
    "nexza",
    "nezzoa",
    "nexzora",
    "nexoa",
    "naxzoa",
    "nixzoa",
    "nexzoaa",
    "nexzoas",
    "nexzoai",
    "nexzora solutions",
    "nexzora ai",
    "nexzora.in",
    "nezoza",
    "nexzova",
    "nexzoia",
    "AI software development",
    "SaaS platform development",
    "AI automation agency",
    "custom software company",
    "Next.js development company",
    "intelligent systems",
    "AI CRM solutions",
    "business automation",
    "Power BI dashboards",
    // Old Brand (Nexlora) & Misspellings for seamless transition
    "nexlora",
    "nexlora solutions",
    "nexlora labs",
    "nexloratech.com",
    "nexlora technologies",
    "nexlora ltd",
    "nexlora.in",
    "nexlorasolutions.com",
    "nexloralabs.com",
    "nexlora software engineering",
    "nexlora crm",
    "fixly app nexlora",
    "unsaid app nexlora",
    "crypto church nexlora",
    "power bi dashboards nexlora",
    "nexlora ai solutions",
    "nexlora digital product agency",
    "nexlora smart web",
    "nexora",
    "necora",
    "neclora",
    "nexolra",
    "nexlorra",
    "nexlroa",
    "nexloira",
    "nexlpra",
    "nexl0ra",
    "nexloera",
    "nexlorea",
    "nixlora",
    "nexlore",
    "nexluara",
    "nextlora",
    "nexlura",
    "nexloar",
    "nekslora",
    "nexloora",
    "nxlora",
    "nexlra",
    "nexolora",
    "naxlora",
    "nexlora team",
    "nexlora founders",
    "nexlora portfolio",
    "nexlora reviews",
    "nexlora pricing",
    "nexlora official",
    "nexlora login",
    "best AI software development company",
    "top SaaS development agency",
    "enterprise automation solutions",
    "intelligent systems engineering",
    "custom CRM development",
    "AI workflow automation",
    "full stack development",
    "digital transformation agency",
    "scalable software architecture",
    "Next.js experts",
    "AI native application development",
    "hire Nexzoa",
    "Nexzoa cost",
    "Nexzoa vs competitors",
    "Nexzoa case studies",
    "Nexzoa clients",
    "Nexzoa address",
    "Nexzoa headquarters",
    "Nexzoa official contact",
    "Nexzoa consultation",
    "Nexzoa quote",
    "Nexzoa services",
    "Power BI dashboard development",
    "business intelligence solutions",
    "data dashboard agency",
    "software company Sri Lanka",
    "AI company Sri Lanka",
    "web development company Colombo",
    "IT company Colombo",
    "SaaS company Sri Lanka",
    "app development Sri Lanka",
    "automation company Sri Lanka",
    "digital agency Sri Lanka",
  ],
  authors: [{ name: "Nexzoa Global Team", url: "https://nexzoa.in/about" }],
  creator: "Nexzoa",
  publisher: "Nexzoa",
  metadataBase: new URL("https://nexzoa.in"),
  alternates: {
    canonical: "https://nexzoa.in",
    languages: {
      "en-US": "https://nexzoa.in/en-us",
      "en-GB": "https://nexzoa.in/en-gb",
      "en-IN": "https://nexzoa.in/en-in",
      "en-AU": "https://nexzoa.in/en-au",
      "en-CA": "https://nexzoa.in/en-ca",
      "ar-AE": "https://nexzoa.in/ar-ae",
      "de-DE": "https://nexzoa.in/de-de",
      "fr-FR": "https://nexzoa.in/fr-fr",
      "es-ES": "https://nexzoa.in/es-es",
      "ja-JP": "https://nexzoa.in/ja-jp",
      "zh-CN": "https://nexzoa.in/zh-cn",
      "hi-IN": "https://nexzoa.in/hi-in",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nexzoa.in",
    siteName: "Nexzoa",
    title: "Nexzoa — Build the System Behind Your Business",
    description:
      "Custom software development, AI automation workflows, and scalable digital platforms — designed to feel fast, clear, and built to grow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexzoa — Build the System Behind Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexzoa — Build the System Behind Your Business",
    description:
      "Custom software, AI workflows, and digital platforms for businesses — fast, scalable, built to grow.",
    images: ["/og-image.png"],
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
    icon: "/nexzoa.jpg",
    shortcut: "/nexzoa.jpg",
    apple: "/nexzoa.jpg",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexzoa",
    alternateName: [
      "Nexzo",
      "Nexoza",
      "Nexzoa AI",
      "Nexzoa Software Agency",
      "Nexzoa Solutions",
      "Nexzoa Labs",
      "Nexzoa Technologies",
      "Nexzoa Ltd",
      "Nexzoa Smart Web & AI Solutions",
      "Nexzoa CRM & AI Solutions",
      "Nexlora",
      "Nexlora Software Agency",
      "Nexlora Solutions",
      "Nexlora Labs",
      "Nexlora Technologies",
      "Nexlora Ltd",
      "Nexora",
      "Necora",
      "Neclora",
      "Nexolra",
      "Nexlorra",
      "Nextlora",
      "Nexolora",
      "Nxlora",
      "Nexlra",
      "Naxlora"
    ],
    url: "https://nexzoa.in",
    logo: "https://nexzoa.in/logo.png",
    foundingDate: "2024",
    description:
      "Nexzoa builds custom software development solutions, AI automation workflows, and digital platforms for businesses — fast, scalable, and built to grow.",
    slogan: "Build the system behind your business.",
    serviceType: [
      "Custom Software Development",
      "AI Automation",
      "Digital Platform Development",
      "SaaS Development",
      "Workflow Automation",
      "Custom CRM Development",
      "Power BI Dashboards"
    ],
    areaServed: "Worldwide",
    sameAs: [
      "https://twitter.com/nexzoa",
      "https://linkedin.com/company/nexzoa",
      "https://github.com/nexzoa",
      "https://nexzoasolutions.com",
      "https://nexzoa.in",
      "https://nexzoalabs.com",
      "https://nexzoatech.com",
      "https://instagram.com/nexzoalabs",
      "https://facebook.com/nexzoadigital",
      "https://nexlora.io",
      "https://nexlora.in",
      "https://nexloralabs.com",
      "https://nexloratech.com"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@nexzoa.in",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "name": "Web Development",
                  "provider": {
                    "@type": "Organization",
                    "name": "Nexzoa",
                    "url": "https://nexzoa.in"
                  },
                  "description": "Modern responsive websites built for performance, SEO, and conversion from landing pages to full-stack platforms.",
                  "serviceType": "Software Development",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "Service",
                  "name": "Dashboard Systems",
                  "provider": {
                    "@type": "Organization",
                    "name": "Nexzoa",
                    "url": "https://nexzoa.in"
                  },
                  "description": "Realtime operational dashboards for business workflows, analytics, and data-driven decision making.",
                  "serviceType": "Business Intelligence Software",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "Service",
                  "name": "AI Workflows",
                  "provider": {
                    "@type": "Organization",
                    "name": "Nexzoa",
                    "url": "https://nexzoa.in"
                  },
                  "description": "AI-powered automation systems connected to real business operations smarter pipelines, fewer bottlenecks.",
                  "serviceType": "Artificial Intelligence Integration",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "Service",
                  "name": "Mobile Apps",
                  "provider": {
                    "@type": "Organization",
                    "name": "Nexzoa",
                    "url": "https://nexzoa.in"
                  },
                  "description": "Fast mobile experiences for customers, teams, and field operations built cross-platform, shipped fast.",
                  "serviceType": "Mobile Application Development",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "Service",
                  "name": "UI/UX Design",
                  "provider": {
                    "@type": "Organization",
                    "name": "Nexzoa",
                    "url": "https://nexzoa.in"
                  },
                  "description": "Clean interfaces designed for usability, clarity, and scale research-driven design that users love.",
                  "serviceType": "User Interface & Experience Design",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "Service",
                  "name": "Automation Systems",
                  "provider": {
                    "@type": "Organization",
                    "name": "Nexzoa",
                    "url": "https://nexzoa.in"
                  },
                  "description": "Internal tools and automated workflows for repetitive processes reduce manual work, scale faster.",
                  "serviceType": "Workflow Automation Development",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What services does Nexzoa provide?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nexzoa builds custom software solutions, realtime dashboard systems, AI workflows, cross-platform mobile apps, UI/UX designs, and workflow automation systems."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is Nexzoa's average delivery timeline?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nexzoa's average delivery cycle is 12 weeks, running through Discovery, Planning, Design, Development, Testing, and Launch phases."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does Nexzoa ensure software reliability?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nexzoa engineers fault-tolerant backend infrastructures, maintains 99.9% platform stability, and runs rigorous testing suites covering Unit, Integration, E2E, and performance benchmarks."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Nexzoa related to Nexon or Tata Nexon?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Nexzoa is an independent, premium custom software development and AI automation solutions firm. We are not affiliated, associated, or in any way officially connected with Nexon Co., Ltd. (the video game developer and publisher) or Tata Motors (the manufacturer of Tata Nexon cars). We design and build bespoke SaaS platforms, custom CRM systems, and AI workflows for modern business operations."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <PerformanceProvider />
        {children}
      </body>
    </html>
  );
}
