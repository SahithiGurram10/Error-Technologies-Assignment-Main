import React from 'react';
import { Megaphone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Megaphone size={28} className="mr-3" />
          <h1 className="text-2xl font-bold">LeadGen Pro</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#" 
                className="hover:text-indigo-200 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className="hover:text-indigo-200 transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hover:text-indigo-200 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;