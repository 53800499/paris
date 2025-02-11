/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Désactive l'optimisation des images
  },
};

module.exports = nextConfig;
