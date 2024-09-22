import { CameraControls, Environment, MeshReflectorMaterial, RenderTexture, Text ,Float} from "@react-three/drei"

import {Camping} from './Camping'
import { degToRad } from "three/src/math/MathUtils.js"
import { useEffect, useRef } from "react"
import { CameraControls as DreiCameraControls } from "@react-three/drei"; 


const Model = ()=>{
    const controls= useRef<DreiCameraControls>(null)

    const intro = async()=>{
        if(controls.current){
            controls.current.dolly(-22)
            controls.current.smoothTime=1.6
            controls.current.dolly(21 ,true)
        }
    }

    useEffect(()=>{
        intro() 

    },[])
    return(
        <>
        <CameraControls ref={controls}/>
        <Text
        font={"/font/Poppins-Black.ttf"}
        position-x={-2.3}
        position-y={-0.5}
        position-z={1.8}
        lineHeight={0.9}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
        
        >
            MY LITTLE {"\n"} CAMPING

            <meshBasicMaterial color="white">
                 <RenderTexture attach={"map"}>
                    <color attach="background" args={["#fff"]}/>

                    <Float floatIntensity={4} rotationIntensity={5}>
                    <Camping scale={1.6}
                    rotation-y={degToRad(-25)}
                    rotation-x={degToRad(40)}
                    position-y={-0.5}
                    
                    />

                    </Float>
                    <Environment preset="sunset"/>

                 </RenderTexture>
            </meshBasicMaterial>
        </Text>
        <group>
            <Camping scale={0.9} rotation-y={degToRad(-25)} position-x={3}/>
        </group>
        <mesh position-y={-0.48} rotation-x={-Math.PI/2}>
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
        <Environment preset="sunset"/>
        </>
    )
}

export default Model