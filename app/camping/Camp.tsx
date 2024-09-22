import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { MutableRefObject, Suspense } from 'react'
import { EffectComposer,Bloom } from "@react-three/postprocessing"
import { UI } from "./UI"

interface CampProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

const Camp= ({ canvasRef }: CampProps)=>{
    return(
        <>
        <Canvas shadows camera={{position:[0,0,8], fov:42} }>
            <fog attach={"fog"} args={["#171720",10,30]}/>
            <Suspense>
                <Model/>
            </Suspense>
            <EffectComposer>
                <Bloom mipmapBlur intensity={0.5}/>

            </EffectComposer>
        </Canvas>
        <UI/>
        </> 
    )   
}

export default Camp