"use client"

import { StoreProvider } from '@/lib/store-context'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { CategoriesSection } from '@/components/categories-section'
import { BestsellersSection } from '@/components/bestsellers-section'
import { SeasonalOffers } from '@/components/seasonal-offers'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import { AIChatbot } from '@/components/ai-chatbot'
import { WelcomePopup } from '@/components/welcome-popup'

export default function HomePage() {
  return (
    <StoreProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <CategoriesSection />
          <BestsellersSection />
          <SeasonalOffers />
          <NewsletterSection />
        </main>
        <Footer />
        <CartDrawer />
        <AIChatbot />
        <WelcomePopup />
      </div>
    </StoreProvider>
  )
}
