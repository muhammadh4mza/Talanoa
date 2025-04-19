// import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import notificationImage from "@/assets/images/Email_Notification_inbox.png";
import RotatingText from "../../components/RotatingText/RotatingText";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-8 pb-16 md:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:max-w-3xl">
            Unbox your new Inbox
          </h1>
          <h3 className="text-[36px] font-bold mb-6 md:max-w-3xl">
            
            <RotatingText
              texts={['Clutter Free', 'Clutter Free', 'Clutter Free', 'Clutter Free']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#E9D8FD] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex items-center px-2 sm:px-2 md:px-3 bg-[#E9D8FD] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 20, stiffness: 400 }}
              rotationInterval={5000}
            />
          </h3>
          <p className="text-lg md:text-xl text-gray-600 md:max-w-lg text-center mx-auto">
            Talanoa is the first inbox designed around people.
            Cut the noise, focus only on what matters.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-lg text-base px-8 py-6">
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
      </div>
      <div className="w-full h-full object-cover flex flex-col items-center justify-center">
      <img 
        src={notificationImage}
        alt="Notification Image" 
        className="w-[100%] mt-8 md:mt-0 lg:w-[50%] xl:w-[60%] h-auto object-cover rounded-lg shadow-lg"
        style={{ maxWidth: isMobile ? "100%" : "100%" }} // Adjust the maxWidth based on mobile state
      />
      </div>
    </section>
  );
};

export default HeroSection;
