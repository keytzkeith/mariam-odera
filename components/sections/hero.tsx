'use client'

import { motion } from 'framer-motion'
import { fadeInUpVariant, fadeInScaleVariant, pulseVariant } from '@/lib/animations'
import { ImagePlaceholder } from '@/components/image-placeholder'

export function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-[#0B1020] to-[#151B2E] relative overflow-hidden"
    >
      {/* Decorative stars */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 right-10 text-4xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ duration: 3, delay: 1, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-3xl"
      >
        ⭐
      </motion.div>

      <motion.div
        variants={fadeInUpVariant}
        className="text-center"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 text-[#F3EDE2]"
          style={{ fontFamily: 'var(--caveat)', letterSpacing: '2px' }}
          variants={fadeInUpVariant}
        >
          Happy Birthday
        </motion.h1>
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF4D6D] to-[#F6C177] bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--caveat)', letterSpacing: '1px' }}
          variants={fadeInUpVariant}
          transition={{ delay: 0.2 }}
        >
          Mariam
        </motion.h2>
      </motion.div>

      <motion.p
        className="text-xl md:text-2xl text-[#F3EDE2] max-w-lg text-center mb-12"
        variants={fadeInUpVariant}
        transition={{ delay: 0.4 }}
      >
        A little illustrated world made just for you
      </motion.p>

      {/* Hero image placeholder */}
      <motion.div
        variants={fadeInScaleVariant}
        transition={{ delay: 0.6 }}
        className="w-64 md:w-80 mb-12"
      >
        <ImagePlaceholder
          label="Your Special Photo"
          subtitle="Add a beautiful memory"
          borderStyle="pink"
          className="h-80 md:h-96 rounded-3xl"
        />
      </motion.div>

      {/* CTA Button */}
      <motion.button
        variants={fadeInUpVariant}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const element = document.getElementById('timeline-section')
          element?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="px-8 py-4 text-lg font-semibold text-[#0B1020] bg-[#FF4D6D] rounded-full hover:bg-[#F6C177] transition-colors sketchy-border"
      >
        <motion.span
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Open the Story
        </motion.span>
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 text-[#F6C177] text-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-sm mb-2">Scroll to continue</div>
        <div className="text-2xl">↓</div>
      </motion.div>
    </motion.section>
  )
}
