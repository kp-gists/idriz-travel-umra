import React from 'react';
import imgSrc from '@/assets/imgs/travel-umra-desc.webp';
import Image from 'next/image';

const UmraImage = () => {
  return (
    <div className='overflow-hidden '>
      <Image alt='image of umra details' src={imgSrc} />
    </div>
  );
};

export default UmraImage;
