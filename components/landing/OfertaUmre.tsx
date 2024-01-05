import React from 'react';
import TitleSection from '../TitleSection';
import { useQuery } from '@tanstack/react-query';
import { fetchUmrahPage } from '@/lib/fetching';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import imgUmraSM from '@/assets/imgs/travel-umra-desc-sm.webp';
import imgUmraThumb from '@/assets/imgs/travel-umra-desc-thumb.webp';
import imgUmra from '@/assets/imgs/travel-umra-desc.webp';
import { useRouter } from 'next/navigation';

const OfertaUmre = ({ isLinks }: { isLinks?: boolean }) => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['page'],
    queryFn: async () => await fetchUmrahPage(),
    retry: 3,
  });

  if (isLoading)
    return (
      <div className='max-w-6xl mx-auto flex justify-center'>
        <div className='loader' />
      </div>
    );

  if (isError) return null;

  const trips = data?.data?.attributes?.oferta?.umrah_trips?.data;

  const images = [
    {
      original: imgUmraSM.src,
      thumbnail: imgUmraThumb.src,
      fullscreen: imgUmra.src,
      originalAlt: 'umra trip medina mekka qabja',
      thumbnailAlt: 'travel umra trip oferta umre',
    },
  ];

  const ofertat = trips?.map((trip: any) => {
    const image = trip.attributes.image.data.attributes;
    return {
      original: image.url,
      thumbnail: image.formats.thumbnail.url,
      originalAlt: trip.attributes.slug,
      thumbnailAlt: image.name,
      id: trip.attributes.slug,
    };
  });

  const renderImages = trips === undefined ? images : [...ofertat];

  if (isLinks) {
    return (
      <ReactImageGallery
        showNav
        useBrowserFullscreen
        items={renderImages as ReactImageGalleryItem[]}
        showThumbnails
        showPlayButton={false}
        onClick={(e: any) => router.push(`/umra/${e.target.alt}`)}
        slideDuration={1000}
      />
    );
  }

  return (
    <TitleSection
      hasDivider
      subtitle='Zgjidh ofertën tënde'
      title='Eja edhe ti në umre!'
    >
      <div className='p-4 max-w-6xl sm:w-[300px] md:w-[600px] lg:w-[900px] '>
        <ReactImageGallery
          showNav
          useBrowserFullscreen
          items={renderImages as ReactImageGalleryItem[]}
          showThumbnails
          showPlayButton={false}
          onClick={(e: any) => router.push(`/umra/${e.target.alt}`)}
          slideDuration={500}
        />
      </div>
    </TitleSection>
  );
};

export default OfertaUmre;
