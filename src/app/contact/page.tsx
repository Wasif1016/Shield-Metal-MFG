"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Script from "next/script";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places"
        strategy="lazyOnload"
      />

      <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
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
              <div className="max-w-xl mx-auto mb-8">
                <Image
                  src="/Let-s-Connect-06-07-2025.png"
                  alt="Doing Business Across"
                  width={1000}
                  height={1000}
                  className="object-contain px-8"
                />
              </div>
              <p className="text-xl  max-w-2xl mx-auto">
                Have questions about our products? We're here to help and answer
                any questions you might have
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
                <div className="flex gap-2">
                  <a
                    href="tel:604-594-7571"
                    className=" hover:text-blue-400 transition-colors"
                  >
                    604-594-7571 
                  </a>
                  <span className="text-white">|</span>
                  <a
                    href="tel:604-653-6737"
                    className=" hover:text-blue-400 transition-colors"
                  >
                    604-653-6737
                  </a>
                </div>
                <p className="text-sm mt-2">
                  Monday - Friday 6.30AM to 2:45PM PST
                </p>
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
                <a
                  href="mailto:SHIELD-METAL-MFG@TELUS.NET"
                  className=" hover:text-green-400 transition-colors"
                >
                  SHIELD-METAL-MFG@TELUS.NET
                </a>
                <p className="text-sm mt-2">We'll respond within 24 hours</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  Visit Us
                </h3>
                <p className="">
                  12694 82 AVENUE
                  <br />
                  SURREY, BC V3W 3G1
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl py-8 px-8 border border-white/10"
              >
                <div className="space-y-8">
                  <h3 className="text-3xl font-semibold text-white">
                    Get in Touch Directly
                  </h3>
                  <p className="text-lg">
                    Feel free to contact us directly from these resources or fill out the form
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl">
                        <PhoneIcon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-lg">
                          <a
                            href="tel:604-594-7571"
                            className="hover:text-blue-400 transition-colors"
                          >
                            604-594-7571
                          </a>{" "}
                          /{" "}
                          <a
                            href="tel:604-653-6737"
                            className="hover:text-blue-400 transition-colors"
                          >
                            604-653-6737
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-500/10 p-3 rounded-xl">
                        <MapPinIcon className="w-6 h-6 text-purple-500" />
                      </div>
                      <p className="text-lg">
                        12694 82 AVENUE
                        <br />
                        SURREY, BC V3W 3G1
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-green-500/10 p-3 rounded-xl">
                        <ClockIcon className="w-6 h-6 text-green-500" />
                      </div>
                      <p className="text-lg">Mon-Fri, 6:30am - 2:45pm PST</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-500/10 p-3 rounded-xl">
                        <EnvelopeIcon className="w-6 h-6 text-orange-500" />
                      </div>
                      <a
                        href="mailto:SHIELD-METAL-MFG@TELUS.NET"
                        className="flex items-center text-lg hover:text-blue-400 transition-colors"
                      >
                        <span>SHIELD-METAL-MFG@TELUS.NET</span>
                      </a>
                    </div>
                  </div>

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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-800 border border-white/10 
                      rounded-xl placeholder-gray-500 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-zinc-800 border border-white/10 
                        rounded-xl placeholder-gray-500 
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-zinc-800 border border-white/10 
                        rounded-xl placeholder-gray-500 
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        transition-all duration-300"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-800 border border-white/10 
                      rounded-xl placeholder-gray-500 resize-none
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      transition-all duration-300"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 px-6 bg-blue-500 text-white font-medium 
                    rounded-xl hover:bg-blue-600 
                    transition-all duration-300 
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center justify-center space-x-2"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
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
                        <span>Sending...</span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2 text-green-500"
                      >
                        <CheckIcon className="w-5 h-5" />
                        <span>Message sent successfully!</span>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2 text-red-500"
                      >
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        <span>Failed to send message. Please try again.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>

            {/* Chesnutt Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 rounded-2xl px-8 py-12 border border-white/10 text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Chesnutt
              </h3>
              <p className="max-w-xl mx-auto mb-6 uppercase">
                IF YOU ARE IN THE EASTERN OR CENTRAL USA PLEASE CONTACT CHESNUTT
                INSULATION DIRECTLY
              </p>

              <Image
                src="/other-logo.jpg"
                alt="Chesnutt Logo"
                width={200}
                height={100}
                className="mx-auto mb-6"
              />

              <div className="space-y-3">
                <div>
                  <span>Phone: </span>
                  <a href="tel:864-457-4121">864-457-4121</a>
                </div>
                <div>
                  <span>Toll Free: </span>
                  <a href="tel:1-800-222-5077">1-800-222-5077</a>
                </div>
                <div>
                  <span>Website: </span>
                  <a
                    href="https://chesnuttassociates.com/contact/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    chesnuttassociates.com/contact/
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="mt-20">
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
                    style={{
                      border: 0,
                      filter: "invert(90%) hue-rotate(180deg)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
