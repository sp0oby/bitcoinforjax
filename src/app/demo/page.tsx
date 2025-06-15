'use client'

import React from 'react'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DemoBooking() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-orange/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Book a Free Demo
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90"
            >
              Experience Bitcoin payments in action and see how it can benefit your Jacksonville business
            </motion.p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Demo Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mr-4">
                    <span className="text-bitcoin-orange font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Personalized Consultation</h3>
                    <p className="text-gray-600">We'll discuss your business needs and recommend the best Bitcoin payment solution for you.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mr-4">
                    <span className="text-bitcoin-orange font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Live Demonstration</h3>
                    <p className="text-gray-600">See Bitcoin payments in action with our test environment, including on-chain and Lightning transactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mr-4">
                    <span className="text-bitcoin-orange font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">PoS Integration</h3>
                    <p className="text-gray-600">We'll show you how Bitcoin payments integrate with your existing point of sale system.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mr-4">
                    <span className="text-bitcoin-orange font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Customized Quote</h3>
                    <p className="text-gray-600">Get a personalized quote based on your business needs and preferred setup.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 relative h-60 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/images/bitcoin-demo.png" 
                  alt="Bitcoin Payment Demo"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            {/* Demo Booking Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Schedule Your Free Demo</h2>
              <p className="text-gray-600 mb-6">
                Learn how Bitcoin for Jax can help your business save on fees and attract new customers. We'll walk you through our easy setup process and answer all your questions.
              </p>
              <ContactForm buttonColor="bitcoin-orange" />
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
            <h2 className="text-3xl font-bold mb-6 text-center">Why Jacksonville Businesses Choose Bitcoin Payments</h2>
            
            <p>
              In today's competitive business landscape, Jacksonville merchants are increasingly turning to Bitcoin payment solutions to reduce costs, attract tech-savvy customers, and stay ahead of the digital curve. Bitcoin for Jax provides Jacksonville's most comprehensive Bitcoin payment integration service, tailored specifically for local businesses.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Benefits of Bitcoin Payments for Jacksonville Businesses</h3>
            
            <ul className="space-y-3">
              <li><strong>Lower Transaction Fees:</strong> Save 2-3% on every transaction compared to traditional credit card processing fees.</li>
              <li><strong>No Chargebacks:</strong> Bitcoin transactions are final, eliminating the risk and hassle of fraudulent chargebacks.</li>
              <li><strong>Attract New Customers:</strong> Appeal to Jacksonville's growing tech-savvy and cryptocurrency-enthusiastic population.</li>
              <li><strong>Fast Settlement:</strong> With Lightning Network, receive payments in seconds rather than waiting days for traditional bank settlements.</li>
              <li><strong>Enhanced Security:</strong> Bitcoin's blockchain technology provides superior security and transparency for your transactions.</li>
              <li><strong>Global Reach:</strong> Accept payments from customers worldwide without currency conversion fees or international transaction charges.</li>
            </ul>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Jacksonville's Bitcoin Adoption</h3>
            
            <p>
              Jacksonville is rapidly becoming a hub for cryptocurrency adoption in Florida. With the city's growing tech scene and forward-thinking business community, Bitcoin acceptance is a natural progression for local merchants. From Riverside cafes to Jacksonville Beach retail shops, businesses across the city are discovering the advantages of Bitcoin payments.
            </p>
            
            <p>
              Bitcoin for Jax is proud to be at the forefront of this movement, providing local expertise and support that national payment processors simply can't match. Our Jacksonville-based team understands the unique needs of local businesses and offers personalized solutions that work for your specific situation.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Book Your Free Demonstration Today</h3>
            
            <p>
              Experience the future of payments with a free, no-obligation demonstration. Our team will show you exactly how Bitcoin payments can integrate with your existing systems, calculate your potential savings, and answer any questions you might have about cryptocurrency acceptance.
            </p>
            
            <p>
              Don't miss out on the competitive advantages that Bitcoin payments can bring to your Jacksonville business. Schedule your demo today and join the growing community of forward-thinking local merchants accepting Bitcoin.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 