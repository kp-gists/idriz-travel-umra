import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import CurrentTrips from '@/components/Trips/CurrentTrips';

import idrizTravel from '@/assets/imgs/idriz-travel-umre.jpg';
import {
  blue_gradiant,
  indigo_gradiant,
  pink_gradiant,
} from '@/util/gradients';
import TitleSection from '../TitleSection';
import ListPhoneContact from '../contact/ListPhoneContact';

type Props = {};

const EjaNeUmreSection = (props: Props) => {
  return (
    <section className='relative flex  md:pt-0 flex-col justify-center items-center gap-12  w-full h-full'>
      <div className='w-full flex-col gap-6 flex  md:flex-row items-center'>
        <div className='w-full md:w-1/2 z-20 relative flex flex-col'>
          <h1
            className={
              'text-3xl md:text-4xl text-center mb-4 font-bold font-poppins'
            }
          >
            Eja edhe ti në Umre!
          </h1>
          <h2 className='text-center text-2xl font-sans font-semibold text-gray-800 mb-4'>
            Vizito vendet e shenjta <strong>Mekke</strong>,{' '}
            <strong>Medinah</strong>,<strong>Arafat</strong>
          </h2>
          <ListPhoneContact
            title={
              <>
                <Phone className='h-4 w-4 mr-2' /> Telefono Tani
              </>
            }
          />
        </div>

        <div className='w-full md:w-1/2 '>
          {/* gradient start */}
          <div className='relative  w-full h-full p-0 md:p-8 overflow-hidden'>
            <Image
              src={idrizTravel}
              className='z-50 w-full h-full object-cover  rounded-xl '
              alt=''
              loading='lazy'
            />
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
      </div>
    </section>
  );
};

export default EjaNeUmreSection;
