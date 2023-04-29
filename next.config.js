/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "assets.coingecko.com",
      "images.unsplash.com",
      "upload.wikimedia.org",
      "s2.coinmarketcap.com",
      "images.clerk.dev",
    ],
  },
};

module.exports = nextConfig;
