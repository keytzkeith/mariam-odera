'use client'

import { motion } from 'framer-motion'

interface ImagePlaceholderProps {
  label: string
  subtitle?: string
  icon?: string
  className?: string
  borderStyle?: 'pink' | 'gold' | 'teal' | 'default'
}

export function ImagePlaceholder({
  label,
  subtitle,
  icon = '📷',
  className = 'h-40',
  borderStyle = 'pink'
}: ImagePlaceholderProps) {
  const borderClasses = {
    pink: 'sketchy-border-pink',
    gold: 'sketchy-border-gold',
    teal: 'sketchy-border-teal',
    default: 'sketchy-border'
  }

  return (
    <motion.div
      className={`${className} w-full bg-gradient-to-br from-[#2A3545] to-[#1a2233] rounded-lg ${borderClasses[borderStyle]} flex items-center justify-center overflow-visible`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#4DD4C6]/10 to-[#FF4D6D]/5" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-5xl mb-2">{icon}</div>
        <p className="text-sm text-[#F6C177] font-medium">{label}</p>
        {subtitle && <p className="text-xs text-[#4DD4C6] mt-1">{subtitle}</p>}
      </div>
    </motion.div>
  )
}
