import { fetchUmrahTrips } from '@/lib/fetching';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type Props = {
  umrahTrip: string;
};

const UmrahTrip = ({ umrahTrip }: Props) => {
  console.log(
    '🚀 ~ file: [slug].tsx:9 ~ UmrahTrip ~ umrahTrip:',
    umrahTrip,
    {}
  );
  return <div>UmrahTrip</div>;
};

export const getStaticPaths: GetStaticPaths = async (props) => {
  const umrahs = await fetchUmrahTrips();

  if (umrahs?.data?.length) {
    const paths = umrahs?.data?.map((umrah: any) => ({
      params: {
        slug: umrah.attributes.slug,
      },
    }));

    return {
      paths,
      fallback: true,
    };
  }

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (props) => {
  const slug: string = props?.params?.slug as string;
  console.log(
    '🚀 ~ file: [slug].tsx:46 ~ constgetStaticProps:GetStaticProps= ~ slug:',
    slug
  );

  const umrahs = await fetchUmrahTrips();

  const umrahTrip = umrahs?.data?.filter(
    (umrah: any) => umrah.attributes.slug === slug
  );

  if (umrahTrip?.length) {
    return {
      props: {
        umrahTrip: umrahTrip[0].attributes,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default UmrahTrip;
