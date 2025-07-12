import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
                src="/logo.jpg"
                alt="Shield Metal Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Shield Metal</span>
            </div>
            <p className="text-gray-100 text-base">
              Precision-engineered metal solutions for the construction and
              industrial sectors.
            </p>
          </div>

          {/* Working Hours */}
          <div className="md:col-span-1 text-center">
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <p className="text-gray-100 text-base">
              Monday - Friday 6.30AM to 3PM PST
            </p>
          </div>

          {/* Social Media */}
          {/* <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div> */}
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-xl mb-2">
            © {currentYear} Shield Metal Manufacturers Ltd. All Rights Reserved.
          </p>
          <p className="text-xl mb-4">
            Developed by{" "}
            <Link
              href="https://haseebkhan.online/"
              className="text-xl hover:underline"
              target="_blank"
            >
              Haseeb Khan
            </Link>{" "}
            and{" "}
            <Link
              href="https://wasif-khan.netlify.app/"
              className="text-xl hover:underline"
              target="_blank"
            >
              Wasif Ali Khan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
