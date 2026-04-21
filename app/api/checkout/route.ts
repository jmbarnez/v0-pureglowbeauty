import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

type CartLineItem = {
  name: string
  price: number
  quantity: number
  image: string
}

export async function POST(req: NextRequest) {
  try {
    const { items, currency = 'eur' } = (await req.json()) as {
      items: CartLineItem[]
      currency?: string
    }

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    const origin = req.headers.get('origin') || 'http://localhost:3000'

    // Build Stripe line items from cart data
    const lineItems = items.map((item) => ({
      price_data: {
        currency: currency.toLowerCase(),
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        // Stripe expects amounts in the smallest currency unit (cents)
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      // Free shipping over €75 is handled via shipping_options
      shipping_address_collection: {
        allowed_countries: [
          'ES', 'US', 'GB', 'DE', 'FR', 'IT', 'PT', 'NL', 'BE', 'CH',
          'AT', 'SE', 'NO', 'DK', 'FI', 'PL', 'CZ', 'JP', 'KR', 'AU',
          'CA', 'MX', 'BR', 'AR',
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: currency.toLowerCase() },
            display_name: 'Free International Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 5 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 999, currency: currency.toLowerCase() },
            display_name: 'Standard Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 5 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
      ],
      allow_promotion_codes: true,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout session error:', err)
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
