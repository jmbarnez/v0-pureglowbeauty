"use client"

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Filter, Grid3X3, LayoutGrid, SlidersHorizontal, X } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { AIChatbot } from '@/components/ai-chatbot'
import { products, categories } from '@/lib/data/products'
import { useStore } from '@/lib/store-context'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const skinTypes = ['All Skin', 'Normal', 'Dry', 'Oily', 'Combination', 'Sensitive']
const benefits = ['Anti-Wrinkle', 'Long-Lasting', 'Hydrating', 'Matte Finish', 'Natural Look', 'Full Coverage']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under 20€', min: 0, max: 20 },
  { label: '20€ - 30€', min: 20, max: 30 },
  { label: '30€ - 50€', min: 30, max: 50 },
  { label: 'Over 50€', min: 50, max: Infinity },
]

export default function ProductsPage() {
  const { t } = useStore()
  const [gridSize, setGridSize] = useState<'small' | 'large'>('large')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([])
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState(priceRanges[0])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category))
    }

    // Filter by skin type
    if (selectedSkinTypes.length > 0 && !selectedSkinTypes.includes('All Skin')) {
      filtered = filtered.filter(p => 
        p.skinTypes.some(st => selectedSkinTypes.includes(st))
      )
    }

    // Filter by benefits
    if (selectedBenefits.length > 0) {
      filtered = filtered.filter(p =>
        p.benefits.some(b => selectedBenefits.includes(b))
      )
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange.min && p.price <= priceRange.max)

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
        filtered = filtered.filter(p => p.badge === 'New').concat(filtered.filter(p => p.badge !== 'New'))
        break
      default:
        // Featured - show hot and bestsellers first
        filtered.sort((a, b) => {
          const aScore = (a.badge === 'Hot' ? 2 : 0) + (a.badge === 'Bestseller' ? 1 : 0)
          const bScore = (b.badge === 'Hot' ? 2 : 0) + (b.badge === 'Bestseller' ? 1 : 0)
          return bScore - aScore
        })
    }

    return filtered
  }, [selectedCategories, selectedSkinTypes, selectedBenefits, priceRange, sortBy])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    )
  }

  const toggleSkinType = (skinType: string) => {
    setSelectedSkinTypes(prev =>
      prev.includes(skinType)
        ? prev.filter(s => s !== skinType)
        : [...prev, skinType]
    )
  }

  const toggleBenefit = (benefit: string) => {
    setSelectedBenefits(prev =>
      prev.includes(benefit)
        ? prev.filter(b => b !== benefit)
        : [...prev, benefit]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedSkinTypes([])
    setSelectedBenefits([])
    setPriceRange(priceRanges[0])
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedSkinTypes.length > 0 || selectedBenefits.length > 0 || priceRange !== priceRanges[0]

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h4 className="font-serif font-semibold mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <span className="text-sm font-sans">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skin Type */}
      <div>
        <h4 className="font-serif font-semibold mb-3">Skin Type</h4>
        <div className="space-y-2">
          {skinTypes.map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedSkinTypes.includes(type)}
                onCheckedChange={() => toggleSkinType(type)}
              />
              <span className="text-sm font-sans">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h4 className="font-serif font-semibold mb-3">Benefits</h4>
        <div className="space-y-2">
          {benefits.map(benefit => (
            <label key={benefit} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedBenefits.includes(benefit)}
                onCheckedChange={() => toggleBenefit(benefit)}
              />
              <span className="text-sm font-sans">{benefit}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-serif font-semibold mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={priceRange === range}
                onCheckedChange={() => setPriceRange(range)}
              />
              <span className="text-sm font-sans">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            All Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            Discover our complete collection of luxury cruelty-free cosmetics
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif font-semibold flex items-center gap-2">
                    <SlidersHorizontal size={18} />
                    Filters
                  </h3>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                      Clear
                    </button>
                  )}
                </div>
                <FilterContent />
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Sheet open={showFilters} onOpenChange={setShowFilters}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter size={18} className="mr-2" />
                        Filters
                        {hasActiveFilters && (
                          <span className="ml-2 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                            {selectedCategories.length + selectedSkinTypes.length + selectedBenefits.length}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <p className="text-sm text-muted-foreground font-sans">
                    {filteredProducts.length} products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Grid Size Toggle */}
                  <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setGridSize('large')}
                      className={`p-2 ${gridSize === 'large' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                    >
                      <LayoutGrid size={18} />
                    </button>
                    <button
                      onClick={() => setGridSize('small')}
                      className={`p-2 ${gridSize === 'small' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                    >
                      <Grid3X3 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCategories.map(catId => {
                    const cat = categories.find(c => c.id === catId)
                    return (
                      <span
                        key={catId}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-sans"
                      >
                        {cat?.name}
                        <button onClick={() => toggleCategory(catId)}>
                          <X size={14} />
                        </button>
                      </span>
                    )
                  })}
                  {selectedSkinTypes.map(type => (
                    <span
                      key={type}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-sans"
                    >
                      {type}
                      <button onClick={() => toggleSkinType(type)}>
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                  {selectedBenefits.map(benefit => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-sans"
                    >
                      {benefit}
                      <button onClick={() => toggleBenefit(benefit)}>
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className={`grid gap-6 ${
                  gridSize === 'large'
                    ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                    : 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground font-sans mb-4">
                    No products found matching your filters.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
