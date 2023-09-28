import { Contact, Service, SocialNetwork } from '@/types';
import { Instagram, Facebook } from 'lucide-react';
import umrahSrc from '@/assets/icons/passport.png';
import vizaSrc from '@/assets/icons/visa.png';
import kurbanSrc from '@/assets/icons/kurban.jpg';
import arabicTranslateSrc from '@/assets/icons/arabic_translate.png';

import albaniaSrc from '@/assets/icons/albania(1).webp';
import kosovoSrc from '@/assets/icons/kosovo.webp';
import macedoniSrc from '@/assets/icons/republic-of-macedonia.webp';
import saudiSrc from '@/assets/icons/saudi-arabia.webp';

import gmailSrc from '@/assets/icons/gmail.png';
import facebook from '@/assets/imgs/idriz-travel-umra-facebook.webp';
import instagram from '@/assets/imgs/idriz-travel-umra-instagram.webp';
import { renderWhatsappLink, renderWhatsappLinkString } from './functions';

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
    href: '/umrah',
    title: 'Umret Tona',
    key: 'umra-page',
  },
  {
    href: '/#contact',
    title: 'Kontakt',
    key: 'contact',
  },
];

export const visitingPlaces = [
  {
    key: 'mekke',
    items: [
      'Mekke - Qabja e Madhnueshme',
      'Mali Theur',
      'Arafat',
      'Muzdelife',
      'Mina',
      'Xhemarat',
      'Shpella Hira',
    ],
  },
  {
    key: 'medine',
    items: [
      'Medine - Xhamia e Profetit(a.s)',
      '"Kopshti i Xhenetit"',
      'Xhamia Kuba',
      'Mali Uhud',
      'Xhamia me dy kible',
    ],
  },
];

export const aboutUs = '';

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
  address: 'Mbrapa Ministrisë Arsimit, Rruga Kont Urani, Tirana 1001',
  open: 'Jemi hapur nga e hena deri të shtunën: 09:00-17:00',
  iframe: (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0372937532825!2d19.810163076569765!3d41.32980239956426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311b0fdf001b%3A0x4ac6b1f977d00f29!2sIdriz%20Travel%20Umra!5e0!3m2!1sen!2s!4v1694871786909!5m2!1sen!2s'
      width='600'
      height='450'
      loading='lazy'
      title='Idriz Travel Umra location'
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
    whatsappLinkString: renderWhatsappLinkString({
      nr: 355685000533,
      size: 'small',
    }),
  },
  {
    type: 'tel',
    key: 'Kosova',
    displayName: '+383 493 651 80',
    icon: kosovoSrc,
    href: 'tel:+38349365180',
    whatsappLink: renderWhatsappLink({ nr: 38349365180, size: 'small' }),
    whatsappLinkString: renderWhatsappLinkString({
      nr: 38349365180,
      size: 'small',
    }),
  },
  {
    type: 'tel',
    key: 'Maqedoni',
    displayName: '+389 71 551 040',
    icon: macedoniSrc,
    href: 'tel:+38971551040',
    whatsappLink: renderWhatsappLink({ nr: 38971551040, size: 'small' }),
    whatsappLinkString: renderWhatsappLinkString({
      nr: 38971551040,
      size: 'small',
    }),
  },
  {
    type: 'tel',
    key: 'Arabia Saudite',
    displayName: '+966 56 693 2725',
    icon: saudiSrc,
    href: 'tel:+966566932725',
    whatsappLink: renderWhatsappLink({ nr: 966566932725, size: 'small' }),
    whatsappLinkString: renderWhatsappLinkString({
      nr: 966566932725,
      size: 'small',
    }),
  },
  {
    type: 'email',
    displayName: 'travelidriz@gmail.com',
    href: 'mailto:travelidriz@gmail.com?subject=Es-Selam%20alejkum',
    key: 'E-mail',
    icon: gmailSrc,
    whatsappLink: '',
    whatsappLinkString: '',
  },
];

export const services: Service[] = [
  {
    key: 'service-umrah',
    type: 'umrah',
    title: 'Eja edhe ti në Umre',
    description:
      'Kryerja e ritualit të umres. Udhetime për në vendet e shenjta Mekke & Medinah. Cmimet më konkurese në treg',
    img: umrahSrc,
  },
  {
    key: 'service-viza',
    type: 'visa',
    title: 'Viza për në Arabinë Saudite',
    description:
      'Çdo llojë vizë për në Arabinë Saudite. Vizë biznesi, pune, personale dhe egalizime dokumentash prane ambasades Arabise Saudite',
    img: vizaSrc,
  },
  {
    key: 'service-translate',
    type: 'translate',
    title: 'Përkthime nga Shqip <=> Arabishtë',
    description:
      'Përkthime të ndryshme sipas nevojës nga Shqip në Arabisht si dhe nga Arabishtja ne shqip. Dokumente zyrtare edhe personale',
    img: arabicTranslateSrc,
  },
  {
    key: 'service-kurbane',
    type: 'kurban',
    title: 'Kurbane',
    description: 'Ju ndihmojme që të prisni Kurbane në çdo kohë në Mekke',
    img: kurbanSrc,
  },
];

export const packageServices = [
  {
    key: 'places',
    title: 'Vizitat',
    text: 'Vizitat në vendet e shenjta si në Mekke, Medina, Arafat ...etj',
  },
  {
    key: 'book',
    title: 'Libri',
    text: 'Libri rituali i Umres me detajet e umres i shpjeguar nga Muhammed ibën Salih El-`Uthejmin.',
  },
  {
    key: 'visa',
    title: 'Viza',
    text: 'Vizën e umres e vlefshme per 3 muaj.',
  },

  {
    key: 'zamZam',
    title: 'Ujë zem-zem ',
    text: 'Ju mundesojmë të merrni 5 litra ujë zem-zem në kthim.',
  },

  {
    key: 'ihram',
    title: 'Ihrami',
    text: 'Mundesimi i rrobës se ihramit dhe ndihmesë për veshjen e tij',
  },

  {
    key: 'backpack',
    title: 'Çantë shpine',
    text: 'Çantë shpine me logon tonë.',
  },

  {
    key: 'ticketFlight',
    title: 'Bileta',
    text: 'Biletën vajtje: Tiranë-Athinë-Jeddah dhe kthimi Jeddah-Athinë-Tiranë',
  },

  {
    key: 'guide',
    title: 'Udhëheqës të grupi',
    text: 'Hoxhën udhëheqës për grupin duke ju shoqëruar në çdo hap të ritualeve',
  },
  {
    key: 'bus',
    title: 'Transportin',
    text: 'Transportin në Arabinë Saudite',
  },

  {
    key: 'hotel',
    title: 'Hotelet',
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
    title='YouTube video player makkah live'
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
    title='YouTube video player makkah live'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowFullScreen
    className={className}
  ></iframe>
);
