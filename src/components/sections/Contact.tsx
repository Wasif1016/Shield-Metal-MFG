"use client";

import { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MetallicText from "../metalic-text";

export default function Contact() {
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
        console.error("Form submission error:", data.error);
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
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
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Image
            src="/Contact-Shield-Metal.png"
            alt="Contact Shield Metal"
            width={1000}
            height={1000}
            className="w-auto h-auto"
          />
          <p className="text-xl max-w-2xl mx-auto">
            Ready to discuss your metal fabrication needs? Our team is standing
            by to provide expert guidance and support
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12"> 
          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Get in Touch Directly
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="">
                      <a href="tel:604-594-7571" className="">604-594-7571</a>
                      {" "}/{" "}
                      <a href="tel:604-653-6737" className="">604-653-6737</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-blue-500" />
                  <p className="">
                    12694 82 AVENUE<br />
                    SURREY, BC V3W 3G1
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-5 h-5 text-blue-500" />
                  <p className="">Mon-Fri, 6:30am - 2:45pm PST</p>
                </div>

                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                  <a
                    href="mailto:SHIELD-METAL-MFG@TELUS.NET"
                    className=" flex items-center"
                  >
                    <span className="mr-2">SHIELD-METAL-MFG@TELUS.NET</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[150px] rounded-xl overflow-hidden mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.533186123841!2d-122.8897611!3d49.1524097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9ec8fdb4c45%3A0x611997813c0d3739!2s12694%2082%20Ave%2C%20Surrey%2C%20BC%20V3W%203G1%2C%20Canada!5e0!3m2!1sen!2s!4v1709764431705!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <form
              onSubmit={handleSubmit}
              className="h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
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
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 px-6 bg-foreground text-background font-semibold 
                rounded-xl hover:bg-foreground/80 
                transition-all duration-300 
                transform hover:scale-[1.02] 
                disabled:opacity-50 disabled:hover:scale-100 
                flex items-center justify-center space-x-2"
              >
                {status === "sending" ? (
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
                  "Send Message"
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
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
                {status === "error" && (
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

        {/* Chesnutt Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16  rounded-2xl px-8 py-12 border border-white/10 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Contact Chesnutt
          </h3>
          <p className=" max-w-xl mx-auto mb-6 uppercase">
            IF YOU ARE IN THE EASTERN OR CENTRAL USA PLEASE CONTACT CHESNUTT INSULATION DIRECTLY
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
              <span className="">Phone: </span>
              <a
                href="tel:864-457-4121"
                className=""
              >
                864-457-4121
              </a>
            </div>
            <div>
              <span className="">Toll Free: </span>
              <a
                href="tel:1-800-222-5077"
                className=""
              >
                1-800-222-5077
              </a>
            </div>
            <div>
              <span className="">Website: </span>
              <a
                href="https://chesnuttassociates.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                chesnuttassociates.com/contact/
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
