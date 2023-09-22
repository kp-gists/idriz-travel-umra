import React from 'react';
import makkahIllustration from '@/assets/imgs/mecca-illustrator.jpg';
import PageLayout from '@/components/Layouts/PageLayout';
import { makkahLiveIFrame } from '@/util/constants';

type Props = {};

const MakkahLive = (props: Props) => {
  return (
    <PageLayout title='Mekka Live'>
      <div
        className='pageMekkaLive flex lg:items-center justify-center'
        style={{
          backgroundImage: `url(${makkahIllustration.src})`,
        }}
      >
        {makkahLiveIFrame({
          className: 'holyPlaceIframe',
        })}
      </div>
    </PageLayout>
  );
};

export default MakkahLive;
