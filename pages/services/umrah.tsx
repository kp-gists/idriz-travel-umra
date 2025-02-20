import PageLayout from "@/components/Layouts/PageLayout";
import { DynamicContact } from "@/components/contact/DynamicContact";
import meccaMedinah from "@/assets/imgs/mecca-medinah.jpg";

import Image from "next/image";
import React from "react";

type Props = {
  serviceItem: any;
};

const page = "umrah";

const ServicePage = () => {
  return (
    <PageLayout title="Umre Nga Shqiperia dhe Balkani">
      <div className="px-4 py-12">
        <Image
          src={meccaMedinah}
          className="z-50 h-fit hidden md:visible object-cover md:block  md:object-contain w-screen  md:min-w-sm min-h-[200px] rounded-lg"
          alt=""
          loading="eager"
          priority
        />
        <div className="flex flex-col justify-start gap-4 max-w-4xl mx-auto my-8">
          <h1 className="text-center text-lg md:text-xl lg:text-3xl font-bold">Eja edhe ti në Umre!</h1>
          <p className="max-w-2xl text-center mx-auto text-base md:text-lg">
            Eja në këtë rrugëtim të shenjtë, ku ne do të kujdesemi për detajet dhe do të ofrojmë udhëzim të plotë për
            ritualin e Umres. Do të keni mundësinë të përqendroheni vetëm në frymën dhe adhurimin tuaj, ndërsa ne
            kujdesemi për të tjerat.
          </p>
          <p className=" font-semibold">Përfshirë në këtë paketë Umre janë:</p>
          <ul className="pl-8">
            <li className="list-disc">
              <span className="highlight">Librin</span> (Rituali i Umres)
            </li>
            <li className="list-disc">Çanta shpine për udhëtim</li>
            <li className="list-disc">Vizën e Umres</li>
            <li className="list-disc">Biletën e udhëtimit vajtje-ardhje</li>
            <li className="list-disc">Transportin në Arabinë Saudite</li>
            <li className="list-disc">Akomodimin në hotelet e komoditetshme në Mekke dhe Medinë</li>
            <li className="list-disc">Ujë zemzemi</li>
            <li className="list-disc">Ihramin</li>
            <li className="list-disc">Praninë e një hoxhe udhëheqës të grupit</li>
            <li className="list-disc">Vizitat në vendet e shenjta të Mekkes dhe Medinës</li>
          </ul>

          <p>
            <strong>Kjo është një mundësi e rrallë për të krijuar kujtime që do të ruhen për gjithmonë.</strong>
          </p>

          <div className="contact flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Kontakt</h2>
            <p className="max-w-3xl">
              Për më shumë informacion dhe për të rezervuar vendin tuaj në këtë udhëtim të jashtëzakonshëm, na
              kontaktoni sot në <strong>Idriz Travel Umra Agjenci</strong>.
            </p>
            <p>
              <em className="text-lg font-semibold">Bashkohuni me ne në këtë udhëtim spiritual!</em>
            </p>
          </div>

          <h2>Nisjet</h2>
          <p className="max-w-3xl text-lg font-semibold">
            Ne nisemi <span className="highlight">çdo javë</span> nga Tirana. Pranojmë të gjithë të interesuarit nga:
          </p>
          <ul className="pl-6">
            <li className="list-disc">Shqipëria</li>
            <li className="list-disc">Kosova</li>
            <li className="list-disc">Maqedonia</li>
            <li className="list-disc">Mali i Zi</li>
          </ul>

          <h2>Çfarë ju duhet për Umre?</h2>
          <p>Dokumentat e nevojshme për Umre janë:</p>
          <ul className="pl-6">
            <li className="list-disc">Pasaportë e vlefshme jo më pak se 6 muaj</li>
            <li className="list-disc">2 fotografi personale</li>
            <li className="list-disc max-w-3xl text-lg my-2 font-semibold">
              Zgjidhni një nga ofertat e radhës duke preferuar edhe tipin e dhomës së hotelit
            </li>
          </ul>
        </div>

        <div className="max-w-5xl mx-auto py-12">
          <h1 className="py-4 capitalize text-lg md:text-xl lg:text-3xl bold text-center">Na Kontaktoni për umre:</h1>

          <DynamicContact />
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicePage;
