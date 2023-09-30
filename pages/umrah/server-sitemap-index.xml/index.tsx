// pages/category/server-sitemap-index.xml/index.tsx
import { ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { fetchUmrahTrips } from '@/lib/fetching';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const trips = await fetchUmrahTrips();

  const paths: ISitemapField[] = trips.data.data.map((item: any) => ({
    loc: `https://idriztravelumra.com/umrah/${item.attributes.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
  }));

  return getServerSideSitemapLegacy(ctx, paths);
};

export default function SitemapIndex() {}
