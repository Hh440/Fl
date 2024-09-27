
import { Canvas } from "@react-three/fiber";
import { MutableRefObject } from "react";
import Model from "./Model";

interface MovingProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}

const Moving =({ canvasRef }: MovingProps)=>{
    return(
       <Canvas shadows camera={{position:[0,0,5], fov:30}}>
          <color attach="background" args={["#ececec"]}/>

            <Model/>
         
       </Canvas>
    )
}

export default Moving