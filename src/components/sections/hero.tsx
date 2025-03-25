import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen py-24 md:py-32 bg-black  flex flex-col items-center justify-center px-4">
      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Brand Name */}
        <h1 className="text-center mb-16">
          <span className="block text-7xl font-semibold tracking-wide text-white">
            Shield Metal
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white/80 mt-2">
            Manufacturing
          </span>
        </h1>


        <div className="flex gap-12 pb-24 max-w-6xl mx-auto items-center justify-center">
        <p className="text-white text-2xl"> 
            We are a family owned and operated company that has been in the business of manufacturing since 1970.
          </p>
          <div className="aspect-square w-[800px]">
            <img src="/logo.jpeg" alt="Manufacturing facility" className="w-full h-full object-cover" />
          </div>
          <p className="text-white text-2xl">
            Trusted by our customers for our 55 years of experience, 
            we provide quality North American made products.
          </p>
        </div>


        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-white mb-2">55+</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Years Legacy</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-white mb-2">1000+</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Quality Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
