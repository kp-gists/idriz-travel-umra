import Image from 'next/image';
import React from 'react';
import meccaBg from '@/assets/imgs/mecca-illustrator.jpg';
import masjidNaba from '@/assets/imgs/meddina4.jpg';
import Link from 'next/link';

type Props = {};

const HolyPlaces = (props: Props) => {
  return (
    <div className='flex flex-col gap-20'>
      <Link href='/live/makkah-live' className='w-full h-full relative'>
        <Image
          src={meccaBg}
          className='z-50 w-full rounded-lg'
          alt='mecca: travel with idriz cela travel umrah'
        />
      </Link>

      <Link href='/live/medina-live' className='w-full h-full relative'>
        <Image
          src={masjidNaba}
          className='z-50 w-full h-fit rounded-lg'
          alt=''
        />
      </Link>
    </div>
  );
};

export default HolyPlaces;
