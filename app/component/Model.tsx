'use client'


import { Text3D,Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from'three'
  
  

const Model = ()=>{
    const ref= useRef<THREE.Group>(null)

    useFrame(()=>{
        if(ref.current){
            ref.current.rotation.x+=0.02
        }
    })
    return(
        <group ref={ref}>
            <Text3D
            font={'/Regular.json'}
            scale={[1,1,1]}
            position={[-2,-1,0]}
            rotation={[2,0,0]}
            
           
              
            
            
            
            >
                Hello
                <meshStandardMaterial color={"blue"} />
                

            </Text3D>

        </group>
    )
}

export default Model