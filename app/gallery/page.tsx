"use client"

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

const animations = [
  { name: '3D Text', action: 'Scene' }, 
  { name: 'Camping Animation', action: 'Camp' }, 
  { name: 'Falling Ball', action: 'Ball' }
]

export default function GalleryPage() {
  const router = useRouter()

  const navigateToAnimation = (animation: string) => {
    router.push(`/gallery/${animation}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100 flex flex-col items-center">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-cyan-500 to-red-500 text-transparent bg-clip-text animate-pulse">
          3D Animation Gallery
        </h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Animation Selection */}
          <div className="w-full md:w-1/3 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h2 className="text-4xl font-semibold mb-6 text-gray-100 border-b border-gray-600 pb-4 tracking-wide">
                Choose Animation
              </h2>
              <div className="h-[500px] w-full rounded-md border border-gray-700 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 bg-gray-800 shadow-inner">
                {animations.map((animation) => (
                  <Button
                    key={animation.name}
                    onClick={() => navigateToAnimation(animation.action)}
                    className="w-full mb-4 py-3 bg-gradient-to-r from-zinc-600 via-cyan-600 to-stone-500 hover:from-gray-600 hover:to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {animation.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  )
}
