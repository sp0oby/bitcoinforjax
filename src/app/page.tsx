'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  BoltIcon, 
  CurrencyDollarIcon, 
  UsersIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  CreditCardIcon,
  LockClosedIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const features = [
  {
    title: "Point of Sale Integration",
    description: "Seamlessly integrate Bitcoin payments with your existing point of sale system, including Square, Shopify, Clover, and Toast.",
    icon: <CreditCardIcon className="h-6 w-6" />,
    color: "bg-bitcoin-orange/10",
    textColor: "text-bitcoin-orange"
  },
  {
    title: "Full Bitcoin Node",
    description: "Run your own Bitcoin node for complete control and security over your transactions, with our easy setup and management.",
    icon: <ServerIcon className="h-6 w-6" />,
    color: "bg-bitcoin-blue/10",
    textColor: "text-bitcoin-blue"
  },
  {
    title: "Lightning Network",
    description: "Accept instant, low-fee payments with Lightning Network, perfect for small transactions and daily purchases.",
    icon: <BoltIcon className="h-6 w-6" />,
    color: "bg-lightning-purple/10",
    textColor: "text-lightning-purple"
  },
  {
    title: "Mobile App Support",
    description: "Use our BTCPay PoS app on your existing iPad or Android tablet for a simple, dedicated checkout experience.",
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    color: "bg-bitcoin-orange/10",
    textColor: "text-bitcoin-orange"
  },
  {
    title: "Security First",
    description: "Enterprise-grade security with your own non-custodial wallet and dedicated channels for maximum protection.",
    icon: <LockClosedIcon className="h-6 w-6" />,
    color: "bg-bitcoin-blue/10",
    textColor: "text-bitcoin-blue"
  },
  {
    title: "Local Support",
    description: "Jacksonville-based support and training for your team, with regular maintenance and updates.",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    color: "bg-lightning-purple/10",
    textColor: "text-lightning-purple"
  }
];

const pricingPlans = [
  {
    name: "Minimal Plan",
    price: "$540",
    description: "On-Chain Payments via Voltage.cloud or Client PC BTCPay",
    features: [
      "Voltage.cloud free tier or client PC setup",
      "No hosting fees (client cost: $0)",
      "Standalone Bitcoin payment system",
      "15 minute training session",
      "Setup documentation and guides"
    ],
    highlighted: false
  },
  {
    name: "Basic Plan",
    price: "$1,080",
    description: "On-chain payments via LunaNode-hosted BTCPay Server",
    features: [
      "LunaNode-hosted BTCPay Server (~$8.80/month client-paid)",
      "No node required, wallet-based",
      "PoS integration (Square, Shopify, Clover, Toast)",
      "30-45 minute training session",
      "Setup documentation and guides"
    ],
    highlighted: false
  },
  {
    name: "Standard Plan",
    price: "$2,160",
    description: "Full Bitcoin node (Bitcoin Core) on Umbrel",
    features: [
      "Raspberry Pi 4 with 1.5 TB external hard drive",
      "Bitcoin Core on Umbrel for trustless on-chain payments",
      "BTCPay Server integration",
      "PoS integration (Square, Shopify, Clover, Toast)",
      "45 minute training session"
    ],
    highlighted: true
  },
  {
    name: "Premium Plan",
    price: "$3,240",
    description: "Full node + Lightning node (LND) on Umbrel",
    features: [
      "Everything in Standard Plan",
      "Lightning Network node (LND)",
      "Dedicated Lightning channel (0.01 BTC, ~$1,080)",
      "Fast, low-fee Lightning payments",
      "45 minute training session"
    ],
    highlighted: false
  }
];

