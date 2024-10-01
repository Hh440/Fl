'use client'

import { useRef } from "react"

import Scene from "../coder/Scene"


const ShowCase = ()=>{

    const canvasRef= useRef(null)
    return(
        <div className="w-full h-full">
           <Scene canvasRef={canvasRef}/>
        </div>
    )
}

export default ShowCase