/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "i.ibb.co",
            port: '',
          },
          {
            protocol: 'https',
            hostname: "avatars.githubusercontent.com",
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
