/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cheerful-albatross-826.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
