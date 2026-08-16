import React from "react";
import { TechCompany } from "@/lib/sriLankaTechData";

interface CompanyCardProps {
  company: TechCompany;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const isNexzoa = company.isNexzoa;

  return (
    <article
      className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
        isNexzoa
          ? "border-emerald-500/30 bg-emerald-950/10 shadow-[0_0_30px_rgba(16,185,129,0.08)]"
          : "border-white/[0.08] bg-[#0d0d12]/90 hover:border-white/[0.18] hover:bg-[#121218]"
      }`}
    >
      <div>
        {/* Top bar with category & verification */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/70 tracking-wider uppercase">
            {company.categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Verified: {company.lastVerified}
          </span>
        </div>

        {/* Company Title & Website */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              {company.name}
              {isNexzoa && (
                <span className="rounded-md bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  Publisher Profile
                </span>
              )}
            </h3>
            <p className="text-xs text-white/45 mt-1 flex items-center gap-1">
              📍 {company.location}
              {company.foundedYear && <span> · Est. {company.foundedYear}</span>}
            </p>
          </div>
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              aria-label={`Visit official website of ${company.name}`}
            >
              Website ↗
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/60 mb-5 font-light">
          {company.description}
        </p>

        {/* Specializations / Tech Tags */}
        <div className="mb-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30 mb-2">
            Key Focus Areas
          </p>
          <div className="flex flex-wrap gap-1.5">
            {company.specialization.map((spec, i) => (
              <span
                key={i}
                className="rounded-md bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 text-xs text-white/75 font-mono"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Key Products if any */}
        {company.keyProducts && company.keyProducts.length > 0 && (
          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30 mb-2">
              Notable Products / Platforms
            </p>
            <div className="flex flex-wrap gap-1.5">
              {company.keyProducts.map((prod, i) => (
                <span
                  key={i}
                  className="rounded-md bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 text-xs text-purple-300 font-mono"
                >
                  {prod}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Source info */}
      <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-white/40">
        <span>Source: {company.source}</span>
        <span className="font-medium text-white/60">Target: {company.targetMarket}</span>
      </div>
    </article>
  );
}
