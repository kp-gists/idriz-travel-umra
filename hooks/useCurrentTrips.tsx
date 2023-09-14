import { fetchCurrentTrips } from '@/lib/fetching';
import { Months } from '@/types';
import { useQuery } from '@tanstack/react-query';

export default async function useCurrentTrips(month: Months, year: number) {
  return useQuery(['current-trips'], await fetchCurrentTrips(month, year));
}
