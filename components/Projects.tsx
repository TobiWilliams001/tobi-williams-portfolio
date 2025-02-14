"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const projects = [
  {
    title: "Interactive Data Visualization Dashboard",
    description:
      "A responsive dashboard built with React and D3.js, showcasing complex data sets with interactive charts and filters.",
    image: "/project-data-viz.jpg",
    link: "https://github.com/TobiWilliams001/data-viz-dashboard",
    tech: ["React", "D3.js", "Tailwind CSS", "Vite"],
    category: "Front-end",
  },
  {
    title: "E-commerce Product Page",
    description:
      "A fully responsive e-commerce product page with image gallery, add to cart functionality, and real-time inventory updates.",
    image: "/project-ecommerce.jpg",
    link: "https://github.com/TobiWilliams001/ecommerce-product-page",
    tech: ["Next.js", "TypeScript", "Styled Components", "Framer Motion"],
    category: "Front-end",
  },
  {
    title: "Weather App with Geolocation",
    description:
      "A sleek weather application using geolocation and integrating with a weather API to display current conditions and forecasts.",
    image: "/project-weather-app.jpg",
    link: "https://github.com/TobiWilliams001/weather-app",
    tech: ["React", "OpenWeatherMap API", "Geolocation API", "CSS Modules"],
    category: "Front-end",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A responsive social media dashboard with theme switcher, showcasing follower counts and engagement metrics across platforms.",
    image: "/project-social-dashboard.jpg",
    link: "https://github.com/TobiWilliams001/social-media-dashboard",
    tech: ["Vue.js", "Vuex", "SCSS", "Chart.js"],
    category: "Front-end",
  },
  {
    title: "Task Management Web App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    image: "/project-task-manager.jpg",
    link: "https://github.com/TobiWilliams001/task-management-app",
    tech: ["React", "Firebase", "React Beautiful DND", "Material-UI"],
    category: "Full-stack",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(projects.map((project) => project.category))]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="flex justify-center mb-8">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  View on GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

