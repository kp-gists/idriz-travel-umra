import React from 'react';
import CWK from './CWK';
import Image from 'next/image';

import passport from '@/assets/icons/mecca.png';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='w-full py-2 px-4 '>
      <div className='w-full flex items-center justify-between '>
        <div>
          <Image src={passport} width={80} height={80} alt='' />
        </div>

        <ul>
          <li>Kreu</li>
          <li>Paketat</li>
          <li>Sherbimet</li>
        </ul>

        <div>
          <p>Idirz Travel Umrah</p>
        </div>
      </div>

      <CWK />
    </footer>
  );
};

export default Footer;
