import Link from 'next/link';
import Image from 'next/image';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between  md:items-center gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 max-w-xs">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/logo.jpeg" 
                alt="Shield Metal Logo" 
                width={50} 
                height={50} 
                className="rounded-full"
              />
              <span className="text-xl font-bold">Shield Metal</span>
            </div>
            <p className="text-gray-400 text-sm">
              Precision-engineered metal solutions for the construction and industrial sectors.
            </p>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shield Metal Manufacturers Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}