'use client'

import { motion } from 'framer-motion'

import { panelReveal, itemReveal } from '@/lib/animations'
import { timelineData } from '@/lib/story-data'
import { SectionShell } from '@/components/story/section-shell'
import { SectionHeading } from '@/components/story/section-heading'
import { SketchFrame } from '@/components/story/sketch-frame'

export function TimelineSection() {
  return (
    <SectionShell
      id="timeline-section"
      className="bg-[#091321]"
      contentClassName="max-w-6xl"
      ornament={<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,95,135,0.05),transparent_35%,rgba(246,193,119,0.04))]" />}
    >
      <SectionHeading
        eyebrow="How it started"
        title="Our story, drawn like comic panels"
        description="Short scenes, a few honest turns, and the road that brought us here again."
      />

      <div className="relative space-y-8 sm:space-y-10">
        <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-28px)] w-px -translate-x-1/2 bg-[linear-gradient(180deg,#ff5f87,rgba(246,193,119,0.25),transparent)] lg:block" />
        {timelineData.map((item, index) => {
          const reverse = index % 2 === 1
          const doodle = reverse ? '↙' : '↘'

          return (
            <motion.article
              key={item.title}
              variants={panelReveal}
              className="grid gap-4 lg:grid-cols-[1fr_56px_1fr] lg:items-center lg:gap-8"
            >
              <div
                className={`${
                  reverse
                    ? 'lg:col-start-3 lg:flex lg:justify-start'
                    : 'lg:col-start-1 lg:flex lg:justify-end'
                }`}
              >
                <div className={`w-full lg:max-w-md ${reverse ? 'lg:translate-x-6' : 'lg:-translate-x-6'}`}>
                  <SketchFrame
                    src={item.image}
                    alt={item.title}
                    accent={item.accent}
                    className={reverse ? 'rotate-[1.5deg]' : 'rotate-[-1.5deg]'}
                  />
                </div>
              </div>

              <div className="relative hidden items-center justify-center lg:flex">
                <div
                  className={`pointer-events-none absolute top-1/2 text-2xl font-bold opacity-80 ${reverse ? 'left-[115%]' : 'right-[115%]'}`}
                  style={{ color: item.accent, transform: 'translateY(-50%)' }}
                >
                  {doodle}
                </div>
                <div
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-dashed bg-[#101a2b] text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ borderColor: item.accent, color: item.accent }}
                >
                  {index + 1}
                </div>
              </div>

              <motion.div
                variants={itemReveal}
                className={`relative w-full rounded-[28px] border border-dashed bg-[rgba(16,26,43,0.92)] p-6 text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:p-7 ${
                  reverse
                    ? 'lg:col-start-1 lg:mr-auto lg:max-w-md lg:-translate-x-6'
                    : 'lg:col-start-3 lg:max-w-md lg:translate-x-6'
                }`}
                style={{ borderColor: `${item.accent}55` }}
              >
                <div
                  className={`pointer-events-none absolute top-5 hidden h-10 w-10 rounded-full border border-dashed opacity-40 lg:block ${reverse ? '-right-4' : '-left-4'}`}
                  style={{ borderColor: item.accent }}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.32em]" style={{ color: item.accent }}>
                  {item.year}
                </p>
                <h3
                  className="mt-3 text-3xl font-bold leading-none text-[#f4e7d2]"
                  style={{ fontFamily: 'var(--caveat)' }}
                >
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#d6d8df] sm:text-base">{item.description}</p>
              </motion.div>
            </motion.article>
          )
        })}
      </div>
    </SectionShell>
  )
}
