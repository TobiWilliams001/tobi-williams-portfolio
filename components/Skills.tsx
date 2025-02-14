"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Radar } from "react-chartjs-2"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const skills = [
  { name: "JavaScript", level: 95, color: "#F7DF1E", category: "Frontend" },
  { name: "React", level: 90, color: "#61DAFB", category: "Frontend" },
  { name: "TypeScript", level: 85, color: "#3178C6", category: "Frontend" },
  { name: "HTML/CSS", level: 95, color: "#E34F26", category: "Frontend" },
  { name: "Vue.js", level: 80, color: "#4FC08D", category: "Frontend" },
  { name: "Responsive Design", level: 90, color: "#38B2AC", category: "Frontend" },
  { name: "Web Performance", level: 85, color: "#0093D7", category: "Frontend" },
  { name: "Node.js", level: 75, color: "#339933", category: "Backend" },
  { name: "GraphQL", level: 70, color: "#E10098", category: "Backend" },
  { name: "Docker", level: 65, color: "#2496ED", category: "DevOps" },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))]

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

  const radarData = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: skills.map((skill) => skill.level),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  }

  const radarOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl mb-2 font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-4">
                  <motion.div
                    className="h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{skill.level}% proficiency</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

