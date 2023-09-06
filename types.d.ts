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
