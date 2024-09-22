'use client'


import dynamic from "next/dynamic";

const Scene = dynamic(() => import('./component/Scene'), {

  ssr: false,

})

export default function Home() {
  return (
    <div  className="w-full h-full bg-black">
      <Scene/>
    </div>
  )
}