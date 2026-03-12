"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About Me", href: "#about", icon: User },
    { name: "Work Experience", href: "#experience", icon: Briefcase },
    { name: "Skills & Projects", href: "#skills", icon: Code },
    { name: "Contact Me", href: "#contact", icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 z-50 p-6 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-md rounded-bl-2xl" : ""
      }`}
    >
      <div className="flex space-x-4">
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => scrollToSection(item.href)}
            className="relative group p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-all duration-300"
          >
            <item.icon className="h-5 w-5 text-white group-hover:text-blue-400 transition-colors duration-200" />

            {/* Hover label */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {item.name}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}
