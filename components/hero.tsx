"use client"

import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextType from "@/components/TextType"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Typing Text Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <TextType
              text={[
                "Hi, I'm Pratham Mittal",
                "Technology, Data, and Financial Markets",
                "Exploring The Intersection Of Technology And Finance",
              ]}
              as="h1"
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl min-h-[120px] md:min-h-[180px] flex items-center justify-center"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-white drop-shadow-lg"
              startOnVisible={true}
              loop={true}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 text-white hover:bg-white/20 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-md shadow-2xl hover:shadow-3xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          {/* Avatar/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/30">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=250&width=250"
                    alt="Pratham Mittal"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/40"
              >
                <span className="text-white font-bold text-sm md:text-base drop-shadow-lg">{"</>"}</span>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/40"
              >
                <span className="text-white font-bold text-xs md:text-sm drop-shadow-lg">AI</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
