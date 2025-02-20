import React from "react";
import TitleSection from "../TitleSection";

import Link from "next/link";
import DownloadUmraBook from "../DownloadUmraBook";

const UmreInfo = () => {
  return (
    <TitleSection hasDivider title="Si bëhet Umre-ja" subtitle="Çfarë hapash ndiqen për të bërë umren?">
      <div className="relative">
        <div className="max-h-[300px] overflow-hidden max-w-2xl mt-4">
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I PARË</h2>
          <h3 className="text-lg font-semibold md:text-xl">1. Nijeti 🕋</h3>
          <p>
            <strong>Nijeti</strong> bëhet me zemër, e me mend se do futesh në ihram për të bërë umre.
          </p>
          <p>
            Ndërkohë pasi të kemi mbaruar të gjitha procedurat përgatitore, që do të thotë jemi veshur e jemi gati dhe
            arrijmë te kufiri (mikati), hyjmë në ihram.
          </p>
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I DYTË</h2>
          <h3 className="text-lg font-semibold md:text-xl mb-3">2. Hyrja në Ihram ✅</h3>
        </div>
        <div className="read-more flex justify-around gap-2 pt-5 px-auto text-center absolute bottom-0 left-0 right-0">
          <Link href={`/umra/umreja-hap-pas-hapi`} className="text-center block ">
            ...Lexo më shumë
          </Link>
          <DownloadUmraBook />
        </div>
      </div>
    </TitleSection>
  );
};

export default UmreInfo;
