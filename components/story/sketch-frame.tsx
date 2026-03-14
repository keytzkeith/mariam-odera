'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SketchFrameProps = {
  src: string
  alt: string
  accent?: string
  className?: string
  imageClassName?: string
  priority?: boolean
  overlay?: ReactNode
}

export function SketchFrame({
  src,
  alt,
  accent = '#ff5f87',
  className,
  imageClassName,
  priority = false,
  overlay,
}: SketchFrameProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[28px] border-2 border-dashed bg-[#101a2b] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)]',
        className,
      )}
      style={{ borderColor: accent, boxShadow: `0 24px 70px ${accent}20` }}
    >
      <div className="sketch-noise pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-2 rounded-[22px] border border-dashed opacity-35"
        style={{ borderColor: accent }}
      />
      <motion.div
        whileHover={{ scale: 1.03, rotate: -0.6 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#1a2841]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn('object-cover', imageClassName)}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_50%,rgba(7,17,31,0.34)_100%)]" />
        {overlay}
      </motion.div>
    </div>
  )
}
