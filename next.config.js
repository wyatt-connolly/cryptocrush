/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "assets.coingecko.com",
      "images.unsplash.com",
      "upload.wikimedia.org",
      "s2.coinmarketcap.com",
    ],
  },
};

module.exports = nextConfig;
