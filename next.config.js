
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'back.altf1.ir',
        port: '80',
        pathname: '/files/**',
      },
    ],
  },
}

module.exports = nextConfig
