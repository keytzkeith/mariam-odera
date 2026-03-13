'use client'

import { useRef, useEffect, useState } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setLastScrollY(currentScrollY)

      if (!ref.current) return

      const element = ref.current
      const elementTop = element.getBoundingClientRect().top
      const elementBottom = element.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight

      // Element is in viewport
      const isInViewport = elementTop < windowHeight * 0.75 && elementBottom > windowHeight * 0.25
      setIsVisible(isInViewport)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return { ref, isVisible, scrollDirection }
}
