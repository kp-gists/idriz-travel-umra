import Image from 'next/image';

import kaba from '@/assets/imgs/kaba.webp';
import meccaMedinah from '@/assets/imgs/mecca-medinah.jpg';
import idrizTravel from '@/assets/imgs/idriz-travel-umre.webp';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='relative mb-16'>
      <div className='w-full my-4 relative overflow-hidden '>
        {/* on desktop view */}
        <Image
          src={meccaMedinah}
          className='z-50 h-fit hidden md:visible object-cover md:block  md:object-contain w-screen  md:min-w-sm min-h-[200px] rounded-lg'
          alt=''
          loading='eager'
        />
        <Image
          src={idrizTravel}
          className='  z-40 h-fit hidden md:visible  md:block  object-fill absolute top-8 right-8 rounded-sm w-[185px]'
          alt=''
          loading='eager'
        />

        {/* on mobile view */}
        <Image
          src={kaba}
          className='z-50 h-fit visible md:hidden  object-fill w-screen  md:min-w-sm min-h-[200px] rounded-sm '
          alt=''
          loading='eager'
        />
      </div>
    </div>
  );
};

export default Hero;
