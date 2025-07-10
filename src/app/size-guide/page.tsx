"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRightIcon,
  BeakerIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function SizeGuidePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openFullscreen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section - More Compact */}
      <section className="relative pb-16 md:pt-24 pt-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Image
              src="/Product-Size-Guide.png"
              alt="Size Guide"
              width={1000}
              height={1000}
              quality={100}
              className="mx-auto w-full h-fit object-contain"
            />
            <Image
              src="/Complete-sizing-information.png"
              alt="Size Guide"
              width={1000}
              height={1000}
              quality={100}
              className="mx-auto w-full h-fit object-contain hidden md:block -mt-8"
            />
            <Image
              src="/Complete-sizing-information-mobile.png"
              alt="Size Guide"
              width={1000}
              height={1000}
              quality={100}
              className="mx-auto w-full h-full object-contain block md:hidden px-4"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Material Types */}
            <div className="lg:col-span-1 space-y-6">
              {/* Stainless Steel Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BeakerIcon className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-white">
                    Stainless Steel
                  </h2>
                </div>
                <div className="space-y-2 text-base text-gray-200">
                  <p>Available in T-316L & T-304L for:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-blue-500" />
                      <span>90° Long Radius</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-blue-500" />
                      <span>90° Short Radius</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-blue-500" />
                      <span>45° Angle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-blue-500" />
                      <span>Smooth & Embossed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Aluminum Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <WrenchIcon className="w-5 h-5 text-green-500" />
                  <h2 className="text-xl font-semibold text-white">Aluminum</h2>
                </div>
                <div className="space-y-2 text-base text-gray-200">
                  <p>Available in:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-green-500" />
                      <span>90° Long Radius</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-green-500" />
                      <span>90° Short Radius</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-green-500" />
                      <span>45° Angle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-3 h-3 text-green-500" />
                      <span>Smooth & Embossed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sizing Guide */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-xl p-6 border border-white/10"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  How to Choose Your Size
                </h2>
                <p className="text-base text-gray-200 mb-6">
                  For choosing the right size elbow for your project, reference
                  your Iron pipe size (IPS) followed by your Insulation size to
                  find your perfect elbow size.
                </p>

                {/* Formula */}
                <div className="bg-zinc-800 rounded-lg p-4 text-center mb-6">
                  <p className="text-base font-medium text-blue-400">
                    Iron Pipe Size (IPS) × Insulation Size = Elbow Size
                  </p>
                </div>

                {/* Size Guide Images in Grid */}
                <div className="grid gap-6">
                  {/* Specifications Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Reference Image */}
                    <div className="space-y-3">
                      <h3 className="text-base font-medium text-white">
                        90 Degree Ellis
                      </h3>
                      <div
                        className="relative h-48 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => openFullscreen("/size-guide-1.jpg")}
                      >
                        <Image
                          src="/size-guide-1.jpg"
                          alt="Size Guide Reference"
                          fill
                          className="object-contain bg-zinc-800"
                        />
                      </div>
                    </div>
                    {/* Stainless Steel Specs */}
                    <div className="space-y-3">
                      <h3 className="text-base font-medium text-white">
                        90 Short Radius Ellis
                      </h3>
                      <div
                        className="relative h-40 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => openFullscreen("/size-guide-2.jpg")}
                      >
                        <Image
                          src="/size-guide-2.jpg"
                          alt="Stainless Steel Specifications"
                          fill
                          className="object-contain bg-zinc-800"
                        />
                      </div>
                      {/* <p className="text-xs text-gray-200">90° - 90°SR - 45° - 0.0100"</p> */}
                    </div>

                    {/* Aluminum Specs */}
                    <div className="space-y-3">
                      <h3 className="text-base font-medium text-white">
                        45 Degree Ellis
                      </h3>
                      <div
                        className="relative h-40 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => openFullscreen("/size-guide-3.jpg")}
                      >
                        <Image
                          src="/size-guide-3.jpg"
                          alt="Aluminum Specifications"
                          fill
                          className="object-contain bg-zinc-800"
                        />
                      </div>
                      {/* <p className="text-xs text-gray-200">
                        90° - 90° BR - 45° smooth-Stucco 0.024"
                        <br />
                        with factory applied acrylic exterior coating
                      </p> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
              onClick={closeFullscreen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
