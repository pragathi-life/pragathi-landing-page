"use client"

import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Screenshots } from "@/components/screenshots"
import { WhyMoneyTracker } from "@/components/why-pragati"
import { DownloadCTA } from "@/components/download-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Screenshots />
      <WhyMoneyTracker />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
