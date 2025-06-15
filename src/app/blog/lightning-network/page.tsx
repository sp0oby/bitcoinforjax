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

export default function LightningNetwork() {
  return (
    <ClientPage>
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-lightning-purple to-primary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto text-white">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Lightning Network: The Future of Fast Bitcoin Payments
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
                  <span>June 5, 2025</span>
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
                      src="/images/lightning-network.png" 
                      alt="Lightning Network" 
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h2>Introduction: The Need for Lightning</h2>
                  <p>
                    Bitcoin's revolutionary design as a decentralized, trustless payment system has changed the financial landscape forever. However, as Bitcoin adoption grew, limitations in its base layer became apparent: transactions could be slow (taking 10-60 minutes for confirmation) and fees could rise during periods of network congestion.
                  </p>
                  <p>
                    For Jacksonville businesses looking to accept Bitcoin for everyday purchases—like coffee at a Riverside café or retail items at a San Marco boutique—these limitations presented real challenges. This is where the Lightning Network comes in, offering a solution that makes Bitcoin practical for daily commerce.
                  </p>

                  <h2>What is the Lightning Network?</h2>
                  <p>
                    The Lightning Network is a "layer 2" payment protocol that operates on top of the Bitcoin blockchain. Think of it as an express lane built above the main Bitcoin highway, allowing for:
                  </p>
                  <ul>
                    <li>
                      <strong>Near-instant transactions</strong> (milliseconds instead of minutes or hours)
                    </li>
                    <li>
                      <strong>Extremely low fees</strong> (often less than a penny)
                    </li>
                    <li>
                      <strong>Scalability</strong> to millions of transactions per second (compared to Bitcoin's ~7 transactions per second)
                    </li>
                    <li>
                      <strong>Microtransactions</strong> that would be impractical on the main Bitcoin blockchain
                    </li>
                  </ul>
                  <p>
                    For Jacksonville businesses, this means you can accept Bitcoin payments as quickly and cheaply as cash, while still benefiting from Bitcoin's security and digital nature.
                  </p>

                  <h2>How the Lightning Network Works</h2>
                  <p>
                    While the technical details can be complex, the basic concept is straightforward:
                  </p>
                  <ol>
                    <li>
                      <strong>Payment Channels:</strong> Two parties (like a business and a customer, or a business and a payment processor) create a secure payment channel by committing funds to a special Bitcoin transaction.
                    </li>
                    <li>
                      <strong>Off-chain Transactions:</strong> Once a channel is established, the parties can conduct unlimited transactions between themselves without broadcasting to the main Bitcoin blockchain.
                    </li>
                    <li>
                      <strong>Network of Channels:</strong> Users don't need direct channels with everyone. Payments can be routed through multiple channels, creating a network effect.
                    </li>
                    <li>
                      <strong>Settlement:</strong> When parties decide to close their channel, the final balance is broadcast to the Bitcoin blockchain, ensuring all funds are secure.
                    </li>
                  </ol>
                  <p>
                    This approach combines the security of Bitcoin's blockchain with the speed and efficiency needed for everyday commerce.
                  </p>

                  <h2>Benefits for Jacksonville Businesses</h2>
                  <p>
                    Implementing Lightning Network payments offers several advantages for local businesses:
                  </p>
                  <h3>1. Speed and Convenience</h3>
                  <p>
                    Lightning transactions are confirmed almost instantly, making them practical for point-of-sale environments where customers and staff can't wait minutes for confirmations. This creates an experience similar to traditional payment methods but with the benefits of Bitcoin.
                  </p>

                  <h3>2. Minimal Transaction Fees</h3>
                  <p>
                    While credit card processors typically charge 2-3% per transaction, Lightning Network fees are often less than a cent. For a Jacksonville business processing $10,000 monthly in payments, this could mean savings of $200-300 every month.
                  </p>

                  <h3>3. Microtransactions</h3>
                  <p>
                    The ability to process tiny payments economically opens new business models. A Jacksonville coffee shop could, for example, charge per minute for workspace usage, or a digital content provider could charge per article or video.
                  </p>

                  <h3>4. Enhanced Privacy</h3>
                  <p>
                    Lightning transactions aren't all recorded on the public blockchain, offering improved privacy for both businesses and customers compared to on-chain Bitcoin transactions or credit card payments.
                  </p>

                  <h3>5. Global Reach</h3>
                  <p>
                    Accept payments from international customers without currency conversion fees or cross-border surcharges—particularly valuable for Jacksonville's tourism and e-commerce sectors.
                  </p>

                  <h2>Lightning Network Implementation for Jacksonville Businesses</h2>
                  <p>
                    At Bitcoin for Jax, our Premium Plan includes complete Lightning Network setup and management. Here's what that involves:
                  </p>

                  <h3>Lightning Node Setup</h3>
                  <p>
                    We deploy a Lightning Network node (using LND software) on an Umbrel device installed at your business. This node:
                  </p>
                  <ul>
                    <li>Connects to your full Bitcoin node (also included in our Premium Plan)</li>
                    <li>Manages your payment channels automatically</li>
                    <li>Provides a dashboard for monitoring transactions and channel health</li>
                  </ul>

                  <h3>Channel Funding and Management</h3>
                  <p>
                    Our Premium Plan includes:
                  </p>
                  <ul>
                    <li>
                      <strong>Initial channel funding of 0.01 BTC</strong> (approximately $1,080 at current prices)
                    </li>
                    <li>Regular channel balancing to ensure optimal payment flow</li>
                    <li>Monitoring for channel closures or issues</li>
                    <li>Guidance on when and how to open additional channels</li>
                  </ul>

                  <h3>Point-of-Sale Integration</h3>
                  <p>
                    We integrate Lightning payments with your existing business systems:
                  </p>
                  <ul>
                    <li>
                      <strong>BTCPay Server:</strong> Our primary solution, which supports both on-chain and Lightning payments through a unified interface
                    </li>
                    <li>
                      <strong>Mobile App:</strong> A tablet-based point-of-sale app that generates QR codes for customers to scan
                    </li>
                    <li>
                      <strong>API Integration:</strong> For businesses with custom needs, we can develop integrations with your existing systems
                    </li>
                  </ul>

                  <h2>Real-World Applications in Jacksonville</h2>
                  <p>
                    Lightning Network adoption is already happening across various business types in Jacksonville:
                  </p>

                  <h3>Retail and Hospitality</h3>
                  <p>
                    Several Jacksonville cafés and restaurants have implemented Lightning payments, allowing customers to pay for meals and drinks in seconds with minimal fees. This is particularly appealing to tech-savvy customers and cryptocurrency enthusiasts.
                  </p>

                  <h3>Professional Services</h3>
                  <p>
                    Law firms, consultants, and other service providers in Jacksonville are using Lightning for client billing, appreciating the rapid settlement and reduced processing costs compared to credit cards or bank transfers.
                  </p>

                  <h3>E-commerce</h3>
                  <p>
                    Local online retailers have integrated Lightning payments through plugins for platforms like Shopify and WooCommerce, expanding their payment options without the chargeback risks associated with credit cards.
                  </p>

                  <h2>Challenges and Considerations</h2>
                  <p>
                    While Lightning offers tremendous benefits, businesses should be aware of certain considerations:
                  </p>

                  <h3>Liquidity Management</h3>
                  <p>
                    Payment channels require Bitcoin to be locked up as liquidity. Our Premium Plan includes initial funding, but growing businesses may need to allocate additional funds to channels over time.
                  </p>

                  <h3>Technical Complexity</h3>
                  <p>
                    The Lightning Network is more complex than simple on-chain Bitcoin transactions. This is why our service includes complete setup, training, and ongoing support—making the technology accessible even to non-technical business owners.
                  </p>

                  <h3>Adoption Curve</h3>
                  <p>
                    While Lightning adoption is growing rapidly, it's still in the early adoption phase. Businesses implementing it now are positioning themselves ahead of the curve.
                  </p>

                  <h2>The Future of Lightning in Jacksonville</h2>
                  <p>
                    As Florida continues to establish itself as a cryptocurrency hub, Jacksonville is well-positioned to become a leader in Lightning Network adoption. The combination of the city's growing tech scene, business-friendly environment, and our local support services creates perfect conditions for Lightning to thrive.
                  </p>
                  <p>
                    We anticipate that within the next few years, Lightning payments will become a common sight across Jacksonville businesses, from the beaches to downtown, offering customers a faster, cheaper, and more private payment option.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    The Lightning Network represents the next evolution of Bitcoin payments, making cryptocurrency practical for everyday transactions through instant, low-cost processing. For Jacksonville businesses, implementing Lightning now offers both immediate benefits in terms of reduced fees and enhanced customer options, plus strategic positioning in the rapidly evolving digital economy.
                  </p>
                  <p>
                    At Bitcoin for Jax, our Premium Plan provides everything local businesses need to start accepting Lightning payments, from hardware setup to channel funding and ongoing support. We handle the technical complexity so you can focus on what you do best—running your business.
                  </p>
                  <p>
                    Ready to bring Lightning-fast Bitcoin payments to your Jacksonville business? <Link href="/contact" className="text-lightning-purple hover:underline">Contact us</Link> today for a free consultation.
                  </p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Author Box */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="card p-6 mb-8"
                  >
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image 
                          src="/images/team-1.png" 
                          alt="Brandon McCall" 
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">Brandon McCall</h3>
                        <p className="text-gray-500 text-sm">Founder & Bitcoin Specialist</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Brandon has been involved in the Bitcoin space since 2013 and has specialized in Lightning Network implementations since 2018. He's passionate about helping Jacksonville businesses leverage the latest in Bitcoin technology.
                    </p>
                  </motion.div>

                  {/* Table of Contents */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.1 }}
                    className="card p-6 mb-8"
                  >
                    <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <a href="#" className="hover:text-lightning-purple">Introduction: The Need for Lightning</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-lightning-purple">What is the Lightning Network?</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-lightning-purple">How the Lightning Network Works</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-lightning-purple">Benefits for Jacksonville Businesses</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-lightning-purple">Lightning Network Implementation</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-lightning-purple">Real-World Applications</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-lightning-purple">Challenges and Considerations</a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-lightning-purple">The Future of Lightning in Jacksonville</a>
                      </li>
                    </ul>
                  </motion.div>

                  {/* CTA Box */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                    className="card p-6 bg-gradient-to-br from-lightning-purple/10 to-bitcoin-blue/10"
                  >
                    <h3 className="font-bold text-lg mb-4">Ready for Lightning-Fast Payments?</h3>
                    <p className="text-gray-600 mb-6">
                      Our Premium Plan includes everything your Jacksonville business needs to start accepting Lightning payments.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-lightning-purple mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Full Bitcoin & Lightning node setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-lightning-purple mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">0.01 BTC dedicated channel funding</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-lightning-purple mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Point-of-sale integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-lightning-purple mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Staff training & ongoing support</span>
                      </li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="bg-lightning-purple hover:bg-lightning-purple/90 text-white font-bold py-3 px-6 rounded-lg transition w-full block text-center"
                    >
                      Book a Free Demo
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/bitcoin-basics.png" 
                    alt="Bitcoin Basics" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    <Link href="/blog/bitcoin-basics" className="hover:text-lightning-purple">
                      Bitcoin Basics: What Every Jacksonville Business Owner Should Know
                    </Link>
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>June 10, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    A comprehensive introduction to Bitcoin and how it can benefit your local business. Learn about wallets, transactions, blockchain, and why this technology matters.
                  </p>
                  <Link href="/blog/bitcoin-basics" className="inline-flex items-center text-lightning-purple font-medium hover:text-lightning-purple/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              {/* Article 2 */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/usa-crypto-hub.png" 
                    alt="USA Crypto Hub" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    <Link href="/blog/usa-crypto-hub" className="hover:text-lightning-purple">
                      How the USA is Becoming a Global Crypto Hub
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    Explore how the United States is emerging as a leader in cryptocurrency adoption and regulation, with special focus on Florida's crypto-friendly environment.
                  </p>
                  <Link href="/blog/usa-crypto-hub" className="inline-flex items-center text-lightning-purple font-medium hover:text-lightning-purple/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              {/* Article 3 */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src="/images/florida-crypto.png" 
                    alt="Florida Crypto Laws" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    <Link href="/blog/florida-crypto" className="hover:text-lightning-purple">
                      Florida's Crypto-Friendly Laws: What Local Businesses Need to Know
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    Everything you need to know about Florida's cryptocurrency regulations and how they benefit Jacksonville businesses.
                  </p>
                  <Link href="/blog/florida-crypto" className="inline-flex items-center text-lightning-purple font-medium hover:text-lightning-purple/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-lightning-purple to-bitcoin-blue">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Upgrade to Lightning-Fast Payments</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Our Premium Plan includes everything your Jacksonville business needs to start accepting Lightning Network payments
              </p>
              <Link 
                href="/services"
                className="btn-secondary bg-white text-lightning-purple hover:bg-white/90 border-0"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </ClientPage>
  )
} 