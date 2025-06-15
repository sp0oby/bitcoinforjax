'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, ArrowLongRightIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import ClientPage from '../components/ClientPage'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function BitcoinTaxGuide() {
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
                Bitcoin Tax Guide for Jacksonville Business Owners
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
                  <span>June 14, 2025</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <span>Cameryn Richardson</span>
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
                      src="/images/bitcoin-tax-guide.png" 
                      alt="Bitcoin Tax Guide" 
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Disclaimer:</strong> This guide provides general information about cryptocurrency taxation for educational purposes only. It is not financial or tax advice. Please consult with a qualified tax professional for guidance specific to your situation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2>Introduction to Cryptocurrency Taxation</h2>
                  <p>
                    For Jacksonville business owners accepting or investing in Bitcoin and other cryptocurrencies, understanding the tax implications is crucial. The IRS treats virtual currencies as property for federal tax purposes, which means specific reporting requirements apply to every transaction.
                  </p>
                  <p>
                    This guide will help you navigate the complexities of cryptocurrency taxation in Florida, focusing on the unique considerations for Jacksonville businesses.
                  </p>

                  <h2>Federal Tax Treatment of Cryptocurrency</h2>
                  <p>
                    Before diving into Florida-specific information, it's important to understand the federal tax framework for cryptocurrencies:
                  </p>
                  <h3>Property, Not Currency</h3>
                  <p>
                    The IRS classifies Bitcoin and other cryptocurrencies as property (similar to stocks or real estate), not as currency. This classification has significant implications:
                  </p>
                  <ul>
                    <li>
                      <strong>Capital Gains/Losses:</strong> When you sell, trade, or otherwise dispose of cryptocurrency, you must recognize capital gains or losses.
                    </li>
                    <li>
                      <strong>Basis Tracking:</strong> You must track the cost basis (the original value) of each unit of cryptocurrency you acquire.
                    </li>
                    <li>
                      <strong>Business Income:</strong> Receiving cryptocurrency as payment for goods or services is treated as receiving the fair market value of the cryptocurrency in USD at the time of receipt.
                    </li>
                  </ul>

                  <h3>Taxable Events for Businesses</h3>
                  <p>
                    For Jacksonville businesses, the following cryptocurrency activities trigger tax events:
                  </p>
                  <ol>
                    <li>
                      <strong>Accepting Bitcoin as Payment:</strong> When you receive Bitcoin for goods or services, you must record the fair market value in USD at the time of receipt as business income.
                    </li>
                    <li>
                      <strong>Converting Cryptocurrency to Fiat:</strong> If you later sell or exchange the received Bitcoin, you may have a capital gain or loss based on any change in value.
                    </li>
                    <li>
                      <strong>Paying for Business Expenses with Bitcoin:</strong> This is treated as selling the Bitcoin first (potentially triggering capital gains) and then paying with USD.
                    </li>
                    <li>
                      <strong>Paying Employees or Contractors in Bitcoin:</strong> This is subject to payroll taxes or 1099 reporting based on the fair market value at time of payment.
                    </li>
                  </ol>

                  <h2>Florida-Specific Cryptocurrency Tax Considerations</h2>
                  <p>
                    Florida offers some advantages for cryptocurrency users compared to other states:
                  </p>
                  <h3>No State Income Tax</h3>
                  <p>
                    One of the biggest tax benefits for Florida businesses and residents is the absence of state income tax. This means:
                  </p>
                  <ul>
                    <li>No additional state-level capital gains taxes on cryptocurrency profits</li>
                    <li>No state-level income tax on cryptocurrency received as business income</li>
                  </ul>
                  <p>
                    This gives Jacksonville businesses a significant advantage over those in states with high income tax rates like California or New York.
                  </p>

                  <h3>Florida Sales Tax Considerations</h3>
                  <p>
                    While Florida doesn't have income tax, sales tax still applies to transactions:
                  </p>
                  <ul>
                    <li>
                      <strong>Collecting Sales Tax:</strong> If your business sells taxable goods or services, you must collect and remit Florida sales tax (currently 6% plus local surtaxes), regardless of whether payment is received in cryptocurrency or fiat currency.
                    </li>
                    <li>
                      <strong>Calculating Sales Tax:</strong> Sales tax is calculated based on the USD value of the transaction at the time it occurs.
                    </li>
                  </ul>
                  <p>
                    For example, if you sell a product for 0.001 BTC when Bitcoin is valued at $50,000 USD, you would collect and remit sales tax on $50 USD (plus any local surtaxes).
                  </p>

                  <h3>Florida's Crypto-Friendly Legislation</h3>
                  <p>
                    Florida has positioned itself as a crypto-friendly state with recent legislation:
                  </p>
                  <ul>
                    <li>
                      <strong>HB 273 (2022):</strong> Defines virtual currency and clarifies its treatment under Florida's money transmitter laws.
                    </li>
                    <li>
                      <strong>SB 486 (2023):</strong> Further refines regulations for money services businesses dealing with cryptocurrency.
                    </li>
                  </ul>
                  <p>
                    These laws provide greater regulatory clarity for Jacksonville businesses operating in the cryptocurrency space.
                  </p>

                  <h2>Record-Keeping Requirements for Bitcoin Transactions</h2>
                  <p>
                    Proper record-keeping is essential for cryptocurrency tax compliance:
                  </p>
                  <h3>Essential Records to Maintain</h3>
                  <ul>
                    <li>
                      <strong>Transaction Records:</strong> Date, amount, and USD value of all cryptocurrency received or spent
                    </li>
                    <li>
                      <strong>Acquisition Information:</strong> How, when, and at what price you acquired each unit of cryptocurrency
                    </li>
                    <li>
                      <strong>Disposition Details:</strong> When and how you disposed of cryptocurrency, and the USD value at that time
                    </li>
                    <li>
                      <strong>Exchange Records:</strong> All statements from cryptocurrency exchanges where you conduct transactions
                    </li>
                    <li>
                      <strong>Wallet Addresses:</strong> Documentation linking your business to specific wallet addresses
                    </li>
                  </ul>

                  <h3>Recommended Record-Keeping Systems</h3>
                  <p>
                    For Jacksonville businesses accepting Bitcoin, we recommend:
                  </p>
                  <ul>
                    <li>
                      <strong>Specialized Cryptocurrency Accounting Software:</strong> Tools like CoinTracker, TaxBit, or Koinly can automatically track transactions and calculate tax liabilities.
                    </li>
                    <li>
                      <strong>Integration with Existing Accounting Systems:</strong> Ensure your cryptocurrency transactions flow into your main accounting system.
                    </li>
                    <li>
                      <strong>Regular Reconciliation:</strong> Reconcile cryptocurrency holdings and transactions at least monthly.
                    </li>
                  </ul>
                  <p>
                    At Bitcoin for Jax, we can help set up these systems as part of our business implementation services.
                  </p>

                  <h2>Tax Reporting Requirements</h2>
                  <p>
                    Businesses dealing with cryptocurrency have specific reporting obligations:
                  </p>
                  <h3>IRS Form 8949 and Schedule D</h3>
                  <p>
                    For reporting capital gains and losses from cryptocurrency:
                  </p>
                  <ul>
                    <li>Use Form 8949 to report each cryptocurrency sale or exchange</li>
                    <li>Transfer totals to Schedule D of your tax return</li>
                    <li>Report short-term gains/losses (held less than a year) separately from long-term</li>
                  </ul>

                  <h3>Schedule C or Business Tax Returns</h3>
                  <p>
                    For reporting cryptocurrency received as business income:
                  </p>
                  <ul>
                    <li>Sole proprietors report on Schedule C of Form 1040</li>
                    <li>Partnerships report on Form 1065</li>
                    <li>S-Corporations report on Form 1120-S</li>
                    <li>C-Corporations report on Form 1120</li>
                  </ul>
                  <p>
                    The fair market value of cryptocurrency received should be reported as gross receipts or sales.
                  </p>

                  <h3>Information Reporting</h3>
                  <p>
                    If your business pays contractors $600 or more in cryptocurrency:
                  </p>
                  <ul>
                    <li>You must issue Form 1099-NEC</li>
                    <li>Report the USD fair market value at the time of payment</li>
                  </ul>
                  <p>
                    For employees paid in cryptocurrency, regular payroll tax reporting applies based on the USD value at the time of payment.
                  </p>

                  <h2>Tax Planning Strategies for Jacksonville Businesses</h2>
                  <p>
                    Consider these strategies to optimize your cryptocurrency tax position:
                  </p>
                  <h3>Immediate Conversion vs. Holding</h3>
                  <p>
                    Deciding whether to immediately convert Bitcoin payments to USD or hold them involves tax considerations:
                  </p>
                  <ul>
                    <li>
                      <strong>Immediate Conversion:</strong> Minimizes exposure to price volatility and simplifies accounting, but may incur exchange fees.
                    </li>
                    <li>
                      <strong>Holding:</strong> Potential for appreciation, but creates additional tax tracking requirements and exposure to market volatility.
                    </li>
                  </ul>
                  <p>
                    Many Jacksonville businesses opt for a hybrid approach, converting a percentage to USD while holding the remainder as an investment.
                  </p>

                  <h3>Tax-Loss Harvesting</h3>
                  <p>
                    Strategic selling of cryptocurrencies that have declined in value can offset capital gains:
                  </p>
                  <ul>
                    <li>Identify holdings with unrealized losses</li>
                    <li>Sell before year-end to realize the loss</li>
                    <li>Use losses to offset capital gains or up to $3,000 of ordinary income</li>
                  </ul>
                  <p>
                    Be aware of wash sale considerations, though currently the IRS has not explicitly extended wash sale rules to cryptocurrencies.
                  </p>

                  <h3>Charitable Giving</h3>
                  <p>
                    Donating appreciated cryptocurrency directly to qualified charities can provide tax benefits:
                  </p>
                  <ul>
                    <li>Deduct the fair market value at the time of donation</li>
                    <li>Avoid capital gains tax on the appreciation</li>
                  </ul>
                  <p>
                    This strategy can be particularly effective for Jacksonville businesses with significant cryptocurrency appreciation.
                  </p>

                  <h2>Working with Tax Professionals</h2>
                  <p>
                    Given the complexity of cryptocurrency taxation, working with knowledgeable professionals is essential:
                  </p>
                  <h3>Finding Crypto-Savvy Tax Professionals</h3>
                  <p>
                    Not all accountants are familiar with cryptocurrency taxation. Look for professionals who:
                  </p>
                  <ul>
                    <li>Have specific experience with cryptocurrency clients</li>
                    <li>Stay current on evolving IRS guidance</li>
                    <li>Understand both the technical and tax aspects of blockchain</li>
                  </ul>
                  <p>
                    At Bitcoin for Jax, we maintain relationships with Jacksonville-area tax professionals experienced in cryptocurrency matters and can provide referrals as needed.
                  </p>

                  <h3>When to Consult a Tax Professional</h3>
                  <p>
                    Consider seeking professional tax advice when:
                  </p>
                  <ul>
                    <li>First implementing cryptocurrency acceptance in your business</li>
                    <li>Conducting large or complex cryptocurrency transactions</li>
                    <li>Receiving an IRS notice related to cryptocurrency</li>
                    <li>Planning year-end tax strategies</li>
                  </ul>

                  <h2>Common Pitfalls and How to Avoid Them</h2>
                  <p>
                    Jacksonville businesses should be aware of these common cryptocurrency tax mistakes:
                  </p>
                  <h3>Inadequate Record-Keeping</h3>
                  <p>
                    Without proper records, calculating tax liability becomes extremely difficult:
                  </p>
                  <ul>
                    <li>
                      <strong>Solution:</strong> Implement cryptocurrency accounting software from day one of accepting Bitcoin payments.
                    </li>
                  </ul>

                  <h3>Overlooking Taxable Events</h3>
                  <p>
                    Many businesses don't realize that certain cryptocurrency activities trigger tax events:
                  </p>
                  <ul>
                    <li>
                      <strong>Solution:</strong> Work with a tax professional to identify all potential taxable events in your business operations.
                    </li>
                  </ul>

                  <h3>Miscalculating Cost Basis</h3>
                  <p>
                    Using incorrect methods to determine the cost basis of cryptocurrency:
                  </p>
                  <ul>
                    <li>
                      <strong>Solution:</strong> Establish and consistently apply a cost basis method (FIFO, LIFO, or specific identification).
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl my-8">
                    <h3 className="text-xl font-bold mb-4">Need Help with Cryptocurrency Tax Compliance?</h3>
                    <p className="mb-4">
                      Our team at Bitcoin for Jax can help you implement proper record-keeping systems and connect you with experienced cryptocurrency tax professionals in the Jacksonville area.
                    </p>
                    <Link href="/contact" className="btn-primary inline-block">
                      Contact Us for Assistance
                    </Link>
                  </div>

                  <h2>Looking Ahead: Evolving Cryptocurrency Tax Landscape</h2>
                  <p>
                    The regulatory environment for cryptocurrency taxation continues to evolve:
                  </p>
                  <ul>
                    <li>
                      <strong>Infrastructure Investment and Jobs Act:</strong> New reporting requirements for cryptocurrency brokers beginning in 2024.
                    </li>
                    <li>
                      <strong>Potential Future Legislation:</strong> Congress continues to consider various cryptocurrency tax proposals.
                    </li>
                    <li>
                      <strong>IRS Guidance:</strong> Expect additional clarification on cryptocurrency tax treatment.
                    </li>
                  </ul>
                  <p>
                    Jacksonville businesses should stay informed about these developments and be prepared to adapt their practices accordingly.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    While cryptocurrency taxation presents challenges, Jacksonville businesses have advantages due to Florida's favorable tax environment. With proper planning, record-keeping, and professional guidance, you can confidently integrate Bitcoin into your business operations while remaining tax-compliant.
                  </p>
                  <p>
                    At Bitcoin for Jax, we're committed to helping local businesses navigate both the technical and regulatory aspects of cryptocurrency adoption. Contact us to learn how we can support your business's journey into the world of Bitcoin.
                  </p>
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
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Introduction to Cryptocurrency Taxation</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Federal Tax Treatment of Cryptocurrency</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Florida-Specific Tax Considerations</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Record-Keeping Requirements</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Tax Reporting Requirements</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Tax Planning Strategies</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Working with Tax Professionals</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Common Pitfalls and How to Avoid Them</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:text-bitcoin-orange">Looking Ahead: Evolving Tax Landscape</a>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Important Notice */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                    className="bg-yellow-50 p-6 rounded-xl mb-8"
                  >
                    <h3 className="text-lg font-bold mb-4">Important Notice</h3>
                    <p className="text-sm mb-4">
                      Tax laws and regulations regarding cryptocurrency are subject to change. This guide was last updated in June 2025. Always consult with a qualified tax professional for the most current advice specific to your situation.
                    </p>
                  </motion.div>

                  {/* Services Callout */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.3 }}
                    className="bg-bitcoin-orange/10 p-6 rounded-xl mb-8"
                  >
                    <h3 className="text-lg font-bold mb-4">Our Bitcoin Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Bitcoin Payment Implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Record-Keeping System Setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Tax Professional Referrals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Compliance Consulting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 mt-0.5" />
                        <span>Staff Training</span>
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
                    transition={{ delay: 0.4 }}
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
                        <Link href="/blog/bitcoin-pos-integration" className="text-sm font-medium hover:text-bitcoin-orange">
                          Integrating Bitcoin with Popular Point-of-Sale Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/florida-crypto" className="text-sm font-medium hover:text-bitcoin-orange">
                          Florida's Crypto-Friendly Laws: What Local Businesses Need to Know
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
                Need Help with Bitcoin Tax Compliance?
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90 mb-8"
              >
                Our team can help you implement proper record-keeping systems and connect you with experienced cryptocurrency tax professionals in the Jacksonville area.
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