import { Download } from 'lucide-react';
import React from 'react';

const DownloadUmraBook = () => {
  return (
    <a
      href='/docs/Idriz_travel_umra_libri.pdf'
      target='_blank'
      download='Libri_rituali_i_umres_nga_Idriz_Travel_umra.pdf'
      className='flex hover:text-blue-800'
    >
      ...shkarko librin <Download className='ml-2' />
    </a>
  );
};

export default DownloadUmraBook;
