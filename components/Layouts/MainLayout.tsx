import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: Props) => {
  return (
    <main className={className}>
      <Navbar />
      <div className='max-w-7xl mx-auto h-screen px-6'>
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
