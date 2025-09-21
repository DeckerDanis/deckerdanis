import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // <-- 이 라인을 다시 추가하세요.
};

export default nextConfig;