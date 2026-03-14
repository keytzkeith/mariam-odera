'use client'

import { motion } from 'framer-motion'

import { itemReveal } from '@/lib/animations'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      variants={itemReveal}
      className={cn('mb-10 flex flex-col gap-3 sm:mb-14', alignClass, className)}
    >
      {eyebrow ? (
        <span className="rounded-full border border-[#f6c177]/35 bg-[#f6c177]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#f6c177]">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className="max-w-3xl text-4xl font-bold leading-none text-[#f4e7d2] sm:text-5xl lg:text-6xl"
        style={{ fontFamily: 'var(--caveat)' }}
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-[#d6d8df] sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
