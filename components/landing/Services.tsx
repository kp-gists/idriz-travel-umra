import { services } from '@/util/constants';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import floralDivider from '@/assets/art/Groupfloral-divider.svg';

type Props = {};

const Services = (props: Props) => {
  return (
    <section className='my-40'>
      <div className='relative full grid place-items-center mx-auto mb-8'>
        <Image
          src={floralDivider}
          alt='floralDivider'
          className='w-full h-12 absolute -top-1 left-0 right-0 z-10'
        />
        <h1 className='font-poppins text-md md:text-2xl bg-indigo-300 px-2 py-0.5   font-bold text-center  mainTexture z-20'>
          Sherbimet Tona
        </h1>
      </div>

      <div
        id='services'
        className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-6'
      >
        {/*  */}
        {services.map((service) => {
          return (
            <div
              key={service.key}
              className='serviceCard ring w-full md:w-[550px] h-[200px] rounded-md flex flex-row justify-between items-center mb-10 px-4 md:pl-20 py-6  relative'
            >
              <div className='h-28 w-40  relative'>
                <Image
                  src={service.img}
                  alt={service.description}
                  fill
                  className='rounded-md'
                />
              </div>

              <div className='flex flex-col w-full items-start gap-2 justify-center pl-4 md:pl-8'>
                <h1 className='font-poppins font-bold text-lg md:text-xl'>
                  {service.title}
                </h1>

                <p className='text-sm md:text-md'>{service.description}</p>

                <Button variant={'cta'} className='flex-1'></Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
