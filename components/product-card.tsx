"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart, Eye, Star } from 'lucide-react'
import { useStore } from '@/lib/store-context'
import type { Product } from '@/lib/data/products'
import { Button } from '@/components/ui/button'

type ProductCardProps = {
  product: Product
  index?: number
}

const badgeStyles = {
  hot: 'bg-rose text-primary-foreground',
  new: 'bg-gold text-accent-foreground',
  bestseller: 'bg-primary text-primary-foreground',
  sale: 'bg-destructive text-destructive-foreground'
}

const badgeLabels = {
  hot: 'Hot',
  new: 'New',
  bestseller: 'Best Seller',
  sale: 'Sale'
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, formatPrice, t } = useStore()
  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary mb-4">
        {/* Skeleton */}
        {!isImageLoaded && (
          <div className="absolute inset-0 skeleton" />
        )}

        {/* Main Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 ${
            isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
          } ${isImageLoaded ? '' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
        />

        {/* Hover Image (Swatch) */}
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} swatch`}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${badgeStyles[product.badge]}`}>
            {badgeLabels[product.badge]}
          </span>
        )}

        {/* Sale Badge */}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-sans font-bold bg-destructive text-destructive-foreground rounded-full">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute bottom-3 left-3 right-3 flex gap-2"
        >
          <Button
            onClick={() => addToCart(product)}
            className="flex-1 h-10 gap-2 font-sans text-sm"
            size="sm"
          >
            <ShoppingBag size={16} />
            {t('addToCart')}
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              size={16}
              className={isWishlisted ? 'fill-rose text-rose' : ''}
            />
          </Button>
        </motion.div>

        {/* Quick View on Mobile */}
        <Link
          href={`/product/${product.id}`}
          className="absolute inset-0 lg:hidden"
          aria-label={`View ${product.name}`}
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Category */}
        <span className="text-xs font-sans text-muted-foreground uppercase tracking-wider">
          {product.category}
        </span>

        {/* Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted'}
              />
            ))}
          </div>
          <span className="text-xs font-sans text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-lg text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {product.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-sans bg-secondary text-muted-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

// Skeleton component for loading states
export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-square rounded-xl bg-muted mb-4" />
      <div className="space-y-2">
        <div className="h-3 w-16 bg-muted rounded" />
        <div className="h-5 w-3/4 bg-muted rounded" />
        <div className="h-3 w-24 bg-muted rounded" />
        <div className="h-6 w-20 bg-muted rounded" />
      </div>
    </div>
  )
}
