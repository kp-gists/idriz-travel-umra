import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Inter } from "next/font/google";

import AbutUs from "@/components/landing/AbutUs";
import ActionButtons from "@/components/landing/ActionButtons";
import Contact from "@/components/landing/Contact";
import Hero from "@/components/landing/Hero";
import OfertaUmre from "@/components/landing/OfertaUmre";
import Services from "@/components/landing/Services";
import UmrahPackages from "@/components/landing/UmrahPackages";
import VisitingPlaces from "@/components/landing/VisitingPlaces";
import MainLayout from "@/components/Layouts/MainLayout";
import EjaNeUmreSection from "@/components/sections/EjaNeUmreSection";

import { fetchUmrahPage } from "@/lib/fetching";
import RamadanUmra from "@/components/notifications/RamadanUmra";
import UmreInfo from "@/components/sections/UmreInfo";
import UmraGallery from "@/components/sections/UmraGallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout className={inter.className}>
      <Hero />
      <OfertaUmre />
      <Services />
      <EjaNeUmreSection />
      {/* Ramadn Umra */}

      <RamadanUmra year={2025} />

      <VisitingPlaces />

      {/* gallery */}
      {/* <UmraGallery /> */}

      <UmrahPackages />

      {/* extra: umre info */}
      <UmreInfo />

      {/*TODO rreth nesh */}
      <AbutUs />

      {/* TODO cta btns */}
      <ActionButtons />
      <Contact />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["page"], async () => await fetchUmrahPage());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
