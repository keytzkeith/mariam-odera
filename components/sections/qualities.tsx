'use client'

import { motion } from 'framer-motion'
import { qualitiesData } from '@/lib/story-data'
import { ImagePlaceholder } from '@/components/image-placeholder'
import { use3DCarousel } from '@/hooks/use-3d-carousel'

export function QualitiesSection() {
  const { containerRef, transforms } = use3DCarousel(qualitiesData.length)

  return (
    <motion.section
      ref={containerRef}
      className="w-full py-40 px-4 bg-gradient-to-b from-[#0B1020] to-[#151B2E] relative"
      style={{ perspective: '1200px' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-32 text-[#F3EDE2]"
          style={{ fontFamily: 'var(--caveat)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why I Love You
        </motion.h2>

        {/* 3D Carousel Container */}
        <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          {/* Center point indicator (optional, for reference) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1 h-1 bg-[#FF4D6D]/20 rounded-full" />
          </div>

          {/* Cards rotating in 3D space */}
          {qualitiesData.map((item, index) => (
            <motion.div
              key={index}
              className="absolute w-80 h-auto"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                rotateY: transforms[index]?.rotateY || 0,
                rotateX: transforms[index]?.rotateX || 0,
                z: transforms[index]?.z || 0,
                opacity: transforms[index]?.opacity || 0.6
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div
                className="p-8 bg-[#151B2E] rounded-xl sketchy-border group relative overflow-hidden h-full flex flex-col"
                style={{
                  boxShadow: `0 20px 60px rgba(255, 77, 109, ${(transforms[index]?.opacity || 0.6) * 0.3})`
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D6D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Image Placeholder */}
                  <div className="mb-4 flex-shrink-0">
                    <ImagePlaceholder
                      label={item.quality}
                      subtitle="Add your memory"
                      borderStyle="pink"
                      className="h-32 rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-[#FF4D6D] mb-3">{item.quality}</h3>
                      <p className="text-[#F3EDE2] text-base leading-relaxed">{item.caption}</p>
                    </div>

                    {/* Decorative accent */}
                    <motion.div
                      animate={{ 
                        width: [0, 40, 40, 0],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3,
                        times: [0, 0.2, 0.8, 1]
                      }}
                      className="h-1 bg-gradient-to-r from-[#F6C177] to-transparent mt-4"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#8B6DFF] italic text-sm">Scroll to reveal all the reasons</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
