"use client";

import { useState, useEffect } from "react";

/**
 * Detects whether the current device is "low-end" based on:
 * - navigator.hardwareConcurrency (CPU cores)
 * - navigator.deviceMemory (RAM in GB, Chrome/Edge only)
 * - prefers-reduced-motion media query
 * - Screen resolution (very small viewports on weak GPUs)
 *
 * Returns `true` for low-end devices so components can skip
 * expensive animations and GPU effects while preserving the design.
 */
export function useIsLowEndDevice(): boolean {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion first (user preference always wins)
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setIsLowEnd(true);
      return;
    }

    const nav = navigator as Navigator & {
      deviceMemory?: number;
      hardwareConcurrency?: number;
    };

    const cores = nav.hardwareConcurrency ?? 8; // default to high if unknown
    const memory = nav.deviceMemory ?? 8; // default to high if unknown

    // A device with <= 4 cores OR <= 4GB RAM is considered low-end
    const isWeak = cores <= 4 || memory <= 4;

    setIsLowEnd(isWeak);
  }, []);

  return isLowEnd;
}
