import PageLayout from '@/components/Layouts/PageLayout';
import RecentUmrahs from '@/components/landing/RecentUmrahs';

const UmrahPage = () => {
  return (
    <PageLayout
      title='Umre Tona'
      description='list of our umras traveled. visiting muslim hly palces dates, travel, hotels, guide, mekkah, meddina, qaaba'
      keywords='mekka, medina, umra, umre travel, qabja, qabe, Profeti Muhamed a.s, Allahume Lebejjk'
    >
      {/* recent Umrah list */}
      <RecentUmrahs />
    </PageLayout>
  );
};

export default UmrahPage;
