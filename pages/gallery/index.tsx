import Image from 'next/image';
import React from 'react';
import medina from '@/assets/imgs/medina.jpg';
import mekkamedina from '@/assets/imgs/mecca-medinah.jpg';

function GalleryPage() {
  return (
    <div className='max-w-7xl grid grid-cols-4 mx-auto p-20 gap-10'>
      <div className=''>
        <Image
          src={medina}
          alt='medina'
          className='rounded-xl z-20 object-fill'
          placeholder='blur'
        />
      </div>
      <div className=''>
        <Image
          src={medina}
          alt='medina'
          className='rounded-xl z-20 '
          placeholder='blur'
        />
      </div>
      <div className='w-full relative'>
        <Image
          src={mekkamedina}
          alt='medina'
          className='rounded-xl z-20 '
          placeholder='blur'
        />
      </div>
      <div className='w-full relative'>
        <Image
          src={mekkamedina}
          alt='medina'
          className='rounded-xl z-20 '
          placeholder='blur'
        />
      </div>
      <div className='w-full relative'>
        <Image
          src={mekkamedina}
          alt='medina'
          className='rounded-xl z-20 '
          placeholder='blur'
        />
      </div>
    </div>
  );
}

export default GalleryPage;
