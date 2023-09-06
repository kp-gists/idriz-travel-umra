import Image from 'next/image';
import React from 'react';
import meccaBg from '@/assets/imgs/mecca-illustrator.jpg';
import mecca from '@/assets/imgs/mecca-clock.jpg';
import mesjidNaba from '@/assets/imgs/medina-prophets-mosque.jpg';

type Props = {};

const pink_gradiant =
  'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]';
const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]';
const indigo_gradiant =
  'bg-gradient-to-r from-indigo-500 to-cyan-900 filter blur-[750px]';
const blue_gradiant =
  'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]';
const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900';
const text_gradient =
  ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text';

const Hero = (props: Props) => {
  return (
    <>
      <section className='relative flex flex-row justify-center items-center gap-12 w-full h-full'>
        <div className='w-1/2 z-20 flex flex-col'>
          <h1 className='text-4xl text-center mb-4 font-bold font-poppins'>
            Eja edhe ti në Umre!
          </h1>
          <h2 className='text-center text-2xl font-semibold text-gray-800'>
            Vizito vendet e shenjta Mekke, Medinah,Arafat, Kuba ...{' '}
          </h2>
        </div>
        <div className='w-1/2'>
          {/* gradient start */}
          <div className='relative'>
            <Image
              src={mecca}
              className='z-50 w-full rounded-xl'
              height={500}
              alt=''
            />

            <p></p>
          </div>
          <div
            className={`absolute z-[0] w-[30%] h-[35%] left-0 top-0 ${pink_gradiant} `}
          />
          <div
            className={`absolute z-[0] w-[30%] h-[35%] top-1/3 left-20 ${indigo_gradiant} `}
          />

          <div
            className={`absolute z-[0] w-[50%] h-[50%] right-20 top-2 ${blue_gradiant}`}
          />
          {/* gradient end */}
        </div>
      </section>
      <div className='flex flex-col gap-20'>
        <Image
          src={meccaBg}
          className='z-50 w-full rounded-lg'
          alt='mecca: travel with idriz cela travel umrah'
        />
        <Image
          src={mesjidNaba}
          className='z-50 w-full h-fit rounded-lg'
          alt=''
        />
      </div>
    </>
  );
};

export default Hero;
