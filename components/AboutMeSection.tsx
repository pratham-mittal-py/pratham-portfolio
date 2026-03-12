"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-8 relative">
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
            ABOUT ME
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

        {/* Two-column layout: cards left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          {/* Left Column — Cards */}
          <div className="flex flex-col gap-4">

            {/* Card 1 — Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative p-5 rounded-2xl border border-blue-500/30 backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-cyan-500/10 bg-slate-900/50 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-300" />
              <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Education</h4>
              <p className="text-white font-semibold">BITS Pilani Dubai</p>
              <p className="text-gray-300 text-sm mt-1">Mathematics &amp; Computing</p>
              <p className="text-gray-400 text-sm">Specialization in Finance</p>
            </motion.div>

            {/* Card 2 — Focus Areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="group relative p-5 rounded-2xl border border-purple-500/30 backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-violet-500/10 bg-slate-900/50 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-300" />
              <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {["Credit Risk", "Financial Modeling", "Valuation", "Investment Analysis"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 3 — Career Interests */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.74 }}
              className="group relative p-5 rounded-2xl border border-orange-500/30 backdrop-blur-sm bg-gradient-to-br from-orange-500/10 to-amber-500/10 bg-slate-900/50 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/25 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-300" />
              <h4 className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">Career Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Investment Banking", "Venture Capital", "Financial Markets"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-200 border border-orange-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 4 — Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.86 }}
              className="group relative p-5 rounded-2xl border border-green-500/30 backdrop-blur-sm bg-gradient-to-br from-green-500/10 to-emerald-500/10 bg-slate-900/50 shadow-lg shadow-green-500/10 hover:shadow-green-500/25 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-300" />
              <h4 className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">Approach</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Using financial analysis together with data-driven tools to better understand businesses, evaluate risk, and support investment decisions.
              </p>
            </motion.div>

          </div>

          {/* Right Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-[1.85] font-normal">
              I am currently pursuing Mathematics and Computing at BITS Pilani Dubai with a specialization in Finance.
              My interests lie in understanding how businesses operate, how financial risk is evaluated, and how
              analytical tools can support better investment decisions.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-[1.85] font-normal">
              Through coursework, projects, and industry exposure, I have developed experience in areas such as credit
              analysis, financial modeling, and valuation. I enjoy studying financial statements, evaluating risk
              signals, and analyzing how different factors influence business performance and investment outcomes.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-[1.85] font-normal">
              I am particularly interested in opportunities in investment banking, venture capital, and financial
              markets where financial reasoning and analytical thinking are used to evaluate companies, analyze
              opportunities, and support strategic investment decisions.
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
