'use client'

import { motion } from 'framer-motion'
import { fadeInUpVariant } from '@/lib/animations'
import { letterContent } from '@/lib/story-data'
import { triggerConfetti } from '@/components/confetti'

export function LetterSection() {
  const handleConfetti = () => {
    triggerConfetti()
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-20 px-4 bg-gradient-to-b from-[#0B1020] to-[#151B2E] min-h-screen flex items-center"
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Letter container */}
        <motion.div
          variants={fadeInUpVariant}
          className="p-12 md:p-16 bg-[#151B2E] rounded-xl sketchy-border relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D6D]/5 to-[#8B6DFF]/5 pointer-events-none" />

          <div className="relative z-10">
            {/* Letter header */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#F6C177]"
              style={{ fontFamily: 'var(--caveat)', letterSpacing: '2px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {letterContent.greeting}
            </motion.h2>

            {/* Letter body */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {letterContent.message.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-[#F3EDE2] text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  style={{ fontFamily: 'var(--poppins)' }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.p
              className="text-2xl font-bold text-[#FF4D6D] mt-12"
              style={{ fontFamily: 'var(--caveat)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {letterContent.signature}
            </motion.p>

            {/* Decorative hearts */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-4 mt-8 text-2xl"
            >
              {['❤️', '💗', '✨'].map((heart, i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  {heart}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={fadeInUpVariant}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-6 justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToTop}
            className="px-8 py-4 text-lg font-semibold text-[#0B1020] bg-[#8B6DFF] rounded-lg sketchy-border hover:bg-[#4DD4C6] transition-colors"
          >
            Replay Story
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConfetti}
            className="px-8 py-4 text-lg font-semibold text-[#0B1020] bg-[#F6C177] rounded-lg sketchy-border hover:bg-[#FF4D6D] transition-colors"
          >
            One Last Surprise
          </motion.button>
        </motion.div>

        {/* Footer message */}
        <motion.p
          variants={fadeInUpVariant}
          transition={{ delay: 0.7 }}
          className="text-center text-[#4DD4C6] mt-12 text-sm italic"
        >
          Made with love for the most special person in my life
        </motion.p>
      </div>
    </motion.section>
  )
}
