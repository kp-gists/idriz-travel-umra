import Link from 'next/link';

export const renderWhatsappLink = ({
  displayText,
  nr,
  text = 'Selam alejkum',
}: {
  nr: number;
  text?: string;
  displayText: string;
}) => {
  const encoded = encodeURIComponent(text);

  return (
    <Link
      href={`https://api.whatsapp.com/send/?phone=${nr}&text=${encoded}&type=phone_number&app_absent=0`}
      target='_blank'
    >
      {displayText}
    </Link>
  );
};
