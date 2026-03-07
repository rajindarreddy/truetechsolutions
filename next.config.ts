import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/truetechsolutions",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
