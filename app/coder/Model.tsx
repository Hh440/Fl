import { useAnimations, useGLTF} from "@react-three/drei"
import { useEffect, useRef } from "react"

import * as THREE from "three"


const Model =()=>{
    
    const ref= useRef<THREE.Group>(null)
    const {nodes,animations,scene}= useGLTF('models/bot.glb')
    console.log(nodes)
  
    const {actions}= useAnimations(animations,ref)
    

    useEffect(() => {
        if (actions) {
    
         
          const defaultAction = actions["Hey!"];
          if (defaultAction) {
            defaultAction.reset().play();
          } else {
           
            Object.values(actions).forEach((action) => {
              action?.reset().play();
            });
          }
        }
      }, [actions]);

    
    
    return(
        <group ref={ref}>
            <mesh position-y={-6} rotation-y ={1.6}>
            <primitive object={scene} />
            
            </mesh>
            
            

        </group>
    )
}

export default Model