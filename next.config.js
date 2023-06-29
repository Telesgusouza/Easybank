/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
});

module.exports = withPWA({
  // next.js config
  nextConfig,
});

// module.exports = nextConfig
