import { Skeleton } from '@/components/ui/skeleton';
import { fetchCurrentTrips } from '@/lib/fetching';
import { Months, UmrahPrice } from '@/types';
import { allMonths } from '@/util/date';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import hotel from '@/assets/icons/hotel-64.png';
import muslim from '@/assets/icons/muslim-48.png';
import { PlaneLanding, PlaneTakeoff, X } from 'lucide-react';
import ListPhoneContact from '../contact/ListPhoneContact';

const date = new Date();

const CurrentTrips = () => {
  const [isMount, setIsMount] = useState(false);

  const currentMonth = allMonths[date.getMonth() + 1] as Months;
  const currentYear = date.getFullYear();

  const { data, isLoading, isError, status, isFetched } = useQuery({
    queryKey: ['current-trips'],
    queryFn: async () => await fetchCurrentTrips(currentMonth, currentYear),
    retry: 5,
  });
  console.log(
    '🚀 ~ file: CurrentTrips.tsx:11 ~ CurrentTrips ~ currentMonth:',
    data
  );

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;

  const LoadingSkeleton = (
    <Skeleton className='h-[220px] w-[350px] p-4 py-5 px-5 rounded-xl'>
      <p className='flex items-center font-poppins font-semibold mb-2'>
        <span className='relative flex h-4 w-4 mr-2'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-4 w-4 bg-gray-600'></span>
        </span>
        <Skeleton className='h-4 w-40 bg-gray-500' />
      </p>

      <Skeleton className='mb-2 flex items-center gap-1'>
        <PlaneTakeoff className='h-5 w-5 mr-2' />
        <Skeleton className='h-4 w-10 bg-gray-500' />
        <Skeleton className='h-4 w-20 bg-gray-500' />
      </Skeleton>
      <Skeleton className='flex gap-1 items-center '>
        <PlaneTakeoff className='h-5 w-5 mr-2' />
        <Skeleton className='h-4 w-10 bg-gray-500' />
        <Skeleton className='h-4 w-20 bg-gray-500' />
      </Skeleton>
    </Skeleton>
  );

  return (
    <div className='w-full flex flex-col  gap-4 md:gap-y-10 lg:flex-row  md:items-center justify-center  '>
      {isLoading && !isError && LoadingSkeleton}
      {isFetched &&
        data.data.map((trip: any) => {
          const {
            year,
            departing,
            arriving,
            isAvailable,
            price: prices,
          } = trip.attributes;

          const inputDeparting = new Date(departing);
          const inputArriving = new Date(arriving);

          // Format the date in Albanian
          const formattedDepartingDate = new Intl.DateTimeFormat('sq-AL', {
            day: 'numeric',
            month: 'long',
          }).format(inputDeparting);

          const formattedArrivingDate = new Intl.DateTimeFormat('sq-AL', {
            day: 'numeric',
            month: 'long',
          }).format(inputArriving);

          return (
            <div
              key={trip.slug}
              className='relative shadow-2xl text-white min-w-[300px] w-full md:w-[400px]  max-h-[300px] my-auto mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 ring-2 ring-cyan-600-500  py-3 pb-5 px-6 rounded-xl'
            >
              <p className='flex items-center justify-center text-lg drop-shadow-md font-poppins text-center font-bold mb-1'>
                {isAvailable && (
                  <span className='relative flex h-4 w-4 mr-2'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-4 w-4 bg-purple-600'></span>
                  </span>
                )}
                {trip?.attributes?.title}
              </p>

              {/* nisja-kthimi */}
              <div className='flex flex-col md:flex-row'>
                <h3 className='flex mb-1 mr-4'>
                  <PlaneTakeoff className='h-5 w-5 mr-2 ' />
                  <span className='text-indigo-900'>
                    Tirana: <strong>{formattedDepartingDate}</strong>
                  </span>
                </h3>
                <h3 className='flex mb-1'>
                  <PlaneLanding className='h-5 w-5 mr-2 ' />{' '}
                  <span className='text-indigo-900'>
                    Jeddah: <strong>{formattedArrivingDate}</strong>
                  </span>
                </h3>
              </div>

              {/* cmimet */}
              <div className='flex flex-col items-center gap-y-2 mt-1 py-1 w-full'>
                <div className='flex items-center'>
                  <Image src={hotel} className='h-8 w-8 ' alt='hotel umrah' />
                  <h2 className='text-muted'>Hotelet në Mekke dhe Medine</h2>
                </div>

                <div className='flex items-center  gap-x-6 mb-1'>
                  {prices.map((price: UmrahPrice) => {
                    return (
                      <div
                        key={price.id}
                        className='flex flex-col items-center justify-center ring-1 rounded-xl ring-sky-400  px-4 py-2 drop-shadow-md shadow-white'
                      >
                        <div className='flex items-end gap-0.5 text-green-950'>
                          <Image
                            src={muslim}
                            className='h-6 w-6'
                            alt='hotel muslim person'
                          />
                          <X className='h-4 w-4 mb-0.5' />
                          <span className='text-md'>
                            {price.room.slice(5, 6)}
                          </span>
                        </div>

                        <div className='text-indigo-100  text-xs md:text-md  font-extrabold'>
                          {price.value} {price.currency}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <ListPhoneContact />
              </div>

              <p className='text-sm font-bold text-purple-800 absolute bottom-0 right-4'>
                *Çmimet janë për person
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default CurrentTrips;
