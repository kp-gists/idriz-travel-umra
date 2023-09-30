import Image from 'next/image';
import React from 'react';
import medal from '@/assets/art/vecteezy_luxury-golden-ornamenta.webp';
import { convertDate } from '@/util/date';
import { BadgeEuro, Clock, MousePointerClick, Plane } from 'lucide-react';
import Link from 'next/link';

type Props = {
  trip: any;
};

const TripCard = ({ trip }: Props) => {
  const cmimi = trip?.price?.find((price: any) => price.room === 'roomX4');

  const lowPrice = cmimi ? cmimi.value : 990;

  return (
    <article className='border border-indigo-200 bg-indigo-100 drop-shadow-md shadow-inner shadow-indigo-500 rounded-lg  px-4 py-3  '>
      <div className='flex flex-row gap-x-4 items-center mb-4'>
        <div>
          <Image
            src={medal}
            alt={trip.title}
            width={50}
            height={50}
            className='rounded-full ring-2 ring-yellow-500 shadow-md shadow-yellow-700'
          />
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <h1 className='text-center font-bold text-md md:text-lg'>
            {trip.title}
          </h1>
        </div>
      </div>

      <div className='w-full'>
        {trip.departing ? (
          <p className='flex items-center gap-x-1'>
            <Plane className='h-5 w-5 mr-2 ' />
            Nisja nga Tirana me{' '}
            <strong className='capitalize'>
              {' '}
              {convertDate(trip.departing)}
            </strong>
          </p>
        ) : null}
        {trip.arriving ? (
          <p className='flex items-center gap-x-1'>
            <Plane className='h-5 w-5 mr-2 ' />
            Kthimi nga Jeddah{'  '}
            <strong className='capitalize'>
              {' '}
              {convertDate(trip.arriving)}
            </strong>
          </p>
        ) : null}
      </div>

      <div className='w-full py-1'>
        <p className='flex items-center justify-end text-sm w-full border-t-gray-300 pt-1 border-t '>
          <Clock className='h-5 w-5 mr-2 ' /> Qëndrimi:{' 11 ditë'}
        </p>

        <p className='flex items-center w-fit  text-sm mt-2 px-2 py-1 rounded-md bg-blue-200/50'>
          <BadgeEuro className='h-5 w-5 mr-2 text-slate-900 ' /> Çmimet fillojne
          nga: {lowPrice}€
        </p>
      </div>

      <Link
        href={`https://idriztravelumra.com/umra/${trip.slug}`}
        className='flex items-center mt-4 justify-end w-full'
      >
        ...më shumë detaje <MousePointerClick className='h-6 w-8' />
      </Link>
    </article>
  );
};

export default TripCard;
