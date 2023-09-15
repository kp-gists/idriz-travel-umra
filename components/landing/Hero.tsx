import Image from 'next/image';

import kaba from '@/assets/imgs/kaba.jpg';
import meccaMedinah from '@/assets/imgs/mecca-medinah.jpg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='relative mb-20'>
      <div className='w-full my-4 relative overflow-hidden '>
        <Image
          src={meccaMedinah}
          className='z-50 h-fit hidden md:visible object-cover md:block  md:object-contain w-screen  md:min-w-sm min-h-[200px] rounded-xl '
          alt=''
          loading='lazy'
        />
        <Image
          src={kaba}
          className='z-50 h-fit visible md:hidden  object-fill w-screen  md:min-w-sm min-h-[200px] rounded-sm '
          alt=''
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default Hero;
