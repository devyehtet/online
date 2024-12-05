import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="container mx-auto px-4 py-6">
        <div className="relative w-full h-20 md:h-32">
          <Image
            src="/images/Footer.jpg"
            alt="Footer image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </footer>
  )
}

