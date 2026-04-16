"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, CreditCard } from 'lucide-react'
import { useStore, languageNames, currencySymbols } from '@/lib/store-context'
import { categories } from '@/lib/data/products'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' }
]

const paymentMethods = ['Visa', 'Mastercard', 'AMEX', 'PayPal', 'Apple Pay', 'Google Pay']

export function Footer() {
  const { t, language, setLanguage, currency, setCurrency } = useStore()

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif font-bold">
                <span className="text-primary">Pure</span>
                <span className="text-gold">Glow</span>
                <span>Beauty</span>
              </h2>
            </Link>
            <p className="text-primary-foreground/70 font-sans text-sm mb-6 max-w-xs">
              Luxury cruelty-free cosmetics crafted in Barcelona. 
              Beauty that&apos;s kind to you and the planet.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm font-sans">
              <a href="mailto:hello@pureglowbeauty.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail size={16} />
                hello@pureglowbeauty.com
              </a>
              <a href="tel:+34123456789" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone size={16} />
                +34 123 456 789
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin size={16} />
                Barcelona, Spain
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Shop</h3>
            <ul className="space-y-3 text-sm font-sans">
              {categories.slice(0, 5).map(category => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.id}`}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Beauty Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Help</h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t('shipping')}
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link href="/privacy" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs font-sans text-primary-foreground/50">
              © {new Date().getFullYear()} PureGlowBeauty. All rights reserved. Made with love in Barcelona.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-primary-foreground/50 mr-2">
                Secure Payment:
              </span>
              <div className="flex gap-2">
                {paymentMethods.map(method => (
                  <div
                    key={method}
                    className="px-2 py-1 bg-primary-foreground/10 rounded text-[10px] font-sans font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Language & Currency Selectors */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-primary-foreground/70 hover:text-primary-foreground text-xs">
                    {languageNames[language]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="max-h-64 overflow-y-auto">
                  {Object.entries(languageNames).map(([code, name]) => (
                    <DropdownMenuItem
                      key={code}
                      onClick={() => setLanguage(code as typeof language)}
                    >
                      {name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-primary-foreground/70 hover:text-primary-foreground text-xs">
                    {currencySymbols[currency]} {currency}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {(['EUR', 'USD', 'GBP'] as const).map(curr => (
                    <DropdownMenuItem
                      key={curr}
                      onClick={() => setCurrency(curr)}
                    >
                      {currencySymbols[curr]} {curr}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
