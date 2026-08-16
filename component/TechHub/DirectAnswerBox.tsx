import React from "react";

interface DirectAnswerBoxProps {
  question: string;
  directAnswer: string;
  supportingFacts?: string[];
  lastUpdated?: string;
}

export function DirectAnswerBox({
  question,
  directAnswer,
  supportingFacts,
  lastUpdated = "August 2025",
}: DirectAnswerBoxProps) {
  return (
    <div className="relative my-8 overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-950/10 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="rounded-md bg-purple-500/20 border border-purple-500/30 px-2.5 py-1 text-[11px] font-bold text-purple-300 uppercase tracking-widest">
          Key Takeaway &amp; Summary
        </span>
        <span className="text-xs text-white/40">Verified as of {lastUpdated}</span>
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
        {question}
      </h2>

      {/* Direct 40-70 word answer optimized for search engine featured snippets & LLM answer engines */}
      <p className="text-sm sm:text-base leading-relaxed text-white/90 font-normal mb-4">
        {directAnswer}
      </p>

      {supportingFacts && supportingFacts.length > 0 && (
        <ul className="space-y-1.5 border-t border-white/[0.08] pt-4 text-xs sm:text-sm text-white/70">
          {supportingFacts.map((fact, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-purple-400 font-bold shrink-0">✓</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
