import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Nexlora - Build the System Behind Your Business",
    template: "%s | Nexlora",
  },
  description:
    "Nexlora builds custom software development solutions, AI automation workflows, and digital platforms for businesses — fast, scalable, and built to grow.",
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
    "nexlora software agency",
    "nexlora.io",
    "build system behind your business",
    // Competitor, variant, & misspelling search terms (for ranking #1)
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
    "oneflow crm",
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
    "nexloraa",
    "nexloera",
    "nexlorea",
    "nixlora",
    "nexloras",
    "nexlorai",
    "nexlore",
    "nexluara",
    "nextlora",
    "nexlura",
    "nexora ai",
    "necora solutions",
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
    "hire Nexlora",
    "Nexlora cost",
    "Nexlora vs competitors",
    "Nexlora case studies",
    "Nexlora clients",
    "Nexlora address",
    "Nexlora headquarters",
    "Nexlora official contact",
    "Nexlora consultation",
    "Nexlora quote",
    "Nexlora services",
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
  authors: [{ name: "Nexlora", url: "https://nexlora.io" }],
  creator: "Nexlora",
  publisher: "Nexlora",
  metadataBase: new URL("https://nexlora.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexlora.io",
    siteName: "Nexlora",
    title: "Nexlora — Build the System Behind Your Business",
    description:
      "Custom software development, AI automation workflows, and scalable digital platforms — designed to feel fast, clear, and built to grow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexlora — Build the System Behind Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexlora — Build the System Behind Your Business",
    description:
      "Custom software, AI workflows, and digital platforms for businesses — fast, scalable, built to grow.",
    images: ["/og-image.png"],
    creator: "@nexlora",
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
    icon: "/nexlora.jpg",
    shortcut: "/nexlora.jpg",
    apple: "/nexlora.jpg",
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
    name: "Nexlora",
    alternateName: [
      "Nexlora Software Agency",
      "Nexlora Solutions",
      "Nexlora Labs",
      "Nexlora Technologies",
      "Nexlora Ltd",
      "Nexlora Smart Web & AI Solutions",
      "Nexlora CRM & AI Solutions",
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
    url: "https://nexlora.io",
    logo: "https://nexlora.io/logo.png",
    foundingDate: "2024",
    description:
      "Nexlora builds custom software development solutions, AI automation workflows, and digital platforms for businesses — fast, scalable, and built to grow.",
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
      "https://twitter.com/nexlora",
      "https://linkedin.com/company/nexlora",
      "https://github.com/nexlora",
      "https://nexlorasolutions.com",
      "https://nexlora.in",
      "https://nexloralabs.com",
      "https://nexloratech.com",
      "https://instagram.com/nexloralabs",
      "https://facebook.com/nexloradigital"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@nexlora.io",
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
                    "name": "Nexlora",
                    "url": "https://nexlora.io"
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
                    "name": "Nexlora",
                    "url": "https://nexlora.io"
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
                    "name": "Nexlora",
                    "url": "https://nexlora.io"
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
                    "name": "Nexlora",
                    "url": "https://nexlora.io"
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
                    "name": "Nexlora",
                    "url": "https://nexlora.io"
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
                    "name": "Nexlora",
                    "url": "https://nexlora.io"
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
                      "name": "What services does Nexlora provide?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nexlora builds custom software solutions, realtime dashboard systems, AI workflows, cross-platform mobile apps, UI/UX designs, and workflow automation systems."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is Nexlora's average delivery timeline?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nexlora's average delivery cycle is 12 weeks, running through Discovery, Planning, Design, Development, Testing, and Launch phases."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does Nexlora ensure software reliability?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nexlora engineers fault-tolerant backend infrastructures, maintains 99.9% platform stability, and runs rigorous testing suites covering Unit, Integration, E2E, and performance benchmarks."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
