import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Calendar,
  CalendarCheck,
  CalendarClock,
  ListTodo,
  PercentCircle,
} from 'lucide-react';
import TitleSection from '../TitleSection';
import { travelCountries } from '@/util/constants';
import Image from 'next/image';

const ActionButtons = () => {
  const router = useRouter();
  return (
    <TitleSection
      hasDivider
      title='Umra Oferta'
      subtitle='Idriz Travel Umra Lista'
    >
      <div className='p-4 md:p-8  flex flex-col md:flex-row gap-8 items-center justify-center pb-20'>
        <button
          onClick={() => router.push('/oferta')}
          title='Kap Ofertën'
          className='group w-full md:w-fit flex flex-col gap-4 px-6 py-4 border rounded-md shadow-lg hover:scale-105'
        >
          <h3 className='text-md font-semibold flex items-center'>
            <PercentCircle className='h-8 w-8 mr-2 text-blue-500 group-hover:scale-105' />{' '}
            Oferta & Paketa Umra
          </h3>
          <p className='text-center ml-3 text-sm max-w-sm'>
            Idriz Travel Umra vjen cdo jave me oferta të ndryshme nga vendet:
          </p>
          <ul className='flex flex-col gap-3'>
            {travelCountries.map((country) => (
              <li
                key={country.key}
                className='flex justify-start items-center gap-2'
              >
                <Image
                  src={country.flag}
                  alt={country.key || 'country'}
                  width={32}
                  height={32}
                />{' '}
                {country.text}
              </li>
            ))}
          </ul>
        </button>

        <button
          onClick={() => router.push('/umrah')}
          title='List umrahs'
          className='group flex flex-col gap-4 px-6 py-4 border rounded-md shadow-lg  hover:scale-105'
        >
          <h3 className='text-md font-semibold flex items-center'>
            <ListTodo className='h-8 w-8 mr-2 text-gray-500 group-hover:scale-105' />{' '}
            Listë e umreve tona ndër muaj
          </h3>
          <p className='text-center ml-3 text-sm max-w-sm'>
            Udhetimet tona vijojn çdo jave për me shume detaje njihuni me
            paketat tona të shumta.
          </p>
          <ul className='flex flex-col items-start gap-3'>
            <li className='flex items-center'>
              <CalendarCheck className='text-green-500 h-6 w-6 mr-2' /> Muaji
              Shtator 2023
            </li>
            <li className='flex items-center'>
              <CalendarCheck className='text-green-500 h-6 w-6 mr-2' /> Muaji
              Tetor 2023
            </li>
            <li className='flex items-center'>
              <CalendarClock className='text-green-500 h-6 w-6 mr-2' /> Muaji
              Nëntor 2023
            </li>
            <li className='flex items-center'>
              <CalendarClock className='text-green-500 h-6 w-6 mr-2' /> Muaji
              Dhjetor 2023
            </li>
          </ul>
        </button>
      </div>
    </TitleSection>
  );
};

export default ActionButtons;
