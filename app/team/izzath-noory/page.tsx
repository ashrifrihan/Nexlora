import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";
import { getTeamMember } from "@/lib/teamData";

const member = getTeamMember("izzath-noory")!;

export const metadata: Metadata = {
  title: "Izzath Noory | Product & Engineering Operations at Nexzoa",
  description:
    "Meet Izzath Noory, Co-Founder and Head of Operations at Nexzoa, an AI-native software engineering studio based in Sri Lanka. Discover his role in product strategy, sprint operations, and global client delivery.",
  keywords: [
    "Izzath Noory",
    "Izzath",
    "Noory",
    "Izzath Noory Nexzoa",
    "Nexzoa Izzath Noory",
    "Nexzoa Co-Founder",
    "Engineering Operations Sri Lanka",
    "Nexzoa Operations",
  ],
  alternates: {
    canonical: `${SITE_URL}/team/izzath-noory`,
  },
  openGraph: {
    title: "Izzath Noory | Product & Engineering Operations at Nexzoa",
    description:
      "Meet Izzath Noory, Co-Founder and Head of Operations at Nexzoa. Overseeing product strategy, client partnerships, and engineering operations.",
    url: `${SITE_URL}/team/izzath-noory`,
    siteName: SITE_NAME,
    images: [{ url: siteUrl("/nexzoa.jpg"), width: 800, height: 800, alt: "Izzath Noory at Nexzoa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzath Noory | Product & Engineering Operations at Nexzoa",
    description:
      "Meet Izzath Noory, Co-Founder and Head of Operations at Nexzoa in Colombo, Sri Lanka.",
    images: [siteUrl("/nexzoa.jpg")],
  },
};

export default function IzzathNooryProfilePage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/team/izzath-noory#profilepage`,
    url: `${SITE_URL}/team/izzath-noory`,
    name: "Izzath Noory | Product & Engineering Operations at Nexzoa",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/team/izzath-noory#person`,
      name: "Izzath Noory",
      givenName: "Izzath",
      familyName: "Noory",
      jobTitle: "Co-Founder & Head of Operations",
      description: member.shortBio,
      image: siteUrl(member.avatar),
      url: `${SITE_URL}/team/izzath-noory`,
      sameAs: [
        "https://linkedin.com/company/nexzoa",
      ],
      worksFor: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Nexzoa",
        url: `${SITE_URL}/`,
      },
      knowsAbout: [
        "Product Strategy",
        "Engineering Operations",
        "Agile Software Delivery",
        "Middle East Technology Partnerships",
        "SaaS Market Architecture",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
    },
  };

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
        name: "Team",
        item: `${SITE_URL}/team`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Izzath Noory",
        item: `${SITE_URL}/team/izzath-noory`,
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent blur-[110px] -z-10" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/team" className="hover:text-white transition-colors">Team</Link>
          <span>/</span>
          <span className="text-white/80 font-medium">Izzath Noory</span>
        </nav>

        {/* Profile Hero Card */}
        <section className="mb-14 rounded-[32px] border border-white/[0.08] bg-[#0a0a0c]/90 backdrop-blur-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-gradient-to-br from-white/[0.02] to-transparent blur-[40px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8 lg:gap-12">
            {/* Avatar Photo */}
            <div className="shrink-0 flex flex-col items-center md:items-start gap-4">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-2 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-white/[0.02]">
                <img
                  src={member.avatar}
                  alt="Izzath Noory — Co-Founder & Head of Operations at Nexzoa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Verified Identity Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Entity &bull; Nexzoa</span>
              </div>
            </div>

            {/* Profile Header Details */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-white/50 mb-3">
                <span>Colombo, Sri Lanka</span>
                <span>&bull;</span>
                <span>Nexzoa Operations</span>
              </div>

              {/* H1 Heading */}
              <h1
                className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Izzath Noory
              </h1>

              {/* H2 Heading */}
              <h2
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent mb-4"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Product Strategy &amp; Operations at Nexzoa
              </h2>

              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light mb-6">
                {member.shortBio}
              </p>

              {/* Social / External Verification Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://linkedin.com/company/nexzoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/30 text-xs font-medium text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                  <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  <span>Nexzoa LinkedIn</span>
                  <span className="text-white/40">↗</span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/30 text-xs font-medium text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                  <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>Email: {CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Biography & Role at Nexzoa */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-6">
            <div className="rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-8 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-3">
                Operations &amp; Delivery Leadership
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-6"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Driving Agile Delivery and Global Client Alignment
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                {member.fullBio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="rounded-[28px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-8 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-4">
                Operational Track Record
              </span>
              <div className="space-y-6">
                {member.experience.map((exp, eIdx) => (
                  <div key={eIdx} className="border-l-2 border-white/10 pl-5 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white" />
                    <span className="font-mono text-[11px] text-white/40 block mb-1">
                      {exp.period}
                    </span>
                    <h4
                      className="text-base font-bold text-white mb-0.5"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      {exp.role} &bull; <span className="text-white/80 font-normal">{exp.company}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-white/55 leading-relaxed font-light mt-2">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="rounded-[24px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-3">
                Entity Association
              </span>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Primary Entity</span>
                  <Link href="/" className="text-white font-medium hover:underline">
                    Nexzoa (nexzoa.dev)
                  </Link>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Primary Role</span>
                  <span className="text-white/80">Co-Founder &amp; Head of Operations</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Headquarters</span>
                  <span className="text-white/80">Colombo, Sri Lanka</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Key Operations</span>
                  <span className="text-white/80">Saudi Arabia, UAE, Qatar, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-3">
                Core Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-white/70 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Operational Initiatives */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">
              Strategic Initiatives
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Key Initiatives Led by Izzath Noory
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {member.featuredProjects.map((project, pIdx) => (
              <div
                key={pIdx}
                className="rounded-[24px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-3">
                    {project.category}
                  </span>
                  <h4
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/55 leading-relaxed font-light mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.05] text-[10px] text-white/40 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <h3
            className="text-2xl sm:text-3xl font-black text-white mb-3"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Discuss a Partnership with Nexzoa
          </h3>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Connect directly with Izzath to discuss project timelines, dedicated developer pods, or international market expansion.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="start-project-button inline-flex items-center justify-center px-7 py-3 rounded-xl text-[14px] font-semibold text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start a Project
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white text-[14px] font-medium border border-white/[0.08] transition-all"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Contact Operations Directly
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
