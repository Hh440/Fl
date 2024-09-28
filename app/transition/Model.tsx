import { CameraControls, Environment, Grid, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { view } from "framer-motion/client"
import { stat } from "fs"
import { useControls } from "leva"
import { useAtom } from "jotai"
import { useRef } from "react"



const CameraHandler = ({slideDistance}:any)=>{
    const viewport = useThree((state)=>state.viewport)
    const cameraControls= useRef<CameraControls>(null)
  
    const lastSlide = useRef(0)

    const {dollyDistance}= useControls({
        dollyDistance: {
            value: 10,
            min:0,
            max:50
        }
    })

    const moveToSlide = async()=>{
        if(cameraControls.current){
            await cameraControls.current.setLookAt(
                lastSlide.current*(viewport.width+slideDistance),
                3,
                dollyDistance,
                lastSlide.current*(viewport.width+slideDistance),
                0,
                0,
                true
            )


            /*await cameraControls.current.setLookAt(
              //  (slide+1)*(viewport.width+slideDistance),
                1,
                dollyDistance,
                slide*(viewport.width+slideDistance),
                0,
                0,
                true
            )

            await cameraControls.current.setLookAt(
                slide * (viewport.width + slideDistance),
                0,
                5,
                slide * (viewport.width + slideDistance),
                0,
                0,
                true
            )

            */



        }

    }

    return(
        <CameraControls
        ref={cameraControls}
        
        />
    )

    
}




const Model = ()=>{

    const viewport = useThree((state)=>state.viewport)
    return(

        <>
            <OrbitControls/>
            <ambientLight  intensity={0.2}/>
            <Environment preset="city"/>

            <group>
                <mesh position-y={viewport.height/2+1.5}>
                  <sphereGeometry args={[1,32,32]}/>
                  <MeshDistortMaterial color="puprle" speed={3}/>

                </mesh>
            </group>
            <Grid
            position-y={-viewport.height/2}
            sectionSize={1}
            sectionColor="blue"
            cellThickness={0.6}
            cellColor={"#6f6f6f"}
            infiniteGrid
            fadeDistance={50}
            fadeStrength={5}
            
            />  

           

        </>
    )
}

export default Model