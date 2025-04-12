
import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-8 pb-16 md:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:max-w-3xl">
            The <span className="text-purple-500">email app</span> your brain has been waiting for
          </h1>
          <p className="text-lg md:text-xl text-gray-600 md:max-w-lg">
            Talanoa is the first inbox designed around people.
            Cut the noise, focus only on what matters.
          </p>
          
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full text-base px-8 py-6">
              Get Started
            </Button>
            
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden"
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-3 text-sm text-gray-500">
                Trusted by founders
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg mx-auto">
          <div className="bg-gray-100 p-2 flex items-center">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto mr-4 bg-white rounded-md px-2 py-0.5 text-xs text-gray-400">
              Search
            </div>
          </div>
          
          <div className="bg-white p-2 md:p-4">
            <div className="flex">
              <div className="w-1/5 hidden md:block border-r border-gray-100">
                <div className="p-2">
                  <div className="flex items-center space-x-2 p-1 bg-gray-100 rounded mb-3">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <div className="text-sm font-medium">People</div>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-1 rounded mb-3">
                    <div className="w-4 h-4 bg-purple-100 text-purple-500 flex items-center justify-center rounded text-xs">I</div>
                    <div className="text-sm font-medium">Inbox</div>
                  </div>

                  <div className="flex items-center space-x-2 p-1 rounded mb-3">
                    <div className="w-4 h-4 bg-gray-100 rounded"></div>
                    <div className="text-sm">To do</div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-4/5 h-[380px] overflow-y-auto">
                <div className="border-b border-gray-100 p-3">
                  <div className="flex justify-between mb-1">
                    <div className="font-medium">Bonusly</div>
                    <div className="text-xs text-gray-400">in notifications</div>
                  </div>
                  
                  <div className="mb-1">
                    <div className="font-medium">You have 50 reasons to tell your coworkers they rock.</div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Jonathan, your allowance of 50 truFiles expires in 6 days! Don't worry, your earnings of 1740 truFiles will never expire. Time to redeem? Give recognition!
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <div className="text-xs text-gray-400">1 message • 24 Mar 2023, 09:56</div>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 p-3">
                  <div className="mb-1">
                    <div className="font-medium">Did Yasmine Boussadia, Léna Teissier or Chloé Le Gauchec do something great?</div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Did Yasmine Boussadia, Léna Teissier or Chloé Le Gauchec do something great? Olivier Mouren: +100 @yboussadia T'es vraiment la meilleure !!! No add-ons yet Emilienne Simoncet: @eloissier +20 Super!
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <div className="text-xs text-gray-400">3 messages • 24 Mar 2023, 11:48</div>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 p-3">
                  <div className="mb-1">
                    <div className="font-medium">It's Michael Manceau Gerarduzzo's birthday on March 23</div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    It's Michael Manceau Gerarduzzo's birthday on March 23 Happy birthday!: @m.manceau, happy birthday! Here is +50 to help you celebrate! 🎂 Add on Download the Bonusly mobile app Bonusly in the...
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <div className="text-xs text-gray-400">1 message • 21 Mar 2023, 08:05</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
