import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { MutableRefObject, Suspense } from 'react'
import { Environment, OrbitControls } from "@react-three/drei"

interface BallProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

const Ball = ({ canvasRef }: BallProps)=>{
    return(
        <>
        <Canvas>
            <Suspense>
            <Model/>
            </Suspense>
            <ambientLight/>
            <OrbitControls/>
            

        </Canvas>

        </>
    )
}

export default Ball