'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      setRatio(window.devicePixelRatio)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [window?.innerWidth, window?.innerHeight])
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Your screensize detector</h1>
      <p className="text-2xl">Width: {width}px</p>
      <p className="text-2xl">Height: {height}px</p>
      <p className="text-2xl">Device Ratio: {ratio}</p>
      <p className="text-2xl">
        Device Resolution:
        {width * ratio} x {height * ratio}
      </p>
    </div>
  )
}
