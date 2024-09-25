import { MeshReflectorMaterial, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from 'three'


const Model = ()=>{
    const groupref= useRef<THREE.Group>(null)
    const sphereref  = useRef<THREE.Mesh>(null)

    const[jumpHeight,setJumpHeight]= useState(0)
    const speed=0.005

    useFrame(()=>{
        if(sphereref.current){
            setJumpHeight(prev=>prev+speed)

            sphereref.current.position.y=Math.abs(Math.sin(jumpHeight))*2

        }

    })

    
    return(
        <group ref={groupref}>
            
            <mesh ref={sphereref} scale={[1,1,1]}>
                <sphereGeometry  args={[2]}/>
                <meshStandardMaterial color="orange" />
            </mesh>
            <mesh position-y={-1.5} rotation-x={-Math.PI/2} >
                <planeGeometry args={[100,100]}/>
                <MeshReflectorMaterial
                blur={[100, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={10}
                roughness={1}
                depthScale={1}
                opacity={0.5}
                transparent
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#333"
                metalness={0.5}
                mirror={1}
                />
            </mesh>

        </group>
    )
}

export default Model