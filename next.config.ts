import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/design-rails-landing/index.html',
      },
    ];
  },
};

export default nextConfig;
