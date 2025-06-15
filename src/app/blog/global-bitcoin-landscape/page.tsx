'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, ArrowLongRightIcon, ArrowLeftIcon, ShareIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import ClientPage from '../components/ClientPage'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function GlobalBitcoinLandscape() {
  return (
    <ClientPage>
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
                The Global Bitcoin Landscape: How the US Compares to Other Nations
              </motion.h1>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center text-sm text-white/90 mb-6"
              >
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>June 13, 2025</span>
                <span className="mx-2">•</span>
                <UserIcon className="h-4 w-4 mr-1" />
                <span>Cameryn Richardson</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
                    <Image 
                      src="/images/global-bitcoin-landscape.png" 
                      alt="Global Bitcoin Landscape" 
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h2>A World of Bitcoin: Comparing Global Approaches</h2>
                    <p>
                      Bitcoin's borderless nature means its adoption, regulation, and integration into financial systems varies dramatically across the globe. For Jacksonville businesses considering Bitcoin adoption, understanding this global landscape provides valuable context and insights.
                    </p>
                    
                    <p>
                      In this comprehensive overview, we'll explore how different regions approach Bitcoin and how the United States—and specifically Florida—compares to the rest of the world.
                    </p>

                    <h3>The Americas: A Continent of Contrasts</h3>
                    
                    <h4>United States: The Emerging Leader</h4>
                    <p>
                      The United States has evolved from a position of regulatory uncertainty to becoming one of the world's most important Bitcoin markets. Key developments include:
                    </p>
                    <ul>
                      <li><strong>ETF Approvals:</strong> The SEC's approval of spot Bitcoin ETFs in early 2024 marked a watershed moment for institutional adoption.</li>
                      <li><strong>State-Level Innovation:</strong> States like Florida, Texas, and Wyoming have implemented crypto-friendly legislation, creating regional hubs for Bitcoin businesses.</li>
                      <li><strong>Banking Integration:</strong> Several U.S. banks now offer Bitcoin custody and trading services to clients.</li>
                      <li><strong>Mining Resurgence:</strong> Following China's mining ban, the U.S. has become the world's largest Bitcoin mining center.</li>
                    </ul>

                    <p>
                      For Jacksonville businesses, this national environment provides a relatively stable foundation for Bitcoin adoption, especially given Florida's supportive regulatory stance.
                    </p>

                    <h4>El Salvador: The Bitcoin Nation</h4>
                    <p>
                      In 2021, El Salvador made history by becoming the first country to adopt Bitcoin as legal tender. The government's Bitcoin strategy includes:
                    </p>
                    <ul>
                      <li>The Chivo wallet for citizens</li>
                      <li>Bitcoin reserves in the national treasury</li>
                      <li>Bitcoin mining using volcanic energy</li>
                      <li>Plans for a "Bitcoin City" funded by Bitcoin bonds</li>
                    </ul>

                    <p>
                      While implementation has faced challenges, El Salvador's bold experiment continues to be watched closely by other nations considering similar moves.
                    </p>

                    <h4>Canada: The Regulated Approach</h4>
                    <p>
                      Canada has taken a balanced approach to Bitcoin regulation, becoming the first country to approve Bitcoin ETFs in February 2021, a full three years before the United States. The Canadian Securities Administrators (CSA) has established clear guidelines for cryptocurrency exchanges, providing regulatory clarity while supporting innovation.
                    </p>

                    <h4>Brazil: The Emerging Market Leader</h4>
                    <p>
                      Brazil has emerged as South America's cryptocurrency leader, with a regulatory framework that recognizes Bitcoin as a financial asset. The country has seen widespread adoption, with major banks offering Bitcoin services and retailers increasingly accepting cryptocurrency payments.
                    </p>

                    <h3>Europe: The Regulatory Frontier</h3>

                    <h4>European Union: MiCA and Beyond</h4>
                    <p>
                      The European Union's Markets in Crypto-Assets (MiCA) regulation represents one of the world's most comprehensive regulatory frameworks for cryptocurrencies. While providing clear rules, the approach is generally more restrictive than the U.S. in several areas.
                    </p>

                    <h4>Switzerland: Crypto Valley</h4>
                    <p>
                      Switzerland's "Crypto Valley" in Zug has established itself as a global hub for blockchain innovation. The country's clear regulatory framework, favorable tax treatment, and banking integration have attracted numerous cryptocurrency startups and projects.
                    </p>

                    <h4>United Kingdom: The Cautious Approach</h4>
                    <p>
                      The UK has taken a more cautious stance on cryptocurrency regulation, with the Financial Conduct Authority (FCA) implementing strict registration requirements for crypto businesses. Despite this, London remains an important center for Bitcoin innovation, particularly in the financial services sector.
                    </p>

                    <h3>Asia: From Pioneers to Prohibitions</h3>

                    <h4>Japan: The Early Adopter</h4>
                    <p>
                      Japan was one of the first countries to recognize Bitcoin as legal property and implement a comprehensive regulatory framework for cryptocurrencies. The Financial Services Agency (FSA) oversees licensed cryptocurrency exchanges, providing consumer protection while supporting innovation.
                    </p>

                    <h4>Singapore: The Asian Hub</h4>
                    <p>
                      Singapore has positioned itself as Asia's cryptocurrency hub with its progressive regulatory approach. The Monetary Authority of Singapore (MAS) has developed a balanced framework that encourages innovation while protecting consumers.
                    </p>

                    <h4>China: The Prohibition</h4>
                    <p>
                      After initially embracing blockchain technology, China has implemented some of the strictest cryptocurrency regulations, banning mining operations and severely restricting trading. This stands in stark contrast to the U.S. approach, which has become increasingly accommodating.
                    </p>

                    <h3>Middle East and Africa: The New Frontiers</h3>

                    <h4>United Arab Emirates: The Emerging Player</h4>
                    <p>
                      Dubai and Abu Dhabi have rapidly developed crypto-friendly regulations to attract blockchain businesses. The Dubai Multi Commodities Centre (DMCC) has created a dedicated Crypto Centre to support the ecosystem.
                    </p>

                    <h4>Nigeria: The Adoption Leader</h4>
                    <p>
                      Despite regulatory challenges, Nigeria has one of the highest rates of Bitcoin adoption in the world, driven by currency instability, remittance needs, and a young, tech-savvy population.
                    </p>

                    <h3>How Florida Compares Globally</h3>
                    <p>
                      Florida has emerged as one of the most Bitcoin-friendly states in the U.S., with several advantages that position it favorably in the global landscape:
                    </p>

                    <h4>Regulatory Environment</h4>
                    <p>
                      Florida's approach to cryptocurrency regulation has been notably supportive:
                    </p>
                    <ul>
                      <li>The state's Money Transmitter Act was amended to exclude certain cryptocurrency activities</li>
                      <li>State agencies are exploring accepting Bitcoin for fees and taxes</li>
                      <li>The Miami-Dade County Commission has established a cryptocurrency task force</li>
                    </ul>

                    <p>
                      This regulatory environment is more welcoming than many international jurisdictions and even other U.S. states.
                    </p>

                    <h4>Business Integration</h4>
                    <p>
                      Florida businesses have been at the forefront of Bitcoin adoption:
                    </p>
                    <ul>
                      <li>Miami has hosted major Bitcoin conferences and events</li>
                      <li>Local businesses across sectors are increasingly accepting Bitcoin payments</li>
                      <li>The state has attracted numerous cryptocurrency startups and established companies</li>
                    </ul>

                    <p>
                      This level of business integration puts Florida on par with global leaders like Switzerland's Zug or Singapore.
                    </p>

                    <h4>Community Support</h4>
                    <p>
                      Florida boasts a vibrant Bitcoin community:
                    </p>
                    <ul>
                      <li>Active meetup groups in major cities including Jacksonville</li>
                      <li>Educational initiatives and workshops</li>
                      <li>Political support from key officials</li>
                    </ul>

                    <p>
                      This community infrastructure rivals that of international Bitcoin hubs and provides valuable support for businesses entering the space.
                    </p>

                    <h3>Implications for Jacksonville Businesses</h3>
                    <p>
                      Understanding the global Bitcoin landscape offers several key insights for Jacksonville businesses:
                    </p>

                    <h4>Competitive Advantage</h4>
                    <p>
                      Jacksonville businesses operate in one of the world's most favorable environments for Bitcoin adoption. By implementing Bitcoin payment solutions now, local businesses can gain a competitive edge both locally and globally.
                    </p>

                    <h4>Regulatory Stability</h4>
                    <p>
                      Compared to many international jurisdictions, Florida offers relatively stable and supportive regulatory conditions for Bitcoin businesses. This reduces compliance risks and operational uncertainties.
                    </p>

                    <h4>Global Customer Base</h4>
                    <p>
                      By accepting Bitcoin, Jacksonville businesses can tap into a global customer base, particularly from regions with high Bitcoin adoption but limited spending options.
                    </p>

                    <h4>Innovation Opportunities</h4>
                    <p>
                      Florida's position in the global Bitcoin landscape creates unique opportunities for business innovation, particularly in sectors like tourism, real estate, and international trade.
                    </p>

                    <h2>Looking Ahead: Global Trends to Watch</h2>
                    <p>
                      As the global Bitcoin landscape continues to evolve, several trends will shape the future:
                    </p>

                    <ul>
                      <li><strong>Regulatory Convergence:</strong> Countries are increasingly looking to establish international standards for cryptocurrency regulation.</li>
                      <li><strong>CBDC Competition:</strong> Central Bank Digital Currencies will create both challenges and opportunities for Bitcoin adoption.</li>
                      <li><strong>Institutional Integration:</strong> Following the U.S. ETF approvals, other countries are likely to see increased institutional participation.</li>
                      <li><strong>Cross-Border Solutions:</strong> Bitcoin's role in international payments and remittances will continue to grow.</li>
                    </ul>

                    <h2>Conclusion: Global Perspective, Local Action</h2>
                    <p>
                      The global Bitcoin landscape offers valuable context for Jacksonville businesses considering cryptocurrency adoption. By understanding international trends and comparing regulatory approaches, local businesses can make informed decisions about how to implement Bitcoin solutions.
                    </p>
                    
                    <p>
                      Florida's position as a Bitcoin-friendly jurisdiction within the United States provides Jacksonville businesses with a unique advantage in the global cryptocurrency ecosystem. By leveraging this favorable environment, local businesses can position themselves at the forefront of the digital economy.
                    </p>
                    
                    <p>
                      At Bitcoin for Jax, we help local businesses navigate this global landscape with locally tailored solutions. Our team stays informed about international developments while focusing on the specific needs of Jacksonville businesses.
                    </p>
                  </div>

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <Link href="/blog" className="inline-flex items-center text-bitcoin-blue hover:text-bitcoin-blue/80">
                        <ArrowLeftIcon className="h-5 w-5 mr-2" />
                        Back to Blog
                      </Link>
                      <div className="flex items-center">
                        <span className="mr-3 text-gray-600">Share:</span>
                        <div className="flex space-x-2">
                          <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                            <ShareIcon className="h-4 w-4 text-gray-600" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                >
                  {/* Author Bio */}
                  <div className="card p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">About the Author</h3>
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-bitcoin-blue rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">CR</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Cameryn Richardson</h4>
                        <p className="text-gray-500 text-sm">International Consultant, Bitcoin for Jax</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Cameryn specializes in international Bitcoin regulations and has worked with businesses across multiple countries. She brings a global perspective to the Jacksonville Bitcoin community.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div className="card p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      <Link href="/blog/bitcoin-etf-global-landscape" className="group block">
                        <h4 className="font-medium group-hover:text-bitcoin-orange">Bitcoin ETFs and the Global Bitcoin Landscape</h4>
                        <p className="text-gray-500 text-sm">June 15, 2025</p>
                      </Link>
                      <Link href="/blog/bitcoin-etf-impact" className="group block">
                        <h4 className="font-medium group-hover:text-bitcoin-orange">How Bitcoin ETFs Are Changing the Game for Small Businesses</h4>
                        <p className="text-gray-500 text-sm">June 14, 2025</p>
                      </Link>
                      <Link href="/blog/usa-crypto-hub" className="group block">
                        <h4 className="font-medium group-hover:text-bitcoin-orange">How the USA is Becoming a Global Crypto Hub</h4>
                        <p className="text-gray-500 text-sm">June 12, 2025</p>
                      </Link>
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4">Resources</h3>
                    <div className="space-y-4">
                      <a href="https://www.flsenate.gov/Committees/BillSummaries/2023/html/2947" target="_blank" rel="noopener noreferrer" className="group block">
                        <p className="font-medium group-hover:text-bitcoin-orange">Florida Senate Bill 486</p>
                        <p className="text-gray-500 text-sm">Florida's cryptocurrency legislation</p>
                      </a>
                      <a href="https://www.bis.org/publ/work1049.htm" target="_blank" rel="noopener noreferrer" className="group block">
                        <p className="font-medium group-hover:text-bitcoin-orange">BIS Global Crypto Regulation Database</p>
                        <p className="text-gray-500 text-sm">International regulatory comparison</p>
                      </a>
                      <a href="https://www.chainalysis.com/geography-of-cryptocurrency/" target="_blank" rel="noopener noreferrer" className="group block">
                        <p className="font-medium group-hover:text-bitcoin-orange">Global Crypto Adoption Index</p>
                        <p className="text-gray-500 text-sm">Country-by-country adoption metrics</p>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">You May Also Like</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Related Article 1 */}
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
                    src="/images/bitcoin-etf.png" 
                    alt="Bitcoin ETF" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link href="/blog/bitcoin-etf-global-landscape" className="hover:text-bitcoin-orange">
                      Bitcoin ETFs and the Global Bitcoin Landscape
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    How the approval of Bitcoin ETFs is changing the global cryptocurrency landscape and what it means for businesses.
                  </p>
                  <Link href="/blog/bitcoin-etf-global-landscape" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              {/* Related Article 2 */}
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
                    src="/images/bitcoin-etf-impact.png" 
                    alt="Bitcoin ETF Impact" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link href="/blog/bitcoin-etf-impact" className="hover:text-bitcoin-orange">
                      How Bitcoin ETFs Are Changing the Game for Small Businesses
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Explore how the SEC's approval of Bitcoin ETFs is affecting mainstream adoption and small business opportunities.
                  </p>
                  <Link href="/blog/bitcoin-etf-impact" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              {/* Related Article 3 */}
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
                    src="/images/bitcoin-for-business.png" 
                    alt="Bitcoin for Business" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link href="/blog/bitcoin-for-business" className="hover:text-bitcoin-orange">
                      Bitcoin for Business: Practical Implementation Guide
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Step-by-step guide for Jacksonville businesses looking to implement Bitcoin payments in their operations.
                  </p>
                  <Link href="/blog/bitcoin-for-business" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
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
    </ClientPage>
  )
} 