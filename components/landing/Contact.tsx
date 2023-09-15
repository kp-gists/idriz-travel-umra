import { contacts } from '@/util/constants';
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
      <div>google map</div>
    </div>
  );
};

export default Contact;
