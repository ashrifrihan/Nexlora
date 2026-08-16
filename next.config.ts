import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ─── Non-www → www (canonical domain) ──────────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "nexzoa.dev" }],
        destination: "https://www.nexzoa.dev/:path*",
        permanent: true,
      },

      // ─── Old Vercel deployment → canonical ──────────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "nexzoa-io.vercel.app" }],
        destination: "https://www.nexzoa.dev/:path*",
        permanent: true,
      },

      // ─── Legacy brand redirects (sources preserved, destinations updated) ───
      // Old brand: nexlorasolutions.com → www.nexzoa.dev
      {
        source: "/:path*",
        has: [{ type: "host", value: "nexlorasolutions.com" }],
        destination: "https://www.nexzoa.dev/:path*",
        permanent: true,
      },
      // Old brand: nexlora.in → www.nexzoa.dev
      {
        source: "/:path*",
        has: [{ type: "host", value: "nexlora.in" }],
        destination: "https://www.nexzoa.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
