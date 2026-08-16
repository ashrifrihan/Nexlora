import React from "react";
import { ECOSYSTEM_STATS } from "@/lib/sriLankaTechData";

export function EcosystemStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {ECOSYSTEM_STATS.map((stat, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/[0.08] bg-[#0c0c12] p-5 flex flex-col justify-between"
        >
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40 block mb-1">
              {stat.label}
            </span>
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              {stat.value}
            </div>
            <p className="text-xs text-white/55 leading-relaxed font-light">
              {stat.detail}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] text-white/30 truncate">
            Src: {stat.source}
          </div>
        </div>
      ))}
    </div>
  );
}
