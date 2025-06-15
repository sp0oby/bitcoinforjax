'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheckIcon, CubeIcon, ArrowTrendingUpIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function About() {
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
              About Bitcoin for Jax
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90"
            >
              We're on a mission to empower Jacksonville businesses with the future of finance
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Bitcoin for Jax was founded with a simple goal: to help Jacksonville businesses thrive by embracing cryptocurrency payments. We believe that Bitcoin offers incredible advantages for local merchants - from reduced fees to faster settlements and access to a growing customer base.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our team combines expertise in Bitcoin technology, point-of-sale systems, and local business knowledge to create tailored solutions that work for Jacksonville entrepreneurs.
              </p>
              <p className="text-gray-600 text-lg">
                We handle all the technical complexity so you can focus on what you do best - running your business and serving your customers.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/mission.png"
                alt="Bitcoin for Jax Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Bitcoin section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Why Bitcoin Matters</h2>
            <p className="text-gray-600 text-lg">
              Bitcoin is more than just a new payment method - it's a revolutionary technology that's changing how money works around the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <div className="h-12 w-12 rounded-lg bg-bitcoin-orange/10 flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-bitcoin-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Control</h3>
              <p className="text-gray-600">
                Bitcoin gives you complete control over your money with robust security that prevents fraud and chargebacks.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <div className="h-12 w-12 rounded-lg bg-bitcoin-blue/10 flex items-center justify-center mb-4">
                <CubeIcon className="h-6 w-6 text-bitcoin-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Borderless Payments</h3>
              <p className="text-gray-600">
                Accept payments from anywhere in the world without currency conversion fees or international restrictions.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="card p-6"
            >
              <div className="h-12 w-12 rounded-lg bg-lightning-purple/10 flex items-center justify-center mb-4">
                <ArrowTrendingUpIcon className="h-6 w-6 text-lightning-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growing Adoption</h3>
              <p className="text-gray-600">
                Join the rapidly expanding network of businesses and customers embracing cryptocurrency worldwide.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="card p-6"
            >
              <div className="h-12 w-12 rounded-lg bg-bitcoin-orange/10 flex items-center justify-center mb-4">
                <BuildingLibraryIcon className="h-6 w-6 text-bitcoin-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Government Support</h3>
              <p className="text-gray-600">
                The U.S. is increasingly supporting crypto innovation with clear regulations and financial inclusion initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600 text-lg">
              We're a dedicated group of Bitcoin enthusiasts and payment technology specialists based right here in Jacksonville.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="card p-6 text-center"
            >
              <div className="h-32 w-32 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200">
                <Image
                  src="/images/team-1.png"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Brandon McCall</h3>
              <p className="text-gray-500 mb-4">Founder & Bitcoin Specialist</p>
              <p className="text-gray-600">
                Bitcoin enthusiast since 2013 with expertise in node setup and Lightning Network configurations.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="card p-6 text-center"
            >
              <div className="h-32 w-32 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200">
                <Image
                  src="/images/team-2.png"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jessica Taylor</h3>
              <p className="text-gray-500 mb-4">Point-of-Sale Integration Expert</p>
              <p className="text-gray-600">
                10+ years experience integrating payment systems with retail and restaurant point-of-sale solutions.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="card p-6 text-center"
            >
              <div className="h-32 w-32 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200">
                <Image
                  src="/images/team-3.png"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Cameryn Richardson</h3>
              <p className="text-gray-500 mb-4">Customer Support & Training</p>
              <p className="text-gray-600">
                Specializes in staff training and ongoing technical support for Bitcoin payment systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-bitcoin-orange to-bitcoin-orange/80">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join the growing number of Jacksonville businesses accepting Bitcoin payments.
            </p>
            <Link 
              href="/contact"
              className="btn-secondary bg-white text-bitcoin-orange hover:bg-white/90 border-0"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 