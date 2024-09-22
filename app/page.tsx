'use client'


import { HomePage } from "@/components/home-page";
import dynamic from "next/dynamic";



export default function Home() {
  return (
    <div  className="w-full h-full bg-black">
      <HomePage/>
      
    </div>
  )
}