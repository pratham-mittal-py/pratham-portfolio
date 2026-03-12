"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart3, TrendingUp, GraduationCap, Trophy } from "lucide-react"
import MagicBento from "./MagicBento"

export default function AboutInfoCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const infoBoxes = [
    {
      icon: BarChart3,
      title: "Data Science Enthusiast",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Quantitative Finance Learner",
      color: "from-green-500 to-green-600",
    },
    {
      icon: GraduationCap,
      title: "Strong Academic Performer",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Trophy,
      title: "Sports & Leadership",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-16"
    >
      <div className="relative">
        {/* Custom MagicBento Grid */}
        <div className="magic-bento-wrapper">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="59, 130, 246"
          />
        </div>

        {/* Custom Info Cards Overlay */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {infoBoxes.map((box, index) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-3 text-center relative overflow-hidden">
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Icon container */}
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${box.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
                >
                  <box.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-tight relative z-10 group-hover:text-blue-300 transition-colors duration-300">
                  {box.title}
                </h3>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-clip-border"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
