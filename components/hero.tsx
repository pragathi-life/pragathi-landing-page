"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-32"
      style={{ background: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 50%, #FEF3E2 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0D9488]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#99F6E4]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top navigation bar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-14 sm:-top-24 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-2">
            <img src="/icon.jpeg" alt="Pragathi" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-dark">Pragathi</span>
          </div>
        </motion.nav>

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#99F6E4]"
              style={{ background: "rgba(13, 148, 136, 0.08)", color: "#0D9488" }}
            >
              <Shield className="w-4 h-4" />
              100% Private & Offline
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance" style={{ color: "#1C1917" }}>
              Take Control of Your{" "}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0D9488 0%, #14B8A6 100%)" }}
              >
                Financial Future
              </span>
            </h1>

            <p className="text-xl mb-8 leading-relaxed text-pretty" style={{ color: "#44403C" }}>
              100% Private. 100% Offline. 100% Yours. The premium personal finance app that puts your privacy first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{
                  background: "linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)",
                  boxShadow: "0 4px 16px rgba(245, 158, 11, 0.35)",
                }}
              >
                Download on Play Store
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm" style={{ color: "#44403C" }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                100% Private
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-success" />
                Works Offline
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-success" />
                No Login Required
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col gap-4"
          >
            {/* Top stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield className="w-5 h-5" style={{ color: "#0D9488" }} />, label: "Privacy First", sub: "No data leaves your device", bg: "#F0FDFA" },
                { icon: <Zap className="w-5 h-5" style={{ color: "#F59E0B" }} />, label: "Works Offline", sub: "No internet required", bg: "#FEF3E2" },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl p-4 bg-white flex flex-col gap-2"
                  style={{ boxShadow: "0 4px 16px rgba(13,148,136,0.10)" }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: card.bg }}>
                    {card.icon}
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "#1C1917" }}>{card.label}</p>
                  <p className="text-xs" style={{ color: "#78716C" }}>{card.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Feature highlights */}
            {[
              { label: "Track Income & Expenses", value: "Unlimited Entries" },
              { label: "Budget Categories", value: "Fully Customisable" },
              { label: "Financial Goals", value: "Built-in Tracker" },
              { label: "No Login / Sign-up", value: "Zero Friction" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.4 + i * 0.08 }}
                className="flex items-center justify-between rounded-2xl bg-white px-5 py-3"
                style={{ boxShadow: "0 2px 10px rgba(13,148,136,0.08)" }}
              >
                <span className="text-sm font-medium" style={{ color: "#44403C" }}>{item.label}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "#F0FDFA", color: "#0D9488" }}
                >{item.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
