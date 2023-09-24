import PageLayout from '@/components/Layouts/PageLayout';
import { Home } from 'lucide-react';
import Link from 'next/link';
import makkahIllustration from '@/assets/imgs/mecca-illustrator.jpg';

import React from 'react';

const NotFoundPage = () => {
  return (
    <PageLayout title='Not Found'>
      <section
        className='h-screen w-full flex items-start justify-center pageMekkaLive p-8'
        style={{
          backgroundImage: `url(${makkahIllustration.src})`,
        }}
      >
        <Link href='https://idriztravelumra.com'>
          <h1 className='text-black text-xl flex font-semibold capitalize items-center my-8 bg-white/40 px-4 py-2 rounded-sm hover:scale-105  hover:bg-gray-300 hover:text-black'>
            shko tek faqa kryesore <Home className='mx-1' />{' '}
          </h1>
        </Link>
      </section>
    </PageLayout>
  );
};

export default NotFoundPage;
