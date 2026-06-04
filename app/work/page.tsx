"use client";

import React, { useState, useMemo, useRef } from "react";
import Nav from "@/component/nav";
import Footer from "@/component/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  screenshots: string[];
  role: string;
  problem: string;
  solution: string;
  myRole: string[];
  technologies: string[];
  uiUxFocus: string;
  outcome: string;
  github?: string;
  accent: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Smart Rice Mill Management System",
    description: "A multi-role business management system designed to digitize rice mill operations, combining web dashboards, real-time data management, and AI-driven insights.",
    category: ["Development", "System Design"],
    image: "/projects/rice-mill/rice-mill.jpg",
    screenshots: [
      "/projects/rice-mill/rice-mill.jpg",
    ],
    role: "Full Stack Developer & UI/UX Designer",
    problem: "Rice mill operations were managed manually across deliveries, inventory, workers, and customer credit. This resulted in poor visibility, calculation errors, delayed decision-making, and risk in tracking loans and stock movement.",
    solution: "Developed a centralized system with real-time dashboards, structured data management, and an integrated AI module to support decision-making. The platform streamlines inventory tracking, delivery coordination, and financial monitoring while providing predictive insights.",
    myRole: [
      "Designed complete system architecture and workflow",
      "Built responsive frontend using React and Tailwind CSS",
      "Developed backend services and API integration",
      "Implemented AI module using Python and FastAPI",
      "Integrated Firebase for real-time data synchronization",
      "Designed database structure for stock, sales, and loan tracking",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Python",
      "FastAPI",
      "Firebase",
      "scikit-learn",
      "pandas",
      "numpy",
      "Tailwind CSS",
    ],
    uiUxFocus: "Focused on usability for non-technical users by designing clear dashboards, simplified data views, and structured workflows. Emphasis was placed on readability, minimal cognitive load, and multilingual interaction to support local users effectively.",
    outcome: "Delivered a functional system that improves operational visibility, reduces manual errors, and enables data-driven decision-making through real-time tracking and predictive analytics.",
    accent: "#f59e0b",
  },
  {
    id: 2,
    title: "QuickStay – Hotel Booking & Management System",
    description: "A multi-role hotel booking and management system enabling online reservations, front-desk operations, billing, and role-based workflows within a unified platform.",
    category: ["Development", "System Design"],
    image: "/projects/quickstay/QuickStay.jpg",
    screenshots: [
      "/projects/quickstay/Customer/customer.jpg",
      "/projects/quickstay/quickstay_1.jpg",
      "/projects/quickstay/Customer/Room_search.jpg",
      "/projects/quickstay/Customer/Room_details.jpg",
      "/projects/quickstay/Customer/Booking_and_payment.jpg",
      "/projects/quickstay/Customer/Booking_history.jpg",
      "/projects/quickstay/Company/company.jpg",
      "/projects/quickstay/Company/dashboard.jpg",
      "/projects/quickstay/Company/Group_booking.jpg",
      "/projects/quickstay/Company/Guest_assignment.jpg",
      "/projects/quickstay/Company/billing.jpg",
      "/projects/quickstay/Clerk/Clerk.jpg",
      "/projects/quickstay/Clerk/dashboard.jpg",
      "/projects/quickstay/Clerk/Reservation_desk.jpg",
      "/projects/quickstay/Clerk/Check-in.jpg",
      "/projects/quickstay/Clerk/Checkout.jpg",
      "/projects/quickstay/Manager/manager.jpg",
      "/projects/quickstay/Manager/Dashboard.jpg",
      "/projects/quickstay/Manager/Room.jpg",
      "/projects/quickstay/Manager/Services.jpg",
      "/projects/quickstay/Manager/Reports.jpg",
    ],
    role: "Full Stack Developer & System Designer",
    problem: "Small to mid-scale hotel operations often rely on disconnected tools or manual processes for reservations, billing, and room management, leading to booking conflicts, inefficient workflows, and lack of centralized control.",
    solution: "Developed a centralized hotel management system that integrates online booking, walk-in handling, role-based dashboards, and billing workflows. The system ensures consistent room availability tracking, structured operations, and seamless coordination between users.",
    myRole: [
      "Designed and implemented full system architecture",
      "Developed role-based authentication and access control",
      "Built booking, check-in, and checkout workflows",
      "Designed relational database schema for reservations and billing",
      "Integrated Stripe payment gateway for online transactions",
      "Created responsive UI for both customers and administrative users",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Stripe API"],
    uiUxFocus: "Focused on simplifying complex hotel operations into structured workflows. Designed clear booking flows, role-specific dashboards, and intuitive navigation to ensure usability for both technical and non-technical users.",
    outcome: "Delivered a fully functional system that supports real-time booking operations, reduces manual errors, and provides a centralized platform for managing rooms, reservations, payments, and user roles efficiently.",
    accent: "#3b82f6",
  },
  {
    id: 3,
    title: "Photography CMS & Booking Platform",
    description: "A full-stack, CMS-driven photography website with dynamic galleries, booking management, and a secure admin panel for complete business control.",
    category: ["Development", "UI/UX"],
    image: "/projects/MalcolmLismore/Malcolm.jpg",
    screenshots: [
      "/projects/MalcolmLismore/Malcolm.jpg",
    ],
    role: "Full Stack Developer",
    problem: "Professional photographers lacked a centralized system to manage portfolios, client bookings, pricing, and content updates, often relying on static websites or manual communication workflows.",
    solution: "Developed a dynamic PHP-MySQL platform with an integrated admin CMS, enabling real-time content management, structured booking handling, and scalable portfolio presentation without requiring technical expertise.",
    myRole: [
      "Designed full system architecture using modular PHP structure",
      "Developed secure admin panel with authentication and session control",
      "Built dynamic gallery system with category-based rendering",
      "Implemented booking system with database integration",
      "Created reusable layout components (header, footer, shared UI)",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "CSS"],
    uiUxFocus: "Focused on creating a visually immersive yet minimal interface tailored for photography. Prioritized content-first layouts, smooth navigation across galleries, and simplified booking flows. Admin experience was designed for non-technical users, ensuring quick content updates with minimal friction.",
    outcome: "Delivered a scalable digital platform that enables photographers to manage their business independently — including content updates, client bookings, and pricing — reducing manual effort and improving operational efficiency.",
    accent: "#a855f7",
  },
  {
    id: 4,
    title: "QuickSticker – AI-Powered Sticker Studio",
    description: "A full-stack AI-powered sticker creation platform that turns any image or text-to-image prompt into WhatsApp-ready stickers in seconds using intelligent background removal and optimized compression.",
    category: ["Development", "AI/ML", "Full Stack"],
    image: "/projects/quickSticker/QuickSticker.jpg",
    screenshots: [
      "/projects/quickSticker/quicksticker1.jpg",
      "/projects/quickSticker/quicksticker2 .jpg",
      "/projects/quickSticker/quicksticker3.jpg",
    ],
    role: "Full Stack Developer & AI Engineer",
    problem: "Users struggle to create professional stickers manually or rely on generic tools that produce low-quality results. WhatsApp's 100KB size requirement creates technical barriers, and mobile users lack intuitive interfaces for sticker customization.",
    solution: "Developed an end-to-end AI sticker studio combining Pollinations AI for image generation, U2Net (rembg) for automated background removal, and a custom quality-optimization algorithm that ensures stickers meet WhatsApp's <100KB threshold without quality loss.",
    myRole: [
      "Designed modular backend architecture with Services/Routes pattern for scalability",
      "Implemented AI image generation pipeline via Pollinations API integration",
      "Built intelligent WEBP compression algorithm targeting <100KB constraint",
      "Created custom vanilla JavaScript UI system with canvas-based real-time preview",
      "Developed custom font picker component for mobile WYSIWYG experience",
      "Integrated Web Share API for native WhatsApp/Telegram sharing on mobile",
      "Implemented rembg session management for optimized background removal",
    ],
    technologies: [
      "Python",
      "Flask",
      "Pollinations AI",
      "rembg (U2Net)",
      "PIL/Pillow",
      "WEBP Compression",
      "Vanilla JavaScript",
      "Canvas API",
      "Web Share API",
      "HTML",
      "CSS",
    ],
    uiUxFocus: "Prioritized mobile-first design with intuitive interaction flows. Designed custom components to overcome native mobile limitations (font picker, modal system). Focused on real-time visual feedback, drag-and-drop text overlays, and minimal friction for sticker export and sharing.",
    outcome: "Delivered a production-ready AI sticker platform that enables users to generate professional, WhatsApp-compliant stickers with minimal friction. Solved the 100KB barrier through algorithmic optimization while maintaining visual quality.",
    github: "https://github.com/ashrifrihan/QuickSticker",
    accent: "#ec4899",
  },
  {
    id: 5,
    title: "QuickCompress – Batch Image Compression Platform",
    description: "A full-stack batch image compression web application enabling users to compress up to 20 images simultaneously with customizable quality, format conversion, and automated file management.",
    category: ["Development", "Full Stack", "Web App"],
    image: "/projects/QuickCompress/quick.jpg",
    screenshots: [
      "/projects/QuickCompress/QuickCompreaa.jpg",
      "/projects/QuickCompress/QuickCompreaa2.jpg",
    ],
    role: "Full Stack Developer",
    problem: "Users struggle with slow, complex image compression workflows. Existing tools either lack batch processing, require uploads to untrusted services, or provide limited format options. File management and cleanup across multiple uploads create clutter and storage overhead.",
    solution: "Built a streamlined Flask-based compression platform supporting batch processing of up to 20 images with real-time quality/dimension controls, format conversion (WebP, JPEG, PNG), automatic file deletion after 1 hour, and dual-download options (individual + ZIP).",
    myRole: [
      "Designed full-stack architecture using Flask backend with REST API",
      "Implemented batch image compression using Pillow with quality/dimension optimization",
      "Created responsive frontend using Tailwind CSS and vanilla JavaScript",
      "Built file management system with automatic cleanup (1-hour TTL)",
      "Designed before/after visualization for compression metrics",
      "Implemented drag-and-drop upload interface with validation",
      "Developed dark/light mode toggle for user preference",
      "Set up deployment configuration for Render/Railway/PythonAnywhere",
    ],
    technologies: [
      "Python",
      "Flask",
      "Pillow (PIL)",
      "Tailwind CSS",
      "Vanilla JavaScript",
      "HTML",
      "REST API",
      "Gunicorn",
      "File Management",
    ],
    uiUxFocus: "Designed for maximum simplicity and efficiency. Emphasized drag-and-drop uploads, real-time before/after comparisons, and one-click batch download. Focused on reducing cognitive load through clear metrics (compression %, size savings), intuitive sliders, and accessible dark/light mode.",
    outcome: "Delivered a production-ready compression platform deployed on free tier services (Render/Railway), enabling users to process and optimize multiple images quickly without technical knowledge or subscription requirements.",
    github: "https://github.com/ashrifrihan/QuickCompress",
    accent: "#06b6d4",
  },
  {
    id: 6,
    title: "Wander Sphere Travel UX Platform",
    description: "A modern travel planning UI/UX concept focused on seamless destination discovery, intuitive booking flows, and immersive visual storytelling.",
    category: ["UI/UX", "Product Design", "Graphic Design"],
    image: "/projects/Wander-Spheres/Wander-Spheres.jpg",
    screenshots: [
      "/projects/Wander-Spheres/Website.jpg",
    ],
    role: "UI/UX Designer",
    problem: "Travel websites are often cluttered, overwhelming, and transactional, making it difficult for users to explore destinations naturally or make confident booking decisions.",
    solution: "Designed an intuitive, visually immersive travel platform that simplifies exploration through structured layouts, clear hierarchy, and guided user flows from discovery to booking.",
    myRole: [
      "Designed complete end-to-end user interface for travel platform",
      "Created visual hierarchy for destination discovery and booking flow",
      "Developed card-based UI system for scalability",
      "Designed responsive layouts for desktop and mobile",
      "Structured navigation to reduce cognitive load",
    ],
    technologies: ["Figma", "UI Design Systems", "Prototyping", "User Flow Mapping"],
    uiUxFocus: "Focused on reducing decision fatigue by organizing content into clear sections such as destinations, value propositions, reviews, and blogs. Used large visual imagery to evoke emotion while maintaining usability. Prioritized quick scanning, minimal clicks, and strong CTA visibility across the journey.",
    outcome: "Created a cohesive travel experience that balances inspiration with usability — enabling users to explore, compare, and move toward booking with clarity and confidence.",
    accent: "#10b981",
  },
  {
    id: 7,
    title: "Quick Eats Food Delivery UX",
    description: "A mobile-first food delivery UI/UX design focused on fast decision-making, simplified ordering flows, and real-time delivery interaction.",
    category: ["UI/UX", "Product Design", "Graphic Design"],
    image: "/projects/QucikEats/QucikEats.jpg",
    screenshots: [
      "/projects/QucikEats/QucikEats2.jpg",
    ],
    role: "UI/UX Designer",
    problem: "Food delivery apps often overwhelm users with too many choices, unclear navigation, and slow checkout processes, leading to decision fatigue and drop-offs before order completion.",
    solution: "Designed a streamlined mobile experience that prioritizes speed — enabling users to discover food, compare options, and complete orders with minimal friction through structured layouts and clear interaction flows.",
    myRole: [
      "Conducted UX research on food ordering behavior and user pain points",
      "Designed end-to-end mobile app interface (home, search, cart, checkout)",
      "Created card-based UI system for restaurants and food items",
      "Designed real-time delivery tracking interface",
      "Optimized navigation for one-hand mobile usage",
    ],
    technologies: [
      "Figma",
      "Adobe Photoshop",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    uiUxFocus: "Focused on reducing time-to-order through clear visual hierarchy, quick category access, and minimal-step checkout. Designed for thumb-friendly navigation, ensuring key actions like search, add-to-cart, and checkout are easily reachable. Used strong visual cues such as ratings, delivery time, and pricing to support faster decisions.",
    outcome: "Created a fast, intuitive food ordering experience that reduces cognitive load and enables users to complete orders efficiently, improving overall usability and engagement.",
    accent: "#ef4444",
  },
  {
    id: 8,
    title: "CaféSpot Coffee Ordering App (Sri Lanka)",
    description: "A mobile-first coffee ordering experience designed for Sri Lanka's growing café culture, enabling users to quickly browse, customize, and order from nearby coffee shops.",
    category: ["UI/UX", "Product Design", "Graphic Design"],
    image: "/projects/cafe-spot/cafe-spot.jpg",
    screenshots: [
      "/projects/cafe-spot/screen1.jpg",
      "/projects/cafe-spot/screen2.jpg",
    ],
    role: "UI/UX Designer",
    problem: "Many café customers in Sri Lanka face long wait times and lack convenient ways to pre-order. Existing solutions are either generic food apps or lack localized café-focused experiences.",
    solution: "Designed a dedicated coffee ordering app that allows users to explore nearby cafés, customize drinks, and place quick orders for pickup or delivery with minimal interaction.",
    myRole: [
      "Conducted UX research on café ordering behavior in Sri Lanka",
      "Designed mobile-first user flows for quick ordering",
      "Created UI system for beverage categories and customization",
      "Designed cart and order tracking experience",
      "Developed clean, minimal interface aligned with café branding",
    ],
    technologies: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
    uiUxFocus: "Focused on simplicity and speed — users should be able to order coffee in seconds. Designed clear category filters (Cappuccino, Latte, Cold Coffee), quick add actions, and minimal checkout steps. Used a calm, café-inspired color palette to reflect a premium yet comfortable experience.",
    outcome: "Created a streamlined coffee ordering experience tailored for Sri Lankan users, reducing wait times and improving convenience through intuitive mobile interactions.",
    accent: "#d97706",
  },
  {
    id: 9,
    title: "StarEvent – ASP.NET Event Management System",
    description: "A comprehensive web-based event management system built with ASP.NET MVC (C#), enabling users to create, manage, explore, and organize events with responsive UI and secure routing.",
    category: ["Development", "System Design", "Full Stack"],
    image: "/projects/starevent/starevent.jpg",
    screenshots: [
      "/projects/starevent/starevent-1.jpg",
      "/projects/starevent/starevent-2.jpg",
    ],
    role: "Full Stack Developer & System Architect",
    problem: "Event organizers and attendees lack a centralized platform to create, manage, and discover events. Manual event tracking across categories, dates, and locations results in poor visibility, inefficient organization, and difficulty in managing event-related content and media.",
    solution: "Developed a full-stack event management platform using ASP.NET MVC architecture, combining a robust C# backend with modern HTML/CSS/JavaScript frontend. Features include event creation workflows, category-based organization, date filtering, image uploads, and secure role-based access control.",
    myRole: [
      "Architected complete ASP.NET MVC application structure with separation of concerns",
      "Designed and implemented MVC Controllers for event CRUD operations",
      "Built data Models with relational database design for events, users, and categories",
      "Developed Service layer for business logic abstraction and reusability",
      "Created Razor Views (.cshtml) for dynamic, templated UI rendering",
      "Implemented responsive frontend using HTML5, CSS3, and JavaScript/jQuery",
      "Built file upload system for event images and media management",
      "Configured ASP.NET routing, security, and environment-specific configurations",
      "Designed role-based authorization for organizers and attendees",
    ],
    technologies: [
      "C#",
      "ASP.NET MVC (.NET Framework)",
      "Razor Views (.cshtml)",
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "jQuery",
      "Bootstrap",
      "SQL Server / LocalDB",
      "NuGet Package Manager",
      "Visual Studio 2019/2022",
    ],
    uiUxFocus: "Designed a responsive, user-centric interface that prioritizes event discoverability and organization. Focused on clear navigation between event categories, intuitive filtering by date and location, and streamlined event creation forms for organizers. Emphasized clean layouts, readable typography, and accessibility for both casual browsers and event managers.",
    outcome: "Delivered a production-ready event management platform with secure role-based workflows, centralized event organization, and media management capabilities. The system enables organizers to publish events and attendees to discover and register for events efficiently.",
    github: "https://github.com/ashrifrihan/StarEvent",
    accent: "#6366f1",
  },
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<Record<number, string>>({
    1: "Challenge",
    2: "Challenge",
    3: "Challenge",
    4: "Challenge",
    5: "Challenge",
    6: "Challenge",
    7: "Challenge",
    8: "Challenge",
    9: "Challenge",
  });

  const [activeScreenshot, setActiveScreenshot] = useState<Record<number, number>>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  });

  return (
    <div className="bg-black min-h-screen text-white select-none">
      <Nav />

      {/* 1. Hero Section */}
      <section className="perf-section relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="perf-glow pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/[0.02] blur-[120px]" />

        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.08] px-3.5 py-1.5 bg-white/[0.02]">
            <span className="text-[12.5px] font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              Our Case Studies
            </span>
          </div>

          <h1
            className="text-[clamp(32px,6vw,56px)] font-black tracking-[-0.04em] leading-[1.05]"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Our Work
          </h1>

          <p
            className="mt-4 text-[clamp(16px,2vw,20px)] text-white/50 font-medium"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Real software, real products, real results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { value: "25+", label: "Projects Completed" },
            { value: "8+", label: "Industries Served" },
            { value: "5+", label: "Core Technologies" },
            { value: "100%", label: "Custom Built" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-2xl p-5 text-center"
            >
              <div className="text-[28px] sm:text-[32px] font-black text-white leading-none tracking-tight font-mono">{stat.value}</div>
              <div className="text-[11px] text-white/40 mt-1 font-semibold uppercase tracking-wider" style={{ fontFamily: '"Satoshi", sans-serif' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Detailed Interactive Case Studies */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="flex flex-col gap-24">
          {projectsData.map((project, idx) => {
            const currentTab = activeTab[project.id] || "Challenge";

            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Text Content Column */}
                <div className={`lg:col-span-6 flex flex-col ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {/* Category and Role */}
                  <div className="flex flex-wrap items-center gap-2 text-[10.5px] font-bold uppercase tracking-wider text-white/45 mb-2.5" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    <span>{project.category.join(" & ")}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <span className="text-white/80">{project.role}</span>
                  </div>

                  <h2 className="text-[24px] sm:text-[28px] font-black tracking-tight mb-4 leading-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {project.title}
                  </h2>

                  {/* Summary/Description */}
                  <p className="text-[13.5px] leading-relaxed text-white/40 mb-6 font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {project.description}
                  </p>

                  {/* Tab Selector Interface */}
                  <div className="flex border-b border-white/[0.06] mb-5 gap-1 overflow-x-auto pb-0.5">
                    {["Challenge", "Solution", "Outcome", "Role & Tech"].map((tabName) => (
                      <button
                        key={tabName}
                        onClick={() => setActiveTab((prev) => ({ ...prev, [project.id]: tabName }))}
                        className={`text-[12.5px] px-3.5 py-2 font-semibold transition-all shrink-0 border-b-2 -mb-0.5 ${
                          currentTab === tabName
                            ? "text-white border-white"
                            : "text-white/40 border-transparent hover:text-white/70"
                        }`}
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        {tabName}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Tab Panels */}
                  <div className="min-h-[140px] text-[13.5px] leading-relaxed text-white/50" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    {currentTab === "Challenge" && (
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white">The Problem</h4>
                        <p>{project.problem}</p>
                      </div>
                    )}

                    {currentTab === "Solution" && (
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white">The Strategy</h4>
                        <p>{project.solution}</p>
                        <p className="text-white/40 mt-1">{project.uiUxFocus}</p>
                      </div>
                    )}

                    {currentTab === "Outcome" && (
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white">Project Outcome</h4>
                        <p className="text-white/80 font-medium">{project.outcome}</p>
                      </div>
                    )}

                    {currentTab === "Role & Tech" && (
                      <div className="flex flex-col gap-3">
                        <div>
                          <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white/40 mb-1.5">Responsibilities</h4>
                          <ul className="list-disc pl-4 space-y-1 text-white/60">
                            {project.myRole.slice(0, 4).map((roleText, i) => (
                              <li key={i}>{roleText}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-2">
                          <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-white/40 mb-1.5">Tech Stack</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/50 font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* GitHub Link */}
                  {project.github && (
                    <div className="mt-5 pt-4 border-t border-white/[0.04]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white/80 hover:text-white transition-colors"
                        style={{ fontFamily: '"Satoshi", sans-serif' }}
                      >
                        GitHub Project Repository ↗
                      </a>
                    </div>
                  )}
                </div>

                {/* Gallery Showcase Column */}
                <div className={`lg:col-span-6 flex flex-col gap-3 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0e]">
                    <Image
                      src={project.screenshots[activeScreenshot[project.id] || 0]}
                      alt={`${project.title} Interface`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx < 2}
                      className="object-cover object-top filter saturate-[0.8] brightness-[0.75]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Sub-thumbnail selector dots/previews */}
                  {project.screenshots.length > 1 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.screenshots.map((screen, idxScreen) => (
                        <button
                          key={idxScreen}
                          onClick={() => setActiveScreenshot((prev) => ({ ...prev, [project.id]: idxScreen }))}
                          className={`relative w-14 sm:w-16 aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                            (activeScreenshot[project.id] || 0) === idxScreen
                              ? "border-white/60 scale-[0.98]"
                              : "border-white/[0.06] opacity-40 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={screen}
                            alt="Screenshot toggle"
                            fill
                            sizes="64px"
                            className="object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Technology Showcase Section */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Technology Showcase
          </h2>
          <p className="text-[13.5px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            We leverage reliable modern technologies to build solid digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {["React", "Next.js", "Node.js", "MongoDB", "Supabase", "Python", "OpenAI API", "Tailwind CSS", "PHP", "ASP.NET MVC", "MySQL", "C#", "Firebase", "FastAPI", "scikit-learn"].map((tech) => (
            <div
              key={tech}
              className="bg-[#0b0b0d] border border-white/[0.06] rounded-xl px-4 py-2 text-[13px] font-semibold text-white/60 hover:text-white hover:border-white/20 transition-all cursor-default"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Client Results Section */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { metric: "40% Faster", subtitle: "Operational speeds", desc: "Digital systems reduce transaction bottlenecks and speed up inventory tracking." },
            { metric: "300% Boost", subtitle: "Load times optimized", desc: "Automated caching setups and asset compilation keep performance solid." },
            { metric: "50% Less", subtitle: "Manual admin work", desc: "Centralized databases, automated reports, and payment interfaces replace paper." }
          ].map((result, idx) => (
            <div key={idx} className="bg-[#0b0b0d] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-[32px] font-black text-white leading-none tracking-tight font-mono mb-1">{result.metric}</div>
                <div className="text-[12px] font-bold uppercase tracking-wider text-white/60 mb-3" style={{ fontFamily: '"Satoshi", sans-serif' }}>{result.subtitle}</div>
                <p className="text-[13px] leading-relaxed text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>{result.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Development Process Section */}
      <section className="perf-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight mb-2" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Development Process
          </h2>
          <p className="text-[13.5px] text-white/40" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            A structured roadmap we follow from discovery workshop to staging release.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { step: "01", name: "Discovery", desc: "Defining project specifications." },
            { step: "02", name: "Strategy", desc: "Data modeling and technology stack." },
            { step: "03", name: "Design", desc: "Interactive wireframes and layouts." },
            { step: "04", name: "Development", desc: "Writing clean, structured code." },
            { step: "05", name: "Launch", desc: "Testing, staging audits, and deployment." },
            { step: "06", name: "Support", desc: "Routine maintenance and speed checks." }
          ].map((proc, idx) => (
            <div key={idx} className="bg-[#0c0c0e] border border-white/[0.06] rounded-2xl p-4 flex flex-col gap-3">
              <span className="text-[20px] font-black text-white/10 font-mono leading-none">{proc.step}</span>
              <div>
                <h4 className="text-[13px] font-bold text-white mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.name}</h4>
                <p className="text-[11.5px] text-white/40 leading-relaxed font-medium" style={{ fontFamily: '"Satoshi", sans-serif' }}>{proc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="perf-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-white/[0.04] relative overflow-hidden">
        <div className="perf-glow pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-white/[0.02] blur-[100px]" />

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-[26px] sm:text-[34px] font-bold tracking-tight mb-4" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Have a project in mind?
          </h2>
          <p className="text-[14.5px] text-white/45 mb-7 font-medium leading-relaxed" style={{ fontFamily: '"Satoshi", sans-serif' }}>
            Let&apos;s build something exceptional. Tell us about your idea and get a custom development plan.
          </p>
          <a
            href="mailto:hello@nexzoa.com"
            className="inline-flex items-center justify-center rounded-[12px] bg-white px-7 py-3.5 text-[14px] font-bold text-black hover:bg-white/90 transition-colors"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
