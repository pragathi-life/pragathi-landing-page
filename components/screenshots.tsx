"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const screenshots = [
  {
    title: "Dashboard",
    description: "Your complete financial overview",
    image: "/screenshots/dashboard.PNG",
  },
  {
    title: "Income",
    description: "Track all your earnings",
    image: "/screenshots/income.PNG",
  },
  {
    title: "Expenses",
    description: "Track every transaction",
    image: "/screenshots/expense.PNG",
  },
  {
    title: "Budgets",
    description: "Smart category budgeting",
    image: "/screenshots/budget.PNG",
  },
  {
    title: "Goals",
    description: "Reach your financial targets",
    image: "/screenshots/goals.PNG",
  },
]

export function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 sm:py-28" style={{ background: "linear-gradient(135deg, #FEF3E2 0%, #FFFBF0 50%, #F0FDFA 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: "#FDE68A", color: "#92400E" }}
          >
            App Preview
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1C1917" }}>
            Beautiful &{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #F59E0B, #FBBF24)" }}>
              Intuitive
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#78716C" }}>
            Designed to make financial management effortless and enjoyable
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory"
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
                <div
                  className="relative w-72 rounded-3xl overflow-hidden bg-white p-3 group"
                  style={{ boxShadow: "0 4px 16px rgba(13, 148, 136, 0.15)" }}
                >
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] flex items-center justify-center">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="mt-3 pb-1 px-1 text-center">
                    <p className="text-base font-semibold" style={{ color: "#1C1917" }}>{screenshot.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: "#78716C" }}>{screenshot.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint gradient */}
          <div className="absolute right-0 top-0 bottom-6 w-24 pointer-events-none"
            style={{ background: "linear-gradient(to left, rgba(254,243,226,0.8), transparent)" }}
          />
        </div>
      </div>
    </section>
  )
}
