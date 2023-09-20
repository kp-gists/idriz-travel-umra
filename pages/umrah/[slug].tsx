import PageLayout from '@/components/Layouts/PageLayout';
import { fetchUmrahTrips } from '@/lib/fetching';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type Props = {
  umrahTrip: any;
};

const UmrahTrip = ({ umrahTrip }: Props) => {
  return (
    <PageLayout title={umrahTrip?.title}>
      <div className='flex flex-col my-8'>
        <h1>{umrahTrip?.title}</h1>
        <div>{JSON.stringify(umrahTrip)}</div>
      </div>
    </PageLayout>
  );
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

  if (!slug)
    return {
      notFound: true,
    };

  const umrahs = await fetchUmrahTrips();

  const umrahTrip = umrahs?.data?.filter(
    (umrah: any) => umrah.attributes.slug === slug
  );

  if (umrahTrip?.length > 0) {
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
