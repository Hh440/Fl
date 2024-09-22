import { CameraControls, Environment, MeshReflectorMaterial, RenderTexture, Text ,Float, useFont} from "@react-three/drei"

import {Camping} from './Camping'
import { degToRad ,lerp} from "three/src/math/MathUtils.js"
import { useEffect, useRef } from "react"
import { CameraControls as DreiCameraControls } from "@react-three/drei"; 
import { Color, Mesh, MeshBasicMaterial } from "three";
import { useAtom } from "jotai";
import { currentPageAtom } from "./UI";
import { useFrame } from "@react-three/fiber";


const bloomColor= new Color("#fff")
bloomColor.multiplyScalar(1.2)

const Model = ()=>{
    const controls= useRef<DreiCameraControls>(null)
    const meshFitCameraHome= useRef<Mesh>(null)
    const [currentPage,setCurrentPage]= useAtom(currentPageAtom)
    const meshFitCameraStore = useRef<Mesh>(null);
    const textMaterial = useRef<MeshBasicMaterial|null>(null);


    useFrame((_, delta) => {
        if(textMaterial.current){
        textMaterial.current.opacity = lerp(
          textMaterial.current.opacity,
          currentPage === "home" || currentPage === "intro" ? 1 : 0,
          delta * 1.5
        );
    }
      });

      
  

    const intro = async()=>{
        if(controls.current){
            controls.current.dolly(-22)
            controls.current.smoothTime=1.6
            setTimeout(()=>{
                setCurrentPage("Home")
            },1200)
            fitCamera()
        }
    }

    const fitCamera = async () => {

        if(controls.current && meshFitCameraHome.current && meshFitCameraStore.current){
        if (currentPage === "store") {
          controls.current.smoothTime = 0.8;
          controls.current.fitToBox(meshFitCameraStore.current, true);
        } else {
          controls.current.smoothTime = 1.6;
          controls.current.fitToBox(meshFitCameraHome.current, true);
        }

    }
      };

    useEffect(()=>{
        intro() 

    },[])

    useEffect(()=>{

        window.addEventListener("resize",fitCamera)
        return ()=>window.removeEventListener("resize",fitCamera)

    },[currentPage])
    return(
        <>
        <CameraControls ref={controls}/>
        <mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
            <boxGeometry args={[10,2,2]}/>
            <meshBasicMaterial color="orange" transparent opacity={0.5}/>
        </mesh>
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

            <meshBasicMaterial color={bloomColor} toneMapped={false}>
                 <RenderTexture attach={"map"}>
                    <color attach="background" args={["#fff"]}/>

                    <Float floatIntensity={4} rotationIntensity={5}>
                    <Camping scale={1.6} html
                    rotation-y={-degToRad(25)}
                    rotation-x={degToRad(40)}
                    position-y={-0.5}
                    
                    />

                    </Float>
                    <Environment preset="sunset"/>

                 </RenderTexture>
            </meshBasicMaterial>
        </Text>
        <group>
            <Camping scale={0.9} html rotation-y={degToRad(-25)} position-x={3}/>
            <mesh ref={meshFitCameraStore} position-x={2.5} visible={false}>
            <boxGeometry args={[3, 1, 2]} />
            <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
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

useFont.preload("/font/Poppins-Black.ttf")