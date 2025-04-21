"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll lock when menu opens/closes
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean up scroll lock when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo.jpg"
                alt="Shield Metal Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </div> */}

          {/* Hamburger Menu Button - Visible on all screen sizes */}
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Menu Overlay - Full screen on mobile, right panel on desktop */}
        <div 
          className={`fixed inset-0 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-80 border-l border-border bg-background z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          // style={{ top: '64px' }}
        >
          <div className="flex flex-col items-center justify-center h-full p-8 overflow-y-auto">
            <div className="w-full flex flex-col items-center space-y-6">
              <Link 
                href="/" 
                className="text-white text-xl hover:text-gray-300 transition-colors duration-200 w-full text-center"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white text-xl hover:text-gray-300 transition-colors duration-200 w-full text-center"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/products" 
                className="text-white text-xl hover:text-gray-300 transition-colors duration-200 w-full text-center"
                onClick={closeMenu}
              >
                Products
              </Link>
              <Link 
                href="/size-guide" 
                className="text-white text-xl hover:text-gray-300 transition-colors duration-200 w-full text-center"
                onClick={closeMenu}
              >
                Size Guide
              </Link>
              <Link 
                href="/contact" 
                className="text-white text-xl hover:text-gray-300 transition-colors duration-200 w-full text-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
              
              {/* Get Quote Button */}
              <Link href="/contact" onClick={closeMenu} className="w-fit flex justify-center mt-4">
                <Button className="bg-white text-black px-8 py-4 text-lg rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 w-full max-w-xs">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay backdrop for mobile - only appears on small screens when menu is open */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black z-30" 
            onClick={closeMenu}
            // style={{ top: '64px' }}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
}