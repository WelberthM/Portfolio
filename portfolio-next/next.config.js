/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cinema-em-cena.nyc3.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
