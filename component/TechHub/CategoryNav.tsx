import React from "react";
import Link from "next/link";

interface CategoryNavProps {
  activeCategory: "all" | "ai" | "software" | "saas" | "startups";
}

const CATEGORY_LINKS = [
  { id: "all", label: "All Ecosystem", href: "/sri-lanka-tech" },
  { id: "ai", label: "AI Companies", href: "/sri-lanka-tech/ai-companies" },
  { id: "software", label: "Software Companies", href: "/sri-lanka-tech/software-companies" },
  { id: "saas", label: "SaaS Companies", href: "/sri-lanka-tech/saas-companies" },
  { id: "startups", label: "Tech Startups", href: "/sri-lanka-tech/startups" },
];

export function CategoryNav({ activeCategory }: CategoryNavProps) {
  return (
    <nav
      aria-label="Sri Lanka Tech Hub Categories"
      className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none"
    >
      {CATEGORY_LINKS.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <Link
            key={cat.id}
            href={cat.href}
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                : "bg-white/[0.04] text-white/70 border border-white/[0.08] hover:bg-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </nav>
  );
}
