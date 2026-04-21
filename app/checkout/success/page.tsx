"use client"

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Package, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { StoreProvider, useStore } from '@/lib/store-context'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const { clearCart } = useStore()
  const [hasClearedCart, setHasClearedCart] = useState(false)

  // Clear cart once on successful payment
  useEffect(() => {
    if (sessionId && !hasClearedCart) {
      clearCart()
      setHasClearedCart(true)
    }
  }, [sessionId, hasClearedCart, clearCart])

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-lg text-center">
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Check size={48} className="text-primary-foreground" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-muted-foreground mb-6 font-sans">
            Your payment was processed successfully. We&apos;re preparing your order
            and you&apos;ll receive a confirmation email shortly with tracking details.
          </p>
        </motion.div>

        {/* Order info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-secondary/30 rounded-2xl p-6 mb-8 text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <Package size={20} className="text-primary" />
            <h3 className="font-serif font-semibold">What Happens Next?</h3>
          </div>
          <ul className="space-y-3 text-sm font-sans text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <span>You&apos;ll receive an order confirmation email within minutes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <span>We&apos;ll carefully prepare and package your products in Barcelona.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <span>A tracking number will be emailed once your order ships (5-7 business days).</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button className="gap-2 font-sans">
              Continue Shopping
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/track-order">
            <Button variant="outline" className="gap-2 font-sans">
              <Package size={16} />
              Track Your Order
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <StoreProvider>
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen pt-32 pb-20 text-center">Loading...</div>}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </StoreProvider>
  )
}
