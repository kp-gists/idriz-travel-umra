import React from 'react';
import Image from 'next/image';
import { CheckSquare, Phone } from 'lucide-react';

import idrizTravel from '@/assets/imgs/idriz-travel-umre.jpg';
import {
  blue_gradiant,
  indigo_gradiant,
  pink_gradiant,
} from '@/util/gradients';
import ListPhoneContact from '../contact/ListPhoneContact';
import { visitingPlaces } from '@/util/constants';

type Props = {};

const EjaNeUmreSection = (props: Props) => {
  return (
    <section className='relative md:pt-0  w-full h-full'>
      <div className='w-full  gap-6 flex flex-col  md:flex-row items-center justify-center'>
        <div className='relative w-full md:w-1/2 z-20 h-full  flex flex-col justify-between p-8'>
          <div className='h-full w-full text-center flex flex-col gap-y-2 pb-8 '>
            <h1
              className={
                'text-lg md:text-2xl text-center mb-4 font-bold font-poppins'
              }
            >
              Eja edhe ti në Umre!
            </h1>

            <p className='font-hand text-2xl pb-8'>
              “Kryeni haxhin dhe umren për hir të Allahut…” [El Bekare: 196.]
            </p>

            <h2 className='text-center text-2xl font-sans font-semibold text-gray-800 pb-2'>
              Udhëtimi i jetës ne vendet e shenjta:
            </h2>
            <ol className='flex flex-col md:flex-row justify-around gap-4 pb-4 flex-wrap'>
              {visitingPlaces.map((place) => (
                <li
                  key={place}
                  className='flex items-center text-md font-poppins'
                >
                  <CheckSquare className='h-4 w-4 text-green-600 mr-1' />{' '}
                  {place}
                </li>
              ))}
            </ol>
          </div>

          <div className='max-w-[300px] absolute bottom-0 right-1/2 translate-x-1/2'>
            <ListPhoneContact
              title={
                <>
                  <Phone className='h-4 w-4 mr-2' /> Telefono Tani
                </>
              }
            />
          </div>
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
