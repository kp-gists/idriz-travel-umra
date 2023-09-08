import qs from 'qs';
export const qsCurrentTrips = qs.stringify(
  {
    populate: {
      price: true,
    },
  },
  {
    encode: true, // prettify URL
  }
);
