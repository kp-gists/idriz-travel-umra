import React from 'react';
import { useRouter } from 'next/navigation';
import { ListTodo, PercentCircle } from 'lucide-react';
import TitleSection from '../TitleSection';

const ActionButtons = () => {
  const router = useRouter();
  return (
    <TitleSection hasDivider title='Umra Oferta'>
      <div className='p-4 md:p-8  flex flex-col md:flex-row gap-8 items-center justify-center pb-20'>
        <button
          onClick={() => router.push('/oferta')}
          title='Kap Ofertën'
          className='group w-full md:w-fit flex flex-col gap-4 px-6 py-4 border rounded-md shadow-lg hover:scale-105'
        >
          <h3 className='text-md font-semibold flex items-center'>
            <PercentCircle className='h-8 w-8 mr-2 text-blue-500 group-hover:scale-105' />{' '}
            Oferta
          </h3>
          <p className='text-end ml-3 text-sm max-w-sm'>
            zbuloni ofertat e fundit
          </p>
        </button>

        <button
          onClick={() => router.push('/umrah')}
          title='List umrahs'
          className='group flex flex-col gap-4 px-6 py-4 border rounded-md shadow-lg  hover:scale-105'
        >
          <h3 className='text-md font-semibold flex items-center'>
            <ListTodo className='h-8 w-8 mr-2 text-gray-500 group-hover:scale-105' />{' '}
            Listë e umreve tona
          </h3>
          <p className='text-end ml-3 text-sm max-w-sm'>
            njihuni me detajet e për çdo umre se fundmi.
          </p>
        </button>
      </div>
    </TitleSection>
  );
};

export default ActionButtons;
