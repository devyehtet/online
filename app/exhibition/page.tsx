'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion'
import Footer from '../components/Footer'

const artworks = [
  {
    id: 1,
    image: '/images/1.jpg',
    description: "Airstrikes don't just cause direct damage. But it also indirectly causes widespread damage. Such as people's way of life, houses, schools, livelihood areas, etc. It also has a mental impact and wounds of fear on people. This fear will continue to be spread if the airstrikes are not stopped.",
  },
  { id: 2, image: '/images/2.jpg' },
  { id: 3, image: '/images/3.jpg' },
  {
    id: 4,
    image: '/images/4.jpg',
    description: "Rebuilding Lives(2024)\nRuntime: 15 mins\nGenre: Short\nDocumentary Film",
  },
  { id: 5, image: '/images/5.jpg' },
  { id: 6, image: '/images/6.jpg' },
  { id: 7, image: '/images/7.jpg' },
  { id: 8, image: '/images/8.jpg' },
  {
    id: 9,
    image: '/images/9.jpg',
    description: "Rumble Bumble\nSetthasiri Chanjaradpong\n(ZonZon.Studio, tomorrow.lab)\n5 minutes\n\nFrom The Sky, To The Grave\nYoung Artist & Khang Thak\n8 minutes",
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
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div 
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center p-4 snap-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Image
          src={artwork.image}
          alt={`Artwork ${artwork.id}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0"
          animate={{ opacity: isHovered ? 0.7 : 0 }}
        />
        {artwork.description && (
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-sm md:text-base whitespace-pre-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {artwork.description}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <motion.div
          className="absolute inset-0 border-4 border-white opacity-0"
          animate={{ 
            opacity: isInView ? [0, 1, 0] : 0,
            scale: isInView ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 1.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 2 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Exhibition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 })
  const backgroundOpacity = useTransform(smoothProgress, [0, 1], [0.1, 0.3])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.style.scrollSnapType = 'y mandatory'
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"
        style={{ opacity: backgroundOpacity }}
      />
      <div 
        ref={containerRef}
        className="h-full overflow-y-auto"
      >
        {artworks.map((artwork) => (
          <ArtworkSection key={artwork.id} artwork={artwork} />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  )
}

