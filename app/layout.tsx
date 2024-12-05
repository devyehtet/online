import './globals.css'
import { Space_Mono } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Online Exhibition',
  description: 'An immersive online art exhibition experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <div className="min-h-screen bg-black flex flex-col">
          <nav className="sticky top-0 z-50 bg-black bg-opacity-90 p-4">
            <ul className="flex justify-center space-x-8">
              <li><Link href="/" className="text-white hover:text-yellow-400">Home</Link></li>
              <li><Link href="/exhibition" className="text-white hover:text-yellow-400">Exhibition</Link></li>
              <li><Link href="/support" className="text-white hover:text-yellow-400">Support</Link></li>
            </ul>
          </nav>
          
          <main className="flex-grow">
            {children}
          </main>

          <footer className="relative h-24 sm:h-32 md:h-40">
            <Image
              src="/images/Footer.jpg"
              alt="Footer image"
              layout="fill"
              objectFit="contain"
              priority
            />
          </footer>
        </div>
      </body>
    </html>
  )
}

