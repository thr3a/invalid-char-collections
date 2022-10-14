/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && 'invalid-char-collections',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
