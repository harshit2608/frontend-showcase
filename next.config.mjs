/** @type {import('next').NextConfig} */

const isProductionEnv = process.env.NODE_ENV == 'production';

const nextConfig = {
  basePath: isProductionEnv ? '/frontend-showcase' : '',
  output: 'export',
  assetPrefix: isProductionEnv ? '/frontend-showcase/' : '',
};

export default nextConfig;
