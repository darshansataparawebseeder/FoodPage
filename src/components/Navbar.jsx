import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Heart, Search, Phone, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col w-full">
      {/* Top navigation bar */}
      <div className="bg-white py-2 md:py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="relative w-8 h-8 md:w-10 md:h-10 mr-1 md:mr-2">
                <div className="absolute inset-0 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm">🛒</span>
                </div>
                <div className="absolute -top-1 -right-1 md:-top-1 md:-right-1">
                  <div className="bg-green-500 rounded-full p-0.5 md:p-1">
                    <span className="text-white text-xs">🍃</span>
                  </div>
                </div>
              </div>
              <span className="text-gray-800 font-bold text-lg md:text-xl lg:text-2xl">MyStore</span>
            </a>
          </div>

          {/* Search bar - hidden on mobile, full-width on tablet/desktop */}
          <div className="hidden md:flex flex-1 mx-2 lg:mx-6">
            <div className="relative w-full max-w-xs md:max-w-lg lg:max-w-2xl">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-lg py-1.5 md:py-2 px-3 md:px-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full bg-green-600 text-white px-2 md:px-4 rounded-r-lg text-sm md:text-base hover:bg-yellow-500 transition">
                Search
              </button>
            </div>
          </div>

          {/* Right side icons and buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Profile Icon */}
            <div className="relative">
              <a href="/profile" className="text-gray-700 hover:text-green-600 transition">
                <User size={16} md:size={20} lg:size={24} />
              </a>
            </div>

            {/* Login Button */}
            <a
              href="/login"
              className="text-gray-700 hover:text-green-600 transition text-xs md:text-sm font-medium px-2 md:px-4 py-1 md:py-2 rounded-md border border-gray-300 hover:border-green-600"
            >
              Login
            </a>

            {/* Signup Button */}
            <a
              href="/signup"
              className="text-white bg-green-600 hover:bg-green-700 transition text-xs md:text-sm font-medium px-2 md:px-4 py-1 md:py-2 rounded-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-10 md:h-14">
            {/* Mobile menu button */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              <Menu size={16} md:size={20} lg:size={24} />
            </button>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <a href="/" className="font-medium text-sm md:text-base hover:text-green-400 transition py-2 md:py-4">Home</a>

              <div className="relative group">
                <a href="/shop" className="font-medium text-sm md:text-base hover:text-green-400 transition py-2 md:py-4 flex items-center">
                  Shop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 md:h-4 w-3 md:w-4 ml-0.5 md:ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute left-0 mt-1 md:mt-2 w-32 md:w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
                  <div className="py-1">
                    <a href="/shop/eco-friendly" className="block px-3 py-1 md:px-4 md:py-2 text-gray-800 text-sm hover:bg-green-100">Eco-Friendly</a>
                    <a href="/shop/organic" className="block px-3 py-1 md:px-4 md:py-2 text-gray-800 text-sm hover:bg-green-100">Organic</a>
                    <a href="/shop/sustainable" className="block px-3 py-1 md:px-4 md:py-2 text-gray-800 text-sm hover:bg-green-100">Sustainable</a>
                  </div>
                </div>
              </div>

              <a href="/contact" className="font-medium text-sm md:text-base hover:text-green-400 transition py-2 md:py-4">Contact Us</a>
            </div>

            {/* Phone number - hidden on mobile */}
            <div className="hidden md:flex items-center">
              <a href="tel:(323) 576-1942" className="flex items-center text-sm md:text-base hover:text-green-400 transition">
                <Phone size={16} md:size={18} lg:size={20} className="mr-1 md:mr-2" />
                <span>(323) 576-1942</span>
              </a>
            </div>

            {/* Mobile search button */}
            <button className="md:hidden text-white">
              <Search size={16} md:size={20} lg:size={24} />
            </button>
          </div>

          {/* Mobile search bar - only shown when menu is open */}
          <div className={`md:hidden py-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-lg py-1.5 px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full bg-green-600 text-white px-2 rounded-r-lg text-sm hover:bg-yellow-500 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      <div
        className={`fixed inset-0 z-50 bg-gray-800 text-white transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-3 md:p-4 border-b border-gray-700">
          <a href="/" className="flex items-center">
            <div className="relative w-8 h-8 mr-1 md:mr-2">
              <div className="absolute inset-0 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs md:text-sm">🛒</span>
              </div>
              <div className="absolute -top-1 -right-1 md:-top-1 md:-right-1">
                <div className="bg-green-500 rounded-full p-0.5 md:p-1">
                  <span className="text-white text-xs">🍃</span>
                </div>
              </div>
            </div>
            <span className="text-white font-bold text-lg md:text-xl">MyStore</span>
          </a>
          <button onClick={toggleMenu} className="text-white">
            <X size={16} md:size={20} lg:size={24} />
          </button>
        </div>
        <div className="py-4 px-4">
          <a href="/" className="block py-2 md:py-3 text-sm md:text-base border-b border-gray-700 hover:text-green-400">Home</a>
          <a href="/about" className="block py-2 md:py-3 text-sm md:text-base border-b border-gray-700 hover:text-green-400">About Us</a>
          <a href="/shop" className="block py-2 md:py-3 text-sm md:text-base border-b border-gray-700 hover:text-green-400">Shop</a>
          <a href="/blogs" className="block py-2 md:py-3 text-sm md:text-base border-b border-gray-700 hover:text-green-400">Blogs</a>
          <a href="/contact" className="block py-2 md:py-3 text-sm md:text-base border-b border-gray-700 hover:text-green-400">Contact Us</a>
          <div className="mt-4 md:mt-6">
            <a href="tel:(323) 576-1942" className="flex items-center py-2 md:py-3 text-sm md:text-base hover:text-green-400">
              <Phone size={16} md:size={18} lg:size={20} className="mr-1 md:mr-2" />
              <span>(323) 576-1942</span>
            </a>
          </div>
          <div className="mt-4 md:mt-6 flex items-center justify-between">
            <div>
              <span className="block text-xs md:text-sm">Shopping cart:</span>
              <span className="block font-semibold text-xs md:text-sm">$57.00</span>
            </div>
            <div className="flex space-x-2 md:space-x-4">
              <a href="/wishlist" className="text-white">
                <Heart size={16} md:size={20} lg:size={24} />
              </a>
              <a href="/cart" className="relative text-white">
                <ShoppingCart size={16} md:size={20} lg:size={24} />
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-green-600 text-white text-xs md:text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                  3
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;