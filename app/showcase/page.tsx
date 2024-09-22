'use client'

import { useRef } from "react"
import Camp from "../camping/Camp"


const ShowCase = ()=>{

    const canvasRef= useRef(null)
    return(
        <div className="w-full h-full bg-slate-900">
            <Camp canvasRef={canvasRef}/>
        </div>
    )
}

export default ShowCase