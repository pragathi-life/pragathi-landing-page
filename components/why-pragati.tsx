"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Heart, Feather, Key, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Offline-first & Privacy-first",
    description: "Your financial data never leaves your device. No servers, no cloud, complete privacy guaranteed.",
  },
  {
    icon: Zap,
    title: "No Ads & No Tracking",
    description: "No intrusive ads, no data harvesting. Your experience stays clean and focused.",
  },
  {
    icon: Heart,
    title: "Designed for Everyone",
    description: "Modern, intuitive interface that makes financial management effortless and even enjoyable.",
  },
  {
    icon: Feather,
    title: "Fast & Lightweight",
    description: "Butter-smooth performance on any device. No bloat, no lag, just pure efficiency.",
  },
  {
    icon: Key,
    title: "Your Data, Your Control",
    description: "Export anytime, no lock-in. Switch whenever you want with complete data portability.",
  },
]

export function WhyMoneyTracker() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ background: "#FDE68A", color: "#92400E" }}
            >
              Why Money Tracker
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1C1917" }}>
              Built with{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #F59E0B, #FBBF24)" }}>
                Trust & Privacy
              </span>{" "}
              as Top Priorities
            </h2>
            <p className="text-lg mb-8" style={{ color: "#78716C" }}>
              We believe your financial data is deeply personal. That&apos;s why Money Tracker is designed from the ground up to keep everything on your device.
            </p>

            <div className="flex flex-wrap gap-3">
              {["No Cloud", "No Login", "No Tracking", "No Ads"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border"
                  style={{ background: "#F0FDFA", color: "#0D9488", borderColor: "#99F6E4" }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl border border-transparent hover:border-[#E7E5E4] hover:bg-[#FAFAF9] transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "#F0FDFA" }}
                  >
                    <reason.icon className="w-5 h-5" style={{ color: "#0D9488" }} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: "#1C1917" }}>{reason.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#44403C" }}>{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
