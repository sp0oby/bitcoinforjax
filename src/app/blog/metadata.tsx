import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bitcoin Blog for Jacksonville Businesses | Bitcoin for Jax',
  description: 'Explore our blog for insights on Bitcoin payments, cryptocurrency adoption, and how Jacksonville businesses can benefit from blockchain technology.',
  openGraph: {
    title: 'Bitcoin Blog for Jacksonville Businesses | Bitcoin for Jax',
    description: 'Explore our blog for insights on Bitcoin payments, cryptocurrency adoption, and how Jacksonville businesses can benefit from blockchain technology.',
    url: 'https://bitcoinforjax.com/blog',
    siteName: 'Bitcoin for Jax',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://bitcoinforjax.com/images/bitcoin-for-jax-og.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin for Jax Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Blog for Jacksonville Businesses | Bitcoin for Jax',
    description: 'Explore our blog for insights on Bitcoin payments, cryptocurrency adoption, and how Jacksonville businesses can benefit from blockchain technology.',
    images: ['https://bitcoinforjax.com/images/bitcoin-for-jax-og.png'],
  },
} 