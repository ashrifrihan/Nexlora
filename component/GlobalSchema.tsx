import React from "react";
import {
  SITE_URL,
  SITE_NAME,
  SOCIAL_TWITTER,
  SOCIAL_LINKEDIN,
  SOCIAL_INSTAGRAM,
  siteUrl,
} from "@/lib/siteConfig";

export function GlobalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Nexzoa Global", "Nexzoa International"],
    url: SITE_URL,
    logo: siteUrl("/nexzoa.jpg"),
    description:
      "Nexzoa is a global AI-native software engineering company building custom SaaS platforms, AI automation workflows, and digital systems for businesses worldwide.",
    foundingDate: "2024",
    sameAs: [SOCIAL_LINKEDIN, SOCIAL_TWITTER, SOCIAL_INSTAGRAM],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: [
        "English",
        "Arabic",
        "German",
        "French",
        "Spanish",
        "Japanese",
        "Chinese",
        "Hindi",
      ],
      url: siteUrl("/"),
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Artificial Intelligence",
      "SaaS Development",
      "Automation",
      "Custom Software Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
