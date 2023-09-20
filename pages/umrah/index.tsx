import PageLayout from '@/components/Layouts/PageLayout';
import { fetchTripBySlug, fetchUmrahTrips } from '@/lib/fetching';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type Props = {};

const UmrahPage = (props: Props) => {
  const { data, isLoading, isError, status, isFetched, isSuccess } = useQuery({
    queryKey: ['recent-trips'],
    queryFn: async () => await fetchUmrahTrips(),
    retry: 5,
  });
  console.log('🚀 ~ file: index.tsx:14 ~ UmrahPage ~ data:', data);

  const singleTrip = fetchTripBySlug('umrah-tetor-nentor-2023');
  console.log('🚀 ~ file: index.tsx:17 ~ UmrahPage ~ singleTrip:', singleTrip);
  return (
    <PageLayout
      title='All Our Umrah'
      description='list of our umrahs traveled.'
    >
      <div>UmrahPage {}</div>
    </PageLayout>
  );
};

export default UmrahPage;
