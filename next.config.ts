/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
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