import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nexlorasolutions.com" }],
        destination: "https://nexzoa.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "nexlora.in" }],
        destination: "https://nexzoa.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
