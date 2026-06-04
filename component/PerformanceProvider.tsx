"use client";

import { useEffect } from "react";
import { useIsLowEndDevice } from "@/lib/useDevicePerformance";

/**
 * Invisible component that sets data-low-end="true" on <html>
 * when a low-end device is detected. This activates the CSS
 * performance rules in globals.css that disable backdrop-blur
 * and heavy decorative blur effects.
 */
export function PerformanceProvider() {
  const isLowEnd = useIsLowEndDevice();

  useEffect(() => {
    if (isLowEnd) {
      document.documentElement.setAttribute("data-low-end", "true");
    } else {
      document.documentElement.removeAttribute("data-low-end");
    }
  }, [isLowEnd]);

  return null;
}
