"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const screenshots = [
  {
    title: "Dashboard",
    query: "personal+finance+app+dashboard+with+net+worth+and+charts",
  },
  {
    title: "Expenses",
    query: "expense+tracking+app+screen+with+categories+and+amounts",
  },
  {
    title: "Budgets",
    query: "budget+management+app+screen+with+progress+bars",
  },
  {
    title: "Goals",
    query: "financial+goals+app+screen+with+savings+targets",
  },
  {
    title: "Analytics",
    query: "finance+analytics+app+with+charts+and+reports",
  },
]

export function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-light-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">Beautiful & Intuitive</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to make financial management effortless and enjoyable
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="relative w-64 h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                  <img
                    src={`/.jpg?height=500&width=250&query=${screenshot.query}`}
                    alt={screenshot.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-sm font-medium text-dark">{screenshot.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
