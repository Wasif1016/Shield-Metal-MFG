"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MetallicText from "../metalic-text";

export default function Products() {
  const products = [
    {
      name: "Stainless Steel Elbows",
      image: "/Stainless+Steel+45+-+Shield+Metal+DS.png",
      features: [
        "High-quality 0.010 Type 304L & 316L stainless steel",
        "Available in 90° & 45° long and short radius",
        'Fits 13mm (1/2") IPS to 300mm (12") IPS',
        '25mm (1") to 100mm (4") thickness',
      ],
    },
    {
      name: "Aluminum Elbows",
      image: "/Aluminum+90+-+Shield+Metal+DS+homepage.png",
      features: [
        'High-quality 1100 alloy in 0.024" thickness',
        "Available in 90° & 45°, long and short radius",
        'Fits 13mm (1/2") IPS to 300mm (12") IPS',
        '25mm (1") to 100mm (4") thickness',
      ],
    },
    // {
    //   name: 'Coated Aluminum Elbows',
    //   image: '/Stucco+Embossed+90+-+Shield+Metal+DS.png',
    //   features: [
    //     '1100 Aluminum alloy in 0.024" thickness (24 gauge)',
    //     'Smooth and stucco embossed finishes',
    //     'Fits 13mm (1/2") IPS to 300mm (12") IPS',
    //     '25mm (1") to 100mm (4") thickness',
    //   ],
    // },
  ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Image
            src="/Our-Premium-Products.png"
            alt="Our-Premium-Products"
            width={1000}
            height={1000}
            className="w-auto mx-auto h-auto"
          />
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Precision-engineered solutions crafted with exceptional materials
            and meticulous attention to detail
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="w-full bg-zinc-950 group shadow-lg rounded-2xl overflow-hidden 
              border border-border hover:shadow-xl transition-all duration-300 
              transform flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 
                  group-hover:scale-110"
                  />
                </div>

                {/* Product Content */}
                <div className="px-6 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {product.name}
                  </h3>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <svg
                          className="w-5 h-5 text-foreground flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="px-6 pb-6">
                <Link
                  href="/products"
                  className="w-full block text-center py-3 px-6 
                  bg-foreground text-background rounded-lg 
                  hover:bg-foreground/80 transition-colors duration-300 
                  font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
