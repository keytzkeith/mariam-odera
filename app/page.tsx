'use client'

import { HeroSection } from '@/components/sections/hero'
import { TimelineSection } from '@/components/sections/timeline'
import { QualitiesSection } from '@/components/sections/qualities'
import { MemoriesSection } from '@/components/sections/memories'
import { LetterSection } from '@/components/sections/letter'
import { MusicToggle } from '@/components/music-toggle'
import { Confetti } from '@/components/confetti'
import { FloatingDoodles } from '@/components/floating-doodles'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#07111f]">
      <Confetti />
      <FloatingDoodles count={8} type="star" color="#F6C177" delay={0} />
      <FloatingDoodles count={4} type="sparkle" color="#67D9C7" delay={0.8} />

      <HeroSection />
      <TimelineSection />
      <QualitiesSection />
      <MemoriesSection />
      <LetterSection />

      <MusicToggle />
    </main>
  )
}
