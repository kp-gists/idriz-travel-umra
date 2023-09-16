import Image from 'next/image';

import flowerDivider from '@/assets/art/flower-romb-flower.svg';
import { cn } from '@/lib/utils';

export const FlowerDivider = ({ style }: { style?: string }) => (
  <Image
    src={flowerDivider}
    className={cn('  p-2 rounded-xl', style)}
    alt='flower divider'
  />
);
