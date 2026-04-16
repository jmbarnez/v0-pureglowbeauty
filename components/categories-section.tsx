"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/data/products'

const categoryImages: Record<string, string> = {
  lips: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=800&fit=crop',
  face: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop',
  'anti-aging': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop',
  eyes: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop',
  lashes: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&h=800&fit=crop',
  eyelids: 'https://images.unsplash.com/photo-1583241800698-e8ab01c85c32?w=600&h=800&fit=crop',
  coverage: 'https://images.unsplash.com/photo-1631730359585-38a4935eed15?w=600&h=800&fit=crop'
}

export function CategoriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-sans font-medium text-primary uppercase tracking-widest">
            Explore
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Discover our carefully curated collections of luxury, cruelty-free cosmetics
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Link
                href={`/category/${category.id}`}
                className="group relative block h-full min-h-[200px] md:min-h-[280px] rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={categoryImages[category.id] || category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-xs font-sans text-primary-foreground/70 uppercase tracking-wider mb-1">
                    {category.productCount} products
                  </span>
                  <h3 className="text-xl lg:text-2xl font-serif font-semibold text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm font-sans text-primary-foreground/80 hidden sm:block mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-sans font-medium text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Shop Now</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
