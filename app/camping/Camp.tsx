import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { MutableRefObject } from 'react'

interface CampProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

const Camp= ({ canvasRef }: CampProps)=>{
    return(
        <Canvas shadows camera={{position:[0,0,8], fov:42} }>
            <fog attach={"fog"} args={["#171720",10,30]}/>
            <Model/>
        </Canvas>
    )
}

export default Camp