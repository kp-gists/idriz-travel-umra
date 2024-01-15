import PageLayout from '@/components/Layouts/PageLayout';
import { DynamicContact } from '@/components/contact/DynamicContact';
import { fetchServices } from '@/lib/fetching';
import { GetStaticProps } from 'next';
import React from 'react';

type Props = {
  serviceItem: any;
};

const page = 'umrah';

const ServicePage = ({ serviceItem }: Props) => {
  return (
    <PageLayout title='Umre Nga Shqiperia'>
      <div className='px-4 py-12'>
        <div
          className='flex flex-col justify-start gap-12 text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto'
          dangerouslySetInnerHTML={{ __html: serviceItem.content }}
        />

        <div className='max-w-5xl mx-auto py-12'>
          <h1 className='py-4 capitalize text-lg md:text-xl lg:text-3xl bold text-center'>
            Na Kontaktoni për umre:
          </h1>

          <h2 className='my-4'>* Umre Nga Shqiperia</h2>
          <h2 className='my-4'>** Umre Nga Kosova</h2>
          <h2 className='my-4'>*** Umre Nga Maqedonia E Veriut</h2>
          <h2 className='my-4'>**** Umre Nga Mali i Zi</h2>

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

export default ServicePage;
