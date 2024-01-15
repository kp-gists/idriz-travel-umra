import { fetchUmrahMedia } from '@/lib/fetching';
import { useQuery } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import React from 'react';
import TitleSection from '../TitleSection';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

const UmraGallery = () => {
  const {
    data: gallery,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['umre-media'],
    queryFn: async () => await fetchUmrahMedia(),
    retry: 3,
  });

  if (isLoading) return <Loader className='animate-spin' />;
  if (isError) return;

  const ofertat = gallery.data.attributes.media.clients_photos.data?.map(
    (media: any) => {
      const image = media.attributes;
      return {
        original: image.url,
        thumbnail: image.formats.thumbnail.url,
        originalAlt: media.alternativeText ? media.alternativeText : media.name,
        thumbnailAlt: image.name,
        id: media.id,
      };
    }
  );

  return (
    <TitleSection
      hasDivider
      title='Album Fotosh'
      subtitle='Foto nga klientet tanë'
    >
      <div className='w-[390px] md:w-[750px] lg:w-[850px] xl:w-[950]'>
        <ReactImageGallery
          showNav
          items={ofertat as ReactImageGalleryItem[]}
          showThumbnails
          showPlayButton={false}
          autoPlay={false}
          showFullscreenButton
          showBullets
          showIndex
          useBrowserFullscreen
        />
      </div>
    </TitleSection>
  );
};

export default UmraGallery;
