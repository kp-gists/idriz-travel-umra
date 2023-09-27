import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MetaData from '../Metadata';
import { cn } from '@/lib/utils';
import ScrollTop from '../ScrollTop';
import WhatsappContact from '../contact/WhatsappContact';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: Props) => {
  const description = `Idriz Travel Umra është një agjenci udhëtimesh e fokusuar në shërbimet me Arabinë Saudite: viza, umre, përkthime, kurbane`;

  const keywords = `Paketa umre,mekka, medina,Kërkesat për umre,Viza umre,Ritualet umres,Udhëtimi i umres, Fluturimet umre, Hotele umre,Rezervimi i umres,Fluturimet hotelet umra`;

  return (
    <>
      <MetaData
        title='Idriz Çela'
        description={description}
        keywords={keywords}
      />
      <main className={cn(className, 'relative w-full')}>
        <Navbar />

        <div className='max-w-[1600px] mx-auto h-full px-3 md:px-6  overflow-hidden'>
          {children}
          <Footer />
        </div>
        <ScrollTop />
        <div className='sticky bottom-5 w-14 h-14 p-1 left-full z-[10001] '>
          <WhatsappContact />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
