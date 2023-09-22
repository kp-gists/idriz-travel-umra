import { contacts, googleMaps, socialNetworks } from '@/util/constants';
import Link from 'next/link';
import React from 'react';
import TitleSection from '../TitleSection';
import {
  Facebook,
  Locate,
  MapPin,
  MoveRight,
  PhoneForwarded,
} from 'lucide-react';
import Image from 'next/image';

type Props = {};

const Contact = (props: Props) => {
  return (
    <TitleSection hasDivider title='Na Kontaktoni'>
      <div id='contact' className='flex flex-col h-full  w-full  gap-6 '>
        <div className='flex-1 overflow-hidden '>
          <Link
            target='_blank'
            href={googleMaps.link}
            className='flex items-center mb-8 justify-center hover:underline hover:font-bold'
          >
            <MapPin className='h-6 w-6 mr-2 text-red-500 ' />
            Na gjeni ne Google Maps
          </Link>
          <div className='googleMapWrapper overflow-visible ring-2 shadow-lg'>
            {googleMaps.iframe}
          </div>
        </div>
      </div>
    </TitleSection>
  );
};

export default Contact;
