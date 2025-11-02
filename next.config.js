/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap", "lucide-react"]
  }
};

module.exports = nextConfig;
