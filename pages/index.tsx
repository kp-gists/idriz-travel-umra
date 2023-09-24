import MainLayout from '@/components/Layouts/MainLayout';
import AbutUs from '@/components/landing/AbutUs';
import Contact from '@/components/landing/Contact';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import UmrahPackages from '@/components/landing/UmrahPackages';
import EjaNeUmreSection from '@/components/sections/EjaNeUmreSection';
import useTranslation from 'next-translate/useTranslation';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { t, lang } = useTranslation('common');

  useEffect(() => {}, [t]);
  return (
    <MainLayout className={inter.className}>
      <Hero />
      <Services />
      <EjaNeUmreSection />

      {/* to fix with current offers */}

      <UmrahPackages />

      {/*TODO rreth nesh */}
      <AbutUs />
      <Contact />
    </MainLayout>
  );
}
