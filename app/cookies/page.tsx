"use client"

import { motion } from 'framer-motion'
import { Cookie, Calendar } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'

export default function CookiesPage() {
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
              <Cookie className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Cookie Policy
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
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">What Are Cookies?</h2>
                  <p>
                    Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">How We Use Cookies</h2>
                  <p>PureGlowBeauty uses cookies for the following purposes:</p>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure access, and shopping cart functionality.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Performance Cookies</h3>
                  <p>
                    These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve our website&apos;s performance.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Functionality Cookies</h3>
                  <p>
                    These cookies remember your preferences (like language and currency) to provide a more personalized experience.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Marketing Cookies</h3>
                  <p>
                    These cookies track your browsing habits to show you relevant advertisements. They may be set by us or third-party advertising partners.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Cookies We Use</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full mt-4 text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 text-foreground font-semibold">Cookie Name</th>
                          <th className="text-left py-3 text-foreground font-semibold">Purpose</th>
                          <th className="text-left py-3 text-foreground font-semibold">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-3">session_id</td>
                          <td className="py-3">Essential - maintains your session</td>
                          <td className="py-3">Session</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3">cart</td>
                          <td className="py-3">Essential - stores shopping cart data</td>
                          <td className="py-3">30 days</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3">preferences</td>
                          <td className="py-3">Functionality - language and currency</td>
                          <td className="py-3">1 year</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3">_ga</td>
                          <td className="py-3">Performance - Google Analytics</td>
                          <td className="py-3">2 years</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3">_fbp</td>
                          <td className="py-3">Marketing - Facebook Pixel</td>
                          <td className="py-3">3 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Managing Cookies</h2>
                  <p>
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to refuse cookies or delete existing cookies. Check your browser&apos;s help section for instructions.
                    </li>
                    <li>
                      <strong className="text-foreground">Cookie Banner:</strong> When you first visit our site, you can choose which types of cookies to accept.
                    </li>
                    <li>
                      <strong className="text-foreground">Opt-Out Links:</strong> For third-party cookies, you can use opt-out mechanisms provided by those services.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Please note that blocking certain cookies may affect your experience on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Third-Party Cookies</h2>
                  <p>
                    We use services from third parties that may set their own cookies:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Google Analytics - for website analytics</li>
                    <li>Facebook Pixel - for advertising</li>
                    <li>Stripe - for payment processing</li>
                    <li>Hotjar - for user experience analysis</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
                  <p>
                    If you have questions about our use of cookies, please contact us:
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
