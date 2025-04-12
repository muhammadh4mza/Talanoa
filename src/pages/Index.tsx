import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      {/* <Footer /> */}
      <img 
        src="E:\Talanoa\public\ " 
        alt="Descriptive Alt Text" 
        className="w-full mt-4" 
      />
    </div>
  );
};

export default Index;
