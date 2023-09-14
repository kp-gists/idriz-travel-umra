import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MetaData from '../Metadata';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: Props) => {
  const description = `Idriz Umrah Travel Agency, Traveling to holy places in Saudi Arabia, cities like Makkah, Medinah,“Idriz Travel Umra” është një agjenci udhëtimesh e fokusuar në shërbimet me Arabinë Saudite`;

  const keywords = `Umrah pilgrimage, Umrah packages, Umrah requirements, Umrah visa, Umrah 2023, Umrah guide, Umrah travel, Umrah rituals, Umrah journey, Umrah flights, Umrah hotels, Umrah checklist, Umrah cost, Umrah dates, Umrah steps, Umrah agents, Umrah booking, Umrah prayer, Umrah dress code, Umrah tips, Umrah group, Umrah visa process, Umrah pilgrimage 2023, Umrah travel agency, Umrah flights and hotels.Haxhi i Umres, Paketa të Umres, Kërkesat për Umre, Viza për Umre, Umra 2023, Udhëzuesi për Umre, Udhëtimi i Umres, Ritualet e Umres, Udhëtimi i Umres, Fluturimet për Umre, Hotele për Umre, Lista e kontrolleve për Umre, Kostot e Umres, Datat e Umres, Hapat e Umres, Agjentët e Umres, Rezervimi i Umres, Namazi i Umres, Kodi i veshjes për Umre, Këshillat për Umre, Grupi i Umres, Procesi i vizave për Umre, Haxhi i Umres 2023, Agjencia e udhëtimit për Umre, Fluturimet dhe hotellet për Umre.`;

  return (
    <>
      <MetaData title='Idriz Çela' />
      <main className={className}>
        <Navbar />
        <div className='max-w-7xl mx-auto h-full px-6 overflow-hidden'>
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
