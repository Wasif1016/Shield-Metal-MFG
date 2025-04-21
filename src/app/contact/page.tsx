'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Script from 'next/script';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places"
        strategy="lazyOnload"
      />
      
      <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-20">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
               <Image src="/other-logo.png" alt="Shield Metal Industries" width={500} height={500} className="w-auto h-auto mx-auto mb-12" />
              <h1 className="text-5xl font-bold text-white mb-6">
                Let's Connect
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Have questions about our products? We're here to help and answer any questions you might have.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-blue-500/10 rounded-full mb-4">
                  <PhoneIcon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:864-457-4121" className="text-gray-400 hover:text-blue-400 transition-colors">
                  864-457-4121
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 6:30am - 2:45pm PST</p>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-green-500/10 rounded-full mb-4">
                  <EnvelopeIcon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@shieldmetal.com" className="text-gray-400 hover:text-green-400 transition-colors">
                  info@shieldmetal.com
                </a>
                <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-purple-500/10 rounded-full mb-4">
                  <MapPinIcon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">
                  12694 82 AVENUE<br />
                  SURREY, BC V3W 3G1
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-[500px] bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              >
                <div id="map" className="w-full h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.0214959882715!2d-122.87472933419049!3d49.15079343598612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d99d7e5bee25%3A0xa4214b16f208c6e0!2s12694%2082%20Ave%2C%20Surrey%2C%20BC%20V3W%203A6!5e0!3m2!1sen!2sca!4v1642883272683!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl
                        text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                        focus:ring-blue-500/50 transition-all duration-300"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl
                          text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                          focus:ring-blue-500/50 transition-all duration-300"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl
                          text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                          focus:ring-blue-500/50 transition-all duration-300"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl
                        text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                        focus:ring-blue-500/50 transition-all duration-300 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 
                      text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 
                      transform hover:scale-[1.02] transition-all duration-300 
                      disabled:opacity-50 disabled:hover:scale-100 
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    {status === 'sending' ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="bg-green-500/10 text-green-400 p-4 rounded-xl text-center">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="bg-red-500/10 text-red-400 p-4 rounded-xl text-center">
                      Failed to send message. Please try again later.
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 