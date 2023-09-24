import React from 'react';
import TitleSection from '../TitleSection';
import { neededDocs, packageServices } from '@/util/constants';
import getIcon from '@/util/functions';
import { Info } from 'lucide-react';

type Props = {};

const UmrahPackages = (props: Props) => {
  return (
    <section id='packages' className='pt-32'>
      <TitleSection
        hasDivider
        title='Paketa e Umres'
        subtitle='Çfarë përmban paketa e umres?'
      >
        <div className='flex flex-col md:flex-row py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {packageServices.map((service) => (
              <div
                key={service.key}
                className='flex flex-col  items-center justify-center border w-full  border-blue-100 px-4 py-2 bg-blue-50 rounded-md drop-shadow-xl'
              >
                <div className='p-3 gap-2 flex w-full z-10 pb-0 subpixel-antialiased items-center shrink-0'>
                  <div className='border shadow-inner mr-2 overflow-hidden rounded-full p-[10px] border-gray-200 bg-blue-200 '>
                    {getIcon(service.key)}
                  </div>
                  <p className='capitalize text-md font-semibold  drop-shadow-lg md:text-lg '>
                    {service.title}
                  </p>
                </div>

                <div className='w-full text-left p-5'>
                  <p className=' font-normal text-base m-0'> {service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TitleSection>
    </section>
  );
};

export default UmrahPackages;
