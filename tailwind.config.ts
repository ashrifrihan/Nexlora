import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Satoshi", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "system-ui", "serif"],
        mono: ["Fragment Mono", "monospace"],
        satoshi: ["Satoshi", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;
