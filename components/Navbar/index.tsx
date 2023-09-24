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
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

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
          className='capitalize font-semibold text-md border-b-2 border-transparent hover:border-gray-300 hover:text-green-500'
        >
          {link.title}
        </Link>
      ))}
    </div>
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [t]);

  return (
    <nav
      className={cn(
        'w-full shadow-lg backdrop-blur-sm bg-white/10 ',
        isScrolled
          ? 'sticky top-0 left-0 right-0 z-50 translate-y-0  bg-white/60 transition-all delay-1000 '
          : 'relative '
      )}
    >
      <div className='flex py-2 items-center h-16 justify-between mx-auto px-2 md:px-6  max-w-7xl'>
        <MobileMenu />

        <Link
          href='/'
          className='flex gap-x-0 md:gap-x-2'
          title='Idriz Travel Umra'
        >
          <Image
            src={passport}
            width={44}
            height={44}
            alt=''
            className='ml-10'
            loading='eager'
          />
          <div className='hidden lg:flex flex-col items-center justify-center'>
            <p className='text-lg font-bold '>Idriz Travel Umra</p>
          </div>
        </Link>
        {menu}
        <div className=''>
          <ListPhoneContact />
          {isMultiLanguage && dropdown}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
