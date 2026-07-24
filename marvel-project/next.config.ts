import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.superherodb.com",
            },
        ],
  },
  reactCompiler: true,
};

export default nextConfig;
