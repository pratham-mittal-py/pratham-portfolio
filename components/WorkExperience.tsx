"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function WorkExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      id: 1,
      icon: "💼",
      title: "Credit Risk Specialist",
      company: "Agrim Fincap",
      description: "Worked on borrower risk evaluation and credit decision workflows for short-tenure consumer lending within an RBI-registered NBFC.",
      duration: "June 2025 – August 2025",
      bullets: [
        "Evaluated borrower profiles across income stability, repayment behavior, and bureau indicators to support credit approval and rejection decisions.",
        "Reviewed cash flow patterns and short-tenure repayment structures to identify high-risk borrower segments within unsecured lending portfolios.",
        "Contributed to underwriting documentation and internal decision workflows across multiple loan cases, supporting faster processing timelines.",
        "Analyzed borrower risk signals and early delinquency patterns to understand drivers of credit default in retail lending.",
        "Observed the operational flow of digital lending including borrower onboarding, credit checks, approval routing, and post-disbursement monitoring.",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
      position: "left",
    },
  ]

  return (
    <section id="experience" className="py-20 px-8 relative">
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
            EXPERIENCE
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Work Experience.
          </motion.h2>
        </motion.div>

        {/* Two-column Experience Snapshot layout */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto"
        >
          {/* Left — Workplace Image */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-light text-gray-400 uppercase tracking-[0.2em]">
              Experience Snapshot
            </p>
            <div className="relative group rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/10">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              <div className="relative w-full" style={{ height: "360px" }}>
                <Image
                  src="/agrim.jpg"
                  alt="Agrim Fincap Work Experience"
                  fill
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right — Experience Card */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              className="cursor-target group"
            >
              <div
                className={`
                  relative p-10 rounded-2xl border backdrop-blur-sm
                  bg-gradient-to-br ${exp.gradient}
                  ${exp.borderColor} ${exp.glowColor}
                  transition-all duration-300 ease-out
                  hover:scale-[1.02] hover:shadow-2xl
                  bg-slate-900/50
                `}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-br ${exp.gradient}
                    blur-xl -z-10
                  `}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-slate-800 border-2 border-blue-500/60 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                      <span className="text-2xl">{exp.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-400">{exp.company}</h4>
                      {exp.description && (
                        <p className="text-sm text-gray-400 font-light mt-1 leading-snug">{exp.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Duration */}
                  <p className="text-gray-400 font-medium mb-6 pl-[4.5rem]">{exp.duration}</p>

                  {/* Divider */}
                  <div className={`w-full h-px bg-gradient-to-r ${exp.gradient} opacity-40 mb-6`} />

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + bulletIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed font-medium">{bullet}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>

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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
