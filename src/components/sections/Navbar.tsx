"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`md:fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? ' backdrop-blur-lg bg-background/80 border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/logo.jpeg"
                alt="Shield Metal Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/products" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Products
            </Link>
            <Link 
              href="/size-guide" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Size Guide
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Get Quote Button */}
          <div className="flex-shrink-0 hidden md:block">
            <Link href="/contact">
              <Button className="bg-white cursor-pointer text-black px-6 py-2 rounded-lg font-medium 
                hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
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
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-black/95 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/products" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link 
                href="/size-guide" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={closeMobileMenu}
              >
                Size Guide
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
              {/* Mobile Get Quote Button */}
              <div className="px-3 py-2">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full bg-white text-black px-6 py-2 rounded-lg font-medium 
                    hover:bg-gray-100 transition-all duration-300">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}