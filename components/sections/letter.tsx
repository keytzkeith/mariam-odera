'use client'

import { motion } from 'framer-motion'

import { envelopeLetter } from '@/lib/story-data'
import { itemReveal } from '@/lib/animations'
import { triggerConfetti } from '@/components/confetti'
import { EnvelopeLetter } from '@/components/story/envelope-letter'
import { SectionHeading } from '@/components/story/section-heading'
import { SectionShell } from '@/components/story/section-shell'

export function LetterSection() {
  return (
    <SectionShell className="bg-[linear-gradient(180deg,#101a2b_0%,#07111f_100%)] pb-28">
      <SectionHeading
        eyebrow="Final scene"
        title="The letter at the end of the sketchbook"
        description="A handwritten-style note inside an envelope, plus the last little birthday surprise."
      />

      <motion.div variants={itemReveal}>
        <EnvelopeLetter
          title={envelopeLetter.title}
          lines={envelopeLetter.lines}
          signature={envelopeLetter.signature}
        />
      </motion.div>

      <motion.div variants={itemReveal} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <motion.button
          type="button"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full border border-[#67d9c7]/35 bg-[#67d9c7]/12 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#dffaf4]"
        >
          Replay story
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={triggerConfetti}
          className="rounded-full border border-[#f6c177]/35 bg-[#f6c177] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#07111f] shadow-[0_16px_40px_rgba(246,193,119,0.3)]"
        >
          One last surprise
        </motion.button>
      </motion.div>
    </SectionShell>
  )
}
