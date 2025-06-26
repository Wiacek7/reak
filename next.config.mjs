/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'm.media-amazon.com',
      'www.imdb.com',
      'thelagosreview.ng' // Added for Mokalik poster
    ],
  },
}

export default nextConfig