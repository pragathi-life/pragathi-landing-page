"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Heart, Feather, Key } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Offline-first & privacy-first",
    description: "Your data never leaves your device",
  },
  {
    icon: Zap,
    title: "No ads, no tracking, no subscriptions",
    description: "Completely free, forever",
  },
  {
    icon: Heart,
    title: "Designed for Gen Z",
    description: "Modern interface, intuitive controls",
  },
  {
    icon: Feather,
    title: "Fast & lightweight",
    description: "Smooth performance on any device",
  },
  {
    icon: Key,
    title: "Your data, your control",
    description: "Export anytime, no lock-in",
  },
]

export function Whypragati() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">Why Choose pragati?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with your trust and privacy as our top priorities
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-1">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
