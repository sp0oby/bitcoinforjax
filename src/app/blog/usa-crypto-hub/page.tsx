'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, ArrowLongRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function USACryptoHub() {
  return (
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
              How the USA is Becoming a Global Crypto Hub
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
                <span>June 12, 2025</span>
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
                    src="/images/usa-crypto-hub.png" 
                    alt="USA Crypto Hub" 
                    fill
                    className="object-cover"
                  />
                </div>

                <h2>Introduction: America's Crypto Transformation</h2>
                <p>
                  Over the past few years, the United States has undergone a remarkable transformation in its approach to cryptocurrencies and blockchain technology. Once seen primarily as a regulatory challenge, digital assets are increasingly viewed as a strategic opportunity for American innovation, economic growth, and financial leadership.
                </p>
                <p>
                  This shift represents a significant evolution in government attitudes, with implications for businesses across the country—including right here in Jacksonville. This article explores how various branches of the U.S. government are contributing to making America a global crypto hub, and what this means for local businesses considering Bitcoin adoption.
                </p>

                <h2>Federal Regulatory Developments</h2>
                <p>
                  Perhaps the most dramatic change has occurred at the federal regulatory level, with several agencies taking increasingly supportive positions toward cryptocurrency innovation:
                </p>

                <h3>Securities and Exchange Commission (SEC)</h3>
                <p>
                  After years of cautious approaches, the SEC has made landmark decisions that have legitimized Bitcoin in the eyes of traditional finance:
                </p>
                <ul>
                  <li>
                    <strong>Bitcoin ETF Approvals:</strong> The approval of multiple spot Bitcoin ETFs in early 2024 marked a watershed moment, allowing mainstream investors to gain Bitcoin exposure through traditional brokerage accounts. This has brought billions of dollars in institutional investment to the space.
                  </li>
                  <li>
                    <strong>Regulatory Clarity:</strong> The SEC has issued clearer guidance distinguishing between securities and non-securities in the crypto space, reducing uncertainty for businesses and developers.
                  </li>
                  <li>
                    <strong>Innovation Office:</strong> The establishment of a dedicated Crypto Innovation Office within the SEC signals a shift from pure enforcement to balanced regulation that protects investors while enabling innovation.
                  </li>
                </ul>

                <h3>Office of the Comptroller of the Currency (OCC)</h3>
                <p>
                  The banking regulator has taken several steps to integrate cryptocurrency into the traditional financial system:
                </p>
                <ul>
                  <li>
                    <strong>Custody Guidance:</strong> Clarified that federally chartered banks can provide cryptocurrency custody services to their customers.
                  </li>
                  <li>
                    <strong>Stablecoin Framework:</strong> Established guidelines for national banks to issue stablecoins and participate in blockchain networks.
                  </li>
                  <li>
                    <strong>Banking Charters:</strong> Granted conditional banking charters to crypto-native financial institutions, creating bridges between traditional banking and digital assets.
                  </li>
                </ul>

                <h3>Commodity Futures Trading Commission (CFTC)</h3>
                <p>
                  The CFTC has been among the most proactive regulators in the crypto space:
                </p>
                <ul>
                  <li>
                    <strong>Bitcoin as a Commodity:</strong> Consistently classified Bitcoin as a commodity rather than a security, providing regulatory clarity.
                  </li>
                  <li>
                    <strong>Derivatives Markets:</strong> Approved Bitcoin futures and options markets, enhancing price discovery and risk management for institutional investors.
                  </li>
                  <li>
                    <strong>Educational Initiatives:</strong> Launched programs to educate market participants about digital assets and promote responsible innovation.
                  </li>
                </ul>

                <h2>Congressional Action</h2>
                <p>
                  Congress has increasingly recognized the strategic importance of cryptocurrency and blockchain technology to America's economic competitiveness:
                </p>
                <ul>
                  <li>
                    <strong>Bipartisan Cryptocurrency Framework:</strong> After years of piecemeal approaches, Congress has advanced comprehensive legislation that provides clear definitions, jurisdictional boundaries, and compliance frameworks for different types of digital assets.
                  </li>
                  <li>
                    <strong>Congressional Blockchain Caucus:</strong> The bipartisan caucus has grown to include dozens of representatives and senators committed to promoting blockchain innovation while establishing appropriate safeguards.
                  </li>
                  <li>
                    <strong>Tax Clarity:</strong> New legislation has addressed longstanding issues around cryptocurrency taxation, including de minimis exemptions for small transactions and clearer reporting requirements for businesses.
                  </li>
                  <li>
                    <strong>Research Funding:</strong> Appropriated significant funding for blockchain research and development through agencies like the National Science Foundation and DARPA.
                  </li>
                </ul>

                <h2>Executive Branch Leadership</h2>
                <p>
                  The White House and executive agencies have taken a more coordinated approach to cryptocurrency policy:
                </p>
                <ul>
                  <li>
                    <strong>Executive Order on Digital Assets:</strong> The landmark executive order signed in 2022 established a whole-of-government approach to cryptocurrency regulation and innovation, emphasizing both consumer protection and American competitiveness.
                  </li>
                  <li>
                    <strong>National Blockchain Strategy:</strong> Building on the executive order, the administration developed a comprehensive strategy that identifies blockchain technology as critical to America's technological leadership.
                  </li>
                  <li>
                    <strong>Digital Dollar Research:</strong> The Federal Reserve has accelerated research into a U.S. Central Bank Digital Currency (CBDC) while emphasizing that private sector innovation will continue to play a crucial role.
                  </li>
                  <li>
                    <strong>International Engagement:</strong> U.S. diplomats and trade representatives have worked to establish global standards for cryptocurrency regulation that align with American values and interests.
                  </li>
                </ul>

                <h2>State-Level Innovation</h2>
                <p>
                  Individual states have become important laboratories for cryptocurrency policy, with several emerging as particularly attractive destinations:
                </p>

                <h3>Florida: A Cryptocurrency Powerhouse</h3>
                <p>
                  Florida has positioned itself at the forefront of state-level crypto innovation, with several key developments:
                </p>
                <ul>
                  <li>
                    <strong>Legislative Framework:</strong> Florida passed comprehensive legislation that exempts cryptocurrencies from state money transmission laws and provides clarity for businesses operating in the space.
                  </li>
                  <li>
                    <strong>Miami's Bitcoin Initiative:</strong> Miami has embraced Bitcoin through initiatives like hosting the world's largest Bitcoin conference, allowing municipal employees to receive portions of their salary in Bitcoin, and exploring municipal Bitcoin holdings.
                  </li>
                  <li>
                    <strong>Business Migration:</strong> Numerous cryptocurrency companies have relocated to Florida, attracted by the favorable regulatory environment, absence of state income tax, and growing ecosystem.
                  </li>
                  <li>
                    <strong>Jacksonville's Opportunity:</strong> Building on Florida's crypto-friendly reputation, Jacksonville is now positioning itself as a more affordable alternative to Miami for Bitcoin and blockchain businesses.
                  </li>
                </ul>

                <h3>Other Leading States</h3>
                <ul>
                  <li>
                    <strong>Texas:</strong> Has attracted Bitcoin mining operations through its combination of affordable energy, regulatory clarity, and integration with the state's energy grid.
                  </li>
                  <li>
                    <strong>Wyoming:</strong> Created the Special Purpose Depository Institution (SPDI) charter specifically designed for cryptocurrency businesses.
                  </li>
                  <li>
                    <strong>New York:</strong> Despite its stringent BitLicense, remains a financial hub with significant crypto activity and has recently shown signs of regulatory evolution.
                  </li>
                  <li>
                    <strong>Arizona, Nevada, and Tennessee:</strong> Have all passed legislation recognizing smart contracts and blockchain signatures as legally binding.
                  </li>
                </ul>

                <h2>Infrastructure and Investment</h2>
                <p>
                  The U.S. government is increasingly treating cryptocurrency infrastructure as a matter of national importance:
                </p>
                <ul>
                  <li>
                    <strong>Mining Renaissance:</strong> Following China's cryptocurrency mining ban in 2021, the United States emerged as the world's leading Bitcoin mining hub, with supportive policies at the federal and state levels.
                  </li>
                  <li>
                    <strong>Energy Innovation:</strong> Partnerships between Bitcoin miners and energy providers have spurred innovations in renewable energy utilization and grid stability.
                  </li>
                  <li>
                    <strong>Government Investment:</strong> Various agencies have funded blockchain-based solutions for supply chain security, digital identity, and financial inclusion.
                  </li>
                  <li>
                    <strong>Tax Incentives:</strong> Several states have introduced tax incentives specifically targeting cryptocurrency businesses and infrastructure providers.
                  </li>
                </ul>

                <h2>Education and Workforce Development</h2>
                <p>
                  Recognizing that human capital is essential for technological leadership, government entities are investing in cryptocurrency education:
                </p>
                <ul>
                  <li>
                    <strong>University Partnerships:</strong> Federal grants have funded blockchain research centers at major universities across the country.
                  </li>
                  <li>
                    <strong>Vocational Training:</strong> Department of Labor programs now include blockchain development and cryptocurrency security in their workforce development initiatives.
                  </li>
                  <li>
                    <strong>K-12 Education:</strong> Some states have begun incorporating basic blockchain and cryptocurrency concepts into their computer science curricula.
                  </li>
                  <li>
                    <strong>Consumer Education:</strong> Regulatory agencies have shifted from purely cautionary messaging to balanced educational resources about digital assets.
                  </li>
                </ul>

                <h2>Challenges and Ongoing Debates</h2>
                <p>
                  Despite significant progress, several challenges remain in the U.S. approach to cryptocurrency:
                </p>
                <ul>
                  <li>
                    <strong>Regulatory Coordination:</strong> While improving, there is still some overlap and occasional conflict between different regulatory agencies.
                  </li>
                  <li>
                    <strong>Banking Access:</strong> Cryptocurrency businesses still face challenges accessing traditional banking services, though this situation has improved dramatically.
                  </li>
                  <li>
                    <strong>International Competition:</strong> Other jurisdictions like Singapore, Switzerland, and the United Arab Emirates are actively competing to attract cryptocurrency businesses.
                  </li>
                  <li>
                    <strong>Security Concerns:</strong> Government agencies continue to balance innovation with legitimate concerns about illicit finance, ransomware, and national security.
                  </li>
                </ul>

                <h2>What This Means for Jacksonville Businesses</h2>
                <p>
                  The evolving national landscape has several implications for Jacksonville businesses considering Bitcoin adoption:
                </p>
                <ul>
                  <li>
                    <strong>Reduced Regulatory Risk:</strong> The clearer regulatory framework reduces the compliance uncertainty that previously deterred many businesses from cryptocurrency adoption.
                  </li>
                  <li>
                    <strong>Mainstream Acceptance:</strong> As major financial institutions enter the space, the reputational risk of accepting Bitcoin has diminished substantially.
                  </li>
                  <li>
                    <strong>Financial Opportunities:</strong> Beyond simply accepting payments, businesses can now explore yield-generating strategies, Treasury management using digital assets, and blockchain-based financing.
                  </li>
                  <li>
                    <strong>Local Ecosystem:</strong> Jacksonville's growing cryptocurrency community provides local support, networking, and expertise for businesses entering the space.
                  </li>
                  <li>
                    <strong>Competitive Advantage:</strong> Early adopters still stand to benefit from differentiation and attracting cryptocurrency-savvy customers.
                  </li>
                </ul>

                <h2>Conclusion: America's Crypto Future</h2>
                <p>
                  The United States has made remarkable progress toward becoming a global cryptocurrency hub. Through a combination of regulatory clarity, legislative support, state-level innovation, and private sector engagement, America is positioning itself at the forefront of the digital asset revolution.
                </p>
                <p>
                  For Jacksonville businesses, this transformation offers unprecedented opportunities to participate in the cryptocurrency economy with greater confidence and support. As the regulatory environment continues to mature and institutional adoption accelerates, Bitcoin is moving from the fringes to the mainstream of American finance.
                </p>
                <p>
                  At Bitcoin for Jax, we help local businesses navigate this evolving landscape, providing the technical expertise and local knowledge needed to successfully implement Bitcoin payment solutions. Whether you're just beginning to explore cryptocurrency or looking to enhance your existing capabilities, we're here to help you participate in America's crypto future.
                </p>
                <p>
                  Ready to learn how your Jacksonville business can benefit from these national trends? <Link href="/contact" className="text-bitcoin-orange hover:underline">Contact us</Link> today for a consultation.
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
                    Brandon has been involved in the Bitcoin space since 2013 and closely follows regulatory developments at the national and state levels. He's passionate about helping Jacksonville businesses navigate the evolving cryptocurrency landscape.
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
                      <a href="#" className="hover:text-bitcoin-orange">Introduction: America's Crypto Transformation</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">Federal Regulatory Developments</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">Congressional Action</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">Executive Branch Leadership</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">State-Level Innovation</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">Infrastructure and Investment</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">Education and Workforce Development</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">Challenges and Ongoing Debates</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">What This Means for Jacksonville Businesses</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-bitcoin-orange">Conclusion: America's Crypto Future</a>
                    </li>
                  </ul>
                </motion.div>

                {/* Key Government Resources Box */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                  className="card p-6 mb-8"
                >
                  <h3 className="font-bold text-lg mb-4">Key Government Resources</h3>
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="#" 
                        className="flex items-start group"
                      >
                        <DocumentTextIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium group-hover:text-bitcoin-orange">Executive Order on Digital Assets</p>
                          <p className="text-gray-500 text-sm">White House (2022)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="flex items-start group"
                      >
                        <DocumentTextIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium group-hover:text-bitcoin-orange">SEC Bitcoin ETF Approval Documents</p>
                          <p className="text-gray-500 text-sm">Securities and Exchange Commission</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="flex items-start group"
                      >
                        <DocumentTextIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium group-hover:text-bitcoin-orange">Florida Cryptocurrency Legislation</p>
                          <p className="text-gray-500 text-sm">Florida Legislature (FS 560.103)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="flex items-start group"
                      >
                        <DocumentTextIcon className="h-5 w-5 text-bitcoin-orange mr-2 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium group-hover:text-bitcoin-orange">OCC Interpretive Letter on Crypto Custody</p>
                          <p className="text-gray-500 text-sm">Office of the Comptroller of the Currency</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* Florida Stats Box */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                  className="card p-6 bg-gradient-to-br from-bitcoin-blue/10 to-bitcoin-orange/10"
                >
                  <h3 className="font-bold text-lg mb-4">Florida Crypto Stats</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Crypto Companies:</span>
                      <span className="font-bold">120+</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Bitcoin ATMs:</span>
                      <span className="font-bold">380+</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Businesses Accepting Bitcoin:</span>
                      <span className="font-bold">850+</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Jacksonville Bitcoin Businesses:</span>
                      <span className="font-bold">45+</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">State Crypto Jobs:</span>
                      <span className="font-bold">5,000+</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-center">
                    <Link 
                      href="/services" 
                      className="text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 inline-flex items-center"
                    >
                      Join the Movement <ArrowLongRightIcon className="h-5 w-5 ml-1" />
                    </Link>
                  </div>
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
                  src="/images/florida-crypto.png" 
                  alt="Florida Crypto Laws" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">
                  <Link href="/blog/florida-crypto-laws" className="hover:text-bitcoin-orange">
                    Florida's Crypto-Friendly Laws: What Local Businesses Need to Know
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  A deep dive into Florida's cryptocurrency regulations and what they mean for Jacksonville businesses.
                </p>
                <Link href="/blog/florida-crypto-laws" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
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
                  src="/images/bitcoin-etf.png" 
                  alt="Bitcoin ETF Impact" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">
                  <Link href="/blog/bitcoin-etf-impact" className="hover:text-bitcoin-orange">
                    How Bitcoin ETFs Are Changing the Game for Small Businesses
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  Explore how the SEC's approval of Bitcoin ETFs is affecting mainstream adoption and small business opportunities.
                </p>
                <Link href="/blog/bitcoin-etf-impact" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
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
                  src="/images/global-bitcoin.png" 
                  alt="Global Bitcoin Landscape" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">
                  <Link href="/blog/global-bitcoin-landscape" className="hover:text-bitcoin-orange">
                    The Global Bitcoin Landscape: How the US Compares to Other Nations
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  A comparative analysis of Bitcoin regulation and adoption across major economies worldwide.
                </p>
                <Link href="/blog/global-bitcoin-landscape" className="inline-flex items-center text-bitcoin-orange font-medium hover:text-bitcoin-orange/80 text-sm">
                  Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue/80">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Stay Informed on Crypto Regulations</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on cryptocurrency regulation and its impact on Jacksonville businesses
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="btn-secondary whitespace-nowrap bg-white text-bitcoin-blue hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 