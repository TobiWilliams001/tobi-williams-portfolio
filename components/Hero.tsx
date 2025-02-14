"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import Link from "next/link"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="z-10 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tobi Williams
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl mb-8 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={["Frontend Engineer", 2000, "UI/UX Enthusiast", 2000, "Performance Optimizer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Crafting engaging and intuitive user interfaces with a focus on performance and accessibility. Transforming
          ideas into seamless web experiences.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <Link
            href="https://www.linkedin.com/in/tobi-williams"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block mr-4"
          >
            Let's Connect
          </Link>
          <button
            onClick={scrollToProjects}
            className="bg-transparent hover:bg-blue-700 text-blue-600 dark:text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-full transition-colors duration-300 inline-block"
          >
            View Projects
          </button>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.5} speed={1.5} />
          </Sphere>
        </Canvas>
      </div>
    </section>
  )
}

