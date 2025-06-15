'use client'

import React from 'react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

interface ClientPageProps {
  children: React.ReactNode
}

export default function ClientPage({ children }: ClientPageProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {children}
    </motion.div>
  )
} 