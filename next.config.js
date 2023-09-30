/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  // ...nextTranslate(),
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.idriztravelumra.com' }],
      destination: 'https://idriztravelumra.com/:path*',
      permanent: true,
    },
    {
      source: '/',
      has: [{ type: 'host', value: 'www.idriztravelumra.com' }],
      destination: 'https://idriztravelumra.com/',
      permanent: true,
    },
    {
      source: '/umrah',
      destination: '/umra',
      permanent: true,
    },
    {
      source: '/example',
      destination: '/',
      permanent: true,
    },

    {
      source: '/umrah/umre-tetor-2023',
      destination: '/umra/oferte-umre-nga-05-tetor-deri-16-tetor-viti-2023',
      permanent: true,
    },
    {
      source: '/umrah/umre-tetor-2023-1',
      destination: '/umra/oferte-umre-nga-12-tetor-deri-23-tetor-viti-2023',
      permanent: true,
    },
    {
      source: '/umrah/umrah-tetor-nentor-2023',
      destination: '/umra/oferte-umre-nga-19-tetor-deri-30-tetor-viti-2023',
      permanent: true,
    },
    {
      source: '/umrah/umre-tetor-nentor-2023-1',
      destination: '/umra/oferte-umre-nga-26-tetor-deri-6-nentor-viti-2023',
      permanent: true,
    },
    {
      source: '/umrah/oferte-umre-nga-05-tetor-deri-16-tetor-viti-2023',
      destination: '/umra/oferte-umre-nga-05-tetor-deri-16-tetor-viti-2023',
      permanent: true,
    },
    {
      source: '/umrah/oferte-umre-nga-12-tetor-deri-23-tetor-viti-2023',
      destination: '/umra/oferte-umre-nga-12-tetor-deri-23-tetor-viti-2023',
      permanent: true,
    },
    {
      source: '/umrah/oferte-umre-nga-19-tetor-deri-30-tetor-viti-2023',
      destination: '/umra/oferte-umre-nga-19-tetor-deri-30-tetor-viti-2023',
      permanent: true,
    },
    {
      source: '/umrah/oferte-umre-nga-26-tetor-deri-6-nentor-viti-2023',
      destination: '/umra/oferte-umre-nga-26-tetor-deri-6-nentor-viti-2023',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
