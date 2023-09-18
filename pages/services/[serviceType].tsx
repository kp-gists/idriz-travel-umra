import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';

type Props = {
  serviceItem: any;
};

const ServicePage = (props: Props) => {
  return <div>ServicePage</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const services = { data: [] };

  if (services) {
    const paths = services?.data.map((service) => ({
      params: {
        slug: service?.slug,
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

  const variables = {
    serviceSlug: slug,
  };

  const fetchedService = [];

  if (fetchedService?.length) {
    return {
      props: {
        serviceItem,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default ServicePage;
