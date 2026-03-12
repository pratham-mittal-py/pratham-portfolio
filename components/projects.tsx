"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Financial Data Analytics Platform",
      description:
        "A comprehensive platform for analyzing financial markets using machine learning algorithms and real-time data visualization.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "Machine Learning", "React", "API Integration"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AI-Powered Trading Bot",
      description:
        "An intelligent trading system that uses deep learning to predict market trends and execute automated trades.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "TensorFlow", "API", "Data Science"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Portfolio Management System",
      description:
        "A web application for managing investment portfolios with risk analysis and performance tracking features.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      gradient: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
