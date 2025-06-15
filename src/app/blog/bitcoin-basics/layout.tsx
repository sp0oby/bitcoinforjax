import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bitcoin Basics: What Every Jacksonville Business Owner Should Know | Bitcoin for Jax',
  description: 'Learn the fundamentals of Bitcoin and how your Jacksonville business can benefit from accepting cryptocurrency payments.',
  openGraph: {
    title: 'Bitcoin Basics: What Every Jacksonville Business Owner Should Know | Bitcoin for Jax',
    description: 'Learn the fundamentals of Bitcoin and how your Jacksonville business can benefit from accepting cryptocurrency payments.',
    url: 'https://bitcoinforjax.com/blog/bitcoin-basics',
    siteName: 'Bitcoin for Jax',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-06-10T00:00:00.000Z',
    authors: ['Jessica Taylor'],
    images: [
      {
        url: 'https://bitcoinforjax.com/images/bitcoin-basics.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Basics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Basics: What Every Jacksonville Business Owner Should Know',
    description: 'Learn the fundamentals of Bitcoin and how your Jacksonville business can benefit from accepting cryptocurrency payments.',
    images: ['https://bitcoinforjax.com/images/bitcoin-basics.png'],
  },
}

export default function BitcoinBasicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 