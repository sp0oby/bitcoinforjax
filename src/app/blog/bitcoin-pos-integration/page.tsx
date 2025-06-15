'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, ArrowLongRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import ClientPage from '../components/ClientPage'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function BitcoinPOSIntegration() {
  return (
    <ClientPage>
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-bitcoin-blue to-primary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto text-white">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Integrating Bitcoin with Popular Point-of-Sale Systems
              </motion.h1>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center text-white/90 text-sm md:text-base space-x-4"
              >
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>June 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <span>Brandon McCall</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="prose prose-lg max-w-none"
                >
                  <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
                    <Image 
                      src="/images/bitcoin-pos-integration.png" 
                      alt="Bitcoin POS Integration" 
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h2>Why Integrate Bitcoin with Your POS System?</h2>
                  <p>
                    For Jacksonville business owners, accepting Bitcoin payments offers numerous advantages: lower transaction fees, elimination of chargebacks, faster settlement, and access to a growing customer base of cryptocurrency enthusiasts. However, one common concern is how to seamlessly integrate Bitcoin with existing point-of-sale (POS) systems.
                  </p>
                  <p>
                    The good news is that adding Bitcoin payment capabilities doesn't mean replacing your current POS setup. This guide will walk you through practical integration options for the most popular POS systems used by Jacksonville businesses.
                  </p>

                  <h2>Integration Options Overview</h2>
                  <p>
                    There are several approaches to integrating Bitcoin payments with your existing POS system:
                  </p>
                  <ol>
                    <li>
                      <strong>Direct Integration:</strong> Some POS systems now offer built-in cryptocurrency payment options.
                    </li>
                    <li>
                      <strong>Third-party Payment Processors:</strong> Services that handle the Bitcoin payment and convert to USD if desired.
                    </li>
                    <li>
                      <strong>Self-hosted Solutions:</strong> Running your own payment processor for maximum control and minimum fees.
                    </li>
                    <li>
                      <strong>Parallel Systems:</strong> Operating a Bitcoin payment system alongside your traditional POS.
                    </li>
                  </ol>
                  <p>
                    Let's explore how these options work with specific POS systems popular among Jacksonville businesses.
                  </p>

                  <h2>Square Integration</h2>
                  <p>
                    Square is widely used by small to medium-sized businesses in Jacksonville. Here are your options for accepting Bitcoin with Square:
                  </p>
                  <h3>Option 1: Cash App Pay</h3>
                  <p>
                    Square's parent company Block (formerly Square Inc.) owns Cash App, which supports Bitcoin transactions:
                  </p>
                  <ul>
                    <li>Enable Cash App Pay in your Square Dashboard</li>
                    <li>Customers can pay using their Cash App Bitcoin balance</li>
                    <li>Funds are automatically converted to USD and deposited to your account</li>
                    <li>Standard Cash App Pay processing fee of 2.5%</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> Simple integration, automatic conversion to USD<br />
                    <strong>Cons:</strong> Limited to Cash App users, higher fees than other Bitcoin payment methods
                  </p>

                  <h3>Option 2: BTCPay Server with Square</h3>
                  <p>
                    For more control and lower fees, you can use BTCPay Server alongside Square:
                  </p>
                  <ul>
                    <li>Set up BTCPay Server (we can handle this for you at Bitcoin for Jax)</li>
                    <li>Generate QR codes for Bitcoin payments</li>
                    <li>Record Bitcoin sales in Square as cash payments for inventory tracking</li>
                    <li>Use BTCPay's auto-conversion feature to convert Bitcoin to USD if desired</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> Lower fees (typically under 1%), full control, no third-party dependency<br />
                    <strong>Cons:</strong> Requires separate system management, manual reconciliation with Square
                  </p>

                  <h2>Shopify Integration</h2>
                  <p>
                    For Jacksonville businesses using Shopify for e-commerce, Bitcoin integration is straightforward:
                  </p>
                  <h3>Option 1: Native Shopify Payments</h3>
                  <p>
                    Shopify has recently added cryptocurrency payment options through Coinbase Commerce:
                  </p>
                  <ul>
                    <li>Enable Coinbase Commerce in your Shopify payment settings</li>
                    <li>Accept Bitcoin, Ethereum, and other cryptocurrencies</li>
                    <li>Option to automatically convert to USD</li>
                    <li>1% processing fee</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> Easy setup, integrated with Shopify dashboard<br />
                    <strong>Cons:</strong> Reliance on Coinbase, limited customization
                  </p>

                  <h3>Option 2: BTCPay Server for Shopify</h3>
                  <p>
                    For a self-hosted solution with Shopify:
                  </p>
                  <ul>
                    <li>Install the BTCPay Server plugin for Shopify</li>
                    <li>Connect your BTCPay Server instance</li>
                    <li>Customize payment options (Bitcoin, Lightning Network)</li>
                    <li>Zero processing fees (only standard Bitcoin network fees apply)</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> Lowest fees, complete control, self-sovereignty<br />
                    <strong>Cons:</strong> Requires technical setup and maintenance (which we can handle for you)
                  </p>

                  <h2>Clover Integration</h2>
                  <p>
                    Clover POS systems are popular among Jacksonville restaurants and retail stores:
                  </p>
                  <h3>Option 1: Clover App Market Solutions</h3>
                  <p>
                    Several Bitcoin payment apps are available in the Clover App Market:
                  </p>
                  <ul>
                    <li>CryptoPay: Accepts multiple cryptocurrencies including Bitcoin</li>
                    <li>BitPay: Well-established Bitcoin payment processor</li>
                    <li>Both offer auto-conversion to USD with 1% processing fees</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> Integrated with Clover interface, easy for staff to use<br />
                    <strong>Cons:</strong> Reliance on third-party services, less control over funds
                  </p>

                  <h3>Option 2: Parallel System with QR Codes</h3>
                  <p>
                    For a more independent solution:
                  </p>
                  <ul>
                    <li>Set up a Bitcoin wallet or BTCPay Server</li>
                    <li>Generate payment QR codes</li>
                    <li>Record Bitcoin sales in Clover manually as cash transactions</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> Lower fees, more control<br />
                    <strong>Cons:</strong> Separate system to manage, requires staff training
                  </p>

                  <h2>Toast POS Integration</h2>
                  <p>
                    Toast is especially popular among Jacksonville restaurants:
                  </p>
                  <h3>Option 1: Toast API Integration</h3>
                  <p>
                    For businesses using Toast's more advanced plans:
                  </p>
                  <ul>
                    <li>Use Toast's API to integrate with Bitcoin payment processors</li>
                    <li>Custom solutions can be developed (we offer this service at Bitcoin for Jax)</li>
                    <li>Allows for seamless recording of Bitcoin transactions in Toast</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> Tight integration with Toast, professional solution<br />
                    <strong>Cons:</strong> Development costs, requires Toast API access
                  </p>

                  <h3>Option 2: Manual Integration</h3>
                  <p>
                    A simpler approach for Toast users:
                  </p>
                  <ul>
                    <li>Set up a Bitcoin wallet or payment processor</li>
                    <li>Create a "Bitcoin Payment" tender type in Toast</li>
                    <li>Staff selects this tender type and processes Bitcoin payment separately</li>
                  </ul>
                  <p>
                    <strong>Pros:</strong> No development needed, works with all Toast plans<br />
                    <strong>Cons:</strong> Manual process, potential for human error
                  </p>

                  <h2>Lightning Network Integration for Fast Payments</h2>
                  <p>
                    For all POS systems, the Lightning Network offers a game-changing improvement for Bitcoin payments:
                  </p>
                  <ul>
                    <li>Near-instant transaction confirmation (vs. 10+ minutes for regular Bitcoin transactions)</li>
                    <li>Extremely low fees (often less than $0.01)</li>
                    <li>Ability to process microtransactions</li>
                  </ul>
                  <p>
                    At Bitcoin for Jax, we specialize in setting up Lightning Network payment channels for Jacksonville businesses, making Bitcoin practical for even small, everyday purchases.
                  </p>

                  <h2>Managing Price Volatility</h2>
                  <p>
                    A common concern for businesses accepting Bitcoin is price volatility. Here are strategies to address this:
                  </p>
                  <ul>
                    <li>
                      <strong>Instant Conversion:</strong> Most payment processors offer immediate conversion to USD at the time of transaction.
                    </li>
                    <li>
                      <strong>Partial Holdings:</strong> Convert a percentage to USD and keep some Bitcoin as an investment.
                    </li>
                    <li>
                      <strong>Dynamic Pricing:</strong> Use real-time exchange rates to adjust Bitcoin prices (BTCPay Server offers this feature).
                    </li>
                  </ul>
                  <p>
                    We can help you develop a risk management strategy that matches your business's tolerance for volatility.
                  </p>

                  <h2>Staff Training Considerations</h2>
                  <p>
                    Successfully integrating Bitcoin payments also requires proper staff training:
                  </p>
                  <ul>
                    <li>Basic understanding of Bitcoin and how transactions work</li>
                    <li>Step-by-step procedures for processing Bitcoin payments</li>
                    <li>Troubleshooting common issues</li>
                    <li>Answering customer questions about Bitcoin payments</li>
                  </ul>
                  <p>
                    At Bitcoin for Jax, we provide comprehensive staff training as part of our implementation services.
                  </p>

                  <h2>Getting Started: Next Steps</h2>
                  <p>
                    Ready to integrate Bitcoin payments with your POS system? Here's how to proceed:
                  </p>
                  <ol>
                    <li>Evaluate your current POS system and identify the best integration approach</li>
                    <li>Consider your business needs: transaction volume, conversion preferences, technical capabilities</li>
                    <li>Develop an implementation plan, including staff training</li>
                    <li>Set up and test the Bitcoin payment system before full deployment</li>
                  </ol>
                  <p>
                    At Bitcoin for Jax, we specialize in helping Jacksonville businesses implement Bitcoin payment solutions. Our team can handle the technical aspects of integration, provide staff training, and offer ongoing support.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl my-8">
                    <h3 className="text-xl font-bold mb-4">Ready to Accept Bitcoin at Your Business?</h3>
                    <p className="mb-4">
                      Our team at Bitcoin for Jax can help you integrate Bitcoin payments with your existing POS system, whether you're using Square, Shopify, Clover, Toast, or any other platform.
                    </p>
                    <Link href="/contact" className="btn-primary inline-block">
                      Contact Us for a Consultation
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Table of Contents */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-gray-50 p-6 rounded-xl mb-8"
                  >
                    <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Why Integrate Bitcoin with Your POS System?</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Integration Options Overview</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Square Integration</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Shopify Integration</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Clover Integration</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Toast POS Integration</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Lightning Network Integration</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Managing Price Volatility</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Staff Training Considerations</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Getting Started: Next Steps</a>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Services Callout */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                    className="bg-bitcoin-orange/10 p-6 rounded-xl mb-8"
                  >
                    <h3 className="text-lg font-bold mb-4">Our Bitcoin Integration Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>POS System Integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Lightning Network Setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Staff Training</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Ongoing Technical Support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Custom Solutions Development</span>
                      </li>
                    </ul>
                    <Link href="/services" className="btn-secondary w-full text-center mt-4">
                      View All Services
                    </Link>
                  </motion.div>

                  {/* Related Articles */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.3 }}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/blog/bitcoin-basics" className="text-sm font-medium hover:text-bitcoin-orange">
                          Bitcoin Basics: What Every Jacksonville Business Owner Should Know
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/lightning-network" className="text-sm font-medium hover:text-bitcoin-orange">
                          Lightning Network: The Future of Fast Bitcoin Payments
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/bitcoin-tax-guide" className="text-sm font-medium hover:text-bitcoin-orange">
                          Bitcoin Tax Guide for Jacksonville Business Owners
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-bitcoin-blue to-primary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto text-white">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-3xl font-bold mb-6"
              >
                Ready to Start Accepting Bitcoin at Your Business?
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90 mb-8"
              >
                Our team can help you integrate Bitcoin payments with your existing POS system, providing a seamless experience for both your staff and customers.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <Link href="/contact" className="btn-white">
                  Schedule a Free Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </ClientPage>
  )
} 