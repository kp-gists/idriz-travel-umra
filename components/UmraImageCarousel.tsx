import React from 'react';

import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import imgUmraSM from '@/assets/imgs/travel-umra-desc-sm.webp';
import imgUmraThumb from '@/assets/imgs/travel-umra-desc-thumb.webp';
import imgUmra from '@/assets/imgs/travel-umra-desc.webp';

type Props = {
  items?: ReactImageGalleryItem;
};

const UmraImageCarousel = ({ items }: Props) => {
  const images = [
    {
      original: imgUmraSM.src,
      thumbnail: imgUmraThumb.src,
      fullscreen: imgUmra.src,
    },
  ];

  const renderImages = items === undefined ? images : [items];

  return (
    <div className='p-4 '>
      <ImageGallery
        showNav
        useBrowserFullscreen
        items={renderImages as ReactImageGalleryItem[]}
        showThumbnails={false}
        autoPlay={false}
        showPlayButton={false}
      />
    </div>
  );
};

export default UmraImageCarousel;
