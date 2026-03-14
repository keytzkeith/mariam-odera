export const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
    },
  },
}

export const softStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const itemReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const panelReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const floatingLoop = (delay = 0) => ({
  y: [0, -10, 0, 6, 0],
  rotate: [0, 1.5, -1, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  },
})

export const starBurstTransition = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.24 },
  },
}

export const envelopeFlapVariant = {
  closed: {
    rotateX: 0,
    y: 0,
    transition: { duration: 0.8, ease: [0.34, 1.3, 0.64, 1] },
  },
  open: {
    rotateX: -178,
    y: -8,
    transition: { duration: 0.8, ease: [0.34, 1.3, 0.64, 1] },
  },
}

export const envelopeContentVariant = {
  closed: {
    y: 126,
    scale: 0.94,
    rotate: 0,
    opacity: 0.72,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
  open: {
    y: -118,
    scale: 1,
    rotate: -1.4,
    opacity: 1,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
}
