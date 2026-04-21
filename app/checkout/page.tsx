"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, Truck, ShieldCheck, CreditCard, Loader2 } from 'lucide-react'
import { StoreProvider, useStore } from '@/lib/store-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import { Button } from '@/components/ui/button'
import { getStripeClient } from '@/lib/get-stripe-client'

function CheckoutContent() {
  const { cart, cartTotal, formatPrice, currency, t } = useStore()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const shipping = cartTotal >= 75 ? 0 : 9.99
  const tax = cartTotal * 0.21
  const total = cartTotal + shipping + tax

  const handleStripeCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map((item) => ({
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.image,
          })),
          currency: currency.toLowerCase(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe's hosted checkout
      const stripe = await getStripeClient()
      if (stripe && data.url) {
        window.location.href = data.url
      } else {
        throw new Error('Unable to connect to payment processor')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setIsLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some products to continue shopping</p>
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 lg:pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Review Items */}
          <div className="lg:col-span-3">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold mb-8">{t('checkout')}</h1>

            {/* Cart Items */}
            <div className="space-y-4 mb-8">
              {cart.map((item) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 p-4 bg-secondary/30 rounded-xl"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-medium text-sm truncate">{item.product.name}</h4>
                    <p className="text-xs text-muted-foreground capitalize">{item.product.category}</p>
                    <p className="text-xs text-muted-foreground mt-1">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-sans font-semibold text-sm self-center">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Security Badges */}
            <div className="flex items-center justify-center gap-6 py-4 border-y border-border mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock size={16} className="text-primary" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck size={16} className="text-primary" />
                <span>Secure Checkout</span>
              </div>
            </div>

            {/* Info about Stripe */}
            <p className="text-xs text-muted-foreground text-center">
              You&apos;ll be redirected to Stripe&apos;s secure payment page to complete your purchase.
              Shipping address, payment, and discount codes are all handled there.
            </p>
          </div>

          {/* Right — Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-secondary/30 rounded-2xl p-6 sticky top-32">
              <h2 className="text-lg font-serif font-semibold mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm truncate">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground capitalize">{item.product.category}</p>
                    </div>
                    <span className="text-sm font-sans font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-border pt-4">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className={shipping === 0 ? 'text-primary' : ''}>
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-muted-foreground">Tax (21% VAT)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-lg font-serif font-bold pt-3 border-t border-border">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleStripeCheckout}
                disabled={isLoading}
                className="w-full h-12 mt-6 text-base font-sans font-medium gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Redirecting to Payment...
                  </>
                ) : (
                  <>
                    <CreditCard size={18} />
                    Pay with Stripe — {formatPrice(total)}
                  </>
                )}
              </Button>

              {/* Error message */}
              {error && (
                <p className="mt-3 text-sm text-destructive text-center font-sans">{error}</p>
              )}

              {/* Shipping Info */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg flex items-start gap-3">
                <Truck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans font-medium">
                    {shipping === 0 ? 'Free International Shipping!' : `Add ${formatPrice(75 - cartTotal)} for free shipping`}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimated delivery: 5-7 business days
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-4 flex items-center justify-center gap-3 text-muted-foreground">
                <span className="text-xs">Powered by Stripe:</span>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                  <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-[10px] font-bold">MC</div>
                  <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-[10px] font-bold">AMEX</div>
                  <div className="w-10 h-5 bg-muted rounded flex items-center justify-center text-[8px] font-bold">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <StoreProvider>
      <Header />
      <main>
        <CheckoutContent />
      </main>
      <Footer />
      <CartDrawer />
    </StoreProvider>
  )
}
