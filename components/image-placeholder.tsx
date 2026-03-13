'use client'

import { motion } from 'framer-motion'

interface ImagePlaceholderProps {
  label: string
  subtitle?: string
  className?: string
  borderStyle?: 'pink' | 'gold' | 'teal' | 'default'
}

export function ImagePlaceholder({
  label,
  subtitle,
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
      className={`${className} w-full bg-[#1a2233] rounded-lg ${borderClasses[borderStyle]} flex items-center justify-center overflow-hidden relative group`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Grid pattern background to indicate image area */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full grid grid-cols-4 grid-rows-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border border-[#4DD4C6]/20" />
          ))}
        </div>
      </div>

      {/* Drag and drop indicator */}
      <div className="absolute inset-2 border-2 border-dashed border-[#FF4D6D]/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <svg
          className="w-12 h-12 mb-3 text-[#F6C177]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-sm font-semibold text-[#F6C177] text-center mb-1">{label}</p>
        {subtitle && <p className="text-xs text-[#4DD4C6] text-center">{subtitle}</p>}
        <p className="text-xs text-[#8B6DFF] mt-2 italic">Click or drag image here</p>
      </div>
    </motion.div>
  )
}
