"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-purple-50 pt-20 pb-24 sm:pt-32 sm:pb-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              100% Private & Offline
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 text-balance">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
              100% Private. 100% Offline. 100% Yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                Download on Play Store
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-success" />
                Free Forever
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-success" />
                No Ads
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                No Login
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
                <img
                  src="/modern-finance-app-mobile-mockup-with-charts-and-b.jpg"
                  alt="Pragathi App Screenshot"
                  className="relative rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
