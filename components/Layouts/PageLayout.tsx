import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
};

const PageLayout = ({ children, title, description, imageUrl }: Props) => {
  const metaTilte = `${title} | Idriz Çela`;
  return (
    <>
      <Head>
        <title>{metaTilte}</title>
      </Head>
      <main>
        <Navbar />
        <div className='max-w-7xl mx-auto h-screen px-6 '>
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default PageLayout;
