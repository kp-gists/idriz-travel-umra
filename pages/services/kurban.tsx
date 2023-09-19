import PageLayout from '@/components/Layouts/PageLayout';
import { fetchServices } from '@/lib/fetching';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';

type Props = {
  serviceItem: any;
};

const page = 'kurban';

const ServicePageKurban = (props: Props) => {
  return (
    <PageLayout title='Kurbane Ne Mekke'>
      ServicePage kurban : {JSON.stringify(props)}
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const fetchedService = await fetchServices();

  const service = fetchedService?.data?.attributes?.services?.filter(
    (item: any) => item.type === page
  );

  if (service) {
    return {
      props: {
        serviceItem: service,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default ServicePageKurban;
