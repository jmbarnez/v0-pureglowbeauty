"use client"

import { motion } from 'framer-motion'
import { RotateCcw, Package, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
  {
    icon: Package,
    title: 'Request Return',
    description: 'Log into your account and select the items you wish to return within 30 days of delivery.',
  },
  {
    icon: RotateCcw,
    title: 'Pack & Ship',
    description: 'Pack items in original packaging. Print your prepaid shipping label and drop off at any carrier location.',
  },
  {
    icon: CheckCircle,
    title: 'Get Refunded',
    description: 'Once we receive and inspect your return, your refund will be processed within 5-7 business days.',
  },
]

const policies = [
  {
    title: 'What Can Be Returned',
    items: [
      'Unopened products in original packaging',
      'Products with manufacturing defects',
      'Wrong items received',
      'Damaged items (report within 48 hours)',
    ],
  },
  {
    title: 'What Cannot Be Returned',
    items: [
      'Opened or used products (for hygiene reasons)',
      'Products without original packaging',
      'Items purchased more than 30 days ago',
      'Gift cards and promotional items',
    ],
  },
]

const faqs = [
  {
    question: 'How long do I have to return an item?',
    answer: 'You have 30 days from the delivery date to initiate a return. Products must be in their original, unopened condition.',
  },
  {
    question: 'Is return shipping free?',
    answer: 'Yes! We provide prepaid return labels for all EU countries. For international returns, shipping costs may apply.',
  },
  {
    question: 'How long does the refund take?',
    answer: 'Once we receive your return, refunds are processed within 5-7 business days. The amount will appear on your original payment method.',
  },
  {
    question: 'Can I exchange instead of return?',
    answer: 'Yes! Select "Exchange" when initiating your return, and choose the replacement product. We\'ll ship it as soon as we receive your return.',
  },
]

export default function ReturnsPage() {
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
              <RotateCcw className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Returns & Refunds
            </h1>
            <p className="text-xl text-muted-foreground font-sans">
              We want you to love your purchase. If you&apos;re not completely satisfied, 
              we make returns easy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            How Returns Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border">
                    <ArrowRight className="absolute -right-3 -top-2.5 text-border" />
                  </div>
                )}
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-12 h-12 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-sans font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-sans">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              Start a Return
            </Button>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            Return Policy
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                  {index === 0 ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  )}
                  {policy.title}
                </h3>
                <ul className="space-y-3">
                  {policy.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground font-sans">
                      <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${index === 0 ? 'bg-green-600' : 'bg-red-500'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
              Refund Timeline
            </h2>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground mb-1">Return Received</h4>
                    <p className="text-muted-foreground font-sans text-sm">
                      We&apos;ll email you once your return arrives at our warehouse.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground mb-1">Inspection (1-2 days)</h4>
                    <p className="text-muted-foreground font-sans text-sm">
                      Our team inspects returned items to ensure they meet our policy requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground mb-1">Refund Processed (5-7 days)</h4>
                    <p className="text-muted-foreground font-sans text-sm">
                      Your refund will be credited to your original payment method. Bank processing times may vary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground font-sans text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Need Help With Your Return?
          </h2>
          <p className="text-muted-foreground font-sans mb-8">
            Our customer service team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
