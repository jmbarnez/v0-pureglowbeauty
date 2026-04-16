"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock, Briefcase, Heart, Users, Sparkles, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness programs' },
  { icon: Users, title: 'Team Culture', desc: 'Collaborative, inclusive environment' },
  { icon: Sparkles, title: 'Product Perks', desc: 'Free products and employee discounts' },
  { icon: Clock, title: 'Work-Life Balance', desc: 'Flexible hours and remote work options' },
]

const openings = [
  {
    title: 'Senior Product Developer',
    department: 'R&D',
    location: 'Barcelona, Spain',
    type: 'Full-time',
    description: 'Lead the development of innovative skincare formulations.',
  },
  {
    title: 'E-commerce Manager',
    department: 'Digital',
    location: 'Barcelona, Spain',
    type: 'Full-time',
    description: 'Drive our online sales strategy and customer experience.',
  },
  {
    title: 'Social Media Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create engaging content and grow our community.',
  },
  {
    title: 'Customer Experience Lead',
    department: 'Customer Service',
    location: 'Barcelona, Spain',
    type: 'Full-time',
    description: 'Ensure exceptional customer support across all channels.',
  },
  {
    title: 'Supply Chain Analyst',
    department: 'Operations',
    location: 'Barcelona, Spain',
    type: 'Full-time',
    description: 'Optimize our sustainable supply chain processes.',
  },
  {
    title: 'UX/UI Designer',
    department: 'Digital',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design beautiful, intuitive digital experiences.',
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-sans mb-6">
              <Briefcase size={16} />
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Build Your Career in Beauty
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Join a passionate team dedicated to creating ethical, sustainable beauty products. 
              We&apos;re looking for talented individuals who share our vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground font-sans">
              We offer more than just a job—we offer a purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground font-sans">
              {openings.length} opportunities waiting for you
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-sans rounded">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans mb-3">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Apply Now
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-8">
            We&apos;re always looking for talented people. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <Button size="lg">
            Send Open Application
          </Button>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
