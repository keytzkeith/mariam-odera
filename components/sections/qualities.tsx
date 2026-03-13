'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { qualitiesData } from '@/lib/story-data'

export function QualitiesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="w-full py-20 px-4 bg-gradient-to-b from-[#0B1020] to-[#151B2E]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#F3EDE2]"
          style={{ fontFamily: 'var(--caveat)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why I Love You
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualitiesData.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                scale: 1.08,
                rotateZ: 2,
                boxShadow: '0 0 40px rgba(255, 77, 109, 0.5)'
              }}
              className="p-8 bg-[#151B2E] rounded-xl sketchy-border group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D6D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="text-6xl mb-4 inline-block"
                >
                  {item.emoji}
                </motion.div>

                <h3 className="text-3xl font-bold text-[#FF4D6D] mb-3">{item.quality}</h3>
                <p className="text-[#F3EDE2] text-lg leading-relaxed">{item.caption}</p>

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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
