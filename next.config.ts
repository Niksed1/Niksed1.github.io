import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disables image optimization
  },
};

export default nextConfig;
