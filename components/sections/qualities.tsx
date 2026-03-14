'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { qualitiesData } from '@/lib/story-data'
import { ImagePlaceholder } from '@/components/image-placeholder'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function QualitiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const next = () =>
    activeSlide < qualitiesData.length - 1 && setActiveSlide(activeSlide + 1)

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1)

  const getStyles = (index: number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: 'translateX(0px) translateZ(0px) rotateY(0deg)',
        zIndex: 10
      }
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: 'translateX(-280px) translateZ(-500px) rotateY(35deg)',
        zIndex: 9
      }
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: 'translateX(280px) translateZ(-500px) rotateY(-35deg)',
        zIndex: 9
      }
    else if (activeSlide - 2 === index)
      return {
        opacity: 0.7,
        transform: 'translateX(-560px) translateZ(-600px) rotateY(35deg)',
        zIndex: 8
      }
    else if (activeSlide + 2 === index)
      return {
        opacity: 0.7,
        transform: 'translateX(560px) translateZ(-600px) rotateY(-35deg)',
        zIndex: 8
      }
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: 'translateX(-560px) translateZ(-600px) rotateY(35deg)',
        zIndex: 7
      }
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: 'translateX(560px) translateZ(-600px) rotateY(-35deg)',
        zIndex: 7
      }
  }

  return (
    <motion.section
      className="w-full py-24 px-4 bg-gradient-to-b from-[#0B1020] to-[#151B2E]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-[#F3EDE2]"
          style={{ fontFamily: 'var(--caveat)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why I Love You
        </motion.h2>

        {/* 3D Carousel Container */}
        <div 
          className="relative h-96 flex items-center justify-center mx-auto mb-16" 
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            width: '100%'
          }}
        >
          {/* Cards in 3D carousel */}
          {qualitiesData.map((item, index) => {
            const styles = getStyles(index)
            return (
              <motion.div
                key={item.id}
                className="absolute w-72 h-80"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 500ms ease, opacity 500ms ease',
                  ...styles
                }}
              >
                {/* Card */}
                <div
                  className="w-full h-full p-6 bg-[#151B2E] rounded-2xl sketchy-border flex flex-col justify-between relative overflow-hidden"
                  style={{
                    boxShadow: `0 5px 25px ${item.bgColor}30, 0 20px 60px rgba(255, 77, 109, ${(styles?.opacity as number) * 0.4})`
                  }}
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF4D6D]/10 to-transparent rounded-full blur-2xl" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image Placeholder */}
                    <div className="mb-3 flex-shrink-0">
                      <ImagePlaceholder
                        label={item.quality}
                        subtitle="Add your memory"
                        borderStyle="pink"
                        className="h-24 rounded-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-[#FF4D6D] mb-2">{item.quality}</h3>
                        <p className="text-[#F3EDE2] text-sm leading-relaxed">{item.caption}</p>
                      </div>

                      {/* Decorative line */}
                      <div className="h-1 bg-gradient-to-r from-[#F6C177] to-transparent mt-3" />
                    </div>
                  </div>
                </div>

                {/* Reflection effect */}
                <div
                  className="absolute top-full left-0 w-full h-12 rounded-2xl"
                  style={{
                    background: `linear-gradient(to bottom, ${item.bgColor}20, transparent)`,
                    transition: 'transform 500ms ease, opacity 500ms ease',
                    transform: styles?.transform,
                    opacity: styles?.opacity,
                    zIndex: (styles?.zIndex as number) - 1
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8">
          <motion.button
            onClick={prev}
            disabled={activeSlide === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-[#FF4D6D] text-[#0B1020] hover:bg-[#F6C177] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="text-center min-w-40">
            <p className="text-[#8B6DFF] font-semibold text-lg">
              {activeSlide + 1} of {qualitiesData.length}
            </p>
          </div>

          <motion.button
            onClick={next}
            disabled={activeSlide === qualitiesData.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-[#FF4D6D] text-[#0B1020] hover:bg-[#F6C177] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}
