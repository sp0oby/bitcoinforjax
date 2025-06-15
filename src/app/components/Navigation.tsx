'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Disclosure as="nav" className="bg-white shadow-md fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Bitcoin for Jax"
                    width={150}
                    height={40}
                    className="h-10 w-auto"
                    style={{ height: 'auto' }}
                    priority
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-bitcoin-blue"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/demo"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-bitcoin-orange hover:bg-bitcoin-orange/90"
                >
                  Book Demo
                </Link>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-bitcoin-blue"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="mt-4 px-4">
                <Link
                  href="/demo"
                  className="block w-full px-4 py-2 text-center font-medium text-white bg-bitcoin-orange hover:bg-bitcoin-orange/90 rounded-lg"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 