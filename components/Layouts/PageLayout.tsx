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
  title = 'Umre',
  keywords,
  description,
  imageUrl,
}: Props) => {
  const keyword = keywords + 'umrah,umre, haj, mekka, medina, travel';

  return (
    <>
      <MetaData title={title} description={description} keywords={keyword} />
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
