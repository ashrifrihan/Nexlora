"use client";

import React, { useState, useMemo } from "react";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import { motion, AnimatePresence } from "motion/react";

interface ArticleSection {
  title: string;
  body: string;
}

interface ArticleItem {
  id: number;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  intro: string;
  sections: ArticleSection[];
  lessons: string[];
  renderVisual: () => React.ReactNode;
}

/* ─── Lightweight SVG Illustrations for Articles (Monochrome & Premium) ─── */

function RiceMillCaseVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Database cylinder */}
      <rect x="35" y="30" width="30" height="40" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="35" y1="42" x2="65" y2="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="35" y1="54" x2="65" y2="54" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      {/* Leaf outline */}
      <path d="M50 15 C62 25, 62 45, 50 55 C38 45, 38 25, 50 15 Z" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="15" x2="50" y2="55" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function RelationalAuthVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Keys and Lock representing RBAC */}
      <rect x="30" y="45" width="40" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="60" r="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="64" x2="50" y2="70" stroke="currentColor" strokeWidth="1.5" />
      <path d="M40 45 V32 C40 25, 60 25, 60 32 V45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StickerAiVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Sticker page with cut line and magic wand */}
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="35" y="35" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1" />
      {/* Sparkles */}
      <path d="M70 25 L73 30 L78 31 L73 34 L72 39 L69 34 L64 33 L69 30 Z" fill="currentColor" opacity="0.6" />
      <path d="M30 65 L32 68 L36 69 L32 71 L31 75 L29 71 L25 70 L29 68 Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function ImageCompressionVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Dynamic arrows scaling inwards representing compression */}
      <rect x="20" y="20" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
      <rect x="35" y="35" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 15 L30 30 M30 15 V30 H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M85 85 L70 70 M70 85 V70 H85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeliveryUxVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Mobile outline with thumb area target grids */}
      <rect x="32" y="15" width="36" height="70" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="78" r="3.5" stroke="currentColor" strokeWidth="1" />
      {/* Thumb hot-zone area */}
      <circle cx="50" cy="58" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M50 50 L53 58 H47 Z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function TravelUxVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Globe grid with location pins */}
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="50" cy="50" rx="12" ry="30" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
      {/* Map Pin */}
      <path d="M50 30 C47 30, 44 33, 44 37 C44 42, 50 48, 50 48 C50 48, 56 42, 56 37 C56 33, 53 30, 50 30 Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function CustomBusinessSoftwareVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Gears interlocking representing custom process logic */}
      <circle cx="42" cy="42" r="15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="42" cy="42" r="4" fill="currentColor" />
      <circle cx="62" cy="62" r="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="62" cy="62" r="3" fill="currentColor" />
      {/* Interlock teeth representation */}
      <line x1="42" y1="22" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" />
      <line x1="42" y1="57" x2="42" y2="62" stroke="currentColor" strokeWidth="2.5" />
      <line x1="62" y1="46" x2="62" y2="50" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function ReactNextComparisonVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Next.js N Logo box alongside React orbit paths */}
      <rect x="52" y="35" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M58 57 V41 L74 57 V41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* React orbit orbits */}
      <ellipse cx="32" cy="49" rx="18" ry="6" stroke="currentColor" strokeWidth="1.2" transform="rotate(30 32 49)" />
      <ellipse cx="32" cy="49" rx="18" ry="6" stroke="currentColor" strokeWidth="1.2" transform="rotate(-30 32 49)" />
      <circle cx="32" cy="49" r="2.5" fill="currentColor" />
    </svg>
  );
}

function DashboardUxVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Gauge and simple dashboard summary cards */}
      <path d="M25 65 A30 30 0 0 1 75 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="65" x2="65" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="65" r="4.5" fill="currentColor" />
      <rect x="25" y="72" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function DesignWorkflowsVisual() {
  return (
    <svg className="w-20 h-20 text-white/50" viewBox="0 0 100 100" fill="none">
      {/* Vector curves and layout controls representing Figma methodology */}
      <rect x="20" y="20" width="60" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M30 60 C30 40, 70 40, 70 60" stroke="currentColor" strokeWidth="2.0" fill="none" />
      <circle cx="30" cy="60" r="3.5" fill="currentColor" />
      <circle cx="70" cy="60" r="3.5" fill="currentColor" />
      <circle cx="50" cy="45" r="3" stroke="currentColor" strokeWidth="1" fill="#000" />
    </svg>
  );
}

/* ─── Articles Database Aligned with Actual Projects ─── */

