import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, siteUrl } from "@/lib/siteConfig";
import { getTeamMember } from "@/lib/teamData";

const member = getTeamMember("ashrif-rihan")!;

export const metadata: Metadata = {
  title: "Ashrif Rihan | Software Engineer & UI/UX Designer at Nexzoa",
  description:
    "Meet Ashrif Rihan, a software engineer and UI/UX designer associated with Nexzoa, an AI-native software engineering studio based in Sri Lanka. Explore his experience, background, and projects.",
  keywords: [
    "Ashrif Rihan",
    "Ashrif",
    "Rihan",
    "Mohamed Ashrif Rihan",
    "Ashrif Rihan Nexzoa",
    "Nexzoa Ashrif Rihan",
    "Software Engineer Nexzoa",
    "UI UX Designer Sri Lanka",
    "ashrifrihan",
    "Nexzoa lead engineer",
    "QuickSticker Ashrif",
    "QuickCompress Ashrif",
  ],
  alternates: {
    canonical: `${SITE_URL}/team/ashrif-rihan`,
  },
  openGraph: {
    title: "Ashrif Rihan | Software Engineer & UI/UX Designer at Nexzoa",
    description:
      "Meet Ashrif Rihan, software engineer and UI/UX designer at Nexzoa. Building AI software systems, Next.js SaaS platforms, and digital products.",
    url: `${SITE_URL}/team/ashrif-rihan`,
    siteName: SITE_NAME,
    images: [{ url: member.avatar, width: 800, height: 800, alt: "Ashrif Rihan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashrif Rihan | Software Engineer & UI/UX Designer at Nexzoa",
    description:
      "Meet Ashrif Rihan, software engineer and UI/UX designer at Nexzoa in Colombo, Sri Lanka.",
    images: [member.avatar],
  },
};

export default function AshrifRihanProfilePage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/team/ashrif-rihan#profilepage`,
    url: `${SITE_URL}/team/ashrif-rihan`,
    name: "Ashrif Rihan | Software Engineer & UI/UX Designer at Nexzoa",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/team/ashrif-rihan#person`,
      name: "Ashrif Rihan",
      givenName: "Ashrif",
      familyName: "Rihan",
      additionalName: "Mohamed Ashrif Rihan",
      jobTitle: "Software Engineer & UI/UX Designer",
      description: member.shortBio,
      image: member.avatar,
      url: `${SITE_URL}/team/ashrif-rihan`,
      sameAs: [
        "https://ashrifrihan.me",
        "https://github.com/ashrifrihan",
        "https://www.fiverr.com/ardesignarts",
      ],
      worksFor: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Nexzoa",
        url: `${SITE_URL}/`,
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "London Metropolitan University",
        },
        {
          "@type": "EducationalOrganization",
          name: "ESOFT Metro Campus",
        },
      ],
      knowsAbout: [
        "Software Engineering",
        "UI/UX Design",
        "React",
        "Next.js",
        "TypeScript",
        "Full-Stack Development",
        "AI Pipelines & LLM Architecture",
        "Custom SaaS Platforms",
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
        name: "Ashrif Rihan",
        item: `${SITE_URL}/team/ashrif-rihan`,
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
          <span className="text-white/80 font-medium">Ashrif Rihan</span>
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
                  alt="Ashrif Rihan — Software Engineer & UI/UX Designer at Nexzoa"
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
                <span>Nexzoa Engineering</span>
              </div>

              {/* H1 Heading */}
              <h1
                className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Ashrif Rihan
              </h1>

              {/* H2 Heading */}
              <h2
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent mb-4"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Software Engineering &amp; UI/UX Design at Nexzoa
              </h2>

              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light mb-6">
                {member.shortBio}
              </p>

              {/* Social / External Verification Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://ashrifrihan.me"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/30 text-xs font-medium text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                  <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  <span>ashrifrihan.me (Portfolio)</span>
                  <span className="text-white/40">↗</span>
                </a>

                <a
                  href="https://github.com/ashrifrihan"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/30 text-xs font-medium text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                  <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  <span>github.com/ashrifrihan</span>
                  <span className="text-white/40">↗</span>
                </a>

                <a
                  href="https://www.fiverr.com/ardesignarts"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/30 text-xs font-medium text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                  <span className="text-emerald-400 font-bold text-xs">fi</span>
                  <span>Fiverr (ardesignarts)</span>
                  <span className="text-white/40">↗</span>
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
                Biography &amp; Background
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-6"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Bridging UI/UX Precision with Full-Stack Engineering
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
                Professional Experience
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

          {/* Right Sidebar: Skills, Education, Quick Info */}
          <div className="md:col-span-4 space-y-6">
            {/* Quick Entity Card */}
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
                  <span className="text-white/80">Software Engineer &amp; UI/UX Designer</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Headquarters</span>
                  <span className="text-white/80">Colombo, Western Province, Sri Lanka</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Client Geographies</span>
                  <span className="text-white/80">Saudi Arabia, UAE, Qatar, US &amp; Global</span>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="rounded-[24px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-3">
                Core Technical Skills
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

            {/* Education */}
            <div className="rounded-[24px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-4">
                Education &amp; Credentials
              </span>
              <div className="space-y-4">
                {member.education.map((edu, edIdx) => (
                  <div key={edIdx} className="text-xs">
                    <span className="font-mono text-[10px] text-white/40 block">
                      {edu.period}
                    </span>
                    <h5
                      className="font-bold text-white mt-0.5"
                      style={{ fontFamily: '"Satoshi", sans-serif' }}
                    >
                      {edu.degree}
                    </h5>
                    <p className="text-white/60 font-light mt-0.5">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects by Ashrif Rihan */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-[10.5px] font-bold text-white/40 uppercase tracking-widest block mb-2">
              Portfolio &amp; Open Source
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Featured Projects by Ashrif Rihan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {member.featuredProjects.map((project, pIdx) => (
              <div
                key={pIdx}
                className="rounded-[24px] border border-white/[0.06] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      {project.category}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/50 hover:text-white transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/50 hover:text-white transition-colors"
                      >
                        Details ↗
                      </a>
                    )}
                  </div>
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
            Connect with Ashrif at Nexzoa
          </h3>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm font-light">
            Discuss your system architecture, AI automation requirements, or full-stack software platform with Ashrif directly.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="start-project-button inline-flex items-center justify-center px-7 py-3 rounded-xl text-[14px] font-semibold text-black"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Start a Project with Nexzoa
            </Link>
            <a
              href="https://ashrifrihan.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white text-[14px] font-medium border border-white/[0.08] transition-all"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Visit Personal Portfolio
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
