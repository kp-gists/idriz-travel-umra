import React from 'react';
import ListPhoneContact from '../contact/ListPhoneContact';

type Props = {
  year?: number;
};

const RamadanUmra = ({ year = 2023 }: Props) => {
  return (
    <>
      <div className='ramadanBg relative rounded-md mx-auto overflow-hidden max-w-[900px] h-[500px] md:h-[400px]  pt-4 pl-4   md:pl-[300px] lg:pt-8 xl:pl-[400px]'>
        <div className='w-full h-full flex relative justify-start flex-col px-2 md:px-0 py-8 pr-8'>
          <div className='mb-12 md:mb-10'>
            <h1 className='font-poppins text-center font-bold capitalize text-lg md:text-2xl mb-4'>
              Umre në Ramazan {year}
            </h1>

            <h3 className='font-poppins text-center text-sm md:text-md '>
              kanë filluar regjistrimet për grupet e umreve gjatë muajit të
              bekuar të Ramazanit.
            </h3>
          </div>

          <p className='font-hand font-bold text-lg text-center'>
            &quot;Umreja në Ramazan është si të kryesh një haxh me mua&quot;
            <br />
            <span className='text-sm font-thin'>
              - ka thënë i dashuri i zemrave tona, Profeti Muhammed (a.s)
            </span>
          </p>

          <div className='absolute bottom-8 right-8'>
            <ListPhoneContact />
          </div>
        </div>
        <div className='absolute top-6 -left-6 -rotate-45 bg-rose-400 text-white p-1 min-w-[120px] text-center text-xs'>
          Njoftim
        </div>
      </div>
    </>
  );
};

export default RamadanUmra;
