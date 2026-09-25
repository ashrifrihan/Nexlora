import { SITE_NAME, SITE_URL } from "@/lib/siteConfig";

export interface TeamMember {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  aliases: string[];
  role: string;
  jobTitle: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  worksFor: string;
  avatar: string;
  skills: string[];
  highlights: string[];
  experience: {
    period: string;
    role: string;
    company: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    description: string;
  }[];
  featuredProjects: {
    title: string;
    description: string;
    category: string;
    tags: string[];
    link?: string;
    github?: string;
  }[];
  socials: {
    website?: string;
    github?: string;
    fiverr?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "ashrif-rihan",
    name: "Ashrif Rihan",
    givenName: "Ashrif",
    familyName: "Rihan",
    aliases: [
      "Mohamed Ashrif Rihan",
      "Rihan",
      "Ashrif",
      "Mohamed Ashrif",
      "Rihan Ashrif",
      "ashrifrihan",
    ],
    role: "Software Engineer & UI/UX Designer",
    jobTitle: "Software Engineer & UI/UX Designer at Nexzoa",
    tagline: "Architecting high-velocity web apps, AI systems, and ergonomic UI/UX experiences.",
    shortBio:
      "Ashrif Rihan is a software engineer and UI/UX designer at Nexzoa, specializing in modern full-stack web applications, AI-driven digital systems, intuitive user interfaces, and scalable SaaS platforms.",
    fullBio: [
      "Ashrif Rihan is a software engineer and UI/UX designer based in Colombo, Sri Lanka, and a core member of the engineering team at Nexzoa. He blends technical software engineering with rigorous user experience design to build mission-critical digital systems for startups, scaleups, and global enterprises.",
      "At Nexzoa, Ashrif leads frontend architecture and design systems across production Next.js and React applications, translating complex operational workflows into intuitive interfaces. His work spans AI workflow tools, full-stack multi-tenant SaaS products, and sub-100ms web platforms for clients across Saudi Arabia, UAE, Qatar, and international markets.",
      "Prior to and alongside his work with Nexzoa, Ashrif created popular developer utilities and AI tools including QuickSticker AI Studio, QuickCompress batch optimizer, and comprehensive enterprise management suites like the Smart Rice Mill Management System and QuickStay booking platform.",
    ],
    location: "Colombo, Sri Lanka",
    worksFor: "Nexzoa",
    avatar: "https://github.com/ashrifrihan.png",
    skills: [
      "React / Next.js (App Router)",
      "TypeScript & JavaScript",
      "UI/UX Design & Design Systems",
      "Tailwind CSS & Responsive Layouts",
      "PostgreSQL, Prisma & Supabase",
      "AI Pipelines & Prompt Engineering",
      "Node.js, Express & REST APIs",
      "Figma Prototyping & User Research",
    ],
    highlights: [
      "Core Software Engineer and UI/UX Designer at Nexzoa",
      "Creator of QuickSticker AI Studio and QuickCompress Optimizer",
      "Architect of sub-100ms Core Web Vitals optimized frontend interfaces",
      "BEng (Hons) in Software Engineering from London Metropolitan University",
    ],
    experience: [
      {
        period: "2024 – Present",
        role: "Software Engineer & UI/UX Designer",
        company: "Nexzoa",
        description:
          "Leading web application engineering, UI/UX design systems, and frontend architecture for enterprise SaaS platforms and AI automation tools across Sri Lanka, the Middle East, and global markets.",
      },
      {
        period: "2023 – Present",
        role: "Independent Software Engineer & Designer",
        company: "ashrifrihan.me / Global Clients",
        description:
          "Designing and developing high-converting web applications, brand identities, and custom digital software solutions for international clientele.",
      },
    ],
    education: [
      {
        institution: "London Metropolitan University",
        degree: "BEng (Hons) in Software Engineering",
        period: "Feb 2025 – Feb 2026",
        description:
          "Advanced software engineering, distributed systems development, and modern cloud application architecture.",
      },
      {
        institution: "ESOFT Metro Campus",
        degree: "Higher National Diploma (HND) in Software Engineering",
        period: "Mar 2023 – Sep 2024",
        description:
          "Comprehensive software development, database architecture, algorithms, and practical applied UI/UX design.",
      },
      {
        institution: "ESOFT Metro Campus",
        degree: "Diploma in Information Technology",
        period: "Mar 2023 – Feb 2024",
        description:
          "Core programming fundamentals, computing foundations, and software development workflows.",
      },
    ],
    featuredProjects: [
      {
        title: "QuickSticker AI Studio",
        description:
          "An AI-powered sticker creation suite converting image uploads and text prompts into WhatsApp-ready stickers using automated background removal.",
        category: "AI / ML Application",
        tags: ["Next.js", "AI Background Removal", "TypeScript", "Canvas"],
        github: "https://github.com/ashrifrihan/QuickSticker",
      },
      {
        title: "QuickCompress Batch Optimizer",
        description:
          "A client-side batch image compression platform processing up to 20 images simultaneously with custom quality ratios and zero server latency.",
        category: "Web Application",
        tags: ["React", "Client-Side Compression", "Tailwind CSS"],
        github: "https://github.com/ashrifrihan/QuickCompress",
      },
      {
        title: "Smart Rice Mill Management System",
        description:
          "A multi-role enterprise business operations platform digitizing rice mill manufacturing, inventory flow, real-time metrics, and billing.",
        category: "Enterprise System",
        tags: ["Full-Stack", "PostgreSQL", "Enterprise Dashboard", "Real-Time Data"],
        link: "https://ashrifrihan.me/projects/1",
      },
      {
        title: "QuickStay Hotel Management System",
        description:
          "Unified hotel booking and guest management platform with multi-role permissions, room reservation workflows, and automated invoice billing.",
        category: "SaaS Platform",
        tags: ["Next.js", "SaaS", "Billing Engine", "Role Management"],
        link: "https://ashrifrihan.me/projects/2",
      },
      {
        title: "StarEvent Management Platform",
        description:
          "Web-based community event hosting and organization platform engineered with ASP.NET MVC and responsive UI architecture.",
        category: "Web Platform",
        tags: ["ASP.NET", "C#", "SQL Server", "Event Management"],
        github: "https://github.com/ashrifrihan/StarEvent",
      },
    ],
    socials: {
      website: "https://ashrifrihan.me",
      github: "https://github.com/ashrifrihan",
      fiverr: "https://www.fiverr.com/ardesignarts",
      email: "ashrif@nexzoa.dev",
    },
  },
  {
    slug: "izzath-noory",
    name: "Izzath Noory",
    givenName: "Izzath",
    familyName: "Noory",
    aliases: ["Izzath", "Noory", "Izzath Noory Nexzoa"],
    role: "Co-Founder & Head of Operations",
    jobTitle: "Co-Founder & Head of Operations at Nexzoa",
    tagline: "Bridging technical engineering with strategic product delivery and global client expansion.",
    shortBio:
      "Izzath Noory is Co-Founder and Head of Operations at Nexzoa, overseeing client partnerships, product delivery workflows, and market expansion across the Middle East, Sri Lanka, and worldwide.",
    fullBio: [
      "Izzath Noory is Co-Founder and Head of Operations at Nexzoa. Based in Colombo, Sri Lanka, Izzath oversees business operations, client project alignment, sprint roadmaps, and strategic ecosystem partnerships.",
      "Working closely with Nexzoa's engineering leadership, Izzath ensures that every client engagement—from rapid MVP prototyping to multi-month enterprise AI rollouts—is executed with transparent milestones, rigorous quality standards, and continuous async communication.",
      "His operational oversight has been central to Nexzoa's expansion into the Gulf Cooperation Council (GCC) markets including Saudi Arabia, UAE, and Qatar, as well as maintaining strong connections within Sri Lanka's burgeoning tech and startup community.",
    ],
    location: "Colombo, Sri Lanka",
    worksFor: "Nexzoa",
    avatar: "/nexzoa.jpg",
    skills: [
      "Product Strategy & Scoping",
      "Engineering Operations & Agile Sprints",
      "Client Partnerships & Delivery",
      "MENA & GCC Market Strategy",
      "Digital Transformation Consulting",
      "Quality Assurance & Milestone Tracking",
    ],
    highlights: [
      "Co-Founder and Head of Operations at Nexzoa",
      "Oversees global client engagements across GCC (Saudi Arabia, UAE, Qatar) and Sri Lanka",
      "Manages agile delivery sprints and asynchronous client collaboration channels",
    ],
    experience: [
      {
        period: "2024 – Present",
        role: "Co-Founder & Head of Operations",
        company: "Nexzoa",
        description:
          "Directing operational strategy, client project scoping, sprint coordination, and partnership growth for Nexzoa's global software engineering engagements.",
      },
    ],
    education: [
      {
        institution: "Higher Education Institutions in Sri Lanka",
        degree: "Business Information Systems & Management",
        period: "2021 – 2024",
        description:
          "Specialized studies in business operations, information technology management, and digital transformation.",
      },
    ],
    featuredProjects: [
      {
        title: "Nexzoa MENA Market Operations",
        description:
          "Operational expansion connecting Sri Lankan engineering talent with business transformation initiatives in Saudi Arabia (Vision 2030), UAE, and Qatar.",
        category: "Strategic Operations",
        tags: ["Global Operations", "MENA Expansion", "Enterprise Delivery"],
      },
      {
        title: "Sprint Delivery & Client Transparency Architecture",
        description:
          "Implementation of direct engineering communication models using bi-weekly sprint demos and dedicated Notion roadmaps without account executive overhead.",
        category: "Operational Systems",
        tags: ["Agile Workflows", "Direct Engineering", "Client Success"],
      },
    ],
    socials: {
      linkedin: "https://linkedin.com/company/nexzoa",
      email: "izzath@nexzoa.dev",
    },
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((m) => m.slug === slug);
}
