import PageLayout from "@/components/Layouts/PageLayout";
import { DynamicContact } from "@/components/contact/DynamicContact";
import passport from "@/assets/imgs/passport.png";

import Image from "next/image";
import React from "react";

type Props = {
  serviceItem: any;
};

const page = "visa";

const ServicePage = () => {
  return (
    <PageLayout
      title="Visa Per Arabine Saudite"
      keywords="viza arabi saudite, vize studenti, vize biznesi, vize turist, vize personale, vize pune ne vendet arabe "
    >
      <div className="px-4 py-12">
        <h1 className="text-3xl font-bold text-center my-8">Idriz Travel Umra - Shërbimet e Vizave</h1>
        <Image src={passport} className="mx-auto" alt="" width={300} height={300} loading="eager" priority />
        <div className="max-w-3xl mx-auto py-12 flex flex-col gap-3">
          <p className="text-lg font-semibold max-w-2xl text-center mx-auto pb-4">
            Idriz Travel Umra është një kompani e specializuar në ofrimin e shërbimeve të vizave për të udhëtuar në
            Arabinë Saudite.
          </p>
          <p>Ne ofrojmë një gamë të gjerë të shërbimeve, duke përfshirë:</p>

          <h2 className="text-lg md:text-xl">🌍 Viza për Arabinë Saudite</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Ne ofrojmë ndihmë të shpejtë dhe efikase për sigurimin e vizave për të gjitha kategoritë e udhëtarëve.
          </p>

          <h2 className="text-lg md:text-xl">💼 Viza e Biznesit</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Për ata që kanë nevojë të udhëtojnë për çështje biznesi, ne sigurojmë vizën e biznesit për të ndjekur
            interesat tuaja në Arabinë Saudite.
          </p>

          <h2 className="text-lg md:text-xl">👨‍💼 Viza e Punës</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Ne ndihmojmë me procesin e aplikimit për vizën e punës për ata që dëshirojnë të punojnë në Arabinë Saudite.
          </p>

          <h2 className="text-lg md:text-xl">👤 Viza Personale</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Ne sigurojmë vizën personale për vizitat turistike ose familjare, duke përfshirë vizitat në Mekke dhe
            Medinë.
          </p>

          <h2 className="text-lg md:text-xl">📜 Egalizimi i Dokumentave</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Ofrojmë shërbimin e egalizimit të dokumentave pranë ambasadave të Arabisë Saudite, duke siguruar që
            dokumentet tuaja janë të pranuara dhe të vlefshme.
          </p>

          <div className="mt-6 mb-10">
            <h2>Na Kontaktoni</h2>
            <p>
              Për më shumë informacion dhe për të aplikuar për vizën tuaj, kontaktoni <strong>Idriz Travel Umra</strong>{" "}
              sot!
            </p>
            <p>
              <em>Ne jemi këtu për t’ju ndihmuar në çdo hap të procesit.</em> 🌟
            </p>
          </div>

          <DynamicContact />
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicePage;
