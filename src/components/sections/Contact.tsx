"use client"

import { useState } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

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
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
            <div className="space-y-8">
              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <ClockIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Working Hours</h3>
                  <p className="text-gray-400">Monday - Friday: 6:30am to 2:45pm PST</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPinIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                  <p className="text-gray-400">
                    SHIELD METAL MANUFACTURERS LTD.<br />
                    12694 82 AVENUE<br />
                    SURREY, BC V3W 3G1
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <a 
                    href="tel:604-594-7571" 
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    604-594-7571
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl
                  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
                  focus:ring-1 focus:ring-blue-500 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl
                    text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
                    focus:ring-1 focus:ring-blue-500 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl
                    text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
                    focus:ring-1 focus:ring-blue-500 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl
                  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
                  focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-xl
                  hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 
                  disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="bg-green-500/10 text-green-500 p-4 rounded-xl text-center">
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 text-red-500 p-4 rounded-xl text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
