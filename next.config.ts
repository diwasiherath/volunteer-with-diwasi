import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
