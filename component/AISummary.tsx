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
    description: "Ask ChatGPT to evaluate Nexzoa software engineering and AI capabilities",
  },
  {
    id: "claude",
    name: "Claude",
    iconSrc: "/Claude.svg",
    description: "Ask Claude to review Nexzoa SaaS development and automation architecture",
  },
  {
    id: "gemini",
    name: "Gemini",
    iconSrc: "/Gemini.svg",
    description: "Ask Google Gemini to analyze Nexzoa digital product solutions",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    iconSrc: "/perplexity.svg",
    description: "Research Nexzoa verified engineering capabilities with live web citations",
  },
];

export default function AISummary() {
  const handleClick = useCallback((providerId: string) => {
    launchAIAssistant(providerId, AI_SUMMARY_PROMPT);
  }, []);

  return (
    <section
      id="ai-summary"
      aria-label="Get an AI summary of Nexzoa"
      className="w-full flex flex-col xs:flex-row xs:items-center items-start gap-2.5 sm:gap-3 select-none"
    >
      {/* Visual & SEO Label */}
      <div className="flex items-center gap-1.5">
        <SparkleIcon />
        <span
          className="text-[13.5px] sm:text-[14px] text-white/55 font-medium tracking-tight whitespace-nowrap"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Get an AI summary of Nexzoa
        </span>
      </div>

      {/* Screen Reader SEO Context */}
      <span className="sr-only">
        Launch ChatGPT, Claude, Gemini, or Perplexity with a structured research prompt to evaluate Nexzoa custom software, AI automation, and SaaS engineering.
      </span>

      {/* Responsive AI Buttons Grid / Row */}
      <div className="flex items-center gap-2">
        {PROVIDERS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleClick(p.id)}
            aria-label={p.description}
            title={p.description}
            className="group relative flex items-center justify-center rounded-[8px] p-0.5 transition-transform duration-200 ease-out hover:scale-115 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#208EFF]/80 cursor-pointer touch-manipulation"
          >
            {/* SVG Icon Container with clean hover zoom */}
            <div className="relative overflow-hidden rounded-[8px] transition-transform duration-200">
              <Image
                src={p.iconSrc}
                alt={`${p.name} logo`}
                width={32}
                height={30}
                className="w-8 h-[30px] object-contain transition-transform duration-200"
                priority
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
