"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileSpreadsheet, Calculator, SearchCheck, LineChart, TrendingUp, BarChart3, Brain, Code } from "lucide-react"

export default function SkillsProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCards = [
    {
      id: 1,
      title: "Financial Analysis",
      icon: FileSpreadsheet,
      skills: [
        "Financial Statement Analysis",
        "Cash Flow Analysis",
        "Ratio Analysis",
        "Corporate Finance",
        "Business Analysis",
        "Financial Forecasting",
        "Risk Analysis",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/20",
    },
    {
      id: 2,
      title: "Valuation & Financial Modeling",
      icon: Calculator,
      skills: [
        "Three Statement Financial Modeling",
        "Discounted Cash Flow (DCF)",
        "Comparable Company Analysis",
        "Valuation Multiples (P/E, EV/EBITDA, EV/Sales)",
        "WACC Analysis",
        "Sensitivity & Scenario Analysis",
      ],
      gradient: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20",
    },
    {
      id: 3,
      title: "Investment Research",
      icon: SearchCheck,
      skills: [
        "Equity Research",
        "Industry Research",
        "Investment Thesis Development",
        "Market Analysis",
        "Analytical Reporting",
        "Insight Summarization",
        "Executive Summaries",
        "Presentation & Reporting",
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      glowColor: "shadow-green-500/20",
      iconColor: "text-green-400",
      iconBg: "bg-green-500/20",
    },
    {
      id: 4,
      title: "Data Analysis & Tools",
      icon: LineChart,
      skills: [
        "Python (Pandas, NumPy)",
        "Financial Data Analysis",
        "Time Series Analysis",
        "Excel (Financial Modeling)",
        "Data Visualization (Matplotlib, Seaborn)",
        "Git",
        "Jupyter Notebook",
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/20",
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/20",
    },
  ]

  return (
    <section id="skills" className="py-20 px-8 relative">
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
            CAPABILITIES
          </motion.p>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Skills & Projects</h2>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full shadow-lg shadow-blue-500/50"
            />
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group cursor-target"
            >
              <div
                className={`
                  relative p-8 rounded-2xl border backdrop-blur-sm
                  bg-gradient-to-br ${card.gradient}
                  ${card.borderColor} ${card.glowColor}
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-2xl
                  hover:shadow-current/10
                  bg-slate-900/50 h-full
                `}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-br ${card.gradient}
                    blur-xl -z-10
                  `}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <card.icon className={`h-8 w-8 ${card.iconColor} drop-shadow-lg`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {card.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.15 + skillIndex * 0.05 }}
                        className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-blue-500/50 transition-all duration-200 backdrop-blur-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
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
                    absolute top-4 right-4 w-3 h-3 ${card.borderColor} 
                    border-t-2 border-r-2 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                />
                <div
                  className={`
                    absolute bottom-4 left-4 w-3 h-3 ${card.borderColor} 
                    border-b-2 border-l-2 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          {/* Projects Header */}
          <div className="text-center mb-16">
            {/* Section Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-sm font-light text-gray-400 uppercase tracking-[0.2em] mb-4"
            >
              FEATURED
            </motion.p>

            {/* Projects Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="relative inline-block"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Projects</h3>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"
              />
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                id: 1,
                title: "Stock Price Prediction",
                description: "Built ML model for forecasting stock prices.",
                icon: TrendingUp,
                gradient: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-500/30",
                glowColor: "shadow-blue-500/20",
                iconColor: "text-blue-400",
                iconBg: "bg-blue-500/20",
              },
            ].map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group cursor-target"
              >
                <div
                  className={`
                    relative p-6 rounded-2xl border backdrop-blur-sm
                    bg-gradient-to-br ${project.gradient}
                    ${project.borderColor} ${project.glowColor}
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:shadow-2xl
                    hover:shadow-current/10
                    bg-slate-900/50 h-full flex flex-col justify-between
                  `}
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-gradient-to-br ${project.gradient}
                      blur-xl -z-10
                    `}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${project.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <project.icon className={`h-6 w-6 ${project.iconColor} drop-shadow-lg`} />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>

                    {/* View Project Link */}
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`
                      absolute top-3 right-3 w-2 h-2 ${project.borderColor} 
                      border-t-2 border-r-2 opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    `}
                  />
                  <div
                    className={`
                      absolute bottom-3 left-3 w-2 h-2 ${project.borderColor} 
                      border-b-2 border-l-2 opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    `}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -z-10" />
      </div>
    </section>
  )
}
