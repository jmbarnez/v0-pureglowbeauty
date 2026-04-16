"use client"

import { motion } from 'framer-motion'
import { Download, ExternalLink, Calendar, Quote } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'

const pressFeatures = [
  { outlet: 'Vogue España', quote: 'PureGlowBeauty redefines luxury with ethics at its core.', date: 'March 2024' },
  { outlet: 'Elle', quote: 'The future of sustainable beauty is here.', date: 'February 2024' },
  { outlet: 'Harper\'s Bazaar', quote: 'A brand that proves you don\'t have to compromise.', date: 'January 2024' },
  { outlet: 'Cosmopolitan', quote: 'Our editors\' new obsession for clean beauty.', date: 'December 2023' },
]

const pressReleases = [
  { title: 'PureGlowBeauty Launches Revolutionary Anti-Aging Collection', date: 'March 15, 2024' },
  { title: 'Brand Achieves B Corp Certification', date: 'February 1, 2024' },
  { title: 'Expansion into Asian Markets Announced', date: 'January 10, 2024' },
  { title: 'Partnership with Ocean Conservation Foundation', date: 'December 5, 2023' },
]

const awards = [
  { name: 'Best Sustainable Brand 2024', org: 'Beauty Awards Europe' },
  { name: 'Innovation in Clean Beauty', org: 'Cosmetics Design' },
  { name: 'Ethical Brand of the Year', org: 'Ethical Consumer' },
  { name: 'Best Vegan Skincare Line', org: 'Vegan Beauty Awards' },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              For press inquiries, please contact our media team at{' '}
              <a href="mailto:press@pureglowbeauty.com" className="text-primary hover:underline">
                press@pureglowbeauty.com
              </a>
            </p>
            <Button size="lg">
              <Download size={18} className="mr-2" />
              Download Press Kit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            As Seen In
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {pressFeatures.map((feature, index) => (
              <motion.div
                key={feature.outlet}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-lg font-sans text-foreground italic mb-6">
                  &quot;{feature.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-primary">{feature.outlet}</span>
                  <span className="text-sm text-muted-foreground font-sans">{feature.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Press Releases
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {pressReleases.map((release, index) => (
              <motion.a
                key={release.title}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow group"
              >
                <div>
                  <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {release.title}
                  </h3>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                    <Calendar size={14} />
                    {release.date}
                  </span>
                </div>
                <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Awards & Recognition
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">{award.name}</h3>
                <p className="text-sm text-muted-foreground font-sans">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
