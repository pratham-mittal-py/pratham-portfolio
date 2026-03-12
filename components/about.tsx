"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I am a Computer Science student at BITS Pilani, Dubai Campus, passionate about data science, AI, and
              finance. I enjoy solving complex problems and building impactful solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My journey in technology has led me to explore the fascinating intersection of data science and financial
              markets, where I combine analytical thinking with creative problem-solving to develop innovative
              solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">3+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="About illustration"
                className="w-96 h-96 rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">DS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