const articlesList: ArticleItem[] = [
  {
    id: 1,
    title: "How We Designed a Smart Rice Mill Management System",
    category: "Case Studies",
    readTime: "7 min read",
    summary: "A deep dive into digitizing agriculture workflows, custom loan management structures, and building real-time inventory systems.",
    intro: "Traditional rice mills handle massive product turnover, high worker count, and credit-based deliveries entirely on paper registers. Here is how we designed and engineered a full-stack platform to bring digital order and structure to this process.",
    sections: [
      {
        title: "Understanding the Manual Process Bottleneck",
        body: "During the initial discovery phase, we shadowed operators in rural rice mills. We discovered that tracking deliveries, customer credit, and machine output across multiple notebooks created transaction errors, delayed delivery runs, and left thousands of dollars in outstanding loans untracked."
      },
      {
        title: "Relational Database Design for Multi-Role Workflows",
        body: "We designed a normalized SQL schema to handle relational links between daily deliveries, stock records, worker logs, and client loan ledgers. By using real-time sync, updates to inventories instantly reconcile with outstanding financial reports."
      },
      {
        title: "Designing for Offline Resilience",
        body: "Since mills operate in areas with fluctuating internet, we integrated local caching mechanisms. Inputs are stored inside IndexedDB locally on the operator's machine and automatically synchronized with the server database when connection stabilizes."
      }
    ],
    lessons: [
      "Keep dashboards focused on large target elements for non-technical mill hands.",
      "Relational integrity must be strictly enforced on backend APIs rather than client components.",
      "Agriculture software must prioritize local-first offline inputs to handle weak rural connectivity."
    ],
    renderVisual: () => <RiceMillCaseVisual />
  },
  {
    id: 2,
    title: "Building a Hotel Booking System with Role-Based Access",
    category: "Engineering",
    readTime: "6 min read",
    summary: "Designing QuickStay's multi-role system architecture separating customer booking flows from management tools.",
    intro: "Engineering a hotel management system requires clean authorization boundaries. Here is how we built role-based workflows for customers, clerks, managers, and system administrators under a single platform.",
    sections: [
      {
        title: "Separation of Concerns in System Workflows",
        body: "A key challenge was structuring role-based permissions. The customer booking interface must remain clean and fast, while the front desk clerk requires access to check-ins and room assignments, and the manager needs high-level analytics without booking permissions."
      },
      {
        title: "Relational Mapping & Booking Collisions",
        body: "Booking conflicts occur when multiple users query the same room availability concurrently. We resolved this by implementing transaction locks on booking query tables to prevent double reservations during peak tourist seasons."
      }
    ],
    lessons: [
      "Role authorization must be validated server-side on every API route, not just hidden behind client routes.",
      "Database transactions must use lock mechanisms to handle simultaneous reservation queries.",
      "Clean separation of dashboards simplifies onboarding for new front-desk employees."
    ],
    renderVisual: () => <RelationalAuthVisual />
  },
  {
    id: 3,
    title: "Creating WhatsApp Stickers Using AI: Challenges & Optimizations",
    category: "AI",
    readTime: "5 min read",
    summary: "Integrating Pollinations AI, automated background removal, and strict compression algorithms in QuickSticker.",
    intro: "Building an AI-driven sticker tool sounds simple, but WhatsApp enforces a strict 100KB file limit on WebP images. Here is how we built a generation and processing pipeline that meets these guidelines.",
    sections: [
      {
        title: "Integrating the AI Generation Pipeline",
        body: "We integrated Pollinations AI for prompt-to-image generation. To make the outputs suitable for stickers, we piped the generated images through a background removal model (rembg) on our backend, leaving only the primary subject outline."
      },
      {
        title: "Algorithmic WebP Compression Constraints",
        body: "WhatsApp will refuse to import any WebP file that exceeds 100KB. We developed an iterative compression wrapper in Python using Pillow. The algorithm dynamically adjusts quality values and resizes dimensions until the output measures exactly under 100KB."
      }
    ],
    lessons: [
      "Dynamic background removal works best when users add high-contrast keywords to prompts.",
      "Client canvas scaling must mimic native device viewport ratios to avoid sticker distortion.",
      "Compressing on backend queues keeps mobile browser performance fast."
    ],
    renderVisual: () => <StickerAiVisual />
  },
  {
    id: 4,
    title: "Compressing Images Without Quality Loss",
    category: "Engineering",
    readTime: "5 min read",
    summary: "Deep-dive into Pillow (PIL) and WebP batch optimization algorithms behind QuickCompress.",
    intro: "Image optimization is essential for modern web loading speeds. We discuss the tech behind processing up to 20 images simultaneously while retaining high quality.",
    sections: [
      {
        title: "Batch Processing Queue Layout",
        body: "Uploading many high-resolution photos can lock up server threads. We set up an asynchronous processing queue in Python that converts incoming formats into WebP while performing structural compression without visual degradation."
      },
      {
        title: "Managing Storage Space with Automated TTL",
        body: "To prevent server storage bloat, we integrated an automated cleanup job (TTL). The backend tracks file creation times and deletes source uploads and zip packages exactly 1 hour after generation."
      }
    ],
    lessons: [
      "WebP format conversion yields up to 80% file size reduction compared to JPEG.",
      "Run cron cleanups asynchronously to avoid server execution blocks during peak user loads.",
      "Provide before/after size feedback to build user trust in the compression tool."
    ],
    renderVisual: () => <ImageCompressionVisual />
  },
  {
    id: 5,
    title: "Designing Better Food Delivery Apps",
    category: "Design",
    readTime: "4 min read",
    summary: "Mobile-first UX principles and checkout optimizations based on the Quick Eats concept.",
    intro: "Food ordering is highly transactional. A cluttered interface or confusing navigation leads to cart drop-offs. Here are the core design strategies we followed for mobile-first user conversion.",
    sections: [
      {
        title: "Designing for One-Hand Usage",
        body: "Most mobile users navigate food delivery apps with a single hand while on the move. We structured the UI hierarchy to place search, category filters, and primary add-to-cart call-to-actions within the lower half of the screen."
      },
      {
        title: "Reducing Decision Fatigue",
        body: "Too many choices lead to cart drop-offs. We designed clear menu category scrollbars and filtered rankings based on ratings, delivery speed, and pricing tiers."
      }
    ],
    lessons: [
      "Place primary cart links within comfortable reach of the user's thumb.",
      "Keep food item customizations clean and collapsible to prevent display overload.",
      "Provide clear real-time updates at checkout to lower transaction anxiety."
    ],
    renderVisual: () => <DeliveryUxVisual />
  },
  {
    id: 6,
    title: "UX Lessons from Designing a Travel Platform",
    category: "Design",
    readTime: "5 min read",
    summary: "Visual hierarchy and card-based user interfaces based on the Wander Sphere travel design.",
    intro: "Travel applications must balance visual inspiration with search utilities. Here is how we structured layout grids to improve user conversion from destination research to booking.",
    sections: [
      {
        title: "Card-Based Layout Adaptations",
        body: "We chose a card-based layout structure for destination discovery. This allows each travel card to scale across desktop, tablet, and mobile screens while presenting key data like pricing, rating, and location clearly."
      },
      {
        title: "Visual Performance Balancing",
        body: "High-resolution photos are essential to attract users, but they slow down page loads. We optimized the images and integrated lazy loading to ensure fast load speeds on entry-level mobile devices."
      }
    ],
    lessons: [
      "Use card grids to display complex data cleanly.",
      "Pre-fetch primary images to prevent layout shifts as users scroll.",
      "Integrate search filters into sticky header blocks for quick access."
    ],
    renderVisual: () => <TravelUxVisual />
  },
  {
    id: 7,
    title: "Why Small Businesses Need Custom Software",
    category: "Business",
    readTime: "4 min read",
    summary: "How bespoke software solves specific operational bottlenecks where generic SaaS packages fall short.",
    intro: "Many startups register for monthly SaaS packages, only to find they have to change their business processes to match the tool. Custom software builds the tool around your business.",
    sections: [
      {
        title: "The Pitfalls of Off-the-Shelf Packages",
        body: "Generic subscription tools are built to fit as many businesses as possible. This means they are often bloated with unused features, yet lack specific integrations needed for your local operations."
      },
      {
        title: "Financial Comparison: Monthly SaaS vs Custom Build",
        body: "While custom software requires an initial development investment, it eliminates monthly per-user licensing fees. Over 2-3 years, custom systems are often more cost-effective for growing teams."
      }
    ],
    lessons: [
      "Build custom systems when your workflow is a core business differentiator.",
      "Own your databases and customer data rather than locking them inside third-party platforms.",
      "Design simple integrations to connect new features to your existing systems."
    ],
    renderVisual: () => <CustomBusinessSoftwareVisual />
  },
  {
    id: 8,
    title: "React vs Next.js for Business Applications",
    category: "Engineering",
    readTime: "6 min read",
    summary: "Evaluating performance, server-side rendering, and bundle size for enterprise SaaS projects.",
    intro: "Choosing a frontend framework determines how search engines index your site and how fast your pages load. Here is our technical comparison between standard React and Next.js.",
    sections: [
      {
        title: "SEO Optimization & Static Site Generation",
        body: "Standard React compiles into client-side bundles, leaving empty HTML targets for search engine bots. Next.js handles static page generation, prerendering page contents on the server so they index instantly."
      },
      {
        title: "Route Pre-fetching and Page Loading Speeds",
        body: "Next.js handles route split-loading automatically. As users hover over nav links, the target page assets pre-fetch in the background, making page navigation feel instantaneous."
      }
    ],
    lessons: [
      "Use Next.js static site generation (SSG) for public marketing and blogs.",
      "Keep complex interactive admin dashboards as client-side rendered routes to minimize server overhead.",
      "Configure Next/Image to handle image compression and prevent layout shifts."
    ],
    renderVisual: () => <ReactNextComparisonVisual />
  },
  {
    id: 9,
    title: "Building Better Dashboards for Non-Technical Users",
    category: "Product Development",
    readTime: "5 min read",
    summary: "UI design lessons from testing our business systems with local business operators.",
    intro: "Software is only useful if employees can operate it. Here is what we learned from testing custom dashboards with non-technical business users.",
    sections: [
      {
        title: "Removing Technical Jargon",
        body: "Operational staff do not care about 'database synchronize status' or 'relational query indices'. We replaced these with clear indicators like 'Updates Saved' and simple green status lights."
      },
      {
        title: "Minimizing Screen Options",
        body: "Cluttered dashboards create user error. We hid advanced configurations behind user settings and designed primary screens to focus on daily entry forms and search grids."
      }
    ],
    lessons: [
      "Use large, readable fonts and generous spacing around target buttons on touchscreens.",
      "Always include quick confirmation modals for destructive changes like item deletions.",
      "Provide clean PDF prints of summaries since paper is still used for reference."
    ],
    renderVisual: () => <DashboardUxVisual />
  },
  {
    id: 10,
    title: "How We Approach UI/UX Projects at Nexzoa",
    category: "Product Development",
    readTime: "4 min read",
    summary: "A look inside our design methodology, discovery processes, and client collaboration workflow.",
    intro: "We don't start writing code on day one. Here is our step-by-step UI/UX methodology that ensures we build the right platform for your business.",
    sections: [
      {
        title: "The Discovery Workshop Phase",
        body: "Every project starts with a detailed discovery workshop. We map out key user personas, outline core workflows, and define the systems needed before starting layout designs."
      },
      {
        title: "Interactive Wireframing & Iterative Feedback",
        body: "We build interactive Figma prototypes and share them with your team. This allows us to adjust button placements, menu routes, and data layouts before engineers start writing code."
      }
    ],
    lessons: [
      "Get client approval on interactive layouts to prevent costly changes during coding.",
      "Maintain a unified design system of components, margins, and typography.",
      "Test layouts with real customer data inputs to verify text wrap boundaries."
    ],
    renderVisual: () => <DesignWorkflowsVisual />
  }
];

