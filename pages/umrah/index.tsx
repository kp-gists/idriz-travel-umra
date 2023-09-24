import PageLayout from '@/components/Layouts/PageLayout';
import RecentUmrahs from '@/components/landing/RecentUmrahs';

const UmrahPage = () => {
  return (
    <PageLayout
      title='All Our Umrah'
      description='list of our umrahs traveled.'
    >
      {/* recent Umrah list */}
      <RecentUmrahs />
    </PageLayout>
  );
};

export default UmrahPage;
