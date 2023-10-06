import PageLayout from '@/components/Layouts/PageLayout';
import { DynamicContact } from '@/components/contact/DynamicContact';
import { fetchServices } from '@/lib/fetching';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';

type Props = {
  serviceItem: any;
};

const page = 'kurban';

const ServicePageKurban = ({ serviceItem }: Props) => {
  return (
    <PageLayout title='Kurbane Ne Mekke'>
      <div className='px-4 py-12'>
        <div
          className='flex flex-col justify-start gap-12 text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto'
          dangerouslySetInnerHTML={{ __html: serviceItem.content }}
        />

        <div className='max-w-5xl mx-auto py-12'>
          <h1 className='py-4 capitalize text-lg md:text-xl lg:text-3xl bold text-center'>
            Na Kontaktoni
          </h1>
          <DynamicContact />
        </div>
      </div>
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
        serviceItem: service[0],
      },
    };
  }

  return {
    notFound: true,
  };
};

export default ServicePageKurban;
