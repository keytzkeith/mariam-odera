'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
    // You can add actual audio playback here
  }

  if (!isMounted) return null

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#FF4D6D] text-[#0B1020] flex items-center justify-center sketchy-border shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {isPlaying ? (
          <Volume2 size={24} />
        ) : (
          <VolumeX size={24} />
        )}
      </motion.div>
    </motion.button>
  )
}
