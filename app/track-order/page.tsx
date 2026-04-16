"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, Truck, CheckCircle, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const mockOrder = {
  orderNumber: 'PGB-2024-123456',
  status: 'in_transit',
  estimatedDelivery: 'March 25, 2024',
  items: [
    { name: 'Velvet Matte Lipstick - Rosewood', quantity: 2, price: 24.99 },
    { name: 'Silk Foundation - Natural Beige', quantity: 1, price: 42.99 },
  ],
  timeline: [
    { status: 'Order Placed', date: 'March 20, 2024 - 10:30 AM', completed: true },
    { status: 'Payment Confirmed', date: 'March 20, 2024 - 10:32 AM', completed: true },
    { status: 'Processing', date: 'March 20, 2024 - 2:15 PM', completed: true },
    { status: 'Shipped', date: 'March 21, 2024 - 9:00 AM', completed: true },
    { status: 'In Transit', date: 'March 22, 2024 - 11:45 AM', completed: true, current: true },
    { status: 'Out for Delivery', date: 'Expected March 25, 2024', completed: false },
    { status: 'Delivered', date: '', completed: false },
  ],
  carrier: 'DHL Express',
  trackingNumber: '1234567890',
}

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderNumber && email) {
      setShowResults(true)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Order Placed':
      case 'Payment Confirmed':
        return Package
      case 'Processing':
        return Clock
      case 'Shipped':
      case 'In Transit':
        return Truck
      case 'Out for Delivery':
        return MapPin
      case 'Delivered':
        return CheckCircle
      default:
        return Package
    }
  }

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
              <Truck className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Track Your Order
            </h1>
            <p className="text-xl text-muted-foreground font-sans">
              Enter your order details to see the latest shipping status.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="bg-card rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">
                    Order Number
                  </label>
                  <Input
                    placeholder="e.g., PGB-2024-123456"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="The email used for your order"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Search size={18} className="mr-2" />
                  Track Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Results */}
      {showResults && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Order Summary */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                      <p className="text-sm text-muted-foreground font-sans mb-1">Order Number</p>
                      <p className="text-xl font-serif font-bold text-foreground">{mockOrder.orderNumber}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm text-muted-foreground font-sans mb-1">Estimated Delivery</p>
                      <p className="text-xl font-serif font-bold text-primary">{mockOrder.estimatedDelivery}</p>
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="bg-primary/5 rounded-xl p-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Truck className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-sans mb-1">Current Status</p>
                        <p className="text-2xl font-serif font-bold text-foreground">In Transit</p>
                        <p className="text-sm text-muted-foreground font-sans mt-1">
                          Carrier: {mockOrder.carrier} | Tracking: {mockOrder.trackingNumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-6">Shipping Timeline</h3>
                  <div className="space-y-4">
                    {mockOrder.timeline.map((step, index) => {
                      const Icon = getStatusIcon(step.status)
                      return (
                        <div key={step.status} className="flex items-start gap-4">
                          <div className="relative">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              step.completed 
                                ? step.current 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-green-100 text-green-600'
                                : 'bg-secondary text-muted-foreground'
                            }`}>
                              <Icon size={20} />
                            </div>
                            {index < mockOrder.timeline.length - 1 && (
                              <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-8 ${
                                step.completed ? 'bg-green-200' : 'bg-border'
                              }`} />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <p className={`font-sans font-medium ${
                              step.current ? 'text-primary' : step.completed ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {step.status}
                            </p>
                            {step.date && (
                              <p className="text-sm text-muted-foreground font-sans">{step.date}</p>
                            )}
                          </div>
                          {step.completed && !step.current && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-6">Order Items</h3>
                  <div className="space-y-4">
                    {mockOrder.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                        <div>
                          <p className="font-sans font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground font-sans">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-sans font-semibold text-foreground">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Need Help With Your Order?
          </h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto">
            If you have any questions about your delivery, our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="/contact">Contact Support</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/faq">View FAQs</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
