import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        satoshi: ["Satoshi", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Instrument Serif", "system-ui", "serif"],
        mono: ["Fragment Mono", "monospace"],
      },
    },
  },
} satisfies Config;
