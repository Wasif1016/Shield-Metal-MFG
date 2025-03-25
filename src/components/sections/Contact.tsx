"use client"

import { useState } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
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
        console.error('Form submission error:', data.error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-black">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Contact Shield Metal
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to discuss your metal fabrication needs? Our team is standing by to provide expert guidance and support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Get in Touch Directly
              </h3>
              <p className="text-gray-400">
                We're a family-owned business with over 30 years of experience in metal manufacturing. Our team is committed to delivering top-quality solutions.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zinc-800 rounded-lg">
                  <ClockIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Working Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 6:30am to 2:45pm PST</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zinc-800 rounded-lg">
                  <MapPinIcon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Our Location</h4>
                  <p className="text-gray-400">
                    12694 82 AVENUE<br />
                    SURREY, BC V3W 3G1
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zinc-800 rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a 
                    href="tel:604-594-7571" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    604-594-7571
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 
              border border-white/10 space-y-6 shadow-2xl"
            >
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  className="w-full px-5 py-4 bg-zinc-800 border border-white/10 
                  rounded-xl text-white placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-primary
                  transition-all duration-300"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-5 py-4 bg-zinc-800 border border-white/10 
                    rounded-xl text-white placeholder-gray-500 
                    focus:outline-none focus:ring-2 focus:ring-primary
                    transition-all duration-300"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full px-5 py-4 bg-zinc-800 border border-white/10 
                    rounded-xl text-white placeholder-gray-500 
                    focus:outline-none focus:ring-2 focus:ring-primary
                    transition-all duration-300"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <textarea
                  placeholder="Tell us about your project"
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-zinc-800 border border-white/10 
                  rounded-xl text-white placeholder-gray-500 resize-none
                  focus:outline-none focus:ring-2 focus:ring-primary
                  transition-all duration-300"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-6 bg-foreground text-background font-semibold 
                rounded-xl hover:bg-foreground/80 
                transition-all duration-300 
                transform hover:scale-[1.02] 
                disabled:opacity-50 disabled:hover:scale-100 
                flex items-center justify-center space-x-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg 
                      className="animate-spin h-5 w-5 mr-3" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="bg-green-500/10 text-green-400 p-4 rounded-xl 
                    flex items-center justify-center space-x-2"
                  >
                    <CheckIcon className="w-6 h-6" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="bg-red-500/10 text-red-400 p-4 rounded-xl 
                    flex items-center justify-center space-x-2"
                  >
                    <ExclamationTriangleIcon className="w-6 h-6" />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}