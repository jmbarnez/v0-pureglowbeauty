"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Package } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our team typically responds within 24 hours',
    contact: 'hello@pureglowbeauty.com',
    href: 'mailto:hello@pureglowbeauty.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm CET',
    contact: '+34 123 456 789',
    href: 'tel:+34123456789',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our AI assistant 24/7',
    contact: 'Start a conversation',
    href: '#',
  },
]

const quickLinks = [
  { icon: Package, title: 'Track Your Order', desc: 'Check delivery status', href: '/track-order' },
  { icon: HelpCircle, title: 'FAQs', desc: 'Common questions answered', href: '/faq' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    orderNumber: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground font-sans">
              We&apos;d love to hear from you. Our friendly team is always here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans mb-4">
                  {method.description}
                </p>
                <p className="text-primary font-sans font-medium">
                  {method.contact}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700 font-sans">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-sans font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-sans font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">Order Question</SelectItem>
                          <SelectItem value="product">Product Information</SelectItem>
                          <SelectItem value="return">Returns & Refunds</SelectItem>
                          <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-foreground mb-2">
                        Order Number (if applicable)
                      </label>
                      <Input
                        placeholder="PGB-123456"
                        value={formData.orderNumber}
                        onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Visit Our Headquarters
              </h2>

              <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-sans font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground font-sans">
                        Carrer de Pau Claris, 108<br />
                        08009 Barcelona, Spain
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-sans font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground font-sans">
                        Monday - Friday: 9:00 AM - 6:00 PM CET<br />
                        Saturday: 10:00 AM - 2:00 PM CET<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Quick Help
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-sans">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
