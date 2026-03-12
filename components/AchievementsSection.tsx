"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Calculator, Target, Award } from "lucide-react"

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      id: 1,
      title: "Academic Excellence",
      icon: Trophy,
      bullets: [
        "Class 10th topper (featured in local newspapers)",
        "Class 12th topper (featured in newspapers)",
        "Cleared JEE Mains & BITSAT",
      ],
      subline: "Consistently ranked among top-performing students and recognized in the press.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/20",
    },
    {
      id: 2,
      title: "Abacus & Vedic Maths Mastery",
      icon: Calculator,
      bullets: ["Gold medalist in Vedic Maths Championship", "Certified Abacus Champion"],
      subline: "Exceptional numerical fluency and mental calculation skills.",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      glowColor: "shadow-green-500/20",
      iconColor: "text-green-400",
      iconBg: "bg-green-500/20",
    },
    {
      id: 3,
      title: "National Taekwondo Gold Medalist",
      icon: Target,
      bullets: ["Gold medalist at National Taekwondo Championship"],
      subline: "Disciplined martial artist with competitive edge and focus.",
      gradient: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20",
    },
    {
      id: 4,
      title: "South Asian Karate Gold Medalist",
      icon: Award,
      bullets: ["Gold medalist at South Asian International Karate Championship"],
      subline: "Represented at international level with distinction.",
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/20",
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/20",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Section Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light text-gray-400 uppercase tracking-[0.2em] mb-4"
          >
            RECOGNITION
          </motion.p>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Achievements</h2>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
            />
          </motion.div>
        </motion.div>

        {/* Achievements Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group cursor-target"
            >
              <div
                className={`
                  relative p-8 rounded-2xl border backdrop-blur-sm
                  bg-gradient-to-br ${achievement.gradient}
                  ${achievement.borderColor} ${achievement.glowColor}
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-2xl
                  hover:shadow-current/10
                  bg-slate-900/50 h-full flex flex-col
                `}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-br ${achievement.gradient}
                    blur-xl -z-10
                  `}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${achievement.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <achievement.icon className={`h-8 w-8 ${achievement.iconColor} drop-shadow-lg`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {achievement.title}
                  </h3>

                  {/* Bullet Points */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {achievement.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.15 + bulletIndex * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed font-medium text-sm">{bullet}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Subline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                    className="text-gray-400 text-sm leading-relaxed font-light italic border-t border-slate-700/50 pt-4"
                  >
                    {achievement.subline}
                  </motion.p>
                </div>

                {/* Subtle inner glow */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                    transition-opacity duration-300
                    bg-gradient-to-br from-white/10 to-transparent
                  `}
                />

                {/* Corner accent */}
                <div
                  className={`
                    absolute top-4 right-4 w-3 h-3 ${achievement.borderColor} 
                    border-t-2 border-r-2 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                />
                <div
                  className={`
                    absolute bottom-4 left-4 w-3 h-3 ${achievement.borderColor} 
                    border-b-2 border-l-2 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -z-10" />
    </section>
  )
}
