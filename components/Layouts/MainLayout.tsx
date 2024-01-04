import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MetaData from '../Metadata';
import { cn } from '@/lib/utils';
import ScrollTop from '../ScrollTop';
import WhatsappContact from '../contact/WhatsappContact';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: Props) => {
  const description = `Idriz Travel Umra është një agjenci udhëtimesh e fokusuar në shërbimet me Arabinë Saudite: viza, umre, përkthime, kurbane. Oferta Umre.Mundeson vizita në Mekke • Medine • Arafat • Muzdelife • Mina • Hira • Kuba • Uhud • Masjid Profetit (a.s)`;

  const keywords = `umreja, Paketa umre,mekka, medina,Kërkesat për umre,Viza umre,Ritualet umres,Udhëtimi i umres, Fluturimet umre, Hotele umre,Rezervimi i umres,Fluturimet hotelet umra`;

  return (
    <>
      <MetaData
        title='Eja dhe ti në umre'
        description={description}
        keywords={keywords}
      />

      <main className={cn(className, 'relative w-full')}>
        <Link
          href={'/ramadan/umre-ramazan'}
          className='h-10 bg-cyan-100 flex justify-center items-center gap-1 sticky  top-0 z-50  text-sm md:text-lg'
        >
          <CalendarCheck className='w-6 h-6 text-green-800' />
          <h1 className='text-center uppercase font-semibold'>
            Umre ne Ramazan 2024
          </h1>
        </Link>
        <Navbar isMainLayout={true} />

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
