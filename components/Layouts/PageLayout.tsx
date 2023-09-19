import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MetaData from '../Metadata';

type Props = {
  children: React.ReactNode;
  title: string;
  description?: string;
  imageUrl?: string;
  keywords?: string;
};

const PageLayout = ({
  children,
  title,
  keywords,
  description,
  imageUrl,
}: Props) => {
  const keyword = keywords + 'umrah, haj, mekka, medina, travel';

  return (
    <>
      <MetaData title={title} description={description} keyword={keyword} />
      <main>
        <Navbar />

        <div className='w-full h-full'>
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default PageLayout;
