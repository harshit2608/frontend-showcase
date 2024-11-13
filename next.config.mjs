/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/frontend-showcase/' : '',
  basePath: isProd ? '/frontend-showcase' : '',
  output: 'export'
};

export default nextConfig;
