"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "Jan 2021 - Present",
    description:
      "Led the development of a scalable microservices architecture, improving system performance by 40%. Mentored junior developers and implemented best practices in code reviews and testing.",
    technologies: ["React", "Node.js", "Docker", "Kubernetes", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "InnovateSoft",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained multiple client-facing web applications using React and Node.js. Implemented CI/CD pipelines, reducing deployment time by 60%.",
    technologies: ["React", "Node.js", "GraphQL", "Jenkins", "Azure"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Hub",
    period: "Jun 2016 - Feb 2018",
    description:
      "Collaborated in an agile team to build responsive web applications. Gained expertise in front-end technologies and RESTful API integration.",
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "PHP", "MySQL"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-xl text-gray-900 dark:text-white">{exp.title}</h3>
                <h4 className="mb-3 font-semibold text-lg text-blue-600 dark:text-blue-400">{exp.company}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.period}</p>
                <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-300 text-opacity-100">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

