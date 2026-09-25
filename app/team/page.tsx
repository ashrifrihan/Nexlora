import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";
import { TEAM_MEMBERS } from "@/lib/teamData";

export const metadata: Metadata = {
  title: "The People Behind Nexzoa | Leadership & Engineering Team",
  description:
    "Meet the engineers, designers, and operators behind Nexzoa: Ashrif Rihan (Software Engineer & UI/UX Designer) and Izzath Noory (Co-Founder & Operations). Direct engineering without agency overhead.",
  keywords: [
    "Nexzoa team",
    "People behind Nexzoa",
    "Ashrif Rihan",
    "Ashrif",
    "Rihan",
    "Mohamed Ashrif Rihan",
    "Izzath Noory",
    "Nexzoa founders",
    "Nexzoa engineers",
    "Software Engineer Sri Lanka",
    "UI UX Designer Sri Lanka",
  ],
  alternates: {
    canonical: `${SITE_URL}/team`,
  },
  openGraph: {
    title: `The People Behind ${SITE_NAME} | Engineering & Leadership`,
    description:
      "Meet Ashrif Rihan and Izzath Noory — the builders and operators engineering intelligent software systems at Nexzoa.",
    url: `${SITE_URL}/team`,
    siteName: SITE_NAME,
    images: [{ url: siteUrl("/og-image.png"), width: 1200, height: 630 }],
  },
};

export default function TeamPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/team#webpage`,
    url: `${SITE_URL}/team`,
    name: "The People Behind Nexzoa",
    description:
      "Meet the team of software engineers, designers, and operators behind Nexzoa.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    hasPart: TEAM_MEMBERS.map((m) => ({
      "@type": "Person",
      "@id": `${SITE_URL}/team/${m.slug}#person`,
      name: m.name,
      jobTitle: m.role,
      url: `${SITE_URL}/team/${m.slug}`,
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    })),
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
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent blur-[110px] -z-10" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <span>/</span>
          <span className="text-white/80 font-medium">Team</span>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10.5px] tracking-wider text-white/60 uppercase">Direct Engineering Culture</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.12]"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            The People Behind Nexzoa
          </h1>
          <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            We are an AI-native engineering studio founded in Colombo, Sri Lanka. No account executives or disconnected management layers—you collaborate directly with the engineers, designers, and operators building your systems.
          </p>
        </header>

        {/* Team Members Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.slug}
                className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0a0c]/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] group hover:border-white/20 transition-all duration-300"
              >
                <div className="relative z-10">
                  {/* Top: Avatar and Role */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-white/[0.02]">
                      <img
                        src={member.avatar}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-[10.5px] text-white/40 uppercase tracking-widest block mb-1">
                        {member.worksFor} &bull; {member.location}
                      </span>
                      <h2
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        {member.name}
                      </h2>
                      <p className="text-sm font-medium text-white/70 mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Short Bio */}
                  <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed font-light mb-6">
                    {member.shortBio}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    {member.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/65">
                        <span className="text-white/40 mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-white/50 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="relative z-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-white/80 transition-colors group/link"
                    style={{ fontFamily: '"Satoshi", sans-serif' }}
                  >
                    <span>View Dedicated Profile &amp; Projects</span>
                    <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>

                  <div className="flex items-center gap-3">
                    {member.socials.website && (
                      <a
                        href={member.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/40 hover:text-white transition-colors"
                        title="Personal Website"
                      >
                        Portfolio ↗
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/40 hover:text-white transition-colors"
                        title="GitHub"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Dedicated Profiles Matter / Context */}
        <section className="mb-20 p-8 sm:p-10 rounded-[28px] bg-[#0a0a0c]/90 border border-white/[0.06] backdrop-blur-xl">
          <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">Transparency &amp; Ownership</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Built by engineers who put their names and reputations on the code.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed font-light max-w-3xl mb-6">
            Nexzoa is powered by real technologists based in Sri Lanka who maintain public portfolios, open-source repositories, and verified track records. When you partner with Nexzoa, your code is written and reviewed by our named engineering leadership—ensuring complete accountability, long-term architectural stability, and zero anonymous outsourcing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Learn more about Nexzoa&apos;s background &amp; philosophy</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-16 border-t border-white/[0.06]">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Work directly with our team
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Skip the sales presentations. Discuss your project directly with Ashrif and the engineering team.
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
              Email Team Directly
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
