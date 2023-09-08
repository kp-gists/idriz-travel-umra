import { fetchCurrentTrips } from '@/lib/fetching';
import { Months } from '@/types';
import { useQuery } from '@tanstack/react-query';

export default function useCurrentTrips(month: Months) {
  return useQuery(['current-trips'], fetchCurrentTrips(month));
}
