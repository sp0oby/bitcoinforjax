'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Blog() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-bitcoin-blue to-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto text-white">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Bitcoin News & Insights
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90"
            >
              Stay updated with the latest developments in Bitcoin and cryptocurrency
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/usa-crypto-hub.png" 
                    alt="USA Becoming a Crypto Hub" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-orange/10 text-bitcoin-orange mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  How the USA is Becoming a Global Crypto Hub
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>June 12, 2025</span>
                  <span className="mx-2">•</span>
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Brandon McCall</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Recent regulatory developments and government initiatives are positioning the United States as a leader in cryptocurrency innovation. From SEC Chairman's supportive stance to state-level legislation, we explore how America is embracing digital assets.
                </p>
                <Link href="/blog/usa-crypto-hub" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80">
                  Read more <ArrowLongRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
            <p className="text-gray-600 text-lg">
              Explore our latest content about Bitcoin, cryptocurrency, and blockchain technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="card overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/images/bitcoin-basics.png" 
                  alt="Bitcoin Basics" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-4">
                  Beginner Guide
                </span>
                <h3 className="text-xl font-bold mb-3">
                  <Link href="/blog/bitcoin-basics" className="hover:text-bitcoin-orange">
                    Bitcoin Basics: What Every Jacksonville Business Owner Should Know
                  </Link>
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>June 10, 2025</span>
                  <span className="mx-2">•</span>
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Jessica Taylor</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  A comprehensive introduction to Bitcoin and how it can benefit your local business. Learn about wallets, transactions, blockchain, and why this technology matters.
                </p>
                <Link href="/blog/bitcoin-basics" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                  Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>

            {/* Article 2 - POS Integration */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="card overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/images/bitcoin-pos-integration.png" 
                  alt="Bitcoin POS Integration" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-orange/10 text-bitcoin-orange mb-4">
                  Business Guide
                </span>
                <h3 className="text-xl font-bold mb-3">
                  <Link href="/blog/bitcoin-pos-integration" className="hover:text-bitcoin-orange">
                    Integrating Bitcoin with Popular Point-of-Sale Systems
                  </Link>
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>June 15, 2025</span>
                  <span className="mx-2">•</span>
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Brandon McCall</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  A detailed guide to adding Bitcoin payments to Square, Shopify, Clover, and Toast systems. Learn integration options, costs, and best practices.
                </p>
                <Link href="/blog/bitcoin-pos-integration" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                  Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>

            {/* Article 3 - Tax Guide */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="card overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/images/bitcoin-tax-guide.png" 
                  alt="Bitcoin Tax Guide" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-blue/10 text-bitcoin-blue mb-4">
                  Tax & Compliance
                </span>
                <h3 className="text-xl font-bold mb-3">
                  <Link href="/blog/bitcoin-tax-guide" className="hover:text-bitcoin-orange">
                    Bitcoin Tax Guide for Jacksonville Business Owners
                  </Link>
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>June 14, 2025</span>
                  <span className="mx-2">•</span>
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Cameryn Richardson</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Everything you need to know about tax reporting for cryptocurrency transactions in Florida. Learn about record-keeping, tax events, and compliance requirements.
                </p>
                <Link href="/blog/bitcoin-tax-guide" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                  Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>

            {/* Article 4 - Lightning Network */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="card overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/images/lightning-network.png" 
                  alt="Lightning Network" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-lightning-purple/10 text-lightning-purple mb-4">
                  Technology
                </span>
                <h3 className="text-xl font-bold mb-3">
                  <Link href="/blog/lightning-network" className="hover:text-bitcoin-orange">
                    Lightning Network: The Future of Fast Bitcoin Payments
                  </Link>
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>June 5, 2025</span>
                  <span className="mx-2">•</span>
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Brandon McCall</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Explore how the Lightning Network is revolutionizing Bitcoin payments with instant, low-fee transactions. Learn how this layer-2 solution works and its benefits for businesses.
                </p>
                <Link href="/blog/lightning-network" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                  Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>

            {/* Article 5 - Florida Crypto */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.5 }}
              className="card overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/images/florida-crypto.png" 
                  alt="Florida Crypto Laws" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-blue/10 text-bitcoin-blue mb-4">
                  Regulation
                </span>
                <h3 className="text-xl font-bold mb-3">
                  <Link href="/blog/florida-crypto" className="hover:text-bitcoin-orange">
                    Florida's Crypto-Friendly Laws: What Local Businesses Need to Know
                  </Link>
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>May 28, 2025</span>
                  <span className="mx-2">•</span>
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Cameryn Richardson</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Florida has become one of the most crypto-friendly states in the US. Learn about recent legislation, tax implications, and what it means for Jacksonville businesses.
                </p>
                <Link href="/blog/florida-crypto" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                  Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Government & Regulation Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Government & Regulation</h2>
            <p className="text-gray-600 text-lg">
              Stay informed about regulatory developments and government initiatives in cryptocurrency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Regulation Article 1 */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-blue/10 text-bitcoin-blue mb-2">
                  Florida
                </span>
                <h3 className="text-lg font-bold mb-2">
                  <a 
                    href="https://www.flsenate.gov/Committees/BillSummaries/2023/html/2947" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-bitcoin-orange"
                  >
                    Florida Senate Bill 486 (2023): Money Services Businesses
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Florida legislation regarding money services businesses, including provisions for cryptocurrency businesses operating in the state.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>May 12, 2023</span>
                </div>
              </div>
            </motion.article>

            {/* Regulation Article 2 */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-blue/10 text-bitcoin-blue mb-2">
                  Federal
                </span>
                <h3 className="text-lg font-bold mb-2">
                  <a 
                    href="https://www.sec.gov/crypto-assets" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-bitcoin-orange"
                  >
                    SEC Crypto Assets and Cyber Enforcement
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Latest SEC information on cryptocurrency, digital assets, and blockchain technology regulation.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Updated regularly</span>
                </div>
              </div>
            </motion.article>

            {/* Regulation Article 3 */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-blue/10 text-bitcoin-blue mb-2">
                  Tax
                </span>
                <h3 className="text-lg font-bold mb-2">
                  <a 
                    href="https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-bitcoin-orange"
                  >
                    IRS Virtual Currency Tax Guidance for Businesses
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Official IRS guidance on tax treatment of cryptocurrency for small businesses and self-employed individuals.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Updated regularly</span>
                </div>
              </div>
            </motion.article>

            {/* Regulation Article 4 */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bitcoin-blue/10 text-bitcoin-blue mb-2">
                  Compliance
                </span>
                <h3 className="text-lg font-bold mb-2">
                  <a 
                    href="https://www.fincen.gov/resources/financial-institutions/money-services-businesses" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-bitcoin-orange"
                  >
                    FinCEN Money Services Business Regulations
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  FinCEN's regulatory guidance for money services businesses, including those dealing with convertible virtual currencies.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Updated regularly</span>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80">
              View all regulation articles <ArrowLongRightIcon className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-gray-600 text-lg mb-8">
                Subscribe to our newsletter for the latest Bitcoin news, insights, and tips for Jacksonville businesses
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 