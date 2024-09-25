'use client'

import { useRef } from "react"
import Ball from "../bouncing/Ball"


const ShowCase = ()=>{

    const canvasRef= useRef(null)
    return(
        <div className="w-full h-full bg-slate-900">
            <Ball canvasRef={canvasRef}/>
        </div>
    )
}

export default ShowCase