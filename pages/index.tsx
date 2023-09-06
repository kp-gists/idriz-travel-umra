import Image from 'next/image';
import { Inter } from 'next/font/google';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
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

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { t, lang } = useTranslation('common');

  useEffect(() => {}, [t]);
  return (
    <MainLayout className={inter.className}>
      <Hero />

      {/* Paketat e fundit */}
      <UmrahPackages />

      {/* Sherbimet|services */}
      <Services />

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
