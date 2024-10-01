;import { Canvas } from "@react-three/fiber";
import { MutableRefObject, Suspense } from "react";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

interface SceneProps {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}

const Scene =({ canvasRef }:SceneProps)=>{
    return(
        <Canvas shadows camera={{position:[0,0,20], fov:75}} gl={{antialias:true}}>
            <color attach="background" args={["black"]}/>
            <OrbitControls/>
            <ambientLight intensity={1}/>
            <Suspense>
                <Model/>
            </Suspense>
            <Environment preset="park"/>
            
        </Canvas>
    )

}


export default Scene