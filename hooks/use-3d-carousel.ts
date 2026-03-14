'use client'

import { useEffect, useRef, useState } from 'react'

interface Card3DTransform {
  rotateY: number
  rotateX: number
  z: number
  opacity: number
}

export function use3DCarousel(cardCount: number) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [transforms, setTransforms] = useState<Card3DTransform[]>(
    Array(cardCount).fill({ rotateY: 0, rotateX: 0, z: 0, opacity: 0.6 })
  )
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const elementCenter = window.innerHeight / 2
      const containerCenter = rect.top + rect.height / 2

      // Calculate how far the container is from center of viewport
      const distanceFromCenter = containerCenter - elementCenter
      const containerHeight = rect.height

      // Calculate progress: -1 (above) to 1 (below), 0 = centered
      let progress = distanceFromCenter / (window.innerHeight / 2)
      progress = Math.max(-1, Math.min(1, progress))

      // Map progress to card rotation
      // When scrolling through, cards rotate in a circle
      const rotationRange = 360 // degrees to rotate through all cards
      const totalRotation = progress * rotationRange

      // Calculate individual card transforms
      const newTransforms = Array.from({ length: cardCount }, (_, index) => {
        // Each card is positioned at an angle in a circle
        const baseAngle = (index / cardCount) * 360
        
        // Rotation based on scroll progress
        const cardRotation = baseAngle + totalRotation
        const cardRotationRad = (cardRotation * Math.PI) / 180

        // 3D positioning in circular arrangement
        const radius = 400 // Distance from center in 3D space
        const x = Math.cos(cardRotationRad) * radius
        const z = Math.sin(cardRotationRad) * radius - radius

        // Calculate opacity based on position
        const normalizedRotation = ((cardRotation % 360) + 360) % 360
        const angleDiff = Math.min(
          Math.abs(normalizedRotation - 180),
          360 - Math.abs(normalizedRotation - 180)
        )
        const opacity = Math.max(0.3, 1 - angleDiff / 180)

        return {
          rotateY: cardRotation,
          rotateX: Math.sin(cardRotationRad) * 15,
          z: z,
          opacity: opacity
        }
      })

      setTransforms(newTransforms)
      setScrollProgress(Math.abs(progress))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [cardCount])

  return { containerRef, transforms, scrollProgress }
}
