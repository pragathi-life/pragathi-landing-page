import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "pragati - Personal Finance Manager | 100% Private & Offline",
  description:
    "Take control of your financial future with pragati. 100% private, 100% offline, 100% yours. Track expenses, budgets, goals, and net worth with complete privacy. No ads, no login, free forever.",
  keywords: [
    "personal finance",
    "expense tracker",
    "budget app",
    "financial goals",
    "privacy",
    "offline",
    "net worth tracker",
  ],
  authors: [{ name: "pragati Finance App" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "pragati - Personal Finance Manager",
    description: "100% Private. 100% Offline. 100% Yours. Manage your finances with complete control.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "pragati - Personal Finance Manager",
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
