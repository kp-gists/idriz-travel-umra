import React from 'react';
import TitleSection from '../TitleSection';
import { neededDocs, packageServices } from '@/util/constants';
import getIcon from '@/util/functions';
import { Info } from 'lucide-react';

type Props = {};

const UmrahPackages = (props: Props) => {
  return (
    <TitleSection
      hasDivider
      title='Paketa e Umres'
      subtitle='Çfarë përmban paketa e umres?'
    >
      <div className='flex flex-col md:flex-row'>
        <div id='packages' className='grid grid-cols-3 gap-4 mt-8'>
          {packageServices.map((service) => (
            <div
              key={service.key}
              className='flex items-center justify-center border w-full md:w-fit border-yellow-50 px-4 py-2 bg-blue-400 rounded-md drop-shadow-xl'
            >
              <div className='border shadow-inner mr-2 overflow-hidden rounded-full p-[10px] '>
                {getIcon(service.key)}
              </div>
              <p className='capitalize text-md drop-shadow-lg md:text-lg '>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </TitleSection>
  );
};

export default UmrahPackages;
