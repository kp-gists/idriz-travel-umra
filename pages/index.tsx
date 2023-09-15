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

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { t, lang } = useTranslation('common');

  useEffect(() => {}, [t]);
  return (
    <MainLayout className={inter.className}>
      <Hero />

      {/* Sherbimet|services */}
      <Services />

      {/* Paketat e fundit */}
      <UmrahPackages />

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
      <HotelList />

      {/* list of tour guide */}
      <TourGuideList />
    </MainLayout>
  );
}
