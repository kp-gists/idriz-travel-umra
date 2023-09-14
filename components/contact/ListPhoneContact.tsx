import { contacts } from '@/util/constants';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { PhoneForwarded } from 'lucide-react';
import { Button } from '../ui/button';

const ListPhoneContact = () => {
  const phoneNrs = contacts.filter((item) => item.type === 'tel');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'cta'} size={'cta'} className='w-full md:w-fit'>
          Rezervo Tani
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel className='text-center font-poppins text-md'>
          Numrat e Telefonit
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {phoneNrs.map((nr) => (
          <DropdownMenuItem key={nr.href}>
            <a href={nr.href} className='flex gap-x-4 items-center'>
              <Image
                src={nr.icon}
                alt={`${nr?.displayName}`}
                className='h-10 w-10 rounded-lg'
              />
              <PhoneForwarded className='text-blue-700 w-6 h-6' />
              <span className='font-poppins'>{nr.displayName}</span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ListPhoneContact;
