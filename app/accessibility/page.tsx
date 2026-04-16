"use client"

import { motion } from 'framer-motion'
import { Accessibility, Calendar, Check } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  'Keyboard navigation support throughout the site',
  'Screen reader compatible content and labels',
  'High contrast color combinations',
  'Resizable text without loss of functionality',
  'Alternative text for all images',
  'Clear and consistent navigation',
  'Focus indicators for interactive elements',
  'Descriptive link text',
]

export default function AccessibilityPage() {
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
              <Accessibility className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Accessibility Statement
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
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Commitment</h2>
                  <p>
                    PureGlowBeauty is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Conformance Status</h2>
                  <p>
                    We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Accessibility Features</h2>
                  <p className="mb-4">Our website includes the following accessibility features:</p>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Browser Compatibility</h2>
                  <p>
                    Our website is designed to be compatible with the following assistive technologies:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                    <li>Screen magnification software</li>
                    <li>Speech recognition software</li>
                    <li>Keyboard-only navigation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Limitations</h2>
                  <p>
                    Despite our best efforts to ensure accessibility, there may be some limitations. We are actively working to identify and resolve these issues. Known limitations include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Some older PDF documents may not be fully accessible</li>
                    <li>Third-party content may not meet accessibility standards</li>
                    <li>Some video content may lack captions (we are working on this)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Feedback</h2>
                  <p>
                    We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please let us know:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-1">
                    <li><strong className="text-foreground">Email:</strong> accessibility@pureglowbeauty.com</li>
                    <li><strong className="text-foreground">Phone:</strong> +34 123 456 789</li>
                    <li><strong className="text-foreground">Address:</strong> Carrer de Pau Claris, 108, 08009 Barcelona, Spain</li>
                  </ul>
                  <p className="mt-4">
                    We aim to respond to accessibility feedback within 2 business days.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Continuous Improvement</h2>
                  <p>
                    We are committed to making our website increasingly accessible. Our ongoing efforts include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Regular accessibility audits</li>
                    <li>Staff training on accessibility best practices</li>
                    <li>Testing with users who have disabilities</li>
                    <li>Incorporating accessibility into our design and development processes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Need Assistance?
          </h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto">
            If you need help navigating our website or have accessibility concerns, our team is here to assist you.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
