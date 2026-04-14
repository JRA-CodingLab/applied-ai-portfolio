import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/applied-ai-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
