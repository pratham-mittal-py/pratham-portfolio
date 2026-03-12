"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pratham Mittal
            </h3>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">© 2025 Pratham Mittal. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
