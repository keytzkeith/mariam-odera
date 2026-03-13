'use client'

import { motion } from 'framer-motion'
import { slideInLeftVariant, slideInRightVariant, staggerContainer } from '@/lib/animations'
import { timelineData } from '@/lib/story-data'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ImagePlaceholder } from '@/components/image-placeholder'

export function TimelineSection() {
  return (
    <motion.section
      id="timeline-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="w-full py-20 px-4 bg-[#0B1020]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#F3EDE2]"
          style={{ fontFamily: 'var(--caveat)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.h2>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
        {/* Timeline dot */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 rounded-full bg-[#FF4D6D] flex items-center justify-center flex-shrink-0 relative z-10 sketchy-border"
        >
          <div className="w-4 h-4 bg-[#0B1020] rounded-full" />
        </motion.div>

        {/* Content card with image */}
        <motion.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 40px rgba(255, 77, 109, 0.4)'
          }}
          className="flex-1"
        >
          {/* Image Placeholder with overflow */}
          <div className="mb-4">
            <ImagePlaceholder
              label={item.title}
              subtitle="Add a memory photo"
              borderStyle="pink"
              className="h-40 rounded-lg"
            />
          </div>

          {/* Text content */}
          <div className="p-6 md:p-8 bg-[#151B2E] rounded-lg sketchy-border-pink border-2 border-[#FF4D6D] border-opacity-50">
            <div className="text-3xl font-bold text-[#F6C177] mb-2">{item.year}</div>
            <h3 className="text-2xl font-bold text-[#FF4D6D] mb-2">{item.title}</h3>
            <p className="text-[#F3EDE2] text-lg">{item.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Connecting line */}
      {index < 4 && (
        <div className="absolute left-6 top-32 w-0.5 h-20 bg-gradient-to-b from-[#FF4D6D] to-transparent" />
      )}
    </motion.div>
  )
}
