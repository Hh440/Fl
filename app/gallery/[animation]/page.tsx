"use client"

import Camp from '@/app/camping/Camp'
import Scene from '@/app/component/Scene'
import Ball from '@/app/bouncing/Ball'
import { useRef } from 'react'

export default function AnimationPage({ params }: { params: { animation: string } }) {
  const { animation } = params
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <div className="h-full bg-gradient-to-b from-gray-900 via-black to-gray-800 text-gray-100 flex flex-col">
      {/* Header */}
      <div className="py-8">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 via-cyan-500 to-red-500 text-transparent bg-clip-text">
          Animation Display
        </h1>
        <h2 className="text-3xl font-semibold mt-4 text-center text-gray-100">
          {animation === 'Scene' && '3D Text Animation'}
          {animation === 'Camp' && 'Camping Animation'}
          {animation === 'Ball' && 'Falling Ball Animation'}
        </h2>
      </div>

      {/* Animation Display */}
      <div className="flex-grow w-full min-h-screen relative">
        {animation === 'Scene' && <Scene canvasRef={canvasRef} />}
        {animation === 'Camp' && <Camp canvasRef={canvasRef} />}
        {animation === 'Ball' && <Ball canvasRef={canvasRef} />}
      </div>
    </div>
  )
}
