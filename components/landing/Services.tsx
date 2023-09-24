import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/util/constants';
import { Button } from '@/components/ui/button';
import TitleSection from '@/components/TitleSection';

type Props = {};

const Services = (props: Props) => {
  return (
    <TitleSection title='Sherbimet Tona' hasDivider subtitle=''>
      <section className=''>
        <div
          id='services'
          className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-6'
        >
          {/* make the pages */}
          {services.map((service) => {
            return (
              <div
                key={service.key}
                className='serviceCard ring w-full md:w-[550px] xl:w-[600px] h-[200px] rounded-md flex flex-row justify-between items-center mb-10 px-4 md:pl-20 py-6  relative'
              >
                <div className='h-28 w-40  relative'>
                  <Image
                    src={service.img}
                    alt={service.description}
                    fill
                    className='rounded-md'
                    loading='lazy'
                  />
                </div>

                <div className='flex flex-col w-full items-start gap-2 justify-between pl-4 pb-6 md:pl-8'>
                  <h1 className='font-poppins font-bold text-lg md:text-xl'>
                    {service.title}
                  </h1>

                  <p className='text-sm md:text-md'>{service.description}</p>

                  <div></div>

                  <Link href={`/services/${service.type}`}>
                    <Button
                      variant={'link'}
                      disabled
                      className='absolute bottom-1 right-2 text-indigo-800'
                    >
                      ...më shumë detaje
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </TitleSection>
  );
};

export default Services;
