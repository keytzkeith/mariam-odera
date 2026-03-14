'use client'

import { motion } from 'framer-motion'
import type { PropsWithChildren, ReactNode } from 'react'

import { sectionReveal, softStagger } from '@/lib/animations'
import { cn } from '@/lib/utils'

type SectionShellProps = PropsWithChildren<{
  id?: string
  className?: string
  contentClassName?: string
  ornament?: ReactNode
}>

export function SectionShell({
  id,
  className,
  contentClassName,
  ornament,
  children,
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className={cn(
        'relative overflow-hidden px-4 py-18 sm:px-6 sm:py-24 lg:px-8',
        className,
      )}
    >
      {ornament}
      <motion.div
        variants={softStagger}
        className={cn('mx-auto w-full max-w-6xl', contentClassName)}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}
