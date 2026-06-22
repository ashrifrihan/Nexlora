"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

/* ─── Estimator Data ─── */
const systemTypes = [
  { id: "saas", name: "Web App / SaaS", baseCost: 5000, baseDays: 20 },
  { id: "erp", name: "ERP / CRM Systems", baseCost: 8000, baseDays: 30 },
  { id: "ai", name: "AI Automation", baseCost: 4000, baseDays: 15 },
  { id: "mobile", name: "Mobile App", baseCost: 7000, baseDays: 25 }
];

const optionalFeatures = [
  { id: "auth", name: "User Auth & Roles", cost: 600, days: 4 },
  { id: "payment", name: "Stripe Payments", cost: 800, days: 3 },
  { id: "dashboard", name: "Analytics Dashboard", cost: 1200, days: 6 },
  { id: "apis", name: "3rd-Party API Sync", cost: 700, days: 4 },
  { id: "locales", name: "Multi-Language", cost: 400, days: 2 },
  { id: "search", name: "Advanced Search / DB", cost: 500, days: 3 }
];

export default function Estimator() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [selectedType, setSelectedType] = useState("saas");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "dashboard"]);

  const activeType = systemTypes.find(t => t.id === selectedType) || systemTypes[0];

  const totalCost = activeType.baseCost + optionalFeatures
    .filter(f => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.cost, 0);

  const totalDays = activeType.baseDays + optionalFeatures
    .filter(f => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.days, 0);

  const handleToggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleApplyScope = () => {
    const activeFeaturesText = optionalFeatures
      .filter(f => selectedFeatures.includes(f.id))
      .map(f => `  • ${f.name}`)
      .join("\n");
      
    const specText = `Type: ${activeType.name}\nFeatures Selected:\n${activeFeaturesText || "  • None"}\nEstimated Timeline: ${totalDays} Days\nEstimated Engineering: $${totalCost.toLocaleString()}`;
    
    localStorage.setItem("nexzoa_project_spec", specText);
    window.dispatchEvent(new CustomEvent("nexzoa_spec_update"));

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="estimator"
      className="relative w-full bg-black px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:px-12 lg:py-40 overflow-hidden border-t border-white/[0.03]"
      aria-labelledby="estimator-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/[0.01] blur-[140px] rounded-full" />
      </div>

      <div className="mx-auto w-full max-w-7xl relative z-10">
        
        {/* Header (Standardized Process Design) */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-white/[0.1] px-3 py-1.5"
            style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(13,13,13,0.4)" }}
          >
            <span
              className="text-[14px] font-medium tracking-[-0.02em] text-white"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              Interactive Scope Builder
            </span>
          </motion.div>

          <motion.h2
            id="estimator-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Estimate your custom{" "}
            <span className="bg-gradient-to-r from-white/90 via-white/60 to-white/40 bg-clip-text text-transparent">
              system details.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-[clamp(15px,2vw,20px)] font-medium leading-[1.4] tracking-[-0.02em] text-white/50"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Configure your core product layers to calculate development cost, timelines, and milestones instantly.
          </motion.p>
        </div>

        {/* Builder Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (7 cols): Configuration Panel */}
          <div className="lg:col-span-7 space-y-8 bg-white/[0.01] border border-white/[0.04] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between">
            
            {/* Step 1: System Type */}
            <div className="space-y-4">
              <h3 className="text-[16px] font-bold text-white/80 uppercase tracking-wider" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                1. Select System Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {systemTypes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedType(t.id)}
                    className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between gap-4 ${
                      selectedType === t.id
                        ? "bg-white/[0.04] border-white/20 shadow-md"
                        : "bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10"
                    }`}
                  >
                    <span className="text-[15px] font-bold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {t.name}
                    </span>
                    <span className="text-[12px] text-white/40 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Base: ${t.baseCost.toLocaleString()} / {t.baseDays} Days
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Integrations */}
            <div className="space-y-4 pt-4 border-t border-white/[0.04]">
              <h3 className="text-[16px] font-bold text-white/80 uppercase tracking-wider" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                2. Select Core Features &amp; Integrations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {optionalFeatures.map(f => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => handleToggleFeature(f.id)}
                      className={`p-4 rounded-xl text-left border transition-all duration-300 flex items-center justify-between gap-3 ${
                        isChecked
                          ? "bg-white/[0.04] border-white/20"
                          : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.025] hover:border-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                          isChecked ? "bg-white border-white text-black" : "border-white/20 bg-transparent"
                        }`}>
                          {isChecked && (
                            <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="text-black">
                              <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[13.5px] font-semibold text-white/80" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                          {f.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-white/30 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                        +${f.cost}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Live Calculations Card */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-[28px] border border-white/[0.08] bg-[#0c0c0e]/95 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.6)]">
              {/* Corner Flare */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-white/[0.02] to-transparent blur-[40px] pointer-events-none" />

              <div className="space-y-6">
                <div>
                  <h3 className="text-[18px] font-bold text-white tracking-tight" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Scope Output
                  </h3>
                  <p className="text-[13px] text-white/45 mt-1 font-light" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Live calculation based on specs selected.
                  </p>
                </div>

                {/* Estimate Blocks */}
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/[0.05]">
                  <div>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Est. Timeline
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      {totalDays} <span className="text-[14px] font-light text-white/40">Days</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      Est. Investment
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                      ${totalCost.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Planned Milestones */}
                <div className="space-y-3.5 pt-2">
                  <h4 className="text-[11.5px] font-bold tracking-wider text-white/40 uppercase" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                    Proposed Milestones
                  </h4>
                  <div className="space-y-3">
                    {[
                      { step: "Phase 1: Architecture & APIs", share: 0.3 },
                      { step: "Phase 2: Core Engineering & Views", share: 0.5 },
                      { step: "Phase 3: Testing & Operational Launch", share: 0.2 }
                    ].map((m, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <div className="flex justify-between text-[12.5px] font-medium text-white/60" style={{ fontFamily: '"Satoshi", sans-serif' }}>
                          <span>{m.step}</span>
                          <span className="text-white/30">${Math.round(totalCost * m.share).toLocaleString()}</span>
                        </div>
                        <div className="h-1 rounded bg-white/[0.04] overflow-hidden">
                          <div className="h-full bg-white/20 rounded" style={{ width: `${m.share * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApplyScope}
                className="w-full py-4 mt-8 rounded-xl bg-white text-black text-[14px] font-bold tracking-tight hover:bg-white/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.06)]"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                Apply Scope &amp; Initiate Project
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
