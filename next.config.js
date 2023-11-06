
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
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
