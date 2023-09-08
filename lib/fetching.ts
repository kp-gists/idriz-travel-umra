import { Months } from '@/types';
import { qsCurrentTrips } from './queryStrings';
import qs from 'qs';
import axios from 'axios';

export const fetchCurrentTrips = async (month: Months, currentYear: number) => {
  const qsCurrentTrips = qs.stringify(
    {
      populate: {
        price: true,
      },
      filters: {
        month: {
          $eq: month,
        },
        year: {
          $eq: currentYear,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  console.log(
    '🚀 ~ file: fetching.ts:24 ~ fetchCurrentTrips ~ qsCurrentTrips:',
    qsCurrentTrips
  );
  // `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?filters[month][$eq]=${month}&filters[year][$eq]=${currentYear}`
  return axios
    .get(
      `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?${qsCurrentTrips}`
    )
    .then((res) => res.data);
};
