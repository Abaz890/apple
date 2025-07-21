import React from 'react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 text-white z-50 flex justify-center items-center bg-black bg-opacity-80 backdrop-filter backdrop-blur-md">
      <div className="flex items-center space-x-6 md:space-x-8 max-w-7xl mx-auto px-4 w-full">
        <a href="#" className="flex-shrink-0" aria-label="Home"> 
          <img src="/apple.png" alt="Your Brand Logo" className="h-7 w-auto object-contain" /> 
        </a>

        <ul className="flex-1 flex justify-center space-x-4 md:space-x-6 text-xs md:text-sm font-light">
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Store</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Mac</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">iPad</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">iPhone</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Watch</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Vision</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">AirPods</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">TV & Home</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Entertainment</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Accessories</a></li>
          <li><a href="#" className="hover:text-gray-400 transition-colors duration-200">Support</a></li>
        </ul>

        <div className="flex items-center space-x-4 md:space-x-6 text-base md:text-lg">
          <a href="#" className="hover:text-gray-400 transition-colors duration-200" aria-label="Search">
            <FaSearch className="text-white" />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200" aria-label="Shopping Bag">
            <FaShoppingBag className="text-white" /> 
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;