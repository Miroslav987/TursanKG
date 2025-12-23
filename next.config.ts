/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vkplay.ru",
        pathname: "/**", 
      },
            {
        protocol: "https",
        hostname: "wallpaper.forfun.com",
        pathname: "/**",
      },
            {
        protocol: "https",
        hostname: "etalongame.com",
        pathname: "/**",
      },
            {
        protocol: "https",
        hostname: "4kwallpapers.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
