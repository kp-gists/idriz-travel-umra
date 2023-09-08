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
