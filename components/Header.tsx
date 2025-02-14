"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const { theme } = useTheme()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      theme === "dark" ? "rgba(17, 24, 39, 0)" : "rgba(255, 255, 255, 0)",
      theme === "dark" ? "rgba(17, 24, 39, 0.8)" : "rgba(255, 255, 255, 0.8)",
    ],
  )

  useEffect(() => {
    const handleResize = () => setIsOpen(false)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const menuItems = ["About", "Skills", "Experience", "Projects", "Contact"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            TW
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium hover:text-blue-500 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <ThemeToggle />
          </div>
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12"></path> : <path d="M4 6h16M4 12h16M4 18h16"></path>}
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block py-2 text-sm font-medium hover:text-blue-500 transition-colors duration-300 w-full text-left"
              >
                {item}
              </button>
            ))}
            <div className="py-2">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

