"use client"

import { motion } from 'framer-motion'
import { Shield, Calendar } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="flex items-center justify-center gap-2 text-muted-foreground font-sans">
              <Calendar size={16} />
              Last updated: March 1, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <div className="space-y-8 font-sans text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Introduction</h2>
                  <p>
                    PureGlowBeauty (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Personal Information</h3>
                  <p>We may collect personal information that you voluntarily provide, including:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely through our payment providers)</li>
                    <li>Order history and preferences</li>
                    <li>Account login credentials</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Automatically Collected Information</h3>
                  <p>When you visit our website, we automatically collect:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Process and fulfill your orders</li>
                    <li>Send order confirmations and shipping updates</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Prevent fraud and maintain security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Information Sharing</h2>
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Service providers (payment processors, shipping carriers, email services)</li>
                    <li>Analytics providers to improve our services</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                  <p className="mt-4">We never sell your personal information to third parties.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Data Security</h2>
                  <p>
                    We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Your Rights (GDPR)</h2>
                  <p>Under the GDPR, EU residents have the right to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Restrict processing of your data</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, contact us at privacy@pureglowbeauty.com</p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Cookies</h2>
                  <p>
                    We use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings. For more information, see our Cookie Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Data Retention</h2>
                  <p>
                    We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact our Data Protection Officer:
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">Email:</strong> privacy@pureglowbeauty.com<br />
                    <strong className="text-foreground">Address:</strong> Carrer de Pau Claris, 108, 08009 Barcelona, Spain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
