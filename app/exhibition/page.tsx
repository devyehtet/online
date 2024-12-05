'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const artworks = [
  {
    id: 1,
    title: 'Artwork Title 1',
    artist: 'Artist Name 1',
    year: '2023',
    medium: 'Oil on canvas',
    image: '/images/001.jpg',
    description: 'A detailed description of the first artwork. This text can span multiple lines and provide context about the piece, its creation, and its significance. The artist\'s intention and the emotions evoked by the piece can be explored here.'
  },
  {
    id: 2,
    title: 'Artwork Title 2',
    artist: 'Artist Name 2',
    year: '2022',
    medium: 'Digital illustration',
    image: '/images/002.jpg',
    description: 'A comprehensive explanation of the second artwork. This description delves into the techniques used, the historical context, and the impact of the piece on the art world. It can also include quotes from the artist or critics.'
  },
  {
    id: 3,
    title: 'Artwork Title 3',
    artist: 'Artist Name 3',
    year: '2021',
    medium: 'Mixed media',
    image: '/images/003.jpg',
    description: 'An in-depth analysis of the third artwork. This text explores the symbolism within the piece, its place in the artist\'s body of work, and its relevance to contemporary issues. The description can also touch on the public\'s reception of the artwork.'
  },
]

function ArtworkSection({ artwork }: { artwork: typeof artworks[0] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ opacity }} className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-2">{artwork.title}</h2>
        <h3 className="text-xl mb-4">{artwork.artist}</h3>
        <p className="text-sm mb-2">{artwork.year}</p>
        <p className="text-sm mb-4">{artwork.medium}</p>
        <p className="text-base">{artwork.description}</p>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-[calc(100vh-8rem)] relative">
        <Image
          src={artwork.image}
          alt={artwork.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </motion.div>
  )
}

export default function Exhibition() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {artworks.map((artwork) => (
        <ArtworkSection key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}

