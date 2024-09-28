import {
    AccumulativeShadows,
    Environment,
    Lightformer,
    OrbitControls,
    PerspectiveCamera,
    RandomizedLight,
    Sphere,
    useGLTF,
  } from "@react-three/drei";
  
  import * as THREE from "three";
  import React, { useEffect } from "react";

  import { DEG2RAD } from "three/src/math/MathUtils.js";
  
  // Define types for props
  interface SceneProps {
    mainColor: string;
    path: string;
    [key: string]: any;
  }
  
  export const Scene: React.FC<SceneProps> = ({ mainColor, path, ...props }) => {
    const { nodes, materials, scene } = useGLTF(path) as any;
  
    useEffect(() => {
      if (scene) {
        scene.traverse((child:any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
      }
    }, [scene]);
  
    const ratioScale = Math.min(1.2, Math.max(0.5, window.innerWidth / 1920));
  
    return (
      <>
        <color attach="background" args={["#ffffff"]} />
        <group {...props} dispose={null}>
          <PerspectiveCamera makeDefault position={[3, 3, 8]} near={0.5} />
          <OrbitControls
            
          />
          <primitive object={scene} scale={ratioScale} />
          <ambientLight intensity={0.1} color="pink" />
          <AccumulativeShadows
            frames={100}
            alphaTest={0.9}
            scale={30}
            position={[0, -0.005, 0]}
            color="pink"
            opacity={0.8}
          >
            <RandomizedLight
              amount={4}
              radius={9}
              intensity={0.8}
              ambient={0.25}
              position={[10, 5, 15]}
            />
            <RandomizedLight
              amount={4}
              radius={5}
              intensity={0.5}
              position={[-5, 5, 15]}
              bias={0.001}
            />
          </AccumulativeShadows>
          <Environment blur={0.8} background>
            <Sphere scale={15}>
              <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
            </Sphere>
            <Lightformer
              position={[5, 0, -5]}
              form="rect"
              intensity={1}
              color="red"
              scale={[3, 5,1]}
              target={[0, 0, 0]}
              visible={false}
            />
            <Lightformer
              position={[-5, 0, 1]}
              form="circle"
              intensity={1}
              color="green"
              scale={[2, 5,0]}
              target={[0, 0, 0]}
              visible={false}
            />
            <Lightformer
              position={[0, 5, -2]}
              form="ring"
              intensity={0.5}
              color="orange"
              scale={[10, 5,1]}
              target={[0, 0, 0]}
              visible={false}
            />
            <Lightformer
              position={[0, 0, 5]}
              form="rect"
              intensity={1}
              color="purple"
              scale={[10, 5,1]}
              target={[0, 0, 0]}
              visible={false}
            />
          </Environment>
        </group>
      </>
    );
  };
  
  // Preload models
  useGLTF.preload("/models/cybertruck_scene.glb");
  useGLTF.preload("/models/model3_scene.glb");
  useGLTF.preload("/models/semi_scene.glb");
  