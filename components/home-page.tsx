"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MoonIcon, SunIcon, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-r from-cyan-700 via-zinc-600 to-stone-500 dark:from-gray-900 dark:via-cyan-900 dark:to-gray-900 text-white transition-colors duration-500">
        <nav className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">3D World</Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
              <Link href="/gallery" className="hover:text-yellow-300 transition-colors">Gallery</Link>
              <Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/gallery">Gallery</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/about">About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/contact">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>

        <main className="container mx-auto mt-10 px-4 pb-20">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to 3D World
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dive into a universe of immersive 3D experiences, where imagination meets technology to create breathtaking digital realms.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Immersive Experiences", description: "Step into meticulously crafted 3D environments that push the boundaries of digital representation." },
              { title: "Interactive Learning", description: "Explore complex concepts, historical sites, and scientific phenomena in an engaging, interactive manner." },
              { title: "Artistic Expression", description: "Witness the convergence of technology and creativity in stunning visual experiences and digital sculptures." },
              { title: "Technological Innovation", description: "Experience cutting-edge rendering techniques, real-time physics simulations, and VR integrations." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/gallery">Explore 3D Worlds</Link>
            </Button>
          </motion.div>
        </main>
      </div>

      <footer className="bg-gray-900 text-white text-center p-8">
        <p>&copy; 2023 3D World. All rights reserved.</p>
      </footer>
    </div>
  )
}