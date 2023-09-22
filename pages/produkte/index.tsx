import MainLayout from '@/components/Layouts/MainLayout';
import PageLayout from '@/components/Layouts/PageLayout';
import RamadanUmra from '@/components/notifications/RamadanUmra';
import React from 'react';

type Props = {};

const Produkte = (props: Props) => {
  return (
    <PageLayout title='Produkte'>
      <RamadanUmra year={2024} />
      {/* list of hotels */}
      {/* <HotelList /> */}

      {/* list of tour guide */}
      {/* <TourGuideList /> */}
    </PageLayout>
  );
};

export default Produkte;
