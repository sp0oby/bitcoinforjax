'use client'

import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

interface ContactFormProps {
  buttonColor?: string;
}

const posOptions = [
  { value: 'square', label: 'Square' },
  { value: 'shopify', label: 'Shopify' },
  { value: 'clover', label: 'Clover' },
  { value: 'toast', label: 'Toast' },
  { value: 'btcpay', label: 'iPad/Android with BTCPay PoS app' },
  { value: 'need-tablet', label: 'Need Tablet ($200-500)' },
  { value: 'other', label: 'Other' },
]

const paymentOptions = [
  { value: 'onchain', label: 'On-chain Bitcoin Payments' },
  { value: 'lightning', label: 'Lightning Network Payments' },
  { value: 'both', label: 'Both On-chain and Lightning' },
]

export default function ContactForm({ buttonColor = 'bitcoin-orange' }: ContactFormProps) {
  const [state, handleSubmit] = useForm("xdkzgqgw") // Formspree form ID

  if (state.succeeded) {
    return (
      <div className="text-center py-16 px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thanks for reaching out!</h3>
        <p className="text-gray-600">We'll get back to you within 24 hours to schedule your demo.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-gray-700">
          Business Name
        </label>
        <input
          type="text"
          name="business"
          id="business"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bitcoin-orange focus:ring-bitcoin-orange"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bitcoin-orange focus:ring-bitcoin-orange"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="pos" className="block text-sm font-medium text-gray-700">
          Current Point of Sale System
        </label>
        <select
          name="pos"
          id="pos"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bitcoin-orange focus:ring-bitcoin-orange"
        >
          <option value="">Select your PoS system</option>
          {posOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
          Preferred Payment Method
        </label>
        <select
          name="payment"
          id="payment"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bitcoin-orange focus:ring-bitcoin-orange"
        >
          <option value="">Select payment method</option>
          {paymentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Additional Information
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bitcoin-orange focus:ring-bitcoin-orange"
          placeholder="Tell us about your business and what you're looking to achieve with Bitcoin payments..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-${buttonColor} hover:bg-${buttonColor}/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${buttonColor} disabled:opacity-50`}
        >
          {state.submitting ? 'Sending...' : 'Schedule Demo'}
        </button>
      </div>
    </form>
  )
} 