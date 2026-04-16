"use client"

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Plus, Minus, ShoppingBag, Trash2, CreditCard } from 'lucide-react'
import { useStore } from '@/lib/store-context'
import { Button } from '@/components/ui/button'

const FREE_SHIPPING_THRESHOLD = 75

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    formatPrice,
    t
  } = useStore()

  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal
  const progressPercent = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100)

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-primary" />
                <h2 className="text-xl font-serif font-semibold">{t('viewCart')}</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-6 py-4 bg-secondary/50">
              {remainingForFreeShipping > 0 ? (
                <>
                  <p className="text-sm font-sans text-muted-foreground mb-2">
                    Add <span className="font-semibold text-foreground">{formatPrice(remainingForFreeShipping)}</span> more for free shipping!
                  </p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </>
              ) : (
                <p className="text-sm font-sans text-primary font-medium flex items-center gap-2">
                  <span>🎉</span> You qualify for free international shipping!
                </p>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-muted-foreground/30 mb-4" />
                  <h3 className="text-lg font-serif font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Discover our luxury cruelty-free products
                  </p>
                  <Button onClick={() => setIsCartOpen(false)}>
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-medium text-sm truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2 capitalize">
                          {item.product.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-secondary rounded-full">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-muted rounded-full transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-6 text-center text-sm font-sans font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-muted rounded-full transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-sans font-semibold text-sm">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors self-start"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-border bg-card">
                {/* Coupon Code */}
                <div className="mb-4 p-3 bg-secondary/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Discount Code</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="PUREGLOW15"
                      className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Button variant="outline" size="sm">Apply</Button>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={remainingForFreeShipping <= 0 ? 'text-primary' : ''}>
                      {remainingForFreeShipping <= 0 ? 'FREE' : formatPrice(9.99)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-serif font-semibold pt-2 border-t border-border">
                    <span>Total</span>
                    <span>{formatPrice(cartTotal + (remainingForFreeShipping > 0 ? 9.99 : 0))}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full h-12 text-base font-sans font-medium gap-2">
                    <CreditCard size={18} />
                    {t('checkout')}
                  </Button>
                </Link>

                {/* Payment Methods */}
                <div className="mt-4 flex items-center justify-center gap-3 text-muted-foreground">
                  <span className="text-xs">Secure Payment:</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                    <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-[10px] font-bold">MC</div>
                    <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-[10px] font-bold">AMEX</div>
                    <div className="w-10 h-5 bg-muted rounded flex items-center justify-center text-[8px] font-bold">PayPal</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
