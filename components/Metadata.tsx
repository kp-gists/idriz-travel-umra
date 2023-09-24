import Head from 'next/head';
import { useRouter } from 'next/router';

const version = '1.0.0';

export interface IMetaData {
  title: string;
  image?: string;
  description?: string;
  author?: string;
  copyright?: string;
  siteName?: string;
  keywords?: string;
  generator?: string;
  robots?: string;
  ogType?: string;
  twitterCard?: string;
  published_time?: string;
}

const MetaData: React.FC<IMetaData> = ({
  title = 'Idriz Çela Travel Umra',
  image = 'https://strapi-cwk.s3.eu-south-1.amazonaws.com/idriz_travel_umre_c3bfebbe0b.jpg',
  description = '“Idriz Travel Umra” është një agjenci udhëtimesh e fokusuar në shërbimet me Arabinë Saudite',
  author = 'CWK Team',
  copyright = 'Sokol Paja',
  siteName = 'Idriz Travel Umra',
  generator = 'NextJS',
  robots = 'all',
  ogType = 'website',
  twitterCard = 'summary',
  published_time,
  keywords,
}) => {
  const { asPath } = useRouter();

  const url = 'https://idriztravelumra.com';
  const canonicalUrl = url + asPath;
  const titleWithBrandName = `${title} | Idriz Travel Umra`;

  return (
    <Head>
      <title>{titleWithBrandName}</title>
      <meta charSet='utf-8' />
      <meta name='app:version' content={version} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='author' href='humans.txt' />
      <meta name='title' content={titleWithBrandName} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='canonical' href={canonicalUrl} />
      <meta name='author' content={author} />
      <meta name='copyright' content={copyright} />
      <meta name='locale' content='en' />
      <meta name='generator' content={generator} />
      <meta name='base_url' content={url} />
      <meta name='robots' content={robots} />
      <meta name='language' content='en' />
      <meta name='twitter:widgets:csp' content='on' />
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={titleWithBrandName} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:url' content={url} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={titleWithBrandName} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content='en' />
      <meta
        name='google-site-verification'
        content='QN_KzbkLtZ8FDyINvnLZnmd8kbpqh6Y91s5laQBmRog'
      />
      <link
        type='text/plain'
        rel='author'
        href='https://codewithkoli.com/humans.txt'
      />
      {published_time && (
        <meta property='article:published_time' content={published_time} />
      )}
      <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
    </Head>
  );
};

export default MetaData;
