'use client'

import { motion } from 'framer-motion'

import { itemReveal, panelReveal } from '@/lib/animations'
import { qualitiesData } from '@/lib/story-data'
import { SectionShell } from '@/components/story/section-shell'
import { SectionHeading } from '@/components/story/section-heading'
import { TiltCard } from '@/components/story/tilt-card'
import { SketchFrame } from '@/components/story/sketch-frame'

const doodleMap: Record<string, string> = {
  heart: '❤',
  spark: '✦',
  moon: '☾',
  flower: '✿',
  star: '✧',
}

export function QualitiesSection() {
  return (
    <SectionShell className="bg-[linear-gradient(180deg,#091321_0%,#101a2b_100%)]">
      <SectionHeading
        eyebrow="What makes her special"
        title="The details that make you unforgettable"
        description="More visual than verbal. Small illustrated cards, tiny captions, and a gentle hover tilt."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {qualitiesData.map((quality, index) => (
          <motion.div key={quality.title} variants={panelReveal} className="h-full">
            <TiltCard className="h-full p-5" accent={quality.accent}>
              <div className="flex h-full flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: quality.accent }}>
                      Scene {index + 1}
                    </p>
                    <h3
                      className="mt-2 text-3xl font-bold leading-none text-[#f4e7d2]"
                      style={{ fontFamily: 'var(--caveat)' }}
                    >
                      {quality.title}
                    </h3>
                  </div>
                  <motion.span
                    variants={itemReveal}
                    animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 4 + index * 0.2, repeat: Infinity }}
                    className="text-3xl"
                    style={{ color: quality.accent }}
                  >
                    {doodleMap[quality.doodle]}
                  </motion.span>
                </div>

                <SketchFrame
                  src={quality.image}
                  alt={quality.title}
                  accent={quality.accent}
                  className="max-w-full"
                  imageClassName="object-cover object-center"
                />

                <p className="text-sm leading-7 text-[#d6d8df] sm:text-base">{quality.caption}</p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
