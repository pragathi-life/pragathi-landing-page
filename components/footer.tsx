"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Pragathi</h3>
          <p className="text-gray-400 mb-8">Personal Finance Manager - 100% Private, 100% Yours</p>

          <div className="flex justify-center gap-6 mb-8">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Pragathi Finance App. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
