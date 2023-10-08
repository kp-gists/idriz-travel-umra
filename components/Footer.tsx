import React from 'react';
import CWK from './CWK';
import Image from 'next/image';

import idrizTravel from '@/assets/imgs/idriz-travel-umre.jpg';
import {
  FileStack,
  GanttChart,
  HelpingHand,
  Home,
  ListOrdered,
  ListTodo,
  Palmtree,
} from 'lucide-react';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='w-full py-2 px-4 mt-8 pt-4  border-t-2  border-gray-300/90'>
      <div className='w-full flex flex-col  md:flex-row gap-x-4 mb-8 md:items-center justify-between md:justify-around '>
        <div className='flex items-center h-full gap-x-3 mb-8 md:mb-0'>
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
            <p className='font-poppins text-xl font-bold'>Idriz Travel Umra</p>
            <p className='italic font-semibold text-zinc-600'>
              Viza - Umre - Perkthime - Kurbane
            </p>
          </div>
        </div>

        <ul className='flex flex-col gap-4 mb-8 md:mb-0 justify-center md:justify-start md:items-center md:flex-row font-poppins'>
          <li>
            <Link href='/' className='flex text-md text-zinc-900 '>
              <Home className='h-6 w-6 text-zinc-500 mr-2' /> Kreu
            </Link>
          </li>
          <li>
            <Link
              href='https://idriztravelumra.com/#packages'
              className='flex text-md ml-8 md:ml-0'
            >
              <GanttChart className='h-6 w-6 text-zinc-500 mr-2' /> Paketat
            </Link>
          </li>
          <li>
            <Link
              href='https://idriztravelumra.com/#services'
              className='flex text-md ml-16 md:ml-0'
            >
              <HelpingHand className='h-6 w-6 text-zinc-500 mr-2' /> Sherbimet
            </Link>
          </li>

          <li>
            <Link
              href='https://idriztravelumra.com/umra'
              className='flex text-md ml-20 md:ml-0'
            >
              <ListTodo className='h-6 w-6 text-zinc-500 mr-2' /> Lista Umra
            </Link>
          </li>
          <li>
            <Link
              href='https://idriztravelumra.com/oferta'
              className='flex text-md ml-20 md:ml-0'
            >
              <ListOrdered className='h-6 w-6 text-zinc-500 mr-2' /> Oferta Umra
            </Link>
          </li>
        </ul>
      </div>

      <div className='max-w-4xl mx-auto flex flex-col items-center justify-center gap-3 py-4'>
        <h1 className='capitalize text-md md:text-lg lg:text-xl'>
          Idriz Travel Umra Extra
        </h1>
        <p className='px-1 text-center'>
          Idriz Travel Umra është një agjenci udhëtimesh e fokusuar në shërbimet
          me Arabinë Saudite: <br /> viza, umre, kurbane, përkthime.
          <br />
          <br /> Mundeson vizita në: <br /> Mekke • Medine • Arafat • Muzdelife
          • Mina • Hira • Kuba • Uhud • Masjid Profetit (a.s)
        </p>

        <div className='border w-full ' />
        <ul className='flex flex-wrap gap-4 '>
          <li className='hover:underline'>
            <Link
              href='https://idriztravelumra.com/links'
              className='flex text-md ml-20 md:ml-0'
            >
              <Palmtree className='h-6 w-6 text-green-500 mr-2' /> Links
            </Link>
          </li>
          <li className='hover:underline'>
            <Link
              href='https://idriztravelumra.com/sitemap-0.xml'
              className='flex text-md ml-20 md:ml-0'
            >
              <FileStack className='h-6 w-6 text-zinc-500 mr-2' /> Site Map
            </Link>
          </li>
        </ul>
      </div>
      <CWK />
    </footer>
  );
};

export default Footer;
