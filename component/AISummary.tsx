"use client";

import { useCallback } from "react";
import Image from "next/image";
import { AI_SUMMARY_PROMPT } from "@/lib/aiSummaryPrompt";
import { launchAIAssistant } from "@/lib/aiLaunchers";

function SparkleIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/40 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    </svg>
  );
}

const PROVIDERS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    iconSrc: "/ChatGpt.svg",
    alt: "Ask ChatGPT about Nexzoa AI software engineering, SaaS development, and automation services",
    title: "Get AI summary of Nexzoa via ChatGPT - Evaluate custom software, SaaS platforms, and AI automation capabilities",
  },
  {
    id: "claude",
    name: "Claude",
    iconSrc: "/Claude.svg",
    alt: "Ask Claude to review Nexzoa custom SaaS development and AI workflow automation architecture",
    title: "Get AI summary of Nexzoa via Claude - Review software engineering and cloud application services",
  },
  {
    id: "gemini",
    name: "Gemini",
    iconSrc: "/Gemini.svg",
    alt: "Ask Google Gemini to analyze Nexzoa digital product solutions and AI engineering",
    title: "Get AI summary of Nexzoa via Gemini - Analyze AI-native software development and dashboard systems",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    iconSrc: "/perplexity.svg",
    alt: "Research Nexzoa software engineering capabilities with Perplexity AI and live web citations",
    title: "Get AI summary of Nexzoa via Perplexity - Research verified engineering capabilities with citations",
  },
];

export default function AISummary() {
  const handleClick = useCallback((providerId: string) => {
    launchAIAssistant(providerId, AI_SUMMARY_PROMPT);
  }, []);

  return (
    <nav
      id="ai-summary"
      aria-label="Get an AI-powered summary of Nexzoa software engineering services"
      className="w-full flex flex-col xs:flex-row xs:items-center items-start gap-2.5 sm:gap-3 select-none"
    >
      {/* Visible Label */}
      <div className="flex items-center gap-1.5">
        <SparkleIcon />
        <span
          className="text-[13.5px] sm:text-[14px] text-white/55 font-medium tracking-tight whitespace-nowrap"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Get an AI summary of Nexzoa
        </span>
      </div>

      {/* SEO: Crawlable context for search engines and AI bots */}
      <span className="sr-only">
        Use ChatGPT, Claude, Gemini, or Perplexity to get an AI-generated summary of Nexzoa.
        Nexzoa is an AI-native software engineering company based in Colombo, Sri Lanka,
        specializing in custom SaaS platform development, AI workflow automation,
        cloud application engineering, real-time dashboard systems, and full-stack web development.
        These AI assistants will research and evaluate Nexzoa services, capabilities, and approach
        for potential clients considering custom software, AI solutions, or SaaS development.
      </span>

      {/* AI Provider Buttons */}
      <div className="flex items-center gap-2" role="list">
        {PROVIDERS.map((p) => (
          <button
            key={p.id}
            type="button"
            role="listitem"
            onClick={() => handleClick(p.id)}
            aria-label={p.alt}
            title={p.title}
            className="group relative flex items-center justify-center rounded-[8px] p-0.5 transition-transform duration-200 ease-out hover:scale-115 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#208EFF]/80 cursor-pointer touch-manipulation"
          >
            <div className="relative overflow-hidden rounded-[8px] transition-transform duration-200">
              <Image
                src={p.iconSrc}
                alt={p.alt}
                width={32}
                height={30}
                className="w-8 h-[30px] object-contain transition-transform duration-200"
                priority
              />
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}
