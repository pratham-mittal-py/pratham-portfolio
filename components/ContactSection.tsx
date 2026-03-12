"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Instagram, Github, Phone } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>

          <div className="flex flex-col items-center space-y-8">
            {/* Phone Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+971509953275"
                className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 text-white hover:text-blue-400"
              >
                <Phone className="h-5 w-5" />
                <span>+971 509953275 (Dubai)</span>
              </a>
              <a
                href="tel:+919958202016"
                className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 text-white hover:text-blue-400"
              >
                <Phone className="h-5 w-5" />
                <span>+91 9958202016 (India)</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-6"
            >
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Instagram className="h-8 w-8" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Github className="h-8 w-8" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
