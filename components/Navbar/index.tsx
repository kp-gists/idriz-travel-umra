import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import passport from '@/assets/icons/mecca.png';
import Image from 'next/image';
import { navLinks } from '@/util/constants';
import { Menu } from 'lucide-react';
import ListPhoneContact from '../contact/ListPhoneContact';

type Props = {};

const isMultiLanguage = false;

const Navbar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const { t, lang } = useTranslation();

  const dropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger>Language-{lang}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {router?.locales?.map((locale) => (
          <DropdownMenuItem key={locale}>
            <Link
              className='w-full bg-gray-400'
              href={router.asPath}
              locale={locale}
            >
              {locale}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const menu = (
    <div className='hidden md:flex items-center gap-x-4'>
      {navLinks.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          className='capitalize font-semibold text-md hover:underline'
        >
          {link.title}
        </Link>
      ))}
    </div>
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [t]);

  return (
    <nav className='w-full shadow-lg backdrop-blur-sm bg-white/20 '>
      <div className='flex py-2 items-center h-16 justify-between mx-auto px-2 md:px-6  max-w-7xl'>
        <button className='block md:hidden '>
          <Menu className='h-8 w-8' />
        </button>

        <Link
          href='/'
          className='flex gap-x-0 md:gap-x-2'
          title='Idriz Travel Umrah'
        >
          <Image
            src={passport}
            width={44}
            height={44}
            alt=''
            className='ml-10'
          />
          <div className='hidden lg:flex flex-col items-center justify-center'>
            <p className='text-lg font-bold '>Idriz Travel Umrah</p>
          </div>
        </Link>
        {menu}
        <div>
          <ListPhoneContact />
          {isMultiLanguage && dropdown}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
