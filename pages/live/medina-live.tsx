import React from 'react';
import medina from '@/assets/imgs/meddina4.jpg';
import PageLayout from '@/components/Layouts/PageLayout';

type Props = {};

const MedinaLive = (props: Props) => {
  return (
    <PageLayout title='Medina Live'>
      <div
        className='pageMekkaLive'
        style={{
          backgroundImage: `url(${medina.src})`,
        }}
      >
        MedinaLive
      </div>
    </PageLayout>
  );
};

export default MedinaLive;
