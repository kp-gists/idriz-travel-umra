import { cn } from '@/lib/utils';
import { ArrowUpFromLine } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

const ScrollTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollTop = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      }),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 450) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [isScrolled]);

  return (
    <button
      onClick={handleScrollTop}
      title='Scoll Top'
      className={cn(
        'sticky bottom-20 left-full  p-4 z-[51] bg-white/50  rounded-full ',
        isScrolled ? 'visible left-full' : 'hidden'
      )}
    >
      <ArrowUpFromLine className='h-8 w-8 text-black' />
    </button>
  );
};

export default ScrollTop;
