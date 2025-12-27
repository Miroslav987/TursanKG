/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Разрешает любые домены по HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // Разрешает любые домены по HTTP
      },
    ],
  },
};

module.exports = nextConfig;