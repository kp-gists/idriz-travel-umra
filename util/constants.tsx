import { Contact, SocialNetwork } from '@/types';
import { Instagram, Facebook } from 'lucide-react';
import umrahSrc from '@/assets/icons/passport.png';
import vizaSrc from '@/assets/icons/visa.png';
import kurbanSrc from '@/assets/icons/kurban.jpg';
import arabicTranslateSrc from '@/assets/icons/arabic_translate.png';
import albaniaSrc from '@/assets/icons/albania(1).png';
import kosovoSrc from '@/assets/icons/kosovo.png';
import macedoniSrc from '@/assets/icons/republic-of-macedonia.png';
import saudiSrc from '@/assets/icons/saudi-arabia.png';
import gmailSrc from '@/assets/icons/gmail.png';

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
    key: 'packages',
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
    key: 'contact',
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
    icon: albaniaSrc,
    displayName: '+355 68 5000 533',
    href: 'tel:+355685000533',
  },
  {
    type: 'tel',
    key: 'numri whatsapp kosovo',
    displayName: '+383 493 651 80',
    icon: kosovoSrc,
    href: 'tel:+383 493 651 80',
  },
  {
    type: 'tel',
    key: 'numri tel arabia saudite',
    displayName: '+966 56 693 2725',
    icon: saudiSrc,
    href: 'tel:+966566932725',
  },
  {
    displayName: 'email: travelidriz@gmail.com',
    href: 'mailto:travelidriz@gmail.com?subject=Es-Selam%20alejkum',
    key: 'email idriz travel',
    icon: gmailSrc,
    type: 'email',
  },
];

// TODO add the whatsapp for custom message on whatsapp
export const whatsappLink = '';

export const services = [
  {
    key: 'service-umrah',
    title: 'Eja edhe ti në Umre',
    description: 'Udhetime për në vendet e shenjta Mekke & Medinah',
    img: umrahSrc,
  },
  {
    key: 'service-viza',
    title: 'Viza për në Arabinë Saudite',
    description: 'Çdo llojë vizë për në Arabinë Saudite',
    img: vizaSrc,
  },
  {
    key: 'service-translate',
    title: 'Përkthime | Shqip <=> Arabishtë',
    description:
      'Përkthime të ndryshme sipas nevojës nga Shqip në Arabisht si dhe nga Arabishtja ne shqip',
    img: arabicTranslateSrc,
  },
  {
    key: 'service-kurbane',
    title: 'Kurbane',
    description: 'Ju ndihmojme që të prisni Kurbane në cdo kohë në Mekke',
    img: kurbanSrc,
  },
];

export const packageServices = [
  'Libri (Rituali i Umres)',
  'Çantë shpine',
  'Vizën e umres',
  'Biletën vajtje-ardhje',
  'Transportin në Arabinë Saudite',
  'Hotelet në Mekke dhe Medine',
  'Ujë zemzemi',
  'Ihrami',
  'Hoxhën udhëheqës të grupi',
  'Vizitat në vendet e shenjta',
];

export const neededDocs = [
  'Pasaportë e vlefshme jo më pak se 6 muaj',
  'Fotografi personale',
];

const makkahLiveIFrame = ({
  width = 560,
  height = 315,
}: {
  width: number;
  height: number;
}) => (
  <iframe
    width={width}
    height={height}
    src='https://www.youtube.com/embed/N9QSL1PLUS4?si=lP9sxGCi7ku2w6SS'
    title='YouTube video player'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowFullScreen
  ></iframe>
);
const madinahLiveIFrame = ({
  width = 560,
  height = 315,
}: {
  width: number;
  height: number;
}) => (
  <iframe
    width={width}
    height={height}
    src='https://www.youtube.com/embed/EB0Y1ztWnic?si=y977xBtCcDsGfsg3'
    title='YouTube video player'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowFullScreen
  ></iframe>
);
