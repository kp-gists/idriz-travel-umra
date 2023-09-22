import { Inter } from 'next/font/google';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import Hero from '@/components/landing/Hero';
import UmrahPackages from '@/components/landing/UmrahPackages';
import Services from '@/components/landing/Services';
import AbutUs from '@/components/landing/AbutUs';
import Contact from '@/components/landing/Contact';
import EjaNeUmreSection from '@/components/sections/EjaNeUmreSection';
import CurrentUmres from '@/components/sections/CurrentUmres';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { t, lang } = useTranslation('common');

  useEffect(() => {}, [t]);
  return (
    <MainLayout className={inter.className}>
      <Hero />
      <Services />
      <EjaNeUmreSection />
      <CurrentUmres />
      <UmrahPackages />

      {/* rreth nesh */}
      <AbutUs />

      {/* social networks Contact */}
      <Contact />
    </MainLayout>
  );
}
