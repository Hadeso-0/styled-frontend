/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/canceled',
        to: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
