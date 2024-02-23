/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.annihil.us','gateway.marvel.com'],
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
}

export default nextConfig;
