const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9001", // Explicitly add port for local development
        pathname: "/static/**" // Be specific about the path
      },
      {
        protocol: "https",
        hostname: "shoon-backend.onrender.com", // Add your Render backend
        pathname: "/static/**"
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
    // Optional but recommended for better caching
    minimumCacheTTL: 60,
    // If you're still having issues, you can temporarily add:
    // unoptimized: true
  },
}

module.exports = nextConfig