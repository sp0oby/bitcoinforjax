'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bitcoin for Jax</h3>
            <p className="text-gray-400">
              Bitcoin payment solutions for Jacksonville businesses.
            </p>
            <div className="mt-4 flex">
              <a href="https://www.facebook.com/bitcoinforjax" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mr-4">
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bitcoin for Jax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 