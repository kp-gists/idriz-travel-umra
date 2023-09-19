import { Contact, Service, SocialNetwork } from '@/types';
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
import facebook from '@/assets/imgs/idriz-travel-umra-facebook.webp';
import instagram from '@/assets/imgs/idriz-travel-umra-instagram.webp';
import { renderWhatsappLink } from './functions';

const defaultClassNames = 'h-6 w-6 mr-2';

export const navLinks = [
  {
    href: '/',
    title: 'Kreu',
    key: 'home',
  },
  {
    href: '/#packages',
    title: 'Paketat',
    key: 'packages',
  },
  {
    href: '/#services',
    title: 'Shërbimet',
    key: 'services',
  },
  {
    href: '/#about-us',
    title: 'Rreth Nesh',
    key: 'about-us',
  },
  {
    href: '/#contact',
    title: 'Kontakt',
    key: 'contact',
  },
];

export const socialNetworks: SocialNetwork[] = [
  {
    icon: (
      <Instagram
        className='h-6 w-6 mr-2   bg-rose-600 '
        style={{ color: '#be123c' }}
      />
    ),
    key: 'instagram',
    displayName: 'Na ndiqni në instagram',
    href: 'https://www.instagram.com/idriztravelumra/',
    src: instagram,
  },
  {
    icon: <Facebook className='h-6 w-6 mr-2 text-blue-600' />,
    key: 'facebook',
    displayName: 'Na bëni like në Facebook',
    href: 'https://www.facebook.com/IdrizTravelUmra',
    src: facebook,
  },
];

export const googleMaps = {
  link: 'https://maps.app.goo.gl/84MyrgJ618UkXRT56',
  iframe: (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0372937532825!2d19.810163076569765!3d41.32980239956426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311b0fdf001b%3A0x4ac6b1f977d00f29!2sIdriz%20Travel%20Umra!5e0!3m2!1sen!2s!4v1694871786909!5m2!1sen!2s'
      width='600'
      height='450'
      loading='lazy'
    ></iframe>
  ),
};

export const contacts: Contact[] = [
  {
    type: 'tel',
    key: 'Shqiperi',
    icon: albaniaSrc,
    displayName: '+355 68 5000 533',
    href: 'tel:+355685000533',
    whatsappLink: renderWhatsappLink({ nr: 355685000533, size: 'small' }),
  },
  {
    type: 'tel',
    key: 'Kosova',
    displayName: '+383 493 651 80',
    icon: kosovoSrc,
    href: 'tel:+38349365180',
    whatsappLink: renderWhatsappLink({ nr: 38349365180, size: 'small' }),
  },
  {
    type: 'tel',
    key: 'Maqedoni',
    displayName: '+389 71 551 040',
    icon: macedoniSrc,
    href: 'tel:+38971551040',
    whatsappLink: renderWhatsappLink({ nr: 38971551040, size: 'small' }),
  },
  {
    type: 'tel',
    key: 'Arabia Saudite',
    displayName: '+966 56 693 2725',
    icon: saudiSrc,
    href: 'tel:+966566932725',
    whatsappLink: renderWhatsappLink({ nr: 966566932725, size: 'small' }),
  },
  {
    type: 'email',
    displayName: 'travelidriz@gmail.com',
    href: 'mailto:travelidriz@gmail.com?subject=Es-Selam%20alejkum',
    key: 'E-mail',
    icon: gmailSrc,
  },
];

export const services: Service[] = [
  {
    key: 'service-umrah',
    type: 'umrah',
    title: 'Eja edhe ti në Umre',
    description: 'Udhetime për në vendet e shenjta Mekke & Medinah',
    img: umrahSrc,
  },
  {
    key: 'service-viza',
    type: 'visa',
    title: 'Viza për në Arabinë Saudite',
    description: 'Çdo llojë vizë për në Arabinë Saudite',
    img: vizaSrc,
  },
  {
    key: 'service-translate',
    type: 'translate',
    title: 'Përkthime | Shqip <=> Arabishtë',
    description:
      'Përkthime të ndryshme sipas nevojës nga Shqip në Arabisht si dhe nga Arabishtja ne shqip',
    img: arabicTranslateSrc,
  },
  {
    key: 'service-kurbane',
    type: 'kurban',
    title: 'Kurbane',
    description: 'Ju ndihmojme që të prisni Kurbane në cdo kohë në Mekke',
    img: kurbanSrc,
  },
];

export const packageServices = [
  {
    key: 'places',
    text: 'Vizitat në vendet e shenjta',
  },
  {
    key: 'book',
    text: 'Libri (Rituali i Umres)',
  },
  {
    key: 'visa',
    text: 'Vizën e umres',
  },

  {
    key: 'zamZam',
    text: ' Ujë zem-zem ',
  },

  {
    key: 'ihram',
    text: 'Ihrami',
  },

  {
    key: 'backpack',
    text: 'Çantë shpine',
  },

  {
    key: 'ticketFlight',
    text: 'Biletën vajtje-ardhje',
  },

  {
    key: 'guide',
    text: 'Hoxhën udhëheqës të grupi',
  },
  {
    key: 'bus',
    text: 'Transportin në Arabinë Saudite',
  },

  {
    key: 'hotel',
    text: 'Hotelet në Mekke dhe Medine',
  },
];

export const neededDocs = [
  {
    key: 'passport',
    text: 'Pasaportë e vlefshme jo më pak se 6 muaj',
  },
  {
    key: 'photo',
    text: '2 Fotografi personale',
  },
];

export const makkahLiveIFrame = ({
  width = 956,
  height = 625,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <iframe
    width={width}
    height={height}
    src='https://www.youtube.com/embed/N9QSL1PLUS4?si=lP9sxGCi7ku2w6SS&autoplay=1&cc_load_policy=1'
    title='YouTube video player'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowFullScreen
    className={className}
  ></iframe>
);
export const madinahLiveIFrame = ({
  width = 800,
  height = 400,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <iframe
    width={width}
    height={height}
    src='https://www.youtube.com/embed/EB0Y1ztWnic?si=y977xBtCcDsGfsg3&autoplay=1&cc_load_policy=1'
    title='YouTube video player'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowFullScreen
    className={className}
  ></iframe>
);
