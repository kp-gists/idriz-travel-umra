import Image from 'next/image';
import Link from 'next/link';
import whatsapp from '@/assets/icons/WhatsAppButtonGreenLarge.svg';
import whatsappSm from '@/assets/icons/WhatsAppButtonGreenSmall.svg';
import { Backpack, Book, Bus, UserSquare } from 'lucide-react';
import visa from '@/assets/icons/visa.png';
import ticket from '@/assets/icons/ticket-flight.png';
import hotel from '@/assets/icons/hotel-64.png';
import zamZam from '@/assets/icons/zam-zam.png';
import ihram from '@/assets/icons/ihram.png';
import tourGuide from '@/assets/icons/tour-guide.png';
import places from '@/assets/icons/places.png';
import passport from '@/assets/icons/passport.png';

export const renderWhatsappLink = ({
  displayText,
  nr,
  text = 'Selam alejkum 👋',
  size = 'large',
}: {
  nr: number;
  text?: string;
  displayText?: string;
  size?: 'small' | 'large';
}) => {
  const encoded = encodeURIComponent(text);
  const imgSrc = size === 'large' ? whatsapp : whatsappSm;

  return (
    <Link
      href={`https://api.whatsapp.com/send/?phone=${nr}&text=${encoded}&type=phone_number&app_absent=0`}
      target='_blank'
    >
      <Image src={imgSrc} alt={`whatsapp contact: ${displayText}`} />
    </Link>
  );
};
export const renderWhatsappLinkString = ({
  displayText,
  nr,
  text = 'Selam alejkum 👋',
  size = 'large',
}: {
  nr: number;
  text?: string;
  displayText?: string;
  size?: 'small' | 'large';
}) => {
  const encoded = encodeURIComponent(text);

  return `https://api.whatsapp.com/send/?phone=${nr}&text=${encoded}&type=phone_number&app_absent=0`;
};

export const iconStyle = 'h-8 w-8';

const renderImgIcon = (src: any) => (
  <Image src={src} className={iconStyle} alt='icon from list' />
);

const iconsMap: Record<string, JSX.Element> = {
  book: <Book className={iconStyle} />,
  backpack: <Backpack className={iconStyle} />,
  visa: renderImgIcon(visa),
  ticketFlight: renderImgIcon(ticket),
  bus: <Bus className={iconStyle} />,
  hotel: renderImgIcon(hotel),
  zamZam: renderImgIcon(zamZam),
  ihram: renderImgIcon(ihram),
  guide: renderImgIcon(tourGuide),
  places: renderImgIcon(places),
  passport: renderImgIcon(passport),
  photo: <UserSquare className='text-gray-300' />,
};

export default function getIcon(iconName: string) {
  return iconsMap[iconName] ? iconsMap[iconName] : null;
}
