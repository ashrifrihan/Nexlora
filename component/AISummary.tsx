"use client";

import { useCallback } from "react";
import { AI_SUMMARY_PROMPT } from "@/lib/aiSummaryPrompt";
import { launchAIAssistant } from "@/lib/aiLaunchers";

/* ─── Brand SVG Icons (Accurate recognizable logos in clean white) ─── */

function ChatGPTIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.602 1.5v3.001l-2.602 1.5-2.602-1.5z" />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M4.709 12.762l2.387-4.13a.52.52 0 0 1 .9 0l2.386 4.13a.52.52 0 0 1-.45.78H5.16a.52.52 0 0 1-.45-.78z" />
      <path d="M10.226 7.37l2.387-4.132a.52.52 0 0 1 .9 0l2.387 4.132a.52.52 0 0 1-.45.78h-4.774a.52.52 0 0 1-.45-.78z" />
      <path d="M13.618 12.762l2.387-4.13a.52.52 0 0 1 .9 0l2.386 4.13a.52.52 0 0 1-.45.78h-4.773a.52.52 0 0 1-.45-.78z" />
      <path d="M7.484 18.155l2.387-4.131a.52.52 0 0 1 .9 0l2.387 4.131a.52.52 0 0 1-.45.78H7.934a.52.52 0 0 1-.45-.78z" />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

function PerplexityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 2L8.5 8H4l4 4-4 4h4.5L12 22l3.5-6H20l-4-4 4-4h-4.5L12 2zm0 4.5L13.5 9h2.3l-2 2 2 2h-2.3L12 17.5 10.5 15H8.2l2-2-2-2h2.3L12 6.5z" />
    </svg>
  );
}

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
      className="text-white/40"
    >
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    </svg>
  );
}

const PROVIDERS = [
  { id: "chatgpt", name: "ChatGPT", icon: () => <ChatGPTIcon /> },
  { id: "claude", name: "Claude", icon: () => <ClaudeIcon /> },
  { id: "gemini", name: "Gemini", icon: () => <GeminiIcon /> },
  { id: "perplexity", name: "Perplexity", icon: () => <PerplexityIcon /> },
];

export default function AISummary() {
  const handleClick = useCallback((providerId: string) => {
    launchAIAssistant(providerId, AI_SUMMARY_PROMPT);
  }, []);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-1.5 select-none">
        <SparkleIcon />
        <span
          className="text-[14px] text-white/50 font-medium tracking-tight"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Get an AI summary of Nexzoa
        </span>
      </div>

      <div className="flex items-center gap-[6px]">
        {PROVIDERS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleClick(p.id)}
            aria-label={`Ask ${p.name} to summarize Nexzoa`}
            title={`Ask ${p.name}`}
            className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_16px_rgba(52,211,153,0.35)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
            }}
          >
            {p.icon()}
          </button>
        ))}
      </div>
    </div>
  );
}
