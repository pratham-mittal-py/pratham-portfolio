"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Brain, Globe, GitBranch, BarChart3 } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      name: "Python",
      icon: Code,
      description: "Data analysis, web development, automation",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Data Science",
      icon: BarChart3,
      description: "Statistical analysis, data visualization",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Machine Learning",
      icon: Brain,
      description: "Predictive modeling, AI algorithms",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "React",
      icon: Globe,
      description: "Modern web applications, UI/UX",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "SQL",
      icon: Database,
      description: "Database design, query optimization",
      color: "from-red-400 to-red-600",
    },
    {
      name: "Git",
      icon: GitBranch,
      description: "Version control, collaboration",
      color: "from-orange-400 to-orange-600",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.name}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
