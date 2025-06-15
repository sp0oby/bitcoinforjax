'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPostProps {
  title: string
  excerpt: string
  slug: string
  date: string
  readTime: string
  image: string
  category: string
}

export default function BlogPost({
  title,
  excerpt,
  slug,
  date,
  readTime,
  image,
  category
}: BlogPostProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <time dateTime={date}>{date}</time>
            <span className="mx-2">•</span>
            <span>{readTime} read</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2">
            {excerpt}
          </p>
          <div className="mt-4">
            <span className="text-blue-600 font-medium hover:text-blue-700">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
} 