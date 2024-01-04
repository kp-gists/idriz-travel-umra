import React from 'react';
import ListPhoneContact from '../contact/ListPhoneContact';
import TitleSection from '../TitleSection';
import Link from 'next/link';

type Props = {
  year?: number;
};

const RamadanUmra = ({ year = 2023 }: Props) => {
  return (
    <TitleSection
      hasDivider
      title={`Ramazan ${year}`}
      className='mb-0  md:mb-12 mt-10 md:mt-12'
    >
      <div className='ramadanBg relative rounded-md mx-auto overflow-hidden max-w-[900px] h-[500px] md:h-[400px]  pt-4 pl-5   md:pl-[300px] lg:pt-8 xl:pl-[400px]'>
        <div className='w-full h-full flex relative justify-start flex-col px-2  md:px-0 py-8 pr-8'>
          <div className='mb-12 md:mb-10'>
            <h1 className='font-poppins text-center font-bold capitalize text-lg md:text-2xl mb-4'>
              Umre në Ramazan {year}
            </h1>

            <h3 className='font-poppins text-center text-sm md:text-md px-4'>
              kanë filluar regjistrimet për grupet e umreve gjatë muajit të
              bekuar të Ramazanit.
            </h3>
          </div>

          <p className='font-hand font-bold text-lg text-center pl-2 md:pl-0'>
            &quot;Umreja në Ramazan është si të kryesh një haxh me mua&quot;
            <br />
            <span className='text-sm font-thin'>
              - ka thënë i dashuri i zemrave tona, Profeti Muhammed (a.s)
            </span>
          </p>

          <Link
            href='/ramadan/umre-ramazan'
            className='text-right mr-4 mt-4 text-md md:text-lg text-black underline'
          >
            ...më shumë oferta
          </Link>

          <div className='absolute bottom-8 right-8'>
            <ListPhoneContact />
          </div>
        </div>

        <div className='absolute top-4 -left-8 origin-center -rotate-45 bg-gradient-to-tr from-pink-400 via-purple-300 to-rose-300 text-indigo-900 p-1 min-w-[130px] text-center text-sm'>
          Njoftim
        </div>
      </div>
    </TitleSection>
  );
};

export default RamadanUmra;
