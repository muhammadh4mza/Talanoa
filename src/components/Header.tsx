
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5 px-6 md:px-12 lg:px-16 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-semibold">talanoa</Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <button className="flex items-center text-sm font-medium">
            Product <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {/* Dropdown could be added here */}
        </div>
        
        <div className="relative group">
          <button className="flex items-center text-sm font-medium">
            Resources <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {/* Dropdown could be added here */}
        </div>
        
        <Link to="/pricing" className="text-sm font-medium">
          Pricing
        </Link>
        
        <Link to="/story" className="text-sm font-medium">
          Story
        </Link>
      </div>
      
      <Button className="bg-black text-white hover:bg-gray-800 rounded-full">
        Download App <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </header>
  );
};

export default Header;
