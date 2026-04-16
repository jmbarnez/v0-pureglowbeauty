"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Gift, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useStore } from '@/lib/store-context'

export function NewsletterSection() {
  const { t } = useStore()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail size={28} className="text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Join the Glow Club
          </h2>

          {/* Description */}
          <p className="text-muted-foreground font-sans mb-4 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive offers, and beauty tips from our experts.
          </p>

          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-8">
            <Gift size={16} className="text-gold" />
            <span className="text-sm font-sans font-medium text-foreground">
              Get 10% off your first order with code: <strong>WELCOMEGLOW10</strong>
            </span>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="pl-11 h-12 bg-card border-border"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-8 font-sans">
                {t('subscribe')}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 py-4 px-6 bg-primary/10 rounded-full max-w-md mx-auto"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Check size={16} className="text-primary-foreground" />
              </div>
              <span className="font-sans font-medium text-foreground">
                Welcome to the Glow Club! Check your inbox.
              </span>
            </motion.div>
          )}

          {/* Trust Text */}
          <p className="text-xs text-muted-foreground font-sans mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>

          {/* Benefits */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, text: 'Early access to new products' },
              { icon: Gift, text: 'Exclusive member discounts' },
              { icon: Mail, text: 'Beauty tips & tutorials' },
              { icon: Check, text: 'VIP rewards program' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <item.icon size={20} className="text-primary" />
                <span className="text-xs font-sans text-muted-foreground text-center">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
