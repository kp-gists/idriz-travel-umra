import MainLayout from '@/components/Layouts/MainLayout';
import useTranslation from 'next-translate/useTranslation';

export default function ExamplePage() {
  const { t, lang } = useTranslation('common');
  const example = t('example');

  return <MainLayout>{example}</MainLayout>;
}
