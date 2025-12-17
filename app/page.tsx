"use client"

import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Screenshots } from "@/components/screenshots"
import { WhyPragathi } from "@/components/why-pragati"
import { DownloadCTA } from "@/components/download-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg">
      <Hero />
      <Features />
      <Screenshots />
      <WhyPragathi />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
