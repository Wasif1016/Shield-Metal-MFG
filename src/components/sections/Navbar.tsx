import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="Shield Metal Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Navigation Links */}
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
              href="/location" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Location
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
          <div className="flex-shrink-0">
            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium 
              hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg 
                className="h-6 w-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
          >
            About
          </Link>
          <Link 
            href="/products" 
            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
          >
            Products
          </Link>
          <Link 
            href="/location" 
            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
          >
            Location
          </Link>
          <Link 
            href="/size-guide" 
            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
          >
            Size Guide
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 