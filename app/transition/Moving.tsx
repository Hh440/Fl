
import { Canvas } from "@react-three/fiber";
import { MutableRefObject } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import { Overlay } from "./Overlay";
import { Suspense } from "react";

interface MovingProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}

const Moving =({ canvasRef }: MovingProps)=>{
    return(
        <>
        <Leva hidden/>
        <Overlay/>
        
       <Canvas shadows camera={{position:[0,0,5], fov:30}} >
        <OrbitControls/>
          <color attach="background" args={["#ececec"]}/>
          
          <Suspense>
            <Model/>
          </Suspense>

            
         
       </Canvas>
       </>
    )
}

export default Moving