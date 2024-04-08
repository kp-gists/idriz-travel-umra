import AdSense from '@/components/AdSense';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='sq-AL'>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9759738754003722'
          crossOrigin='anonymous'
        ></script>
        <AdSense pId='ca-pub-9759738754003722' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
