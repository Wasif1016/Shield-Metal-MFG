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
          <div className="space-y-12">
            {/* Material Types Cards - Top Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Stainless Steel Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-xl p-6 border border-white/10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BeakerIcon className="w-6 h-6 text-blue-500" />
                  <h2 className="text-xl font-semibold text-white">
                    Stainless Steel
                  </h2>
                </div>
                <div className="space-y-3 text-base text-gray-200">
                  <p className="font-medium">Available in T-316L & T-304L</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>90° Long Radius</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>90° Short Radius</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>45° Angle</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>Smooth & Embossed Finishes</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Aluminum Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-xl p-6 border border-white/10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <WrenchIcon className="w-6 h-6 text-green-500" />
                  <h2 className="text-xl font-semibold text-white">Aluminum</h2>
                </div>
                <div className="space-y-3 text-base text-gray-200">
                  <p className="font-medium">High-Quality Aluminum Options:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>90° Long Radius</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>90° Short Radius</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>45° Angle</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Smooth & Embossed Finishes</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sizing Guide Section - Bottom */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-xl p-8 border border-white/10 shadow-lg"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    How to Choose Your Size
                  </h2>
                  <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
                    For choosing the right size elbow for your project,
                    reference your Iron pipe size (IPS) followed by your
                    Insulation size to find your perfect elbow size.
                  </p>

                  {/* Formula */}
                  <p className="text-lg font-semibold text-white">
                    Iron Pipe Size (IPS) × Insulation Size = Elbow Size
                  </p>
                </div>

                {/* Size Guide Images in Grid */}
                <div className="grid gap-8">
                  {/* Specifications Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* 90 Degree Ellis */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        90° Long Radius Ellis
                      </h3>
                      <div
                        className="relative h-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 group"
                        onClick={() =>
                          openFullscreen("/Shield-Sizing-Chart-90-LR.jpg")
                        }
                      >
                        <Image
                          src="/Shield-Sizing-Chart-90-LR.jpg"
                          alt="90 Degree Long Radius Ellis Size Chart"
                          width={800}
                          height={800}
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* 90 Short Radius Ellis */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        90° Short Radius Ellis
                      </h3>
                      <div
                        className="relative h-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 group"
                        onClick={() =>
                          openFullscreen("/Shield-Sizing-Chart-90-SR.jpg")
                        }
                      >
                        <Image
                          src="/Shield-Sizing-Chart-90-SR.jpg"
                          alt="90 Degree Short Radius Ellis Size Chart"
                          width={800}
                          height={800}
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* 45 Degree Ellis */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        45° Angle Ellis
                      </h3>
                      <div
                        className=" h-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 group"
                        onClick={() =>
                          openFullscreen("/Shield-Sizing-Chart-45-RADIUS.jpg")
                        }
                      >
                        <Image
                          src="/Shield-Sizing-Chart-45-RADIUS.jpg"
                          alt="45 Degree Angle Ellis Size Chart"
                          width={800}
                          height={800}
                          className="object-cover object-top"
                        />
                      </div>
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative w-full max-w-6xl h-[85vh]">
            <Image
              src={selectedImage}
              alt="Enlarged sizing chart view"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors duration-300"
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
