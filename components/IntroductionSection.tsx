"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function IntroductionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: "📊",
      title: "Data Science Enthusiast",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
    },
    {
      icon: "💼",
      title: "Finance & Markets Enthusiast",
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      glow: "shadow-green-500/20",
    },
    {
      icon: "🎓",
      title: "Strong Academic Performer",
      gradient: "from-purple-500/20 to-violet-500/20",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/20",
    },
    {
      icon: "🏆",
      title: "Sports & Leadership",
      gradient: "from-orange-500/20 to-amber-500/20",
      border: "border-orange-500/30",
      glow: "shadow-orange-500/20",
    },
  ]

  return (
    <section id="introduction" className="py-20 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Section Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light text-gray-400 uppercase tracking-[0.2em] mb-4"
          >
            INTRODUCTION
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-16"
          >
            Overview.
          </motion.h2>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-left font-normal">
            I am interested in how technology and quantitative methods can be used to analyze businesses, evaluate
            investment opportunities, and support financial decision-making. My work explores credit risk analysis,
            valuation models, and financial data systems.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group relative"
            >
              <div
                className={`
                  relative p-6 rounded-2xl border backdrop-blur-sm
                  bg-gradient-to-br ${feature.gradient}
                  ${feature.border} ${feature.glow}
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-2xl
                  hover:shadow-current/10
                  bg-slate-900/50
                `}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-br ${feature.gradient}
                    blur-xl -z-10
                  `}
                />

                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Subtle inner glow */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                    transition-opacity duration-300
                    bg-gradient-to-br from-white/10 to-transparent
                  `}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
