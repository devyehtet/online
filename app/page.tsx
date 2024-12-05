'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import VideoPlayer from './components/VideoPlayer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center mb-16">
        {/* Cover Image Container */}
        <div className="w-full max-w-4xl mx-auto mb-16 relative">
          <div className="relative w-full aspect-[3/1]">
            <Image
              src="/images/cover.jpg"
              alt="Exhibition Cover"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="flex flex-col items-center text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-mono mb-6">
            Welcome to Our Online Exhibition
          </h1>
          <p className="text-xl md:text-2xl font-mono mb-12">
            Explore our curated collection of contemporary artworks.
          </p>
          <Link 
            href="/exhibition" 
            className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-mono hover:bg-yellow-300 transition-colors"
          >
            Enter Exhibition
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row items-stretch">
        {/* Left side poster */}
        <div className="w-full md:w-1/2 relative">
          <div className="sticky top-0 h-screen">
            <Image
              src="/images/poster-1.jpg"
              alt="When We See The Planes Poster"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side description */}
        <div className="w-full md:w-1/2 p-8 md:p-16 font-mono flex flex-col justify-center space-y-8">
          <h2 className="text-3xl font-bold">WHEN WE SEE THE PLANES</h2>
          
          <p className="text-lg leading-relaxed">
            It normally is an exciting experience, for young or old. To witness these man-made contraptions flying in the sky is wondrous, and to appreciate human creativity.
          </p>
          
          <p className="text-lg leading-relaxed">
            But for the people of Myanmar, every time they see the planes They see those parts of the country now facing airstrikes by the military regime against civilian targets, every time they hear the planes, they hear the cries of the many forced to flee their homes and hide from the bombs -
          </p>
          
          <p className="text-lg leading-relaxed">
            It is the images of local communities, people, children, brutalized and destroyed, that are the civilians forced
          </p>
        </div>
      </div>

      {/* New Section with Video and Description */}
      <motion.div 
        className="w-full min-h-screen flex flex-col items-center justify-center p-8 md:p-16"
        style={{ opacity }}
      >
        <div className="max-w-4xl w-full space-y-8">
          <h2 className="text-3xl font-bold font-mono text-center">The Impact of Airstrikes</h2>
          
          <p className="text-lg leading-relaxed font-mono text-center">
            After the coup, the military regime has deliberately and repeatedly targeted civilians with air strikes, in violation with the laws of war.
            From February 2021 to December 2023, there were 1625 airstrikes, meaning an uninterrupted string of daily airstrikes on civilian targets.
          </p>

          <div className="mt-8">
            <VideoPlayer videoUrl="https://drive.google.com/file/d/1VlRGovZp1pdcOmFp7HMCOltPa0Rg27f8/view" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

