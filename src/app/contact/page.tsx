'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { FaFacebook } from 'react-icons/fa'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-bitcoin-blue to-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90"
            >
              Get in touch with Bitcoin for Jax for questions, support, or inquiries
            </motion.p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-md mb-12"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-bitcoin-blue/10 flex items-center justify-center mr-4">
                    <EnvelopeIcon className="h-6 w-6 text-bitcoin-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-700">bitcoinforjax@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-bitcoin-blue/10 flex items-center justify-center mr-4">
                    <PhoneIcon className="h-6 w-6 text-bitcoin-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-700">(904) 250-4059</p>
                    <p className="text-gray-500 text-sm">Monday - Friday, 9am - 5pm ET</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-bitcoin-blue/10 flex items-center justify-center mr-4">
                    <MapPinIcon className="h-6 w-6 text-bitcoin-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
                    <p className="text-gray-700">Jacksonville, FL</p>
                    <p className="text-gray-500 text-sm">Serving all of Northeast Florida</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-bitcoin-blue/10 flex items-center justify-center mr-4">
                    <ClockIcon className="h-6 w-6 text-bitcoin-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9am - 5pm ET</p>
                    <p className="text-gray-500 text-sm">Weekend support available for clients</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-xl font-bold mb-4 text-center">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.facebook.com/bitcoinforjax" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 hover:text-bitcoin-orange transition-colors"
                  >
                    <FaFacebook size={24} className="mr-2" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4">Ready for a demonstration?</h3>
                <p className="text-gray-600 mb-6">
                  See Bitcoin payments in action with a personalized demo for your Jacksonville business.
                </p>
                <Link 
                  href="/demo" 
                  className="inline-flex items-center justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-bitcoin-orange hover:bg-bitcoin-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bitcoin-orange"
                >
                  Book a Free Demo
                </Link>
              </div>
            </motion.div>
            
            {/* FAQ Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly can you set up Bitcoin payments for my business?</h3>
                  <p className="text-gray-600">
                    Most basic setups can be completed in 2-3 hours, while full node installations typically take 4-5 hours. We'll have you accepting Bitcoin payments by the end of the day in most cases.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Do I need special hardware to accept Bitcoin?</h3>
                  <p className="text-gray-600">
                    For basic setups, you can use your existing iPad or Android tablet. For full node solutions, we provide all necessary hardware. If you don't have a compatible device, we offer tablets starting at $200.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I handle Bitcoin price volatility?</h3>
                  <p className="text-gray-600">
                    Our solutions include options to automatically convert Bitcoin to USD if desired, or you can hold your Bitcoin as an investment. We'll discuss the best strategy for your business during consultation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What about taxes and accounting?</h3>
                  <p className="text-gray-600">
                    We provide guidance on tax reporting requirements for cryptocurrency transactions in Florida and recommend compatible accounting solutions to track your Bitcoin payments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* SEO-friendly content section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Bitcoin Payment Solutions in Jacksonville</h2>
            
            <p>
              Bitcoin for Jax is Jacksonville's premier provider of Bitcoin and cryptocurrency payment solutions for local businesses. Our team specializes in seamless integration of Bitcoin payments with existing point-of-sale systems, helping Jacksonville merchants reduce fees, eliminate chargebacks, and attract new tech-savvy customers.
            </p>
            
            <p>
              Whether you're a café in Riverside, a retail shop in San Marco, or an e-commerce business based in Jacksonville Beach, our tailored Bitcoin payment solutions can help you stay ahead of the competition and embrace the future of digital transactions.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Local Jacksonville Bitcoin Expertise</h3>
            
            <p>
              As a Jacksonville-based company, we understand the unique needs of local businesses and the growing interest in cryptocurrency throughout Duval County. Our solutions are designed specifically for the Jacksonville market, with local support and training to ensure your team is comfortable with accepting Bitcoin payments.
            </p>
            
            <p>
              From basic setups using LunaNode-hosted BTCPay Server to comprehensive solutions with full Bitcoin nodes and Lightning Network capabilities, we offer scalable options to meet the needs of any Jacksonville business, regardless of size or technical expertise.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Contact Us Today</h3>
            
            <p>
              Have questions about Bitcoin payments for your Jacksonville business? Need support with your existing cryptocurrency payment system? Contact our team today for expert guidance and local support. We're here to help Jacksonville businesses thrive in the digital economy.
            </p>
            
            <p>
              For a personalized demonstration of our Bitcoin payment solutions, visit our <Link href="/demo" className="text-bitcoin-orange hover:text-bitcoin-orange/80">demo booking page</Link> to schedule a free consultation.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 