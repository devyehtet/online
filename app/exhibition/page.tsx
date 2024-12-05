'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Footer from '../components/Footer'

const artworks = [
  {
    id: 1,
    image: '/images/1.jpg',
    description: "Airstrikes don't just cause direct damage. But it also indirectly causes widespread damage. Such as people's way of life, houses, schools, livelihood areas, etc. It also has a mental impact and wounds of fear on people. This fear will continue to be spread if the airstrikes are not stopped.",
    imageOnRight: true
  },
  { id: 2, image: '/images/2.jpg' },
  { id: 3, image: '/images/3.jpg' },
  {
    id: 4,
    image: '/images/4.jpg',
    description: "Rebuilding Lives(2024)\nRuntime: 15 mins\nGenre: Short\nDocumentary Film",
    imageOnRight: false
  },
  { id: 5, image: '/images/5.jpg' },
  { id: 6, image: '/images/6.jpg' },
  { id: 7, image: '/images/7.jpg' },
  { id: 8, image: '/images/8.jpg' },
  {
    id: 9,
    image: '/images/9.jpg',
    description: "Rumble Bumble\nSetthasiri Chanjaradpong\n(ZonZon.Studio, tomorrow.lab)\n5 minutes\n\nFrom The Sky, To The Grave\nYoung Artist & Khang Thak\n8 minutes",
    imageOnRight: true
  },
  { id: 10, image: '/images/10.jpg' },
  { id: 11, image: '/images/11.jpg' },
  { id: 12, image: '/images/12.jpg' },
  { id: 13, image: '/images/13.jpg' },
  { id: 14, image: '/images/14.jpg' },
  { id: 15, image: '/images/15.jpg' },
  { id: 16, image: '/images/16.jpg' },
  { id: 17, image: '/images/17.jpg' },
  { id: 18, image: '/images/18.jpg' },
  { id: 19, image: '/images/19.jpg' },
  { id: 20, image: '/images/20.jpg' },
]

function ArtworkSection({ artwork }: { artwork: typeof artworks[0] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const ImageComponent = () => (
    <div className="w-full md:w-1/2 h-64 md:h-[calc(100vh-8rem)] relative">
      <Image
        src={artwork.image}
        alt={`Artwork ${artwork.id}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )

  const DescriptionComponent = () => (
    artwork.description ? (
      <div className="w-full md:w-1/2 md:px-8 mb-8 md:mb-0">
        <p className="text-base whitespace-pre-line">{artwork.description}</p>
      </div>
    ) : null
  )

  return (
    <motion.div ref={ref} style={{ opacity }} className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      {artwork.imageOnRight === false ? <DescriptionComponent /> : null}
      <ImageComponent />
      {artwork.imageOnRight === true ? <DescriptionComponent /> : null}
    </motion.div>
  )
}

export default function Exhibition() {
  return (
    <div className="relative w-full">
      {/* Artwork sections */}
      <div className="max-w-7xl mx-auto pb-20 md:pb-32">
        {artworks.map((artwork) => (
          <ArtworkSection key={artwork.id} artwork={artwork} />
        ))}
      </div>

      {/* Fixed footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  )
}

