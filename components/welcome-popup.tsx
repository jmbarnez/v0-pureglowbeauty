"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Mail } from 'lucide-react'
import { useStore } from '@/lib/store-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function WelcomePopup() {
  const { showWelcomePopup, setShowWelcomePopup, t } = useStore()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setShowWelcomePopup(false)
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      {showWelcomePopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            onClick={() => setShowWelcomePopup(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full relative">
              {/* Close Button */}
              <button
                onClick={() => setShowWelcomePopup(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-rose/10 to-gold/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-32 h-32 border-2 border-dashed border-primary/20 rounded-full"
                  />
                  <div className="absolute w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Gift size={40} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                {!isSubmitted ? (
                  <>
                    <span className="inline-block px-4 py-1 bg-gold/20 text-gold text-xs font-sans font-semibold rounded-full mb-4">
                      EXCLUSIVE OFFER
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Welcome to PureGlowBeauty
                    </h2>
                    <p className="text-muted-foreground font-sans mb-2">
                      Subscribe and get
                    </p>
                    <p className="text-4xl font-serif font-bold text-primary mb-4">
                      10% OFF
                    </p>
                    <p className="text-sm text-muted-foreground font-sans mb-6">
                      your first order. Plus, be the first to know about new arrivals and exclusive offers.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="pl-11 h-12 bg-secondary border-0"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full h-12 font-sans text-base">
                        Get My 10% Off
                      </Button>
                    </form>

                    <p className="text-xs text-muted-foreground font-sans mt-4">
                      Use code: <strong>WELCOMEGLOW10</strong>
                    </p>

                    <button
                      onClick={() => setShowWelcomePopup(false)}
                      className="text-xs text-muted-foreground font-sans mt-4 hover:underline"
                    >
                      No thanks, I&apos;ll pay full price
                    </button>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift size={32} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Welcome to the Glow Club!
                    </h2>
                    <p className="text-muted-foreground font-sans">
                      Check your email for your exclusive 10% discount code.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
