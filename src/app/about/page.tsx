"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { id: 1, name: "Years of Experience", value: "56+", icon: ClockIcon },
  { id: 2, name: "Projects", value: "50K+", icon: ChartBarIcon },
  { id: 3, name: "Products Manufactured", value: "1M+", icon: CubeIcon },
];

export default function AboutPage() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:pt-28 md:pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <Image
              src="/About-Us.png"
              alt="Size Guide"
              width={1000}
              height={1000}
              quality={100}
              className="mx-auto w-full h-fit object-contain max-w-md px-4"
            />
            <p className="text-xl text-gray-200 max-w-2xl mx-auto uppercase">
              Your trusted partner in premium metal manufacturing solutions for
              over 56+ years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Welcome to Shield Metal Manufacturers LTD
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  We offer a complete line of Stainless Steel & Aluminum Fitting
                  Covers.
                </p>

                <p className="text-lg leading-relaxed">
                  With over 56+ years of doing business, our years of experience
                  and commitment to you, our customers, ensures you will receive
                  fast, friendly and efficient service - all the time, every
                  time.
                </p>

                <p className="text-lg leading-relaxed">
                  Thinking as contractors, Shield's goal is to produce a
                  stainless steel elbow that matches the jacketing
                  application…that's what you get with Shield…why do it any
                  other way.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-foreground text-background 
                  rounded-xl font-semibold hover:bg-foreground/90 transition-all duration-300 
                  transform hover:scale-[1.02]"
                >
                  Get in Touch
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative max-h-[500px] h-full rounded-2xl overflow-hidden"
            >
              <Image
                src="/about-pic.png"
                alt="Shield Metal Manufacturing Facility"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-2"
          >
            <Image
              src="/Our-Core-Values.png"
              alt="Our Core Values"
              width={1000}
              height={1000}
              quality={100}
              className="mx-auto w-full h-fit object-contain max-w-lg"
            />
            {/*The principles that guide everything we do at Shield Metal*/}
            <div className="mt-2 md:-mt-8">
              <Image
                src="/The-principles-that-guide-3.png"
                alt="The principles that guide us"
                width={1000}
                height={1000}
                quality={100}
                className="mx-auto w-full h-fit object-contain hidden md:block max-w-4xl"
              />
              <Image
                src="/The-principles-that-guide-mobile.png"
                alt="The principles that guide us"
                width={1000}
                height={1000}
                quality={100}
                className="mx-auto w-full h-fit object-contain md:hidden px-4"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-zinc-800 rounded-lg">
                      <stat.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-gray-300">{stat.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Quality First",
                  description:
                    "We maintain the highest standards in every product we manufacture.",
                  icon: TrophyIcon,
                },
                {
                  title: "Customer Focus",
                  description:
                    "Your satisfaction is our priority. Fast and friendly service, always.",
                  icon: UserGroupIcon,
                },
                {
                  title: "Experience",
                  description:
                    "56+ years of expertise in metal manufacturing solutions.",
                  icon: ClockIcon,
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="p-3 bg-zinc-800 rounded-lg w-fit mb-4">
                    <value.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
