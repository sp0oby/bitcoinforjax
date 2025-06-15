'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, UserIcon, ArrowLongRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import ClientPage from '../components/ClientPage'

export default function BitcoinBasics() {
  return (
    <ClientPage>
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-bitcoin-blue to-primary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bitcoin Basics: What Every Jacksonville Business Owner Should Know
              </h1>
              <div className="flex items-center justify-center text-white/90 text-sm md:text-base space-x-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>June 10, 2025</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <span>Jessica Taylor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
                    <Image 
                      src="/images/bitcoin-basics.png" 
                      alt="Bitcoin Basics" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h2>Introduction to Bitcoin</h2>
                  <p>
                    Bitcoin is the world's first decentralized digital currency, created in 2009 by an anonymous person or group using the pseudonym Satoshi Nakamoto. Unlike traditional currencies issued by governments (often called "fiat" currencies), Bitcoin operates on a peer-to-peer network without the need for intermediaries like banks or payment processors.
                  </p>
                  <p>
                    For Jacksonville business owners, Bitcoin represents an opportunity to reduce payment processing costs, eliminate chargebacks, access global markets, and attract a growing demographic of cryptocurrency users. This guide will walk you through the fundamentals of Bitcoin and how your local business can benefit from adopting this innovative technology.
                  </p>

                  <h2>How Bitcoin Works</h2>
                  <p>
                    At its core, Bitcoin is a digital ledger of transactions called a blockchain. Here's a simplified explanation of how it works:
                  </p>
                  <ol>
                    <li>
                      <strong>Transactions:</strong> When someone sends Bitcoin to another person or business, this transaction is broadcast to a network of computers (nodes) around the world.
                    </li>
                    <li>
                      <strong>Verification:</strong> These nodes verify the transaction using complex mathematical problems, ensuring the sender has sufficient funds and hasn't tried to spend the same Bitcoin twice.
                    </li>
                    <li>
                      <strong>Blocks:</strong> Valid transactions are grouped together into "blocks."
                    </li>
                    <li>
                      <strong>Blockchain:</strong> Each new block is cryptographically linked to the previous one, creating a chain of blocks (hence "blockchain").
                    </li>
                    <li>
                      <strong>Security:</strong> Once a transaction is added to the blockchain, it's extremely difficult to alter, making Bitcoin secure against fraud.
                    </li>
                  </ol>

                  <h2>Key Benefits for Jacksonville Businesses</h2>
                  <p>
                    Adopting Bitcoin payments offers several advantages for local Jacksonville businesses:
                  </p>
                  <ul>
                    <li>
                      <strong>Lower Transaction Fees:</strong> Traditional payment processors and credit card companies typically charge 2-3% per transaction. Bitcoin transactions, especially when using the Lightning Network, can cost just pennies.
                    </li>
                    <li>
                      <strong>No Chargebacks:</strong> Bitcoin transactions are irreversible, eliminating the risk of fraudulent chargebacks that cost businesses billions annually.
                    </li>
                    <li>
                      <strong>Fast Settlement:</strong> While traditional bank transfers can take days, Bitcoin transactions are typically confirmed within an hour (or seconds with Lightning Network).
                    </li>
                    <li>
                      <strong>Global Reach:</strong> Accept payments from anywhere in the world without currency conversion fees or international transaction surcharges.
                    </li>
                    <li>
                      <strong>Enhanced Privacy:</strong> Bitcoin provides better privacy for both businesses and customers compared to credit card transactions.
                    </li>
                    <li>
                      <strong>Attract New Customers:</strong> Signal to tech-savvy consumers that your business embraces innovation.
                    </li>
                  </ul>

                  <h2>Bitcoin Wallets: Your Digital Cash Register</h2>
                  <p>
                    To accept Bitcoin, your business needs a Bitcoin wallet—a digital tool that stores your Bitcoin and allows you to send and receive payments. There are several types of wallets:
                  </p>
                  <ul>
                    <li>
                      <strong>Mobile Wallets:</strong> Smartphone apps like BlueWallet or Muun that make it easy to accept payments on the go.
                    </li>
                    <li>
                      <strong>Hardware Wallets:</strong> Physical devices like Ledger or Trezor that offer enhanced security for storing larger amounts.
                    </li>
                    <li>
                      <strong>Full-Node Wallets:</strong> The most secure option, where you run your own Bitcoin node (what we specialize in at Bitcoin for Jax).
                    </li>
                  </ul>
                  <p>
                    For most Jacksonville businesses, we recommend a combination approach: a hardware wallet for long-term storage and a mobile wallet or point-of-sale solution for daily transactions.
                  </p>

                  <h2>The Lightning Network: Fast, Low-Fee Transactions</h2>
                  <p>
                    The Lightning Network is a "layer 2" solution built on top of Bitcoin that enables:
                  </p>
                  <ul>
                    <li>Nearly instant transactions (vs. ~10-60 minutes for regular Bitcoin transactions)</li>
                    <li>Extremely low fees (often less than $0.01)</li>
                    <li>Ability to process microtransactions (payments of just a few cents)</li>
                  </ul>
                  <p>
                    For Jacksonville retail businesses, cafes, and restaurants, Lightning Network integration is a game-changer, making Bitcoin practical for everyday purchases. At Bitcoin for Jax, our Premium service includes Lightning Network node setup and channel management.
                  </p>

                  <h2>Integrating Bitcoin with Your Existing Point-of-Sale</h2>
                  <p>
                    One common concern for Jacksonville business owners is how to integrate Bitcoin with their existing payment systems. The good news is that Bitcoin can work alongside your current point-of-sale system:
                  </p>
                  <ul>
                    <li>
                      <strong>BTCPay Server:</strong> An open-source payment processor that integrates with popular e-commerce platforms like Shopify and WooCommerce.
                    </li>
                    <li>
                      <strong>Square Integration:</strong> Using BTCPay alongside Square, with transactions recorded as cash payments in your Square system.
                    </li>
                    <li>
                      <strong>Toast, Clover & Other POS:</strong> Similar integrations are possible with most major point-of-sale systems.
                    </li>
                  </ul>
                  <p>
                    At Bitcoin for Jax, we handle all the technical details of these integrations, creating a seamless experience for both your staff and customers.
                  </p>

                  <h2>Price Volatility and Risk Management</h2>
                  <p>
                    Bitcoin's price can be volatile, which is a legitimate concern for businesses. Here are strategies to manage this risk:
                  </p>
                  <ul>
                    <li>
                      <strong>Auto-conversion to USD:</strong> Services like BTCPay can automatically convert Bitcoin payments to USD, depositing them in your bank account.
                    </li>
                    <li>
                      <strong>Partial Holdings:</strong> Convert a percentage to USD and keep the rest in Bitcoin as a long-term investment.
                    </li>
                    <li>
                      <strong>Stablecoin Options:</strong> Accept USD-pegged cryptocurrencies like USDC alongside Bitcoin.
                    </li>
                  </ul>
                  <p>
                    We'll help you develop a risk management strategy that matches your business's tolerance for volatility.
                  </p>

                  <h2>Regulatory Considerations in Florida</h2>
                  <p>
                    Florida has emerged as one of the most crypto-friendly states in the U.S. Here are key regulatory aspects Jacksonville businesses should know:
                  </p>
                  <ul>
                    <li>
                      <strong>Money Transmitter Exemption:</strong> Florida law (FS 560.103) exempts non-custodial Bitcoin services from money transmitter licensing requirements.
                    </li>
                    <li>
                      <strong>Tax Reporting:</strong> The IRS considers cryptocurrency property for tax purposes. Keep records of all transactions and their USD value at the time.
                    </li>
                    <li>
                      <strong>Consumer Protection:</strong> Clearly communicate your Bitcoin payment policies to customers, including any terms specific to crypto transactions.
                    </li>
                  </ul>
                  <p>
                    Bitcoin for Jax can provide guidance on compliance with local regulations, though we recommend consulting with a tax professional for your specific situation.
                  </p>

                  <h2>Getting Started with Bitcoin in Jacksonville</h2>
                  <p>
                    Ready to start accepting Bitcoin at your Jacksonville business? Here's a simple roadmap:
                  </p>
                  <ol>
                    <li>Assess your needs and volume of transactions</li>
                    <li>Choose between Basic (on-chain only) or Premium (with Lightning Network) solutions</li>
                    <li>Set up secure Bitcoin storage with appropriate wallets</li>
                    <li>Integrate with your existing point-of-sale system</li>
                    <li>Train your staff on the basics of accepting Bitcoin payments</li>
                    <li>Advertise to customers that you now accept Bitcoin</li>
                  </ol>
                  <p>
                    Bitcoin for Jax specializes in making this process smooth and hassle-free for Jacksonville businesses of all sizes. Our local expertise ensures you get a solution tailored to the specific needs of our community.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    Bitcoin offers Jacksonville businesses a powerful way to reduce costs, increase security, and tap into the growing cryptocurrency market. While the technology may seem complex at first, with the right partner, implementing Bitcoin payments can be straightforward and beneficial.
                  </p>
                  <p>
                    At Bitcoin for Jax, we're committed to helping local businesses navigate the world of cryptocurrency with confidence. Whether you're a small café in Riverside, a retailer in San Marco, or an e-commerce business serving the greater Jacksonville area, we have solutions designed for your needs.
                  </p>
                  <p>
                    Ready to learn more about how Bitcoin can benefit your Jacksonville business? <Link href="/contact" className="text-bitcoin-orange hover:underline">Contact us</Link> today for a free consultation.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Author Box */}
                  <div className="card p-6 mb-8">
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image 
                          src="/images/team-2.png" 
                          alt="Jessica Taylor" 
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">Jessica Taylor</h3>
                        <p className="text-gray-500 text-sm">Point-of-Sale Integration Expert</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Jessica has 10+ years of experience integrating payment systems for retail and restaurant businesses in Jacksonville. She specializes in making complex technologies accessible to non-technical business owners.
                    </p>
                  </div>

                  {/* Table of Contents */}
                  <div className="card p-6 mb-8">
                    <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">Introduction to Bitcoin</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">How Bitcoin Works</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">Key Benefits for Jacksonville Businesses</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">Bitcoin Wallets</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">The Lightning Network</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">Integrating with Point-of-Sale</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">Price Volatility and Risk Management</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">Regulatory Considerations in Florida</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-bitcoin-orange">Getting Started</a>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Box */}
                  <div className="card p-6 bg-gradient-to-br from-bitcoin-orange/10 to-bitcoin-blue/10">
                    <h3 className="font-bold text-lg mb-4">Ready to Accept Bitcoin?</h3>
                    <p className="text-gray-600 mb-6">
                      Bitcoin for Jax makes it easy for Jacksonville businesses to start accepting cryptocurrency payments.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Seamless point-of-sale integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Lightning-fast, low-fee transactions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Local, Jacksonville-based support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Staff training included</span>
                      </li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="btn-primary w-full text-center"
                    >
                      Book a Free Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-6">Related Articles</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <article className="card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/lightning-network.png" 
                    alt="Lightning Network" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">
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
              </article>

              {/* Article 2 */}
              <article className="card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/bitcoin-pos-integration.png" 
                    alt="PoS Integration" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    <Link href="/blog/bitcoin-pos-integration" className="hover:text-bitcoin-orange">
                      Integrating Bitcoin with Popular Point-of-Sale Systems
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    A detailed guide to adding Bitcoin payments to Square, Shopify, Clover, and Toast systems.
                  </p>
                  <Link href="/blog/bitcoin-pos-integration" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>

              {/* Article 3 */}
              <article className="card overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/bitcoin-tax.png" 
                    alt="Bitcoin Tax Guide" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    <Link href="/blog/bitcoin-tax-guide" className="hover:text-bitcoin-orange">
                      Bitcoin Tax Guide for Jacksonville Business Owners
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    Everything you need to know about tax reporting for cryptocurrency transactions in Florida.
                  </p>
                  <Link href="/blog/bitcoin-tax-guide" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-bitcoin-orange to-bitcoin-orange/80">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Want to Learn More?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Book a free consultation with our Jacksonville-based Bitcoin experts
            </p>
            <Link 
              href="/contact"
              className="btn-secondary bg-white text-bitcoin-orange hover:bg-white/90 border-0"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
    </ClientPage>
  )
} 