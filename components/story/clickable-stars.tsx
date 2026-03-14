'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { starBurstTransition } from '@/lib/animations'

type ClickableStarsProps = {
  wishes: string[]
}

const positions = [
  { top: '10%', left: '14%' },
  { top: '24%', left: '72%' },
  { top: '48%', left: '18%' },
  { top: '54%', left: '76%' },
]

export function ClickableStars({ wishes }: ClickableStarsProps) {
  const [active, setActive] = useState<number | null>(0)

  return (
    <div className="relative min-h-[380px] rounded-[28px] border border-dashed border-[#f6c177]/35 bg-[radial-gradient(circle_at_top,#182744_0%,#0c1525_65%)] p-6 pb-36 sm:min-h-[420px] sm:pb-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(246,193,119,0.08)_1px,transparent_1px)] bg-[length:24px_24px] opacity-45" />
      {wishes.map((wish, index) => {
        const pos = positions[index] ?? positions[0]
        const isActive = active === index

        return (
          <motion.button
            key={wish}
            type="button"
            onClick={() => setActive(index)}
            className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full text-[#f6c177] focus:outline-none"
            style={pos}
            animate={isActive ? { scale: [1, 1.18, 1], rotate: [0, 8, -8, 0] } : { scale: [1, 1.08, 1] }}
            transition={{
              duration: isActive ? 0.7 : 2.8,
              repeat: Infinity,
              repeatDelay: isActive ? 0.6 : 0,
            }}
          >
            <span className="absolute inset-0 rounded-full bg-[#f6c177]/10 blur-md" />
            <svg viewBox="0 0 32 32" className="relative h-10 w-10 fill-current drop-shadow-[0_0_14px_rgba(246,193,119,0.85)]">
              <path d="M16 2.5l3.7 7.5 8.3 1.2-6 5.9 1.4 8.4L16 21.7l-7.4 3.8 1.4-8.4-6-5.9 8.3-1.2z" />
            </svg>
          </motion.button>
        )
      })}

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={starBurstTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-x-6 bottom-6 rounded-[24px] border border-dashed border-[#ff5f87]/35 bg-[rgba(12,21,37,0.92)] p-5 backdrop-blur sm:inset-x-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#ff5f87]">Tap the stars</p>
          <p className="mt-3 text-base leading-7 text-[#f4e7d2] sm:text-lg">{active === null ? wishes[0] : wishes[active]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