const categories = ["All", "Case Studies", "Engineering", "AI", "Design", "Business", "Product Development"];

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return articlesList;
    return articlesList.filter(art => art.category === selectedCategory);
  }, [selectedCategory]);

  const activeArticle = useMemo(() => {
    return articlesList.find(art => art.id === selectedArticleId) || null;
  }, [selectedArticleId]);

  // The first article serves as our featured article
  const featuredArticle = useMemo(() => {
    return articlesList[0];
  }, []);

  return (
    <div className="bg-black min-h-screen text-white select-none">
      <Nav />

      {/* 1. Hero Section */}
      <section className="perf-section relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="perf-glow pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/[0.02] blur-[120px]" />

        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.08] px-3.5 py-1.5 bg-white/[0.02]">
            <span className="text-[12.5px] font-semibold uppercase tracking-wider text-white/60 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              The Nexzoa Journal
            </span>
          </div>

          <h1
            className="text-[clamp(32px,6vw,56px)] font-black tracking-[-0.04em] leading-[1.05] not-italic"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Engineering, Design & Product Insights
          </h1>

          <p
            className="mt-4 text-[clamp(15px,2vw,19px)] text-white/50 font-medium leading-relaxed not-italic"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Articles, case studies, and lessons learned from software development, AI systems, and digital product design.
          </p>
        </div>
      </section>

      {/* 2. Category Filters */}
      <section className="perf-section py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.04] mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all not-italic border ${
                selectedCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-white/[0.02] text-white/60 border-white/[0.06] hover:text-white hover:border-white/20"
              }`}
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Featured Article Section (Only shown when filter is "All" or "Case Studies") */}
      {(selectedCategory === "All" || selectedCategory === "Case Studies") && (
        <section className="perf-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Featured Post
            </span>
          </div>

          <div
            onClick={() => setSelectedArticleId(featuredArticle.id)}
            className="group relative rounded-2xl border border-white/[0.08] bg-[#0b0b0d] p-6 lg:p-8 cursor-pointer transition-all duration-300 hover:border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
            style={{ background: "linear-gradient(145deg, rgba(14,14,16,1) 0%, rgba(8,8,10,1) 100%)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Illustration */}
            <div className="lg:col-span-4 bg-white/[0.02] border border-white/[0.05] rounded-xl h-48 lg:h-64 flex items-center justify-center">
              {featuredArticle.renderVisual()}
            </div>

            {/* Content Details */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full py-2">
              <div>
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-white/40 mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span className="text-white/60">{featuredArticle.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-[22px] sm:text-[28px] font-black tracking-tight text-white mb-4 not-italic leading-tight group-hover:text-white transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {featuredArticle.title}
                </h2>

                <p className="text-[13.5px] leading-relaxed text-white/50 not-italic font-medium mb-6" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[13px] font-bold text-white/60 group-hover:text-white transition-colors">
                <span className="not-italic">Read Article</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-white/40 group-hover:translate-x-1.5 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Latest Articles Grid */}
      <section className="perf-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="mb-8">
          <h3 className="text-[18px] font-bold text-white not-italic tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            {selectedCategory === "All" ? "Latest Posts" : `${selectedCategory} Insights`}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticleId(art.id)}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0b0b0d] p-5 cursor-pointer transition-all duration-300 hover:border-white/20 flex flex-col justify-between overflow-hidden"
              style={{ background: "linear-gradient(145deg, rgba(14,14,16,1) 0%, rgba(8,8,10,1) 100%)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Visual */}
                <div className="mb-5 bg-white/[0.01] border border-white/[0.04] rounded-xl h-36 flex items-center justify-center">
                  {art.renderVisual()}
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/30 mb-2.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  <span>{art.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span>{art.readTime}</span>
                </div>

                <h4 className="text-[15px] font-bold text-white mb-2 tracking-tight not-italic leading-snug group-hover:text-white transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {art.title}
                </h4>

                <p className="text-[12.5px] text-white/40 leading-relaxed font-medium not-italic mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {art.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[11.5px] font-bold text-white/50 not-italic group-hover:text-white transition-colors" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  Read Insights
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-white/40 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Centered Modal Post Lightbox Overlay */}
      <AnimatePresence>
        {selectedArticleId !== null && activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticleId(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#0d0d0f] border border-white/[0.08] rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto z-10 shadow-2xl flex flex-col gap-6"
              style={{ background: "linear-gradient(145deg, rgba(14,14,16,1) 0%, rgba(8,8,10,1) 100%)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticleId(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white/60">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Meta details */}
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-white/40 pt-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                <span className="text-white/60">{activeArticle.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <span>{activeArticle.readTime}</span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-black tracking-tight text-white mb-3 leading-snug not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                  {activeArticle.title}
                </h2>
                <p className="text-[13.5px] leading-relaxed text-white/60 not-italic font-medium border-l-2 border-white/20 pl-4 py-1 bg-white/[0.01]">
                  {activeArticle.intro}
                </p>
              </div>

              {/* Body Sections */}
              <div className="flex flex-col gap-6 pt-2 border-t border-white/[0.06]">
                {activeArticle.sections.map((sec, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h3 className="text-[14.5px] font-bold text-white not-italic" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {sec.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/40 not-italic font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {sec.body}
                    </p>
                  </div>
                ))}

                {/* Lessons Learned */}
                <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4.5">
                  <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white/70 not-italic mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Key Lessons Learned
                  </h4>
                  <ul className="space-y-2.5">
                    {activeArticle.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[12.5px] text-white/50 not-italic leading-snug font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5">
                          <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/[0.06]">
                <a
                  href="mailto:hello@nexzoa.com"
                  className="flex-1 inline-flex items-center justify-center rounded-[12px] bg-white py-3 text-[13px] font-bold text-black hover:bg-white/90 transition-colors not-italic"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Start Project Intake
                </a>
                <button
                  onClick={() => setSelectedArticleId(null)}
                  className="flex-1 inline-flex items-center justify-center rounded-[12px] border border-white/[0.1] bg-white/[0.02] py-3 text-[13px] font-bold text-white hover:bg-white/[0.08] transition-colors not-italic"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  Close Insights
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
