/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["src"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "pagead2.googlesyndication.com",
      "googleads.g.doubleclick.net",
      "www.google.com",
      "www.googletagservices.com",
    ],
  },
  serverExternalPackages: ["sharp"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        "node:buffer": "commonjs node:buffer",
        "node:async_hooks": "commonjs node:async_hooks",
      });
    }
    return config;
  },
};

module.exports = nextConfig;
