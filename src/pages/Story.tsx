
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Story = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 mb-8">
            How Talanoa came to be, and where we're headed.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Talanoa was born out of frustration with traditional email clients that weren't designed for the modern workplace. Our founders, all former employees at major tech companies, experienced firsthand how email overload leads to stress, missed communications, and decreased productivity.
            </p>
            
            <p>
              In 2021, we set out to create an email application that organizes conversations around people rather than timestamps. We believed that by focusing on relationships rather than chronology, we could transform how people communicate digitally.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            
            <p>
              Our mission is to humanize digital communication by designing tools that prioritize meaningful connections over notifications, and quality conversations over quantity.
            </p>
            
            <p>
              We believe that technology should enhance human relationships, not complicate them. That's why Talanoa is designed to help you focus on what truly matters - the people you communicate with and the conversations that drive your work and life forward.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Looking Forward</h2>
            
            <p>
              Today, Talanoa is used by professionals and teams across the globe who value focused, meaningful communication. We're constantly evolving our platform based on user feedback and technological advancements, always with our core mission in mind.
            </p>
            
            <p>
              As we grow, we remain committed to creating communication tools that respect human attention and foster genuine connection in an increasingly digital world.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Story;
