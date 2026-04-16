"use client"

import { motion } from 'framer-motion'
import { Leaf, Recycle, Heart, Droplets, Sun, Award, TreePine, Globe } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const initiatives = [
  {
    icon: Leaf,
    title: '100% Vegan',
    description: 'All our products are made with plant-based ingredients. No animal-derived components ever.',
  },
  {
    icon: Heart,
    title: 'Cruelty-Free',
    description: 'We never test on animals. Certified by Leaping Bunny and PETA.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Packaging',
    description: '85% of our packaging is recyclable or made from recycled materials.',
  },
  {
    icon: Droplets,
    title: 'Clean Formulas',
    description: 'Free from parabens, sulfates, phthalates, and 50+ harmful ingredients.',
  },
]

const goals = [
  { year: '2024', goal: '100% recyclable packaging', progress: 85 },
  { year: '2025', goal: 'Carbon neutral operations', progress: 70 },
  { year: '2026', goal: 'Zero waste manufacturing', progress: 45 },
  { year: '2030', goal: 'Fully circular business model', progress: 25 },
]

const certifications = [
  { name: 'Leaping Bunny', desc: 'Cruelty-Free Certified' },
  { name: 'PETA', desc: 'Beauty Without Bunnies' },
  { name: 'Vegan Society', desc: 'Vegan Approved' },
  { name: 'B Corp', desc: 'Certified B Corporation' },
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-sans mb-6">
              <Leaf size={16} />
              Our Commitment to the Planet
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Beauty That Cares
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              At PureGlowBeauty, sustainability isn&apos;t just a trend—it&apos;s our foundation. 
              We believe that true beauty comes from products that are kind to your skin and the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Sustainability Pillars
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Every decision we make is guided by our commitment to ethical beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Sustainability Roadmap
              </h2>
              <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
                We&apos;ve set ambitious goals to minimize our environmental impact. 
                Here&apos;s our progress and what we&apos;re working towards.
              </p>

              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-sm font-sans font-semibold text-primary">{goal.year}</span>
                        <p className="text-foreground font-sans">{goal.goal}</p>
                      </div>
                      <span className="text-sm font-sans font-semibold text-green-600">{goal.progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <TreePine className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-bold text-foreground mb-2">50K+</div>
                <p className="text-muted-foreground font-sans text-sm">Trees Planted</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <Recycle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-bold text-foreground mb-2">85%</div>
                <p className="text-muted-foreground font-sans text-sm">Recyclable Packaging</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <Sun className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-bold text-foreground mb-2">100%</div>
                <p className="text-muted-foreground font-sans text-sm">Renewable Energy</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-bold text-foreground mb-2">-40%</div>
                <p className="text-muted-foreground font-sans text-sm">Carbon Footprint</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Certifications
            </h2>
            <p className="text-muted-foreground font-sans">
              Verified by leading ethical beauty organizations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground font-sans">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Join Our Green Beauty Movement
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-8">
            Every purchase you make supports our sustainability initiatives. 
            Together, we can make beauty a force for good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/products">Shop Sustainably</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
