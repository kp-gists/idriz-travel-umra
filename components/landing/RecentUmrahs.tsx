import React from 'react';
import TitleSection from '@/components/TitleSection';
import SloganOne from '@/components/landing/SloganOne';
import { useQuery } from '@tanstack/react-query';
import { fetchUmrahTrips } from '@/lib/fetching';
import TripCard from '@/components/Trips/TripCard';
import { GetServerSideProps } from 'next';

type Props = {};

const RecentUmrahs = (props: Props) => {
  const { data, isLoading, isError, status, isFetched, isSuccess } = useQuery({
    queryKey: ['recent-trips'],
    queryFn: async () => await fetchUmrahTrips(),
    retry: 5,
  });

  if (isError) return null;

  return (
    <div id='recent-umrahs'>
      <SloganOne isLoading={false} />

      <div className='max-w-7xl mx-auto py-8'>
        {isLoading ? (
          'loading'
        ) : (
          <TitleSection title='Udhëtimen Tona' subtitle='Idriz Travel Umra' hasDivider className='mt-8'>
            {/* list */}
            <div className='w-full p-4'>
              {data?.data?.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4'>
                  {data?.data?.slice(0, 8).map((trip: any) => (
                    <TripCard key={trip.id} trip={trip.attributes} />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </TitleSection>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default RecentUmrahs;
