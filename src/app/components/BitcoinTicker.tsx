'use client'

import React, { useState, useEffect } from 'react'

export default function BitcoinTicker() {
  const [price, setPrice] = useState<number | null>(null)
  const [priceChange, setPriceChange] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // Use CoinGecko API to get real Bitcoin price data
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true')
        const data = await response.json()
        
        if (data && data.bitcoin) {
          setPrice(data.bitcoin.usd)
          setPriceChange(data.bitcoin.usd_24h_change)
        }
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error)
        // Fallback to sample data if API fails
        setPrice(50000)
        setPriceChange(2.5)
        setLoading(false)
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  // Format BTC price for common amounts
  const getBTCEquivalent = (usdAmount: number) => {
    if (!price) return '0';
    return (usdAmount / price).toFixed(8);
  }

  if (loading) {
    return (
      <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold">${price?.toLocaleString()}</div>
        <div className={`text-sm ${priceChange && priceChange >= 0 ? 'text-green-300' : 'text-red-300'}`}>
          {priceChange && priceChange >= 0 ? '+' : ''}{priceChange?.toFixed(2)}%
        </div>
      </div>
      <div className="text-xs text-white/70 text-center mt-1 mb-2">Bitcoin Price (24h)</div>
      
      {/* USD to BTC conversion examples */}
      <div className="border-t border-white/20 pt-2 mt-2">
        <p className="text-xs text-center font-medium mb-1">USD to BTC Reference:</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-center">$100 = {getBTCEquivalent(100)} BTC</div>
          <div className="text-center">$1,000 = {getBTCEquivalent(1000)} BTC</div>
        </div>
      </div>
    </div>
  )
} 