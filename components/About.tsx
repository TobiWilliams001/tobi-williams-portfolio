"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-300">Profile Image Placeholder</span>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              As a passionate frontend engineer, I specialize in crafting engaging and intuitive user interfaces. My
              approach combines creativity with technical expertise to deliver exceptional web experiences.
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              While my focus is on frontend development, I embrace the T-shaped engineer concept. This allows me to dive
              deep into frontend technologies while maintaining a broad understanding of the entire web development
              ecosystem.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Core Competencies</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Frontend Frameworks (React, Vue.js)</li>
                <li>Responsive Web Design</li>
                <li>UI/UX Best Practices</li>
                <li>Performance Optimization</li>
                <li>Cross-Browser Compatibility</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

