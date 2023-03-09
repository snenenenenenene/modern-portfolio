/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      // This will cause an error
      allowFutureImage: true,
    },
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
