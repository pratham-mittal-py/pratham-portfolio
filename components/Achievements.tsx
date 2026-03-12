"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calculator, Trophy, GraduationCap, Award, Target } from "lucide-react"

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Calculator,
      title: "Abacus and Vedic Maths Master",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Trophy,
      title: "National Level Taekwondo Gold Medalist",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: GraduationCap,
      title: "Class 10th Topper",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Class 12th Topper (featured in newspapers)",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Cleared JEE Mains & BITSAT",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Trophy,
      title: "South Asian International Karate Champion",
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{achievement.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
