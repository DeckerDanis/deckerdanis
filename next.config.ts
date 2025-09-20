import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath 라인 삭제됨
  images: {
    unoptimized: true,
  },
};

export default nextConfig;