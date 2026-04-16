"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Percent } from 'lucide-react'
import { getSaleProducts } from '@/lib/data/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'

export function SeasonalOffers() {
  const saleProducts = getSaleProducts()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-rose/10 to-gold/20 mb-12"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full w-fit mb-4">
                <Percent size={16} className="text-destructive" />
                <span className="text-sm font-sans font-medium text-destructive">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                Spring Collection
                <span className="block text-primary">Up to 20% Off</span>
              </h2>
              <p className="text-muted-foreground font-sans mb-6 max-w-md">
                Embrace the season with our latest collection. Discover fresh colors and 
                innovative formulas at exclusive prices. Use code <span className="font-bold text-foreground">PUREGLOW15</span> for 
                an extra 15% off.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/category/lips">
                  <Button size="lg" className="gap-2 font-sans">
                    Shop the Sale
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>

              {/* Countdown Timer */}
              <div className="mt-8 flex gap-4">
                {[
                  { value: '05', label: 'Days' },
                  { value: '12', label: 'Hours' },
                  { value: '34', label: 'Mins' },
                  { value: '56', label: 'Secs' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 bg-card rounded-lg flex items-center justify-center mb-1 shadow-sm">
                      <span className="text-xl font-serif font-bold text-foreground">{item.value}</span>
                    </div>
                    <span className="text-xs font-sans text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop"
                alt="Spring Collection"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-destructive rounded-full flex items-center justify-center shadow-xl">
                <span className="text-destructive-foreground font-serif font-bold text-xl">
                  -20%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sale Products */}
        {saleProducts.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Sale Items
              </h3>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
