import Link from 'next/link';
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

import { contacts, googleMaps, socialNetworks } from '@/util/constants';
import TitleSection from '@/components/TitleSection';

type Props = {};

const Contact = (props: Props) => {
  return (
    <TitleSection hasDivider title='Na Kontaktoni'>
      <div
        id='contact'
        className='flex flex-col md:flex-row h-full items-center  w-full  gap-6 px-3 md:px-4'
      >
        <div className='w-full flex flex-col items-start gap-y-8'>
          <div>
            <h1 className='font-poppins font-semibold text-lg pb-4 underline underline-offset-2'>
              Adresa jone:
            </h1>
            <Link href={googleMaps.link} target='_blank'>
              <div className='flex items-center'>
                <MapPin className='h-6 w-6 mr-2 text-red-500 ' />
                <p>{googleMaps.address}</p>
              </div>
            </Link>
            <div className='mt-1 italic ml-4'>
              <span className='text-blue-500'>*</span>
              {googleMaps.open}
            </div>
          </div>

          <div>
            <h1 className='font-poppins font-semibold text-lg pb-4 underline underline-offset-2'>
              Email:
            </h1>
            {contacts
              .filter((item) => item.type === 'email')
              .map((email) => (
                <Link key={email.key} href={email.href}>
                  <div className='flex items-center'>
                    <Mail className='text-rose-500 mr-2' />
                    <p>{email.displayName}</p>
                  </div>
                </Link>
              ))}
          </div>

          <div className=''>
            <h1 className='font-poppins font-semibold text-lg pb-4 underline underline-offset-2'>
              Rrjete Sociale
            </h1>
            {socialNetworks.map((sn) => (
              <Link href={sn.href} key={sn.key} target='_blank'>
                <div className='flex flex-col items-center justify-start hover:underline'>
                  <p className='text-md md:text-lg flex mb-4'>
                    {sn.icon} {sn.displayName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='w-full overflow-hidden '>
          <Link
            target='_blank'
            href={googleMaps.link}
            className='flex items-center mb-8 justify-center hover:underline hover:font-bold'
          >
            <MapPin className='h-6 w-6 mr-2 text-red-500 ' />
            Na gjeni ne Google Maps
          </Link>
          <div className='googleMapWrapper  shadow-lg border'>
            {googleMaps.iframe}
          </div>
        </div>
      </div>
    </TitleSection>
  );
};

export default Contact;
