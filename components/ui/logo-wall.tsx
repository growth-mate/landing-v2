"use client"

import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface LogoWallProps {
  src: string
  alt: string
  height?: number // target height in pixels
  speed?: number // pixels per second
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
  imageClassName?: string
}

export function LogoWall({
  src,
  alt,
  height = 120,
  speed = 60,
  direction = "left",
  pauseOnHover = true,
  className,
  imageClassName
}: LogoWallProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const [currentDirection, setCurrentDirection] = useState<"left" | "right">(direction)
  const [imageWidth, setImageWidth] = useState(0)

  // Update direction when prop changes
  useEffect(() => {
    setCurrentDirection(direction)
  }, [direction])

  // Check if images are already loaded (for cached images)
  useEffect(() => {
    if (!containerRef.current) return
    
    const images = containerRef.current.querySelectorAll('img')
    images.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        // Image is already loaded, manually trigger handleImageLoad
        const syntheticEvent = {
          currentTarget: img
        } as React.SyntheticEvent<HTMLImageElement>
        handleImageLoad(syntheticEvent)
      }
    })
  }, [src, height]) // Re-run when src or height changes

  // Handle image load to calculate width based on target height
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget

    // 1. Load the image sizes & aspect ratio
    const naturalWidth = img.naturalWidth
    const naturalHeight = img.naturalHeight
    const aspectRatio = naturalWidth / naturalHeight
    
    // 2. Calculate the new image width given the target height
    const calculatedWidth = height * aspectRatio
    
    // Set dimensions
    setImageWidth(calculatedWidth)
  }

  // Auto-scroll animation
  useEffect(() => {
    if (isDragging || isPaused) return
    
    const effectiveWidth = imageWidth
    if (effectiveWidth === 0) return

    let animationId: number
    let lastTimeRef = 0
    
    const animate = (currentTime: number) => {
      if (lastTimeRef === 0) {
        lastTimeRef = currentTime
        animationId = requestAnimationFrame(animate)
        return
      }

      const deltaTime = currentTime - lastTimeRef
      const movePixels = (speed * deltaTime) / 1000
      
      setTranslateX(prevTranslate => {
        const newTranslate = currentDirection === "left" 
          ? prevTranslate - movePixels 
          : prevTranslate + movePixels
        
        // Reset when we've moved a full width
        if (currentDirection === "left" && newTranslate <= -effectiveWidth) {
          return 0
        } else if (currentDirection === "right" && newTranslate >= 0) {
          return -effectiveWidth
        }
        
        return newTranslate
      })

      lastTimeRef = currentTime
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isDragging, isPaused, speed, currentDirection, imageWidth])

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    const startX = e.clientX
    const startTranslate = translateX

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX
      
      // Detect direction based on drag movement
      if (Math.abs(deltaX) > 20) {
        if (deltaX > 0) {
          setCurrentDirection("right")
        } else {
          setCurrentDirection("left")
        }
      }
      
      let newTranslate = startTranslate + deltaX
      
      // Keep within bounds and handle wrapping
      if (newTranslate > 0) {
        newTranslate = -imageWidth + (newTranslate % imageWidth)
      } else if (newTranslate < -imageWidth) {
        newTranslate = newTranslate % imageWidth
      }
      
      setTranslateX(newTranslate)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsPaused(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  // Touch functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    const startX = e.touches[0].clientX
    const startTranslate = translateX

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const deltaX = e.touches[0].clientX - startX
      
      // Detect direction based on drag movement
      if (Math.abs(deltaX) > 20) {
        if (deltaX > 0) {
          setCurrentDirection("right")
        } else {
          setCurrentDirection("left")
        }
      }
      
      let newTranslate = startTranslate + deltaX
      
      // Keep within bounds and handle wrapping
      if (newTranslate > 0) {
        newTranslate = -imageWidth + (newTranslate % imageWidth)
      } else if (newTranslate < -imageWidth) {
        newTranslate = newTranslate % imageWidth
      }
      
      setTranslateX(newTranslate)
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      setIsPaused(false)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }

    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden select-none",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        className
      )}
      style={{ height: `${height}px` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* First image */}
      <img
        src={src}
        alt={alt}
        className={cn("absolute top-0 left-0", imageClassName)}
        style={{
          width: imageWidth > 0 ? `${imageWidth}px` : 'auto',
          height: `${height}px`,
          transform: `translateX(${translateX}px)`,
          willChange: 'transform',
          objectFit: 'contain',
          maxWidth: 'unset'
        }}
        draggable={false}
        onLoad={handleImageLoad}
      />

      {/* Second image - positioned to avoid overlap */}
      <img
        src={src}
        alt={alt}
        className={cn("absolute top-0 left-0", imageClassName)}
        style={{
          width: imageWidth > 0 ? `${imageWidth}px` : 'auto',
          height: `${height}px`,
          transform: `translateX(${translateX + imageWidth}px)`,
          willChange: 'transform',
          objectFit: 'contain',
          maxWidth: 'unset'
        }}
        draggable={false}
      />
    </div>
  )
}

export default LogoWall
