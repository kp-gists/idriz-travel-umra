import { fetchCurrentTrips } from '@/lib/fetching';
import { Months } from '@/types';
import { allMonths } from '@/util/date';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { PlaneLanding, PlaneTakeoff } from 'lucide-react';

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
    <Skeleton className='h-[120px] w-[250px] p-4 py-5 px-5 rounded-xl'>
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
    <div className='w-full flex flex-col  md:flex-row justify-start md:items-center items-start md:justify-between '>
      {isLoading && !isError && LoadingSkeleton}
      {isFetched &&
        data.data.map((trip: any) => {
          const { year, departing, arriving, isAvailable } = trip.attributes;

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
              className='shadow-2xl text-white max-w-xs my-auto mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 ring-2 ring-cyan-600-500 p-4 py-5 px-5 rounded-xl'
            >
              <p className='flex items-center font-poppins font-semibold mb-1'>
                {isAvailable && (
                  <span className='relative flex h-4 w-4 mr-2'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-4 w-4 bg-purple-600'></span>
                  </span>
                )}
                {trip?.attributes?.title}
              </p>
              <h3 className='flex '>
                <PlaneTakeoff className='h-5 w-5 mr-2' />
                <span className='text-indigo-900'>
                  Tirana: <strong>{formattedDepartingDate}</strong>
                </span>
              </h3>
              <h3 className='flex '>
                <PlaneLanding className='h-5 w-5 mr-2' />{' '}
                <span className='text-indigo-900'>
                  Jeddah: <strong>{formattedArrivingDate}</strong>
                </span>
              </h3>
            </div>
          );
        })}
    </div>
  );
};

export default CurrentTrips;
