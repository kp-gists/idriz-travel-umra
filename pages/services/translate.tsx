import PageLayout from "@/components/Layouts/PageLayout";
import { DynamicContact } from "@/components/contact/DynamicContact";
import translation from "@/assets/imgs/arabic_6358110.png";

import Image from "next/image";
import React from "react";

const page = "translate";

const ServicePage = () => {
  return (
    <PageLayout
      title="Perkthime"
      description="Idriz Travel Umra ofron perkthime nga shqip ne arabisht edhe nga arabisht ne "
      keywords="perkthime,shqip,arabisht, dokumenta, legalizime"
    >
      <div className="px-4 py-12">
        <h1 className="text-3xl font-bold text-center my-8">Idriz Travel Umra - Shërbimet e Përkthimit</h1>
        <Image
          src={translation}
          className="mx-auto"
          alt="Translation Services"
          width={300}
          height={300}
          loading="eager"
          priority
        />
        <div className="max-w-3xl mx-auto py-12 flex flex-col gap-3">
          <p className="text-lg font-semibold max-w-2xl text-center mx-auto pb-4">
            Idriz Travel Umra vazhdon të zgjerojë gamën e shërbimeve të saj, duke ju ofruar përkthime të cilësisë së
            lartë, të personalizuara, dhe të besueshme nga Shqip në Arabisht dhe nga Arabisht në Shqip.
          </p>
          <p>Ne ofrojmë shërbime të ndryshme përkthimi, duke përfshirë:</p>

          <h2 className="text-lg md:text-xl">🌍 Përkthime të Dallueshme dhe të Personalizuara</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Përkthimet janë një pjesë kritike e komunikimit ndërmjet gjuhëve dhe kulturave. Ne ofrojmë përkthime të
            sakta dhe të besueshme sipas nevojave tuaja.
          </p>

          <h2 className="text-lg md:text-xl">📄 Dokumente Zyrtare dhe Personale</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Përkthejmë dokumente personale si certifikata lindjeje, diploma, dhe dokumente martesore, si dhe dokumente
            juridike, kontrata, dhe raporte pune.
          </p>

          <h2 className="text-lg md:text-xl">📜 Ekip i Përgatitur</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Ekipi ynë i përkthyesve profesionistë ka njohuri të thella në gjuhët dhe kulturat e të dyja gjuhëve, duke
            garantuar përkthime të sakta dhe të qarta.
          </p>

          <h2 className="text-lg md:text-xl">🔒 Konfidencialitet dhe Integritet</h2>
          <p className="pl-4 md:pl-6 max-w-2xl text-lg ">
            Ne ruajmë konfidencialitetin e plotë të dokumenteve tuaja dhe sigurojmë që çdo përkthim trajtohet me kujdes
            maksimal.
          </p>

          <div className="mt-6 mb-10">
            <h2>Na Kontaktoni</h2>
            <p>
              Për më shumë informacion dhe për të kërkuar shërbimin e përkthimit, kontaktoni{" "}
              <strong>Idriz Travel Umra</strong> sot!
            </p>
            <p>
              <em>Ne jemi këtu për t’ju ndihmuar në çdo hap të procesit.</em> 🌟
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-12">
          <DynamicContact />
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicePage;
