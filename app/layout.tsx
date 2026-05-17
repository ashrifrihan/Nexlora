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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
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
    url: "https://nexlora.io",
    logo: "https://nexlora.io/logo.png",
    description: "Custom software development, AI automation workflows, and digital platforms.",
    sameAs: [
      "https://twitter.com/nexlora",
      "https://linkedin.com/company/nexlora",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@nexlora.io",
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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
