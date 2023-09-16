import React from 'react';
import medina from '@/assets/imgs/meddina4.jpg';
import PageLayout from '@/components/Layouts/PageLayout';
import { madinahLiveIFrame } from '@/util/constants';

type Props = {};

const MedinaLive = (props: Props) => {
  return (
    <PageLayout title='Medina Live'>
      <div
        className='pageMekkaLive flex items-center justify-center'
        style={{
          backgroundImage: `url(${medina.src})`,
        }}
      >
        {madinahLiveIFrame({ height: 600, width: 969 })}
      </div>
    </PageLayout>
  );
};

export default MedinaLive;
