'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setIsMounted(true)
    audioRef.current = new Audio('/birthday-theme.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.55

    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Unable to play birthday audio.', error)
    }
  }

  if (!isMounted) return null

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[#ff5f87]/40 bg-[rgba(16,26,43,0.88)] text-[#f4e7d2] shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur sm:bottom-6 sm:right-6"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      <motion.div
        animate={{ rotate: isPlaying ? 360 : 0, scale: isPlaying ? [1, 1.08, 1] : 1 }}
        transition={{ duration: isPlaying ? 12 : 0.3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
      >
        {isPlaying ? (
          <Volume2 size={22} />
        ) : (
          <VolumeX size={22} />
        )}
      </motion.div>
    </motion.button>
  )
}
