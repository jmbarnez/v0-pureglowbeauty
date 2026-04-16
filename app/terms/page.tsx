"use client"

import { motion } from 'framer-motion'
import { FileText, Calendar } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'

export default function TermsPage() {
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
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Terms of Service
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
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <div className="space-y-8 font-sans text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p>
                    By accessing or using the PureGlowBeauty website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Use of Our Services</h2>
                  <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Use our services in any way that violates applicable laws</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Transmit any malicious code or harmful content</li>
                    <li>Interfere with the proper working of our services</li>
                    <li>Impersonate any person or entity</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Account Registration</h2>
                  <p>
                    To make purchases, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Products and Pricing</h2>
                  <p>
                    We strive to display accurate product information and pricing. However, errors may occur. We reserve the right to correct any errors and to cancel orders if products are listed at incorrect prices.
                  </p>
                  <p className="mt-4">
                    All prices are shown in Euros unless otherwise specified. Prices are subject to change without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Orders and Payment</h2>
                  <p>
                    By placing an order, you offer to purchase the products subject to these Terms. We reserve the right to refuse or cancel any order for any reason, including product availability or suspected fraud.
                  </p>
                  <p className="mt-4">
                    Payment must be made at the time of order. We accept major credit cards, PayPal, Apple Pay, Google Pay, and Klarna.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Shipping and Delivery</h2>
                  <p>
                    Shipping times are estimates and not guaranteed. We are not responsible for delays caused by carriers, customs, or circumstances beyond our control.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Returns and Refunds</h2>
                  <p>
                    Please refer to our Returns & Refunds Policy for detailed information about returning products and obtaining refunds.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Intellectual Property</h2>
                  <p>
                    All content on our website, including text, images, logos, and designs, is the property of PureGlowBeauty and protected by intellectual property laws. You may not use, reproduce, or distribute our content without permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, PureGlowBeauty shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless PureGlowBeauty and its affiliates from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">11. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of Spain. Any disputes shall be resolved in the courts of Barcelona, Spain.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">12. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the updated Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">13. Contact Information</h2>
                  <p>
                    For questions about these Terms, please contact us:
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">Email:</strong> legal@pureglowbeauty.com<br />
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
