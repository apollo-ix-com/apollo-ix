import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",      // The path you want to redirect from
        destination: "/home",     // The path you want to redirect to
        permanent: true       // Use true for 301 (permanent) or false for 302 (temporary)
      }
    ];
  }
};

export default nextConfig;
