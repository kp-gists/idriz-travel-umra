import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MetaData from '../Metadata';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: Props) => {
  const description = `“Idriz Travel Umra” është një agjenci udhëtimesh e fokusuar në shërbimet me Arabinë Saudite`;

  const keywords = `Haxhi i Umres, Paketa të Umres, Kërkesat për Umre, Viza për Umre, Umra 2023, Udhëzuesi për Umre, Udhëtimi i Umres, Ritualet e Umres, Udhëtimi i Umres, Fluturimet për Umre, Hotele për Umre, Lista e kontrolleve për Umre, Kostot e Umres, Datat e Umres, Hapat e Umres, Agjentët e Umres, Rezervimi i Umres, Namazi i Umres, Kodi i veshjes për Umre, Këshillat për Umre, Grupi i Umres, Procesi i vizave për Umre, Haxhi i Umres 2023, Agjencia e udhëtimit për Umre, Fluturimet dhe hotelet për Umre.`;

  return (
    <>
      <MetaData
        title='Idriz Çela'
        description={description}
        keywords={keywords}
      />
      <main className={cn(className, 'mainTexture')}>
        <Navbar />
        <div className='max-w-[1600px] mx-auto h-full px-3 md:px-6  overflow-hidden'>
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
