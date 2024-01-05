import PageLayout from '@/components/Layouts/PageLayout';
import { fetchUmraInfo } from '@/lib/fetching';
import { GetStaticProps } from 'next';
import React from 'react';

type Props = {
  umraInfo: any;
};

const UmreInfoPage = ({ umraInfo }: Props) => {
  return (
    <PageLayout title={'Si bëhet Umra-ja?'} keywords=''>
      <div
        className='umra-info max-w-5xl mt-4 mx-4 md:mx-auto'
        dangerouslySetInnerHTML={{
          __html: `${umraInfo?.data?.attributes?.info?.umre_info}`,
        }}
      ></div>
    </PageLayout>
  );
};

export default UmreInfoPage;

export const getStaticProps: GetStaticProps = async (props) => {
  const umraInfo = await fetchUmraInfo();

  if (umraInfo?.data?.attributes) {
    return {
      props: {
        umraInfo,
      },
    };
  }

  return {
    notFound: true,
  };
};
