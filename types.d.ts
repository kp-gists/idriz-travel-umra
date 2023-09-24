import { StaticImageData } from 'next/image';

export type SocialNetwork = {
  icon: JSX.Element;
  key: string;
  displayName: string;
  href: string;
  src: StaticImageData;
};

export type Contact = {
  type: 'tel' | 'email';
  icon: StaticImageData;
  key: string;
  displayName: string | number;
  href: string;
  whatsappLink: string | React.JSX.Element;
  whatsappLinkString: string;
};

export type Months =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type Trip = {};

export type UmrahPrice = {
  currency: string;
  discounted_value?: number;
  id?: number;
  isDiscounted: boolean;
  room: 'roomX2' | 'roomX3' | 'roomX4';
  value: number;
};

export type ServiceType = 'umrah' | 'visa' | 'translate' | 'kurban';

export type Service = {
  key: string;
  type: ServiceType;
  title: string;
  description: string;
  img: StaticImageData | string;
};
