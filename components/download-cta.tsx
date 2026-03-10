"use client"

import { motion } from "framer-motion"
import { Download, Star, Shield, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D9488 0%, #0B7E73 50%, #065F55 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#14B8A6]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-white/20"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", color: "#FDE68A" }}
          >
            <Star className="w-4 h-4 fill-[#FDE68A] text-[#FDE68A]" />
            Your Finances, Simplified
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Start Managing Your Money{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #FDE68A, #F59E0B)" }}>
              the Smart Way
            </span>
          </h2>

          <p className="text-xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of users who have taken control of their finances with Pragathi — the app that respects your privacy.
          </p>

          <Button
            size="lg"
            className="text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 group cursor-pointer border-0"
            style={{
              background: "linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)",
              boxShadow: "0 8px 32px rgba(245, 158, 11, 0.4)",
            }}
          >
            <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
            Download on Play Store
          </Button>

          <div className="mt-10 flex flex-wrap gap-8 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#99F6E4]" />
              100% Private
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-3.5 h-3.5 text-[#99F6E4]" />
              Works Offline
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "#99F6E4" }} />
              No Login Required
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
