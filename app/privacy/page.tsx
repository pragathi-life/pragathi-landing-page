"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-dark mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: 01-01-26</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Money Tracker – Personal Finance Management App ("we," "our," or "us") values your privacy. This Privacy
                Policy explains how we handle your personal information when you use our mobile application ("App").
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to ensuring that your data is kept private, secure, and under your control at all
                times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and do not collect, store, or transmit any personal or financial data to our
                servers or third parties.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All the data you enter — including your expenses, budgets, goals, and assets — is stored locally on your
                device only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">3. How We Use Your Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Since all data is stored locally on your device:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We do not access, share, or sell your data.</li>
                <li>The App uses your data only to display financial insights, budget summaries, and goal progress.</li>
                <li>You may choose to export your data in JSON format for backup or sharing purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">4. Data Storage and Security</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All data remains securely stored on your device.</li>
                <li>The App does not use cloud storage, external servers, or third-party analytics tools.</li>
                <li>
                  You are responsible for managing backups and device-level security (e.g., PIN, fingerprint, or
                  password protection).
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">5. Permissions Used</h2>
              <p className="text-gray-700 leading-relaxed mb-4">The App may request limited permissions such as:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Storage Access:</strong> To save and export data backups.
                </li>
                <li>
                  <strong>Notification Access:</strong> To send reminders about budgets and goals.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not request access to contacts, camera, microphone, location, or any other personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">6. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Money Tracker does not use any third-party SDKs, analytics tools, or ad services. No personal information is
                shared with external parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our App is suitable for users aged 13 and above. We do not knowingly collect or store any information
                from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">8. Your Data Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Because data is only stored locally on your device:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You can view, modify, or delete your data anytime from within the App.</li>
                <li>Uninstalling the App will permanently delete all stored data.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy periodically. Any updates will be reflected in the App and effective
                immediately upon publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <p className="text-primary font-medium">kvamsi82@gmail.com</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
