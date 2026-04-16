import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'PureGlowBeauty | Luxury Cruelty-Free Cosmetics',
  description: 'Discover luxury, cruelty-free cosmetics crafted in Barcelona. Premium makeup for lips, eyes, face & skincare. International shipping to 50+ countries. 100% Vegan & Sustainable.',
  keywords: 'luxury cosmetics, cruelty-free makeup, vegan beauty, sustainable skincare, Barcelona cosmetics, international beauty brand',
  authors: [{ name: 'PureGlowBeauty' }],
  creator: 'PureGlowBeauty',
  openGraph: {
    title: 'PureGlowBeauty | Luxury Cruelty-Free Cosmetics',
    description: 'Premium, sustainable beauty products crafted in Barcelona. International shipping available.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PureGlowBeauty',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PureGlowBeauty | Luxury Cruelty-Free Cosmetics',
    description: 'Premium, sustainable beauty products crafted in Barcelona.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5ebe0' },
    { media: '(prefers-color-scheme: dark)', color: '#2d2a26' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
