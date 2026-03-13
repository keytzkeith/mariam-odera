'use client'

import { motion } from 'framer-motion'

type DoodleType = 'star' | 'heart' | 'moon' | 'sparkle' | 'flower'

interface FloatingDoodlesProps {
  count?: number
  type?: DoodleType
  color?: string
  delay?: number
}

const getDoodleIcon = (type: DoodleType, color: string) => {
  const baseProps = { className: "w-8 h-8", fill: color, stroke: color }
  
  switch(type) {
    case 'star':
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    case 'moon':
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      )
    case 'flower':
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="20" cy="12" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="12" cy="20" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="6" cy="6" r="2" />
        </svg>
      )
  }
}

export function FloatingDoodles({ 
  count = 5, 
  type = 'star', 
  color = '#FF4D6D',
  delay = 0 
}: FloatingDoodlesProps) {
  const doodles = Array.from({ length: count }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {doodles.map((i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            x: [null, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            delay: delay + i * 0.2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
        >
          {getDoodleIcon(type, color)}
        </motion.div>
      ))}
    </div>
  )
}
