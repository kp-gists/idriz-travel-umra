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

  // `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?filters[month][$eq]=${month}&filters[year][$eq]=${currentYear}`
  return axios
    .get(
      `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?${qsCurrentTrips}`
    )
    .then((res) => res.data)
    .catch((e) => console.log({ e }));
};

export const fetchTripById = async (id: number) => {
  const qsCurrentTrips = qs.stringify(
    {
      populate: {
        price: true,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  // `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?filters[month][$eq]=${month}&filters[year][$eq]=${currentYear}`
  return axios
    .get(
      `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips/${id}?${qsCurrentTrips}`
    )
    .then((res) => res.data)
    .catch((e) => console.log({ e }));
};

export const fetchTripBySlug = async (slug: string) => {
  const qsCurrentTrips = qs.stringify(
    {
      populate: {
        price: true,
        description: true,
        image: true,
        umrah_hotels: {
          populate: {
            img: true,
          },
        },
        umrah_tour_guides: {
          populate: {
            avatar: true,
            social_networks: true,
          },
        },
        seo: {
          populate: {
            meta_img: true,
          },
        },
      },
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  // `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?filters[month][$eq]=${month}&filters[year][$eq]=${currentYear}`
  return axios
    .get(
      `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?${qsCurrentTrips}`
    )
    .then((res) => res.data)
    .catch((e) => console.log({ e }));
};

export const fetchUmrahTrips = async () => {
  const qsTrips = qs.stringify(
    {
      populate: {
        price: true,
        description: true,
        umrah_hotels: {
          populate: {
            img: true,
          },
        },
        umrah_tour_guides: {
          populate: {
            avatar: true,
            social_networks: true,
          },
        },
      },
      sort: {
        departing: 'asc',
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  // `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?filters[month][$eq]=${month}&filters[year][$eq]=${currentYear}`
  return axios
    .get(
      `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?${qsTrips}`
    )
    .then((res) => res.data)
    .catch((e) => console.log({ e }));
};
export const fetchUmrahPage = async () => {
  const qsPage = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  // `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?filters[month][$eq]=${month}&filters[year][$eq]=${currentYear}`
  return axios
    .get(
      `https://strapi-ts-blog-production.up.railway.app/api/idriz-travel-umra?${qsPage}`
    )
    .then((res) => res.data)
    .catch((e) => console.log({ e }));
};

export const fetchServices = async () => {
  const qsPage = qs.stringify(
    {
      populate: {
        services: {
          populate: '*',
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  // `https://strapi-ts-blog-production.up.railway.app/api/umrah-trips?filters[month][$eq]=${month}&filters[year][$eq]=${currentYear}`
  return axios
    .get(
      `https://strapi-ts-blog-production.up.railway.app/api/idriz-travel-umra?${qsPage}`
    )
    .then((res) => res.data)
    .catch((e) => console.log({ e }));
};
