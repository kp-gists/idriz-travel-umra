import Image from 'next/image';
import React from 'react';
import meccaBg from '@/assets/imgs/mecca-illustrator.jpg';
import kaaba from '@/assets/icons/kaaba.png';
import medina from '@/assets/icons/medina-mosque-.png';
import masjidNaba from '@/assets/imgs/meddina4.jpg';
import Link from 'next/link';
import { PlaySquare } from 'lucide-react';

type Props = {};

const PlayWrapper = ({
  children,
  title,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  icon: any;
}) => (
  <div className='w-full flex flex-col'>
    <h1 className='capitalize font-poppins text-md md:text-2xl mb-8 font-bold flex  items-end justify-center w-full'>
      {title} <Image src={icon} alt='Kaaba Mubarak' className='w-8 h-8 ml-1 ' />
    </h1>

    <div className='ring-2 ring-green-500 rounded-lg relative animate-pulsse'>
      <div className='absolute flex-1 top-0 left-0 right-0 bottom-0 bg-indigo-300 rounded-md -z-10 ' />
      {children}

      <PlaySquare className='absolute top-1/2  md:bottom-1/4 left-1/2 md:left-1/2 z-30 h-10 w-10 md:w-16 md:h-16 text-rose-500 group-hover:text-rose-600' />
    </div>
  </div>
);

const HolyPlaces = (props: Props) => {
  return (
    <div className='flex flex-col gap-20 my-20'>
      <Link href='/live/makkah-live' className='w-full h-full relative group'>
        <PlayWrapper title={'drejtpërdrejtë nga Mekka'} icon={kaaba}>
          <Image
            src={meccaBg}
            className='z-20 w-full rounded-md hover:opacity-70'
            loading='lazy'
            alt='mecca: travel with idriz cela travel umrah '
          />
        </PlayWrapper>
      </Link>

      <Link href='/live/medina-live' className='w-full h-full relative'>
        <PlayWrapper title={'drejtpërdrejtë nga Medina'} icon={medina}>
          <Image
            src={masjidNaba}
            className='z-20 w-full rounded-md hover:opacity-70'
            loading='lazy'
            alt='mecca: travel with idriz cela travel umrah '
          />
        </PlayWrapper>
      </Link>
    </div>
  );
};

export default HolyPlaces;
