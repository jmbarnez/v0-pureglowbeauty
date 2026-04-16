"use client"

import { motion } from 'framer-motion'
import { Truck, Shield, Leaf, Award, RefreshCw, Clock } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Free International Shipping',
    description: 'Complimentary shipping on orders over €75 to 50+ countries worldwide'
  },
  {
    icon: Shield,
    title: '100% Secure Payments',
    description: 'Encrypted transactions with Stripe, PayPal & Apple Pay'
  },
  {
    icon: Leaf,
    title: 'Cruelty-Free & Vegan',
    description: 'All products are certified cruelty-free and vegan friendly'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Dermatologically tested formulas crafted in Barcelona'
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Not satisfied? Easy returns within 30 days of purchase'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Express shipping available with real-time tracking'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-sm text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-xs font-sans text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
