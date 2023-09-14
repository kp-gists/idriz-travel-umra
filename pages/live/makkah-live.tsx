import React from 'react';
import makkahIllustration from '@/assets/imgs/mecca-illustrator.jpg';

type Props = {};

const MakkahLive = (props: Props) => {
  return (
    <div
      className='pageMekkaLive'
      style={{
        backgroundImage: `url(${makkahIllustration.src})`,
      }}
    >
      MakkahLive
    </div>
  );
};

export default MakkahLive;
