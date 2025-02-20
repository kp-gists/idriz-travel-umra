import DownloadUmraBook from "@/components/DownloadUmraBook";
import PageLayout from "@/components/Layouts/PageLayout";

import React from "react";

const UmreInfoPage = () => {
  return (
    <PageLayout title={"Si bëhet Umra-ja?"} keywords="umra hap pas hap, dua per umra, dua ne kodra mine dhe safa">
      <div className="umra-info max-w-3xl mt-4 mx-4 md:mx-auto flex flex-col gap-6 md:gap-8">
        <h1 className="capitalize font-bold">Umreja hap pas hapi</h1>

        {/* step 1 */}
        <div className="flex flex-col gap-2">
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I PARË</h2>
          <h3 className="text-lg font-semibold md:text-xl">1. Nijeti 🕋</h3>
          <p>
            <strong>Nijeti</strong> bëhet me zemër, e me mend se do futesh në ihram për të bërë umre.
          </p>
          <p>
            Ndërkohë pasi të kemi mbaruar të gjitha procedurat përgatitore, që do të thotë jemi veshur e jemi gati dhe
            arrijmë te kufiri (mikati), hyjmë në ihram.
          </p>

          <h3 className="text-lg font-semibold md:text-xl">Në ihram nuk na lejohet:</h3>
          <ul className="pl-8">
            <li className="list-disc">Të presim thonj ose flokë</li>
            <li className="list-disc">Të veshim rroba përveçse shapka ose sandale</li>
            <li className="list-disc">Çdo temë mbi jetën intime bashkëshortore, fejesën apo martesën</li>
            <li className="list-disc">
              Gratë e bëjnë në rrobat e tyre të zakonshme, por nuk lejohet nikabi, përçja as dorashkat
            </li>
            <li className="list-disc">
              Përdorimi i parfumit gjatë ihramit, nëse është vendosur më parë nuk është problem
            </li>
            <li className="list-disc">Gjuetia dhe aktet ndihmëse të saj</li>
            <li className="list-disc">Fjalët e pista, përgojimet, thashethemet, gënjeshtrat, shpifjet</li>
          </ul>

          <h3>Pelqehet:</h3>
          <p>Larja para hyrjes në ihram.</p>
          <p>Nuk ka namaz special për ihramin.</p>

          <h3>Tolerohen:</h3>
          <p>
            Aksesorët si ora, unaza, syzet, rripi, çadra, mbartja e gjërave, larja, ndërrimi i ihramit ose larja e tij.
          </p>
          <p>Ushqyerja dhe pirja përveç gjërave haram si duhani.</p>
        </div>

        {/* step 2 */}
        <div>
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I DYTË</h2>
          <h3 className="text-lg font-semibold md:text-xl mb-3">2. Hyrja në Ihram ✅</h3>
          <ol className="pl-6">
            <li className="list-decimal">
              Ai që e bën për vete thotë: <strong>Lebbejkallahumme umreten</strong>. (Te përgjigjem Ty o Allah, o Zoti
              im, duke bërë umren)
            </li>
            <li className="list-decimal">
              Ai që e bën për dikë tjetër thotë: <strong>Lebbejkallahumme umren an (emri i personit)</strong>.
            </li>
          </ol>
          <p>Gjatë gjithë kohës duhet të themi Telbijen:</p>
          <div>
            <p>
              Lebbejkallahume lebbejk
              <br />
              Lebbejke la sherike leke lebbejk
              <br />
              Innel hamde we nië&apos;mete leke wel mulk
              <br />
              La sherike lek
            </p>
          </div>
          <p>Kjo përsëritet vazhdimisht derisa të shohim Qaben.</p>
        </div>

        <div>
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I TRETË</h2>
          <h3 className="text-lg font-semibold md:text-xl mb-3">3. Tawafi; Xhirot e rrotullimit rreth Qabes 🕋</h3>
          <ol className="pl-8">
            <li className="list-decimal">
              Arrijmë te Guri i Zi, ngrejmë dorën e djathtë dhe themi: <strong>Bismilah! Allahu Ekber.</strong>
            </li>
            <li className="list-decimal">
              Për çdo xhiro kur arrijmë te Guri i Zi themi: <strong>Allahu Ekber</strong>.
            </li>
            <li className="list-decimal">Përsërisim këtë deri sa të kemi bërë 7 xhiro.</li>
            <li>
              Tek qoshet e Jemenit themi: <strong>Rabbena atina fidunja haseneten...</strong>
            </li>
            <li className="list-decimal">
              Meshkujt duhet të zbulojnë supin e djathtë dhe të vrapojnë tre xhirot e para.
            </li>
            <li className="list-decimal">Gjatë gjithë kohës të jemi me abdes.</li>
          </ol>
        </div>

        {/* step 4 */}
        <div className="flex flex-col gap-3">
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I KATËRT</h2>
          <h3></h3>
          <h4 className="text-lg font-semibold md:text-xl mb-1">4. Pas Tawafit - Dy rekatshi</h4>
          <p>Pasohet me dy rekate pas Mekamit të Ibrahimit.</p>
          <p>
            Rekati i parë: <strong>El-Kafirun</strong>, rekati i dytë: <strong>El-Ihlas</strong>.
          </p>

          <h4>
            <strong>Uji i Zemzemit</strong> <span>Pëlqehet të pihet shumë dhe të bëhen dua.</span>
          </h4>
        </div>

        {/* step 5 */}
        <div className="flex flex-col gap-3">
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I PESTË</h2>
          <h3 className="text-lg font-semibold md:text-xl mb-1">5. Sa&apos;i - Ecja mes Safas dhe Merves</h3>
          <ol className="pl-6">
            <li className="list-decimal">
              Para se të fillojmë themi: <strong>Innesafa wel merwete min sheairilah</strong>.
            </li>
            <li className="list-decimal">Qëndrojmë mbi Safa, drejtohemi nga Qabja dhe themi:</li>
          </ol>
          <blockquote>
            <p>
              Allahu Ekber, Allahu Ekber, Allahu Ekber
              <br />
              La ilahe ilallahu wahdehu la sherike leh...
            </p>
          </blockquote>
          <p>Përsëritet tre herë pastaj bëjmë dua.</p>
          <p>E njëjta gjë bëhet edhe në Merve.</p>
          <span>Vrapojmë në zonën e dritave jeshile.</span>
        </div>

        {/* step 6 */}
        <div className="flex flex-col gap-3">
          <h2 className="underline underline-offset-2 font-bold uppercase ">HAPI I FUNDIT</h2>
          <h3 className="text-lg font-semibold md:text-xl mb-1">Mbyllja e Umres - Flokët</h3>
          <ul className="pl-6">
            <li className="list-disc">Burrat i rruajnë kokat ose i shkurtojnë flokët.</li>
            <li className="list-disc">Gratë presin vetëm majat e flokëve sa një gisht.</li>
          </ul>
          <p>
            Zoti na e pranoftë! <strong>Amin!</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-8">
        <p>Idriz Travel Umra ju mundëson një libër për ritualin e umres</p> <DownloadUmraBook />
      </div>
    </PageLayout>
  );
};

export default UmreInfoPage;
