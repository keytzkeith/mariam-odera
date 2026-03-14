import { useEffect, useRef, useState } from 'react'

interface Card3DTransform {
  rotateY: number
  rotateX: number
  z: number
  opacity: number
}

export function use3DCarousel(cardCount: number) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [transforms, setTransforms] = useState<Card3DTransform[]>([])
  const lastScrollRef = useRef(0)

  useEffect(() => {
    // Initialize transforms
    setTransforms(
      Array(cardCount).fill({ rotateY: 0, rotateX: 0, z: 0, opacity: 0.6 })
    )

    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollY = window.scrollY
      
      // Get container's position in document
      const containerTop = rect.top + scrollY
      const containerHeight = rect.height
      const containerCenter = containerTop + containerHeight / 2
      
      // Get viewport center
      const viewportCenter = scrollY + window.innerHeight / 2
      
      // Calculate how far the container is from viewport center
      const distanceFromCenter = containerCenter - viewportCenter
      
      // Calculate progress based on distance (normalized to viewport)
      // -1 = far above, 0 = centered, 1 = far below
      let progress = distanceFromCenter / window.innerHeight
      progress = Math.max(-1, Math.min(1, progress))
      
      console.log("[v0] Carousel scroll - progress:", progress, "distance:", distanceFromCenter, "scrollY:", scrollY)

      // Calculate individual card transforms
      const newTransforms = Array.from({ length: cardCount }, (_, index) => {
        // Spread cards around a circle
        const anglePerCard = 360 / cardCount
        const baseAngle = index * anglePerCard
        
        // Total rotation increases with scroll progress
        // Full 360 degree rotation for each card position
        const totalRotation = progress * 360
        
        // Calculate this card's current angle
        const currentAngle = (baseAngle + totalRotation) * (Math.PI / 180)
        
        // Circular positioning in 3D space
        const radius = 320 // Distance from center
        const x = Math.cos(currentAngle) * radius
        const z = Math.sin(currentAngle) * radius

        // Opacity - stronger for cards facing toward viewer (small z is facing forward)
        const minZ = -radius
        const maxZ = radius
        const normalizedZ = (z - minZ) / (maxZ - minZ)
        const opacity = 0.3 + normalizedZ * 0.7

        return {
          rotateY: totalRotation,
          rotateX: Math.sin(currentAngle) * 20,
          z: z - radius, // Center the z position
          opacity: Math.max(0.2, opacity)
        }
      })

      setTransforms(newTransforms)
      lastScrollRef.current = scrollY
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [cardCount])

  return { containerRef, transforms }
}
