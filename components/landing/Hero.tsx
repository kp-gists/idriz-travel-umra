import { Phone } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import CurrentTrips from '@/components/Trips/CurrentTrips';

import kaba from '@/assets/imgs/kaba.jpg';
import meccaBg from '@/assets/imgs/mecca-illustrator.jpg';
import meccaMedinah from '@/assets/imgs/mecca-medinah.jpg';
import mesjidNaba from '@/assets/imgs/medina-prophets-mosque.jpg';

type Props = {};

const pink_gradiant =
  'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]';
const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]';
const indigo_gradiant =
  'bg-gradient-to-r from-indigo-300 to-cyan-200 filter blur-[900px]';
const blue_gradiant =
  'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]';
const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900';
const text_gradient =
  ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text';

const Hero = (props: Props) => {
  return (
    <div className='relative'>
      <div className='w-full my-4 relative overflow-hidden '>
        <Image
          src={meccaMedinah}
          className='z-50 h-fit hidden md:visible object-cover md:block  md:object-contain w-screen  md:min-w-sm min-h-[200px] rounded-xl '
          alt=''
        />
        <Image
          src={kaba}
          className='z-50 h-fit visible md:hidden  object-fill w-screen  md:min-w-sm min-h-[200px] rounded-sm '
          alt=''
        />
      </div>

      <section className='relative flex pt-4 md:pt-0 flex-col lg:flex-row justify-start md:justify-start lg:justify-center items-center gap-12 w-full h-full mb-8'>
        <div className='w-full h-full relative lg:absolute top-0 lg:-top-10 left-0 right-0 '>
          <CurrentTrips />
        </div>

        <div className='w-full md:w-1/2 z-20 relative  mt-[450px] flex flex-col'>
          <h1
            className={
              'text-3xl md:text-4xl text-center mb-4 font-bold font-poppins'
            }
          >
            Eja edhe ti në Umre!
          </h1>
          <h2 className='text-center text-2xl font-sans font-semibold text-gray-800'>
            Vizito vendet e shenjta <strong>Mekke</strong>,{' '}
            <strong>Medinah</strong>,<strong>Arafat</strong>
          </h2>
          <Button
            variant='cta'
            className='my-2 bg-indigo-500 hover:bg-indigo-600 w-full md:w-44 mx-auto'
          >
            <Phone className='h-4 w-4 mr-2' /> Telefono Tani
          </Button>
        </div>

        <div className='w-full md:w-1/2 lg:mt-[450px]'>
          {/* gradient start */}
          <div className='relative  w-full h-full  overflow-hidden'>
            <Image
              src={kaba}
              className='z-50 w-full h-full object-cover  rounded-xl '
              alt=''
            />

            <p></p>
          </div>
          <div
            className={`absolute -z-10 w-[30%] h-[35%] left-0 md:left-1/2 top-0 ${pink_gradiant} `}
          />
          <div
            className={`absolute z-[0] w-[30%] h-[35%] top-1/3 left-20 ${indigo_gradiant} `}
          />

          <div
            className={`absolute z-[0] w-[50%] h-[50%] -right-2/3 top-2 ${blue_gradiant}`}
          />
          {/* gradient end */}
        </div>
      </section>

      <div className='flex flex-col gap-20'>
        <div className='w-full h-full relative'>
          <Image
            src={meccaBg}
            className='z-50 w-full rounded-lg'
            alt='mecca: travel with idriz cela travel umrah'
          />
        </div>

        <div className='w-full h-full relative'>
          <Image
            src={mesjidNaba}
            className='z-50 w-full h-fit rounded-lg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
