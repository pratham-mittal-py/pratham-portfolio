"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProfileCard from "./ProfileCard"

export default function HeroSection() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-left">
              <h1 className="mb-6">
                <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">Hi, I'm</div>
                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4">
                  Pratham Mittal
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-4">
                  Technology, Data, and Financial Markets
                </div>
                <div className="text-lg text-gray-400 font-light">
                  Exploring The Intersection Of Technology And Finance.
                </div>
              </h1>
            </div>

            {/* Right side - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative cursor-target">
                {/* Main profile container with gradient border and glow */}
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-full p-1 shadow-2xl shadow-blue-500/20 relative z-10">
                  {/* Inner container for proper spacing */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-full p-1 relative">
                    {/* Profile image with all required styling */}
                    <img
                      src="/profile_pic.jpg"
                      alt="Pratham Mittal - Finance & Investment Analysis"
                      className="w-full h-full rounded-full shadow-lg relative z-20"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "50%",
                        filter: "brightness(1.05) contrast(1.1)",
                      }}
                      onLoad={(e) => {
                        // Ensure image is visible once loaded
                        e.currentTarget.style.opacity = "1"
                      }}
                      onError={(e) => {
                        // Fallback in case image fails to load
                        console.error("Profile image failed to load")
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 cursor-target border-2 border-white/20 z-30"
                >
                  <span className="text-white font-bold text-sm drop-shadow-lg">DS</span>
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 cursor-target border-2 border-white/20 z-30"
                >
                  <span className="text-white font-bold text-xs drop-shadow-lg">FA</span>
                </motion.div>

                {/* Additional subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl -z-10 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Move buttons to absolute positioning at bottom */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-target"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => setIsProfileOpen(true)}
            className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-target"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      <ProfileCard isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </section>
  )
}
