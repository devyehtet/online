import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 min-h-[calc(100vh-6rem)]">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Online Exhibition</h1>
      <p className="text-xl mb-8">Explore our curated collection of contemporary artworks.</p>
      <Link href="/exhibition" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors">
        Enter Exhibition
      </Link>
    </div>
  )
}

