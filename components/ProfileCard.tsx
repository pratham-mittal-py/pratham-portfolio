"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Phone, Linkedin, Instagram, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProfileCardProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProfileCard({ isOpen, onClose }: ProfileCardProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Info</h2>
                <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Pratham Mittal</h3>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a
                    href="mailto:prathammittal2014@gmail.com"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    prathammittal2014@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div className="text-gray-700">
                    <a href="tel:+971509953275" className="hover:text-blue-600 transition-colors block">
                      +971 509953275 (Dubai)
                    </a>
                    <a href="tel:+919958202016" className="hover:text-blue-600 transition-colors block">
                      +91 9958202016 (India)
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
