"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export const testimonials = [
  {
    id: 1,
    name: "John Peterson",
    role: "Aerospace",
    content: "Shield Metal Industries' stainless steel elbows are exceptional. Their Type 316 elbows offer unmatched corrosion resistance and precision, perfect for our projects. The team is knowledgeable, responsive, and always delivers on time. A trusted partner for over 25 years",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Construction",
    content: "We rely on Shield's aluminum elbows for our construction projects. The smooth and stucco finishes are durable and weather-resistant, with excellent coatings for long-term protection. Their attention to detail and professionalism make them a top choice for us.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Reynolds",
    role: "Energy",
    content: "Shield's coated aluminum elbows are a perfect fit for our energy projects. The corrosion-resistant coatings and lightweight 1100 alloy ensure reliability in harsh conditions. Their custom solutions and expertise have made them a trusted partner for our team.",
    rating: 5
  }
];

export function SuccessStories() {
  return (
    <section id="stories" className="relative py-16 md:py-20 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl opacity-100" />
      </div>

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 relative z-10">
            <motion.h2 
              className="text-4xl md:text-6xl font-custom text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What our clients say about us Industries
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full p-6 rounded-2xl border border-border bg-gradient-to-br from-zinc-950 to-zinc-900 backdrop-blur-sm hover:border-primary/20 transition-all duration-500">
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote className="w-10 h-10 text-primary/60" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-base text-gray-200 leading-relaxed italic">
            {testimonial.content}
          </p>

          {/* Rating */}
          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </div>

        {/* Author */}
        {/* <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-700">
          <div>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div> */}
      </div>
    </motion.div>
  )
}