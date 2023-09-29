import React from 'react';
import TitleSection from '../TitleSection';
import { visitingPlaces } from '@/util/constants';
import { CheckSquare } from 'lucide-react';

const VisitingPlaces = () => {
  return (
    <TitleSection
      hasDivider
      title=' '
      subtitle='Udhëtimi i jetës ne vendet e shenjta:'
    >
      <div className='flex flex-col md:flex-row justify-around gap-6 md:gap-8 lg:gap-16 px-8 pt-4  md:px-0  flex-wrap'>
        {visitingPlaces.map((place) => (
          <div key={place.key} className='py-2'>
            <h2 className='text-center capitalize text-2xl lg:text-3xl font-sans font-semibold text-gray-800 pb-2 lg:pb-4'>
              Vizitat në {place.key}
            </h2>
            {place.items.map((item) => (
              <div
                key={item}
                className='flex items-center text-md lg:text-lg pb-2 lg:pb-4 font-poppins'
              >
                <CheckSquare className='h-4 w-4 text-green-600 mr-1' /> {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </TitleSection>
  );
};

export default VisitingPlaces;
