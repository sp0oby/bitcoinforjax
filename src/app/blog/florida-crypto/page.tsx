'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, ArrowLongRightIcon, CheckCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import ClientPage from '../components/ClientPage'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function FloridaCrypto() {
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
                Florida's Crypto-Friendly Laws: What Local Businesses Need to Know
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
                  <span>May 28, 2025</span>
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
                      src="/images/florida-crypto.png" 
                      alt="Florida Crypto Laws" 
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h2>Introduction: Florida's Crypto Revolution</h2>
                  <p>
                    Florida has rapidly emerged as one of the most cryptocurrency-friendly states in the United States. Through a combination of forward-thinking legislation, gubernatorial support, and a growing ecosystem of crypto businesses, the Sunshine State has positioned itself as a leading destination for blockchain innovation.
                  </p>
                  <p>
                    For Jacksonville businesses considering Bitcoin adoption, this favorable regulatory environment provides significant advantages and opportunities. This article explores Florida's crypto-friendly laws, their implications for local businesses, and how Jacksonville entrepreneurs can leverage these policies to their advantage.
                  </p>

                  <h2>Key Florida Cryptocurrency Legislation</h2>
                  <p>
                    Several pieces of legislation have established Florida's reputation as a crypto-friendly state:
                  </p>

                  <h3>Florida Senate Bill 486: Money Services Businesses</h3>
                  <p>
                    One of the most significant developments was the passage of Senate Bill 486 in 2023, which:
                  </p>
                  <ul>
                    <li>
                      <strong>Clarified definitions:</strong> Explicitly defined virtual currencies and blockchain technology in state law
                    </li>
                    <li>
                      <strong>Exempted non-custodial services:</strong> Florida Statute 560.103 now clearly exempts non-custodial cryptocurrency services from money transmitter licensing requirements
                    </li>
                    <li>
                      <strong>Reduced regulatory burden:</strong> Simplified compliance for businesses that don't hold customer funds
                    </li>
                  </ul>
                  <p>
                    This legislation is particularly relevant for Bitcoin for Jax clients using our Basic plan, as it confirms that non-custodial Bitcoin payment processing (such as our LunaNode-hosted BTCPay Server solution) is exempt from money transmitter regulations.
                  </p>

                  <h3>Florida House Bill 273: Blockchain Technology</h3>
                  <p>
                    This legislation established a blockchain innovation environment by:
                  </p>
                  <ul>
                    <li>
                      <strong>Creating a Blockchain Task Force:</strong> Established a state-level working group to identify ways government agencies can benefit from blockchain technology
                    </li>
                    <li>
                      <strong>Promoting government use cases:</strong> Directed state agencies to explore blockchain for record-keeping, data security, and financial transactions
                    </li>
                    <li>
                      <strong>Supporting education initiatives:</strong> Funded blockchain education programs at Florida universities and community colleges
                    </li>
                  </ul>
                  <p>
                    This bill signaled Florida's commitment to becoming a blockchain technology leader and created opportunities for businesses developing solutions for government applications.
                  </p>

                  <h3>Digital Asset Protection Act</h3>
                  <p>
                    This groundbreaking legislation enhanced protection for cryptocurrency holders by:
                  </p>
                  <ul>
                    <li>
                      <strong>Establishing property rights:</strong> Clearly defining digital assets as personal property under Florida law
                    </li>
                    <li>
                      <strong>Protecting privacy:</strong> Creating safeguards against unreasonable searches and seizures of digital assets
                    </li>
                    <li>
                      <strong>Clarifying inheritance:</strong> Establishing framework for digital assets in estate planning
                    </li>
                  </ul>
                  <p>
                    For Jacksonville business owners, this legislation provides important legal clarity and protection for their Bitcoin holdings.
                  </p>

                  <h2>Florida's Cryptocurrency Tax Environment</h2>
                  <p>
                    Florida's tax environment is particularly favorable for cryptocurrency businesses and users:
                  </p>

                  <h3>No State Income Tax</h3>
                  <p>
                    Florida's lack of state income tax provides significant benefits for cryptocurrency users:
                  </p>
                  <ul>
                    <li>
                      <strong>Capital gains advantage:</strong> While federal capital gains taxes still apply to cryptocurrency profits, Florida residents avoid the additional state-level taxation that exists in many other states
                    </li>
                    <li>
                      <strong>Simplified compliance:</strong> Businesses only need to track cryptocurrency gains for federal tax purposes
                    </li>
                  </ul>
                  <p>
                    For Jacksonville business owners holding Bitcoin as a treasury asset, this can result in substantial tax savings compared to operating in states with income taxes.
                  </p>

                  <h3>Sales Tax Guidance</h3>
                  <p>
                    The Florida Department of Revenue has issued guidance clarifying that:
                  </p>
                  <ul>
                    <li>
                      <strong>Cryptocurrency purchases:</strong> When Bitcoin or other cryptocurrencies are used to purchase taxable goods or services, sales tax is calculated based on the fair market value of the cryptocurrency at the time of transaction
                    </li>
                    <li>
                      <strong>Cryptocurrency sales:</strong> The sale of cryptocurrency itself is not subject to Florida sales tax, as digital currencies are not considered tangible personal property
                    </li>
                  </ul>
                  <p>
                    This clarity helps Jacksonville businesses properly handle sales tax when accepting Bitcoin payments.
                  </p>

                  <h2>Local Government Initiatives</h2>
                  <p>
                    Beyond state-level legislation, several Florida municipalities have embraced cryptocurrency:
                  </p>

                  <h3>Miami: The Bitcoin Capital</h3>
                  <p>
                    Miami has led the charge with several pioneering initiatives:
                  </p>
                  <ul>
                    <li>
                      <strong>MiamiCoin:</strong> Launched a city-specific cryptocurrency that generates revenue for municipal projects
                    </li>
                    <li>
                      <strong>Bitcoin Treasury:</strong> Allocated a portion of city funds to Bitcoin
                    </li>
                    <li>
                      <strong>Employee payments:</strong> Offered city employees the option to receive a portion of their salary in Bitcoin
                    </li>
                    <li>
                      <strong>Bitcoin Conference:</strong> Hosts the world's largest Bitcoin conference, attracting tens of thousands of attendees annually
                    </li>
                  </ul>

                  <h3>Jacksonville's Emerging Opportunity</h3>
                  <p>
                    While Jacksonville has not yet implemented Miami-style cryptocurrency initiatives, the city is well-positioned to become North Florida's crypto hub:
                  </p>
                  <ul>
                    <li>
                      <strong>Growing tech sector:</strong> Jacksonville's expanding technology industry provides a natural foundation for cryptocurrency adoption
                    </li>
                    <li>
                      <strong>Lower cost of living:</strong> Compared to Miami, Jacksonville offers cryptocurrency businesses and professionals more affordable operating costs
                    </li>
                    <li>
                      <strong>Strategic location:</strong> As a major logistics hub with an international port, Jacksonville businesses have unique opportunities for blockchain applications in supply chain and international commerce
                    </li>
                  </ul>
                  <p>
                    Local businesses adopting Bitcoin now can position themselves as leaders in Jacksonville's emerging crypto ecosystem.
                  </p>

                  <h2>Practical Implications for Jacksonville Businesses</h2>
                  <p>
                    Florida's crypto-friendly legal environment creates several practical advantages for Jacksonville businesses:
                  </p>

                  <h3>Simplified Compliance</h3>
                  <p>
                    The regulatory clarity provided by Florida's legislation reduces compliance uncertainty:
                  </p>
                  <ul>
                    <li>
                      <strong>Non-custodial exemption:</strong> Businesses using solutions like BTCPay Server that don't hold customer funds avoid money transmitter licensing requirements
                    </li>
                    <li>
                      <strong>Clear definitions:</strong> State law provides explicit definitions of virtual currencies, reducing legal ambiguity
                    </li>
                    <li>
                      <strong>Supportive regulators:</strong> Florida's regulatory agencies have demonstrated a collaborative approach to cryptocurrency businesses
                    </li>
                  </ul>
                  <p>
                    This environment allows Jacksonville businesses to implement Bitcoin payments with greater confidence in their legal compliance.
                  </p>

                  <h3>Competitive Advantage</h3>
                  <p>
                    Early adoption of Bitcoin in a supportive regulatory environment offers competitive benefits:
                  </p>
                  <ul>
                    <li>
                      <strong>Attraction of tech-savvy customers:</strong> Appeal to the growing demographic of cryptocurrency users in Florida
                    </li>
                    <li>
                      <strong>Reduced payment processing costs:</strong> Save 2-3% on transaction fees compared to traditional credit card processing
                    </li>
                    <li>
                      <strong>Innovation signaling:</strong> Demonstrate your business's forward-thinking approach to technology and finance
                    </li>
                  </ul>

                  <h3>Asset Protection Benefits</h3>
                  <p>
                    Florida's Digital Asset Protection Act provides important safeguards:
                  </p>
                  <ul>
                    <li>
                      <strong>Legal recognition:</strong> Bitcoin and other cryptocurrencies have clear legal status as property
                    </li>
                    <li>
                      <strong>Privacy protections:</strong> Enhanced safeguards against unreasonable searches and seizures
                    </li>
                    <li>
                      <strong>Business continuity:</strong> Clear framework for digital asset inheritance and succession planning
                    </li>
                  </ul>
                  <p>
                    These protections are particularly valuable for businesses holding significant Bitcoin treasury reserves.
                  </p>

                  <h2>Compliance Considerations</h2>
                  <p>
                    Despite Florida's favorable environment, Jacksonville businesses should still be aware of important compliance considerations:
                  </p>

                  <h3>Federal Regulations Still Apply</h3>
                  <p>
                    While Florida has created a supportive state-level framework, federal regulations remain in effect:
                  </p>
                  <ul>
                    <li>
                      <strong>IRS reporting:</strong> Cryptocurrency transactions must still be reported on federal tax returns
                    </li>
                    <li>
                      <strong>FinCEN requirements:</strong> Certain cryptocurrency businesses may still need to register as Money Services Businesses at the federal level
                    </li>
                    <li>
                      <strong>Securities laws:</strong> SEC regulations may apply to certain cryptocurrency activities, particularly those involving tokens other than Bitcoin
                    </li>
                  </ul>

                  <h3>Record-Keeping Best Practices</h3>
                  <p>
                    Proper documentation remains essential:
                  </p>
                  <ul>
                    <li>
                      <strong>Transaction records:</strong> Maintain detailed records of all cryptocurrency transactions, including USD value at time of transaction
                    </li>
                    <li>
                      <strong>Cost basis tracking:</strong> Document the acquisition price of all Bitcoin held by your business
                    </li>
                    <li>
                      <strong>Sales tax compliance:</strong> Ensure proper collection and remittance of sales tax on transactions involving cryptocurrency
                    </li>
                  </ul>
                  <p>
                    At Bitcoin for Jax, we help our clients implement record-keeping systems that simplify compliance with both state and federal requirements.
                  </p>

                  <h2>The Future of Cryptocurrency Regulation in Florida</h2>
                  <p>
                    Florida's crypto-friendly trajectory appears set to continue:
                  </p>
                  <ul>
                    <li>
                      <strong>Blockchain Innovation Hub:</strong> Proposed legislation to establish a state-funded innovation center focused on blockchain applications
                    </li>
                    <li>
                      <strong>Digital ID initiatives:</strong> Exploration of blockchain-based digital identity solutions for state services
                    </li>
                    <li>
                      <strong>CBDC alternatives:</strong> State-level exploration of alternatives to potential federal central bank digital currencies
                    </li>
                  </ul>
                  <p>
                    These developments suggest Florida will maintain and likely expand its supportive stance toward cryptocurrency businesses.
                  </p>

                  <h2>Conclusion: Jacksonville's Bitcoin Opportunity</h2>
                  <p>
                    Florida's crypto-friendly legal environment creates a unique opportunity for Jacksonville businesses to adopt Bitcoin payments with reduced regulatory friction and enhanced legal protections. The combination of clear state laws, favorable tax treatment, and growing institutional support makes Florida one of the best states in the nation for cryptocurrency businesses.
                  </p>
                  <p>
                    For Jacksonville entrepreneurs, this supportive environment reduces barriers to entry and provides a solid foundation for incorporating Bitcoin into their business operations. Whether you're considering a basic implementation of Bitcoin payments or a more comprehensive approach with a full node and Lightning Network capabilities, Florida's legal framework supports your journey.
                  </p>
                  <p>
                    At Bitcoin for Jax, we specialize in helping local businesses navigate both the technical and compliance aspects of Bitcoin adoption. Our solutions are designed to take full advantage of Florida's crypto-friendly laws while ensuring adherence to all applicable regulations.
                  </p>
                  <p>
                    Ready to leverage Florida's crypto-friendly environment for your Jacksonville business? <Link href="/contact" className="text-bitcoin-blue hover:underline">Contact us</Link> today for a free consultation.
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
                          src="/images/team-3.png" 
                          alt="Cameryn Richardson" 
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">Cameryn Richardson</h3>
                        <p className="text-gray-500 text-sm">Regulatory Compliance Specialist</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Cameryn specializes in cryptocurrency regulatory compliance and has worked with businesses across Florida to navigate the evolving legal landscape. With a background in both law and technology, she helps Bitcoin for Jax clients implement compliant payment solutions.
                    </p>
                  </motion.div>

                  {/* Resources Box */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.1 }}
                    className="card p-6 mb-8"
                  >
                    <h3 className="font-bold text-lg mb-4">Florida Crypto Resources</h3>
                    <ul className="space-y-4">
                      <li>
                        <a 
                          href="https://www.flsenate.gov/Committees/BillSummaries/2023/html/2947" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start hover:text-bitcoin-blue"
                        >
                          <DocumentTextIcon className="h-5 w-5 text-bitcoin-blue mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">Florida Senate Bill 486 (2023): Money Services Businesses</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://floridarevenue.com/taxes/businesses/Pages/default.aspx" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start hover:text-bitcoin-blue"
                        >
                          <DocumentTextIcon className="h-5 w-5 text-bitcoin-blue mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">Florida Department of Revenue: Business Tax Guidelines</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.flofr.gov/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start hover:text-bitcoin-blue"
                        >
                          <DocumentTextIcon className="h-5 w-5 text-bitcoin-blue mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">Florida Office of Financial Regulation</span>
                        </a>
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
                    className="card p-6 bg-gradient-to-br from-bitcoin-blue/10 to-primary/10"
                  >
                    <h3 className="font-bold text-lg mb-4">Navigate Crypto Compliance with Confidence</h3>
                    <p className="text-gray-600 mb-6">
                      Let Bitcoin for Jax help your business implement a fully compliant Bitcoin payment solution that takes advantage of Florida's crypto-friendly laws.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-blue mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Regulatory-compliant setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-blue mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Transaction record-keeping systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-blue mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Tax reporting guidance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-bitcoin-blue mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Local Jacksonville support</span>
                      </li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="btn-primary w-full text-center"
                    >
                      Book a Free Consultation
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
                    <Link href="/blog/bitcoin-basics" className="hover:text-bitcoin-blue">
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
                  <Link href="/blog/bitcoin-basics" className="inline-flex items-center text-bitcoin-blue font-medium hover:text-bitcoin-blue/80 text-sm">
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
                    <Link href="/blog/usa-crypto-hub" className="hover:text-bitcoin-blue">
                      How the USA is Becoming a Global Crypto Hub
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    Explore how the United States is emerging as a leader in cryptocurrency adoption and regulation, with special focus on Florida's crypto-friendly environment.
                  </p>
                  <Link href="/blog/usa-crypto-hub" className="inline-flex items-center text-bitcoin-blue font-medium hover:text-bitcoin-blue/80 text-sm">
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
                    src="/images/lightning-network.png" 
                    alt="Lightning Network" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    <Link href="/blog/lightning-network" className="hover:text-bitcoin-blue">
                      Lightning Network: The Future of Fast Bitcoin Payments
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    Explore how the Lightning Network is revolutionizing Bitcoin payments with instant, low-fee transactions. Learn how this layer-2 solution works and its benefits for businesses.
                  </p>
                  <Link href="/blog/lightning-network" className="inline-flex items-center text-bitcoin-blue font-medium hover:text-bitcoin-blue/80 text-sm">
                    Read more <ArrowLongRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-bitcoin-blue to-primary">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Take Advantage of Florida's Crypto-Friendly Environment</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let Bitcoin for Jax help your Jacksonville business implement a fully compliant Bitcoin payment solution
              </p>
              <Link 
                href="/services"
                className="btn-secondary bg-white text-bitcoin-blue hover:bg-white/90 border-0"
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