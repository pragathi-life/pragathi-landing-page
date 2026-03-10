"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer style={{ background: "#1C1917" }} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <img src="/icon.jpeg" alt="Pragathi" className="w-9 h-9 rounded-lg" />
              <span className="text-2xl font-bold text-white">Pragathi</span>
            </div>
            <p className="mb-8 max-w-md" style={{ color: "#78716C" }}>
              Personal Finance Manager — 100% Private, 100% Offline, 100% Yours
            </p>

            <div className="flex justify-center gap-8 mb-10">
              <Link href="/privacy" className="text-sm transition-colors hover:text-[#14B8A6]" style={{ color: "#A8A29E" }}>
                Privacy Policy
              </Link>
            </div>

            <div className="w-full pt-8 border-t border-[#292524]">
              <p className="text-sm flex items-center justify-center gap-1" style={{ color: "#57534E" }}>
                © {new Date().getFullYear()} Pragathi Finance App. Made with
                <Heart className="w-3.5 h-3.5 fill-[#0D9488]" style={{ color: "#0D9488" }} />
                for your financial freedom.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
