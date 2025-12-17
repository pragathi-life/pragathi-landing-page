"use client"

import { motion } from "framer-motion"
import { Lock, TrendingUp, Target, PieChart, BarChart3, Bell } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "All data stored locally on your device",
    color: "from-primary to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Net Worth Tracking",
    description: "Assets, liabilities & investments in one place",
    color: "from-success to-emerald-600",
  },
  {
    icon: Target,
    title: "Financial Goals",
    description: "Track progress & stay motivated",
    color: "from-warning to-orange-600",
  },
  {
    icon: PieChart,
    title: "Smart Budgeting",
    description: "Category-wise budgets & alerts",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Expense Insights",
    description: "Charts & reports for better decisions",
    color: "from-primary to-indigo-600",
  },
  {
    icon: Bell,
    title: "Reminders",
    description: "Never miss payments or goals",
    color: "from-danger to-red-600",
  },
]

export function Features() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Everything You Need to Master Your Money
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
