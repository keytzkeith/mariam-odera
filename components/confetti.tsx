'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: number
  left: number
  delay: number
  duration: number
  color: string
}

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const [isActive, setIsActive] = useState(false)

  const triggerConfetti = () => {
    const colors = ['#FF4D6D', '#F6C177', '#8B6DFF', '#4DD4C6', '#F3EDE2']
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: Math.random() * 2 + 2.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    
    setPieces(newPieces)
    setIsActive(true)
    
    setTimeout(() => setIsActive(false), 4000)
  }

  useEffect(() => {
    // Expose function globally for external triggers
    (window as any).triggerConfetti = triggerConfetti
  }, [])

  return (
    <>
      {isActive && pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            left: `${piece.left}%`,
            top: '-10px',
            opacity: 1,
            rotate: 0
          }}
          animate={{
            top: '100vh',
            opacity: 0,
            rotate: Math.random() * 720 - 360
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn'
          }}
          className="fixed w-2 h-2 pointer-events-none"
          style={{
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0'
          }}
        />
      ))}
    </>
  )
}

export function triggerConfetti() {
  if (typeof window !== 'undefined' && (window as any).triggerConfetti) {
    (window as any).triggerConfetti()
  }
}
