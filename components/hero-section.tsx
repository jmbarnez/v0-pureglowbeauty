"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStore } from '@/lib/store-context'

const slides = [
  {
    id: 1,
    title: 'Discover Your Natural Glow',
    subtitle: 'Premium Cruelty-Free Cosmetics',
    description: 'Experience the luxury of sustainable beauty with our award-winning formulas crafted in Barcelona.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop',
    cta: 'Shop Collection',
    link: '/category/face'
  },
  {
    id: 2,
    title: 'New Spring Collection',
    subtitle: 'Fresh Colors, Timeless Beauty',
    description: 'Embrace the season with our latest shades inspired by Mediterranean sunsets.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&h=1080&fit=crop',
    cta: 'Explore Now',
    link: '/category/lips'
  },
  {
    id: 3,
    title: 'Anti-Aging Revolution',
    subtitle: 'Science Meets Luxury',
    description: 'Our peptide-infused formulas visibly reduce fine lines while providing flawless coverage.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=1080&fit=crop',
    cta: 'Discover More',
    link: '/category/anti-aging'
  }
]

export function HeroSection() {
  const { t } = useStore()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    if (isVideoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isVideoPlaying])

  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6"
              >
                <Sparkles size={16} className="text-gold" />
                <span className="text-sm font-sans font-medium text-foreground">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`inline-block mr-3 ${i === 2 ? 'text-primary' : ''}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground font-sans mb-8 max-w-lg"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href={slides[currentSlide].link}>
                  <Button size="lg" className="h-14 px-8 text-base font-sans font-medium gap-2 group">
                    {slides[currentSlide].cta}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-base font-sans font-medium gap-2 bg-background/50 backdrop-blur-sm"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play size={18} />
                  Watch Story
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg">🐰</span>
                  </div>
                  <span className="text-sm font-sans text-muted-foreground">Cruelty-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg">🌿</span>
                  </div>
                  <span className="text-sm font-sans text-muted-foreground">Vegan Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg">✨</span>
                  </div>
                  <span className="text-sm font-sans text-muted-foreground">Dermatologist Tested</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-primary'
                : 'w-2 bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-sans text-muted-foreground tracking-widest rotate-90 origin-center translate-y-6">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/90 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-background rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-serif mb-2">Brand Story Video</p>
                  <p className="text-sm text-muted-foreground">Video player would be here</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 p-2 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
                aria-label="Close video"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
