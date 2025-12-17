"use client"

import { motion } from "framer-motion"
import { Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary via-primary-dark to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-warning text-warning" />
            Free Forever
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Start Managing Your Money the Smart Way
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of users who have taken control of their finances with Pragathi
          </p>

          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-50 px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
            Download on Play Store
          </Button>

          <div className="mt-8 flex flex-wrap gap-8 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              Works Offline
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              100% Private
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
