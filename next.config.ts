import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 빌드하기 위한 설정
  output: 'export',

  // GitHub Pages 저장소 이름에 맞게 기본 경로 설정
  basePath: '/deckerdanis',

  // 정적 export 시 next/image 최적화 비활성화
  images: {
    unoptimized: true,
  },
};

export default nextConfig;