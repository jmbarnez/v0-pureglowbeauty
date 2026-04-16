"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { getBestsellers, getNewArrivals, getHotProducts } from '@/lib/data/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { useStore } from '@/lib/store-context'

const tabs = [
  { id: 'bestsellers', label: 'Bestsellers', getData: getBestsellers },
  { id: 'new', label: 'New Arrivals', getData: getNewArrivals },
  { id: 'hot', label: 'Trending Now', getData: getHotProducts }
]

export function BestsellersSection() {
  const { t } = useStore()
  const [activeTab, setActiveTab] = useState('bestsellers')
  const [scrollPosition, setScrollPosition] = useState(0)

  const activeData = tabs.find(tab => tab.id === activeTab)
  const products = activeData?.getData() || []

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('products-scroll')
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setScrollPosition(prev => prev + scrollAmount)
    }
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles size={16} className="text-gold" />
              <span className="text-sm font-sans font-medium text-foreground">
                Customer Favorites
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Discover Our <span className="text-primary">Best</span> Products
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-6 lg:mt-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-sans font-medium rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:bg-muted'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollContainer('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-secondary transition-colors hidden lg:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scrollContainer('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-secondary transition-colors hidden lg:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Products Grid */}
          <div
            id="products-scroll"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] sm:min-w-[300px] snap-start"
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" className="font-sans">
            View All {activeData?.label}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
