import PageLayout from '@/components/Layouts/PageLayout';
import { fetchServices } from '@/lib/fetching';
import { GetStaticProps } from 'next';
import React from 'react';

type Props = {
  serviceItem: any;
};

const page = 'umrah';

const ServicePage = (props: Props) => {
  return (
    <PageLayout title='Umrah'>ServicePage {JSON.stringify(props)}</PageLayout>
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

export default ServicePage;
