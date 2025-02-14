"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    console.log("Current theme:", theme)
    const body = document.body
    if (theme === "dark") {
      body.classList.add("dark")
    } else {
      body.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log("Toggling theme to:", newTheme)
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-900" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

