'use client'

import React from 'react';
import { motion } from 'framer-motion';
import TechnologyLogos from '../components/TechnologyLogos';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  const services = [
    {
      name: "Minimal Plan",
      price: "$540",
      description: "On-Chain Payments via Voltage.cloud or Client PC BTCPay",
      features: [
        "Voltage.cloud free tier or client PC setup",
        "No hosting fees (client cost: $0)",
        "Standalone Bitcoin payment system",
        "30 minute training session",
        "Setup documentation and guides"
      ]
    },
    {
      name: "Basic Plan",
      price: "$1,080",
      description: "On-chain payments via LunaNode-hosted BTCPay Server",
      features: [
        "LunaNode-hosted BTCPay Server (~$15.80/month included)",
        "No node required, wallet-based",
        "Basic PoS or custom shop",
        "30-45 minute training session",
        "Setup documentation and guides"
      ]
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
      ]
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
      ]
    }
  ];

  const additionalServices = [
    {
      name: "Tablet Options",
      price: "$200-500",
      description: "Samsung Galaxy Tab A9 or iPad options for clients without compatible devices"
    },
    {
      name: "Additional Monthly Support",
      price: "$50/month",
      description: "Updates, PoS/Lightning troubleshooting"
    }
  ];

  // Point of Sale integration data
  const posIntegrations = [
    {
      name: 'Square',
      logo: '/images/logos/square-logo.png',
      description: 'BTCPay app or QR workaround'
    },
    {
      name: 'Shopify',
      logo: '/images/logos/shopify-logo.png',
      description: 'Direct plugin integration'
    },
    {
      name: 'Clover',
      logo: '/images/logos/clover-logo.png',
      description: 'BTCPay app or QR workaround'
    },
    {
      name: 'Toast',
      logo: '/images/logos/toast-logo.png',
      description: 'BTCPay app or QR workaround'
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-bitcoin-blue to-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Bitcoin Payment Solutions
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90"
            >
              From on-chain payments to full nodes with Lightning, we have a solution for every Jacksonville business
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer four comprehensive Bitcoin payment solutions tailored to the needs of Jacksonville, Florida businesses, from simple on-chain payments to full nodes with Lightning capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-bitcoin-blue p-6">
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <p className="text-3xl font-bold mt-2 text-bitcoin-orange">{service.price}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex"
              >
                <div className="bg-bitcoin-orange w-2 flex-shrink-0"></div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-2xl font-bold mt-2 text-bitcoin-blue">{service.price}</p>
                  <p className="text-gray-600 mt-4">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PoS Integration section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Point of Sale Integration</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We seamlessly integrate Bitcoin payments with your existing point of sale system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posIntegrations.map((pos, index) => (
              <motion.div
                key={pos.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="w-[100px] h-[50px] relative">
                    <Image 
                      src={pos.logo}
                      alt={`${pos.name} logo`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{pos.name}</h3>
                <p className="text-gray-600 text-sm">
                  {pos.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-white p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-4">No Compatible Device?</h3>
            <p className="text-gray-600 mb-6">
              We offer Samsung Galaxy Tab A9 ($200) or iPad options (up to $500) pre-configured with the BTCPay PoS app
            </p>
            <Link href="/demo" className="bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white font-bold py-3 px-6 rounded-lg transition inline-block">
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology Logos section */}
      <TechnologyLogos />
    </main>
  );
} 