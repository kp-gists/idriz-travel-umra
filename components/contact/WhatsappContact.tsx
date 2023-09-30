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
import { MessageCircle, PhoneForwarded } from 'lucide-react';
import { Button } from '../ui/button';
import whatsapp from '@/assets/icons/whatsapp.png';

type Props = {
  title?: string | React.JSX.Element;
};

const WhatsappContact = ({ title = 'Rezervo Tani' }: Props) => {
  const phoneNrs = contacts.filter((item) => item.type === 'tel');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Image
            src={whatsapp}
            width={48}
            height={48}
            alt='message idriz travel umra to whatsapp numbers'
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side='top' style={{ zIndex: 52 }}>
        <DropdownMenuLabel className='text-center font-poppins text-md'>
          Numrat e Whatsapp-it
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {phoneNrs.map((nr) => (
          <DropdownMenuItem key={nr.href}>
            <a
              href={nr.whatsappLinkString}
              className='flex gap-x-4 items-center'
            >
              <Image
                src={nr.icon}
                alt={`${nr?.displayName}`}
                className='rounded-lg'
                width={40}
                height={40}
                loading='eager'
              />
              <MessageCircle className='text-green-700 w-6 h-6 fill-green-50' />
              <span className='font-poppins capitalize font-semibold'>
                {nr.key}
              </span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WhatsappContact;
