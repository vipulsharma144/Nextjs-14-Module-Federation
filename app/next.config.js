/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false, // changed from true to false

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    externalDir: true,
  },
  compiler: {
    // removeConsole: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        remotionTemplates: path.resolve(__dirname, "../video/"),
      },
    };
    return config;
  },
};

module.exports = nextConfig;
