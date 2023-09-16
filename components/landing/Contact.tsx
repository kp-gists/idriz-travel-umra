import { contacts, googleMaps } from '@/util/constants';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id='contact'>
      <div>
        {contacts.map((contact) => (
          <div key={contact.key} className='flex'></div>
        ))}
      </div>
      <div className='w-full'>
        <Link target='_blank' href={googleMaps.link}>
          Na gjeni ne Google Maps
        </Link>
        <br />
        {googleMaps.iframe}
      </div>
    </div>
  );
};

export default Contact;
