import React from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
  artworks: Array<{ id: number; title: string }>
  currentArtwork: number
  onNavigate: (index: number) => void
}

export default function Navigation({ artworks, currentArtwork, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 p-4">
      <ul className="flex justify-center space-x-4">
        {artworks.map((artwork, index) => (
          <li key={artwork.id}>
            <motion.button
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentArtwork === index ? 'bg-white text-black' : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
              onClick={() => onNavigate(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {artwork.title}
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

