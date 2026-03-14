'use client'

import { motion } from 'framer-motion'

type DoodleType = 'star' | 'heart' | 'moon' | 'sparkle' | 'flower'

type FloatingDoodlesProps = {
  count?: number
  type?: DoodleType
  color?: string
  delay?: number
}

const iconMap: Record<DoodleType, string> = {
  star: '✦',
  heart: '❤',
  moon: '☾',
  sparkle: '✧',
  flower: '✿',
}

const basePositions = [
  { x: '7%', y: '18%', scale: 1 },
  { x: '88%', y: '14%', scale: 0.9 },
  { x: '11%', y: '64%', scale: 1.15 },
  { x: '82%', y: '70%', scale: 0.82 },
  { x: '48%', y: '10%', scale: 0.78 },
  { x: '56%', y: '82%', scale: 1.08 },
  { x: '26%', y: '36%', scale: 0.92 },
  { x: '74%', y: '42%', scale: 1.04 },
]

export function FloatingDoodles({
  count = 6,
  type = 'star',
  color = '#f6c177',
  delay = 0,
}: FloatingDoodlesProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {basePositions.slice(0, count).map((position, index) => (
        <motion.div
          key={`${type}-${index}`}
          className="absolute text-2xl sm:text-3xl"
          style={{
            left: position.x,
            top: position.y,
            color,
            scale: position.scale,
            textShadow: `0 0 18px ${color}40`,
          }}
          animate={{
            y: [0, -16, 0, 10, 0],
            x: [0, 4, -4, 0],
            rotate: [0, 6, -6, 0],
            opacity: [0.24, 0.9, 0.35],
          }}
          transition={{
            duration: 8 + index * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay + index * 0.35,
          }}
        >
          {iconMap[type]}
        </motion.div>
      ))}
    </div>
  )
}
