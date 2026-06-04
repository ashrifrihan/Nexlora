import React from "react";

export function GlobalSchema() {
  const offices = [
    { name: "Nexzoa USA", city: "New York", country: "USA", lat: "40.7128", lng: "-74.0060" },
    { name: "Nexzoa UK", city: "London", country: "UK", lat: "51.5074", lng: "-0.1278" },
    { name: "Nexzoa India", city: "Bangalore", country: "India", lat: "12.9716", lng: "77.5946" },
    { name: "Nexzoa UAE", city: "Dubai", country: "UAE", lat: "25.2048", lng: "55.2708" },
    { name: "Nexzoa Germany", city: "Berlin", country: "Germany", lat: "52.5200", lng: "13.4050" },
    { name: "Nexzoa Canada", city: "Toronto", country: "Canada", lat: "43.6532", lng: "-79.3832" },
    { name: "Nexzoa Australia", city: "Sydney", country: "Australia", lat: "-33.8688", lng: "151.2093" },
    { name: "Nexzoa Singapore", city: "Singapore", country: "Singapore", lat: "1.3521", lng: "103.8198" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Nexzoa",
    alternateName: ["Nexzoa Global", "Nexzoa International", "Nexzoa Worldwide"],
    url: "https://nexzoa.com",
    logo: "https://nexzoa.com/logo.png",
    description: "Nexzoa is a global AI-native software engineering company with offices in 50+ countries serving enterprises worldwide.",
    foundingDate: "2023",
    founder: { "@type": "Person", name: "Nexzoa Founder" },
    address: offices.map(office => ({
      "@type": "PostalAddress",
      addressCountry: office.country,
      addressLocality: office.city,
    })),
    location: offices.map(office => ({
      "@type": "Place",
      name: office.name,
      address: { "@type": "PostalAddress", addressCountry: office.country, addressLocality: office.city },
      geo: { "@type": "GeoCoordinates", latitude: office.lat, longitude: office.lng },
    })),
    sameAs: [
      "https://linkedin.com/company/nexzoa",
      "https://twitter.com/nexzoa",
      "https://instagram.com/nexzoa",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "global sales",
      availableLanguage: ["English", "Arabic", "German", "French", "Spanish", "Japanese", "Chinese", "Hindi"],
      url: "https://nexzoa.com/contact",
    },
    areaServed: offices.map(office => office.country),
    knowsAbout: ["Artificial Intelligence", "SaaS Development", "Automation", "Global Software Engineering"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
