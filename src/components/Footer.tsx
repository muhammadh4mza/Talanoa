
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-lg font-semibold">talanoa</Link>
            <p className="mt-2 text-sm text-gray-600 max-w-xs">
              Talanoa is the first inbox designed around people. Cut the noise, focus only on what matters.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Guides</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Talanoa. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
