/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { domains: ["assets.coingecko.com", "images.unsplash.com"] },
};

module.exports = nextConfig;
