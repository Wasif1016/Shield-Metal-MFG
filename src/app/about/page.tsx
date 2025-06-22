'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChartBarIcon, ClockIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';
import MetallicText from '@/components/metalic-text';

const stats = [
  { id: 1, name: 'Years of Experience', value: '56+', icon: ClockIcon },
  { id: 2, name: 'Products Manufactured', value: '10000+', icon: ChartBarIcon },
  { id: 3, name: 'Satisfied Customers', value: '150000+', icon: UserGroupIcon },
  { id: 4, name: 'Quality Standards', value: '100%', icon: TrophyIcon },
];

export default function AboutPage() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <MetallicText text="About US" className="p-[6px] text-4xl md:text-6xl lg:text-7xl font-[900] mb-6" />
            <p className="text-xl text-gray-200 max-w-2xl mx-auto uppercase">
              Your trusted partner in premium metal manufacturing solutions for over 56+ years.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-zinc-800 rounded-lg">
                    <stat.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-300">{stat.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                Welcome to Shield Metal Manufacturers LTD.
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  We offer a complete line of Stainless Steel & Aluminum Fitting Covers.
                </p>
                
                <p className="text-lg leading-relaxed">
                  With over 56+ years of doing business, our years of experience and commitment to you, 
                  our customers, ensures you will receive fast, friendly and efficient service - all the time, 
                  every time.
                </p>

                <p className="text-lg leading-relaxed">
                  Thinking as contractors, Shield's goal is to produce a stainless steel elbow that matches 
                  the jacketing application…that's what you get with Shield…why do it any other way.
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
                src="/about-pic.jpg"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MetallicText text="Our Core Values" className="p-[6px] text-4xl md:text-6xl lg:text-7xl font-[900] mb-6" />
            <MetallicText text="The principles that guide everything we do at Shield Metal" className="p-[3px] text-2xl md:text-3xl lg:text-4xl font-[900]" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We maintain the highest standards in every product we manufacture.',
                icon: TrophyIcon,
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our top priority, with fast and friendly service.',
                icon: UserGroupIcon,
              },
              {
                title: 'Experience',
                description: '56+ years of expertise in metal manufacturing solutions.',
                icon: ClockIcon,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="p-3 bg-zinc-800 rounded-lg w-fit mb-6">
                  <value.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 