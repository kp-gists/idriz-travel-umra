import { socialNetworks } from '@/util/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RrjeteSociale = () => {
  return (
    <div className='flex flex-col items-center my-8 '>
      <h1 className='font-poppins text-md md:text-3xl bg-indigo-300 px-2 py-0.5 font-bold text-center'>
        Na gjeni në rrjetet sociale:
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
  );
};

export default RrjeteSociale;
