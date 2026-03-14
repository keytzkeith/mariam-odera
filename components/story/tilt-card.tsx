'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type TiltCardProps = PropsWithChildren<{
  className?: string
  accent?: string
}>

export function TiltCard({
  className,
  accent = '#ff5f87',
  children,
}: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 140,
    damping: 16,
    mass: 0.25,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 140,
    damping: 16,
    mass: 0.25,
  })

  return (
    <motion.div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left) / rect.width - 0.5)
        y.set((event.clientY - rect.top) / rect.height - 0.5)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className={cn(
        'relative rounded-[28px] border border-dashed bg-[rgba(16,26,43,0.92)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-20" style={{ boxShadow: `0 0 45px ${accent}` }} />
      <div className="pointer-events-none absolute inset-2 rounded-[22px] border border-dashed opacity-35" style={{ borderColor: accent }} />
      <div className="relative h-full" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
