"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AI_SUMMARY_PROMPT } from "@/lib/aiSummaryPrompt";

/* ─── Brand-accurate SVG Icons (compact, recognizable) ─── */

function ChatGPTIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.602 1.5v3.001l-2.602 1.5-2.602-1.5z" />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M14.59 3.007a.803.803 0 0 0-1.09.31L9.143 11.05l-3.21-5.557a.804.804 0 0 0-1.392.804l3.971 6.876a.803.803 0 0 0 1.39.001L14.9 4.096a.803.803 0 0 0-.31-1.09z" />
      <path d="M18.667 9.005a.803.803 0 0 0-1.09.31l-3.465 6.003-1.863-3.226a.804.804 0 0 0-1.392.804l2.556 4.426a.804.804 0 0 0 1.39.001l4.174-7.228a.803.803 0 0 0-.31-1.09z" />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

function PerplexityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M7.51 3v5.67H3.07v7.66h4.44V21l4.42-4.63h.14L16.49 21v-4.67h4.44V8.67h-4.44V3l-4.42 4.65h-.14L7.51 3zm1.18 6.85V5.91l3.24 3.39v5.88l-3.24 3.39v-3.94H4.25V9.85h4.44zm7.62 0h4.44v4.78h-4.44v3.94l-3.24-3.39V9.3l3.24-3.39v3.94z" />
    </svg>
  );
}

/* ─── Sparkle Icon ─── */
function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    </svg>
  );
}

interface AIProvider {
  id: string;
  name: string;
  bg: string;
  url: string;
  icon: () => React.ReactNode;
}

const PROVIDERS: AIProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    bg: "#1a1a1a",
    url: "https://chatgpt.com/",
    icon: () => <ChatGPTIcon />,
  },
  {
    id: "claude",
    name: "Claude",
    bg: "#D97706",
    url: "https://claude.ai/",
    icon: () => <ClaudeIcon />,
  },
  {
    id: "gemini",
    name: "Gemini",
    bg: "#4285F4",
    url: "https://gemini.google.com/",
    icon: () => <GeminiIcon />,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    bg: "#D97706",
    url: "https://www.perplexity.ai/",
    icon: () => <PerplexityIcon />,
  },
];

export default function AISummary() {
  const [toast, setToast] = useState<string | null>(null);

  const handleClick = useCallback(async (provider: AIProvider) => {
    try {
      await navigator.clipboard.writeText(AI_SUMMARY_PROMPT);
    } catch { /* fallback: user manually pastes */ }

    window.open(provider.url, "_blank", "noopener,noreferrer");

    setToast(`Prompt copied - paste it into ${provider.name}`);
    setTimeout(() => setToast(null), 4000);
  }, []);

  return (
    <>
      {/* Compact inline row - matches Zyner's exact layout */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5">
          <SparkleIcon />
          <span
            className="text-[14px] text-white/50 font-medium tracking-tight"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Get an AI summary of Nexzoa
          </span>
        </div>

        <div className="flex items-center gap-2">
          {PROVIDERS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => handleClick(p)}
              aria-label={`Ask ${p.name} to summarize Nexzoa`}
              title={`Ask ${p.name}`}
              className="w-[30px] h-[30px] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-125 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1 focus-visible:ring-offset-black cursor-pointer"
              style={{ backgroundColor: p.bg }}
            >
              {p.icon()}
            </button>
          ))}
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 z-[999] rounded-xl border border-white/10 bg-[#111115]/95 backdrop-blur-xl px-4 py-3 text-[13px] text-white/80 shadow-[0_16px_48px_rgba(0,0,0,0.8)] flex items-center gap-2.5"
            role="status"
            aria-live="polite"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-[10px] shrink-0">
              ✓
            </span>
            {toast}
            <button
              onClick={() => setToast(null)}
              className="text-white/30 hover:text-white/70 ml-1 text-xs"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
