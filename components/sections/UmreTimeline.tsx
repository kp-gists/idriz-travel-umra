import React from 'react';
import TitleSection from '../TitleSection';

type Props = {};

export const places = [
  {
    key: 'nisja',
    icon: 'departure',
    title: 'Nisja nga airporti Rinas, Tiran',
    description: '',
  },
];

const checkPoints = [
  'tiran',
  'jeddah',
  'mekke',
  'mekke-hotel',
  'umrah',
  'vizite-vende',
  'meddina',
  'masjid',
  'jeddah',
  'tiran',
];
// umre timeline cute animations
const UmreTimeline = (props: Props) => {
  return (
    <TitleSection hasDivider title='Shijo udhetimin' subtitle=''>
      <div className='flex-1 bg-indigo-200'>
        {/*  */}

        {/*  */}

        {/* start */}
        <div className='flex justify-center items-center'>
          {/* <div>left places</div>
          <div>road</div>
          <div>right places</div> */}
        </div>
      </div>
    </TitleSection>
  );
};

export default UmreTimeline;
