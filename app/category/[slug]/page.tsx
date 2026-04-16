"use client"

import { use, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, Grid3X3, LayoutList, ChevronDown } from 'lucide-react'
import { StoreProvider, useStore } from '@/lib/store-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import { AIChatbot } from '@/components/ai-chatbot'
import { ProductCard, ProductCardSkeleton } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { categories, getProductsByCategory } from '@/lib/data/products'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' }
]

const skinTypeFilters = ['All Skin Types', 'Dry', 'Oily', 'Combination', 'Sensitive', 'Mature', 'Acne-prone']
const benefitFilters = ['All Benefits', 'Long-lasting', 'Hydrating', 'Anti-wrinkle', 'Brightening', 'Full coverage']

function CategoryContent({ slug }: { slug: string }) {
  const { formatPrice } = useStore()
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [selectedSkinType, setSelectedSkinType] = useState('All Skin Types')
  const [selectedBenefit, setSelectedBenefit] = useState('All Benefits')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const category = categories.find(c => c.id === slug)
  const allProducts = getProductsByCategory(slug)

  const filteredProducts = useMemo(() => {
    let products = [...allProducts]

    // Filter by skin type
    if (selectedSkinType !== 'All Skin Types') {
      products = products.filter(p => p.skinTypes.includes(selectedSkinType))
    }

    // Filter by benefit
    if (selectedBenefit !== 'All Benefits') {
      products = products.filter(p => p.benefits.some(b => b.toLowerCase().includes(selectedBenefit.toLowerCase())))
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        products.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        products.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0))
        break
    }

    return products
  }, [allProducts, sortBy, selectedSkinType, selectedBenefit])

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Category not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 lg:pt-32">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary to-gold/10 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-sm font-sans font-medium text-primary uppercase tracking-widest">
              Shop
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
              {category.name}
            </h1>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              {category.description}
            </p>
            <p className="text-sm text-muted-foreground font-sans mt-4">
              {filteredProducts.length} products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-28 lg:top-32 z-30 bg-background border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filters Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2 font-sans"
            >
              <SlidersHorizontal size={16} />
              Filters
              {(selectedSkinType !== 'All Skin Types' || selectedBenefit !== 'All Benefits') && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {(selectedSkinType !== 'All Skin Types' ? 1 : 0) + (selectedBenefit !== 'All Benefits' ? 1 : 0)}
                </span>
              )}
            </Button>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 font-sans">
                    Sort by: {sortOptions.find(o => o.value === sortBy)?.label}
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {sortOptions.map(option => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={sortBy === option.value ? 'bg-secondary' : ''}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* View Mode */}
              <div className="hidden sm:flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-secondary' : ''}`}
                  aria-label="Grid view"
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-secondary' : ''}`}
                  aria-label="List view"
                >
                  <LayoutList size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <div className="flex flex-wrap gap-4">
                {/* Skin Type Filter */}
                <div>
                  <label className="text-xs font-sans text-muted-foreground mb-2 block">
                    Skin Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {skinTypeFilters.map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedSkinType(type)}
                        className={`px-3 py-1.5 text-xs font-sans rounded-full transition-colors ${
                          selectedSkinType === type
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary hover:bg-muted'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Benefit Filter */}
                <div>
                  <label className="text-xs font-sans text-muted-foreground mb-2 block">
                    Benefit
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {benefitFilters.map(benefit => (
                      <button
                        key={benefit}
                        onClick={() => setSelectedBenefit(benefit)}
                        className={`px-3 py-1.5 text-xs font-sans rounded-full transition-colors ${
                          selectedBenefit === benefit
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary hover:bg-muted'
                        }`}
                      >
                        {benefit}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedSkinType !== 'All Skin Types' || selectedBenefit !== 'All Benefits') && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedSkinType('All Skin Types')
                      setSelectedBenefit('All Benefits')
                    }}
                    className="ml-auto"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-sans">
                No products match your filters. Try adjusting your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedSkinType('All Skin Types')
                  setSelectedBenefit('All Benefits')
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  
  return (
    <StoreProvider>
      <Header />
      <main>
        <CategoryContent slug={resolvedParams.slug} />
      </main>
      <Footer />
      <CartDrawer />
      <AIChatbot />
    </StoreProvider>
  )
}
