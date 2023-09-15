import React from 'react';
import CWK from './CWK';
import Image from 'next/image';

import idrizTravel from '@/assets/imgs/idriz-travel-umre.jpg';
import { GanttChart, HelpingHand, Home } from 'lucide-react';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='w-full py-2 px-4 mt-8 pt-4  border-t-2  border-gray-300/90'>
      <div className='w-full flex flex-col  md:flex-row gap-x-4 mb-8 md:items-center justify-between md:justify-center '>
        <div className='flex items-center w-full h-full gap-x-3 mb-8 md:mb-0'>
          <div className='w-14 h-14 md:w-20 md:h-20  rounded-lg'>
            <Image
              src={idrizTravel}
              width={80}
              height={80}
              alt=''
              className='rounded-sm'
              loading='lazy'
            />
          </div>
          <div className='md:w-full md:h-full'>
            <p className='font-poppins text-xl font-bold'>Idriz Travel Umrah</p>
            <p className='italic font-semibold text-zinc-600'>
              Viza - Perkthime - Kurbane
            </p>
          </div>
        </div>

        <ul className='flex flex-col gap-3 mb-8 md:mb-0 justify-center md:justify-start md:items-center md:flex-row font-poppins'>
          <Link href='/'>
            <li className='flex text-md text-zinc-900 '>
              <Home className='h-6 w-6 text-zinc-500 mr-2' /> Kreu
            </li>
          </Link>
          <Link href='/#packages'>
            <li className='flex text-md ml-8 md:ml-0'>
              <GanttChart className='h-6 w-6 text-zinc-500 mr-2' /> Paketat
            </li>
          </Link>
          <Link href='/#services'>
            <li className='flex text-md ml-16 md:ml-0'>
              <HelpingHand className='h-6 w-6 text-zinc-500 mr-2' /> Sherbimet
            </li>
          </Link>
        </ul>
      </div>

      <CWK />
    </footer>
  );
};

export default Footer;
