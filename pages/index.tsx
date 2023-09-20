import { Inter } from 'next/font/google';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import Hero from '@/components/landing/Hero';
import UmrahPackages from '@/components/landing/UmrahPackages';
import Services from '@/components/landing/Services';
import AbutUs from '@/components/landing/AbutUs';
import Contact from '@/components/landing/Contact';
import HotelList from '@/components/landing/HotelList';
import TourGuideList from '@/components/landing/TourGuideList';
import UmrahStatistics from '@/components/landing/UmrahStatistics';
import HolyPlaces from '@/components/landing/HolyPlaces';
import RamadanUmra from '@/components/notifications/RamadanUmra';
import EjaNeUmreSection from '@/components/sections/EjaNeUmreSection';
import UmreTimeline from '@/components/sections/UmreTimeline';
import CurrentUmres from '@/components/sections/CurrentUmres';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { t, lang } = useTranslation('common');

  useEffect(() => {}, [t]);
  return (
    <MainLayout className={inter.className}>
      <Hero />
      <EjaNeUmreSection />
      <CurrentUmres />
      <Services />
      <UmrahPackages />

      {/*TODO with confirmation timeline of the umra, starting performing and return */}
      {/* <UmreTimeline /> */}

      {/* Njoftime */}
      <RamadanUmra year={2024} />

      <HolyPlaces />

      {/* rreth nesh */}
      <AbutUs />

      {/* Statistika */}
      <UmrahStatistics />

      {/* social networks Contact */}
      <Contact />

      {/* list of hotels */}
      {/* <HotelList /> */}

      {/* list of tour guide */}
      {/* <TourGuideList /> */}
    </MainLayout>
  );
}
