"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  if (!isMounted) return null

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  }

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate="default"
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

export default CustomCursor

