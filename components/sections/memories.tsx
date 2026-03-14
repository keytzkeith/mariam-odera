'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { itemReveal, panelReveal } from '@/lib/animations'
import { memoryNotes, starWishes } from '@/lib/story-data'
import { SectionShell } from '@/components/story/section-shell'
import { SectionHeading } from '@/components/story/section-heading'
import { ClickableStars } from '@/components/story/clickable-stars'
import { SketchFrame } from '@/components/story/sketch-frame'

const memoryImages = [
  '/hero-couple.png',
  '/long-distance-talk.png',
  '/still-cared-and-checked-up.png',
  '/birthday-celebration.png',
]

export function MemoriesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <SectionShell className="bg-[#091321]">
      <SectionHeading
        eyebrow="Interactive moments"
        title="Tap a star. Flip a polaroid. Keep a little surprise."
        description="This is the playful section: clickable stars, hidden notes, and small birthday wishes tucked into the scene."
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div variants={panelReveal}>
          <ClickableStars wishes={starWishes} />
        </motion.div>

        <motion.div variants={itemReveal} className="grid gap-4 sm:grid-cols-2 lg:pb-6">
          {memoryNotes.map((memory, index) => {
            const open = activeCard === index

            return (
              <motion.button
                key={memory.title}
                type="button"
                variants={panelReveal}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActiveCard(open ? null : index)}
                className="relative h-[390px] text-left [perspective:1200px] sm:h-[420px]"
              >
                <motion.div
                  animate={{ rotateY: open ? 180 : 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                >
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className="flex h-full flex-col rounded-[28px] border border-dashed border-[#f6c177]/28 bg-[#101a2b] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
                      <SketchFrame
                        src={memoryImages[index] ?? '/hero-couple.png'}
                        alt={memory.title}
                        accent={index % 2 === 0 ? '#f6c177' : '#ff5f87'}
                        className="w-full"
                      />
                      <div className="mt-auto px-2 pb-1 pt-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#f6c177]">Tap to reveal</p>
                        <h3
                          className="mt-2 text-3xl font-bold leading-none text-[#f4e7d2]"
                          style={{ fontFamily: 'var(--caveat)' }}
                        >
                          {memory.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex h-full flex-col rounded-[28px] border border-dashed border-[#67d9c7]/34 bg-[linear-gradient(180deg,#101a2b_0%,#15243b_100%)] p-6 text-[#f4e7d2] shadow-[0_20px_60px_rgba(0,0,0,0.32)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#67d9c7]">Hidden note</p>
                    <h3
                      className="mt-3 text-3xl font-bold leading-none"
                      style={{ fontFamily: 'var(--caveat)' }}
                    >
                      {memory.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-[#d6d8df] sm:text-base">{memory.note}</p>
                  </div>
                </motion.div>
              </motion.button>
            )
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCard !== null ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-10 text-center text-sm text-[#d6d8df]"
          >
            One memory at a time. Tap the card again to close it.
          </motion.p>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  )
}
