import React from 'react';
import medina from '@/assets/imgs/meddina4.jpg';
import PageLayout from '@/components/Layouts/PageLayout';
import { madinahLiveIFrame } from '@/util/constants';

type Props = {};

const MedinaLive = (props: Props) => {
  return (
    <PageLayout title='Medina Live'>
      <div
        className='pageMedinaLive  flex justify-center items-start md:items-center'
        style={{
          backgroundImage: `url(${medina.src})`,
        }}
      >
        {madinahLiveIFrame({ className: 'holyPlaceIframe' })}
      </div>
    </PageLayout>
  );
};

export default MedinaLive;
