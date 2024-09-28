
import { Canvas } from "@react-three/fiber";
import { MutableRefObject } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import { Overlay } from "./Overlay";

interface MovingProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}

const Moving =({ canvasRef }: MovingProps)=>{
    return(
        <>
        <Leva hidden/>
        <Overlay/>
        
       <Canvas shadows camera={{position:[2,1,-5], fov:75}}>
        <OrbitControls/>
          <color attach="background" args={["#ececec"]}/>

            <Model/>
         
       </Canvas>
       </>
    )
}

export default Moving