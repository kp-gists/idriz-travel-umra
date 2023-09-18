import React from 'react';
import kaaba from '@/assets/imgs/Kaaba-Masjid-Al-Haram.webp';
import Image from 'next/image';
import airport from '@/assets/icons/airport.png';
import airportNoplane from '@/assets/icons/airport(1)(1).png';
import plane from '@/assets/icons/plane.png';
import ListPhoneContact from '../contact/ListPhoneContact';

type Props = {
  isLoading: boolean;
};

const SloganOne = ({ isLoading }: Props) => {
  if (isLoading) return null;

  return (
    <div className='bg-gradient-to-t from-cyan-400/50 via-white/10 to-sky-500/50 rounded-md w-full  flex flex-col items-center py-8 lg:flex-row'>
      <div className='relative'>
        <Image
          src={kaaba.src}
          width={757}
          height={757}
          className='rounded-md px-4'
          alt='kaaba photo'
        />
      </div>

      <div className='w-full flex flex-col gap-y-4 h-full  items-center justify-start relative'>
        <h1 className='text-center w-full font-poppins text-2xl mt-6 mb-2 font-bold text-slate-800'>
          Nisemi cdo jave nga Tirana
        </h1>
        <div className='w-[360px] md:w-[720px] lg:[900px]   flex justify-between items-center h-[200px] relative '>
          <div>
            <Image
              src={airport}
              width={50}
              height={50}
              alt='airplane icon'
              className='object-contain '
            />
            <h1>Jeddah</h1>
          </div>

          <div className='relative h-full w-[300px] md:w-[600px] lg:[900px] '>
            <Image
              src={plane}
              width={50}
              height={50}
              alt='plane icon'
              className='airplane'
            />
          </div>

          <div>
            <Image
              src={airportNoplane}
              width={50}
              height={50}
              alt='plane icon'
              className=' object-contain '
            />
            <h1>Tirana</h1>
          </div>
        </div>
        <div className='flex-1 w-full flex justify-center flex-col items-center  pt-4'>
          <p className='text-sm md:text-lg font-semibold text-center w-full mb-4'>
            Behu pjese i nje nga grupeve tona edhe sebashku te nisemi drejt
            vendeve te shenjta
          </p>
          <ListPhoneContact />
        </div>
      </div>
    </div>
  );
};

export default SloganOne;
