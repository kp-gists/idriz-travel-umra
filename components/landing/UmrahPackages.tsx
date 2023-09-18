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
      <>
        <div
          id='packages'
          className='flex flex-wrap items-center justify-center gap-10 mt-8'
        >
          {packageServices.map((service) => (
            <div
              key={service.key}
              className='flex items-center justify-center border w-full md:w-fit border-indigo-400 px-4 py-2 bg-indigo-300 rounded-md drop-shadow-xl'
            >
              <div className='border shadow-inner shadow-purple-950 border-purple-500 bg-purple-400 mr-2 overflow-hidden rounded-full p-[10px] '>
                {getIcon(service.key)}
              </div>
              <p className='capitalize text-md drop-shadow-lg md:text-lg '>
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-start gap-x-4 h-full md:justify-center  border mt-24  md:w-fit border-blue-100 px-3 md:px-6 py-2 bg-indigo-300 rounded-md drop-shadow-xl'>
          <div className='border shadow-inner shadow-blue-200 border-blue-500 bg-blue-500 md:mr-4  rounded-full p-2  md:p-[10px] '>
            <Info className='w-4 h-4 md:h-8 md:w-8 text-white' />
          </div>

          <div>
            <h1 className='font-poppins text-md md:text-lg font-semibold'>
              Dokumentat e nevojshme:
            </h1>
            <div className='flex flex-col gap-2 items-start px-2 py-3'>
              {neededDocs.map((doc) => (
                <p
                  className='capitalize h-8  text-sm drop-shadow-lg md:text-lg  flex justify-center items-center gap-x-2'
                  key={doc.key}
                >
                  {getIcon(doc.key)} {doc.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </>
    </TitleSection>
  );
};

export default UmrahPackages;
