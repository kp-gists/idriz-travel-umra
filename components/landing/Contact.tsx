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
        <div className='flex flex-wrap gap-8 justify-center items-center'>
          {contacts.map((contact) => (
            <div key={contact.key} className='flex flex-col mb-7'>
              <div className='flex items-center '>
                <Image
                  src={contact.icon}
                  alt={contact.href}
                  className='h-8 w-8 mr-2 rounded-sm'
                />
                <h4 className='capitalize text-md md:text-lg font-poppins mr-3 font-semibold'>
                  {contact.key}
                </h4>

                <Link
                  href={contact.href}
                  className='hover:scale-105 hover:underline '
                >
                  {contact.displayName}
                </Link>
              </div>
              {contact.type === 'tel' && (
                <div className='flex ml-16'>
                  <div className='relative w-6  border-t-2 border-gray-700'>
                    <span className='absolute top-0 left-[11px] translate-x-[50] w-[2px]  h-[66px] bg-gray-700' />
                    <MoveRight className='absolute top-[10px] left-3 text-gray-700' />
                    <MoveRight className='absolute top-[53px] left-3 text-gray-700' />
                  </div>

                  <div className='flex flex-col gap-y-2 mt-2 ml-3  justify-start'>
                    <Link
                      href={contact.href}
                      className='flex items-center border border-indigo-400 bg-indigo-300 w-fit px-3 py-1 rounded-md'
                    >
                      <PhoneForwarded className='h-4 w-4 animate-bounce text-blue-600 mr-2' />
                      Na Telefoni
                    </Link>
                    <>{contact.whatsappLink}</>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='flex flex-col items-center my-8 '>
          <h1 className='font-poppins text-md md:text-3xl bg-indigo-300 px-2 py-0.5 font-bold text-center'>
            Jemi shume active ne rrjetet sociale
          </h1>
          <div className='flex flex-col md:flex-row mt-6 gap-6 '>
            {socialNetworks.map((sn) => (
              <Link href={sn.href} key={sn.key} target='_blank'>
                <div className='flex flex-col items-center justify-start hover:underline'>
                  <p className='text-md md:text-lg flex mb-4'>
                    {sn.icon} {sn.displayName}
                  </p>
                  <div className='overflow-hidden w-full h-[380px] md:h-[500px]'>
                    <Image
                      src={sn.src}
                      alt={sn.displayName}
                      className='object-cover rounded-xl h-full'
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

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
