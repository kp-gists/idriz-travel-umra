export type SocialNetwork = {
  icon: JSX.Element;
  key: string;
  displayName: string;
  href: string;
};

export type Contact = {
  type: 'tel' | 'whatsapp' | 'email';
  icon: StaticImageData;
  key: string;
  displayName: string | number;
  href: string;
  whatsappLink?: string;
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
