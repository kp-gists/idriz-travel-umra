import Link from 'next/link';
import React from 'react';

const today = new Date();

const CWK = () => {
  return (
    <div className='max-w-5xl flex flex-col mt-4 md:flex-row items-center justify-center gap-2 py-1'>
      <h2>
        Website develope by{' '}
        <Link
          href='https://codewithkoli.com/'
          target='_blank'
          className='text-cyan-500 font-bold'
        >
          @CodeWithKoli
        </Link>
        .
      </h2>
      <p>All rights reserved ©{today.getFullYear()}</p>
    </div>
  );
};

export default CWK;
