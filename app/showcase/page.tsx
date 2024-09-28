'use client'

import { useRef } from "react"
import Moving from "../transition/Moving"
import Ball from "../bouncing/Ball"


const ShowCase = ()=>{

    const canvasRef= useRef(null)
    return(
        <div className="w-full h-full">
           <Moving canvasRef={canvasRef}/>
        </div>
    )
}

export default ShowCase