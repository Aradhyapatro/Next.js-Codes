/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/first',
        destination: '/',
        permanent: true
      },
      {
        source: '/first/:id',
        destination: '/second/:id',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
