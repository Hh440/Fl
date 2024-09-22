"use client"

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import Scene from '../component/Scene' // Importing animations from scene.tsx
// Importing animations from landing.tsx

// Sample 3D animations
const animations = [
  { name: 'Animation 1', action: 'sceneAnimation' }, // This will load from scene.tsx
  { name: 'Animation 2', action: 'landingAnimation' }, // This will load from landing.tsx
]

export default function GalleryPage() {
  const [activeAnimation, setActiveAnimation] = useState(null)
  const canvasRef = useRef(null)

  const loadAndPlayAnimation = (animationAction) => {
    setActiveAnimation(animationAction)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          3D Animation Gallery
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Animation Selection */}
          <div className="w-full md:w-1/3 bg-gray-900 border border-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-6 text-gray-100 border-b border-gray-600 pb-2">
                Animations
              </h2>
              <div className="h-[500px] w-full rounded-md border border-gray-700 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {animations.map((animation) => (
                  <Button
                    key={animation.name}
                    onClick={() => loadAndPlayAnimation(animation.action)}
                    className="w-full mb-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-purple-600 text-gray-100 font-semibold py-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                  >
                    {animation.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Animation Display */}
          <div className="w-full md:w-2/3 bg-gray-900 border border-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-6 text-gray-100 border-b border-gray-600 pb-2">
                {activeAnimation || "Select an animation"}
              </h2>
              <div className="w-full aspect-square bg-black rounded-lg overflow-hidden border border-gray-700 relative shadow-lg">
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
                {/* Conditionally render animations based on the selected button */}
                {activeAnimation === 'sceneAnimation' && <Scene canvasRef={canvasRef} />}
                {/* activeAnimation === 'landingAnimation' && <Landing canvasRef={canvasRef} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
