import React from 'react';
import makkahIllustration from '@/assets/imgs/mecca-illustrator.jpg';
import PageLayout from '@/components/Layouts/PageLayout';

type Props = {};

const MakkahLive = (props: Props) => {
  return (
    <PageLayout>
      <div
        className='pageMekkaLive'
        style={{
          backgroundImage: `url(${makkahIllustration.src})`,
        }}
      >
        MakkahLive
      </div>
    </PageLayout>
  );
};

export default MakkahLive;
