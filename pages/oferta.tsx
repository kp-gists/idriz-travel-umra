import PageLayout from '@/components/Layouts/PageLayout';
import OfertaUmre from '@/components/landing/OfertaUmre';
import React from 'react';

const oferta = () => {
  return (
    <PageLayout
      title='Oferta E Fundit'
      description='Idriz Travel Umra vjen cdo jave me oferta te ndryshme, konkurruese ne tregun e shqiperise, kosoves, maqedonise se veriut si edhe nga mali i zi,Udhetoni ne vendet e shenjta Mekka, Medina'
      keywords='idriztravelumra,travel,umra,umrah,umre,mekka,medina,qabja,xhamia profetit(a.s), mali uhud, safa, mina,'
    >
      <div className='py-10'>
        <OfertaUmre />
      </div>
    </PageLayout>
  );
};

export default oferta;
