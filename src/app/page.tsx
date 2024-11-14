'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Your screensize detector</h1>
      <p className="text-2xl">Width: {width}px</p>
      <p className="text-2xl">Height: {height}px</p>
    </div>
  )
}
