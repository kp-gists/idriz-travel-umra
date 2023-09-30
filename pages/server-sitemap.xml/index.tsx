import { getServerSideSitemapLegacy } from 'next-sitemap';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemapLegacy(ctx, [
    {
      loc: 'https://idriztravelumra.com',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      // priority
    },
  ]);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
