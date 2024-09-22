'use client'

import { OrbitControls, Stars, Stats, Sparkles, Float } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import dynamic from "next/dynamic"
import { Physics } from "@react-three/cannon"
import { MutableRefObject } from 'react'

const Model = dynamic(() => import('./Model'), {
    ssr: false,
})

interface SceneProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

const Scene = ({ canvasRef }: SceneProps) => {
    return (
        <Canvas className="w-full h-full" ref={canvasRef}>
            <ambientLight intensity={0.6} color={"#dee2ff"} />
            <Physics gravity={[0, -9.8, 0]}>
                <Float speed={0.5}>
                    <Model />
                </Float>
                <OrbitControls
                    enableZoom={true}
                    autoRotate={true}
                    autoRotateSpeed={-0.1}
                    enablePan={true}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    zoomSpeed={0.15}
                    dampingFactor={0.05}
                />
                <Stats />
                <Stars
                    radius={300}
                    depth={100}
                    count={4000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={0.2}
                />
                <Sparkles
                    count={500}
                    size={3}
                    speed={0.02}
                    opacity={1}
                    scale={10}
                    color="#fff3b0"
                />
            </Physics>
        </Canvas>
    )
}

export default Scene
