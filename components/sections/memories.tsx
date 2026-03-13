'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { memoriesData } from '@/lib/story-data'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ImagePlaceholder } from '@/components/image-placeholder'

export function MemoriesSection() {
  const [revealed, setRevealed] = useState<number[]>([])
  const { ref, isVisible } = useScrollReveal()

  const toggleReveal = (index: number) => {
    if (revealed.includes(index)) {
      setRevealed(revealed.filter(i => i !== index))
    } else {
      setRevealed([...revealed, index])
    }
  }

  return (
    <motion.section
      ref={ref as any}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="w-full py-20 px-4 bg-[#0B1020]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#F3EDE2]"
          style={{ fontFamily: 'var(--caveat)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Memories I Cherish
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memoriesData.map((memory, index) => (
            <motion.button
              key={index}
              variants={staggerItem}
              onClick={() => toggleReveal(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="h-64 relative cursor-pointer group"
            >
              {/* Front side - Image placeholder */}
              <motion.div
                animate={{
                  rotateY: revealed.includes(index) ? 180 : 0,
                  opacity: revealed.includes(index) ? 0 : 1
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <ImagePlaceholder
                  label={memory.title}
                  subtitle="Tap to reveal"
                  borderStyle="gold"
                  className="h-64 rounded-lg"
                />
              </motion.div>

              {/* Back side - revealed */}
              <motion.div
                animate={{
                  rotateY: revealed.includes(index) ? 0 : -180,
                  opacity: revealed.includes(index) ? 1 : 0
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 p-8 bg-gradient-to-br from-[#151B2E] to-[#2A3545] rounded-lg sketchy-border-teal flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: revealed.includes(index) ? 1 : 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#F3EDE2] text-lg leading-relaxed"
                >
                  {memory.message}
                </motion.p>
              </motion.div>
            </motion.button>
          ))}
        </div>

        <motion.p
          variants={staggerItem}
          className="text-center text-[#8B6DFF] mt-12 text-lg"
        >
          Each memory with you is a treasure I hold close to my heart
        </motion.p>
      </div>
    </motion.section>
  )
}
