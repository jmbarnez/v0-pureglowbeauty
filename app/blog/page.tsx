"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const featuredPost = {
  title: 'The Complete Guide to Building Your Perfect Skincare Routine',
  excerpt: 'Discover the essential steps and products for achieving your best skin ever. From cleansing to moisturizing, we cover everything you need to know.',
  category: 'Skincare',
  date: 'March 20, 2024',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop',
}

const posts = [
  {
    title: '5 Lipstick Trends Taking Over 2024',
    excerpt: 'From soft mauves to bold berries, discover the lip colors everyone\'s talking about.',
    category: 'Trends',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop',
  },
  {
    title: 'Understanding Clean Beauty: What It Really Means',
    excerpt: 'We break down the buzzwords and explain what truly makes a product "clean."',
    category: 'Education',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
  },
  {
    title: 'How to Find Your Perfect Foundation Shade',
    excerpt: 'Our expert guide to matching your undertone and finding your ideal coverage.',
    category: 'Tutorials',
    date: 'March 5, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
  },
  {
    title: 'The Rise of Vegan Beauty',
    excerpt: 'Why more people are choosing cruelty-free and what it means for the industry.',
    category: 'Sustainability',
    date: 'February 28, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop',
  },
  {
    title: 'Winter to Spring: Transitioning Your Makeup',
    excerpt: 'How to update your beauty routine as the seasons change.',
    category: 'Tutorials',
    date: 'February 20, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=300&fit=crop',
  },
  {
    title: 'Behind the Scenes: How We Develop Our Products',
    excerpt: 'A look into our R&D process and commitment to quality.',
    category: 'Brand',
    date: 'February 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop',
  },
]

const categories = ['All', 'Skincare', 'Tutorials', 'Trends', 'Sustainability', 'Education', 'Brand']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Beauty Blog
            </h1>
            <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
              Tips, tutorials, and trends from our beauty experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-sans whitespace-nowrap bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border"
          >
            <div className="aspect-video lg:aspect-auto relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-sans rounded-full">
                Featured
              </span>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-sans mb-4">
                <Tag size={14} />
                {featuredPost.category}
              </span>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground font-sans mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-6">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {featuredPost.readTime}
                </span>
              </div>
              <Button className="w-fit">
                Read Article
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border border-border group hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-background/90 text-foreground text-xs font-sans rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto">
            Get the latest beauty tips, product launches, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-sans focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
