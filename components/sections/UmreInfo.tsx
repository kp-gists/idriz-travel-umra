import React from 'react';
import TitleSection from '../TitleSection';
import { useQuery } from '@tanstack/react-query';
import { fetchUmraInfo } from '@/lib/fetching';
import { Download, Loader } from 'lucide-react';
import Link from 'next/link';
import DownloadUmraBook from '../DownloadUmraBook';

const UmreInfo = () => {
  const {
    data: umraInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['umre-info'],
    queryFn: async () => await fetchUmraInfo(),
    retry: 3,
  });

  if (isLoading) return <Loader className='animate-spin' />;
  if (isError) return;
  return (
    <TitleSection
      hasDivider
      title='Si bëhet Umre-ja'
      subtitle='Çfarë hapash ndiqen për të bërë umren?'
    >
      <div className='relative'>
        <div
          className='max-h-[300px] overflow-hidden max-w-2xl mt-4'
          dangerouslySetInnerHTML={{
            __html: `${umraInfo?.data?.attributes?.info?.umre_info}`,
          }}
        ></div>

        <div className='read-more flex justify-around gap-2 pt-5 px-auto text-center absolute bottom-0 left-0 right-0'>
          <Link
            href={`/umra/umreja-hap-pas-hapi`}
            className='text-center block '
          >
            ...Lexo më shumë
          </Link>
          <DownloadUmraBook />
        </div>
      </div>
    </TitleSection>
  );
};

export default UmreInfo;
