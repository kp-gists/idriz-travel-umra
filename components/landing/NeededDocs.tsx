import { neededDocs } from '@/util/constants';
import getIcon from '@/util/functions';
import { Info } from 'lucide-react';
import React from 'react';

const NeededDocs = () => {
  return (
    <div className='flex items-center justify-start gap-x-4  md:justify-center  border  md:w-fit border-blue-100 px-3 md:px-6 py-2 bg-indigo-300 rounded-md drop-shadow-xl'>
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
  );
};

export default NeededDocs;
