"use client"

import { motion } from "framer-motion"
import { Lock, TrendingUp, Target, PieChart, BarChart3, Bell } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "All data stored locally on your device. No cloud, no tracking, no compromise.",
    iconBg: "#F0FDFA",
    iconColor: "#0D9488",
  },
  {
    icon: TrendingUp,
    title: "Net Worth Tracking",
    description: "Assets, liabilities & investments beautifully organized in one place.",
    iconBg: "#F0FDFA",
    iconColor: "#14B8A6",
  },
  {
    icon: Target,
    title: "Financial Goals",
    description: "Set targets, track progress & stay motivated with visual milestones.",
    iconBg: "#FEF3E2",
    iconColor: "#F59E0B",
  },
  {
    icon: PieChart,
    title: "Smart Budgeting",
    description: "Category-wise budgets with intelligent alerts to keep you on track.",
    iconBg: "#F0FDFA",
    iconColor: "#0D9488",
  },
  {
    icon: BarChart3,
    title: "Expense Insights",
    description: "Beautiful charts & detailed reports for smarter financial decisions.",
    iconBg: "#FEF3E2",
    iconColor: "#F59E0B",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss payments, bills, or savings goals with timely notifications.",
    iconBg: "#F0FDFA",
    iconColor: "#14B8A6",
  },
]

export function Features() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#F0FDFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: "#99F6E4", color: "#0D9488" }}
          >
            Powerful Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1C1917" }}>
            Everything You Need to{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #0D9488, #14B8A6)" }}>
              Master Your Money
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#78716C" }}>
            Powerful features designed to give you complete control over your finances
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div
                className="relative p-8 rounded-2xl bg-white border border-[#E7E5E4] hover:border-[#99F6E4] transition-all duration-300 h-full"
                style={{ boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)" }}
              >
                <div
                  className="inline-flex p-3.5 rounded-xl mb-5"
                  style={{ background: feature.iconBg }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.iconColor }} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0D9488] transition-colors" style={{ color: "#1C1917" }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#44403C" }}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
