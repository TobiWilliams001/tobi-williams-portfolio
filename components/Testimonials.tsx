"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechInnovate",
    image: "/testimonial-sarah.jpg",
    text: "Tobi's expertise in both front-end and back-end technologies made him an invaluable asset to our team. His ability to tackle complex problems with innovative solutions is truly impressive.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, DataFlow Systems",
    image: "/testimonial-michael.jpg",
    text: "Working with Tobi was a game-changer for our project. His deep understanding of scalable architecture and clean code practices elevated the entire team's performance.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, AI Solutions Inc.",
    image: "/testimonial-emily.jpg",
    text: "Tobi's contributions to our AI-driven platform were exceptional. His ability to bridge the gap between complex algorithms and user-friendly interfaces set our product apart in the market.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What People Say
        </motion.h2>
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 dark:bg-gray-700 rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-200 italic">"{testimonials[currentIndex].text}"</p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

