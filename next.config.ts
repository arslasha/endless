import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
    images: {
        domains: ['your-domain.com'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
};
export default nextConfig;
