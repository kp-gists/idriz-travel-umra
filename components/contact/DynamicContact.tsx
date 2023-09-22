import { contacts } from '@/util/constants';
import { MoveRight, PhoneForwarded } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const DynamicContact = () => {
  return (
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
  );
};
