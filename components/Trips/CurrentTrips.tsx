import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { Plane, PlaneTakeoff, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import ListPhoneContact from '@/components/contact/ListPhoneContact';

import hotel from '@/assets/icons/hotel-64.png';
import muslim from '@/assets/icons/muslim-48.png';

import { fetchCurrentTrips } from '@/lib/fetching';
import { Months, UmrahPrice } from '@/types';
import { allMonths } from '@/util/date';

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

  const LoadingSkeleton = () => (
    <Skeleton className='h-[482px] crownCardBg m-w-[320px] mx-0 p-4 py-5 px-5 pt-[200px] relative flex flex-col justify-between rounded-md'>
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

      <Skeleton className='flex gap-1 items-center mb-4'>
        <PlaneTakeoff className='h-5 w-5 mr-2' />
        <Skeleton className='h-4 w-10 bg-gray-500' />
        <Skeleton className='h-4 w-20 bg-gray-500' />
      </Skeleton>

      <Skeleton className='h-6 w-full  bg-gray-500 my-4' />

      <Skeleton className='flex gap-x-2 justify-around items-center mb-2'>
        <Skeleton className='h-10 w-14 bg-gray-500' />
        <Skeleton className='h-10 w-14 bg-gray-500' />
        <Skeleton className='h-10 w-14 bg-gray-500' />
      </Skeleton>
    </Skeleton>
  );

  return (
    <div className='w-full h-full relative flex-col items-center'>
      <h1></h1>

      <div className='w-full flex flex-col  gap-4 md:gap-y-10 lg:flex-row  md:items-center justify-center  '>
        {isLoading &&
          !isError &&
          Array.from({ length: 3 }).map((_, idx) => (
            <LoadingSkeleton key={idx} />
          ))}
        {isFetched &&
          data?.data?.map((trip: any) => {
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
                className='z-10 crownCardBg relative ring ring-indigo-500 shadow-2xl text-white min-w-[300px] w-full md:w-[600px]   rounded-lg'
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
                <div className='flex justify-around flex-row '>
                  <h3 className='flex  mb-1 mr-4'>
                    <Plane className='h-5 w-5 mr-2 ' />
                    <span className='text-indigo-100'>
                      Tirana: <br /> <strong>{formattedDepartingDate}</strong>
                    </span>
                  </h3>
                  <h3 className='flex mb-1'>
                    <Plane className='h-5 w-5 mr-2 ' />{' '}
                    <span className='text-indigo-100'>
                      Jeddah: <br /> <strong>{formattedArrivingDate}</strong>
                    </span>
                  </h3>
                </div>

                {/* cmimet */}
                <div className='flex flex-col items-center px-2  gap-y-2   w-full'>
                  <div className='flex items-center'>
                    <Image
                      src={hotel}
                      className='h-8 w-8 mr-2'
                      alt='hotel umrah'
                      loading='lazy'
                    />
                    <h2 className='text-muted text-md'>
                      Hotelet në Mekke dhe Medine
                    </h2>
                  </div>

                  <div className='flex items-center justify-around w-full lg:w-fit px-1 my-2 gap-x-2 md:gap-x-6 lg:gap-x-3'>
                    {prices.map((price: UmrahPrice) => {
                      return (
                        <div
                          key={price.id}
                          className='flex flex-col w-full items-center justify-center ring-1 rounded-xl ring-sky-400 mx-1 px-1 md:px-4 py-2 drop-shadow-md shadow-white'
                        >
                          <div className='flex items-end gap-0.5 text-white'>
                            <Image
                              src={muslim}
                              className='h-6 w-6'
                              alt='hotel muslim person'
                              loading='lazy'
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

                <p className='text-sm font-bold text-white text-right px-4 py-1 ml-auto'>
                  *Çmimet janë për person
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CurrentTrips;
