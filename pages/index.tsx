import { Inter } from 'next/font/google';

import MainLayout from '@/components/Layouts/MainLayout';
import AbutUs from '@/components/landing/AbutUs';
import ActionButtons from '@/components/landing/ActionButtons';
import Contact from '@/components/landing/Contact';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import UmrahPackages from '@/components/landing/UmrahPackages';
import VisitingPlaces from '@/components/landing/VisitingPlaces';
import EjaNeUmreSection from '@/components/sections/EjaNeUmreSection';
// import { fetchUmrahPage } from '@/lib/fetching';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const trips = fetchUmrahPage();
  // console.log('🚀 ~ file: index.tsx:18 ~ Home ~ trips:', trips);
  return (
    <MainLayout className={inter.className}>
      <Hero />
      <Services />
      <EjaNeUmreSection />

      <VisitingPlaces />

      {/* to fix with current offers */}

      <UmrahPackages />

      {/*TODO rreth nesh */}
      <AbutUs />

      {/* TODO cta btns */}
      <ActionButtons />
      <Contact />
    </MainLayout>
  );
}
