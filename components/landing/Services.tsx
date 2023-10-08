import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/util/constants';
import { Button } from '@/components/ui/button';
import TitleSection from '@/components/TitleSection';

type Props = {};

const Services = (props: Props) => {
  return (
    <section className='' id='services'>
      <TitleSection
        title='Sherbimet Tona'
        hasDivider
        subtitle='Idriz Travel Umra Ofron:'
        className='pt-28'
      >
        <div className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-16'>
          {/* make the pages */}
          {services.map((service) => {
            return (
              <div
                key={service.key}
                className='serviceCard ring w-full md:w-[550px] xl:w-[600px] 2xl:w-[750px] h-[200px] rounded-md flex flex-row justify-between items-center mb-10 px-4 md:pl-20 py-6  relative'
              >
                <div>
                  <Image
                    src={service.img}
                    alt={service.description}
                    className='rounded-md '
                    loading='eager'
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                    width={180}
                    height={180}
                  />
                </div>

                <div className='flex flex-col w-full items-start gap-2 justify-between pl-4 pb-6 md:pl-8'>
                  <h1 className='font-poppins font-semibold tracking-wide text-base sm:text-lg md:text-2xl leading-relaxed'>
                    {service.title}
                  </h1>

                  <p className='text-xs sm:text-sm md:text-md'>
                    {service.description}
                  </p>

                  <Link href={`/services/${service.type}`}>
                    <Button
                      variant={'link'}
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
      </TitleSection>
    </section>
  );
};

export default Services;
