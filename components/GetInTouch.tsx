"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function GetInTouch() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-8 relative">
      <div className="max-w-7xl mx-auto">
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
            CONTACT
          </motion.p>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Get in Touch</h2>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full shadow-lg shadow-blue-500/50"
            />
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Panel - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information Header */}
            <div className="mb-8">
              <h3 className="text-sm font-light text-gray-400 uppercase tracking-[0.2em] mb-8">Contact Information</h3>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group cursor-target"
              >
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/50">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-7 w-7 text-white drop-shadow-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors duration-300">
                      Email
                    </h4>
                    <a
                      href="mailto:prathammittal2014@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base"
                    >
                      prathammittal2014@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group cursor-target"
              >
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/50">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-7 w-7 text-white drop-shadow-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-2 group-hover:text-green-300 transition-colors duration-300">
                      Phone
                    </h4>
                    <div className="space-y-1">
                      <a
                        href="tel:+971509953275"
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 block text-base"
                      >
                        +971 509953275 (Dubai)
                      </a>
                      <a
                        href="tel:+919958202016"
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 block text-base"
                      >
                        +91 9958202016 (India)
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group cursor-target"
              >
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/50">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-7 w-7 text-white drop-shadow-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-1 group-hover:text-orange-300 transition-colors duration-300">
                      Location
                    </h4>
                    <p className="text-gray-300 text-base">Dubai, UAE</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-8 border-t border-slate-700/50"
            >
              <h4 className="text-sm font-light text-gray-400 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
                Connect with me
              </h4>
              <div className="flex space-x-6 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/pratham-mittal-6b664b319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-target"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                    <Linkedin className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/mittal_pratham28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-target"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                    <Instagram className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                </a>
                <a
                  href="https://github.com/pratham-mittal-py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-target"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-gray-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                    <Github className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Panel - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm hover:bg-slate-800/70"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm hover:bg-slate-800/70"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none text-white placeholder-gray-400 text-lg backdrop-blur-sm hover:bg-slate-800/70"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 text-lg font-semibold cursor-target"
                >
                  <Send className="mr-3 h-6 w-6" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20 pt-8 border-t border-slate-700/30"
        >
          {/* Social Links in Footer */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/pratham-mittal-6b664b319"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-target"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6 text-white drop-shadow-lg" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/mittal_pratham28/"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-target"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-6 w-6 text-white drop-shadow-lg" />
              </div>
            </a>
            <a
              href="https://github.com/pratham-mittal-py"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-target"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-gray-500/30 transition-all duration-300 transform hover:scale-110">
                <Github className="h-6 w-6 text-white drop-shadow-lg" />
              </div>
            </a>
          </div>

          <p className="text-gray-400 text-base">© 2025 Pratham Mittal. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -z-10" />
    </section>
  )
}
