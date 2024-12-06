'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isEyeOpen, setIsEyeOpen] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleEye = () => {
    setIsEyeOpen((prev) => !prev)
  }

  useEffect(() => {
    if (!isEyeOpen) {
      const timer = setTimeout(() => {
        router.push('/exhibition')
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isEyeOpen, router])

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full relative"
          >
            {/* First Slide: Hero Section with GIF */}
            <div className="w-full h-screen flex items-center justify-center">
              <motion.div 
                className="w-full max-w-[1200px] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleEye}
              >
                <Image
                  src="/images/eye.gif"
                  alt="Interactive Eye"
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>

            {/* Second Slide: Full Poster Image and Description */}
            <div className="w-full h-screen flex items-center justify-center relative">
              <div className="w-full h-full flex">
                {/* Left side - Full Poster */}
                <div className="w-1/2 relative">
                  <Image
                    src="/images/poster-02.png"
                    alt="Exhibition Poster"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'left' }}
                    priority
                  />
                </div>

                {/* Right side - Description */}
                <div className="w-1/2 flex items-center justify-center overflow-y-auto">
                  <div className="h-full flex flex-col items-center justify-center px-16">
                    <div className="space-y-20 max-w-2xl right-3">
                      <motion.p 
                        className="text-[1.05rem] right-3 leading-relaxed font-mono text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        It normally is an exciting experience, for young or old. To witness these man-made contraptions flying in the sky is wondrous, and to appreciate human creativity.
                      </motion.p>

                      <motion.p 
                        className="text-[1.05rem] right-3 leading-relaxed font-mono text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        But for the people of Myanmar, every time they see the planes They see those parts of the country now facing airstrikes by the military regime against civilian targets, every time they hear the planes, they hear the cries of the many forced to flee their homes and hide from the bombs -
                      </motion.p>

                      <motion.p 
                        className="text-[1.05rem] right-3 leading-relaxed font-mono text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        It is the images of local communities, people, children, brutalized and destroyed, that are the civilians forced.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Text */}
              <motion.div 
                className="absolute right-3 top-0 bottom-0 w-24 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-yellow-400 text-[1.5rem] tracking-[0.25em] whitespace-nowrap font-mono transform rotate-90 origin-center">
                  WHEN WE SEE THE PLANES
                </h2>
              </motion.div>
            </div>

            {/* Third Slide: Impact Section */}
            <div className="w-full h-screen relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/bg-2.png"
                  alt="Background"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              {/* Overlaid Content */}
              <div className="absolute inset-0">
                <Image
                  src="/images/page-03.png"
                  alt="Impact of Airstrikes"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-16 py-24">
                <motion.div 
                  className="max-w-4xl space-y-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-[2.5rem] font-bold text-blue-600 font-mono mb-8">
                    THE IMPACT OF AIRSTRIKES
                  </h2>
                  
                  <p className="text-[1.35rem] leading-relaxed font-mono text-black">
                    After the coup, the military regime has deliberately and repeatedly targeted civilians with air strikes, in violation with the laws of war. From February 2021 to December 2023, there were 1625 airstrikes, meaning an uninterrupted string of daily airstrikes on civilian targets.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

