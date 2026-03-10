import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pragathi - Personal Finance Manager | 100% Private & Offline",
  description:
    "Take control of your financial future with Pragathi. 100% private, 100% offline, 100% yours. Track expenses, budgets, goals, and net worth with complete privacy. No ads, no login required.",
  keywords: [
    "personal finance",
    "expense tracker",
    "budget app",
    "financial goals",
    "privacy",
    "offline",
    "net worth tracker",
  ],
  authors: [{ name: "Pragathi Finance App" }],
  icons: {
    icon: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
  openGraph: {
    title: "Pragathi - Personal Finance Manager",
    description: "100% Private. 100% Offline. 100% Yours. Manage your finances with complete control.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragathi - Personal Finance Manager",
    description: "100% Private. 100% Offline. 100% Yours.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
