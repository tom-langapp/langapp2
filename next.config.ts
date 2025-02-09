import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  // output: "export", // Ensures Next.js generates static files for Capacitor
});

export default nextConfig;
