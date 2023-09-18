import React, { useState } from 'react';
import TitleSection from '../TitleSection';
import CurrentTrips from '../Trips/CurrentTrips';

const defaultTitle = 'Umre për këtë muaj';

const CurrentUmres = () => {
  const [title, setTitle] = useState('Umre për këtë muaj');
  return (
    <TitleSection
      hasDivider
      title={title}
      subtitle='Eja vizito edhe ti shtepinë e Allahut!'
      description=''
      className='mt-20'
    >
      <CurrentTrips setTitle={setTitle} />
    </TitleSection>
  );
};

export default CurrentUmres;
