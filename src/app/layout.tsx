import React from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/src/app/components/Navigation'
import Footer from '@/src/app/components/Footer'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Bitcoin for Jax – Bitcoin Payment Solutions Jacksonville, Florida',
  description: 'Accept Bitcoin in Jacksonville, Florida with Bitcoin for Jax\'s easy PoS integration. Save on fees, get Lightning-fast payments, and grow your Jacksonville business.',
  keywords: 'Bitcoin payments Jacksonville, Bitcoin Jacksonville Florida, crypto payments Florida, Lightning Network Jacksonville, Bitcoin POS Jacksonville FL, Bitcoin payments Jax',
  metadataBase: new URL('https://bitcoinforjax.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logos/bitcoin-core-logo.png', type: 'image/png', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  openGraph: {
    title: 'Bitcoin for Jax – Bitcoin Payment Solutions Jacksonville, Florida',
    description: 'Accept Bitcoin in Jacksonville, Florida with easy PoS integration. Save on fees, get Lightning-fast payments, and grow your business.',
    url: 'https://bitcoinforjax.com',
    siteName: 'Bitcoin for Jax',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/bitcoin-for-jax-og.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin for Jax',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin for Jax – Bitcoin Payment Solutions Jacksonville, Florida',
    description: 'Accept Bitcoin in Jacksonville, Florida with easy PoS integration. Save on fees, get Lightning-fast payments, and grow your business.',
    images: ['/images/bitcoin-for-jax-og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logos/bitcoin-core-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Bitcoin for Jax',
              'description': 'Bitcoin payment solutions for Jacksonville, Florida businesses',
              'url': 'https://bitcoinforjax.com',
              'telephone': '(904) 250-4059',
              'logo': 'https://bitcoinforjax.com/images/logo.png',
              'image': 'https://bitcoinforjax.com/images/bitcoin-for-jax-og.png',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Jacksonville',
                'addressRegion': 'FL',
                'addressCountry': 'US'
              },
              'sameAs': [
                'https://www.facebook.com/bitcoinforjax'
              ]
            })
          }}
        />
      </head>
      <body className={`${jetbrainsMono.className} bg-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
