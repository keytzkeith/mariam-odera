'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { envelopeContentVariant, envelopeFlapVariant } from '@/lib/animations'

type EnvelopeLetterProps = {
  title: string
  lines: string[]
  signature: string
}

export function EnvelopeLetter({ title, lines, signature }: EnvelopeLetterProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="w-full text-left focus:outline-none"
        aria-expanded={open}
      >
        <div className="relative mx-auto h-[520px] w-full max-w-[620px] sm:h-[560px]">
          <motion.div
            className="absolute bottom-[124px] left-1/2 z-10 w-[86%] -translate-x-1/2 rounded-[28px] border border-dashed border-[#f6c177]/35 bg-[#f4e7d2] px-6 py-8 text-[#2a2130] shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:px-10"
            variants={envelopeContentVariant}
            initial="closed"
            animate={open ? 'open' : 'closed'}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a54861]">
              Hidden letter
            </p>
            <h3
              className="mt-4 text-3xl font-bold leading-none sm:text-4xl"
              style={{ fontFamily: 'var(--caveat)' }}
            >
              {title}
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-7 sm:text-base">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p
              className="mt-6 text-2xl text-[#a54861]"
              style={{ fontFamily: 'var(--caveat)' }}
            >
              {signature}
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-1/2 z-30 h-[250px] w-full max-w-[620px] -translate-x-1/2 overflow-hidden rounded-[32px] border border-dashed border-[#ff5f87]/35 bg-[linear-gradient(180deg,#1a2941_0%,#101a2b_100%)] shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <motion.div
              className="absolute inset-x-0 top-0 z-40 h-[55%] origin-top overflow-hidden"
              variants={envelopeFlapVariant}
              initial="closed"
              animate={open ? 'open' : 'closed'}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#ff6c91_0%,#ea567c_100%)] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
              <div className="absolute inset-x-[8%] top-[9%] h-[78%] border border-dashed border-[#ffd8e3]/40 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
            </motion.div>

            <div className="absolute inset-0 z-30">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,#192740_0%,#101a2b_75%)] [clip-path:polygon(0_32%,50%_76%,100%_32%,100%_100%,0_100%)]" />
              <div className="absolute bottom-[12%] left-1/2 z-40 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-dashed border-[#f6c177]/45 bg-[#f6c177] text-[#07111f] shadow-[0_0_30px_rgba(246,193,119,0.45)]">
                ❤
              </div>
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        <motion.p
          key={open ? 'open' : 'closed'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-4 text-center text-sm text-[#d6d8df]"
        >
          {open ? 'Tap the envelope again to tuck the note back in.' : 'Tap the envelope to open the letter.'}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
