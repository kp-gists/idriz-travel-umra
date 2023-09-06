import { Contact, SocialNetwork } from '@/types';
import { Instagram, Facebook } from 'lucide-react';

const defaultClassNames = 'h-4 w-4';

export const navLinks = [
  {
    href: '/',
    title: 'Kreu',
    key: 'home',
  },
  {
    href: '#packages',
    title: 'Paketat',
    key: 'home',
  },
  {
    href: '#services',
    title: 'Shërbimet',
    key: 'services',
  },
  {
    href: '#about-us',
    title: 'Rreth Nesh',
    key: 'about-us',
  },
  {
    href: '#contact',
    title: 'Kontakt',
    key: 'home',
  },
];

const socialNetworks: SocialNetwork[] = [
  {
    icon: <Instagram className={defaultClassNames} />,
    key: 'instagram',
    displayName: 'Na ndiqni në instagram',
    href: 'https://www.instagram.com/idriztravelumra/',
  },
  {
    icon: <Facebook className={defaultClassNames} />,
    key: 'facebook',
    displayName: 'Na bëni like në Facebook',
    href: 'https://www.facebook.com/IdrizTravelUmra',
  },
];

const contacts: Contact[] = [
  {
    type: 'tel',
    key: 'numri tel',
    icon: 'albania',
    displayName: '+355 68 5000 533',
    href: 'tel:+355685000533',
  },
  {
    type: 'tel',
    key: 'numri whatsapp kosovo',
    displayName: '+383 493 651 80',
    icon: 'kosovo',
    href: 'tel:+383 493 651 80',
  },
  {
    type: 'tel',
    key: 'numri tel arabia saudite',
    displayName: '+966 56 693 2725',
    icon: 'saudi',
    href: 'tel:+966566932725',
  },
  {
    displayName: 'email: travelidriz@gmail.com',
    href: 'mailto:travelidriz@gmail.com?subject=Es-Selam%20alejkum',
    key: 'email idriz travel',
    icon: 'mail',
    type: 'email',
  },
];

const services = [
  {
    key: 'service-umrah',
    title: 'Eja edhe ti në Umre',
    description: 'Udhetime për në vendet e shenjta Mekke & Medinah',
    img: '',
  },
  {
    key: 'service-viza',
    title: 'Viza për në Arabinë Saudite',
  },
];
