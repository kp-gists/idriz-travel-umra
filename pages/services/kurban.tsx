import PageLayout from "@/components/Layouts/PageLayout";
import { DynamicContact } from "@/components/contact/DynamicContact";

import React from "react";
import sacrifice from "@/assets/imgs/kurban.jpg";

import Image from "next/image";

const page = "kurban";

const ServicePageKurban = () => {
  return (
    <PageLayout title="Kurbane Ne Mekke">
      <div className="px-4 ">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl font-bold text-center my-8">
            Shërbimi i Therjes së Kurbaneve në Mekke <br /> Idriz Travel Umra
          </h1>
          <Image
            src={sacrifice}
            className="mx-auto rounded-xl ring-2 "
            alt="Therja e Kurbaneve"
            width={360}
            height={360}
            loading="eager"
            priority
          />
          <div className="max-w-3xl mx-auto py-12 flex flex-col gap-3">
            <p className="text-lg font-semibold max-w-2xl text-center mx-auto pb-4">
              Idriz Travel Umra është një agjenci e specializuar që ofron shërbimin e therjes së kurbaneve në Mekke,
              duke u kujdesur për të gjitha detajet e këtij akti të rëndësishëm të adhurimit.
            </p>

            <h2 className="text-lg md:text-xl">🕋 Therja e Kurbaneve në Mekke</h2>
            <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
              Ky shërbim është i disponueshëm për të gjithë besimtarët që dëshirojnë të kryejnë therjen e kurbanit në
              vendin më të shenjtë të Islamit.
            </p>

            <h2 className="text-lg md:text-xl">📆 Therja e Kurbaneve në Çdo Kohë</h2>
            <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
              Ne ofrojmë këtë shërbim gjatë gjithë vitit, duke u kujdesur që çdo therje të kryhet sipas rregullave
              islame dhe në mënyrë të sigurt.
            </p>

            <h2 className="text-lg md:text-xl">🕌 Përgatitja dhe Organizimi i Plotë</h2>
            <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
              Ne sigurojmë përgatitjen e plotë, nga blerja e kurbanit deri te realizimi i të gjitha riteve islame të
              nevojshme për therjen e tij.
            </p>

            <h2 className="text-lg md:text-xl">✅ Besueshmëria dhe Siguria</h2>
            <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
              Shërbimi ynë garanton transparencë dhe përputhshmëri të plotë me normat islame, duke siguruar që çdo
              therje të jetë e vlefshme dhe e ligjshme.
            </p>

            <div className="mt-6 mb-10">
              <h2>Na Kontaktoni</h2>
              <p>
                Për më shumë informacion dhe për të rezervuar shërbimin tuaj të therjes së kurbanit në Mekke, kontaktoni{" "}
                <strong>Idriz Travel Umra</strong> sot!
              </p>
              <p>
                <em>Ne jemi këtu për t’ju ndihmuar në çdo hap të procesit.</em> 🕋🐏
              </p>
            </div>
          </div>
          <h1 className="py-4 capitalize text-lg md:text-xl lg:text-3xl bold text-center">Na Kontaktoni</h1>
          <DynamicContact />
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicePageKurban;