const testimonials = [
  {
    quote: "Bitcoin for Jax helped us set up Lightning payments that take less than a second to process. Our tech-savvy customers love it, and we're saving hundreds on credit card fees each month!",
    author: "Fuzion Vape Shop",
    location: "St. Johns, Florida",
    initials: "FV",
    bgColor: "bg-orange-100",
    textColor: "text-orange-500"
  },
  {
    quote: "As a small retail shop, every dollar counts. Bitcoin for Jax set up our payment system with minimal hassle, and now we're saving 2.5% on every Bitcoin transaction compared to credit cards.",
    author: "Beach Surf Shop",
    location: "Jacksonville Beach",
    initials: "BS",
    bgColor: "bg-blue-100",
    textColor: "text-blue-500"
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-bitcoin-orange/80 z-0">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image
              src="/images/jax-skyline.png"
              alt="Jacksonville Skyline"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Bitcoin pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: "url('/images/bitcoin-pattern.png')",
              backgroundSize: '400px',
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="inline-block mb-6 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full"
            >
              Bitcoin Solutions for Jacksonville, Florida Businesses
            </motion.div>
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.1, duration: 0.6 }
                }
              }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Accept <span className="relative inline-block">
                Bitcoin
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-white/30 rounded-full"></span>
              </span> in Jacksonville
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 }
                }
              }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              Save on fees, get Lightning-fast payments, and grow your business with our easy Bitcoin payment solutions.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3, duration: 0.6 }
                }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#book-demo"
                className="btn-primary"
              >
                Book a Free Demo
              </Link>
              <Link 
                href="/services"
                className="btn-secondary"
              >
                View Services
              </Link>
            </motion.div>
          </div>
          
          {/* Floating stats cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card p-6 backdrop-blur-sm bg-white/90"
            >
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-bitcoin-orange/10 flex items-center justify-center mr-3">
                  <CurrencyDollarIcon className="h-6 w-6 text-bitcoin-orange" />
                </div>
                <h3 className="text-lg font-semibold">Save on Fees</h3>
              </div>
              <p className="text-gray-600">Avoid 2-3% card fees with Bitcoin payments, saving thousands annually.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="card p-6 backdrop-blur-sm bg-white/90"
            >
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-lightning-purple/10 flex items-center justify-center mr-3">
                  <BoltIcon className="h-6 w-6 text-lightning-purple" />
                </div>
                <h3 className="text-lg font-semibold">Lightning Fast</h3>
              </div>
              <p className="text-gray-600">Accept payments instantly with Lightning Network, no more waiting for settlements.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card p-6 backdrop-blur-sm bg-white/90"
            >
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-bitcoin-blue/10 flex items-center justify-center mr-3">
                  <UsersIcon className="h-6 w-6 text-bitcoin-blue" />
                </div>
                <h3 className="text-lg font-semibold">Grow Your Business</h3>
              </div>
              <p className="text-gray-600">Attract Jacksonville's tech-savvy crypto community to your business.</p>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center p-1">
              <motion.div 
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5 
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Why <span className="text-gradient">Bitcoin for Jax</span> Is Right For Your Business
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              We provide complete Bitcoin payment solutions tailored for Jacksonville businesses.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className={`h-12 w-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <div className={feature.textColor}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Getting started with Bitcoin payments is easy with our 4-step process
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="card p-6 text-center h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full bg-bitcoin-orange text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Free Consultation</h3>
                <p className="text-gray-600">We assess your business needs and recommend the right Bitcoin payment solution.</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="card p-6 text-center h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full bg-bitcoin-blue text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Custom Setup</h3>
                <p className="text-gray-600">We set up your Bitcoin node and integrate with your existing point-of-sale system.</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="card p-6 text-center h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full bg-lightning-purple text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Staff Training</h3>
                <p className="text-gray-600">We provide comprehensive training so your team feels confident accepting Bitcoin.</p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="card p-6 text-center h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full bg-bitcoin-orange text-white flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Ongoing Support</h3>
                <p className="text-gray-600">We provide regular maintenance and support to ensure everything runs smoothly.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl font-bold mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Choose the plan that's right for your Jacksonville business
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`card p-6 border ${plan.highlighted ? 'border-bitcoin-orange shadow-lg shadow-bitcoin-orange/10 scale-105 z-10' : 'border-gray-100'}`}
              >
                {plan.highlighted && (
                  <div className="bg-bitcoin-orange text-white text-xs uppercase font-bold tracking-wider py-1 px-3 rounded-full inline-block mb-3">Most Popular</div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-bitcoin-blue text-3xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-500 mb-4 text-sm">{plan.description}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-bitcoin-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className={`block text-center px-4 py-2 rounded-full font-medium transition-colors ${plan.highlighted ? 'bg-bitcoin-orange text-white hover:bg-bitcoin-orange/90' : 'bg-white text-bitcoin-blue border border-bitcoin-blue/20 hover:bg-gray-50'}`}>
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl font-bold mb-4"
            >
              Trusted by Jacksonville Businesses
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              See what our clients have to say about Bitcoin for Jax
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`h-12 w-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`${testimonial.textColor} font-bold`}>{testimonial.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.author}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-demo" className="py-24 bg-gradient-to-br from-bitcoin-blue to-primary">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Accept Bitcoin?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join Jacksonville's Bitcoin revolution. We'll help you set up everything – from full nodes to PoS integration.
            </p>
            <Link 
              href="/contact"
              className="btn-secondary bg-white text-bitcoin-blue hover:bg-white/90 border-0"
            >
              Schedule Your Free Demo
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 