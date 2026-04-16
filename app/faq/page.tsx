"use client"

import { motion } from 'framer-motion'
import { Search, Package, CreditCard, Truck, RotateCcw, Sparkles, HelpCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

const categories = [
  { icon: Package, name: 'Orders', count: 6 },
  { icon: Truck, name: 'Shipping', count: 5 },
  { icon: RotateCcw, name: 'Returns', count: 4 },
  { icon: CreditCard, name: 'Payment', count: 4 },
  { icon: Sparkles, name: 'Products', count: 5 },
]

const faqData = {
  orders: [
    { q: 'How do I track my order?', a: 'Once your order ships, you\'ll receive an email with a tracking number. You can also track your order by logging into your account and visiting the "Order History" section.' },
    { q: 'Can I modify my order after placing it?', a: 'Orders can be modified within 1 hour of placement. After that, please contact our customer service team as soon as possible.' },
    { q: 'How do I cancel my order?', a: 'You can cancel your order within 1 hour of placement through your account. After that, you\'ll need to wait for delivery and initiate a return.' },
    { q: 'Do you offer gift wrapping?', a: 'Yes! You can add gift wrapping at checkout for a small fee. We also include a personalized message card at no extra cost.' },
    { q: 'Can I order as a guest?', a: 'Yes, guest checkout is available. However, creating an account allows you to track orders, save favorites, and earn rewards.' },
    { q: 'What if I receive the wrong item?', a: 'Contact us immediately with photos of the item received. We\'ll send the correct item and arrange pickup of the wrong one at no cost to you.' },
  ],
  shipping: [
    { q: 'How much does shipping cost?', a: 'Shipping is FREE on all orders over €75. For orders under €75, standard shipping is €4.99 within Europe and varies by region internationally.' },
    { q: 'How long does delivery take?', a: 'Standard delivery: 3-5 business days (Europe), 5-10 business days (International). Express delivery: 1-2 business days (where available).' },
    { q: 'Do you ship internationally?', a: 'Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination.' },
    { q: 'Are there any customs fees?', a: 'For orders outside the EU, customs duties and taxes may apply. These are determined by your country\'s regulations and are the customer\'s responsibility.' },
    { q: 'Can I change my shipping address?', a: 'You can change your address within 1 hour of placing your order. After that, please contact customer service immediately.' },
  ],
  returns: [
    { q: 'What is your return policy?', a: 'We offer a 30-day return policy for unopened products in their original packaging. For hygiene reasons, opened products cannot be returned unless defective.' },
    { q: 'How do I return an item?', a: 'Log into your account, go to Order History, select the item to return, and follow the prompts. We\'ll email you a prepaid shipping label.' },
    { q: 'When will I receive my refund?', a: 'Refunds are processed within 5-7 business days after we receive your return. The amount will be credited to your original payment method.' },
    { q: 'Can I exchange instead of return?', a: 'Yes! Select "Exchange" when initiating your return and choose the replacement product. We\'ll ship it as soon as we receive your return.' },
  ],
  payment: [
    { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Klarna (buy now, pay later).' },
    { q: 'Is my payment information secure?', a: 'Absolutely. We use industry-standard SSL encryption and never store your full card details. All transactions are processed through secure payment gateways.' },
    { q: 'Do you offer payment plans?', a: 'Yes! Through Klarna, you can split your purchase into 3 interest-free payments or pay within 30 days.' },
    { q: 'Why was my payment declined?', a: 'Common reasons include insufficient funds, incorrect details, or bank security flags. Try a different payment method or contact your bank.' },
  ],
  products: [
    { q: 'Are your products cruelty-free?', a: 'Yes! All PureGlowBeauty products are 100% cruelty-free and certified by Leaping Bunny and PETA. We never test on animals.' },
    { q: 'Are your products vegan?', a: 'The majority of our products are vegan. Look for the "Vegan" badge on product pages. A few products contain beeswax or carmine.' },
    { q: 'How do I find my perfect shade?', a: 'Use our AI Skin-Tone Finder tool! Upload a photo or answer a few questions, and we\'ll recommend your perfect match.' },
    { q: 'What is the shelf life of your products?', a: 'Most products have a shelf life of 24 months unopened. Once opened, use within 12 months. Check the PAO symbol on packaging.' },
    { q: 'Are your products dermatologically tested?', a: 'Yes, all products are dermatologically tested and suitable for sensitive skin. We\'re also free from parabens, sulfates, and 50+ harmful ingredients.' },
  ],
}

export default function FAQPage() {
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
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-muted-foreground font-sans mb-8">
              Find answers to commonly asked questions about orders, shipping, returns, and more.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search for answers..."
                className="pl-12 h-14 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => (
              <motion.a
                key={cat.name}
                href={`#${cat.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border hover:border-primary hover:shadow-md transition-all"
              >
                <cat.icon size={20} className="text-primary" />
                <span className="font-sans font-medium text-foreground">{cat.name}</span>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">
                  {cat.count}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Orders */}
          <div id="orders" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Orders</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.orders.map((faq, index) => (
                <AccordionItem key={index} value={`orders-${index}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-sans font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Shipping */}
          <div id="shipping" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Shipping</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.shipping.map((faq, index) => (
                <AccordionItem key={index} value={`shipping-${index}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-sans font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Returns */}
          <div id="returns" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Returns</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.returns.map((faq, index) => (
                <AccordionItem key={index} value={`returns-${index}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-sans font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Payment */}
          <div id="payment" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Payment</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.payment.map((faq, index) => (
                <AccordionItem key={index} value={`payment-${index}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-sans font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Products */}
          <div id="products">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Products</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.products.map((faq, index) => (
                <AccordionItem key={index} value={`products-${index}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-sans font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground font-sans mb-8">
            Our customer service team is here to help you.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
