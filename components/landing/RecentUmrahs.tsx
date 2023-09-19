import React from 'react';
import TitleSection from '@/components/TitleSection';
import SloganOne from '@/components/landing/SloganOne';
import { useQuery } from '@tanstack/react-query';
import { fetchUmrahTrips } from '@/lib/fetching';
import TripCard from '@/components/Trips/TripCard';

type Props = {};

const RecentUmrahs = (props: Props) => {
  const { data, isLoading, isError, status, isFetched, isSuccess } = useQuery({
    queryKey: ['recent-trips'],
    queryFn: async () => await fetchUmrahTrips(),
    retry: 5,
  });
  console.log('🚀 ~ file: RecentUmrahs.tsx:16 ~ RecentUmrahs ~ data:', data);

  if (isError) return null;

  return (
    <div id='recent-umrahs'>
      <SloganOne isLoading={false} />
      {isLoading ? (
        'loading'
      ) : (
        <TitleSection title='' hasDivider className='mt-8'>
          {/* list */}
          <div className='w-full '>
            {data?.data?.length > 0 ? (
              <div className='flex flex-wrap gap-8'>
                {data?.data?.slice(0, 8).map((trip: any) => (
                  <TripCard key={trip.id} trip={trip.attributes} />
                ))}
                <TripCard
                  trip={{
                    title: 'Nisemi cdo jave nga Tirana',
                    slug: '',
                    departing: false,
                    arriving: false,
                  }}
                />
              </div>
            ) : (
              ''
            )}
          </div>
        </TitleSection>
      )}
    </div>
  );
};

export default RecentUmrahs;
