import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { navLinks, socialNetworks } from '@/util/constants';
import Image from 'next/image';
import idrizTravel from '@/assets/imgs/idriz-travel-umre.jpg';
import ListPhoneContact from '../contact/ListPhoneContact';

type Props = {};

const MobileMenu = (props: Props) => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const openSheet = () => setOpen(true);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className='block md:hidden '
          title='Toggle mobile menu links'
          onClick={openSheet}
        >
          <Menu className='h-8 w-8' />
        </button>
      </SheetTrigger>
      <SheetContent side='left' className='bg-indigo-300/50'>
        <SheetHeader className='mb-6'>
          <SheetTitle>Idriz Travel Umra</SheetTitle>
          <Separator />
        </SheetHeader>
        {navLinks.map((link, idx) => (
          <Link key={link.key} href={link.href}>
            <SheetClose className='block capitalize  font-semibold text-md  mb-4 '>
              {link.title}
            </SheetClose>
          </Link>
        ))}

        <Separator />

        <Image
          src={idrizTravel}
          className='z-50  object-contain  rounded-xl my-4 '
          alt=''
          loading='lazy'
        />

        {socialNetworks.map((sn) => (
          <Link href={sn.href} key={sn.key} target='_blank'>
            <ul className='flex flex-col items-center justify-start hover:underline'>
              <li className='text-md font-poppins flex mb-4'>
                {sn.icon} {sn.displayName}
              </li>
            </ul>
          </Link>
        ))}

        <ListPhoneContact />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
