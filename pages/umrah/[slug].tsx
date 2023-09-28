import UmraImageCarousel from '@/components/UmraImageCarousel';
import PageLayout from '@/components/Layouts/PageLayout';

import { fetchTripBySlug, fetchUmrahTrips } from '@/lib/fetching';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

import { convertDate } from '@/util/date';
import { UmrahPrice } from '@/types';

import ihramCouple from '@/assets/icons/ihram-64.webp';
import imgUmraThumb from '@/assets/imgs/travel-umra-desc-thumb.webp';
import { X } from 'lucide-react';

import hotel from '@/assets/icons/hotel-64.png';
import muslim from '@/assets/icons/muslim-48.png';

type Props = {
  umra: any;
};

const UmrahTrip = ({ umra }: Props) => {
  const metaImage =
    umra?.image?.data === null
      ? imgUmraThumb
      : umra?.image?.data?.attributes?.formats?.thumbnail?.url;

  const getImages = () => {
    if (umra?.image?.data) {
      return {
        original: umra?.image?.data?.attributes?.formats?.medium?.url,
        thumbnail: umra?.image?.data?.attributes?.formats?.thumbnail?.url,
        fullscreen: umra?.image?.data?.attributes?.url,
      };
    } else undefined;
  };

  return (
    <PageLayout title={''} keywords='' imageUrl={metaImage}>
      <div className='flex flex-col px-4 my-8 lg:flex-row max-w-6xl mx-auto'>
        {/* image oferte with zoom in full */}
        <div className='max-w-sm sm:max-w-sm mx-auto lg:mx-0  overflow-hidden md:max-w-md lg:max-w-sm'>
          <UmraImageCarousel items={getImages()} />
        </div>

        {/* details */}
        <div className='py-4 px-3 '>
          <h1 className='capitalize text-lg md:text-xl lg:text-2xl font-semibold flex items-center gap-x-2'>
            <Image
              src={ihramCouple}
              alt='muslim couple on ihram'
              width={32}
              height={32}
            />
            {umra?.title}
          </h1>

          <div className='py-4 px-4 max-w'>
            <p className='leading-6 text-sm md:leading-7 md:text-lg py-4'>
              Këtë muaj do te udhëtojmë drejt vendeve të shenjta. Nisja do jetë
              nga airport i Tiranes me një ndalesë ne Athine, Greqi. Pastaj
              pjesa e dytë e fluturimit nga Athina në airport Jeddah, Arabia
              Saudite.
            </p>

            <div className='flex gap-x-6 gap-y-4'>
              <h3>
                <strong>Nisja: </strong>
                <time
                  dateTime={umra?.departing as any}
                  suppressHydrationWarning
                >
                  {convertDate(umra?.departing)}
                </time>
              </h3>
              <h3>
                <strong>Kthimi: </strong>
                <time dateTime={umra?.arriving as any} suppressHydrationWarning>
                  {convertDate(umra?.arriving)}
                </time>
              </h3>
            </div>
          </div>

          <div className='pt-8'>
            <h2 className='text-center mb-4 font-semibold text-lg flex items-center justify-center'>
              Çmimet E Hoteleve{' '}
              <Image
                src={hotel}
                className='w-6 h-6 ml-2'
                alt='hotelet ne mekke edhe medine'
              />
            </h2>
            <div className='flex items-center justify-around w-full lg:w-fit px-1 my-2 gap-x-2 md:gap-x-6 lg:gap-x-3'>
              {umra?.price?.map((price: UmrahPrice) => {
                return (
                  <div
                    key={price.id}
                    className='flex flex-col w-full items-center gap-2 justify-center ring-1 rounded-xl ring-sky-400 mx-1 px-1 md:px-4 py-2 drop-shadow-md min-w-[205px] shadow-white'
                  >
                    <div className='flex items-end gap-0.5 '>
                      <h5 className='mr-2 font-normal text-md'>Dhoma me</h5>
                      <div className='h-10 w-10 flex items-center justify-center border rounded-full bg-indigo-300'>
                        <Image
                          src={muslim}
                          className='h-8 w-8'
                          alt='hotel muslim person'
                          loading='lazy'
                        />
                      </div>
                      <X className='h-6 w-6 mb-0.5' />
                      <span className='text-2xl font-semibold'>
                        {price.room.slice(5, 6)}
                      </span>
                    </div>

                    <div className='text-sm md:text-md  font-semibold '>
                      Çmimet për person: {price.value} {price.currency}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (props) => {
  const umrahs = await fetchUmrahTrips();

  if (umrahs?.data?.length) {
    const paths = umrahs?.data?.map((umrah: any) => ({
      params: {
        slug: umrah.attributes.slug,
      },
    }));

    return {
      paths,
      fallback: true,
    };
  }

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (props) => {
  const slug: string = props?.params?.slug as string;

  if (!slug)
    return {
      notFound: true,
    };

  const umra = await fetchTripBySlug(slug);

  if (umra?.data?.length > 0) {
    return {
      props: {
        umra: umra.data[0].attributes,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default UmrahTrip;
