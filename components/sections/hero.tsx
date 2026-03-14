'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import { heroContent } from '@/lib/story-data'
import { floatingLoop, itemReveal } from '@/lib/animations'
import { SectionShell } from '@/components/story/section-shell'
import { SketchFrame } from '@/components/story/sketch-frame'

const doodles = [
  { label: 'star', symbol: '✦', className: 'left-[6%] top-20 text-[#f6c177]' },
  { label: 'heart', symbol: '❤', className: 'right-[8%] top-28 text-[#ff5f87]' },
  { label: 'spark', symbol: '✧', className: 'left-[14%] bottom-24 text-[#67d9c7]' },
  { label: 'moon', symbol: '☾', className: 'right-[16%] bottom-20 text-[#f4e7d2]' },
]

export function HeroSection() {
  return (
    <SectionShell
      className="min-h-screen bg-[linear-gradient(180deg,#07111f_0%,#0b1628_52%,#101a2b_100%)] pt-24 sm:pt-28"
      contentClassName="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
      ornament={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,95,135,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(246,193,119,0.12),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:28px_28px] opacity-25" />
          {doodles.map((doodle, index) => (
            <motion.div
              key={doodle.label}
              className={`pointer-events-none absolute text-3xl sm:text-4xl ${doodle.className}`}
              animate={floatingLoop(index * 0.7)}
            >
              {doodle.symbol}
            </motion.div>
          ))}
        </>
      }
    >
      <motion.div variants={itemReveal} className="relative z-10">
        <span className="inline-flex rounded-full border border-[#f6c177]/35 bg-[#f6c177]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#f6c177]">
          {heroContent.eyebrow}
        </span>
        <h1
          className="mt-6 text-6xl font-bold leading-none text-[#f4e7d2] sm:text-7xl lg:text-[6.4rem]"
          style={{ fontFamily: 'var(--caveat)' }}
        >
          <span className="block">{heroContent.titleTop}</span>
          <span className="mt-2 block bg-[linear-gradient(90deg,#ff5f87,#f6c177,#f4e7d2)] bg-clip-text text-transparent">
            {heroContent.titleBottom}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#f4e7d2] sm:text-xl">{heroContent.subtitle}</p>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[#d6d8df] sm:text-base">{heroContent.description}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <motion.button
            type="button"
            variants={itemReveal}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center rounded-full border border-[#ff5f87]/40 bg-[#ff5f87] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#07111f] shadow-[0_16px_40px_rgba(255,95,135,0.35)]"
          >
            {heroContent.cta}
          </motion.button>
          <p className="text-sm text-[#d6d8df]">A romantic motion-comic in five little scenes.</p>
        </div>

        <motion.div variants={itemReveal} className="mt-10 flex items-center gap-3 text-sm text-[#f6c177]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f6c177]/30 bg-[#f6c177]/10">
            <ArrowDown className="h-4 w-4" />
          </span>
          Scroll slowly. The story reveals itself panel by panel.
        </motion.div>
      </motion.div>

      <motion.div variants={itemReveal} className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
        <SketchFrame
          src={heroContent.image}
          alt="Birthday illustration of the couple"
          accent="#ff5f87"
          priority
          className="rotate-[-2deg]"
          overlay={
            <>
              <div className="absolute left-4 top-4 rounded-full border border-[#f6c177]/40 bg-[#07111f]/45 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#f6c177] backdrop-blur">
                Special entrance
              </div>
              <motion.div
                className="absolute -right-3 top-12 rounded-full border border-[#67d9c7]/35 bg-[#67d9c7]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dffaf4]"
                animate={floatingLoop(0.8)}
              >
                Little surprises
              </motion.div>
            </>
          }
        />
      </motion.div>
    </SectionShell>
  )
}
